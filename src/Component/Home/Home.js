import React from 'react';
import slider1 from '../../images/home-img-1.jpg';
import slider2 from '../../images/home-img-2.jpg';
import slider3 from '../../images/home-img-3.jpg';
import banner1 from '../../images/banner-1.jpg';
import banner2 from '../../images/banner-2.jpg';
import banner3 from '../../images/banner-3.jpg';
import arrival1 from '../../images/arrival-1.jpg';
import arrival2 from '../../images/arrival-2.jpg';
import arrival3 from '../../images/arrival-3.jpg';
import arrival4 from '../../images/arrival-4.jpg';
import arrival5 from '../../images/arrival-5.jpg';
import arrival6 from '../../images/arrival-6.jpg'; 
import arrivalHover1 from '../../images/arrival-1-hover.jpg';      
import arrivalHover2 from '../../images/arrival-2-hover.jpg';      
import arrivalHover3 from '../../images/arrival-3-hover.jpg';      
import arrivalHover4 from '../../images/arrival-4-hover.jpg';      
import arrivalHover5 from '../../images/arrival-5-hover.jpg';      
import arrivalHover6 from '../../images/arrival-6-hover.jpg';      
import './Home.css';
const Home = () => {
    return (
        <div>
<section class="home">
<div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active slide" data-bs-interval="10000">
    <div class="image">
                <img src={slider1} alt=""/>
            </div>
            <div class="content">
                <span>upto 50% off</span>
                <h3>smartphones</h3>
                <a href="shop.html" class="btn">shop now</a>
            </div>
    </div>
    <div class="carousel-item slide" data-bs-interval="2000">
    <div class="image">
                <img src={slider2} alt=""/>
            </div>
            <div class="content">
                <span>upto 50% off</span>
                <h3>smartwatch</h3>
                <a href="shop.html" class="btn">shop now</a>
            </div>
    </div>
    <div class="carousel-item slide">
    <div class="image">
                <img src={slider3} alt=""/>
            </div>
            <div class="content">
                <span>upto 50% off</span>
                <h3>headphones</h3>
                <a href="shop.html" class="btn">shop now</a>
            </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</section>
<section class="banner">

<div class="box-container">

    <a href="#" class="box">
        <img src={banner1} alt=""/>
        <div class="content">
            <span>special offer</span>
            <h3>upto 50% off</h3>
        </div>
    </a>

    <a href="#" class="box">
        <img src={banner2} alt=""/>
        <div class="content">
            <span>special offer</span>
            <h3>upto 50% off</h3>
        </div>
    </a>

    <a href="#" class="box">
        <img src={banner3} alt=""/>
        <div class="content">
            <span>special offer</span>
            <h3>upto 50% off</h3>
        </div>
    </a>

</div>

</section>

<section class="arrivals">

<h1 class="heading"> new <span>arrivals</span> </h1>

<div class="box-container">

    <div class="box">
        <div class="image">
            <img src={arrival1} class="main-img" alt=""/>
            <img src={arrivalHover1} class="hover-img" alt=""/>
        </div>
        <div class="content">
            <h3>HD television</h3>
            <div class="price"> $249.99 <span>$399.99</span> </div>
            <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half-alt"></i>
            </div>
        </div>
    </div>

    <div class="box">
        <div class="image">
            <img src={arrival2} class="main-img" alt=""/>
            <img src={arrivalHover2} class="hover-img" alt=""/>
        </div>
        <div class="content">
            <h3>lenovo laptop</h3>
            <div class="price"> $249.99 <span>$399.99</span> </div>
            <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half-alt"></i>
            </div>
        </div>
    </div>

    <div class="box">
        <div class="image">
            <img src={arrival3} class="main-img" alt=""/>
            <img src={arrivalHover3} class="hover-img" alt=""/>
        </div>
        <div class="content">
            <h3>new smartphone</h3>
            <div class="price"> $249.99 <span>$399.99</span> </div>
            <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half-alt"></i>
            </div>
        </div>
    </div>

    <div class="box">
        <div class="image">
            <img src={arrival4} class="main-img" alt=""/>
            <img src={arrivalHover4} class="hover-img" alt=""/>
        </div>
        <div class="content">
            <h3>new printer</h3>
            <div class="price"> $249.99 <span>$399.99</span> </div>
            <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half-alt"></i>
            </div>
        </div>
    </div>

    <div class="box">
        <div class="image">
            <img src={arrival5} class="main-img" alt=""/>
            <img src={arrivalHover5} class="hover-img" alt=""/>
        </div>
        <div class="content">
            <h3>new headphones</h3>
            <div class="price"> $249.99 <span>$399.99</span> </div>
            <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half-alt"></i>
            </div>
        </div>
    </div>

    <div class="box">
        <div class="image">
            <img src={arrival6} class="main-img" alt=""/>
            <img src={arrivalHover6} class="hover-img" alt=""/>
        </div>
        <div class="content">
            <h3>new speakers</h3>
            <div class="price"> $249.99 <span>$399.99</span> </div>
            <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half-alt"></i>
            </div>
        </div>
    </div>

</div>

</section>


 </div>
    );
};

export default Home;