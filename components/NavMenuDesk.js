import React, {Component, Fragment} from 'react';
import {Nav, Navbar, NavLink} from 'react-bootstrap';
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faHome,
    faUser,
    faProduct,
    faList,
    faMoneyBills,
    faBook,
    faReceipt,
    faShoppingCart
} from '@fortawesome/free-solid-svg-icons';

class NavMenuDesk extends Component {
    render() {
        return (
            <Fragment>
            <Navbar className="nav-bar sticky-top"  bg="light" expand="lg">
                    <Navbar.Brand href="#"><img className="nav-logo" src="/logo.webp" alt="nav-logo"/></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav
                            className="mr-auto"
                            style={{maxHeight: '100px'}}
                            navbarScroll>
                            <NavLink className="text-center">
                                <Link activeClassName="d-none" href="/">
                                    <div className="nav-item-div">
                                        <FontAwesomeIcon icon={faHome} />
                                        Dashboard
                                    </div>
                                </Link>
                            </NavLink>
                        <NavLink className="text-center">
                                <Link activeClassName="d-none" href="/user">
                                    <div className="nav-item-div">
                                        <FontAwesomeIcon icon={faUser} />
                                        User
                                    </div>
                                </Link>
                            </NavLink>
                            <NavLink className="text-center">
                                <Link activeClassName="d-none"  href="/category">
                                    <div className="nav-item-div">
                                        <FontAwesomeIcon icon={faList}/>Category
                                    </div>
                                </Link>
                            </NavLink>
                            <NavLink className="text-center">
                                <Link activeClassName="d-none"  href="/product">
                                    <div className="nav-item-div">
                                        <FontAwesomeIcon icon={faShoppingCart} />Product
                                    </div>
                                </Link>
                            </NavLink>
                            <NavLink className="text-center">
                                <Link activeClassName="d-none"  href="/transaction">
                                    <div className="nav-item-div">
                                        <FontAwesomeIcon icon={faMoneyBills} />Transaction
                                    </div>
                                </Link>
                            </NavLink>
                            <NavLink className="text-center">
                                <Link activeClassName="d-none"  href="/report">
                                    <div className="nav-item-div">
                                       <FontAwesomeIcon icon={faReceipt}/> Report
                                    </div>
                                </Link>
                            </NavLink>
                        </Nav>
                    </Navbar.Collapse>
            </Navbar>
            </Fragment>
        );
    }
}
export default NavMenuDesk;