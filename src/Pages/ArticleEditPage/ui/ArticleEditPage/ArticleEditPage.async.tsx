import { lazy } from "react";

export const ArticleEditPageAsync = lazy(() => import("./ArticleEditPage"));

// компонент должен экспортироваться по дефолту (Который в импорте)
