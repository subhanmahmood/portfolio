import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({ children }) {
    return (
        <div className="font-display">
            <Navbar />
            <main className="pt-40 md:pt-0">{children}</main>
            <Footer />
        </div>
    )
}