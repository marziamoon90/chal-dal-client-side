import { BiSearch } from 'react-icons/bi';
import React from 'react';
import { Container, Nav } from 'react-bootstrap';
import chalDalIcon from '../../../images/icon/logo-small.webp';
import './Header.css';
import Dropdown from '../Dropdown/Dropdown';

const Header = () => {
    {/* <button className='bg-transparent border-0 px-3 py-1'><i className="fas fa-bars" ></i></button> */ }
    return (
        <div>
            <div style={{ backgroundColor: '#FDD670', height: '55px' }}>
                <Container >
                    <div className='d-flex align-items-center justify-content-between'>
                        <div>
                            <img
                                alt=""
                                src={chalDalIcon}
                                width="130px"
                                height="40"
                                className="chaldalIcon mx-2 "
                            />
                        </div>
                        <div style={{ width: '60vw' }} className='search-box bg-light rounded  d-flex align-items-center justify-content-center'>
                            <input type="search" className='w-full search-input border-0 ' placeholder='search for products (e.g. eggs,milk,potato)' />

                            <button className='w-full bg-light fs-4 text-secondary border-0 p-0 m-0' >
                                <BiSearch />
                            </button>
                        </div>
                        <div className='d-flex align-items-center'>
                            <Dropdown />
                            <Nav.Link href="#features">Help</Nav.Link>
                            <Nav.Link href="#features">Help</Nav.Link>
                            <Nav.Link href="#features">Help</Nav.Link>

                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default Header;