// index.js
import express from "express";
import { PrismaClient } from './generated/prisma/index.js';
import cors from "cors";

const app = express();
const prisma = new PrismaClient();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => res.send("Hello!!!"));

// ---------------------
// AUTH & USERS
// ---------------------

// Sign up
app.post("/signup", async (req, res) => {
  try {
    const { email, name, dob, gender, location, educationLevel, interests, skills } = req.body;
    if (!email) return res.status(400).json({ error: "Email is required" });

    const dobDate = dob ? new Date(dob).toISOString() : null;
    const interestsArray = typeof interests === "string" ? interests.split(",").map(i => i.trim()) : interests;
    const skillsArray = typeof skills === "string" ? skills.split(",").map(s => s.trim()) : skills;

    const user = await prisma.user.create({
      data: { email, name, dob: dobDate, gender, location, educationLevel, interests: interestsArray, skills: skillsArray },
    });

    res.json({ message: "User created successfully", user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

// Sign in
app.post("/signin", async (req, res) => {
  try {
    const { email } = req.body;
    console.log("hiiiiiiiiii");
    if (!email) return res.status(400).json({ error: "Email is required" });

    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) return res.status(404).json({ error: "User not found" });

    res.json({ message: "Signin successful", user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

// Create or update user (alternate endpoint)
app.post("/users", async (req, res) => {
  try {
    let { email, name, dob, gender, location, educationLevel, interests, skills } = req.body;
    if (!email) return res.status(400).json({ error: "Email is required" });

    if (dob) {
      const dateObj = new Date(dob);
      if (isNaN(dateObj.getTime())) return res.status(400).json({ error: "Invalid date format for dob" });
      dob = dateObj.toISOString();
    }

    if (typeof interests === "string") interests = interests.split(",").map(i => i.trim());
    if (typeof skills === "string") skills = skills.split(",").map(s => s.trim());

    const user = await prisma.user.create({ data: { email, name, dob, gender, location, educationLevel, interests, skills } });
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

// Get user profile
app.get("/users/me", async (req, res) => {
  try {
    const userId = 1; // replace with actual auth in production
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: { id: true, name: true, email: true, dob: true, gender: true, location: true, educationLevel: true, interests: true, skills: true },
    });
    if (!user) return res.status(404).json({ error: "User not found" });
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

// ---------------------
// ASSESSMENTS
// ---------------------

app.post("/assessments", async (req, res) => {
  try {
     
    const { userId,  score, strengths, weaknesses, stream } = req.body;
    if (!userId) return res.status(400).json({ error: "userId is required" });

    const assessment = await prisma.assessment.create({
      data: { userId: Number(userId), score, strengths, weaknesses, stream },
    });

    // Create a recommendation based on score (example logic)
    let careerId, courseId, collegeId;
    if (score >= 80) {
      careerId = 1; courseId = 1; collegeId = 1;
    } else {
      careerId = 2; courseId = 2; collegeId = 2;
    }

    const recommendation = await prisma.recommendation.create({
      data: { userId: Number(userId), careerId, courseId, collegeId, score: Number(score) },
    });

    res.json({ assessment, recommendation });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

// Get assessments by user
app.get("/quiz/result", async (req, res) => {
  try {
    const { userId } = req.query;
    if (!userId) return res.status(400).json({ error: "userId query parameter is required" });

    const assessments = await prisma.assessment.findMany({
      where: { userId: Number(userId) },
      select: { id: true, score: true, strengths: true, weaknesses: true, stream: true, createdAt: true }
    });

    res.json({ userId, assessments });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

// ---------------------
// CAREERS, COURSES, COLLEGES
// ---------------------

app.post("/careers", async (req, res) => {
  try {
    const { careerName, description, requiredSkills, requiredStream, futureScope } = req.body;
    const career = await prisma.career.create({ data: { careerName, description, requiredSkills, requiredStream, futureScope } });
    res.json(career);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

app.post("/courses", async (req, res) => {
  try {
    const { courseName, stream, duration, eligibility, careerId } = req.body;
    const course = await prisma.course.create({ data: { courseName, stream, duration, eligibility, careerId } });
    res.json(course);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

app.post("/colleges", async (req, res) => {
  try {
    const { collegeName, location, affiliation } = req.body;
    const college = await prisma.college.create({ data: { collegeName, location, affiliation } });
    res.json(college);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

app.get("/colleges", async (req, res) => {
  try {
    const colleges = await prisma.college.findMany({ include: { collegeCourses: { include: { course: true } } } });
    res.json(colleges);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

// Map college → courses
app.post("/college-courses", async (req, res) => {
  try {
    const { collegeId, courseId } = req.body;
    const mapping = await prisma.collegeCourse.create({ data: { collegeId, courseId } });
    res.json(mapping);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

// ---------------------
// SKILLS & MAPPING
// ---------------------

app.post("/skills", async (req, res) => {
  try {
    const { skillName } = req.body;
    const skill = await prisma.skill.create({ data: { skillName } });
    res.json(skill);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

app.post("/career-skills", async (req, res) => {
  try {
    const { careerId, skillId } = req.body;
    const mapping = await prisma.careerSkill.create({ data: { careerId, skillId } });
    res.json(mapping);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

app.post("/course-skills", async (req, res) => {
  try {
    const { courseId, skillId } = req.body;
    const mapping = await prisma.courseSkill.create({ data: { courseId, skillId } });
    res.json(mapping);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

// ---------------------
// RECOMMENDATIONS
// ---------------------

// Get recommendations by user
app.get("/recommendations/:userId", async (req, res) => {
  const { userId } = req.params;
  try {
    const user = await prisma.user.findUnique({ where: { id: Number(userId) }, include: { assessments: true } });
    if (!user) return res.status(404).json({ error: "User not found" });

    if (!user.assessments || user.assessments.length === 0) {
      return res.json({
        userId: user.id,
        name: user.name,
        recommendations: [{ title: "No Assessment Yet", description: "Complete the assessment to get personalized recommendations.", stream: "N/A", score: 0 }]
      });
    }

    const latestAssessment = user.assessments[user.assessments.length - 1];
    return res.json({
      userId: user.id,
      name: user.name,
      recommendations: [{
        title: `Recommended Stream: ${latestAssessment.stream || "Science"}`,
        description: "Based on your assessment, this stream matches your skills and interests.",
        stream: latestAssessment.stream,
        score: latestAssessment.score
      }]
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

// Generate recommendations dynamically
// Generate recommendations dynamically based on assessment + interests
// app.get("/generate-recommendations/:userId", async (req, res) => {
//   const { userId } = req.params;

//   try {
//     // Fetch user data along with assessments
//     const user = await prisma.user.findUnique({
//       where: { id: Number(userId) },
//       include: { assessments: true },
//     });

//     if (!user) return res.status(404).json({ error: "User not found" });

//     // Use the latest assessment if exists
//     const latestAssessment = user.assessments.length
//       ? user.assessments[user.assessments.length - 1]
//       : null;

//     // Fetch all careers with their skills and related courses
//     const careers = await prisma.career.findMany({
//       include: { careerSkills: { include: { skill: true } }, courses: true },
//     });

//     const recommendations = careers.map((career) => {
//       // 1️⃣ Stream match (based on assessment or education level)
//       let streamMatch = 0;
//       const careerStream = career.requiredStream || "";
//       const userStream = latestAssessment?.stream || user.educationLevel || "";
//       if (careerStream && userStream && careerStream.toLowerCase() === userStream.toLowerCase()) {
//         streamMatch = 1;
//       }

//       // 2️⃣ Skill match
//       const careerSkillNames = career.careerSkills.map((cs) => cs.skill.skillName);
//       const matchedSkills = user.skills.filter((s) => careerSkillNames.includes(s));
//       const skillScore = matchedSkills.length / (careerSkillNames.length || 1);

//       // 3️⃣ Interest match
//       let interestScore = 0;
//       if (user.interests && user.interests.length > 0) {
//         const interestMatches = user.interests.filter(
//           (i) => i && career.careerName.toLowerCase().includes(i.toLowerCase())
//         );
//         interestScore = interestMatches.length > 0 ? 1 : 0;
//       }

//       // 4️⃣ Assessment score influence (normalized to 0-1)
//       const assessmentScore = latestAssessment?.score ? latestAssessment.score / 100 : 0;

//       // 5️⃣ Weighted total score
//       const totalScore = Math.round(
//         (streamMatch * 0.25 + skillScore * 0.4 + interestScore * 0.15 + assessmentScore * 0.2) * 100
//       );

//       return {
//         careerId: career.id,
//         careerName: career.careerName,
//         matchedSkills,
//         score: totalScore,
//         reason: `Stream match: ${streamMatch}, Skills match: ${matchedSkills.length}/${careerSkillNames.length}, Interests match: ${interestScore}, Assessment: ${assessmentScore}`,
//       };
//     });

//     // Sort recommendations by score descending
//     recommendations.sort((a, b) => b.score - a.score);

//     res.json({ user: user.name, recommendations });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: error.message });
//   }
// });

app.get("/generate-recommendations/:userId", async (req, res) => {
  const { userId } = req.params;

  try {
    // 1. Fetch user data along with their assessments
    const user = await prisma.user.findUnique({
      where: { id: Number(userId) },
      include: { assessments: true },
    });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const latestAssessment = user.assessments.length
      ? user.assessments[user.assessments.length - 1]
      : null;

    // 2. Fetch all data needed for recommendations
    const allCareers = await prisma.career.findMany({
      include: { careerSkills: { include: { skill: true } } },
    });
    const allCourses = await prisma.course.findMany({
      include: { courseSkills: { include: { skill: true } }, collegeCourses: { include: { college: true } } },
    });
    const allColleges = await prisma.college.findMany({
      include: { collegeCourses: true }
    });

    // --- Recommendation Algorithm ---

    // A. Generate and save Career Recommendations
    const careerRecommendations = allCareers.map((career) => {
      // Stream match (based on assessment or education level)
      let streamMatch = 0;
      const careerStream = career.requiredStream || "";
      const userStream = latestAssessment?.stream || user.educationLevel || "";
      if (careerStream && userStream && careerStream.toLowerCase() === userStream.toLowerCase()) {
        streamMatch = 1;
      }

      // Skill match
      const careerSkillNames = career.careerSkills.map((cs) => cs.skill.skillName);
      const matchedSkills = user.skills.filter((s) => careerSkillNames.includes(s));
      const skillScore = matchedSkills.length / (careerSkillNames.length || 1);

      // Interest match
      let interestScore = 0;
      if (user.interests && user.interests.length > 0) {
        const interestMatches = user.interests.filter(
          (i) => i && career.careerName.toLowerCase().includes(i.toLowerCase())
        );
        interestScore = interestMatches.length > 0 ? 1 : 0;
      }

      // Assessment score influence
      const assessmentScore = latestAssessment?.score ? latestAssessment.score / 100 : 0;

      // Weighted total score
      const totalScore = Math.round(
        (streamMatch * 0.25 + skillScore * 0.4 + interestScore * 0.15 + assessmentScore * 0.2) * 100
      );

      return {
        careerId: career.id,
        score: totalScore,
        reason: `Stream match: ${streamMatch}, Skills match: ${matchedSkills.length}/${careerSkillNames.length}, Interests match: ${interestScore}, Assessment: ${assessmentScore}`,
      };
    });

    // Sort and take top 5 career recommendations
    const topCareers = careerRecommendations.sort((a, b) => b.score - a.score).slice(0, 5);
    
    // B. Generate and save Course Recommendations
    const courseRecommendations = allCourses.map((course) => {
      // 1️⃣ Stream match
      let streamMatch = 0;
      if (course.stream && latestAssessment?.stream && course.stream.toLowerCase() === latestAssessment.stream.toLowerCase()) {
        streamMatch = 1;
      }

      // 2️⃣ Skill match
      const courseSkillNames = course.courseSkills.map((cs) => cs.skill.skillName);
      const matchedSkills = user.skills.filter((s) => courseSkillNames.includes(s));
      const skillScore = matchedSkills.length / (courseSkillNames.length || 1);
      
      // 3️⃣ Career match (if course is related to a top-recommended career)
      const careerMatch = topCareers.some(c => c.careerId === course.careerId) ? 1 : 0;

      // Weighted total score for courses
      const totalScore = Math.round(
        (streamMatch * 0.4 + skillScore * 0.4 + careerMatch * 0.2) * 100
      );

      return {
        courseId: course.id,
        score: totalScore,
        reason: `Stream match: ${streamMatch}, Skills match: ${matchedSkills.length}/${courseSkillNames.length}, Career match: ${careerMatch}`,
      };
    });

    // Sort and take top 5 course recommendations
    const topCourses = courseRecommendations.sort((a, b) => b.score - a.score).slice(0, 5);
    
    // C. Generate and save College Recommendations
    const collegeRecommendations = allColleges.map((college) => {
      // 1️⃣ Course match (if college offers a top-recommended course)
      const courseMatch = topCourses.some(tc => college.collegeCourses.some(cc => cc.courseId === tc.courseId)) ? 1 : 0;
      
      // 2️⃣ Location match
      const locationMatch = (user.location && college.location && user.location.toLowerCase() === college.location.toLowerCase()) ? 1 : 0;
      
      // Weighted total score for colleges
      const totalScore = Math.round(
        (courseMatch * 0.8 + locationMatch * 0.2) * 100
      );

      return {
        collegeId: college.id,
        score: totalScore,
        reason: `Course match: ${courseMatch}, Location match: ${locationMatch}`,
      };
    });

    // Sort and take top 5 college recommendations
    const topColleges = collegeRecommendations.sort((a, b) => b.score - a.score).slice(0, 5);

    // --- Save Recommendations to Database ---
    
    // Delete any existing recommendations for the user to avoid duplicates on re-generation
    await prisma.recommendation.deleteMany({ where: { userId: Number(userId) } });

    // Create new records for top careers, courses, and colleges
    const allRecommendationsToSave = [
      ...topCareers.map(rec => ({ userId: Number(userId), careerId: rec.careerId, score: rec.score, reason: rec.reason })),
      ...topCourses.map(rec => ({ userId: Number(userId), courseId: rec.courseId, score: rec.score, reason: rec.reason })),
      ...topColleges.map(rec => ({ userId: Number(userId), collegeId: rec.collegeId, score: rec.score, reason: rec.reason })),
    ];
    
    await prisma.recommendation.createMany({
      data: allRecommendationsToSave,
    });

    // 3. Fetch all recommendations for the user with full details for the response
    const finalRecommendations = await prisma.recommendation.findMany({
      where: { userId: Number(userId) },
      include: {
        career: true,
        course: { include: { collegeCourses: { include: { college: true } } } },
        college: true,
      },
    });

    // 4. Organize and return the final response
    const responseData = {
      userId: user.id,
      name: user.name,
      careerRecommendations: finalRecommendations
        .filter(r => r.careerId !== null)
        .map(r => ({ ...r.career, score: r.score, reason: r.reason })),
      courseRecommendations: finalRecommendations
        .filter(r => r.courseId !== null)
        .map(r => ({ ...r.course, score: r.score, reason: r.reason, recommendedColleges: r.course.collegeCourses.map(cc => cc.college.collegeName) })),
      collegeRecommendations: finalRecommendations
        .filter(r => r.collegeId !== null)
        .map(r => ({ ...r.college, score: r.score, reason: r.reason })),
    };

    res.json(responseData);
  } catch (error) {
    console.error("Error generating recommendations:", error);
    res.status(500).json({ error: error.message });
  }
});

// Get recommendation mapping
app.get("/recommendation-mapping", async (req, res) => {
  try {
    const recommendations = await prisma.recommendation.findMany({
      include: { career: true, course: true, college: true }
    });

    const mapping = {};
    recommendations.forEach(rec => {
      const careerName = rec.career?.careerName || "Unknown Career";
      const courseName = rec.course?.courseName || "Unknown Course";
      const collegeName = rec.college?.collegeName || "Unknown College";

      if (!mapping[careerName]) mapping[careerName] = {};
      if (!mapping[careerName][courseName]) mapping[careerName][courseName] = new Set();
      if (collegeName) mapping[careerName][courseName].add(collegeName);
    });

    const finalMapping = {};
    for (const career in mapping) {
      finalMapping[career] = {};
      for (const course in mapping[career]) {
        finalMapping[career][course] = Array.from(mapping[career][course]);
      }
    }

    res.json(finalMapping);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

// Get all data (careers, courses, colleges)
app.get("/all-data", async (req, res) => {
  try {
    const careers = await prisma.career.findMany();
    const courses = await prisma.course.findMany();
    const colleges = await prisma.college.findMany();
    res.json({ careers, courses, colleges });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

// ---------------------
// SERVER
// ---------------------
app.listen(4000, () => console.log("Server running on http://localhost:4000"));
