import { combineReducers } from "redux"
import { authReducer } from "./authReducers"
import { bankingReducer } from "./bankingReducers"
import { postsReducer } from "./postsReducer"

export const rootReducer = combineReducers({
  auth: authReducer,
  banking: bankingReducer,
  posts: postsReducer,
})
