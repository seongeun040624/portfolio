import { Link, useLocation } from "react-router-dom";

import '../style/header.scss'

const Header = () => {
    const location = useLocation();

    
    return (
        <div className='header'>
            <div className="inner">
                <h1 className="logo">
                    <Link to="/">Portfolio</Link>
                </h1>

                <nav className="gnb">
                    <Link className={location.pathname === "/" ? "active" : ""} to="/">
                        Home
                    </Link>
                    <Link className={location.pathname === "/about" ? "active" : ""} to="/about">
                        About
                    </Link>
                    <Link className={location.pathname === "/projects" ? "active" : ""} to="/projects">
                        Projects
                    </Link>
                </nav>
            </div>
        </div>
    );
};

export default Header;