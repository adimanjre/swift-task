"use client"
import Link from 'next/link'
import Image from 'next/image'
/*import Logo from '../../public/img/LOGO.png'*/
import Dropdown from 'react-bootstrap/Dropdown';
export function Nav() {
    return (
        <nav className="d-flex justify-content-between align-items-center mt-2 p-2">
            <div className="d-flex justify-content-between align-items-center">
                <Link href='/' className="logoImage d-flex justify-content-between align-items-center">
                    {/*<Image src={ Logo } alt="logo" />*/}Logo
                </Link>
            </div>
            <div className="d-flex align-items-center gap-5">
                <div>
                    <Link href="/features" className="navLinks">Features</Link>
                </div>
                <div>
                    <Link href="/for-teams" className="navLinks">For Teams</Link>
                </div>
                <div>
                    <Dropdown>
                        <Dropdown.Toggle variant="success" className="navLinks" id="dropdown-basic">
                            Resources
                        </Dropdown.Toggle>

                        <Dropdown.Menu >
                            <Dropdown.Item className="p-3"><Link href="/resources" className="navLinks">
                                <h1 className="resourseHeading">Getting started guide</h1>
                                <p className="resourseText mb-0">This getting started guide will lead you through the first steps of your productive journey.</p>
                            </Link></Dropdown.Item>
                            <Dropdown.Item className="p-3"><Link href="/help" className="navLinks">
                                <h1 className="resourseHeading">Help Center</h1>
                                <p className="resourseText mb-0">your go-to resource for answers, tips, and insights</p>
                            </Link></Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    {/*<div class="dropdown">*/}
                    {/*    <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">*/}
                    {/*        Dropdown button*/}
                    {/*    </button>*/}
                    {/*    <ul class="dropdown-menu">*/}
                    {/*        <Link href="/resources" className="navLinks">Resources</Link>*/}
                    {/*        <Link href="/resources" className="navLinks">Resources</Link>*/}
                    {/*        <Link href="/resources" className="navLinks">Resources</Link>*/}
                    {/*    </ul>*/}
                    {/*</div>*/}
                    
                </div>
                <div>
                    <Link href="/pricing" className="navLinks">Pricing</Link>
                </div>
                <div className="v-line"></div>
                <div>
                    <Link href="/login" className="navLinks">Log In</Link>
                </div>
                <div>
                    <Link className="btn cta-btn" href="/signup">Start for free</Link>
                </div>
            </div>

        </nav>
    )
}


