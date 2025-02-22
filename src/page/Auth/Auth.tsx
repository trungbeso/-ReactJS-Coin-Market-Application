import React, {useRef, useEffect} from 'react';
import SignUpForm from "./SignUpForm";
import {Button} from "@/components/ui/button"
import {useLocation, useNavigate} from "react-router-dom";
import ForgotPasswordForm from "./ForgotPasswordForm";
import SignInForm from "./SignInForm";

const Auth = () => {
    const videoRef = useRef(null);
    const navigate = useNavigate();
    const location = useLocation();

    // Thêm user gesture handler
    const handleUserInteraction = () => {
        if (videoRef.current) {
            videoRef.current.play();
            document.removeEventListener('click', handleUserInteraction);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleUserInteraction);
        return () => document.removeEventListener('click', handleUserInteraction);
    }, []);

    return (
        <div className="relative min-h-screen flex items-center justify-center">
            {/* Video Background */}
            <video
                ref={videoRef}
                autoPlay
                muted
                loop
                playsInline
                className="fixed inset-0 z-0 object-cover w-full h-full"
                poster="/src/assets/place-holder.png" // Placeholder image
            >
                <source src="/src/assets/coin-fall.mp4" type="video/mp4"/>
                <source src="/src/assets/background.webm" type="video/webm"/>
                Your browser does not support HTML5 video.
            </video>

            {/* Overlay */}
            <div className="absolute bg-slate-300 bg-opacity-20 z-10"></div>

            {/* Login Form */}
            <div
                className="absolute z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                flex flex-col justify-center items-center h-[35rem] w-[30rem] rounded-md bg-black/30
                backdrop-blur-lg shadow-2xl shadow-white px-10 *:py-7">
                <h1 className="text-6xl font-bold text-white pb-9 text-center font-serif">
                    Coin
                    <span className="bg-amber-500 rounded-md p-2">Market</span>

                </h1>
                {location.pathname == "/sign-up" ? (<section className="w-full">
{/*Sign Up Form*/}
                    <SignUpForm/>
                    <div className="flex items-center justify-center mt-3">
                        <span>Already have account</span>
                        <Button onClick={() => navigate("/sign-in")} className="hover:text-amber-400 cursor-pointer">
                            Sign In
                        </Button>
                    </div>
                </section>) : location.pathname == "/forgot-password" ?
                    <section className="w-full">
{/*Forgot password Form*/}
                        <ForgotPasswordForm/>
                        <div className="flex items-center justify-center mt-3">
                            <span>Back to Login Page</span>
                            <Button onClick={() => navigate("/sign-in")} className="hover:text-amber-400 cursor-pointer ">
                                Sign In
                            </Button>
                        </div>
                    </section> :
                    <section className="w-full">
{/*Sign In Form*/}
                        <SignInForm/>
                        <div className="flex items-center justify-center mt-3">
                            <span>Don't have an account ?</span>
                            <Button onClick={() => navigate("/sign-up")} className="hover:text-amber-400 cursor-pointer">
                                Sign Up
                            </Button>
                        </div>

                        <div className="flex items-center justify-center">
                            <Button
                                className = "py-5 w-full mt-16 cursor-pointer hover:bg-amber-500 border-0 shadow-sm hover:shadow-amber-500"
                                onClick={() => navigate("/forgot-password")}>
                                Forgot password
                            </Button>
                        </div>
                    </section>}

            </div>
        </div>
    );
};

export default Auth;