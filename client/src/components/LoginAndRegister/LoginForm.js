import React, { useEffect, useState } from "react";
import { getCurrentUser, getToken, setCurrentUser, setToken } from "../../utills/storage-utills";
import { useNavigate } from "react-router-dom";
//server path should be set
import { loginToAccount } from "../../utills/api-utill";
import { toast } from "react-toastify";
export default function LoginForm({ setIsLog, setIsreset }) {
    const navigate = useNavigate();
    const [option, setOption] = useState(true);
    const optionCSS = {
        fontWeight: "bold",
        color: "#4E94F4"
    };
    const [error, setError] = useState({
        email: "",
        password: ""
    });
    const [boo, setBoo] = useState(true);
    const [loginUser, setLoginUser] = useState({
        email: "",
        password: ""
    });

    useEffect(() => {
        if (getToken() && getCurrentUser().isVendor) return navigate("/vendor/proposals");
        if (getToken() && getCurrentUser().isUser) return navigate("/user/proposals");
    }, []);

    function onFormSubmit(e) {
        e.preventDefault();

        setBoo(false);
        loginToAccount(loginUser, option ? "vendor" : "user")
            .then(res => {
                if (res.status === "Success") {
                    setToken(res.token);
                    setCurrentUser(res.user);
                    setLoginUser({
                        email: "",
                        password: ""
                    });
                    setBoo(true);
                    if (option) toast.success(`${getCurrentUser().name} as vendor Logged in successfully`, {
                        position: "bottom-right"
                    })
                    else toast.success(` ${getCurrentUser().name} as User logged in successfully`, {
                        position: "bottom-right"
                    })
                    if (option) navigate("/vendor/proposals");
                    else navigate("/user/proposals");
                }
                else {
                    setBoo(true);
                    if (res.field) setError(ex => ({ ...ex, [res.field]: res.message }));
                    else alert(res.message);
                }
            })
            .catch(res => alert(res.message))
    }

    return <>
        <div className="signin-form-container">
            <div className="option">
                <p className="vendor" style={option ? optionCSS : {}} onClick={() => setOption(true)}>
                    Vendor
                </p>
                <p className="user" style={!option ? optionCSS : {}} onClick={() => setOption(false)}>
                    User
                </p>
            </div>
            <form onSubmit={onFormSubmit}>
                <p className="heading">
                    Sign in your Account
                </p>
                <div className="field-container margin">
                    <input type="email" id="email" placeholder="Email" style={error.email ? { border: "1px solid red" } : {}} required onChange={e => {
                        setLoginUser(ex => ({ ...ex, email: e.target.value }));
                        setError(ex => ({ ...ex, email: "" }));
                    }} />
                </div>
                {error.email && <span className="error">*{error.email}</span>}
                <div className="field-container">
                    <input type="password" id="password" placeholder="Password" minLength={8} style={error.password ? { border: "1px solid red" } : {}} required onChange={e => {
                        setLoginUser(ex => ({ ...ex, password: e.target.value }));
                        setError(ex => ({ ...ex, password: "" }));
                    }} />
                </div>
                <p className="forget" onClick={() => setIsreset(false)}>Forget Password?</p>
                {error.password && <span className="error">*{error.password}</span>}
                <div className="btn-link-container margin">
                    <p className="createLink" onClick={() => setIsLog(false)}>Create Account</p>
                    <button type="submit">{boo ? "SIGN IN" : <span className="loader"></span>}</button>
                </div>
            </form>
        </div>
    </>
}