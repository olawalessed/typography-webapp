import Header from './fixed/Header'
import Footer from './fixed/Footer'
import CallToActionSection from './LandingPage/CallToAction'
import Head from 'next/head'

export default function Layout({children}) {
    return (
        <div className="w-full">
            <Head>
                <link type="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.js" />

            </Head>
            <Header />
            {children}
            <CallToActionSection />
            <Footer />
        </div>
    )
}
