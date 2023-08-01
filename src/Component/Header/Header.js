import React from 'react';
import './Header.css';
const Header = () => {
    return (
        <div>
        

<header class="header">

    <a href="home.html" class="logo"> <i class="fas fa-store"></i> shopie </a>

    {/* <form action="" class="search-form">
        <input type="search" id="search-box" placeholder="search here..."/>
        <label for="search-box" class="fas fa-search"></label>
    </form> */}
    <nav class="nav-bar">
       <a href="home.html">Home</a>
        <a href="shop.html">Shop</a>
        <a href="order.html">order</a>
        <a href="contact.html">Contact</a>
    </nav>

    <div class="icons">
        <a href="login.html" class="fas fa-user"></a>
    </div>

</header>


        </div>
    );
};

export default Header;