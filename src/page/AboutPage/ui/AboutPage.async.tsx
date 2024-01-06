import { lazy } from "react";

export const AboutPageAsync = lazy(() => import("./AboutPage"));

// компонент должен экспортироваться по дефолту (Который в импорте)
