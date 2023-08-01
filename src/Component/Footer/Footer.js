import React from 'react';
import './Footer.css';
import footerImg from '../../images/card_img.png';
const footer = () => {
    return (
        <div>
 <section class="quick-links">
<a href="home.html" class="logo"> <i class="fas fa-store"></i> shopie </a>

<div class="links">
    <a href="home.html"> Home </a>
    <a href="shop.html"> Shop </a>
    <a href="order.html"> Order </a>
    <a href="inventory.html"> Inventory </a>
    <a href="contact.html"> Contact </a>
    <a href="login.html"> login </a>
    <a href="register.html"> register </a>
    <a href="cart.html"> cart </a>
</div>

<div class="share">
    <a href="#" class="fab fa-facebook-f"></a>
    <a href="#" class="fab fa-twitter"></a>
    <a href="#" class="fab fa-instagram"></a>
    <a href="#" class="fab fa-linkedin"></a>
</div>

</section>

<section class="credit">

<p> created by <span>MD Mukhlesur Rahman Momin</span> | all rights reserved! </p>

<img src={footerImg} alt=""/>

</section>


        </div>
   
        );
    };
    
export default footer;