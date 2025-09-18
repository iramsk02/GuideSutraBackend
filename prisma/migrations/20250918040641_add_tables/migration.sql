-- CreateTable
CREATE TABLE "public"."User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "dob" TIMESTAMP(3),
    "educationLevel" TEXT,
    "gender" TEXT,
    "interests" TEXT[],
    "location" TEXT,
    "skills" TEXT[],

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Assessment" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "testType" TEXT,
    "score" DOUBLE PRECISION,
    "stream" TEXT,
    "strengths" TEXT[],
    "weaknesses" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Assessment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Career" (
    "id" SERIAL NOT NULL,
    "careerName" TEXT NOT NULL,
    "description" TEXT,
    "requiredSkills" TEXT[],
    "requiredStream" TEXT,
    "futureScope" TEXT,

    CONSTRAINT "Career_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Course" (
    "id" SERIAL NOT NULL,
    "courseName" TEXT NOT NULL,
    "stream" TEXT,
    "duration" TEXT,
    "eligibility" TEXT,
    "careerId" INTEGER,

    CONSTRAINT "Course_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."College" (
    "id" SERIAL NOT NULL,
    "collegeName" TEXT NOT NULL,
    "location" TEXT,
    "affiliation" TEXT,

    CONSTRAINT "College_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."CollegeCourse" (
    "id" SERIAL NOT NULL,
    "collegeId" INTEGER NOT NULL,
    "courseId" INTEGER NOT NULL,

    CONSTRAINT "CollegeCourse_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Skill" (
    "id" SERIAL NOT NULL,
    "skillName" TEXT NOT NULL,

    CONSTRAINT "Skill_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."CareerSkill" (
    "id" SERIAL NOT NULL,
    "careerId" INTEGER NOT NULL,
    "skillId" INTEGER NOT NULL,

    CONSTRAINT "CareerSkill_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."CourseSkill" (
    "id" SERIAL NOT NULL,
    "courseId" INTEGER NOT NULL,
    "skillId" INTEGER NOT NULL,

    CONSTRAINT "CourseSkill_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Recommendation" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "careerId" INTEGER,
    "courseId" INTEGER,
    "collegeId" INTEGER,
    "score" DOUBLE PRECISION,
    "reason" TEXT,
    "recommendedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Recommendation_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "public"."User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Career_careerName_key" ON "public"."Career"("careerName");

-- CreateIndex
CREATE UNIQUE INDEX "Course_courseName_key" ON "public"."Course"("courseName");

-- CreateIndex
CREATE UNIQUE INDEX "CollegeCourse_collegeId_courseId_key" ON "public"."CollegeCourse"("collegeId", "courseId");

-- CreateIndex
CREATE UNIQUE INDEX "Skill_skillName_key" ON "public"."Skill"("skillName");

-- CreateIndex
CREATE UNIQUE INDEX "CareerSkill_careerId_skillId_key" ON "public"."CareerSkill"("careerId", "skillId");

-- CreateIndex
CREATE UNIQUE INDEX "CourseSkill_courseId_skillId_key" ON "public"."CourseSkill"("courseId", "skillId");

-- AddForeignKey
ALTER TABLE "public"."Assessment" ADD CONSTRAINT "Assessment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Course" ADD CONSTRAINT "Course_careerId_fkey" FOREIGN KEY ("careerId") REFERENCES "public"."Career"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."CollegeCourse" ADD CONSTRAINT "CollegeCourse_collegeId_fkey" FOREIGN KEY ("collegeId") REFERENCES "public"."College"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."CollegeCourse" ADD CONSTRAINT "CollegeCourse_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "public"."Course"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."CareerSkill" ADD CONSTRAINT "CareerSkill_careerId_fkey" FOREIGN KEY ("careerId") REFERENCES "public"."Career"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."CareerSkill" ADD CONSTRAINT "CareerSkill_skillId_fkey" FOREIGN KEY ("skillId") REFERENCES "public"."Skill"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."CourseSkill" ADD CONSTRAINT "CourseSkill_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "public"."Course"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."CourseSkill" ADD CONSTRAINT "CourseSkill_skillId_fkey" FOREIGN KEY ("skillId") REFERENCES "public"."Skill"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Recommendation" ADD CONSTRAINT "Recommendation_careerId_fkey" FOREIGN KEY ("careerId") REFERENCES "public"."Career"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Recommendation" ADD CONSTRAINT "Recommendation_collegeId_fkey" FOREIGN KEY ("collegeId") REFERENCES "public"."College"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Recommendation" ADD CONSTRAINT "Recommendation_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "public"."Course"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Recommendation" ADD CONSTRAINT "Recommendation_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
