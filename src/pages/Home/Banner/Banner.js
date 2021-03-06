import React from 'react';
import { BiSearch } from 'react-icons/bi';
import bannerImage from '../../../images/home-page-slider/landingBannerTop.jpg';
import babydiaper from '../../../images/home-page-slider/baby-diaper.webp';
import gazipur from '../../../images/home-page-slider/gazipur-1.webp';
import { Col, Container, Row } from 'react-bootstrap';


const bannerBg = {
    background: `url(${bannerImage})`,
    backgroundSize: 'cover',
    // width: '100%',
    height: '300px',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
}

const Banner = () => {

    return (
        <div>
            <div style={bannerBg}>
                <div style={{ height: '80%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <div className='d-flex align-items-center justify-content-center'>
                        <div className='mt-5'>
                            <h1>Groceries delivered in 30 minutes</h1>

                            <div style={{ border: '1px solid lightgrey', width: '60vw' }} className='bg-light rounded  border-secondary d-flex align-items-center justify-content-center'>
                                <input type="search" className='w-full search-input border-0 ' placeholder='search for products (e.g. eggs,milk,potato)' />

                                <button className='w-full bg-light fs-3 text-secondary border-0 p-0 m-0' >
                                    <BiSearch />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
            <div className='my-4'>
                <Row className='gx-0'>
                    <Col className='p-0 m-0' sm={12} md={6}><img src={babydiaper} alt="" /></Col>
                    <Col className='p-0 m-0' sm={12} md={6}><img src={gazipur} alt="" /></Col>
                </Row>
            </div>
        </div>
    );
};

export default Banner;