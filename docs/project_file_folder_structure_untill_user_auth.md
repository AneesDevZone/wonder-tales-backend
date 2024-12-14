
# Project Overview: Wonder-Tales Backend

## src/
- **auth/**
  - **auth.controller.spec.ts**: Unit tests for the authentication controller.
  - **auth.controller.ts**: RESTful API endpoints for user authentication.
  - **auth.guard.ts**: Guard logic to protect certain routes based on authentication status.
  - **auth.module.ts**: NestJS module for authentication-related functionality.
  - **auth.service.spec.ts**: Unit tests for the authentication service.
  - **auth.service.ts**: Business logic for handling user authentication.
  - **jwt.strategy.ts**: Strategy for handling JSON Web Tokens (JWT) for authentication.
  - **local.strategy.ts**: Strategy for handling local authentication (username/password).

- **users/**
  - **entities/**
    - **user.entity.ts**: Database schema/entity for user information.
  - **users.controller.spec.ts**: Unit tests for the users controller.
  - **users.controller.ts**: RESTful API endpoints for user management.
  - **users.module.ts**: NestJS module for users-related functionality.
  - **users.service.spec.ts**: Unit tests for the users service.
  - **users.service.ts**: Business logic for handling users' data and operations.

- **app.module.ts**: The root module of the application, importing all necessary modules.
- **main.ts**: The entry point of the application.

## test/
- **auth.service.spec.ts**: Unit tests for the authentication service.
- **auth.controller.spec.ts**: Unit tests for the authentication controller.
- **users.service.spec.ts**: Unit tests for the users service.
- **users.controller.spec.ts**: Unit tests for the users controller.

## Other Files:
- **.eslintrc.js**: ESLint configuration for code linting.
- **.gitignore**: List of files and directories to ignore in Git.
- **.prettierrc**: Prettier configuration for code formatting.
- **nest-cli.json**: NestJS CLI configuration.
- **package-lock.json**: Lock file for managing dependencies.
- **package.json**: Project dependencies and scripts.
- **README.md**: Project documentation file.
- **tsconfig.build.json**: TypeScript configuration for building the project.
- **tsconfig.json**: TypeScript configuration for development.
