# Schoolex — High-Level Design (HLD)

**Document Version:** 0.1  
**Status:** Draft  
**Product:** Schoolex School Management System  
**Deployment Model:** Single-school web application  
**Target Country:** Bangladesh  

---

## 1. Introduction

### 1.1 Purpose

This document describes the high-level technical architecture of Schoolex. It defines the major software components, their responsibilities, interactions, technology choices, data architecture, external integrations, deployment approach, and non-functional design considerations.

It is intended to guide implementation and provide a common architectural reference for developers, database designers, testers, and technical stakeholders.

### 1.2 Scope

Schoolex is a web-based school management application for a single educational institution.

The Version 1.0 architecture supports the application areas defined in the SRS, including:

- Authentication and user management.
- Student, guardian, teacher, and staff information.
- Academic structure and enrollment.
- Student attendance.
- Examinations, marks, and results.
- Dashboards and reports.
- Communication and announcements.

Detailed functional requirements and business rules remain defined in the SRS and associated user stories. This HLD does not replace those documents.

### 1.3 Architectural Scope and Boundaries

The initial system is designed as a centralized web application rather than a distributed microservices system.

The architecture uses:
- Next.js for the web application and server-side application capabilities.
- Clerk for authentication.
- Prisma as the database access and ORM layer.
- Supabase-hosted PostgreSQL for relational data.
- Vercel for application hosting.
- Cloudflare R2 as a proposed object-storage service for student photographs and documents, subject to confirmation.

The initial release is intended for fewer than 500 registered accounts. Exact concurrent-user and response-time targets have not yet been defined.

---

## 2. Architecture Overview

### 2.1 Architectural Style

Schoolex will use a **modular monolithic architecture**.

The application will be deployed as one Next.js application, while its internal code will be organized into logical layers and functional modules.

This approach is appropriate for the initial scale and scope because it:
- Keeps deployment and infrastructure relatively simple.
- Avoids the operational overhead of multiple independent services.
- Allows application responsibilities to be separated into maintainable modules.
- Leaves room for future extraction of selected components if scale or requirements justify it.

The initial release does not require microservices, message brokers, or a separate backend deployment.

### 2.2 Component Interaction

1. A user opens Schoolex through a supported web browser.
2. The user authenticates through Clerk.
3. The browser communicates with the Next.js application.
4. Server-side application components verify the authenticated identity and enforce application authorization.
5. Application services process the requested operation.
6. Prisma accesses PostgreSQL through the application server.
7. Where a file is required, the application coordinates access to the object-storage service.
8. The application returns the result to the browser.

The browser must not receive direct access to the PostgreSQL database or unrestricted storage credentials.

### 2.3 Architectural Principles

The architecture will follow these principles:

- **Server-side security:** Authentication and authorization must be enforced on the server, not only by hiding interface elements.
- **Separation of concerns:** User-interface code, application logic, authorization, and data access should remain separate.
- **Data integrity:** Database constraints and transactions should protect important relationships and updates.
- **Modularity:** Functional areas should have clear internal boundaries.
- **Maintainability:** Database changes should be managed through version-controlled Prisma migrations.
- **Least privilege:** Users and application components should receive only the access required for their responsibilities.

---

## 3. Technology Architecture

### 3.1 Selected Technology Stack

| Layer | Technology | Architectural Purpose |
|---|---|---|
| Frontend | Next.js | Web interface and navigation |
| Backend | Next.js server-side capabilities | Application logic and server operations |
| Application framework | Next.js | Main application framework |
| Authentication | Clerk | Login, identity, and session management |
| ORM | Prisma | Database access and schema management |
| Database | PostgreSQL on Supabase | Persistent relational data |
| Application hosting | Vercel | Hosting and deployment of the Next.js application |
| Database migration | Prisma Migrate | Version-controlled database schema changes |
| File storage | Cloudflare R2 — proposed | Storage of photographs and documents |

### 3.2 Technology Responsibilities

**Next.js**

Next.js will provide the application interface and server-side capabilities. The application will use server-side operations for protected data access and business operations.

**Clerk**

Clerk will handle authentication and user-session management. Schoolex will use the authenticated identity to determine the corresponding application user and permissions.

**Prisma**

Prisma will act as the application's database access layer. Application services should access PostgreSQL through Prisma rather than connecting directly from browser code.

Prisma Migrate will manage database schema changes across development and deployment environments.

**Supabase PostgreSQL**

Supabase will host the relational database. It will store application records and relationships that require transactional consistency.

**Vercel**

Vercel will host and deploy the Next.js application.

**Cloudflare R2 — proposed**

R2 is proposed for storing uploaded photographs and documents. The application should use private storage and controlled access rather than exposing unrestricted public object URLs.

The final storage provider and access configuration must be confirmed before implementation.

### 3.3 Architectural Constraints

- The initial release is a single-school application.
- The application uses one centralized PostgreSQL database.
- The initial interface language is English.
- The application must support desktop, tablet, and mobile browsers.
- The expected total number of registered accounts is below 500.
- Exact concurrent-user and performance targets remain to be established.

---

## 4. Application Architecture

### 4.1 Logical Application Layers

The Next.js application should be organized into the following logical layers.

| Layer | Responsibility |
|---|---|
| Presentation layer | Pages, layouts, forms, tables, dashboards, and user interactions |
| Server interface layer | Server Actions, Route Handlers, and other server-side entry points |
| Authorization layer | Authentication context, role checks, and record-level access checks |
| Application/service layer | Coordinates use cases and applies business rules |
| Data access layer | Prisma queries, transactions, and persistence operations |
| External integration layer | Communication with Clerk, Supabase-hosted PostgreSQL, and object storage |

These are logical responsibilities, not separate deployed services.

### 4.2 Functional Module Boundaries

The application will be organized into functional modules corresponding to the Version 1.0 scope:

- Identity and user management.
- Student and guardian records.
- Schedule management
- Teacher and staff records.
- Academic management.
- Enrollment management.
- Attendance management.
- Examination and result management.
- Dashboard and reporting.
- Announcements and communication.

The modules may interact through defined application-service interfaces. A module should not bypass authorization or directly modify another module's data through unrelated UI code.

Detailed workflows and feature-level requirements remain in the SRS and user stories.

### 4.3 Request Processing

A typical protected request follows this sequence:

1. The user initiates an operation from the browser.
2. The request reaches a Next.js server-side entry point.
3. The application validates the user's authenticated identity using Clerk.
4. The authorization layer checks the user's application role and access to the requested records.
5. The relevant application service performs the operation.
6. The data access layer uses Prisma to read or update PostgreSQL.
7. The server returns an appropriate response to the browser.

For operations involving multiple related database changes, the application should use database transactions where required to preserve consistency.

---

## 5. Data Architecture

### 5.1 Database Design Approach

Schoolex will use PostgreSQL as its primary relational database.

A relational database is appropriate because the application contains connected records such as students, guardians, teachers, academic years, enrollments, attendance, examinations, and results.

The database design should prioritize:
- Referential integrity.
- Consistent relationships between records.
- Transactional updates for related operations.
- Efficient querying and filtering.
- Preservation of historical academic information.
- Maintainable schema evolution.

### 5.2 High-Level Data Domains

The database will contain data belonging to the following logical domains:

| Data Domain | Examples of Information |
|---|---|
| Identity and access | Application users, roles, and account associations |
| People | Student, guardian, teacher, and staff records |
| Academic structure | Academic years, educational levels, classes, sections, and subjects |
| Enrollment | Student enrollment and academic history |
| Academic assignments | Teacher assignments and schedules |
| Attendance | Student attendance records |
| Assessment | Examinations, examination schedules, marks, and results |
| Communication | Announcements |
| Supporting records | File metadata and references to stored objects |

This is a conceptual grouping, not a final database schema. Exact tables, columns, data types, indexes, and constraints belong in the database design or LLD.

### 5.3 Data Access

All application database access will pass through the server-side application and Prisma.

The browser must not connect directly to PostgreSQL.

The application should:
- Validate data before persistence.
- Enforce authorization before retrieving or changing protected records.
- Use database constraints for critical uniqueness and relationship rules.
- Use transactions for operations that must succeed or fail as a unit.
- Support pagination for large lists.
- Avoid unnecessary database queries.

### 5.4 Schema Evolution

Prisma Migrate will manage database schema changes.

Each schema change should be represented by a migration and reviewed before deployment. Development, testing, and production environments should apply migrations in a controlled sequence.

---

## 6. External Integration Architecture

### 6.1 Clerk Integration

Clerk is responsible for authentication and session management.

The integration boundary is:

- The user authenticates through Clerk.
- The Next.js application receives and validates the authentication context.
- Schoolex maps the authenticated identity to its internal application user and role information.
- Application authorization is enforced by Schoolex on protected server-side operations.

Clerk authentication does not replace Schoolex's application-level authorization. The application must still check whether a user can access a particular function or record.

### 6.2 Supabase Integration

Supabase provides the hosted PostgreSQL database.

The Next.js server-side application connects to PostgreSQL through Prisma using securely managed connection configuration.

Database credentials must remain server-side and must not be exposed to browser code.

### 6.3 Object Storage Integration

Cloudflare R2 is the proposed provider for student photographs and documents.

The intended integration pattern is:

1. An authorized user requests a file upload.
2. The server checks the user's permission.
3. The server creates a controlled upload authorization, such as a time-limited presigned URL.
4. The browser uploads the file to private object storage.
5. The application stores the file reference and relevant metadata in PostgreSQL.
6. When a file is requested, the server checks access and provides controlled retrieval.

The database should store file metadata and object references, not the file binary itself.

The exact provider, file limits, permitted formats, retention policy, and upload validation rules require implementation-level decisions.

### 6.4 Integration Boundaries

The initial release does not require SMS, email, payment gateway, or other external business integrations.

Future integrations should be introduced through separate integration components rather than embedding provider-specific code throughout the application.

---

## 7. Deployment Architecture

### 7.1 Hosting Model

The proposed production deployment consists of:

- **Vercel:** Hosts the Next.js application.
- **Clerk:** Provides authentication services.
- **Supabase:** Hosts PostgreSQL.
- **Cloudflare R2:** Proposed object storage for uploaded files.

These are externally hosted services connected over secure network communication.

### 7.2 Deployment Flow

1. Developers maintain the application source code in a version-control repository.
2. A deployment is initiated through the configured Vercel deployment workflow.
3. Vercel builds and deploys the Next.js application.
4. The deployed application connects to Clerk and Supabase using environment-specific configuration.
5. Database schema changes are applied using reviewed Prisma migrations.
6. If R2 is selected, the application uses its configured server-side storage credentials and access mechanism.

The exact repository provider, branch strategy, CI checks, and approval process are implementation decisions and are not fixed by this HLD.

### 7.3 Environment Separation

The deployment should separate at least:

- **Development:** Local development and initial integration.
- **Production:** The live school application and its production data.

A separate staging environment is recommended if the project can support it. Test and development activities should not use production student data unnecessarily.

Environment-specific secrets and database credentials must be managed separately.

### 7.4 Backup and Recovery Scope

Automated backup and recovery functionality is excluded from Version 1.0 scope, as specified in the requirements.

This exclusion does not eliminate the operational risk of data loss. Database-provider backup and recovery options should be reviewed before production use, even if Schoolex does not implement a custom backup feature.

No recovery-time objective or recovery-point objective has been defined.

---

## 8. Non-Functional Architecture

### 8.1 Security

The architecture will:
- Use Clerk for authentication.
- Enforce application authorization on the server.
- Apply role-based and record-level access checks.
- Keep database and storage credentials out of browser code.
- Use secure communication in production.
- Validate untrusted input on the server.
- Restrict access to private student documents and photographs.
- Avoid exposing sensitive records through unrestricted API responses.

### 8.2 Performance

The application should be designed for the expected initial scale of fewer than 500 registered accounts.

Performance considerations include:
- Database indexes for frequently queried fields.
- Pagination for large lists.
- Efficient Prisma queries.
- Avoidance of unnecessary database requests.
- Appropriate server-side rendering and data-fetching strategies.
- Avoidance of loading large file contents through application memory when direct controlled object-storage transfer is suitable.

Specific response-time and concurrent-user targets must be agreed separately.

### 8.3 Reliability and Data Integrity

The application should:
- Use database transactions for related updates where necessary.
- Enforce important uniqueness and relationship constraints.
- Handle failed operations without leaving inconsistent records.
- Return meaningful error responses.
- Preserve historical academic records where required.

Automated backup and recovery remain outside the Version 1.0 implementation scope.

### 8.4 Maintainability

Maintainability will be supported through:
- Modular application organization.
- Separation of UI, application logic, authorization, and data access.
- Consistent coding conventions.
- Prisma Migrate for schema versioning.
- Reusable application services.
- Documented external integration boundaries.

### 8.5 Scalability and Extensibility

The initial architecture is designed for a single school and a relatively small user base.

The modular structure should allow future additions such as fee management, online admission, notifications, library management, mobile applications, and advanced reporting without requiring the initial system to implement those features.

Multi-school SaaS functionality is not part of Version 1.0. Supporting it in the future may require changes to data ownership, authorization, and tenant isolation.

### 8.6 Usability and Device Support

The application will be browser-based and should support desktop, tablet, and mobile screen sizes.

The interface language for Version 1.0 is English. The user interface should remain consistent across the application's functional modules.

### 8.7 Open Non-Functional Decisions

The following values are not yet defined and should be agreed before production readiness:

- Target concurrent users.
- Acceptable response times for common operations.
- Availability target.
- Database recovery expectations.
- File size and file type limits.
- Data retention and deletion policy.
- Production monitoring and alerting requirements.

---

**End of High-Level Design — Draft Version 0.1**