# Project Structure

This document outlines the structure of the `dot-quiz-demo` project.

- **.gitignore**: Specifies intentionally untracked files to ignore.
- **craco.config.js**: Configuration for craco.
- **GEMINI.md**: Project standards and conventions.
- **package-lock.json**: Records the exact version of each installed package.
- **package.json**: Contains project metadata and dependency lists.
- **README.md**: Project's readme file.
- **tsconfig.json**: TypeScript compiler configuration.

## `public`

This directory contains the static assets for the project.

- **favicon.ico**: Favicon for the website.
- **index.html**: The main HTML file.
- **logo192.png**: Logo image (192x192).
- **logo512.png**: Logo image (512x512).
- **manifest.json**: Web app manifest.
- **robots.txt**: Instructions for web crawlers.

## `src`

This directory contains the source code for the project.

- **App.css**: Main application styles.
- **App.test.tsx**: Tests for the main App component.
- **App.tsx**: Main application component.
- **index.css**: Global styles.
- **index.tsx**: Entry point of the application.
- **logo.svg**: SVG logo.
- **react-app-env.d.ts**: TypeScript type declarations.
- **reportWebVitals.ts**: Measures web vitals.
- **setupTests.ts**: Test setup file.

### `src/assets`

This directory contains the assets for the project.

#### `src/assets/images`
- **Dashboard_background.png**: Background image for the dashboard.
- **illustrator1.png**: Illustration image.

### `src/components`

This directory contains the reusable components for the project.

#### `src/components/atoms`

- **Loader**:
    - `Loader.module.css`: Styles for the Loader component.
    - `Loader.tsx`: Loader component.
- **Modal**:
    - `Modal.module.css`: Styles for the Modal component.
    - `Modal.tsx`: Modal component.
- **ProtectedRoute**:
    - `ProtectedRoute.tsx`: Component for handling protected routes.
- **QuizCard**:
    - `QuizCard.module.css`: Styles for the QuizCard component.
    - `QuizCard.tsx`: QuizCard component.

#### `src/components/molecules`

- **quiz**:
    - **QuestionCard**:
        - `QuestionCard.module.css`: Styles for the QuestionCard component.
        - `QuestionCard.tsx`: QuestionCard component.

#### `src/components/organisms`

- **quiz**:
    - **QuestionManager**:
        - `QuestionManager.module.css`: Styles for the QuestionManager component.
        - `QuestionManager.tsx`: QuestionManager component.

### `src/customHooks`

This directory contains the custom hooks for the project.

- **useAuth.ts**: Hook for authentication.
- **useAuthentication.ts**: Hook for authentication.
- **useLoader.ts**: Hook for managing loading state.
- **useQuizEditor.ts**: Hook for quiz editor logic.
- **useStore.ts**: Hook for accessing the redux store.
- **useWindowResize.ts**: Hook for window resize events.

### `src/pages`

This directory contains the pages for the project.

- **dashboard**:
    - `Dashboard.module.css`: Styles for the Dashboard page.
    - `Dashboard.tsx`: Dashboard page component.
- **EditQuizPage**:
    - `EditQuizPage.css`: Styles for the EditQuizPage.
    - `EditQuizPage.tsx`: EditQuizPage component.
- **signIn**:
    - `SignIn.css`: Styles for the SignIn page.
    - `SignIn.tsx`: SignIn page component.

### `src/services`

This directory contains the services for the project.

- **auth**:
    - `auth.ts`: Authentication service.
    - `authProvider.tsx`: Auth provider component.
- **firebase**:
    - `firebaseService.ts`: Firebase service.

### `src/store`

This directory contains the redux store for the project.

- **authSlice.ts**: Redux slice for authentication.
- **loaderSlice.ts**: Redux slice for loader.
- **store.ts**: Redux store configuration.
- **storeProvider.tsx**: Redux store provider.

### `src/types`

This directory is empty.

### `src/utils`

This directory contains the utility functions for the project.

- **common.ts**: Common utility functions.
- **constants.ts**: Application constants.
- **regex.ts**: Regular expression utilities.
