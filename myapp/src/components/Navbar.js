import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">{props.title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">{props.aboutText}</Link>
                        </li>
                    </ul>
                    <div className={`form-check form-switch text-${props.myText}`}>
                        <input className="form-check-input mx-3 "onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" disabled={false}/>
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.stateMent}</label>
                    </div>
                    <div className={`form-check form-switch text-${props.myText}`}>
                        <input className="form-check-input mx-3 "onClick={props.greenMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.myGreenText}</label>
                    </div>
                </div>
            </div>
        </nav>
    );
}
//! This are the proptypes : --> It is used to set the type of the prop if anything out of this type is passed will definitely lead to errors
Navbar.propTypes = {
    title: PropTypes.string,
    aboutText:PropTypes.string,
}
//! Use .isRequired when it is mandatory to pass the value
// Navbar.propTypes = {
//     title: PropTypes.string.isRequired,
//     aboutText:PropTypes.string.isRequired,
// }
//! The Default Prototypes which takes place when no value is initialise to the props
Navbar.defaultProps = {
    title: "Set title here",
    aboutText:"Set something here",
}    