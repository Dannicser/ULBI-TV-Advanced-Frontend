import { IScrollSaveSchema } from "./model/types/ScrollSave";

import { getScrollSaveByPath } from "./model/selectors/getScrollSave";
import { scrollSaveActions, scrollSaveReducer } from "./model/slices/ScrollSaveSlice";

export { IScrollSaveSchema, getScrollSaveByPath, scrollSaveActions, scrollSaveReducer };
