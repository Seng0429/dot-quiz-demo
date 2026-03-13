# Project Standards: DotQuiz (React + Firebase)

## 🛠 Tech Stack
- **Frontend:** React 19 (CRACO)
- **State Management:** Redux Toolkit (`src/store`)
- **Backend:** Firebase v9+ Modular SDK (Firestore, Auth)
- **Styling:** CSS Modules (`*.module.css`) - **Strict Requirement**
- **Architecture:** Atomic Design

## 🏗 Directory Structure & Mapping
The Agent MUST follow this hierarchy. If a directory doesn't exist, create it.

| Category | Path | Content Type |
| :--- | :--- | :--- |
| **Atoms** | `src/components/atoms/` | Generic UI (Buttons, Loaders, Modals). |
| **Molecules** | `src/components/molecules/` | Combined atoms (QuestionCard, FormField). |
| **Organisms** | `src/components/organisms/` | Complex blocks (QuestionManager, Navbar). |
| **Pages** | `src/pages/` | Route components (Dashboard, SignIn). |
| **Services** | `src/services/` | **Pure logic only.** Firebase/API calls. |
| **Hooks** | `src/hooks/` | Logic & state. *Migration target for `customHooks/`.* |
| **Context** | `src/context/` | React Context providers (Auth, Theme). |
| **Store** | `src/store/` | Redux Slices and Store config. |

## ⚖️ Development Rules

1. **Strict Logic Separation:**
   - **Components** are for UI/Layout only.
   - **Hooks** handle component-specific state and side effects.
   - **Services** handle external data (Firebase).
   - *Data Flow:* Component ➔ Hook ➔ Service.

2. **File Naming & Structure:**
   - Components: `PascalCase.tsx` + `PascalCase.module.css`.
   - Hooks: `useHookName.ts`.
   - Services/Utils: `camelCase.ts`.
   - **Folder Pattern:** Every component should ideally have its own folder if it includes a CSS module.

3. **CSS Modules:** Always use `.module.css` for new components to avoid global style leakage. Import them as `styles` in the component.

4. **Legacy Transition:**
   - New hooks must go into `src/hooks/`, NOT `src/customHooks/`.
   - New Firebase logic must go into specific service files (e.g., `src/services/firebase/quizService.ts`).

5. **Security (RBAC):** Every Firestore write must check for a valid `uid`. Ensure operations are scoped to `user` or `admin` roles.

## 🧩 AI Guidance (Agent Instructions)
- **Search Before Create:** Before creating a UI element, search `src/components/atoms` to see if a reusable component exists.
- **Atomic Validation:** If I ask for a "Login Form," place it in `molecules`. If I ask for a "User Profile Section," place it in `organisms`.
- **Firebase Constraints:** Use the Modular SDK syntax (e.g., `getFirestore`, `doc`, `setDoc`). Do not use legacy `firebase.firestore()` syntax.
- **Redux Integration:** Check `src/store/authSlice.ts` before creating local auth states to ensure global state consistency.

## ⌨️ Common Commands
- **Dev:** `npm run start`
- **Build:** `npm run build`
- **Lint:** `npm run lint`
- **Test:** `npm test`