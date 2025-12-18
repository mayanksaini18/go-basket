"use client"

import { useEffect } from "react"
import { initAnalytics } from "@/app/firebase"

export default function AnalyticsProvider(){
    useEffect(()=>{
        initAnalytics()
    },[])

    return null;
}