const Homepage = () => {
    return (
        <div className="row homepage justify-content-center">
            <div className="col-6 d-flex flex-column justify-content-end">
                <p className="heading-5 light-purple-text">SO, YOU WANT TO TRAVEL TO</p>
                <p className="heading-1 white-text">SPACE</p>
                <p className="subhead-2 light-purple-text">Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
            </div>
            <div className="col-6 d-flex flex-column justify-content-end align-items-end">
                <button className="btn-explore"><a href="/destination" >Explore</a></button>
            </div>
        </div>
    )
}


export default Homepage;