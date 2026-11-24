-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('ADMIN', 'TEACHER', 'STUDENT', 'GUARDIAN');

-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('MALE', 'FEMALE', 'OTHER');

-- CreateEnum
CREATE TYPE "AttendanceStatus" AS ENUM ('PRESENT', 'ABSENT', 'LATE', 'EXCUSED');

-- CreateEnum
CREATE TYPE "ResultStatus" AS ENUM ('PASS', 'FAIL', 'PENDING');

-- CreateEnum
CREATE TYPE "PromotionItemStatus" AS ENUM ('PROMOTED', 'RE_ENROLLED', 'FAILED', 'SKIPPED');

-- CreateEnum
CREATE TYPE "Weekday" AS ENUM ('SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY');

-- CreateTable
CREATE TABLE "User" (
    "id" UUID NOT NULL,
    "username" VARCHAR(50) NOT NULL,
    "email" VARCHAR(255),
    "passwordHash" VARCHAR(255) NOT NULL,
    "role" "UserRole" NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "lastLoginAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Student" (
    "id" UUID NOT NULL,
    "userId" UUID,
    "admissionNo" VARCHAR(50) NOT NULL,
    "firstName" VARCHAR(100) NOT NULL,
    "lastName" VARCHAR(100),
    "dateOfBirth" DATE,
    "gender" "Gender",
    "phone" VARCHAR(20),
    "address" TEXT,
    "admissionDate" DATE,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Student_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Guardian" (
    "id" UUID NOT NULL,
    "userId" UUID,
    "firstName" VARCHAR(100) NOT NULL,
    "lastName" VARCHAR(100),
    "phone" VARCHAR(20) NOT NULL,
    "email" VARCHAR(255),
    "address" TEXT,
    "occupation" VARCHAR(100),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Guardian_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StudentGuardian" (
    "studentId" UUID NOT NULL,
    "guardianId" UUID NOT NULL,
    "relationship" VARCHAR(50),
    "isPrimary" BOOLEAN NOT NULL DEFAULT false,
    "isEmergencyContact" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "StudentGuardian_pkey" PRIMARY KEY ("studentId","guardianId")
);

-- CreateTable
CREATE TABLE "Teacher" (
    "id" UUID NOT NULL,
    "userId" UUID,
    "employeeNo" VARCHAR(50) NOT NULL,
    "firstName" VARCHAR(100) NOT NULL,
    "lastName" VARCHAR(100),
    "phone" VARCHAR(20),
    "email" VARCHAR(255),
    "address" TEXT,
    "joiningDate" DATE,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Teacher_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AcademicYear" (
    "id" UUID NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "startDate" DATE NOT NULL,
    "endDate" DATE NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "AcademicYear_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Class" (
    "id" UUID NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "sortOrder" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Class_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Section" (
    "id" UUID NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "classId" UUID NOT NULL,
    "capacity" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Section_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Subject" (
    "id" UUID NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "code" VARCHAR(30) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Subject_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ClassSubject" (
    "id" UUID NOT NULL,
    "academicYearId" UUID NOT NULL,
    "classId" UUID NOT NULL,
    "subjectId" UUID NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ClassSubject_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Enrollment" (
    "id" UUID NOT NULL,
    "studentId" UUID NOT NULL,
    "academicYearId" UUID NOT NULL,
    "sectionId" UUID NOT NULL,
    "enrolledAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Enrollment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TeacherAssignment" (
    "id" UUID NOT NULL,
    "teacherId" UUID NOT NULL,
    "classSubjectId" UUID NOT NULL,
    "sectionId" UUID NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "TeacherAssignment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Period" (
    "id" UUID NOT NULL,
    "name" VARCHAR(30) NOT NULL,
    "startTime" TIME NOT NULL,
    "endTime" TIME NOT NULL,
    "sortOrder" INTEGER NOT NULL,
    "isBreak" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Period_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TimetableEntry" (
    "id" UUID NOT NULL,
    "sectionId" UUID NOT NULL,
    "assignmentId" UUID NOT NULL,
    "periodId" UUID NOT NULL,
    "weekday" "Weekday" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TimetableEntry_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Attendance" (
    "id" UUID NOT NULL,
    "enrollmentId" UUID NOT NULL,
    "attendanceDate" DATE NOT NULL,
    "status" "AttendanceStatus" NOT NULL,
    "remarks" TEXT,
    "submittedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Attendance_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Examination" (
    "id" UUID NOT NULL,
    "academicYearId" UUID NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "startDate" DATE,
    "endDate" DATE,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Examination_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ExaminationClass" (
    "id" UUID NOT NULL,
    "examinationId" UUID NOT NULL,
    "classId" UUID NOT NULL,

    CONSTRAINT "ExaminationClass_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ExaminationSubject" (
    "id" UUID NOT NULL,
    "examinationClassId" UUID NOT NULL,
    "subjectId" UUID NOT NULL,
    "maxMarks" DECIMAL(7,2) NOT NULL,
    "passMarks" DECIMAL(7,2),
    "isOptional" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "ExaminationSubject_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StudentMark" (
    "id" UUID NOT NULL,
    "enrollmentId" UUID NOT NULL,
    "examinationSubjectId" UUID NOT NULL,
    "obtainedMarks" DECIMAL(7,2) NOT NULL,
    "remarks" TEXT,
    "enteredAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "StudentMark_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AnnualResult" (
    "id" UUID NOT NULL,
    "enrollmentId" UUID NOT NULL,
    "totalMarks" DECIMAL(10,2),
    "averagePercentage" DECIMAL(5,2),
    "finalStatus" "ResultStatus" NOT NULL DEFAULT 'PENDING',
    "calculatedAt" TIMESTAMP(3),
    "calculationVersion" VARCHAR(30),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "AnnualResult_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PromotionBatch" (
    "id" UUID NOT NULL,
    "academicYearId" UUID NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdById" UUID NOT NULL,
    "notes" TEXT,

    CONSTRAINT "PromotionBatch_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PromotionBatchItem" (
    "id" UUID NOT NULL,
    "batchId" UUID NOT NULL,
    "sourceEnrollmentId" UUID NOT NULL,
    "targetEnrollmentId" UUID,
    "status" "PromotionItemStatus" NOT NULL,
    "processedAt" TIMESTAMP(3),
    "message" TEXT,

    CONSTRAINT "PromotionBatchItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Announcement" (
    "id" UUID NOT NULL,
    "title" VARCHAR(200) NOT NULL,
    "content" TEXT NOT NULL,
    "createdById" UUID NOT NULL,
    "publishedAt" TIMESTAMP(3),
    "expiresAt" TIMESTAMP(3),
    "isPublished" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Announcement_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AnnouncementRoleAudience" (
    "announcementId" UUID NOT NULL,
    "role" "UserRole" NOT NULL,

    CONSTRAINT "AnnouncementRoleAudience_pkey" PRIMARY KEY ("announcementId","role")
);

-- CreateTable
CREATE TABLE "AnnouncementClassAudience" (
    "announcementId" UUID NOT NULL,
    "sectionId" UUID NOT NULL,

    CONSTRAINT "AnnouncementClassAudience_pkey" PRIMARY KEY ("announcementId","sectionId")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE INDEX "User_role_idx" ON "User"("role");

-- CreateIndex
CREATE INDEX "User_isActive_idx" ON "User"("isActive");

-- CreateIndex
CREATE UNIQUE INDEX "Student_userId_key" ON "Student"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Student_admissionNo_key" ON "Student"("admissionNo");

-- CreateIndex
CREATE INDEX "Student_firstName_lastName_idx" ON "Student"("firstName", "lastName");

-- CreateIndex
CREATE UNIQUE INDEX "Guardian_userId_key" ON "Guardian"("userId");

-- CreateIndex
CREATE INDEX "StudentGuardian_guardianId_idx" ON "StudentGuardian"("guardianId");

-- CreateIndex
CREATE UNIQUE INDEX "Teacher_userId_key" ON "Teacher"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Teacher_employeeNo_key" ON "Teacher"("employeeNo");

-- CreateIndex
CREATE INDEX "Teacher_isActive_idx" ON "Teacher"("isActive");

-- CreateIndex
CREATE UNIQUE INDEX "AcademicYear_name_key" ON "AcademicYear"("name");

-- CreateIndex
CREATE INDEX "AcademicYear_isActive_idx" ON "AcademicYear"("isActive");

-- CreateIndex
CREATE UNIQUE INDEX "Class_name_key" ON "Class"("name");

-- CreateIndex
CREATE INDEX "Class_sortOrder_idx" ON "Class"("sortOrder");

-- CreateIndex
CREATE INDEX "Section_classId_idx" ON "Section"("classId");

-- CreateIndex
CREATE UNIQUE INDEX "Section_classId_name_key" ON "Section"("classId", "name");

-- CreateIndex
CREATE UNIQUE INDEX "Subject_name_key" ON "Subject"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Subject_code_key" ON "Subject"("code");

-- CreateIndex
CREATE INDEX "ClassSubject_classId_academicYearId_idx" ON "ClassSubject"("classId", "academicYearId");

-- CreateIndex
CREATE INDEX "ClassSubject_subjectId_idx" ON "ClassSubject"("subjectId");

-- CreateIndex
CREATE UNIQUE INDEX "ClassSubject_academicYearId_classId_subjectId_key" ON "ClassSubject"("academicYearId", "classId", "subjectId");

-- CreateIndex
CREATE INDEX "Enrollment_academicYearId_sectionId_idx" ON "Enrollment"("academicYearId", "sectionId");

-- CreateIndex
CREATE INDEX "Enrollment_studentId_idx" ON "Enrollment"("studentId");

-- CreateIndex
CREATE UNIQUE INDEX "Enrollment_studentId_academicYearId_key" ON "Enrollment"("studentId", "academicYearId");

-- CreateIndex
CREATE INDEX "TeacherAssignment_teacherId_idx" ON "TeacherAssignment"("teacherId");

-- CreateIndex
CREATE INDEX "TeacherAssignment_sectionId_idx" ON "TeacherAssignment"("sectionId");

-- CreateIndex
CREATE UNIQUE INDEX "TeacherAssignment_sectionId_classSubjectId_key" ON "TeacherAssignment"("sectionId", "classSubjectId");

-- CreateIndex
CREATE UNIQUE INDEX "Period_name_key" ON "Period"("name");

-- CreateIndex
CREATE INDEX "Period_sortOrder_idx" ON "Period"("sortOrder");

-- CreateIndex
CREATE INDEX "TimetableEntry_assignmentId_idx" ON "TimetableEntry"("assignmentId");

-- CreateIndex
CREATE INDEX "TimetableEntry_weekday_periodId_idx" ON "TimetableEntry"("weekday", "periodId");

-- CreateIndex
CREATE UNIQUE INDEX "TimetableEntry_sectionId_weekday_periodId_key" ON "TimetableEntry"("sectionId", "weekday", "periodId");

-- CreateIndex
CREATE INDEX "Attendance_attendanceDate_status_idx" ON "Attendance"("attendanceDate", "status");

-- CreateIndex
CREATE UNIQUE INDEX "Attendance_enrollmentId_attendanceDate_key" ON "Attendance"("enrollmentId", "attendanceDate");

-- CreateIndex
CREATE INDEX "Examination_academicYearId_idx" ON "Examination"("academicYearId");

-- CreateIndex
CREATE UNIQUE INDEX "Examination_academicYearId_name_key" ON "Examination"("academicYearId", "name");

-- CreateIndex
CREATE INDEX "ExaminationClass_classId_idx" ON "ExaminationClass"("classId");

-- CreateIndex
CREATE UNIQUE INDEX "ExaminationClass_examinationId_classId_key" ON "ExaminationClass"("examinationId", "classId");

-- CreateIndex
CREATE INDEX "ExaminationSubject_subjectId_idx" ON "ExaminationSubject"("subjectId");

-- CreateIndex
CREATE UNIQUE INDEX "ExaminationSubject_examinationClassId_subjectId_key" ON "ExaminationSubject"("examinationClassId", "subjectId");

-- CreateIndex
CREATE INDEX "StudentMark_examinationSubjectId_idx" ON "StudentMark"("examinationSubjectId");

-- CreateIndex
CREATE UNIQUE INDEX "StudentMark_enrollmentId_examinationSubjectId_key" ON "StudentMark"("enrollmentId", "examinationSubjectId");

-- CreateIndex
CREATE UNIQUE INDEX "AnnualResult_enrollmentId_key" ON "AnnualResult"("enrollmentId");

-- CreateIndex
CREATE INDEX "PromotionBatch_academicYearId_idx" ON "PromotionBatch"("academicYearId");

-- CreateIndex
CREATE UNIQUE INDEX "PromotionBatchItem_targetEnrollmentId_key" ON "PromotionBatchItem"("targetEnrollmentId");

-- CreateIndex
CREATE INDEX "PromotionBatchItem_status_idx" ON "PromotionBatchItem"("status");

-- CreateIndex
CREATE UNIQUE INDEX "PromotionBatchItem_batchId_sourceEnrollmentId_key" ON "PromotionBatchItem"("batchId", "sourceEnrollmentId");

-- CreateIndex
CREATE INDEX "Announcement_isPublished_publishedAt_idx" ON "Announcement"("isPublished", "publishedAt");

-- AddForeignKey
ALTER TABLE "Student" ADD CONSTRAINT "Student_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Guardian" ADD CONSTRAINT "Guardian_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StudentGuardian" ADD CONSTRAINT "StudentGuardian_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Student"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StudentGuardian" ADD CONSTRAINT "StudentGuardian_guardianId_fkey" FOREIGN KEY ("guardianId") REFERENCES "Guardian"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Teacher" ADD CONSTRAINT "Teacher_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Section" ADD CONSTRAINT "Section_classId_fkey" FOREIGN KEY ("classId") REFERENCES "Class"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ClassSubject" ADD CONSTRAINT "ClassSubject_academicYearId_fkey" FOREIGN KEY ("academicYearId") REFERENCES "AcademicYear"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ClassSubject" ADD CONSTRAINT "ClassSubject_classId_fkey" FOREIGN KEY ("classId") REFERENCES "Class"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ClassSubject" ADD CONSTRAINT "ClassSubject_subjectId_fkey" FOREIGN KEY ("subjectId") REFERENCES "Subject"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Enrollment" ADD CONSTRAINT "Enrollment_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Student"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Enrollment" ADD CONSTRAINT "Enrollment_academicYearId_fkey" FOREIGN KEY ("academicYearId") REFERENCES "AcademicYear"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Enrollment" ADD CONSTRAINT "Enrollment_sectionId_fkey" FOREIGN KEY ("sectionId") REFERENCES "Section"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TeacherAssignment" ADD CONSTRAINT "TeacherAssignment_teacherId_fkey" FOREIGN KEY ("teacherId") REFERENCES "Teacher"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TeacherAssignment" ADD CONSTRAINT "TeacherAssignment_classSubjectId_fkey" FOREIGN KEY ("classSubjectId") REFERENCES "ClassSubject"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TeacherAssignment" ADD CONSTRAINT "TeacherAssignment_sectionId_fkey" FOREIGN KEY ("sectionId") REFERENCES "Section"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TimetableEntry" ADD CONSTRAINT "TimetableEntry_sectionId_fkey" FOREIGN KEY ("sectionId") REFERENCES "Section"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TimetableEntry" ADD CONSTRAINT "TimetableEntry_assignmentId_fkey" FOREIGN KEY ("assignmentId") REFERENCES "TeacherAssignment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TimetableEntry" ADD CONSTRAINT "TimetableEntry_periodId_fkey" FOREIGN KEY ("periodId") REFERENCES "Period"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Attendance" ADD CONSTRAINT "Attendance_enrollmentId_fkey" FOREIGN KEY ("enrollmentId") REFERENCES "Enrollment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Examination" ADD CONSTRAINT "Examination_academicYearId_fkey" FOREIGN KEY ("academicYearId") REFERENCES "AcademicYear"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExaminationClass" ADD CONSTRAINT "ExaminationClass_examinationId_fkey" FOREIGN KEY ("examinationId") REFERENCES "Examination"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExaminationClass" ADD CONSTRAINT "ExaminationClass_classId_fkey" FOREIGN KEY ("classId") REFERENCES "Class"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExaminationSubject" ADD CONSTRAINT "ExaminationSubject_examinationClassId_fkey" FOREIGN KEY ("examinationClassId") REFERENCES "ExaminationClass"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExaminationSubject" ADD CONSTRAINT "ExaminationSubject_subjectId_fkey" FOREIGN KEY ("subjectId") REFERENCES "Subject"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StudentMark" ADD CONSTRAINT "StudentMark_enrollmentId_fkey" FOREIGN KEY ("enrollmentId") REFERENCES "Enrollment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StudentMark" ADD CONSTRAINT "StudentMark_examinationSubjectId_fkey" FOREIGN KEY ("examinationSubjectId") REFERENCES "ExaminationSubject"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AnnualResult" ADD CONSTRAINT "AnnualResult_enrollmentId_fkey" FOREIGN KEY ("enrollmentId") REFERENCES "Enrollment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PromotionBatch" ADD CONSTRAINT "PromotionBatch_academicYearId_fkey" FOREIGN KEY ("academicYearId") REFERENCES "AcademicYear"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PromotionBatchItem" ADD CONSTRAINT "PromotionBatchItem_batchId_fkey" FOREIGN KEY ("batchId") REFERENCES "PromotionBatch"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PromotionBatchItem" ADD CONSTRAINT "PromotionBatchItem_sourceEnrollmentId_fkey" FOREIGN KEY ("sourceEnrollmentId") REFERENCES "Enrollment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PromotionBatchItem" ADD CONSTRAINT "PromotionBatchItem_targetEnrollmentId_fkey" FOREIGN KEY ("targetEnrollmentId") REFERENCES "Enrollment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Announcement" ADD CONSTRAINT "Announcement_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AnnouncementRoleAudience" ADD CONSTRAINT "AnnouncementRoleAudience_announcementId_fkey" FOREIGN KEY ("announcementId") REFERENCES "Announcement"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AnnouncementClassAudience" ADD CONSTRAINT "AnnouncementClassAudience_announcementId_fkey" FOREIGN KEY ("announcementId") REFERENCES "Announcement"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AnnouncementClassAudience" ADD CONSTRAINT "AnnouncementClassAudience_sectionId_fkey" FOREIGN KEY ("sectionId") REFERENCES "Section"("id") ON DELETE CASCADE ON UPDATE CASCADE;
