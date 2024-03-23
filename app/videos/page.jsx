import React from 'react'
import Header from "@/components/homepage/Header";
import Footer from "@/components/homepage/Footer";
import PageHeader from './PageHeader';
import TrendingVideos from './TrendingVideos';
import AllVideos from './AllVideos';


export default function VideosPage() {
    return (
        <div className="homepage">
            <Header />
            <PageHeader>
                <TrendingVideos />
            </PageHeader >
            <AllVideos />
            <Footer />
        </div>
    )
}
