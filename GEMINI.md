# Project Standards: DotQuiz (React + Firebase)

## 🛠 Tech Stack
- **Frontend:** React 19 (CRACO)
- **State Management:** Redux Toolkit (`src/store`)
- **Backend:** Firebase v9+ Modular SDK (Firestore, Auth)
- **Styling:** CSS Modules (`*.module.css`) - **Strict Requirement**
- **Architecture:** Atomic Design
- **Theme:** **Aurora Borealis (Vibrant Gradients + Liquid Motion)**

## 🎨 Theme Specifications (Aurora)
The AI must apply these visual constants to all interactive/high-impact components:
- **Primary Gradient:** `linear-gradient(135deg, #a855f7, #3b82f6)` (Purple to Blue).
- **Secondary Accents:** `#00e676` (Green), `#ffd700` (Gold) for success/highlight states.
- **Motion Identity:** Use "Liquid/Waving" effects on hover.
  - *Mechanism:* Animate `border-radius` with asymmetrical percentages (e.g., `30% 70% 70% 30% / 30% 30% 70% 70%`).
  - *Transition:* Minimum `0.6s` with `cubic-bezier(0.4, 0, 0.2, 1)`.
- **Glow:** Use `box-shadow` or `::after` pseudo-elements with `filter: blur()` to create an atmospheric "Aura" around components.

## 🏗 Directory Structure & Mapping
The Agent MUST follow this hierarchy. If a directory doesn't exist, create it.

| Category | Path | Content Type |
| :--- | :--- | :--- |
| **Atoms** | `src/components/atoms/` | Generic UI (AuroraButtons, Loaders, Modals). |
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
- **Search Before Create:** Before creating a UI element, search `src/components/atoms` to see if an Aurora-styled component exists.
- **Theme Enforcement:** When generating new UI, automatically apply the **Aurora** gradient and hover-wave animations unless a "Flat" style is explicitly requested.
- **Atomic Validation:** If I ask for a "Login Form," place it in `molecules`. If I ask for a "User Profile Section," place it in `organisms`.
- **Firebase Constraints:** Use the Modular SDK syntax (e.g., `getFirestore`, `doc`, `setDoc`). Do not use legacy `firebase.firestore()` syntax.
- **Redux Integration:** Check `src/store/authSlice.ts` before creating local auth states to ensure global state consistency.

## ⌨️ Common Commands
- **Dev:** `npm run start`
- **Build:** `npm run build`
- **Lint:** `npm run lint`
- **Test:** `npm test`