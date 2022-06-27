import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children }) {
    return (
        <>
            <Header />
            {children}
            <Footer />
            <a href="#" className="arrow">
                <i className="fas fa-arrow-alt-circle-up"></i>
            </a>
        </>
    );
}
