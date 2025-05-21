import { Navbar } from "@/components/layout/navbar"
import FooterSection from "@/components/layout/section/footer-section"
// import HeroSection from "@/components/layout/section/hero-section"

export default function LandingLayout({
    children,
}: {
    children:React.ReactNode
}){
    return(
        <div>
            <Navbar/>
            {children}
            <FooterSection/>
        </div>
    )
}