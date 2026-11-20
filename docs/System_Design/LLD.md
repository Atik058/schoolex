# Schoolex — Low-Level Design (LLD)

**Document Version:** 0.1  
**Status:** Draft  
**Product:** Schoolex School Management System  

---

## 1. Introduction

### 1.1 Purpose
This document provides the low-level technical design for the Schoolex system, building upon the architectural foundation established in the High-Level Design (HLD). It details the internal structures, class/component design, database schema, and request-handling workflows for the core functional modules.

### 1.2 Scope
This LLD covers the technical implementation details for the Version 1.0 scope as defined in the HLD and SRS, including:
- Data models (Prisma schema).
- Core service interfaces.
- Component-level responsibilities.
- Request-handling patterns (Server Actions, API routes).
- Security implementation details.

---

## 2. Component Design & Responsibilities

The application follows a modular monolith structure. The internal organization is structured as follows:

### 2.1 Layered Organization (Next.js)

| Layer | Implementation Approach | Responsibility |
| :--- | :--- | :--- |
| **Presentation** | React components (`app/`), Tailwind CSS | UI rendering, form submission, data display |
| **Server Interface**| Server Actions (`actions/`), Route Handlers | Server-side entry points, input validation |
| **Authorization** | Middleware, custom hooks/wrappers | Enforcing RBAC/ABAC |
| **Application** | Service modules (`services/`) | Business logic, coordination |
| **Data Access** | Prisma Client (`lib/db.ts`) | ORM interactions, transactions |

### 2.2 Core Modules

- **Identity Module:** User mapping to Clerk identity, role management.
- **Academic Module:** Academic Year, Class, Section, Subject definitions.
- **User Record Module:** Students, Teachers, Guardians, Staff profiles.
- **Attendance Module:** Daily attendance tracking.
- **Exam Module:** Exams, Marks, Results calculations.

---

## 3. Database Schema (Prisma)

*Draft Prisma schema structure (High-level)*

```prisma
// This is a high-level conceptual model. 
// Refinement is required during implementation.

model User {
  id        String   @id @default(uuid())
  clerkId   String   @unique
  role      Role
  profile   Profile?
}

model Student {
  id          String   @id @default(uuid())
  userId      String   @unique
  admissionNo String   @unique
  // ... relationships to Class, Guardian
}

model AcademicYear {
  id        String   @id @default(uuid())
  year      String
  isActive  Boolean
}

// ... Additional models for Class, Subject, Attendance, Exam, etc.
```

---

## 4. Request Handling Pattern

### 4.1 Server Actions (Standard Pattern)

```typescript
// Example: src/app/actions/students.ts
'use server'

import { auth } from "@clerk/nextjs";
import { authorize } from "@/lib/auth";
import { db } from "@/lib/db";

export async function createStudent(data: StudentInput) {
  const { userId } = auth();
  
  // 1. Authorization
  await authorize("STUDENT_CREATE", userId);
  
  // 2. Business Logic & Validation
  // 3. Database Operation
  return await db.student.create({ data });
}
```

---

## 5. Architectural Diagram

[Insert Sequence Diagram or Component Interaction Diagram Here]

*Suggested Diagram: Component Interaction Flow*
- A sequence diagram showing: Browser -> Middleware (Auth) -> Server Action -> Service -> Prisma -> Database.

---

## 6. Security Implementation Details

- **Auth:** Clerk `auth()` is used in all Server Actions.
- **Data Access:** All queries must pass through authorized service functions.
- **Input Validation:** Use Zod schemas in all Server Actions to validate input.
- **Secrets:** Environment variables managed via Vercel (e.g., `DATABASE_URL`, `CLERK_SECRET_KEY`).

---

**End of Low-Level Design — Draft Version 0.1**
