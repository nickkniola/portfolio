import React, { useState } from 'react';
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


    return (
        <React.Fragment>
            <Navbar color="dark" className="navbar-dark navbar-expand-sm sticky-top">
                <NavbarToggler color="white" onClick={toggleNav} />
                <Collapse isOpen={isNavOpen} navbar>
                    <Nav className="mx-auto">
                        <NavItem className="nav-text">
                            <NavLink className="nav-link active" href="#">
                                <FontAwesomeIcon icon={faHome} size="lg" />{" "}
                                Home
                            </NavLink>
                        </NavItem>
                        <NavItem className="nav-text">
                            <NavLink className="nav-link" href="#"><FontAwesomeIcon icon={faBriefcase} size="lg" />{" "}
                                 Portfolio
                            </NavLink>
                        </NavItem>
                        <NavItem className="nav-text">
                            <NavLink className="nav-link" href="resume.html"><FontAwesomeIcon icon={faFile} size="lg" />{" "}
                                Resume
                            </NavLink>
                        </NavItem>
                        <NavItem className="nav-text">
                            <NavLink className="nav-link" href="contact.html"><FontAwesomeIcon icon={faEnvelope} size="lg" />{" "}
                                Contact
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </React.Fragment>
    );
}

export default Header;