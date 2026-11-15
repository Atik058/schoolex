# Software Requirements Specification (SRS)
# Schoolex — School Management System

| Document Information | Details |
|---|---|
| Product Name | Schoolex |
| Document Type | Software Requirements Specification |
| Document Version | 0.2 |
| Based On | Schoolex PRD Version 0.1 |
| Product Type | Web-based School Management System |
| Deployment Model | Single-school application |
| Target Country | Bangladesh |
| Technology Stack | Next.js, Prisma, PostgreSQL |
| Interface Language | English |
| Document Status | Draft — Under Review |

---

# 1. Introduction

## 1.1 Purpose

This Software Requirements Specification (SRS) defines the functional and non-functional requirements of Schoolex, a web-based School Management System.

The purpose of this document is to establish a clear and detailed understanding of the system's expected functionality, behavior, constraints, and quality requirements.

This document will serve as the primary reference for:

- Software architecture and system design.
- Database design and implementation.
- Backend development.
- Frontend development.
- API development and integration.
- Software testing and quality assurance.
- Deployment and future maintenance.

The requirements defined in this document are intended to guide the development team throughout the software development lifecycle.

## 1.2 Product Scope

Schoolex is a centralized web-based School Management System designed for a single educational institution in Bangladesh.

The application will digitize and simplify the school's administrative and academic operations by providing a centralized platform for managing students, guardians, teachers, academic structures, attendance, examinations, and results.

The system will support three educational levels:

- Primary: Classes 1–5.
- Secondary: Classes 6–10.
- College: Classes 11–12.

Schoolex will support different user roles with permissions appropriate to their responsibilities.

### 1.2.1 Features Included in Version 1.0

The following modules are included in the initial release:

1. Authentication and User Management.
2. Student Management.
3. Guardian Management.
4. Teacher and Staff Management.
5. Academic Year Management.
6. Class and Section Management.
7. Subject Management.
8. Student Enrollment.
9. Student Attendance Management.
10. Examination Management.
11. Student Marks and Result Management.
12. Dashboard and Reporting.
13. Communication and Announcements.

### 1.2.2 Features Excluded from Version 1.0

The following features are outside the scope of the initial release:

- Teacher attendance management.
- Fee and payment management.
- Online admission applications.
- Online payment gateway integration.
- SMS notifications.
- Email notifications.
- Student mobile application.
- Guardian mobile application.
- Library management.
- Payroll management.
- AI-powered examination evaluation.
- AI-based exam hall monitoring.
- Advanced academic analytics.
- Multi-school SaaS functionality.

These features may be considered for future versions.

## 1.3 Product Objectives

The primary objectives of Schoolex are:

1. Centralize student, guardian, teacher, and academic information.
2. Digitize student admission and registration processes.
3. Simplify classroom, section, and subject management.
4. Provide an efficient student attendance management system.
5. Maintain organized examination and academic result records.
6. Provide role-based access to relevant information and functionality.
7. Generate useful administrative and academic reports.
8. Reduce manual paperwork and administrative errors.
9. Provide a maintainable and extensible software architecture.

## 1.4 Definitions and Abbreviations

| Term | Description |
|---|---|
| SRS | Software Requirements Specification |
| PRD | Product Requirements Document |
| MVP | Minimum Viable Product |
| RBAC | Role-Based Access Control |
| API | Application Programming Interface |
| UI | User Interface |
| ORM | Object-Relational Mapping |
| DB | Database |
| Academic Year | A defined period during which academic activities take place |
| Class | An educational grade or level |
| Section | A subdivision of a class |
| Enrollment | Association of a student with a class and academic year |
| TBD | To Be Determined |

## 1.5 Intended Audience

This document is intended for:

- Product owners and school administrators.
- Software architects.
- Backend developers.
- Frontend developers.
- Database designers.
- Software testers and QA engineers.
- Future maintenance and development teams.

---

# 2. Overall System Description

## 2.1 Product Perspective

Schoolex will operate as an independent web-based application.

The system will use a centralized database to store and manage school-related information.

The application will consist of the following logical components:

1. **Frontend:** Provides user interfaces and interaction with the system.
2. **Backend:** Handles application logic, business rules, authentication, authorization, and data processing.
3. **Database:** Stores and maintains application data.
4. **File Storage:** Stores student photographs and relevant documents.

Users will access the application through a supported web browser.

The frontend will communicate with backend application services, which will interact with the database through Prisma ORM.

## 2.2 Technology Stack

The initial implementation shall use the following technologies:

| Component | Technology | Purpose |
|---|---|---|
| Application Framework | Next.js | Web application development |
| ORM | Prisma | Database access and schema management |
| Database | PostgreSQL | Relational data storage |
| Frontend | Next.js | User interface |
| Backend | Next.js server-side capabilities | Application logic and backend operations |
| Database Migrations | Prisma Migrate | Version-controlled database schema changes |

The specific Next.js version, authentication implementation, file storage provider, and hosting environment are to be determined during technical design.

## 2.3 User Classes and Characteristics

Schoolex will support the following primary user roles.

### 2.3.1 School Administrator

The administrator manages the overall system and school operations.

Responsibilities:

- Manage students and guardians.
- Manage teachers and staff.
- Manage academic years.
- Manage classes and sections.
- Manage subjects.
- Manage student enrollment.
- Create and manage user accounts.
- Assign user roles.
- Monitor academic activities.
- Access administrative dashboards.
- Generate reports.
- Publish school announcements.
- Configure school settings.

### 2.3.2 Teacher

Teachers manage their assigned academic responsibilities.

Responsibilities:

- View assigned classes and subjects.
- View students belonging to assigned classes.
- Record student attendance.
- View submitted attendance records.
- Create or access relevant examination records, according to permissions.
- Enter student examination marks.
- Edit previously entered examination marks.
- View relevant academic information.
- View academic schedules.
- Access relevant announcements.

Teachers shall only manage academic activities associated with their assigned classes and subjects, subject to permissions.

### 2.3.3 Student

Students can access their own academic information.

Responsibilities:

- View personal profiles.
- View attendance records.
- View examination results.
- View class schedules.
- View school announcements.

Students shall not be permitted to modify their academic records.

### 2.3.4 Guardian

Guardians can access information about their associated students.

Responsibilities:

- View associated student profiles.
- Monitor student attendance.
- View examination results.
- View school announcements.

Guardians shall only be able to access information belonging to students associated with their accounts.

### 2.3.5 Accountant

The PRD identifies an accountant role for financial operations.

However, fee and payment management are excluded from Version 1.0.

Therefore, the accountant role is not included as a mandatory user role in the initial release.

It may be introduced in a future version.

## 2.4 Operating Environment

| Component | Requirement |
|---|---|
| Application Type | Web-based application |
| Client Devices | Desktop, laptop, tablet, mobile |
| Client Software | Modern web browser |
| Application Framework | Next.js |
| ORM | Prisma |
| Database | PostgreSQL |
| Server Environment | TBD |
| Hosting Provider | TBD |
| Operating System | Server environment TBD |

## 2.5 General Constraints

1. The initial application shall serve one educational institution.
2. The system shall support Primary, Secondary, and College levels.
3. The application shall support a single academic shift.
4. The initial user interface language shall be English.
5. The system shall enforce role-based access control.
6. The system shall maintain historical student enrollment information.
7. Database schema changes shall be managed through version-controlled migrations.
8. The system shall use Next.js, Prisma, and PostgreSQL.
9. The system shall not include teacher attendance management in Version 1.0.
10. The system shall not include fee and payment management in Version 1.0.

---

# 3. Functional Requirements

Functional requirements define the operations and behavior that the system must provide.

Each requirement has a unique identifier to support implementation tracking, testing, and future maintenance.

## 3.1 Authentication and User Management

### 3.1.1 Authentication

| ID | Requirement |
|---|---|
| FR-AUTH-001 | The system shall allow registered users to log in using their credentials. |
| FR-AUTH-002 | The system shall validate user credentials before granting access. |
| FR-AUTH-003 | The system shall prevent unauthenticated users from accessing protected application resources. |
| FR-AUTH-004 | The system shall allow authenticated users to log out. |
| FR-AUTH-005 | The system shall provide a password reset mechanism. |
| FR-AUTH-006 | The system shall securely store user passwords using password hashing. |
| FR-AUTH-007 | The system shall prevent deactivated users from accessing the application. |

### 3.1.2 User Account Management

| ID | Requirement |
|---|---|
| FR-AUTH-008 | The administrator shall be able to create user accounts manually. |
| FR-AUTH-009 | The administrator shall be able to create accounts for teachers, students, and guardians. |
| FR-AUTH-010 | The administrator shall be able to assign roles to user accounts. |
| FR-AUTH-011 | The administrator shall be able to activate or deactivate user accounts. |
| FR-AUTH-012 | The administrator shall be able to update user account information. |
| FR-AUTH-013 | Users shall be able to view their own profiles. |
| FR-AUTH-014 | Users shall be able to update permitted profile information. |
| FR-AUTH-015 | The system shall enforce permissions according to assigned user roles. |

### 3.1.3 Account Association

| ID | Requirement |
|---|---|
| FR-AUTH-016 | The system shall associate student accounts with their respective student records. |
| FR-AUTH-017 | The system shall associate guardian accounts with their respective guardian records. |
| FR-AUTH-018 | A guardian account shall be able to access information about all students associated with that guardian. |
| FR-AUTH-019 | A student account shall only be able to access the corresponding student's permitted information. |

## 3.2 Student Management

### 3.2.1 Student Registration

| ID | Requirement |
|---|---|
| FR-STU-001 | The administrator shall be able to register new students. |
| FR-STU-002 | The system shall generate or allow the administrator to assign a unique student identifier. |
| FR-STU-003 | The system shall prevent duplicate student identifiers. |
| FR-STU-004 | The system shall store student personal information. |
| FR-STU-005 | The system shall store student contact information. |
| FR-STU-006 | The system shall store present and permanent addresses. |
| FR-STU-007 | The system shall allow the administrator to upload student photographs. |
| FR-STU-008 | The system shall allow the administrator to upload and manage relevant student documents. |
| FR-STU-009 | The administrator shall be able to associate guardians with students. |

### 3.2.2 Student Information Management

| ID | Requirement |
|---|---|
| FR-STU-010 | Authorized users shall be able to view student lists. |
| FR-STU-011 | Authorized users shall be able to search students using relevant identifiers and personal information. |
| FR-STU-012 | Authorized users shall be able to filter student records. |
| FR-STU-013 | Authorized users shall be able to view individual student profiles. |
| FR-STU-014 | The administrator shall be able to update student information. |
| FR-STU-015 | The system shall support student status management. |
| FR-STU-016 | The system shall maintain student enrollment history across academic years. |
| FR-STU-017 | Students shall be able to view their own permitted profile information. |
| FR-STU-018 | Guardians shall be able to view profiles of associated students. |

### 3.2.3 Student Information Fields

The system shall support the following student information:

- Student ID.
- Full name.
- Date of birth.
- Gender.
- Contact information.
- Present address.
- Permanent address.
- Admission date.
- Blood group (optional).
- Previous educational information.
- Associated guardians.
- Current enrollment information.
- Student photograph.
- Student documents.

Mandatory fields, field formats, and validation rules shall be defined during detailed design.

## 3.3 Guardian Management

### 3.3.1 Guardian Registration and Management

| ID | Requirement |
|---|---|
| FR-GRD-001 | The administrator shall be able to register new guardians. |
| FR-GRD-002 | The administrator shall be able to update guardian information. |
| FR-GRD-003 | Authorized users shall be able to view guardian profiles. |
| FR-GRD-004 | The system shall allow multiple guardians to be associated with one student. |
| FR-GRD-005 | The system shall allow one guardian to be associated with multiple students. |
| FR-GRD-006 | The system shall support identifying a primary guardian. |
| FR-GRD-007 | The system shall support identifying emergency contacts. |
| FR-GRD-008 | The administrator shall be able to create guardian login accounts manually. |
| FR-GRD-009 | The system shall associate guardian accounts with the corresponding guardian records. |

### 3.3.2 Guardian Information Fields

The system shall support:

- Full name.
- Relationship with student.
- Phone number.
- Email address.
- Address.
- Occupation (optional).

## 3.4 Teacher and Staff Management

### 3.4.1 Teacher and Staff Registration

| ID | Requirement |
|---|---|
| FR-TCH-001 | The administrator shall be able to register teachers and staff. |
| FR-TCH-002 | The system shall store personal information. |
| FR-TCH-003 | The system shall store contact information. |
| FR-TCH-004 | The system shall store employment information. |
| FR-TCH-005 | The administrator shall be able to update teacher and staff information. |
| FR-TCH-006 | Authorized users shall be able to view teacher profiles. |
| FR-TCH-007 | The administrator shall be able to manage employment status. |
| FR-TCH-008 | The administrator shall be able to create teacher login accounts manually. |

### 3.4.2 Teacher Assignment

| ID | Requirement |
|---|---|
| FR-TCH-009 | The administrator shall be able to assign teachers to classes. |
| FR-TCH-010 | The administrator shall be able to assign teachers to subjects. |
| FR-TCH-011 | The system shall maintain teacher-to-class assignments. |
| FR-TCH-012 | The system shall maintain teacher-to-subject assignments. |
| FR-TCH-013 | Teachers shall be able to view their assigned classes and subjects. |

## 3.5 Academic Management

### 3.5.1 Academic Year Management

| ID | Requirement |
|---|---|
| FR-ACD-001 | The administrator shall be able to create academic years. |
| FR-ACD-002 | The administrator shall be able to update academic year information. |
| FR-ACD-003 | The system shall identify the active academic year. |
| FR-ACD-004 | The system shall maintain historical academic year records. |
| FR-ACD-005 | The system shall support only one academic shift in Version 1.0. |

### 3.5.2 Educational Level and Class Management

The system shall support three educational levels:

| Educational Level | Supported Classes |
|---|---|
| Primary | Class 1–5 |
| Secondary | Class 6–10 |
| College | Class 11–12 |

Requirements:

| ID | Requirement |
|---|---|
| FR-ACD-006 | The administrator shall be able to manage educational levels. |
| FR-ACD-007 | The administrator shall be able to create and manage classes or grades. |
| FR-ACD-008 | Each class shall be associated with its appropriate educational level. |
| FR-ACD-009 | The administrator shall be able to create multiple sections within a class. |
| FR-ACD-010 | The administrator shall be able to update class and section information. |
| FR-ACD-011 | The administrator shall be able to assign class teachers. |
| FR-ACD-012 | The system shall maintain relationships between educational levels, classes, and sections. |

### 3.5.3 Subject Management

| ID | Requirement |
|---|---|
| FR-ACD-013 | The administrator shall be able to create and manage subjects. |
| FR-ACD-014 | The administrator shall be able to assign subjects to relevant classes. |
| FR-ACD-015 | The administrator shall be able to assign subject teachers. |
| FR-ACD-016 | Authorized users shall be able to view subject assignments. |
| FR-ACD-017 | Teachers shall be able to view subjects assigned to them. |

### 3.5.4 Student Enrollment

| ID | Requirement |
|---|---|
| FR-ACD-018 | The administrator shall be able to enroll students in a particular academic year. |
| FR-ACD-019 | Each enrollment shall be associated with a student, academic year, class, and section. |
| FR-ACD-020 | The system shall maintain historical enrollment records. |
| FR-ACD-021 | The administrator shall be able to update enrollment information according to defined rules. |
| FR-ACD-022 | The system shall prevent conflicting or duplicate enrollment records for the same student and academic year. |
| FR-ACD-023 | The system shall support student promotion to a higher class in a subsequent academic year. |
| FR-ACD-024 | The system shall preserve previous academic enrollment information when a student is promoted. |

### 3.5.5 Class Schedules

| ID | Requirement |
|---|---|
| FR-ACD-025 | Authorized users shall be able to create and manage class schedules. |
| FR-ACD-026 | Teachers shall be able to view their assigned schedules. |
| FR-ACD-027 | Students shall be able to view their class schedules. |

Schedule conflict detection rules are TBD.

## 3.6 Student Attendance Management

### 3.6.1 Attendance Recording

| ID | Requirement |
|---|---|
| FR-ATT-001 | Authorized teachers shall be able to record daily attendance for their assigned classes. |
| FR-ATT-002 | The system shall display the relevant student list when a teacher opens an assigned class for attendance. |
| FR-ATT-003 | The system shall support the following attendance statuses: Present, Absent, Late, and Excused. |
| FR-ATT-004 | The system shall associate each attendance record with the relevant student, date, and enrollment. |
| FR-ATT-005 | The system shall allow only one attendance record per student per day. |
| FR-ATT-006 | The system shall prevent duplicate attendance records for the same student and date. |
| FR-ATT-007 | The system shall save attendance records when the teacher submits attendance. |

### 3.6.2 Attendance Restrictions

| ID | Requirement |
|---|---|
| FR-ATT-008 | Once attendance is submitted, the system shall prevent further modification of the submitted attendance records. |
| FR-ATT-009 | Teachers shall not be able to edit submitted attendance records. |
| FR-ATT-010 | The system shall not provide an attendance editing function after submission in Version 1.0. |

### 3.6.3 Attendance Viewing and Reporting

| ID | Requirement |
|---|---|
| FR-ATT-011 | Authorized users shall be able to view attendance records. |
| FR-ATT-012 | The system shall support attendance filtering by date, class, and student. |
| FR-ATT-013 | The system shall generate attendance summaries. |
| FR-ATT-014 | Students shall be able to view their own attendance records. |
| FR-ATT-015 | Guardians shall be able to view attendance records of associated students. |
| FR-ATT-016 | The administrator shall be able to monitor student attendance across the school. |

### 3.6.4 Teacher Attendance

Teacher attendance management is excluded from Version 1.0.

The system shall not include teacher attendance recording, tracking, or reporting functionality in the initial release.

## 3.7 Examination Management

### 3.7.1 Examination Creation

| ID | Requirement |
|---|---|
| FR-EXM-001 | Authorized users shall be able to create examination records. |
| FR-EXM-002 | Examination records shall be associated with an academic year. |
| FR-EXM-003 | Examination records shall be associated with relevant classes. |
| FR-EXM-004 | The system shall support examination schedules. |
| FR-EXM-005 | The system shall support associating examinations with relevant subjects. |
| FR-EXM-006 | Authorized users shall be able to update examination information. |
| FR-EXM-007 | Teachers shall be able to view examinations relevant to their assigned classes and subjects. |

### 3.7.2 Examination Marks Management

| ID | Requirement |
|---|---|
| FR-EXM-008 | Authorized teachers shall be able to enter marks for students in their assigned classes and subjects. |
| FR-EXM-009 | The system shall associate marks with the relevant student, examination, subject, and academic year. |
| FR-EXM-010 | The system shall store examination marks in the database. |
| FR-EXM-011 | The system shall allow authorized teachers to edit previously entered examination marks. |
| FR-EXM-012 | The system shall validate entered marks to ensure they are not below 0 or above 100. |
| FR-EXM-013 | The system shall prevent duplicate mark records for the same student, examination, and subject. |
| FR-EXM-014 | The system shall allow teachers to enter and save marks directly without a separate approval workflow. |

### 3.7.3 Grading and Percentage Rules

Schoolex shall use percentage-based marks only.

| ID | Requirement |
|---|---|
| FR-EXM-015 | Examination marks shall be represented as percentages out of 100. |
| FR-EXM-016 | The system shall store percentage marks for each student and subject. |
| FR-EXM-017 | The system shall not automatically convert percentage marks into letter grades. |
| FR-EXM-018 | The system shall not require a configurable letter-grade conversion system in Version 1.0. |
| FR-EXM-019 | The system shall allow authorized users to view percentage-based examination marks. |

### 3.7.4 Result Management

| ID | Requirement |
|---|---|
| FR-EXM-020 | The system shall maintain student examination results. |
| FR-EXM-021 | Authorized users shall be able to view student results. |
| FR-EXM-022 | The system shall generate student result reports or report cards containing percentage marks. |
| FR-EXM-023 | Students shall be able to view their own examination results. |
| FR-EXM-024 | Guardians shall be able to view examination results of associated students. |
| FR-EXM-025 | The system shall maintain examination history across academic years. |

A separate result approval or publication workflow is not required in Version 1.0.

## 3.8 Communication and Announcements

| ID | Requirement |
|---|---|
| FR-COM-001 | Authorized administrators shall be able to publish school announcements. |
| FR-COM-002 | The system shall support role-specific announcements. |
| FR-COM-003 | Authorized users shall be able to view announcements relevant to their roles. |
| FR-COM-004 | The system shall maintain announcement history. |
| FR-COM-005 | The system shall allow authorized users to update or remove announcements according to permissions. |

External SMS and email notification integrations are excluded from Version 1.0.

## 3.9 Dashboard and Reporting

### 3.9.1 Administrator Dashboard

| ID | Requirement |
|---|---|
| FR-DASH-001 | The administrator dashboard shall display the total number of students. |
| FR-DASH-002 | The administrator dashboard shall display the total number of teachers and staff. |
| FR-DASH-003 | The administrator dashboard shall display the total number of classes and sections. |
| FR-DASH-004 | The administrator dashboard shall display daily student attendance summaries. |
| FR-DASH-005 | The administrator dashboard shall display admission statistics. |
| FR-DASH-006 | The administrator dashboard shall provide access to relevant administrative reports. |

### 3.9.2 Teacher Dashboard

| ID | Requirement |
|---|---|
| FR-DASH-007 | The teacher dashboard shall display assigned classes. |
| FR-DASH-008 | The teacher dashboard shall display assigned subjects. |
| FR-DASH-009 | The teacher dashboard shall provide access to attendance activities. |
| FR-DASH-010 | The teacher dashboard shall provide access to relevant examination and mark-entry activities. |
| FR-DASH-011 | The teacher dashboard shall display relevant announcements. |

### 3.9.3 Student Dashboard

| ID | Requirement |
|---|---|
| FR-DASH-012 | The student dashboard shall display personal academic information. |
| FR-DASH-013 | The student dashboard shall display attendance summaries. |
| FR-DASH-014 | The student dashboard shall display examination results when available. |
| FR-DASH-015 | The student dashboard shall display relevant announcements. |
| FR-DASH-016 | The student dashboard shall provide access to class schedules. |

### 3.9.4 Guardian Dashboard

| ID | Requirement |
|---|---|
| FR-DASH-017 | The guardian dashboard shall display associated students. |
| FR-DASH-018 | The guardian dashboard shall display attendance summaries for associated students. |
| FR-DASH-019 | The guardian dashboard shall display academic performance information. |
| FR-DASH-020 | The guardian dashboard shall display relevant announcements. |
| FR-DASH-021 | The guardian dashboard shall provide access to relevant student information. |

### 3.9.5 General Reporting

| ID | Requirement |
|---|---|
| FR-REP-001 | Authorized users shall be able to generate student-related reports. |
| FR-REP-002 | Authorized users shall be able to generate student attendance reports. |
| FR-REP-003 | Authorized users shall be able to generate examination and academic result reports. |
| FR-REP-004 | The system shall restrict report access according to user permissions. |
| FR-REP-005 | Reports shall display information relevant to the selected filters and user permissions. |

Report templates, export formats, and printing requirements are TBD.

---

# 4. External Interface Requirements

## 4.1 User Interface Requirements

| ID | Requirement |
|---|---|
| UI-001 | The application shall provide a web-based user interface. |
| UI-002 | The interface shall provide navigation appropriate to the authenticated user's role. |
| UI-003 | The interface shall provide forms for creating and updating records. |
| UI-004 | The interface shall display validation errors clearly. |
| UI-005 | The interface shall support desktop, tablet, and mobile screen sizes. |
| UI-006 | The initial interface language shall be English. |
| UI-007 | The application shall provide role-specific dashboards. |
| UI-008 | The application shall provide searchable and filterable data lists where applicable. |
| UI-009 | The interface shall provide clear feedback after successful or failed operations. |

## 4.2 Software Interface Requirements

### 4.2.1 Frontend and Backend Communication

The frontend shall communicate with backend application services for data retrieval and modification.

The backend shall validate requests and enforce business rules before processing operations.

### 4.2.2 Database Communication

The application shall use Prisma ORM to communicate with PostgreSQL.

Direct database access from the client interface shall not be permitted.

### 4.2.3 File Storage

The application shall support uploading and retrieving student photographs and relevant documents.

The file storage implementation and provider are TBD.

## 4.3 Hardware Interface Requirements

No specialized hardware integration is required for Version 1.0.

The application shall operate through standard computing devices with supported web browsers and internet connectivity.

---

# 5. Data Requirements

## 5.1 Core Data Entities

The system shall maintain the following major data entities.

### User and Access Management

1. User
2. Role
3. User Profile

### Student and Guardian Management

4. Student
5. Guardian
6. Student-Guardian Association

### Teacher and Staff Management

7. Teacher
8. Staff

### Academic Management

9. Academic Year
10. Educational Level
11. Class
12. Section
13. Subject
14. Student Enrollment
15. Teacher Assignment
16. Class Schedule

### Attendance Management

17. Student Attendance

### Examination Management

18. Examination
19. Examination Schedule
20. Examination Subject
21. Student Marks
22. Student Result

### Communication

23. Announcement

The exact database schema, field definitions, indexes, and relationships shall be defined during database design.

## 5.2 Data Integrity Requirements

| ID | Requirement |
|---|---|
| DATA-001 | Each student shall have a unique student identifier. |
| DATA-002 | A student may be associated with multiple guardians. |
| DATA-003 | A guardian may be associated with multiple students. |
| DATA-004 | Each enrollment shall reference a valid student and academic structure. |
| DATA-005 | Attendance records shall reference valid students and relevant enrollment information. |
| DATA-006 | Duplicate daily attendance records for the same student shall be prevented. |
| DATA-007 | Examination marks shall reference valid students, examinations, and subjects. |
| DATA-008 | Marks shall not exceed the permitted percentage range of 0–100. |
| DATA-009 | Database relationships shall maintain referential integrity. |
| DATA-010 | Database operations shall preserve data consistency. |
| DATA-011 | User accounts shall be associated with the appropriate user profiles. |
| DATA-012 | Guardian accounts shall only be associated with authorized guardian records. |

## 5.3 Historical Data Management

The system shall preserve historical student enrollment information across academic years.

When a student is promoted to a higher class:

- The previous enrollment record shall remain available.
- A new enrollment record shall be created for the new academic year.
- The student's unique student identifier shall remain unchanged.
- Previous academic records shall remain associated with the relevant academic year.

Examination and attendance records shall remain associated with their respective academic periods.

## 5.4 Data Validation

The system shall validate submitted data before saving it to the database.

Validation shall include:

- Required field validation.
- Data type validation.
- Unique identifier validation.
- Referential integrity validation.
- Date validation.
- Percentage mark validation.
- Duplicate record prevention.
- User permission validation.

Detailed validation rules shall be defined during implementation planning.

---

# 6. Business Rules

The following business rules govern the operation of Schoolex.

| ID | Business Rule |
|---|---|
| BR-001 | Every student must have a unique student identifier within the school. |
| BR-002 | A student may be associated with multiple guardians. |
| BR-003 | A guardian may be associated with multiple students. |
| BR-004 | A student must have an enrollment record to participate in a particular academic year and class. |
| BR-005 | A student may have historical enrollment records from previous academic years. |
| BR-006 | A student may have only one attendance record per day. |
| BR-007 | Submitted student attendance records cannot be edited. |
| BR-008 | Teacher attendance management is excluded from Version 1.0. |
| BR-009 | Teachers may manage academic activities only for their assigned classes or subjects, according to permissions. |
| BR-010 | Examination marks shall be represented as percentages out of 100. |
| BR-011 | Examination marks must remain within the range of 0–100. |
| BR-012 | Teachers may edit examination marks they are authorized to manage. |
| BR-013 | Examination marks do not require a separate approval workflow. |
| BR-014 | The system shall not automatically convert percentage marks into letter grades. |
| BR-015 | Only authorized users may modify restricted student and academic records. |
| BR-016 | Student and guardian user accounts shall be created manually by administrators. |
| BR-017 | A guardian may only access information belonging to associated students. |
| BR-018 | A student may only access their own permitted academic information. |

---

# 7. Role-Based Access Control Requirements

The following table defines the initial high-level permission model.

Detailed permissions may be refined during development.

## 7.1 General Permission Matrix

| Functionality | Admin | Teacher | Student | Guardian |
|---|---|---|---|---|
| Manage user accounts | Yes | No | No | No |
| Manage students | Yes | No | No | No |
| View student lists | Yes | Assigned classes | No | No |
| View student profiles | Yes | Assigned classes | Own profile | Associated students |
| Manage guardians | Yes | No | No | No |
| View guardian profiles | Yes | No | No | Own profile |
| Manage teachers | Yes | No | No | No |
| Manage academic years | Yes | No | No | No |
| Manage classes and sections | Yes | No | No | No |
| Manage subjects | Yes | No | No | No |
| Manage student enrollment | Yes | No | No | No |
| View assigned classes | Yes | Yes | No | No |
| Record student attendance | Yes | Assigned classes | No | No |
| Edit submitted attendance | No | No | No | No |
| View attendance | Yes | Assigned classes | Own records | Associated students |
| Manage examinations | Yes | Authorized activities | No | No |
| Enter examination marks | Yes | Assigned subjects | No | No |
| Edit examination marks | Yes | Assigned subjects | No | No |
| View examination results | Yes | Assigned classes | Own results | Associated students |
| Publish announcements | Yes | TBD | No | No |
| View announcements | Yes | Relevant announcements | Relevant announcements | Relevant announcements |
| View dashboards | Yes | Teacher dashboard | Student dashboard | Guardian dashboard |

## 7.2 Authorization Requirements

| ID | Requirement |
|---|---|
| AUTHZ-001 | The system shall verify user permissions before allowing access to restricted functionality. |
| AUTHZ-002 | Teachers shall only access academic activities assigned to them. |
| AUTHZ-003 | Students shall not access other students' private academic information. |
| AUTHZ-004 | Guardians shall not access information belonging to students who are not associated with their accounts. |
| AUTHZ-005 | Students and guardians shall not modify examination marks or attendance records. |
| AUTHZ-006 | Administrative operations shall be restricted to authorized administrators. |
| AUTHZ-007 | The backend shall enforce authorization independently of frontend visibility. |

---

# 8. Non-Functional Requirements

Non-functional requirements define the quality attributes and operational expectations of Schoolex.

## 8.1 Security Requirements

| ID | Requirement |
|---|---|
| NFR-SEC-001 | The system shall securely hash user passwords. |
| NFR-SEC-002 | The system shall enforce authentication for protected resources. |
| NFR-SEC-003 | The system shall enforce role-based authorization. |
| NFR-SEC-004 | Users shall only access information permitted by their roles and relationships. |
| NFR-SEC-005 | Sensitive information shall be protected against unauthorized access. |
| NFR-SEC-006 | Important administrative actions should be auditable. |
| NFR-SEC-007 | The application shall use secure communication between clients and the server in production. |
| NFR-SEC-008 | The system shall validate user inputs on the server side. |
| NFR-SEC-009 | The system shall prevent unauthorized direct modification of database records through application interfaces. |

## 8.2 Performance Requirements

| ID | Requirement |
|---|---|
| NFR-PER-001 | Common application operations shall complete within agreed response-time limits. |
| NFR-PER-002 | Database queries shall be designed and optimized for efficient retrieval. |
| NFR-PER-003 | Large data lists shall support pagination. |
| NFR-PER-004 | Student, teacher, and academic records shall support efficient searching and filtering. |
| NFR-PER-005 | The system shall support concurrent users during normal school operations. |
| NFR-PER-006 | The application shall avoid unnecessary database queries and inefficient data retrieval. |

Exact response-time and concurrent-user targets are TBD.

## 8.3 Reliability Requirements

| ID | Requirement |
|---|---|
| NFR-REL-001 | The application shall operate reliably during normal school activities. |
| NFR-REL-002 | Failed operations shall not leave inconsistent database records. |
| NFR-REL-003 | Important database transactions shall be handled safely. |
| NFR-REL-004 | The system shall provide meaningful error messages when operations fail. |

**Backup and recovery are not included in the current project scope.** No automated backup schedule or recovery target is specified for Version 1.0.

This is a conscious scope decision, not a recommendation that school data should remain permanently without backups. A production deployment should reconsider this limitation because data loss could affect student records and examination results.

## 8.4 Maintainability Requirements

| ID | Requirement |
|---|---|
| NFR-MNT-001 | The application shall follow a modular architecture. |
| NFR-MNT-002 | Source code shall follow consistent coding standards. |
| NFR-MNT-003 | Database schema changes shall use version-controlled Prisma migrations. |
| NFR-MNT-004 | API documentation shall remain synchronized with implementation. |
| NFR-MNT-005 | The application shall support future module additions without unnecessary changes to unrelated modules. |
| NFR-MNT-006 | Business logic shall be separated from user interface components. |
| NFR-MNT-007 | Database access shall be managed through the backend application layer using Prisma. |

## 8.5 Usability Requirements

| ID | Requirement |
|---|---|
| NFR-USA-001 | The interface shall be understandable to users with basic computer knowledge. |
| NFR-USA-002 | Common administrative operations shall require minimal navigation. |
| NFR-USA-003 | Forms shall provide understandable validation messages. |
| NFR-USA-004 | The application shall provide responsive layouts for desktop, tablet, and mobile devices. |
| NFR-USA-005 | Navigation and terminology shall remain consistent across modules. |
| NFR-USA-006 | The interface shall provide appropriate feedback after successful and unsuccessful operations. |

## 8.6 Scalability and Extensibility

| ID | Requirement |
|---|---|
| NFR-SCL-001 | The system shall support the expected growth of student, teacher, guardian, and academic records within the school. |
| NFR-SCL-002 | The architecture shall support the future addition of modules. |
| NFR-SCL-003 | The database structure shall avoid unnecessary limitations on future academic year and enrollment management. |
| NFR-SCL-004 | The system architecture should allow future consideration of multi-school support without requiring it in Version 1.0. |

---

# 9. MVP Scope and Feature Priorities

The following table defines the feature priorities for Version 1.0.

| Module | Priority | Version 1.0 |
|---|---|---|
| Authentication and User Management | Must Have | Included |
| Student Management | Must Have | Included |
| Guardian Management | Must Have | Included |
| Teacher Management | Must Have | Included |
| Class and Section Management | Must Have | Included |
| Subject Management | Must Have | Included |
| Academic Year Management | Must Have | Included |
| Student Enrollment | Must Have | Included |
| Student Attendance | Must Have | Included |
| Teacher Attendance | Excluded | Not Included |
| Examination Management | Must Have | Included |
| Student Marks and Results | Must Have | Included |
| Fee Management | Excluded | Not Included |
| Dashboard and Reports | Must Have | Included |
| Communication and Announcements | Should Have | Included in proposed scope |

---

# 10. Acceptance Criteria

The initial release of Schoolex shall be considered acceptable when the following conditions are satisfied.

## 10.1 Authentication and User Management

- Administrators can create and manage user accounts.
- Teachers, students, and guardians can log in using their credentials.
- Users can only access permitted application features.
- Deactivated accounts cannot access the application.

## 10.2 Student and Guardian Management

- Administrators can register and manage students.
- Every student has a unique identifier.
- Administrators can register and manage guardians.
- Multiple guardians can be associated with a student.
- One guardian can be associated with multiple students.
- Student and guardian account associations work correctly.

## 10.3 Academic Management

- Administrators can manage academic years.
- The system supports Primary, Secondary, and College levels.
- Administrators can manage classes and multiple sections.
- Administrators can manage subjects and teacher assignments.
- Students can be enrolled in academic years and classes.
- Historical enrollment records are maintained.

## 10.4 Student Attendance

- Teachers can record attendance for assigned classes.
- The system supports Present, Absent, Late, and Excused statuses.
- Only one attendance record per student per day is allowed.
- Submitted attendance records cannot be edited.
- Authorized users can view attendance reports.

## 10.5 Examination and Results

- Authorized users can create examination records.
- Teachers can enter marks for assigned students and subjects.
- Marks are stored in the database.
- Marks are validated within the range of 0–100.
- Teachers can edit previously entered marks.
- No separate result approval workflow is required.
- Students and guardians can view permitted examination results.
- Results are displayed as percentages without automatic letter-grade conversion.

## 10.6 Dashboard and Reporting

- Each user role has an appropriate dashboard.
- Administrators can view relevant school statistics.
- Teachers can access assigned academic activities.
- Students can view their own academic information.
- Guardians can view information about associated students.
- Authorized users can generate essential reports.

## 10.7 Security and Deployment

- Authentication and authorization work correctly.
- Unauthorized users cannot access restricted information.
- Data validation and business rules work correctly.
- Core functionality passes agreed testing requirements.
- The application can be deployed successfully.

---

# 11. Assumptions and Dependencies

The following assumptions are considered during requirements definition.

1. Schoolex will initially be deployed for a single educational institution.
2. The school will provide accurate student, teacher, guardian, and academic information.
3. Users will have access to internet-connected devices.
4. School administrators will manage user accounts and permissions.
5. The initial interface language will be English.
6. The application will use Next.js, Prisma, and PostgreSQL.
7. The system will support Primary, Secondary, and College education levels.
8. The school will operate with a single academic shift.
9. Examination marks will be maintained as percentages out of 100.
10. Teachers will enter and manage marks for their assigned subjects.
11. Student attendance will be recorded once per day.
12. Submitted attendance records will not be editable.
13. Database backup and recovery functionality will not be implemented in the current scope.
14. Hosting and file storage services will be selected during technical design.

---

# 12. Open Issues and Pending Decisions

The following requirements need further clarification before the SRS can be considered fully finalized.

| ID | Topic | Status |
|---|---|---|
| SRS-Q01 | Mandatory and optional student information fields | Pending |
| SRS-Q02 | Mandatory and optional guardian information fields | Pending |
| SRS-Q03 | Student ID generation format | Pending |
| SRS-Q04 | Student admission and promotion workflow | Partially defined |
| SRS-Q05 | Detailed administrator and teacher permissions | Partially defined |
| SRS-Q06 | Whether administrators can override submitted attendance | Pending |
| SRS-Q07 | Examination types and assessment structures | Pending |
| SRS-Q08 | Examination mark entry and result report formats | Pending |
| SRS-Q09 | Announcement publishing permissions | Pending |
| SRS-Q10 | Class schedule structure and conflict rules | Pending |
| SRS-Q11 | Report export formats (PDF, Excel, etc.) | Pending |
| SRS-Q12 | File storage implementation | Pending |
| SRS-Q13 | Authentication implementation | Pending |
| SRS-Q14 | Hosting and deployment environment | Pending |
| SRS-Q15 | Expected concurrent users and performance targets | Pending |
| SRS-Q16 | Data retention and deletion policies | Pending |
| SRS-Q17 | Backup and recovery | Excluded from current scope |

---

# 13. Future Product Expansion

The architecture should allow future expansion without unnecessarily complicating the initial implementation.

Potential future improvements include:

- Teacher attendance management.
- Fee and payment management.
- Online payment integration.
- SMS and email notifications.
- Student mobile application.
- Guardian mobile application.
- Online admission.
- Library management.
- Transportation management.
- Payroll management.
- Advanced reporting and analytics.
- AI-powered academic insights.
- AI-based examination evaluation.
- Potential multi-school SaaS support.

These features are not commitments for Version 1.0.

---

# 14. Document Approval

This document represents the initial detailed software requirements specification for Schoolex.

The document shall be reviewed and approved by the relevant stakeholders before being treated as the finalized SRS.

| Role | Name | Approval |
|---|---|---|
| Product Owner | TBD | Pending |
| School Representative | TBD | Pending |
| Development Lead | TBD | Pending |

---

**End of Software Requirements Specification**

| Document Metadata | Value |
|---|---|
| Product | Schoolex |
| Version | 0.2 |
| Status | Draft — Under Review |
| Next Step | Requirements Refinement and Approval |