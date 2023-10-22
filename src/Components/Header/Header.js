import "./Header.css"



const Header = ()=>{


    return(
        <header>
            <img src="images/Logo.svg" alt="" />
            <hr />
            <nav>
                <ul>
                    <li className="active"><a href="/" >00 Home</a></li>
                    <li><a href="/destination">01 Destination</a></li>
                    <li><a href="/crew">02 Crew</a></li>
                    <li><a href="/technology">03 Technology</a></li>
                </ul>
            </nav>
        </header>
    )
}


export default Header