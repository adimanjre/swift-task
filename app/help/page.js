"use client"

import Link from 'next/link'
import Image from 'next/image'
import ArticleCard from './components/ArticleCard'
import Help from './help.module.css'
import gettingStarted from '@/public/img/getting-started.png'
import country from '@/public/img/countries.png'
import users from '@/public/img/man.png'
import service from '@/public/img/service.png'
import task from '@/public/img/task.png'
import useSwift from '@/public/img/use-swift.png'

import {useEffect, useState } from 'react'
export default function HelpPage() {
    const [hasTyped, setTyped] = useState(false)
    const [searchValue, setSearchValue] = useState('')
    const [articleValue, setArticleValue] = useState([])

    useEffect(() => {
        async function getArticles() {
            const res = await fetch('/api/popular-articles');
            const data = await res.json()
            console.log(data.data);
            setArticleValue(data.data)
            return data.data
        }
        getArticles()
    },[])
    function handleSearchEvent(e) {
        setSearchValue(e.target.value);
        console.log(e.target.value.length)
        if (e.target.value.length > 0) {
            setTyped(true)
        } else {
            setTyped(false)
        }
    }
    
    return (
        <div className= "container p-5" >
            <div className="container search-container text-center mt-5 pt-5 mb-5" >
                <h1 className={Help.heroTitle}> How can we help ? </h1>
                <div className={`${Help.InputContainer} position-relative d-inline-block mt-3`}>
                    < input type="text" value={searchValue} className={`${Help.searchBox}`} onChange={(e) => {
                        handleSearchEvent(e) 
                    }} />
                    <div className="position-absolute top-50 start-0 translate-middle-y ps-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                            <path d="M15.7502 15.7502L12.4929 12.4929M12.4929 12.4929C13.0501 11.9357 13.492 11.2743 13.7936 10.5463C14.0951 9.81834 14.2503 9.03811 14.2503 8.25015C14.2503 7.4622 14.0951 6.68197 13.7936 5.95399C13.492 5.22602 13.0501 4.56457 12.4929 4.0074C11.9357 3.45024 11.2743 3.00827 10.5463 2.70673C9.81834 2.4052 9.03811 2.25 8.25015 2.25C7.4622 2.25 6.68197 2.4052 5.95399 2.70673C5.22602 3.00827 4.56457 3.45024 4.0074 4.0074C2.88216 5.13265 2.25 6.65881 2.25 8.25015C2.25 9.84149 2.88216 11.3677 4.0074 12.4929C5.13265 13.6182 6.65881 14.2503 8.25015 14.2503C9.84149 14.2503 11.3677 13.6182 12.4929 12.4929Z" stroke="#BEBEBE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                    <div className={`${Help.searchArrow} position-absolute top-50 end-0 translate-middle-y pe-3`}>
                        <button className={Help.searchArrow} {...(!hasTyped ? { disabled: true } : {}) }>
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="14" viewBox="0 0 12 14" fill="none">
                                <path d="M6.7101 12.7102L11.7101 7.71019C11.8011 7.61508 11.8725 7.50294 11.9201 7.38019C12.0201 7.13672 12.0201 6.86365 11.9201 6.62019C11.8725 6.49743 11.8011 6.38529 11.7101 6.29019L6.7101 1.29019C6.61687 1.19695 6.50618 1.12299 6.38435 1.07253C6.26253 1.02207 6.13196 0.996093 6.0001 0.996093C5.7338 0.996093 5.47841 1.10188 5.2901 1.29019C5.1018 1.47849 4.99601 1.73388 4.99601 2.00019C4.99601 2.26649 5.1018 2.52188 5.2901 2.71019L8.5901 6.00019L1.0001 6.00019C0.734887 6.00018 0.480532 6.10554 0.292996 6.29308C0.10546 6.48061 0.0001037 6.73497 0.000103688 7.00018C0.000103676 7.2654 0.10546 7.51976 0.292996 7.70729C0.480532 7.89483 0.734887 8.00018 1.0001 8.00019L8.5901 8.00019L5.2901 11.2902C5.19637 11.3831 5.12198 11.4937 5.07121 11.6156C5.02044 11.7375 4.9943 11.8682 4.9943 12.0002C4.9943 12.1322 5.02044 12.2629 5.07121 12.3848C5.12198 12.5066 5.19637 12.6172 5.2901 12.7102C5.38307 12.8039 5.49367 12.8783 5.61553 12.9291C5.73739 12.9798 5.86809 13.006 6.0001 13.006C6.13211 13.006 6.26282 12.9798 6.38468 12.9291C6.50654 12.8783 6.61714 12.8039 6.7101 12.7102Z" fill={!hasTyped ?"#BEBEBE" : "black" } />
                            </svg>
                        </button>
                    </div>
                </div>
                < div className="d-flex align-items-center justify-content-center mt-3" >
                    <p className={Help.commonTopicText } >Common topics: &nbsp;
                        <Link href="/">filters, </Link>
                        < Link href="/"> theme, </Link>
                        < Link href="/"> account </Link>
                    </p>
                </div>
            </div>
            <div className="container d-flex gap-4 justify-content-center mt-5 mb-5" >
                <Link href="/help/getting-started/Getting-started-guides" className={`${Help.helpBox} text-center`}>
                    <div className={`${Help.mainTopic} p-3`}>
                        <Image src={gettingStarted} alt="getting-started" className="img-fluid" height="150" />
                        <h1 className={`${Help.mainTopicHeading} my-2`}> Getting Started </h1>
                    </div>
                </Link>
                <Link href="/help/use-swift-tasks/Getting-started-guides" className={`${Help.helpBox} text-center`}>
                    <div className={`${Help.mainTopic} p-3`}>
                        <Image src={useSwift} alt="getting-started" className="img-fluid" height="150" />
                        <h1 className={`${Help.mainTopicHeading} my-2`}> Use Swift Tasks </h1>
                    </div>
                </Link>
            </div>
            <div className="container row justify-content-center mb-5" >
                <div className="col-10 display-flex flex-column align-items-center">
                    <h1 className={`${Help.artcileHeading} text-center mt-4`} > Popular Articles </h1>
                    <div className="row mt-4 gap-3 justify-content-center" >
                        {
                            articleValue.map(obj => {
                                return (
                                    <ArticleCard title={obj.title} key={ obj.id } redirection={obj.redirection} />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <div className="container row mt-5 pt-5 align-items-center">
                <div className="col-6">
                    <div className={`${Help.taskAllyLine} mb-3`}>
                    </div>
                    <h1 className={`${Help.taskAllyHeading} mb-2`}>
                        Your Lifetime
                        Task Management Ally
                    </h1>
                    <p className={Help.taskAllyText}>
                        Trust SwiftTasks to be your unwavering ally in task management for life.
                    </p>
                </div>
                <div className="col-6">
                    <div className="d-flex gap-4 align-items-center">
                        <div className={Help.statBox}>
                            <Image src={country} alt="country" height="80" className="mb-3" />
                            <h1 className={Help.statNumber}>160+</h1>
                            <p className={Help.statText}>Total Countries Reached</p>
                        </div>
                        <div className={Help.statBox}>
                            <Image src={users} alt="users" height="80" className="mb-3" />
                            <h1 className={Help.statNumber}>50M</h1>
                            <p className={Help.statText}>Total Users</p>
                        </div>
                        <div className={Help.statBox}>
                            <Image src={service} alt="service" height="80" className="mb-3" />
                            <h1 className={Help.statNumber}>5+</h1>
                            <p className={Help.statText}>Years of Service</p>
                        </div>
                        <div className={Help.statBox}>
                            <Image src={task} alt="task" height="80" className="mb-3" />
                            <h1 className={Help.statNumber}>10B</h1>
                            <p className={Help.statText}>Tasks Completed</p>
                        </div>
                    </div>
                </div>
            </div>
         </div>
    )
}