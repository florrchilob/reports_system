# Automated Report System - Documentation

## 📌 Overview
The Automated Report System is a task-reporting platform designed to streamline and automate the process of tracking work activities. It features role-based access control and report customization. The system is built with **Node.js, Express, MongoDB, TypeScript, and React**, ensuring scalability and maintainability.

## 🌍 Supported Languages
- **English** (Documentation Default)
- **Español** (Documentación en Español)
- **עברית** (מסמך בעברית)

---

## 🏗 Technology Stack
- **Backend**: Node.js, Express, TypeScript, MongoDB
- **Frontend**: React, TypeScript, TailwindCSS
- **Authentication**: Planned for future implementation
- **Database Management**: MongoDB + Mongoose
- **Dashboard & Analytics**: Planned for future implementation

---

## 👥 User Roles & Permissions

### **1. Reporter (Type 1)**
- Can **create**, **view**, **edit**, and **delete** their own reports.
- Cannot access reports from other users.

### **2. Team Manager (Type 2)**
- Can **view, edit, and delete** all reports from their team(s).
- Can be assigned to **multiple teams**, allowing cross-team reporting.
- Can **customize report structures** for their teams upon creation.
- Can **modify team members**, adding or removing users over time.

### **3. Regional Manager (Type 3)**
- Can **view all reports** across multiple teams.
- Cannot create, edit, or delete reports.

### **4. System Admin**
- Can **create new teams**.
- Assign **Team Managers (Type 2)** by adding their emails.
- Assign **Reporters (Type 1)** to teams.
- Assign **Regional Managers (Type 3)** with access to specific teams.
- Can **modify team compositions** by adding or removing members.

---

## 📊 Customizable Report Structure
Each report includes:
- **Creator (User who submitted the report) [Mandatory]**
- **Date Created [Mandatory]**
- **Other Fields**: Defined by Team Managers (Type 2) when creating a team.

Each **Team Manager (Type 2)** defines the report structure at the time of team creation. Fields such as **Title, Status, Estimated Completion Date, Additional Notes, and Custom Fields** are optional and set up during team creation.

---

## 🔑 Authentication
- **Authentication is planned as a future feature.**
- Expected implementation: **Google OAuth** (optional for users with Gmail accounts).
- Users without Gmail will have an alternative authentication method in future updates.
- Role-based access will be determined upon login.

---

## 🔄 Workflow Example
1. A **Team Manager (Type 2)** requests system access.
2. The **System Admin** creates a new team and assigns Team Managers.
3. Team Managers provide **emails of Reporters (Type 1)**.
4. The **System Admin** assigns Reporters to the team.
5. A **Regional Manager (Type 3)** is assigned to oversee multiple teams.
6. **Team Managers customize report structures** during team creation.
7. Users log in (authentication planned for future implementation) and start reporting tasks.

---

## 📌 API Endpoints (Backend)

| Method    | Endpoint                 | Description                              | Access                                          |
|-----------|--------------------------|------------------------------------------|-------------------------------------------------|
| **POST**  | `/auth/google`           | Google OAuth authentication (Future)     | Public                                          |
| **GET**   | `/reports`               | Get reports based on user type           | Type 1 (own), Type 2 (own team), Type 3 (teams) |
| **POST**  | `/reports`               | Create a new report                      | Type 1, Type 2                                  |
| **PUT**   | `/reports/:id`           | Edit a report                            | Type 1 (own) / Type 2 (team)                    |
| **DELETE**| `/reports/:id`           | Delete a report                          | Type 1 (own) / Type 2 (team)                    |
| **PUT**   | `/teams/:id/members`     | Modify team composition                  | System Admin                                    |
| **POST**  | `/teams`                 | Create a new team                        | System Admin                                    |
| **POST**  | `/users`                 | Assign users to teams                    | System Admin                                    |

---

## 🚀 Next Steps
- **Database Schema Design** (MongoDB + Mongoose Models)
- **Backend Development** (Express, TypeScript, API Routes)
- **Authentication Setup** (Future Implementation)
- **Frontend Implementation** (React, TypeScript, UI Components)
- **Dashboard & Analytics Implementation** (Future Implementation)
- **Deployment & Testing** (Docker, Cloud Hosting)

---

## 📢 Multilingual Versions
**🇬🇧 English Documentation, 🇪🇸 Documentación en Español y 🇮🇱 תיעוד בעברית will be available on the next versions.**
