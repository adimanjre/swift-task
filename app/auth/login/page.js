"use client"

import { useState } from 'react'
import { signIn } from 'next-auth/react'
export default function Login() {
    const [userInfo, setUserInfo] = useState({email:'',password:''})
    const handleSubmit = async ( e ) => {
        e.preventDefault();
        console.log(userInfo.email)
        console.log(userInfo.password)
        const res = await signIn('credentials', {
            username: userInfo.email,
            password: userInfo.password,
            redirect:false
        })
        setUserInfo({ email: '', password:'' })
        console.log(res)
    }
    return (
        <>
            <form className="container" onSubmit={handleSubmit}>
                <div className="form-outline mb-4">
                    <input type="email" id="form2Example1" className="form-control" value={userInfo.email}
                        onChange={(e) => {
                            setUserInfo({...userInfo,email:e.target.value})
                        } }
                    />
                    <label className="form-label" htmlFor="form2Example1">Email address</label>
                </div>

                <div className="form-outline mb-4">
                    <input type="password" id="form2Example2" className="form-control" value={userInfo.password}
                        onChange={(e) => {
                            setUserInfo({ ...userInfo, password: e.target.value })
                        }}
                    />
                    <label className="form-label" htmlFor="form2Example2">Password</label>
                </div>

                <div className="row mb-4">
                    <div className="col d-flex justify-content-center">

                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="form2Example31" />
                            <label className="form-check-label" htmlFor="form2Example31"> Remember me </label>
                        </div>
                    </div>

                    <div className="col">

                        <a href="#!">Forgot password?</a>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block mb-4">Sign in</button>

                <div className="text-center">
                    <p>Not a member? <a href="#!">Register</a></p>
                    <p>or sign up with:</p>
                    <button type="button" className="btn btn-link btn-floating mx-1">
                        <i className="fab fa-facebook-f"></i>
                    </button>

                    <button type="button" className="btn btn-link btn-floating mx-1">
                        <i className="fab fa-google"></i>
                    </button>

                    <button type="button" className="btn btn-link btn-floating mx-1">
                        <i className="fab fa-twitter"></i>
                    </button>

                    <button type="button" className="btn btn-link btn-floating mx-1">
                        <i className="fab fa-github"></i>
                    </button>
                </div>
            </form>
        </>
    )
}