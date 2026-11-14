# 🌸 UI Garden — Web Component Library

## Assignment 13: Production Build and Code Quality Checks

**Author:** Khushdeep Kaur  
**Project:** UI Garden — React Component Library  
**Repository:** https://github.com/kna80/assignment13-ui-garden

## Project Overview

UI Garden is a reusable web component library developed using React, TypeScript, Styled Components, and Storybook.

Assignment 13 extends the component library by implementing automated code quality checks, Git pre-commit hooks, continuous integration using GitHub Actions, and production deployment using Docker and Nginx.

## Technologies Used

- React
- TypeScript
- Styled Components
- Storybook
- Jest
- React Testing Library
- Prettier
- ESLint
- Husky
- GitHub Actions
- Docker
- Nginx
- Node.js 22

## Components

The library contains nine reusable components:

1. Button
2. Label
3. Text
4. Table
5. Dropdown
6. Radio Button
7. Image
8. Hero Image
9. Card

Components include Default and Disabled states in Storybook.

## Installation

Clone the repository:

```bash
git clone https://github.com/kna80/assignment13-ui-garden.git
cd assignment13-ui-garden
```

Install dependencies:

```bash
npm ci
```

## Run React Application

```bash
npm start
```

Open:

http://localhost:3000

## Run Storybook

```bash
npm run storybook
```

Open:

http://localhost:6006

## Code Quality Checks

### Prettier

Checks code formatting:

```bash
npm run format:check
```

### ESLint

Checks JavaScript and TypeScript code quality:

```bash
npm run lint
```

### Jest Tests

Runs automated component tests:

```bash
npm run test:ci
```

The project contains 10 test suites and 19 automated tests.

## Husky Pre-Commit Hooks

Husky automatically runs the following checks before each Git commit:

1. Prettier formatting
2. ESLint
3. Jest tests

The configuration is located in:

```text
.husky/pre-commit
```

Commands:

```bash
npm run format:check
npm run lint
npm run test:ci
```

If any check fails, the commit is blocked.

This prevents improperly formatted or failing code from being committed.

## GitHub Actions Continuous Integration

The project uses GitHub Actions to automatically verify code quality.

Workflow file:

```text
.github/workflows/ci.yml
```

The workflow runs when code is pushed or a pull request is created.

### Automated Workflow Steps

1. Checkout repository
2. Set up Node.js 22
3. Install dependencies using npm ci
4. Check Prettier formatting
5. Run ESLint
6. Run Jest tests
7. Build the production React application

The workflow must pass before changes are considered verified.

## Production Build

Create the optimized React production build:

```bash
npm run build
```

The compiled files are generated in the `build` directory.

## Docker Production Deployment

The project uses a multi-stage Dockerfile.

The first stage uses Node.js 22 to build the React application.

The second stage uses Nginx to serve the production files.

### Build Docker Image

```bash
docker build -t assignment13-ui-garden .
```

### Run Docker Container

```bash
docker run -d \
  --name kaur_khushdeep_coding_assignment13 \
  -p 8018:8018 \
  assignment13-ui-garden
```

### Access Application

Open:

http://localhost:8018

### Verify Docker Container

```bash
docker ps
```

Expected container name:

```text
kaur_khushdeep_coding_assignment13
```

Expected port:

```text
8018
```

### Stop Docker Container

```bash
docker stop kaur_khushdeep_coding_assignment13
```

### Restart Docker Container

```bash
docker start kaur_khushdeep_coding_assignment13
```

## Docker Working Directory

The production container uses:

```text
/kaur_khushdeep_ui_garden_build_checks
```

## Project Structure

```text
assignment13-ui-garden/
├── .github/
│   └── workflows/
│       └── ci.yml
├── .husky/
│   └── pre-commit
├── .storybook/
├── public/
├── src/
├── .prettierrc
├── Dockerfile
├── package.json
├── package-lock.json
└── README.md
```

## Verification Results

The following checks were completed successfully:

| Requirement | Result |
|---|---|
| Prettier formatting | Passed |
| ESLint | Passed |
| Jest test suites | 10 passed |
| Jest tests | 19 passed |
| Husky pre-commit | Working |
| GitHub Actions | Passed |
| Docker production build | Successful |
| Docker container | Running |
| Application on port 8018 | Verified |

## Conclusion

Assignment 13 demonstrates automated code quality enforcement, continuous integration, and production deployment.

Prettier, ESLint, and Jest help maintain code quality. Husky prevents commits when checks fail, while GitHub Actions performs automated validation after changes are pushed.

Docker and Nginx provide a consistent environment for serving the production React application.

## Author

**Khushdeep Kaur**  
Full Stack Web Development  
Red River College Polytechnic