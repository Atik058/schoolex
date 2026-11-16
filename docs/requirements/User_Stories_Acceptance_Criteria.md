# Schoolex — User Stories & Acceptance Criteria

**Document version:** 1.1  
**Source:** Schoolex Software Requirements Specification (SRS), Version 0.2, Draft — Under Review  
**Product:** Single-school web-based School Management System  
**Target country:** Bangladesh  
**Technology baseline:** Next.js, Prisma, PostgreSQL  
**Interface language:** English  
**Status:** Draft for stakeholder review

---

## 1. Purpose

This document translates the Schoolex SRS into user stories and testable acceptance criteria. It is intended to support product refinement, UI/UX design, development, and QA.

Acceptance criteria use **Given–When–Then** where practical. Requirements explicitly stated in the SRS are treated as baseline scope. Additional workflow details supplied by the product owner are identified in the relevant stories. Decisions that remain unspecified are listed in [Section 10](#10-open-decisions-and-clarifications).

## 2. Product scope and assumptions

### 2.1 Version 1.0 scope

Schoolex is a web application for one educational institution. It supports:

- Primary: Classes 1–5
- Secondary: Classes 6–10
- College: Classes 11–12
- A single academic shift
- English-language interface
- Four primary roles: Administrator, Teacher, Student, and Guardian

Version 1.0 includes authentication and user management, student and guardian management, teacher/staff management, academic year and class management, subjects, enrollment and promotion, student attendance, examinations and marks, results, dashboards, reporting, and announcements.

### 2.2 Excluded from Version 1.0

The following are outside the current release scope: teacher attendance, fees and payments, online admission applications, payment gateway integration, SMS and email notifications, student and guardian mobile applications, library, payroll, AI-based examination evaluation or hall monitoring, advanced academic analytics, and multi-school SaaS functionality.

### 2.3 Roles

| Role | Main responsibilities |
|---|---|
| Administrator | Manages users, students, guardians, teachers, academic setup, enrollment, promotion, examinations, reports, and school announcements. |
| Teacher | Works with assigned classes and subjects; records student attendance; enters and edits authorized examination marks; views relevant schedules and academic information. |
| Student | Views own profile, attendance, results, schedules, and relevant announcements. Cannot modify academic records. |
| Guardian | Views information, attendance, and results for associated students, plus relevant announcements. |

The Accountant role is not mandatory for Version 1.0 because finance functionality is excluded.

---

## 3. Epic overview

| Epic ID | Epic | Primary roles |
|---|---|---|
| EP-01 | Authentication and user accounts | All roles; Administrator |
| EP-02 | Student records | Administrator; Teacher; Student; Guardian |
| EP-03 | Guardian records and associations | Administrator; Guardian |
| EP-04 | Teacher and staff management | Administrator; Teacher |
| EP-05 | Academic structure and enrollment | Administrator; Teacher; Student |
| EP-06 | Student promotion and re-enrollment | Administrator |
| EP-07 | Student attendance | Teacher; Administrator; Student; Guardian |
| EP-08 | Examinations, marks, and results | Administrator; Teacher; Student; Guardian |
| EP-09 | Dashboards and reports | All roles; according to permissions |
| EP-10 | Announcements and schedules | Administrator; Teacher; Student; Guardian |

---

## 4. User stories and acceptance criteria

## EP-01 — Authentication and user accounts

### US-AUTH-001 — Sign in

**As a** registered user, **I want** to sign in with my credentials, **so that** I can access the functions permitted for my role.

**Acceptance criteria**

1. **Given** an active account with valid credentials, **when** the user submits the sign-in form, **then** the system authenticates the user and opens the appropriate role-based application area.
2. **Given** invalid credentials, **when** the user attempts to sign in, **then** access is denied and an appropriate error is displayed.
3. **Given** an inactive account, **when** the user attempts to sign in, **then** access is denied.
4. **Given** an unauthenticated visitor, **when** the visitor requests a protected page or resource, **then** the system does not disclose protected information and redirects or requests authentication.

### US-AUTH-002 — Sign out

**As a** signed-in user, **I want** to sign out, **so that** my session is closed.

**Acceptance criteria**

1. **Given** an authenticated user, **when** the user selects sign out, **then** the session is ended.
2. **When** the signed-out user attempts to revisit a protected page, **then** authentication is required.

### US-AUTH-003 — Reset password

**As a** user who cannot access my account, **I want** a password-reset mechanism, **so that** I can regain access securely.

**Acceptance criteria**

1. **Given** a user starts the password-reset process, **when** the submitted information is accepted by the configured reset mechanism, **then** the user can complete the reset process.
2. **When** a new password is set, **then** it is stored using secure password hashing and is not stored as plain text.
3. **Given** an invalid or expired reset attempt, **when** it is submitted, **then** the password is not changed.

> The reset delivery channel and detailed reset flow are not defined in the SRS and require a technical/product decision.

### US-AUTH-004 — Manage user accounts and roles

**As an** Administrator, **I want** to create, update, activate, deactivate, and assign roles to user accounts, **so that** access to Schoolex is controlled by the school.

**Acceptance criteria**

1. **Given** an Administrator, **when** they create an account with valid required information and a supported role, **then** the account is created.
2. **When** the Administrator assigns a role, **then** the account receives only the permissions associated with that role.
3. **When** the Administrator updates permitted account information, **then** the updated information is saved and displayed.
4. **When** the Administrator deactivates an account, **then** that account cannot sign in.
5. **Given** a non-Administrator, **when** they attempt to manage user accounts or roles, **then** the operation is denied.
6. New teacher, new student, new gurdian accounts can be created by admin. student enrollment page will collect both student data and gurdian data togeter to create student & gurdian account.

### US-AUTH-005 — Associate user accounts with student and guardian records

**As an** Administrator, **I want** student and guardian login accounts linked to their corresponding records, **so that** users see only the information relevant to them.

**Acceptance criteria**

1. **Given** a student account, **when** it is linked to a student record, **then** the student can access only that student's permitted information.
2. **Given** a guardian account linked to one or more student records, **when** the guardian signs in, **then** the guardian can access information for all associated students.
3. **Given** an account without the required record association, **when** it attempts to access student or guardian-specific information, **then** access is denied.
4. Student and guardian accounts are created manually by an Administrator.


---

## EP-02 — Student records

### US-STU-001 — Register a student

**As an** Administrator, **I want** to register a student, **so that** the school has a central record for that student.

**Acceptance criteria**

1. **Given** an Administrator enters valid student information, **when** the registration is submitted, **then** a student record is created.
2. **When** a student identifier is assigned or generated, **then** it is unique within the school.
3. **Given** an identifier already assigned to another student, **when** it is submitted for a new student, **then** the system rejects the duplicate.
4. The student record supports the SRS-defined information: student ID, full name, date of birth, gender, contact information, present and permanent addresses, admission date, optional blood group, previous educational information, associated guardians, current enrollment, photograph, and documents.
5. Mandatory fields, formats, and detailed validation rules follow the approved field specification; fields not yet agreed must not be assumed.

### US-STU-002 — Search, filter, and view students

**As an** authorized user, **I want** to search and filter student records, **so that** I can find the relevant student efficiently.

**Acceptance criteria**

1. **Given** the user has permission to view a student list, **when** they search using supported identifiers or personal information, **then** matching records are displayed.
2. **When** the user applies supported filters, **then** only matching records are displayed.
3. **When** the user opens a student record, **then** the system displays the information permitted for that user's role.
4. Teachers see students in assigned classes; students see their own permitted profile; guardians see profiles of associated students.
5. A user cannot retrieve a student record by bypassing list filters or changing a URL/API identifier without authorization.

### US-STU-003 — Update student information

**As an** Administrator, **I want** to update a student's information, **so that** school records remain accurate.

**Acceptance criteria**

1. **Given** an Administrator with permission, **when** they update a student's permitted fields with valid values, **then** the changes are saved.
2. **Given** invalid field values, **when** the update is submitted, **then** the system rejects the invalid values and identifies the relevant errors.
3. A non-Administrator cannot modify restricted student information.
4. Updating a student's profile does not erase historical enrollment records.

### US-STU-004 — Manage student status and history

**As an** Administrator, **I want** to manage student status and view enrollment history, **so that** the student's current and previous school records are retained.

**Acceptance criteria**

1. **When** an authorized Administrator changes a student's status, **then** the updated status is stored.
2. **When** a student has enrollments across academic years, **then** the system retains the historical enrollment records.
3. **When** an authorized user views the student history, **then** the system shows the available historical enrollment information according to permissions.

### US-STU-005 — Upload student photograph and documents

**As an** Administrator, **I want** to upload a student's photograph and relevant documents, **so that** supporting records are available with the student profile.

**Acceptance criteria**

1. **Given** an Administrator selects a file accepted by the configured upload rules, **when** the upload completes, **then** the file is associated with the correct student.
2. **Given** an unsupported or invalid file, **when** it is uploaded, **then** the system rejects it and displays an error.
3. **When** an authorized user opens the student profile, **then** the user can view or access the associated files according to permissions.

> File types, size limits, storage provider, and retention rules are not specified in the SRS.

---

## EP-03 — Guardian records and associations

### US-GRD-001 — Register and maintain guardian records

**As an** Administrator, **I want** to create and update guardian records, **so that** student relationships and contact information are maintained.

**Acceptance criteria**

1. **Given** an Administrator submits valid guardian information, **when** the record is saved, **then** the guardian profile is created.
2. The guardian profile supports full name, relationship with student, phone number, email address, address, and optional occupation.
3. **When** an Administrator updates permitted guardian information, **then** the changes are saved.
4. Authorized users can view guardian profiles according to permissions.

### US-GRD-002 — Associate guardians with students

**As an** Administrator, **I want** to associate multiple guardians with a student and a guardian with multiple students, **so that** family relationships are represented accurately.

**Acceptance criteria**

1. A student can be associated with more than one guardian.
2. A guardian can be associated with more than one student.
3. **When** an association is created, **then** it is visible in the relevant student and guardian records.
4. The system supports identifying a primary guardian and emergency contacts.
5. Removing or changing an association must not grant access to an unrelated student's information.

### US-GRD-003 — Guardian views associated students

**As a** Guardian, **I want** to see the students linked to my account, **so that** I can monitor their school information.

**Acceptance criteria**

1. **Given** a guardian account linked to multiple students, **when** the guardian signs in, **then** all associated students are available to that guardian.
2. **When** the guardian opens a student, **then** only information for that associated student is displayed.
3. **Given** a student not associated with the guardian, **when** the guardian attempts to access that student's information, **then** access is denied.

---

## EP-04 — Teacher and staff management

### US-TCH-001 — Register and maintain teacher/staff records

**As an** Administrator, **I want** to register and update teacher and staff records, **so that** the school maintains accurate personnel information.

**Acceptance criteria**

1. **Given** valid personal, contact, and employment information, **when** the Administrator submits a new record, **then** the teacher/staff record is created.
2. **When** the Administrator updates permitted information or employment status, **then** the changes are saved.
3. Authorized users can view teacher profiles according to permissions.
4. The Administrator can manually create a teacher login account and associate it with the teacher record.

### US-TCH-002 — Assign teachers to classes and subjects

**As an** Administrator, **I want** to assign teachers to classes and subjects, **so that** teachers can access only their relevant academic responsibilities.

**Acceptance criteria**

1. **When** the Administrator assigns a teacher to a particuler subject of particuler section of particuler class in a particuler timeslot, **then** the assignment is stored.
2. **When** the Administrator assigns a teacher to a timeslot, subject, section, class **then** the assignment is stored.
3. **Given** a teacher signs in, **when** they view assigned classes and subjects, **then** the system displays their current assignments.
4. A teacher cannot manage academic activities for classes or subjects outside their authorized assignments.

---

## EP-05 — Academic structure and enrollment

### US-ACD-001 — Manage academic years

**As an** Administrator, **I want** to create and update academic years and identify the active year, **so that** academic records are organized by year.

**Acceptance criteria**

1. **When** the Administrator creates or updates an academic year with valid information, **then** the record is saved.
2. The system identifies the active academic year.
3. Historical academic years remain available.
4. The system supports one academic shift in Version 1.0.

### US-ACD-002 — Manage educational levels, classes, and sections

**As an** Administrator, **I want** to manage educational levels, classes, and sections, **so that** the school's academic structure is represented in the system.

**Acceptance criteria**

1. The system supports Primary Classes 1-12.
2. Each class is individual
3. **When** the Administrator creates multiple sections for a class, **then** each section is associated with that class.
4. The Administrator can update class and section information and assign class teachers.
5. The system maintains the relationships between classes, and sections.

### US-ACD-003 — Manage subjects and subject assignments

**As an** Administrator, **I want** to create subjects and assign them to classes and teachers, **so that** teaching responsibilities are defined.

**Acceptance criteria**

1. **When** the Administrator creates or updates a subject, **then** the subject information is saved.
2. The Administrator can assign a subject to a relevant class.
3. The Administrator can assign a teacher to a particuler timeslot of particuler subject of particuler section of particuler class.
4. Teachers can view subjects and class/section assigned to them.
5. Authorized users can view subject assignments.

### US-ACD-004 — Enroll a student in an academic year

**As an** Administrator, **I want** to enroll a student in an academic year, class, and section, **so that** the student's academic placement is recorded.

**Acceptance criteria**

1. **Given** a student, academic year, class, and section, **when** the Administrator creates a valid enrollment, **then** the enrollment is saved with all four associations.
2. A student must have an enrollment record to participate in a particular academic year and class.
3. The system prevents conflicting or duplicate enrollment records for the same student and academic year.
4. Historical enrollment records are preserved when a new year's enrollment is created.
5. Enrollment updates are restricted to authorized users and follow the approved enrollment rules.

### US-ACD-005 — Manage class schedules / timeslot

**As an** authorized user, **I want** class schedules to be created and viewed, **so that** teachers and students can see relevant academic schedules.

**Acceptance criteria**

1. An Adminstrator user can create and manage class schedules.
2. A teacher can view their assigned schedule.
3. A student can view their class schedule.
4. Users cannot view schedules outside their permissions.

> Schedule structure and conflict-detection rules 

1. 1hour timeslot for each class
2. 8-9, 9-10, 10-11, 11-12, 12-1, 1:30-2:30, 2:30-3:30, 3:30-4:30 PM
3. slots are named 1st period, 2nd period .....
4. 1-1:30 PM (break)
5. each class-section will have those slots, slots can be empty or assigned subject and teacher to the slot

---

## EP-06 — Student promotion and re-enrollment

### US-PROM-001 — View students eligible for promotion

**As an** Administrator, **I want** a Student Promotion page that lists students based on filtering criteria, **so that** I can review year-end outcomes and process the next academic year's placement.

**Acceptance criteria**

1. **Given** an Administrator opens the Student Promotion page, **when** they select the applicable filtering criteria, **then** the page displays the matching students.
2. The page supports filtering by class. Other filters may be added when confirmed by the product owner.
3. Each listed student displays their yearly final result as **Pass** or **Fail**.
4. The page identifies which students are eligible for promotion based on the displayed final result.
5. The page provides a action for eligible students and a **Promote All** action for all eligible students in the class.
6. Students whose yearly final result is Fail are not included in the Promote All action and are offered a **Re-enroll** action instead.
7. The page clearly distinguishes Pass and Fail so the Administrator can review the list before taking action.

### US-PROM-002 — Promote an individual student

**As an** Administrator, **I want** to promote a passing student individually, **so that** I can process exceptions or individual student placements.

**Acceptance criteria**

1. **Given** a student with a yearly final result of Pass, **when** the Administrator selects that student's Promote action, **then** the system creates the student's enrollment for the subsequent academic year in the next class, subject to the configured class progression.
2. The individual Promote action is active only for students whose displayed final result is Pass.
3. **Given** a student whose yearly final result is Fail, **when** the Administrator views the student row, **then** the Promote action is unavailable.
4. A successful promotion preserves the previous academic year's enrollment and result history.
5. The system prevents duplicate or conflicting enrollment for the same student and academic year.
6. The system confirms the outcome of the promotion action and reports any student that could not be processed.

### US-PROM-003 — Promote all passing students in the filtered list

**As an** Administrator, **I want** to promote all passing students in the filtered student list in one operation, **so that** I can process a class efficiently.

**Acceptance criteria**

1. **Given** the Administrator has filtered the Student Promotion list, **when** they select **Promote All**, **then** the system selects all Pass students in that filtered result set for promotion.
2. Fail students are excluded from the bulk promotion operation.
3. The system provides a confirmation step that makes clear the number or set of students to be promoted before processing.
4. On confirmation, each eligible student is enrolled in the subsequent academic year and next class according to the configured progression.
5. Previous enrollments and results remain available as historical records.
6. The system prevents duplicate enrollment and reports any failures without silently treating them as successful promotions.
7. The completion response identifies the number of students promoted and any students requiring further action.

### US-PROM-004 — Re-enroll a student who did not pass

**As an** Administrator, **I want** to re-enroll a student whose yearly final result is Fail, **so that** the student can continue in the appropriate class rather than being promoted.

**Acceptance criteria**

1. **Given** a student whose yearly final result is Fail, **when** the Administrator selects **Re-enroll**, **then** the system allows the Administrator to create an enrollment for the subsequent academic year in the appropriate class.
2. The Re-enroll action is available for Fail students.
3. The student is not automatically promoted to the next class through this action.
4. The previous academic year's enrollment and result are preserved.
5. The system prevents duplicate or conflicting enrollment for the same student and academic year.
6. The system confirms whether the re-enrollment succeeded or failed.

> The exact rule for the class/section assigned during re-enrollment, and whether a student may repeat in a different section, must be confirmed.

---

## EP-07 — Student attendance

### US-ATT-001 — Record daily attendance for an assigned class

**As a** Teacher, **I want** to record daily attendance for students in my assigned class, **so that** the school maintains attendance records.

**Acceptance criteria**

1. **Given** a Teacher opens an assigned class for attendance, **when** the attendance screen loads, **then** the relevant student list is displayed.
2. The Teacher can mark each student as Present, Absent, Late, or Excused.
3. The Teacher can submit attendance for the applicable date.
4. The system allows only one attendance record per student per day.
5. A Teacher cannot record attendance for an unassigned class.
6. Teacher attendance is outside Version 1.0 scope.

### US-ATT-002 — Validate and submit attendance

**As a** Teacher, **I want** the system to validate attendance before submission, **so that** the submitted record is complete and consistent.

**Acceptance criteria**

1. **Given** the attendance list is open, **when** the Teacher submits attendance, **then** the system validates the entries against the supported statuses.
2. The system prevents duplicate attendance records for a student on the same day.
3. **When** attendance is submitted successfully, **then** the submitted attendance is stored.
4. Submitted attendance records cannot be edited.
5. If submission fails validation, the system identifies the problem and does not save an invalid submission.

### US-ATT-003 — View attendance

**As an** authorized user, **I want** to view attendance records, **so that** I can monitor student attendance.

**Acceptance criteria**

1. An Administrator can view attendance records and relevant attendance reports.
2. A Teacher can view attendance for assigned classes.
3. A Student can view their own attendance records.
4. A Guardian can view attendance for associated students only.
5. A user cannot access attendance records outside their permissions.

### US-ATT-004 — Generate attendance reports

**As an** authorized user, **I want** to generate attendance reports, **so that** attendance information can be reviewed.

**Acceptance criteria**

1. An authorized user can request an attendance report.
2. The report contains records matching the selected filters and the user's permissions.
3. The report does not disclose students outside the user's authorized scope.
4. Report layout and export formats follow the decisions recorded in Section 10.

---

## EP-08 — Examinations, marks, and results

### US-EXM-001 — Create and manage examination records

**As an** authorized user, **I want** to create or access examination records, **so that** teachers can enter marks for the relevant assessment.

**Acceptance criteria**

1. An authorized Administrator or Teacher can access examination activities permitted by their role and assignments.
2. Examination records are associated with the relevant academic context as defined by the system.
3. A Teacher can work only with examinations and subjects they are authorized to manage.
4. Examination types and detailed assessment structures follow the decisions recorded in Section 10.

### US-EXM-002 — Enter student marks

**As a** Teacher, **I want** to enter marks for students in my assigned subjects, **so that** examination performance is recorded.

**Acceptance criteria**

1. **Given** a Teacher is authorized for the relevant class, subject, and examination, **when** they enter a student's mark, **then** the system saves the mark against the correct student, examination, and subject.
2. Marks are represented as percentages out of 100.
3. The system accepts values from 0 through 100, inclusive.
4. The system rejects values below 0 or above 100.
5. The system prevents duplicate mark records for the same student, examination, and subject.
6. A Teacher cannot enter marks for an unassigned subject or unauthorized class.

### US-EXM-003 — Edit previously entered marks

**As an** authorized Teacher, **I want** to edit marks that I am permitted to manage, **so that** an entry error can be corrected.

**Acceptance criteria**

1. **Given** a Teacher has permission to manage a mark, **when** they update it with a valid percentage, **then** the new value is saved.
2. The system rejects updated marks below 0 or above 100.
3. A Teacher cannot edit marks outside their assigned subjects or permissions.
4. Marks can be saved directly without a separate approval workflow.

### US-EXM-004 — Calculate total marks, average percentage, and final pass/fail result

**As an** Administrator, **I want** the system to calculate each student's total marks, average percentage, and yearly final Pass/Fail result, **so that** academic outcomes can be reviewed and used in student promotion.

**Acceptance criteria**

1. **Given** the required subject marks for a result calculation are available, **when** the system calculates the result, **then** it calculates and displays the student's total marks.
2. The system calculates and displays the student's average percentage from the applicable subject percentages.
3. The system determines and displays a yearly final result of Pass or Fail.
4. The calculated result is associated with the correct student and academic year.
5. The calculated yearly final result is available to the Student Promotion page.
6. The system does not automatically convert percentage marks into letter grades.
7. The system does not require a separate result approval workflow in Version 1.0.
8. The system must not silently calculate or publish a final Pass/Fail outcome when required marks are missing; the result should be identified as incomplete or otherwise handled according to the approved result rules.

> The pass threshold, treatment of failed subjects, missing marks, optional subjects, and the exact averaging/total calculation rules require stakeholder confirmation.

### US-EXM-005 — View examination results

**As a** Student or Guardian, **I want** to view permitted examination results, **so that** I can understand academic performance.

**Acceptance criteria**

1. A Student can view only their own examination results.
2. A Guardian can view results only for associated students.
3. Authorized users can view results according to their role permissions.
4. Results include percentage marks and, when calculated, total marks, average percentage, and yearly Pass/Fail outcome.
5. Examination history is maintained across academic years.
6. Results are not automatically converted into letter grades.

### US-EXM-006 — Generate result reports or report cards

**As an** authorized user, **I want** to generate student result reports, **so that** examination performance can be reviewed or shared through the system.

**Acceptance criteria**

1. An authorized user can generate a result report for the permitted student and examination context.
2. The report includes percentage marks.
3. Where calculated and available, the report includes total marks, average percentage, and Pass/Fail outcome.
4. The report respects role-based access.
5. The report reflects the saved marks and calculated results.
6. Report layout, printing, and export formats follow the decisions recorded in Section 10.

---

## EP-09 — Dashboards and reports

### US-DASH-001 — Administrator dashboard

**As an** Administrator, **I want** a dashboard showing key school statistics, **so that** I can monitor school operations.

**Acceptance criteria**

1. The dashboard displays the total number of students.
2. The dashboard displays the total number of teachers and staff.
3. The dashboard displays the total number of classes and sections.
4. The dashboard displays daily student attendance summaries.
5. The dashboard displays admission statistics.
6. The dashboard provides access to relevant administrative reports.
7. Dashboard data is drawn from the relevant stored records and respects the active school context.

### US-DASH-002 — Teacher dashboard

**As a** Teacher, **I want** a dashboard showing my assigned academic activities, **so that** I can access my teaching responsibilities.

**Acceptance criteria**

1. The dashboard displays assigned schedules of classes and subjects and section
2. The dashboard provides access to attendance activities for assigned classes.
3. The dashboard provides access to relevant examination and mark-entry activities.
4. The dashboard displays relevant announcements.
5. The dashboard does not expose unassigned classes or subjects.

### US-DASH-003 — Student dashboard

**As a** Student, **I want** a dashboard showing my academic information, **so that** I can monitor my school progress.

**Acceptance criteria**

1. The dashboard displays the student's personal academic information.
2. The dashboard displays attendance summaries.
3. The dashboard displays examination results when available.
4. The dashboard displays relevant announcements.
5. The dashboard provides access to the student's class schedule.
6. The dashboard displays only the signed-in student's permitted information.

### US-DASH-004 — Guardian dashboard

**As a** Guardian, **I want** a dashboard showing information about my associated students, **so that** I can monitor their school progress.

**Acceptance criteria**

1. The dashboard displays all students associated with the guardian account.
2. The dashboard displays attendance summaries for associated students.
3. The dashboard displays academic performance information for associated students.
4. The dashboard displays relevant announcements.
5. The dashboard provides access to relevant student information.
6. The dashboard does not display information about students not associated with the guardian.

### US-REP-001 — Generate student reports

**As an** authorized user, **I want** to generate student-related reports, **so that** I can review student information relevant to my responsibilities.

**Acceptance criteria**

1. An authorized user can request a student report.
2. The report reflects the selected filters.
3. The report includes only information the user is permitted to access.
4. Report templates and export formats follow the decisions recorded in Section 10.

### US-REP-002 — Generate academic reports

**As an** authorized user, **I want** to generate examination and academic result reports, **so that** academic performance can be reviewed.

**Acceptance criteria**

1. An authorized user can request examination and result reports.
2. The report reflects the selected filters and stored result data.
3. The report includes percentage marks and available calculated result fields.
4. The report respects role-based access restrictions.

---

## EP-10 — Announcements and schedules

### US-COM-001 — Publish announcements

**As an** authorized Administrator, **I want** to publish school announcements for relevant user roles, **so that** important information is available within Schoolex.

**Acceptance criteria**

1. An authorized Administrator can create and publish an announcement.
2. The system supports role-specific announcements.
3. The announcement is visible to users whose roles are included in its audience.
3. The announcement is visible to students whose class are included in its audience.
4. The system maintains announcement history.
5. An authorized user can update or remove an announcement according to permissions.
6. SMS and email delivery are not part of Version 1.0.

### US-COM-002 — View relevant announcements

**As a** Teacher, Student, or Guardian, **I want** to view announcements relevant to my role, **so that** I can stay informed about school notices.

**Acceptance criteria**

1. **When** a user opens announcements, **then** the system displays announcements relevant to that user's role.
2. A user cannot access announcements restricted to an unrelated role unless separately authorized.
3. The system retains announcement history according to its configured behavior.

> Teacher announcement-publishing permission is unresolved in the SRS.

---

## 5. Cross-cutting acceptance criteria

These criteria apply across relevant stories and should be included in feature-level testing.

### 5.1 Authorization and data privacy

- Every protected operation checks the authenticated user's role and relevant record-level access.
- Teachers can manage academic activities only for assigned classes and subjects, subject to permissions.
- Students can view their own permitted information and cannot modify academic records.
- Guardians can view information only for associated students.
- Unauthorized access attempts are rejected even if a user directly requests a page, record identifier, or backend endpoint.

### 5.2 Data integrity

- Student identifiers are unique within the school.
- A student can have multiple guardians; a guardian can be associated with multiple students.
- A student has no more than one attendance record per day.
- Submitted attendance records are immutable.
- Duplicate student enrollment for the same academic year is prevented.
- Duplicate marks for the same student, examination, and subject are prevented.
- Marks remain within the range 0–100.
- Historical academic year, enrollment, examination, and result records are retained.

### 5.3 User interface

- The application is web-based and supports desktop, tablet, and mobile screen sizes.
- Navigation is appropriate to the authenticated user's role.
- Forms provide clear validation messages.
- Searchable and filterable reusable lists are provided where applicable.
- The interface provides clear feedback after successful and failed operations.
- The initial interface language is English.

---

## 6. Non-functional requirements and quality acceptance

The SRS establishes the following quality expectations, but several measurable targets remain undecided.

| Area | Acceptance expectation | Status |
|---|---|---|
| Security | Authentication, password hashing, authorization, and protected-resource checks work correctly. | Required; detailed security standard TBD |
| Data integrity | Defined uniqueness, range, relationship, and immutability rules are enforced. | Required |
| Usability | Role-appropriate navigation, clear validation, and operation feedback are provided. | Required |
| Responsive UI | Core screens support desktop, tablet, and mobile screen sizes. | Required |
| Maintainability | Database schema changes are managed through version-controlled Prisma migrations. | Required |
| Compatibility | Users can access the application through supported modern web browsers. | Browser support matrix TBD |
| Performance | Application performs acceptably under expected school usage. | Concurrent-user and response-time targets TBD |
| Availability and recovery | Hosting and operational approach to be defined. Backup and recovery are excluded from current SRS scope. | Significant production risk |
| File handling | Student photographs and documents can be stored and accessed securely. | Storage provider, limits, and retention TBD |

---

## 7. Role and permission summary

This is a high-level summary derived from the SRS. Detailed permissions should be confirmed before implementation.

| Function | Administrator | Teacher | Student | Guardian |
|---|---|---|---|---|
| Manage user accounts | Yes | No | No | No |
| Manage student records | Yes | No | No | No |
| View student lists | Yes | Assigned classes | No | No |
| View student profiles | Yes | Assigned classes | Own profile | Associated students |
| Manage guardians | Yes | No | No | No |
| Manage teachers/staff | Yes | No | No | No |
| Manage academic years/classes/sections/subjects | Yes | No | No | No |
| Manage student enrollment and promotion | Yes | No | No | No |
| View assigned classes | Yes | Yes | No | No |
| Record student attendance | Yes | Assigned classes | No | No |
| View attendance | Yes | Assigned classes | Own records | Associated students |
| Manage examinations | Yes | Authorized activities | No | No |
| Enter/edit examination marks | Yes | Assigned subjects | No | No |
| View examination results | Yes | Assigned classes | Own results | Associated students |
| Publish announcements | Yes | TBD | No | No |
| View relevant announcements | Yes | Yes | Yes | Yes |
| View dashboards | Yes | Teacher dashboard | Student dashboard | Guardian dashboard |

---

## 8. Business rules

| Rule ID | Business rule |
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
| BR-010 | Examination marks are represented as percentages out of 100. |
| BR-011 | Examination marks must remain within the range of 0–100. |
| BR-012 | Teachers may edit examination marks they are authorized to manage. |
| BR-013 | Examination marks do not require a separate approval workflow. |
| BR-014 | The system does not automatically convert percentage marks into letter grades. |
| BR-015 | Only authorized users may modify restricted student and academic records. |
| BR-016 | Student and guardian user accounts are created manually by Administrators. |
| BR-017 | A guardian may only access information belonging to associated students. |
| BR-018 | A student may only access their own permitted academic information. |
| BR-019 | Only students with a yearly final result of Pass are eligible for promotion through the promotion workflow. |
| BR-020 | Students with a yearly final result of Fail are offered re-enrollment rather than promotion. |
| BR-021 | Promotion can be performed for an individual eligible student or in bulk for all eligible students in the filtered Student Promotion list. |
| BR-022 | Student promotion creates a subsequent academic-year enrollment and preserves historical enrollment information. |
| BR-023 | Result calculation includes total marks, average percentage, and a yearly final Pass/Fail outcome; detailed calculation rules remain subject to confirmation. |

---

## 9. Definition of Ready and Definition of Done

### 9.1 Definition of Ready

A story is ready for development when:

- The user role and business value are clear.
- The story is assigned to an epic and has a unique ID.
- Acceptance criteria are testable and unambiguous.
- Required fields, validation rules, and permissions are defined or explicitly marked as pending.
- Dependencies and relevant business rules are identified.
- UI behavior is sufficiently understood for design and implementation.
- Open questions that block implementation have been resolved.

### 9.2 Definition of Done

A story is done when:

- The implementation meets all agreed acceptance criteria.
- Server-side authorization and validation are implemented.
- Relevant data integrity rules are enforced.
- Positive, negative, boundary, and permission tests pass.
- UI validation and success/error feedback are implemented.
- No unrelated role can access restricted records or actions.
- Code review is complete.
- The feature is integrated and tested in the agreed environment.
- Relevant documentation is updated.

---

## 10. Open decisions and clarifications

The following items are not sufficiently defined in the SRS or the product-owner clarifications received so far. They should be resolved before the related functionality is finalized.

| ID | Topic | Decision needed | Related stories |
|---|---|---|---|
| Q-01 | Student fields | Which student fields are mandatory, optional, and conditionally required? | US-STU-001 |
| Q-02 | Guardian fields | Which guardian fields are mandatory or optional? | US-GRD-001 |
| Q-03 | Student ID | What is the exact student ID generation format? | US-STU-001 |
| Q-04 | Promotion progression | What is the exact next-class mapping, including Class 5→6 and Class 10→11? What happens after Class 12? | US-PROM-002, US-PROM-003 |
| Q-05 | Promotion section assignment | How is the destination section selected during individual and bulk promotion? | US-PROM-002, US-PROM-003 |
| Q-06 | Re-enrollment placement | Does a failed student repeat the same class, and how is the new section selected? | US-PROM-004 |
| Q-07 | Promotion filters | Besides class, which filters are required on the Student Promotion page (e.g. academic year, section)? | US-PROM-001 |
| Q-08 | Result pass rule | What percentage or subject-level conditions determine Pass versus Fail? | US-EXM-004 |
| Q-09 | Result calculation | Is average percentage the arithmetic mean of subject percentages, or a weighted calculation? How is total marks defined? | US-EXM-004 |
| Q-10 | Incomplete results | How should absent marks, missing subject marks, optional subjects, or non-applicable subjects affect calculations and pass/fail? | US-EXM-004 |
| Q-11 | Examination structure | What examination types and assessment structures are required? | US-EXM-001–006 |
| Q-12 | Result presentation | What exact result report/report-card layout is required? | US-EXM-005, US-EXM-006 |
| Q-13 | Teacher permissions | Which detailed administrator and teacher permissions apply to examination creation and other academic activities? | US-EXM-001 |
| Q-14 | Announcements | Can Teachers publish announcements, or is publishing restricted to Administrators? | US-COM-001 |
| Q-15 | Schedule rules | What schedule fields and conflict-detection rules are required? | US-ACD-005 |
| Q-16 | Report exports | Which export formats are required (PDF, Excel, print, etc.)? | US-ATT-004, US-EXM-006, US-REP-001–002 |
| Q-17 | File storage | Which storage provider, file types, size limits, and retention rules apply? | US-STU-005 |
| Q-18 | Authentication | Which authentication implementation and password-reset delivery mechanism will be used? | US-AUTH-001–003 |
| Q-19 | Hosting | Which hosting and server environment will be used? | Cross-cutting |
| Q-20 | Performance | What concurrent-user estimate and response-time targets should be tested? | Cross-cutting |
| Q-21 | Data retention | What are the retention, archival, and deletion policies? | Student and academic records |
| Q-22 | Backup and recovery | Backup and recovery are excluded from the current SRS. Is this acceptable for production, or should a recovery requirement be added before launch? | Operational readiness |

---

## 11. Risks and delivery notes

1. **Promotion depends on finalized result rules.** Bulk and individual promotion must not be implemented against an undefined Pass/Fail calculation.
2. **Class progression has edge cases.** Transitions between Primary, Secondary, and College levels, and the final class in each level, need explicit rules.
3. **Re-enrollment needs placement rules.** The product owner has defined the Re-enroll action for failed students, but the destination class and section rules still need confirmation.
4. **Bulk operations need safe failure handling.** The system should report per-student success/failure and avoid duplicate enrollments.
5. **Attendance is immutable after submission.** The workflow should make the submission state clear before a Teacher submits attendance.
6. **Result calculation must be transparent.** The pass threshold, weighting, missing marks, and subject failure rules must be settled and testable.
7. **Backup and recovery are out of scope in the source SRS.** This is a production risk for a system holding student and academic records.
8. **Several technical decisions remain open.** Authentication, hosting, file storage, performance targets, and data retention should be agreed before production deployment.

---

## 12. Source and interpretation notes

- The baseline scope, roles, academic structure, core functional behavior, business rules, and non-functional expectations are derived from **Schoolex SRS Version 0.2**.
- The Student Promotion page, class filtering, visible yearly Pass/Fail result, individual promotion, Promote All for passing students, and Re-enrollment for failing students reflect the product-owner clarification supplied after the initial draft.
- Total marks, average percentage, and yearly Pass/Fail calculation reflect the product-owner clarification supplied after the initial draft.
- No pass threshold, weighting formula, destination-section rule, or detailed re-enrollment placement rule has been invented. These remain open decisions.
- This document is a refinement artifact based on an SRS that is still marked Draft — Under Review. It should be reviewed and approved by the product owner and school representative before being treated as a finalized delivery contract.
