"use client"

import Link from 'next/link'
import Image from 'next/image'
import Page from './page.module.css'
//import amazon from '../public/img/amazon.png'
//import netflix from '../public/img/netflix.png'
//import adobe from '../public/img/adobe.png'
//import microsoft from '../public/img/microsoft.png'
//import salesforce from '../public/img/salesforce.png'
import {signIn } from 'next-auth/react'
export default function Index() {
    return (
        <div>
            {/*<button onClick={()=>signIn() }>login </button>*/}
            <div className="hero-container text-center container mt-md-5 pt-md-5 mb-md-5 pb-md-5">
                <div className="row justify-content-center align-itmes-center">
                    <div className="col-7">
                        <h1 className={Page.heroTitle}>Task Management Made Swift and Simple</h1>
                        <p className={`${Page.heroText} mt-3`}>Swift Tasks is your ultimate productivity companion, designed to streamline your daily workflow and boost your efficiency. Organize your tasks effortlessly, prioritize with ease, and conquer your goals with our intuitive interface. Stay on top of your to-do list like never before and unlock your true potential. Experience productivity, reimagined.</p>
                        <div className="mt-5">
                            <Link className="btn cta-btn" href="/signup">Start for free</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-5">
                <div className="container text-center">
                    <p className={Page.clientText}>
                        Empowering over 30 million individuals and teams worldwide to master productivity and stay organized with confidence
                    </p>
                    <div className="d-flex justify-content-center align-items-center gap-5">
                        {/*<Image src={amazon} className={Page.clientImg} alt="amazon" />*/}
                        {/*<Image src={netflix} className={Page.clientImg} alt="netflix" />*/}
                        {/*<Image src={adobe} className={Page.clientImg} alt="adobe" />*/}
                        {/*<Image src={microsoft} className={Page.clientImg} alt="microsoft" />*/}
                        {/*<Image src={salesforce} className={Page.clientImg} alt="salesforce" />*/}
                    </div>
                </div>
            </div>
            <div className="container mt-5">
                <div className="row mt-5">
                    <div className="col-5">
                        <div className={`${Page.heroSecTopText} mb-2`}>Free Your Mind</div>
                        <h1 className={`${Page.heroSecTitle} mb-3`}>Unlock a clutter-free mind instantly with SwiftTask's unique natural language recognition</h1>
                        <p className={Page.heroBottomText}>Type anything into the task field, and watch as your to-do list materializes with ease and precision.</p>
                    </div>
                    <div className="col-7"></div>
                </div>
                <div className="row mt-5">
                    <div className="col-7"></div>
                    <div className="col-5">
                        <div className={`${Page.heroSecTopText} mb-2`}>Embrace the Essentials</div>
                        <h1 className={`${Page.heroSecTitle} mb-3`}>Rediscover mental clarity and focus with ease.</h1>
                        <p className={Page.heroBottomText}>SwiftTasks automatically sorts your tasks into Today, Upcoming, and custom Filter views, empowering you to prioritize your most essential work effortlessly.</p>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-5">
                        <div className={`${Page.heroSecTopText} mb-2`}>Free Your Mind</div>
                        <h1 className={`${Page.heroSecTitle} mb-3`}>Unlock a clutter-free mind instantly with SwiftTask's unique natural language recognition</h1>
                        <p className={Page.heroBottomText}>Type anything into the task field, and watch as your to-do list materializes with ease and precision.</p>
                    </div>
                    <div className="col-7"></div>
                </div>
            </div>
            <div className="container mt-5 py-5">
                <div className="row justify-content-center">
                    <div className="col-8 text-center">
                        <h1 className={Page.reviewSec}>
                            "SwiftTasks empowers you to customize your experience, whether you prefer simplicity or delve into more intricate task management. The choice is yours, and the possibilities are boundless."
                        </h1>
                        <p className={Page.reviewName}>-the verge</p>
                    </div>
                </div>
            </div>
            <div className="container mt-5">
                <div className="row mt-5">
                    <div className="col-5">
                        <div className={`${Page.heroSecTopText} mb-4`}>Your Trusted Partner for the Journey</div>
                        <h1 className={`${Page.heroSecTitle} mb-3`}>SwiftTasks, committed for the long haul, is the task manager you can rely on for life.</h1>
                        <p className={Page.heroBottomText}>With 16 years and 174 days of dedication, we prioritize your needs above all else and will never compromise our values by selling out to the highest bidder. Your trust is our unwavering commitment.</p>
                    </div>
                    <div className="col-7 d-flex aling-items-center gap-4 justify-content-center">
                        <div className={`${Page.heroStatbox}d-flex flex-column text-center`}>
                            <div className={Page.statImage}></div>
                            <div className={Page.statData}>
                                <h1 className={Page.statNumber}>160+</h1>
                                <p className={Page.statText}>Total Countries Reached</p>
                            </div>
                        </div>
                        <div className={`${Page.heroStatbox}d-flex flex-column text-center`}>
                            <div className={Page.statImage}></div>
                            <div className={Page.statData}>
                                <h1 className={Page.statNumber}>50M</h1>
                                <p className={Page.statText}>Total Users</p>
                            </div>
                        </div>
                        <div className={`${Page.heroStatbox}d-flex flex-column text-center`}>
                            <div className={Page.statImage}></div>
                            <div className={Page.statData}>
                                <h1 className={Page.statNumber}>5+</h1>
                                <p className={Page.statText}>Years of Service</p>
                            </div>
                        </div>
                        <div className={`${Page.heroStatbox}d-flex flex-column text-center`}>
                            <div className={Page.statImage}></div>
                            <div className={Page.statData}>
                                <h1 className={Page.statNumber}>10B</h1>
                                <p className={Page.statText}>Tasks Completed</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mt-5 py-5">
                <div className="row justify-content-center">
                    <div className="col-8 text-center">
                        <h1 className={Page.tagLine}>
                            SwiftTasks, Where Calm Meets Clarity,
                            Your Beloved Productivity Companion
                        </h1>
                        <div className="mt-5">
                            <Link className="btn cta-btn" href="/signup">Start for free</Link>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}