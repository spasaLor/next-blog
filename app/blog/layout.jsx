'use client';
import Footer from '@/app/ui/footer';
import Navbar from '../ui/navbar';
import { useSelectedLayoutSegment } from 'next/navigation';

export default function BlogLayout({children}){
    const segment = useSelectedLayoutSegment();
    return(
            <>
                <Navbar activeSegment={segment}/>
                {children}
                <Footer/>
            </>
    )
}