import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom'
import Registration from "./Registration/Registration";
import Profile from "./Profile/Profile";
import ResetPassword from "./ResetPassword/ResetPassword";
import Error404 from "./Error404/Error404";
import EnterNewPassword from "./EnterNewPassword/EnterNewPassword";
import Test from "./Test/Test";

export const PATH = {
    LOGIN: '/login',
    REGISTRATION: '/registration',
    PROFILE: '/profile',
    RESET_PASSWORD: '/reset-password',
    ENTER_NEW_PASSWORD: '/new-password',
    TEST: '/test'
}

const Pages = () => {
    return (
        <div>

            <Routes>
                <Route path={'/'} element={<Navigate to={PATH.LOGIN}/>}/>
                <Route path={PATH.REGISTRATION} element={<Registration/>}/>
                <Route path={PATH.PROFILE} element={<Profile/>}/>
                <Route path={PATH.RESET_PASSWORD} element={<ResetPassword/>}/>
                <Route path={PATH.ENTER_NEW_PASSWORD} element={<EnterNewPassword/>}/>
                <Route path={'/*'} element={<Error404/>}/>
                <Route path={PATH.TEST} element={<Test/>}/>
            </Routes>
        </div>
    );
};

export default Pages;