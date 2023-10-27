import "./Header.css";
import { useState } from "react";

const Header = () => {
    const [activeLink, setActiveLink] = useState(0);
    
    const links = [
        {text: "00 Home", path: "/"},
        {text: "01 Destination", path: "/destination"},
        {text: "02 Crew", path: "/crew"},
        {text: "03 Technology", path: "/technology"},
    ]

    const changeActiveLink = (index) => {
        setActiveLink(index)
    }

	return (
		<header>
			<img
				src="images/Logo.svg"
				alt=""
			/>
			<hr />
			<nav>
				<ul>
					{links.map((link, index) => (
                        <li key={index} onClick={() => changeActiveLink(index)} className={index === activeLink ? 'active' : ''}>
                            <a href={link.path}>{link.text}</a>
                        </li>
                    ))}
				</ul>
			</nav>
		</header>
	);
};

export default Header;
