import React, { useState} from 'react';
import { Navbar, NavbarToggler, Nav, NavItem, NavLink, Collapse } from 'reactstrap';
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

    const scrollToPortfolio = () => {
        window.scrollTo(0, 600)
    };

    const scrollToContact = () => {
        window.scrollTo(0, 2100)
    };


    return (
        <React.Fragment>
            <Navbar color="dark" className="navbar-dark navbar-expand-sm sticky-top">
                <NavbarToggler color="white" onClick={toggleNav} />
                <Collapse isOpen={isNavOpen} navbar>
                    <Nav className="mx-auto">
                        <NavItem className="nav-text">
                            <NavLink className="nav-link active" href="#" onClick={scrollToHome}>
                                <FontAwesomeIcon icon={faHome} size="lg" />{" "}
                                Home
                            </NavLink>
                        </NavItem>
                        <NavItem className="nav-text">
                            <NavLink className="nav-link" href="#" onClick={scrollToPortfolio}><FontAwesomeIcon icon={faBriefcase} size="lg" />{" "}
                                 Portfolio
                            </NavLink>
                        </NavItem>
                        <NavItem className="nav-text">
                            <NavLink className="nav-link" href="#" onClick={scrollToContact}><FontAwesomeIcon icon={faEnvelope} size="lg" />{" "}
                                Contact
                            </NavLink>
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