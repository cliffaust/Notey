import { createStore } from "redux";

import noteReducer from "../Reducers/noteReducer";

export const store = createStore(noteReducer);
