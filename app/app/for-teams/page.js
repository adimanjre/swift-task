import TeamCss from './team.module.css'
import Link from 'next/link'
import Image from 'next/image'
//import amazon from '../../public/img/amazon.png'
//import netflix from '../../public/img/netflix.png'
//import adobe from '../../public/img/adobe.png'
//import microsoft from '../../public/img/microsoft.png'
//import salesforce from '../../public/img/salesforce.png'
export default function Team() {
    return (
        <div>
            <div className="hero-container text-center container mt-md-5 pt-md-5 mb-md-5 pb-md-5">
                <div className="row justify-content-center align-itmes-center">
                    <div className="col-7">
                        <h1 className={TeamCss.heroTitle}>Seamlessly Efficient Team Task Management</h1>
                        <p className={`${TeamCss.heroText} mt-3`}>SwiftTasks simplifies teamwork with effortless task tracking, project management, and deadline organization. No complexities, no fuss just a streamlined solution for teams who value productivity without unnecessary complications</p>
                        <div className="mt-5">
                            <Link className="btn cta-btn" href="/signup">Start for free</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-5 mb-5">
                <div className="container d-flex justify-content-center gap-5 align-items-center">
                    <div>
                        <p className={`${TeamCss.clientText} mb-2`}>Trusted by Over</p>
                        <h1 className={TeamCss.countTeam}>50,000 Teams</h1>
                        <p className={TeamCss.clientText}>Trusted by Over</p>
                    </div>
                    <div className="d-flex justify-content-center align-items-center gap-5">
                        {/*<Image src={amazon} className={TeamCss.clientImg} alt="amazon" />*/}
                        {/*<Image src={netflix} className={TeamCss.clientImg} alt="netflix" />*/}
                        {/*<Image src={adobe} className={TeamCss.clientImg} alt="adobe" />*/}
                        {/*<Image src={microsoft} className={TeamCss.clientImg} alt="microsoft" />*/}
                        {/*<Image src={salesforce} className={TeamCss.clientImg} alt="salesforce" />*/}
                    </div>
                </div>
            </div>
            <div className="container mt-5">
                <div className="row mt-5">
                    <div className="col-5">
                        <h1 className={`${TeamCss.heroSecTitle} mb-4`}>Unifying Your Team's Tasks, Files, and Collaborations</h1>
                        <p className={`${TeamCss.heroBottomText} mb-2`}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="me-2" width="20" height="16" viewBox="0 0 20 16" fill="none">
                                <path d="M13 7H16M16 7H19M16 7V10M16 7V4M13 15V13.75C13 11.679 11.081 10 8.714 10H5.286C2.919 10 1 11.679 1 13.75V15M10 4C10 4.79565 9.68393 5.55871 9.12132 6.12132C8.55871 6.68393 7.79565 7 7 7C6.20435 7 5.44129 6.68393 4.87868 6.12132C4.31607 5.55871 4 4.79565 4 4C4 3.20435 4.31607 2.44129 4.87868 1.87868C5.44129 1.31607 6.20435 1 7 1C7.79565 1 8.55871 1.31607 9.12132 1.87868C9.68393 2.44129 10 3.20435 10 4Z" stroke="#BEBEBE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            Project Planning Made Effortless
                        </p>
                        <p className={`${TeamCss.heroBottomText} mb-2`}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="me-2" width="17" height="16" viewBox="0 0 17 16" fill="none">
                                <path d="M14.3333 1H2.66667C2.22464 1 1.80072 1.17353 1.48816 1.48241C1.17559 1.7913 1 2.21023 1 2.64706V15L3.88917 12.8588C4.17766 12.645 4.52855 12.5294 4.88917 12.5294H14.3333C14.7754 12.5294 15.1993 12.3559 15.5118 12.047C15.8244 11.7381 16 11.3192 16 10.8824V2.64706C16 2.21023 15.8244 1.7913 15.5118 1.48241C15.1993 1.17353 14.7754 1 14.3333 1Z" stroke="#BEBEBE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            Collaborate Seamlessly with File Sharing and Discussions
                        </p>
                        <p className={`${TeamCss.heroBottomText} mb-2`}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="me-2" width="16" height="13" viewBox="0 0 16 13" fill="none">
                                <path d="M7.24284 8.38074H4.53454C4.37427 8.38074 4.24448 8.50603 4.24448 8.66074V12.72C4.24448 12.8747 4.37427 13 4.53454 13H7.24284C7.40311 13 7.5327 12.8747 7.5327 12.72V8.66056C7.5327 8.50584 7.40292 8.38074 7.24284 8.38074ZM11.4657 0H8.75735C8.59708 0 8.4673 0.12529 8.4673 0.280006V12.7198C8.4673 12.8745 8.59708 12.9998 8.75735 12.9998H11.4657C11.6259 12.9998 11.7557 12.8745 11.7557 12.7198V0.280006C11.7557 0.12529 11.6259 0 11.4657 0ZM15.7101 3.77924H13.0018C12.8416 3.77924 12.7118 3.90453 12.7118 4.05925V12.7198C12.7118 12.8745 12.8416 12.9998 13.0018 12.9998H15.7099C15.8702 12.9998 16 12.8745 16 12.7198V4.05925C16 3.90472 15.8702 3.77924 15.7101 3.77924ZM2.99836 3.77924H0.290059C0.129788 3.77924 0 3.90453 0 4.05925V12.7198C0 12.8745 0.129788 12.9998 0.290059 12.9998H2.99836C3.15863 12.9998 3.28842 12.8745 3.28842 12.7198V4.05925C3.28842 3.90472 3.15863 3.77924 2.99836 3.77924Z" fill="#BEBEBE" />
                            </svg>
                            Stay on Track, Deliver with Precision
                        </p>
                    </div>
                    <div className="col-7"></div>
                </div>
                <div className="row mt-5">
                    <div className="col-7"></div>
                    <div className="col-5">
                        <h1 className={`${TeamCss.heroSecTitle} mb-4`}>Your Team's Productivity, Seamless Across Devices</h1>
                        <p className={TeamCss.heroBottomText}>Experience SwiftTasks' real-time sync across more than 10 platforms, ensuring everyone on your team has the most current information at their fingertips, always. Stay in sync and make informed decisions with the latest updates instantly available to all team members.</p>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-5">
                        <h1 className={`${TeamCss.heroSecTitle} mb-4`}>Collaborate with Clarity and Precision</h1>
                        <p className={TeamCss.heroBottomText}>SwiftTasks enables you to create projects effortlessly, add tasks with ease, set due dates, and assign responsibilities seamlessly. Take control of your projects and watch productivity soar as you manage tasks and responsibilities with efficiency and precision.</p>
                    </div>
                    <div className="col-7"></div>
                </div>
                <div className="row mt-5">
                    <div className="col-7"></div>
                    <div className="col-5">
                        <h1 className={`${TeamCss.heroSecTitle} mb-4`}>Enhance Team Collaboration</h1>
                        <p className={TeamCss.heroBottomText}>SwiftTasks facilitates informed collaboration by enabling seamless file sharing, detailed discussions, and real-time progress updates. Keep everyone in the loop, foster transparent communication, and ensure that your team remains well-informed every step of the way. Elevate your collaboration game with SwiftTasks.</p>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-5">
                        <h1 className={`${TeamCss.heroSecTitle} mb-4`}>Ensure Project Success with Precision</h1>
                        <p className={TeamCss.heroBottomText}>SwiftTasks empowers you to keep projects on track effortlessly. Gain a clear overview of your team's progress, see completed tasks, and stay informed about upcoming activities. With a comprehensive view of your team's efforts, you can proactively lead your projects to success with confidence and precision.</p>
                    </div>
                    <div className="col-7"></div>
                </div>
            </div>
            
            <div className="container mt-5 py-5">
                <div className="row justify-content-center">
                    <div className="col-8 text-center">
                        <h1 className={TeamCss.tagLine}>
                            Collaboration Made Instant, Execution Unleashed
                        </h1>
                        <p>
                            Experience the perfect blend of simplicity and capability for unparalleled productivity.
                        </p>
                        <div className="mt-5">
                            <Link className="btn cta-btn" href="/signup">Start for free</Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}