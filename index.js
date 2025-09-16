// index.js
import express from "express"
import { PrismaClient } from './generated/prisma/index.js';
import bcrypt from "bcrypt";
import cors from "cors";


const app = express();
const prisma = new PrismaClient();

app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
    res.send("helloo!!!")
})

app.post("/signup", async (req, res) => {
    try {
        const { email, name, dob, gender, location, educationLevel, interests, skills } = req.body;

        if (!email) {
            return res.status(400).json({ error: "Email and password are required" });
        }

        // Hash password
        // const hashedPassword = await bcrypt.hash(password, 10);

        // Convert dob if provided
        const dobDate = dob ? new Date(dob).toISOString() : null;

        // Convert comma-separated strings to arrays
        const interestsArray = typeof interests === "string" ? interests.split(",").map(i => i.trim()) : interests;
        const skillsArray = typeof skills === "string" ? skills.split(",").map(s => s.trim()) : skills;

        const user = await prisma.user.create({
            data: {
                email,
                name,
                // password: hashedPassword,
                dob: dobDate,
                gender,
                location,
                educationLevel,
                interests: interestsArray,
                skills: skillsArray
            }
        });

        res.json({ message: "User created successfully", user });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
});
app.post("/signin", async (req, res) => {
    try {
        const { email } = req.body;

        if (!email) return res.status(400).json({ error: "Email and password are required" });

        const user = await prisma.user.findUnique({ where: { email } });
        if (!user) return res.status(404).json({ error: "User not found" });

        // const isMatch = await bcrypt.compare(password, user.password);
        // if (!isMatch) return res.status(401).json({ error: "Invalid credentials" });

        // Return user info (excluding password for security)
        const { ...userData } = user;

        res.json({ message: "Signin successful", user: userData });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
});

// app.post("/users", async (req, res) => {
//   try {
//     const { email, name, dob, gender, location, educationLevel, interests, skills } = req.body;
//     const user = await prisma.user.create({
//       data: { email, name, dob, gender, location, educationLevel, interests, skills }
//     });
//     res.json(user);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

app.post("/users", async (req, res) => {
    try {
        let { email, name, dob, gender, location, educationLevel, interests, skills } = req.body;

        if (!email) {
            return res.status(400).json({ error: "Email is required" });
        }

        // Convert dob string → Date
        // if (dob) {
        //   dob = new Date(dob);
        //   if (isNaN(dob)) {
        //     return res.status(400).json({ error: "Invalid date format for dob" });
        //   }
        // }
        if (dob) {
            const dateObj = new Date(dob);  // Convert string to Date
            if (isNaN(dateObj.getTime())) { // Check if valid date
                return res.status(400).json({ error: "Invalid date format for dob" });
            }
            dob = dateObj.toISOString(); // Convert to full ISO-8601 string for Prisma
        }


        // Convert comma-separated values → arrays
        if (typeof interests === "string") {
            interests = interests.split(",").map((i) => i.trim());
        }
        if (typeof skills === "string") {
            skills = skills.split(",").map((s) => s.trim());
        }

        const user = await prisma.user.create({
            data: {
                email,
                name,
                dob,
                gender,
                location,
                educationLevel,
                interests,
                skills
            }
        });

        res.json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
});

// app.post("/assessments", async (req, res) => {
//   try {

//     const { userId, score, strengths, weaknesses } = req.body;
//     const assessment = await prisma.assessment.create({
//       data: { userId,  score, strengths, weaknesses }
//     });
//     res.json(assessment);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });
app.post("/assessments", async (req, res) => {
  try {
    const { userId, score, strengths, weaknesses } = req.body;

    if (!userId) return res.status(400).json({ error: "userId is required" });

    // Create assessment
    const assessment = await prisma.assessment.create({
      data: { userId: Number(userId), score, strengths, weaknesses },
    });

    // Logic to determine recommendation based on score
    let careerId, courseId, collegeId;

    if (score >= 80) {
      careerId = 1; // Doctor
      courseId = 1; // MBBS
      collegeId = 1; // Government Medical College
    } else {
      careerId = 2; // Software Engineer
      courseId = 2; // B.Tech CS
      collegeId = 2; // MIET
    }

    // Create recommendation
    const recommendation = await prisma.recommendation.create({
      data: {
        userId: Number(userId),
        careerId,
        courseId,
        collegeId,
        score: Number(score),
      },
    });

    res.json({ assessment, recommendation });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

// GET quiz results by userId
app.get("/quiz/result", async (req, res) => {
    try {
        const { userId } = req.query;
        if (!userId) return res.status(400).json({ error: "userId query parameter is required" });

        const assessments = await prisma.assessment.findMany({
            where: { userId: Number(userId) },
            select: { id: true, score: true, strengths: true, weaknesses: true, createdAt: true }
        });
        console.log(assessments)
        res.json({ userId, assessments });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
});
app.post("/careers", async (req, res) => {
    try {
        const { careerName, description, requiredSkills, requiredStream, futureScope } = req.body;
        const career = await prisma.career.create({
            data: { careerName, description, requiredSkills, requiredStream, futureScope }
        });
        res.json(career);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
app.post("/courses", async (req, res) => {
    try {
        const { courseName, stream, duration, eligibility, careerId } = req.body;
        const course = await prisma.course.create({
            data: { courseName, stream, duration, eligibility, careerId }
        });
        res.json(course);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
app.post("/colleges", async (req, res) => {
    try {
        const { collegeName, location, affiliation } = req.body;
        const college = await prisma.college.create({
            data: { collegeName, location, affiliation }
        });
        res.json(college);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.get("/colleges", async (req, res) => {
    try {
        const colleges = await prisma.college.findMany({
            include: { collegeCourses: { include: { course: true } } }
        });
        console.log(colleges)
        res.json(colleges);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
});
app.post("/college-courses", async (req, res) => {
    try {
        const { collegeId, courseId } = req.body;
        const mapping = await prisma.collegeCourse.create({
            data: { collegeId, courseId }
        });
        res.json(mapping);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
app.post("/skills", async (req, res) => {
    try {
        const { skillName } = req.body;
        const skill = await prisma.skill.create({
            data: { skillName }
        });
        res.json(skill);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
app.post("/career-skills", async (req, res) => {
    try {
        const { careerId, skillId } = req.body;
        const mapping = await prisma.careerSkill.create({
            data: { careerId, skillId }
        });
        res.json(mapping);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
app.post("/course-skills", async (req, res) => {
    try {
        const { courseId, skillId } = req.body;
        const mapping = await prisma.courseSkill.create({
            data: { courseId, skillId }
        });
        res.json(mapping);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
// app.post("/recommendations", async (req, res) => {
//   try {
//     const { userId, careerId, courseId, collegeId, score } = req.body;
//     const recommendation = await prisma.recommendation.create({
//       data: { userId, careerId, courseId, collegeId, score }
//     });
//     res.json(recommendation);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });



app.get("/recommendations/:userId", async (req, res) => {
  const { userId } = req.params;

  try {
    // Fetch user along with their assessments
    const user = await prisma.user.findUnique({
      where: { id: Number(userId) },
      include: { assessments: true },
    });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // If user has no assessments, return a default recommendation card
    if (!user.assessments || user.assessments.length === 0) {
      return res.json({
        userId: user.id,
        name: user.name,
        recommendations: [
          {
            title: "No Assessment Yet",
            description: "Complete the assessment to get personalized career recommendations.",
            stream: "N/A",
            score: 0,
          },
        ],
      });
    }

    // Otherwise, return the latest assessment as recommendation
    const latestAssessment = user.assessments[user.assessments.length - 1];
    return res.json({
      userId: user.id,
      name: user.name,
      recommendations: [
        {
          title: `Recommended Stream: ${latestAssessment.stream || "Science"}`,
          description: "Based on your assessment, this stream matches your skills and interests.",
          stream: latestAssessment.stream,
          score: latestAssessment.score,
        },
      ],
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Something went wrong" });
  }
});

// Example: server listen
app.listen(4000, () => {
  console.log("Server running on http://localhost:4000");
});

app.get("/generate-recommendations/:userId", async (req, res) => {
    const { userId } = req.params;
    console.log(req)

    try {
        // Fetch user
        const user = await prisma.user.findUnique({
            where: { id: Number(userId) },
            include: { assessments: true }
        });
        if (!user) return res.status(404).json({ error: "User not found" });

        // Fetch all careers with their skills
        const careers = await prisma.career.findMany({
            include: { careerSkills: { include: { skill: true } }, courses: true }
        });

        const recommendations = [];

        // Iterate careers
        for (const career of careers) {
            // Match stream
            let streamMatch = 0;
            if (career.requiredStream && user.educationLevel && career.requiredStream === user.educationLevel) {
                streamMatch = 1;
            }

            // Match skills
            const careerSkillNames = career.careerSkills.map(cs => cs.skill.skillName);
            const matchedSkills = user.skills.filter(s => careerSkillNames.includes(s));
            const skillScore = matchedSkills.length / (careerSkillNames.length || 1);

            // Match interests
            const interestScore = user.interests.filter(i => i && career.careerName.toLowerCase().includes(i.toLowerCase())).length > 0 ? 1 : 0;

            // Compute overall score (weight: stream 0.3, skills 0.5, interest 0.2)
            const score = Math.round((streamMatch * 0.3 + skillScore * 0.5 + interestScore * 0.2) * 100);

            recommendations.push({
                careerId: career.id,
                score,
                matchedSkills,
                careerName: career.careerName
            });
        }

        // Sort by score descending
        recommendations.sort((a, b) => b.score - a.score);

        res.json({ user: user.name, recommendations });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
});
app.get("/recommendation-mapping", async (req, res) => {
    try {
        // Fetch all recommendations with related course, career, and college
        const recommendations = await prisma.recommendation.findMany({
            include: {
                career: true,
                course: true,
                college: true
            }
        });

        // Transform into a mapping structure
        const mapping = {};

        recommendations.forEach(rec => {
            const careerName = rec.career?.careerName || "Unknown Career";
            const courseName = rec.course?.courseName || "Unknown Course";
            const collegeName = rec.college?.collegeName || "Unknown College";

            if (!mapping[careerName]) {
                mapping[careerName] = {};
            }
            if (!mapping[careerName][courseName]) {
                mapping[careerName][courseName] = new Set();
            }
            if (collegeName) {
                mapping[careerName][courseName].add(collegeName);
            }
        });

        // Convert Sets to arrays
        const finalMapping = {};
        for (const career in mapping) {
            finalMapping[career] = {};
            for (const course in mapping[career]) {
                finalMapping[career][course] = Array.from(mapping[career][course]);
            }
        }
        console.log(finalMapping)

        res.json(finalMapping);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
});



// ====================
// GET /users/me → profile
// ====================
app.get("/users/me", async (req, res) => {
    try {
        const userId = 1; // replace with auth user id in real app
        const user = await prisma.user.findUnique({
            where: { id: userId },
            select: {
                id: true,
                name: true,
                email: true,
                dob: true,
                gender: true,
                location: true,
                educationLevel: true,
                interests: true,
                skills: true,
            },
        });

        if (!user) return res.status(404).json({ error: "User not found" });
        res.json(user);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Server error" });
    }
});

app.get("/all-data", async (req, res) => {
  try {
    const careers = await prisma.career.findMany();
    const courses = await prisma.course.findMany();
    const colleges = await prisma.college.findMany();

    console.log("Careers:", careers);
    console.log("Courses:", courses);
    console.log("Colleges:", colleges);

    res.json({ careers, courses, colleges });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

app.listen(4000, () => {
    console.log("Server running on http://localhost:4000");
});
