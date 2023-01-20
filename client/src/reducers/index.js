import authReducer from "./auth";
import { combineReducers } from "redux";
import currentUserReducer from './currentUser'
import questionsReducer from './questions'
import usersReducer from "./users";

export default combineReducers({
    authReducer,currentUserReducer,questionsReducer,usersReducer
})