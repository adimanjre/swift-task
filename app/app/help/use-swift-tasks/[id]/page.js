"use client"
import { useEffect, useState } from 'react'
import ArticleCard from '../../components/ArticleCard'
import NavHelp from './components/helpNav'
import style from './getting_started.module.css'

export default function GettingStarted({ params }) {
    const [getArticle,setArticle] = useState([])
    useEffect(() => {
        async function getArticles() {
            const res = await fetch(`/api/get-articles`)
            const data = await res.json();
            setArticle(data.data)
        };
        getArticles();
    }, [])
    return (
        <>
            <div className={`d-flex mb-5 mt-4`}>
                <NavHelp active={params.id.replaceAll('-', ' ')} />
                <div className="container pe-4 ps-4">
                    <h1 className={`${style.mainHeading} mb-3`}>Getting Started</h1>
                    <h1 className={`${style.subHeading} mb-4`}>{params.id.replaceAll('-', ' ')}</h1>
                    <div className="container">
                        <div className={`row gap-3`}>
                            {
                                getArticle.map(obj => {
                                    return (
                                        <ArticleCard title={obj.title} key={obj.id}  redirection={obj.redirection} />
                                    )
                                })
                            }

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}