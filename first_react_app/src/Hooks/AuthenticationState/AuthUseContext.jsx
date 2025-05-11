import React, { useContext } from "react";
import authenticationContext from "./AuthContext";
const AuthUseContext = () => {
    const { isLoggedIn, login, logout } = useContext(authenticationContext);
    return (
        <div>
            {isLoggedIn ? (
                <>
                    <h1>Welcome Back!</h1>
                    <button onClick={logout}>Logout</button>

                </>
            ) : (
                <>
                    <h1>Please Login!</h1>

                    <button onClick={login}>Login</button>
                </>
            )}
        </div>
    );
};

export default AuthUseContext;
