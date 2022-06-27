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
                                <Link href={"/#smartphones"}>
                                    <a>Smartphones</a>
                                </Link>
                            </li>
                            <li>
                                <Link href={"/#tablets"}>
                                    <a>Tablets</a>
                                </Link>
                            </li>
                            <li>
                                <Link href={"/#laptops"}>
                                    <a>Laptops</a>
                                </Link>
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
