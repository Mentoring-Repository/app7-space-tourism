import "./Header.css";
import { useState } from "react";

const Header = () => {
	const [navVisibilty, setNavVisibilty] = useState(false);

	const location = window.location.pathname;

	const links = [
		{ text: "Home", path: "/" },
		{ text: "Destination", path: "/destination" },
		{ text: "Crew", path: "/crew" },
		{ text: "Technology", path: "/technology" },
	];

	const handleNavVisibilty = () => {
		setNavVisibilty(!navVisibilty);
	};

	return (
		<header>
			<img
				className="logo"
				src="images/Logo.svg"
				alt=""
			/>
			<hr />

			{/* Desktop nav */}

			<nav className="nav__desktop">
				<ul>
					{links.map((link, index) => (
						<li
							key={index}
							className={location === link.path ? "active" : ""}
						>
							<a href={link.path}>
								<span className="link-index">0{index} </span>
								{link.text}
							</a>
						</li>
					))}
				</ul>
			</nav>

			{/* Mobile nav */}

			<nav
				className={
					navVisibilty
						? "nav__mobile nav-visible"
						: "nav__mobile nav-hidden"
				}
			>
				<img
					onClick={handleNavVisibilty}
					className="nav__mobile-close"
					src="/images/Close.svg"
					alt=""
				/>
				<ul>
					{links.map((link, index) => (
						<li
							key={index}
							className={location === link.path ? "active" : ""}
						>
							<a href={link.path}>
								<span>0{index} </span>
								{link.text}
							</a>
						</li>
					))}
				</ul>
			</nav>

			<img
				onClick={handleNavVisibilty}
				className="nav__mobile-burger"
				src="images/Burger.png"
				alt=""
			/>
		</header>
	);
};

export default Header;
