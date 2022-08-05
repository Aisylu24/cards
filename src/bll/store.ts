import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import thunk from "redux-thunk";
import {registrationReducer} from "./reducers/registratoin-reducer";
import {enterNewPasswordReducer} from "./reducers/enter-new-password-reducer";
import {resetPasswordReducer} from "./reducers/reset-password-reducer";
import {profileReducer} from "./reducers/profile-reducer";
import {errorReducer} from "./reducers/error-reducer";
import {loginReducer} from "./reducers/login-reducer";
import {testReducer} from "./reducers/test-reducer";

const rootReducer = combineReducers({
    login: loginReducer,
    registration: registrationReducer,
    profile: profileReducer,
    error: errorReducer,
    resetPassword: resetPasswordReducer,
    enterNewPassword: enterNewPasswordReducer,
    test: testReducer,
})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))

export type AppRootStateType = ReturnType<typeof rootReducer>
