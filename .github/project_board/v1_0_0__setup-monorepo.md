# Setup Monorepo

This issue tracks the initial setup of the monorepo that will host frontend and backend apps, shared assets, common tasks, and deployment pipelines. The goal is to build a robust, reusable architecture for solving Frontend Mentor challenges with full-stack implementations.

---

## 🧱 Project Structure

root/
|── .github/ # ci/cd
│ ├── project_board # todo taks
│ ├── workflow # github actions
|── .vscode/ # editor
├── backend/ # backend apps
│ ├── nest # host:3000/nest/api
│ ├── springboot # host:3000/springboot/api
├── dist/ # github pages
├── frontend/ # frontend apps
│ ├── angular/ # host:3000/angular
│ ├── react/ # host:3000/react
│ ├── vue/ # host:3000/vue
│ ├── www/ # host:3000/
├── public/ # shared assets
├── tasks/ # gulp tasks

---

## ✅ Tasks

### 🧼 Code Formatting

- [ ] Configure Prettier
- [ ] Format support for HTML, JS, JSON, MD, TS, YAML

---

### 🚀 Deployment

- [ ] Setup GitHub Pages deployment for Frontend
- [ ] Setup Render deployment for Spring Boot
- [ ] Setup Render deployment for NestJS

---

### 📖 Documentation

- [ ] Write README.md for project overview
- [ ] Explain purpose, tech stack, usage

---

### 🧪 E2E and Unit Testing

- [ ] Setup Playwright for Angular
- [ ] Setup Playwright for React
- [ ] Setup Playwright for Vue
- [ ] Setup Vitest for Angular
- [ ] Setup Vitest for React
- [ ] Setup Vitest for Vue
- [ ] Setup Jest for NestJS
- [ ] Setup Spring Boot test configuration

---

### ⚙️ Gulp Tasks

- [ ] Write `build` task for all apps
- [ ] Write `clean` task for all apps
- [ ] Write `deploy` task
- [ ] Write `dev` task
- [ ] Write `e2e` task
- [ ] Write `project_board` task
- [ ] Write `test` task

---

### 🧪 HTTP Test File

- [ ] Create `frontend_mentor.http` to test endpoints
- [ ] Add sample GET and POST tests for APIs and frontends

### 🏁 Initialize Codebases

- [ ] Initialize Angular app in `frontend/angular`
- [ ] Initialize NestJS app in `backend/nest`
- [ ] Initialize React app in `frontend/react`
- [ ] Initialize Spring Boot app in `backend/springboot`
- [ ] Initialize Vue app in `frontend/vue`

---

### 🔗 Proxy Config & API Access

- [ ] Configure Angular dev proxy to `/nest/api` and `/springboot/api`
- [ ] Configure React dev proxy to `/nest/api` and `/springboot/api`
- [ ] Configure Vue dev proxy to `/nest/api` and `/springboot/api`
- [ ] Setup fallback to shared `public/*.json` if backend is unavailable

---

### 📁 Shared Assets

- [ ] Create shared `public/` folder
- [ ] Add fonts and images
- [ ] Reference `public/` assets in all frontend apps

---
