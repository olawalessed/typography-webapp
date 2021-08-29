import DownloadSection from "../LandingPage/Download";
import Features from "../LandingPage/Features";
import Hero from "../LandingPage/Hero";
import FAQs from "../LandingPage/FAQs"
import CallToActionSection from "../LandingPage/CallToAction"

export default function LandingPage() {
    return (
        <div className="container">
            <Hero />
            <Features />
            <DownloadSection />
            <FAQs />
            <CallToActionSection />
        </div>
    )
}
