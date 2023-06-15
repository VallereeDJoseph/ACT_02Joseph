import React from 'react';
const Navbar =()=>{
    return (
        <nav>
        <nav className="navbar navbar-expand-lg navbar-light bg-light shadow fixed-top">
            <div className="container">
                <a className="navbar-brand" href="#">Save Earth</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item active">
                    <a className="nav-link" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">About</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Services</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Contact</a>
                    </li>
                </ul>
                </div>
            </div>
            </nav>

            <header className="masthead">
            <div className="container h-100">
                <div className="row h-100 align-items-center">
                <div className="col-12 text-center">
                    <h1 className="fw-light">Recent Climate Action</h1>
                    <p className="lead">It's now or never</p>
                </div>
                </div>
            </div>
            </header>

            <section className="py-5">
            <div className="container">
                <h2 className="fw-light">Content</h2>
                <p>This website is written as an activity for Climate Action in recent years. As we know climate change has been one of the most deavastating cause of natural disaster.</p>
            </div>
            </section>
            </nav>
        );
    };
export default Navbar;