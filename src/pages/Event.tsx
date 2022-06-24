import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Video } from "../components/Video";

interface Params{
    slug: string
}



export function Event(){
    const { slug } = useParams<{slug: string}>()

    const [sidebarLessonStatus, setSidebarLessonStatus] = useState(false)

    function handleSidebarLesson(){
        setSidebarLessonStatus(!sidebarLessonStatus)
    }


    return (
       <div className="flex flex-col min-h-screen relative">
        
        <Header callbackMenu = {handleSidebarLesson} sidebarStatus = {sidebarLessonStatus} />
        <main className="flex flex-1">
            { slug
                ? <Video lessonSlug={slug} /> 
                : <div className="flex flex-1 items-center justify-center">Selecione uma das aulas ao lado para assistir!</div>
            }
            <Sidebar sidebarStatus={sidebarLessonStatus}/>
           
        </main>
       
       </div>
    )
}