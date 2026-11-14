# Schoolex
## Product Requirements Document (PRD)

**Document Version:** 0.1 — Initial Draft  
**Product Name:** Schoolex  
**Product Type:** Web-based School Management System  
**Deployment Model:** Single-school application  
**Document Status:** Draft — Under Review

---

# 1. Product Overview

### 1.1 Introduction

Schoolex is a web-based School Management System designed to digitize and simplify the administrative, academic, and operational activities of a single educational institution.

The system will provide a centralized platform for managing students, guardians, teachers, academic classes, attendance, examinations, fees, and other school-related operations.

It aims to reduce manual paperwork, minimize administrative errors, improve communication, and make school information accessible to authorized users.

### 1.2 Product Vision

To provide a reliable, user-friendly, and centralized digital platform that simplifies school administration and improves academic management.

### 1.3 Problem Statement

Many educational institutions rely on manual processes, spreadsheets, and disconnected systems to manage their daily operations.

These approaches can create several problems:

- Student and guardian information is scattered across different records.
- Updating and maintaining student information requires manual effort.
- Attendance tracking and reporting are time-consuming.
- Academic records are difficult to organize and retrieve.
- Communication between teachers, administrators, students, and guardians can be inefficient.
- Generating reports requires considerable manual work.
- Information may become inconsistent or duplicated.

Schoolex aims to address these problems through a centralized management system.

---

# 2. Product Goals and Objectives

The primary goals of Schoolex are:

1. Centralize student, guardian, teacher, and academic information.
2. Digitize student admission and registration processes.
3. Simplify classroom, section, and subject management.
4. Provide an efficient student and teacher attendance system.
5. Maintain organized academic and examination records.
6. Simplify school fee management and payment tracking.
7. Provide role-based access to relevant information and functionality.
8. Generate useful administrative and academic reports.
9. Provide a maintainable and extensible software architecture.

### 2.1 Success Criteria

The product will be considered successful when:

- Administrators can manage essential school records digitally.
- Teachers can perform their assigned academic activities.
- Student information can be retrieved and updated efficiently.
- Attendance can be recorded and reviewed digitally.
- Academic and administrative reports can be generated.
- Unauthorized users cannot access restricted information.
- The application operates reliably during normal school activities.

---

# 3. Target Users and User Roles

Schoolex will support different user roles. Each role will have specific permissions and responsibilities.

### 3.1 School Administrator

The administrator manages the overall system and school operations.

Responsibilities:
- Manage students and guardians.
- Manage teachers and staff.
- Manage academic classes, sections, and subjects.
- Manage user accounts and permissions.
- Monitor school activities.
- Access administrative reports.
- Configure school settings.

### 3.2 Teacher

Teachers use the system to manage their assigned academic responsibilities.

Responsibilities:
- View assigned classes and subjects.
- View student information for assigned classes.
- Record student attendance.
- Access relevant academic records.
- Enter examination marks, if authorized.
- View academic schedules.

### 3.3 Student

Students can access their own academic information.

Potential responsibilities:
- View personal profile.
- View attendance records.
- View examination results.
- View class schedules.
- View school announcements.

### 3.4 Guardian

Guardians can access information about their associated students.

Potential responsibilities:
- View student profiles.
- Monitor attendance.
- View examination results.
- View fee information.
- Receive school announcements.

### 3.5 Accountant

The accountant manages financial operations.

Responsibilities:
- Manage student fee records.
- Record payments.
- Track outstanding balances.
- Generate financial reports.
- View payment histories.

**Note:** Final permissions and role availability will be defined during requirements refinement.

---

# 4. Functional Modules

The following modules are proposed for Schoolex.

## 4.1 Authentication and User Management

Purpose: Manage application users and control access to the system.

Features:
- User login and logout.
- Password management.
- User account creation.
- User account activation and deactivation.
- Role-based access control (RBAC).
- Password reset.
- User profile management.

## 4.2 Student Management

Purpose: Maintain complete student information throughout their enrollment.

Features:
- Register new students.
- Generate or assign unique student IDs.
- View student lists.
- Search and filter students.
- View individual student profiles.
- Update student information.
- Manage student photographs and documents.
- Manage student status.
- View student academic history.

Possible student information:
- Student ID.
- Full name.
- Date of birth.
- Gender.
- Contact information.
- Present and permanent addresses.
- Admission date.
- Blood group (if required).
- Previous educational information.
- Associated guardians.
- Current enrollment information.

## 4.3 Guardian Management

Purpose: Maintain guardian information and associate guardians with students.

Features:
- Register guardians.
- Update guardian information.
- View guardian profiles.
- Associate multiple guardians with a student.
- Associate one guardian with multiple students.
- Manage guardian contact information.
- Identify primary and emergency contacts.

Possible guardian information:
- Full name.
- Relationship with student.
- Phone number.
- Email address.
- Address.
- Occupation (optional).

## 4.4 Teacher and Staff Management

Purpose: Maintain teacher and staff records.

Features:
- Register teachers and staff.
- Manage personal information.
- Manage contact information.
- Store employment information.
- Assign teachers to classes and subjects.
- View teacher profiles.
- Manage employment status.

## 4.5 Academic Management

Purpose: Organize the school's academic structure.

Features:
- Manage academic years.
- Manage classes or grades.
- Manage sections.
- Manage subjects.
- Assign class teachers.
- Assign subject teachers.
- Manage student enrollment.
- Manage class schedules.

## 4.6 Attendance Management

Purpose: Record and monitor student and teacher attendance.

Features:
- Record daily student attendance.
- Record teacher attendance.
- View attendance records.
- Update attendance where authorized.
- Generate attendance summaries.
- Filter attendance by date, class, and student.
- Identify absent students.
- Generate attendance reports.

Potential attendance statuses:
- Present.
- Absent.
- Late.
- Excused.

## 4.7 Examination and Result Management

Purpose: Manage examinations and student academic performance.

Features:
- Create examination records.
- Configure examination schedules.
- Manage subjects and assessment structures.
- Enter student marks.
- Calculate grades.
- Generate student results.
- Generate report cards.
- View examination history.

## 4.8 Fee and Payment Management

Purpose: Manage student fees and financial transactions.

Features:
- Define fee categories.
- Assign fees to students.
- Record student payments.
- Track outstanding balances.
- Maintain payment histories.
- Generate payment receipts.
- Generate financial reports.

## 4.9 Communication and Announcements

Purpose: Improve communication between school administration, teachers, students, and guardians.

Features:
- Publish school announcements.
- Share notices.
- Display relevant notifications.
- Provide role-specific announcements.
- Maintain announcement history.

## 4.10 Dashboard and Reporting

Purpose: Provide useful information about school operations.

Administrator dashboard:
- Total students.
- Total teachers and staff.
- Total classes and sections.
- Daily attendance summary.
- Admission statistics.
- Fee collection summary.

Teacher dashboard:
- Assigned classes.
- Assigned subjects.
- Daily attendance activities.
- Relevant announcements.

Student dashboard:
- Personal academic information.
- Attendance summary.
- Examination results.
- Announcements.

Guardian dashboard:
- Associated students.
- Attendance summaries.
- Academic performance.
- Fee information.

---

# 5. MVP Scope — Version 1.0

Schoolex will initially focus on essential school management functionalities.

### 5.1 Proposed MVP Modules

| Module | Priority |
|---|---|
| Authentication and User Management | Must Have |
| Student Management | Must Have |
| Guardian Management | Must Have |
| Teacher Management | Must Have |
| Class and Section Management | Must Have |
| Subject Management | Must Have |
| Student Enrollment | Must Have |
| Student Attendance | Must Have |
| Teacher Attendance | Should Have |
| Examination and Results | Should Have |
| Fee Management | Should Have |
| Dashboard and Reports | Must Have |
| Communication and Announcements | Should Have |

### 5.2 Features Outside Initial MVP

The following features may be considered for future versions:

- Online admission applications.
- Parent mobile application.
- Student mobile application.
- Online payment gateway integration.
- SMS notifications.
- Email notifications.
- Library management.
- Exam evaluation with AI
- Exam Hall monitoring with CV-AI
- Payroll management.
- Advanced analytics.
- AI-powered academic insights.

These features are not commitments for the first release.

---

# 6. Non-Functional Requirements

Non-functional requirements define the quality and operational expectations of Schoolex.

### 6.1 Security
- Passwords must be securely hashed.
- The system must enforce role-based authorization.
- Users must not access unauthorized information.
- Sensitive information must be protected.
- Important administrative actions should be auditable.

### 6.2 Performance
- Common operations should respond within reasonable time limits.
- Database queries should be optimized.
- The system should support concurrent users during normal school operations.
- Large lists should support pagination and filtering.

### 6.3 Reliability
- The application should remain available during normal school operating hours.
- Failed operations should not leave inconsistent records.
- Important transactions should be handled safely.

### 6.4 Maintainability
- The application should use a modular architecture.
- Code should follow consistent development standards.
- Database changes should use version-controlled migrations.
- API documentation should remain synchronized with implementation.

### 6.5 Usability
- The interface should be easy to understand.
- Common administrative operations should require minimal steps.
- The application should be responsive across desktop, tablet, and mobile screens.
- Forms should provide clear validation messages.

---

# 7. Business Rules and Constraints

The following are initial business rules proposed for Schoolex:

1. Every student must have a unique student identifier within the school.
2. A student can be associated with multiple guardians.
3. A guardian can be associated with multiple students.
4. Each student must have an enrollment record to participate in a particular academic year and class.
5. A student may have historical enrollment records from previous academic years.
6. Attendance records must be associated with a student, date, and relevant class or enrollment.
7. Duplicate attendance entries for the same student and attendance session must be prevented.
8. Only authorized users can modify student and academic records.
9. Teachers should only manage academic activities for their assigned classes or subjects, according to permissions.
10. Financial transactions must maintain an identifiable payment history.

These rules will be refined during system design.

---

# 9. Future Product Expansion

Although the initial application is designed for one school, its architecture should avoid unnecessary limitations that would make future expansion difficult.

Possible future improvements:

- Mobile applications.
- Online admission.
- Automated notifications.
- Online payment integration.
- Advanced reporting and analytics.
- Library and transportation management.
- Integration with external educational platforms.
- Potential multi-school SaaS support.

Future expansion should not complicate the initial implementation unnecessarily.

---

# 10. Product Acceptance Criteria

The initial product release will be considered ready when:

- Authorized administrators can manage student, guardian, teacher, and academic records.
- Student enrollment can be managed across academic years.
- Teachers can perform permitted attendance activities.
- Students and guardians can access their permitted information, if those portals are included in the release.
- The application enforces authentication and authorization.
- Data validation and important business rules work correctly.
- Essential reports can be generated.
- Core functionality passes the agreed testing requirements.
- The application can be deployed and backed up successfully.

---

# 11. Open Questions and Decisions

The following decisions are intentionally left open for discussion before finalizing the PRD.

| ID | Question | Status |
|---|---|---|
| Q-01 | Will Schoolex serve a primary/secondary school, college, or both? | both |
| Q-02 | Which country and educational curriculum will it support? | Bangladesh |
| Q-03 | Will students and guardians have their own login accounts? | Yes |
| Q-04 | Will teachers have permission to manage attendance and marks independently? | Yes |
| Q-05 | Will fee management be included in the first release? | no |
| Q-06 | Will the system support multiple academic shifts? | Pending |
| Q-07 | Will the system support multiple sections within each class? | yes |
| Q-08 | Will the application initially be English-only or bilingual? | English |
| Q-09 | Will the application support multiple grading systems? | Pending |
| Q-10 | Will the school use online or offline payment methods? | both |

---

**End of PRD — Version 0.1**

**Document owner:** Schoolex Development Team

**Next review:** Requirements refinement and approval.