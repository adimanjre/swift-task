import Link from 'next/link'
import Help from '../getting_started.module.css'
export default function HelpNav({active }) {
    return (
        <div>
            <Link href="/help/getting-started/Getting-started-guides" className={Help.mainLink}>Getting Started</Link>
            <div className={Help.hLine }></div>
            <div>
                <Link href="/help/getting-started/Getting-started-guides" 
                className={`${Help.subLink} ${active == 'Getting started guides'? Help.activeLink:''}`}><p className="mb-0">Getting started guides</p></Link>
                <Link href="/help/getting-started/Account-basics"
                    className={`${Help.subLink} ${active == 'Account basics' ? Help.activeLink : ''}`}>
                    <p className="mb-0">Account basics</p></Link>
                <Link href="/help/getting-started/Your-privacy"
                    className={`${Help.subLink} ${active == 'Your privacy' ? Help.activeLink : ''}`}>
                    <p className="mb-0">Your privacy</p></Link>
                <Link href="/help/getting-started/Tips-and-trick"
                    className={`${Help.subLink} ${active == 'Tips and trick' ? Help.activeLink : ''}`}>
                    <p className="mb-0">Tips and trick</p></Link>
            </div>
            <div className={Help.hLine}></div>
            <Link href="/help/use-swift-tasks/Getting-started-guides" className={Help.mainLink}>Use Swift Tasks</Link>
        </div>
    )
}