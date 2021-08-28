import Header from './fixed/Header'
import Footer from './fixed/Footer'

export default function Layout({children}) {
    return (
        <div className="w-full">
            <Header />
            {children}

            <Footer />
        </div>
    )
}
