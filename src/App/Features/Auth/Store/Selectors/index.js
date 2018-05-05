//  General
export const getCurrentToken = state => state.auth.token || '';

//  Signup
export const getSignupEmail = state => state.auth.signup.email || '';
export const getFirstName = state => state.auth.signup.firstName || '';
export const getSecondName = state => state.auth.signup.secondName || '';
export const getPassword = state => state.auth.signup.password || '';
export const getConfirmPassword = state => state.auth.signup.confirmPassword || '';

//  Login
export const getLoginUsername = state => state.auth.login.username || '';
export const getLoginPassword = state => state.auth.login.password || '';
export const getLoginAttempt = state => state.auth.login.attempt;
