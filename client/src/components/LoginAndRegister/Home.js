import React, { useState } from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import PasswordResetForm from "./PasswordResetForm";

export default function Home() {
    const [isLog, setIsLog] = useState(true);
    const [isreset, setIsreset] = useState(true);
    return <>
        <div className="home-container">
            <h1>LOGO</h1>
            <div className="section-container">
                <section className="text-section">
                    TEXT WILL <br />
                    BE DISPLAYED <br />
                    HERE
                </section>
                <section className="form-section">
                    {
                        isLog ?
                            (isreset ?
                                <LoginForm setIsLog={setIsLog} setIsreset={setIsreset} /> :
                                <PasswordResetForm setIsreset={setIsreset} />) :
                            <RegisterForm setIsLog={setIsLog} />
                    }
                </section>
            </div>
        </div>
    </>
}