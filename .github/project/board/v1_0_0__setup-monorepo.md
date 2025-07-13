# Setup Monorepo

This issue tracks the initial setup of the monorepo that will host frontend and
backend apps, shared assets, common tasks, and deployment pipelines. The goal
is to build a robust, reusable architecture for solving Frontend Mentor
challenges with full-stack implementations.

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

- [x] Configure Prettier
- [x] Format support for HTML, JS, JSON, MD, TS, YAML

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

- [x] Write `build` task for all apps
- [ ] Write `clean` task for all apps
- [ ] Write `deploy` task
- [x] Write `dev` task
- [ ] Write `e2e` task
- [ ] Write `test` task

---

### 🧪 HTTP Test File

- [x] Create `frontend_mentor.http` to test endpoints

---

### 🏁 Initialize Codebases

- [x] Initialize Angular app in `frontend/angular`
- [x] Initialize NestJS app in `backend/nest`
- [x] Initialize React app in `frontend/react`
- [x] Initialize Spring Boot app in `backend/springboot`
- [x] Initialize Vue app in `frontend/vue`

---

### 🍳 Home Page Implementation

- [ ] Implement `/` in www frontend (`frontend/www`)

---

### 🍳 Recipe Page Implementation

- [ ] Implement `angular/recipe_page` in Angular frontend (`frontend/angular`)
- [ ] Implement `nest/recipe_page` API in Nest backend (`backend/nest`)
- [ ] Implement `react/recipe_page` in React frontend (`frontend/react`)
- [ ] Implement `springboot/recipe_page` API in Spring Boot backend (`backend/springboot`)
- [ ] Implement `vue/recipe_page` in Vue frontend (`frontend/vue`)

---

### 🔗 Proxy Config & API Access

- [ ] Configure Angular dev proxy
- [ ] Configure Nest dev proxy
- [ ] Configure React dev proxy
- [ ] Configure Springboot dev proxy
- [ ] Configure Vue dev proxy
- [ ] Setup fallback to shared `public/*.json` if backend is unavailable

---

### 📁 Setup tailwindcss

- [ ] Configure `tailwindcss` in Angular frontend (`frontend/angular`)
- [ ] Configure `tailwindcss` in React frontend (`frontend/react`)
- [ ] Configure `tailwindcss` in Vue frontend (`frontend/vue`)
- [ ] Configure tailwindcss helpers such as clsx/cva

---

### 📁 Shared Assets

- [x] Create shared `public/` folder
- [ ] Create basic implementation of `public/css` css variables shared
- [x] Reference `public/` assets in all frontend apps

---
