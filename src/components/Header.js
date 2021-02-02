import React, { useState} from 'react';
import { Navbar, NavbarToggler, Nav, NavItem, Collapse } from 'reactstrap';
import { NavHashLink } from 'react-router-hash-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { faFile } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    const [isNavOpen, setNavOpen] = useState(false);

    const toggleNav = () => {
        setNavOpen(!isNavOpen);
    }

    const scrollToHome = () => {
        window.scrollTo(0, 0)
    };

    return (
        <React.Fragment>
            <Navbar color="dark" className="navbar-dark navbar-expand-sm sticky-top">
                <NavbarToggler color="white" onClick={toggleNav} />
                <Collapse isOpen={isNavOpen} navbar>
                    <Nav className="mx-auto">
                        <NavItem className="nav-text">
                            <NavHashLink
                                className="nav-link active"
                                to="/"
                                onClick={scrollToHome}
                            >
                                <FontAwesomeIcon icon={faHome} size="lg" />{" "}
                                Home
                            </NavHashLink>
                        </NavItem>
                        <NavItem className="nav-text">
                              <NavHashLink
                                className="nav-link"
                                to="/#portfolio"
                            >
                                <FontAwesomeIcon icon={faBriefcase} size="lg" />{" "}
                                Portfolio
                            </NavHashLink>
                        </NavItem>
                        <NavItem className="nav-text">
                            <NavHashLink
                                className="nav-link"
                                to="/#contact"
                            >
                                <FontAwesomeIcon icon={faEnvelope} size="lg" />{" "}
                                Contact
                            </NavHashLink>
                        </NavItem>
                        <NavItem className="nav-text">
                            <a className="nav-link" href="assets/Nicholas_Kniola_Resume.pdf" target="_blank"><FontAwesomeIcon icon={faFile} size="lg" />{" "}
                                Resume
                            </a>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </React.Fragment>
    );
}

export default Header;
