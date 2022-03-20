import React, { useState } from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import chalDalIcon from '../../../images/icon/logo-small.webp';
import { SidebarData } from '../SidebarData/SidebarData';
import './Header.css';

// react icon 
import { BiSearch } from 'react-icons/bi';
import { FaQuestion } from 'react-icons/fa';
import { AiOutlineMenu } from 'react-icons/ai';
import { BsThreeDotsVertical } from 'react-icons/bs';

const Header = () => {
    const [sidebar, setSidebar] = useState(true);

    const showSidebar = () => setSidebar(!sidebar);

    return (
        <div className='sticky-top'>
            <div className='navbar'>
                <Link to="/" className='menu-bars fs-3 mx-md-2'>
                    <AiOutlineMenu onClick={showSidebar}></AiOutlineMenu>
                </Link>
                <NavLink to='/' className="text-decoration-none mx-md-2">
                    <img
                        alt=""
                        src={chalDalIcon}
                        width="130px"
                        height="40"
                        className="chaldalIcon "
                    />
                </NavLink>
                {/* search box  */}
                <div style={{ width: '55vw' }} className='search-box bg-light rounded  d-flex align-items-center justify-content-center mx-md-2'>
                    <input type="search" className='w-full search-input border-0  ' placeholder='search for products (e.g. eggs,milk,potato)' />
                    <button className='w-full bg-light fs-4 text-secondary border-0 p-0 m-0' >
                        <BiSearch />
                    </button>
                </div>
                <BsThreeDotsVertical className='phoneMenu'></BsThreeDotsVertical>
                <NavDropdown style={{ width: '120px', height: '55px', borderLeft: '1px solid #D9BC70' }} className='my-buttons p-0' title="Link" id="navbarScrollingDropdown">
                    <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                        Something else here
                    </NavDropdown.Item>
                </NavDropdown>
                <NavLink className='my-buttons text-decoration-none fw-bold ' to="/help">
                    <Button className='navButtons text-secondary  rounded-0 px-2 py-3 fw-bold bg-transparent '><FaQuestion /> Help</Button>
                </NavLink>
                <div className='d-flex align-items-center justify-content-center px-1 py-3'>
                    <Button className='text-secondary border-0 p-0 fw-bold bg-transparent fs-6' style={{ borderRadius: '0' }}>EN</Button>
                    <Button className='text-secondary border-0 p-0 fw-bold bg-transparent fs-6' style={{ borderRadius: '0' }}>|</Button>
                    <Button className='text-secondary border-0 p-0 fw-bold bg-transparent fs-6' style={{ borderRadius: '0' }}>বাং</Button>
                </div>
                <NavLink className='signInButton text-light text-decoration-none fw-bold' to="/sign up">
                    <Button className='border-0  fw-bold p-0 px-4 py-3' style={{ backgroundColor: '#E04F54', borderRadius: '0' }}>Sign in</Button>
                </NavLink>
            </div>

            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-items mt-2' onClick={showSidebar}>
                    {/* <li className='navbar-toggle'>
                        <Link to='#' className='menu-bars'>
                            <AiOutlineMenu ></AiOutlineMenu>
                        </Link>
                    </li> */}
                    {SidebarData.map((item, index) => {
                        return (
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </div >
    );
};

export default Header;