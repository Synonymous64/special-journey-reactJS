import React from 'react'

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark sticky-lg-top">
            <div className="container-fluid">
                <a className="navbar-brand" href="2">Doomsday Bank</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="/about">About</a>
                        </li>
                    </ul>
                    <div>
                        <button type="button" disabled={true} class="btn btn-primary">Your Balance: 1000$</button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;
