import Link from "next/link";

export default function Header() {
    return (
        <header className="header">
            <nav className="nav">
                <div className="nav__upper">
                    <div className="wrapper">
                        <div className="logo">
                            <Link href={"/"}>
                                <a>
                                    Tech <span>plus</span>
                                </a>
                            </Link>
                        </div>
                        <ul className="navbar">
                            <li>Sign In</li>
                            <li>Create an account</li>
                            <li>
                                <i className="fas fa-shopping-bag"></i>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="nav__sub">
                    <div className="wrapper">
                        <ul>
                            <li>
                                <a href="#phones">Smartphones</a>
                            </li>
                            <li>
                                <a href="#tablets">Tablets</a>
                            </li>
                            <li>
                                <a href="#headphones">Headphones</a>
                            </li>
                            <li>
                                <a href="#laptops">Laptops</a>
                            </li>
                            <li>
                                <Link href={"/about"}>
                                    <a>About</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}
