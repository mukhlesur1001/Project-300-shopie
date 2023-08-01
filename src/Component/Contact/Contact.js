import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
 <div>
         
    <section class="info-container">

<div class="box-container">

    <div class="box">
        <i class="fas fa-map"></i>
        <h3>address</h3>
        <p>sylhet,bangladesh-3100</p>
    </div>

    <div class="box">
        <i class="fas fa-envelope"></i>
        <h3>email</h3>
        <p>shopiewebsite@gmail.com</p>
        <p>websiteshopiegmail.com</p>
    </div>

    <div class="box">
        <i class="fas fa-phone"></i>
        <h3>number</h3>
        <p>+123-456-7890</p>
        <p>+111-222-3333</p>
    </div>

</div>

</section>


<section class="contact container">

<form action="" class="form-info">
    <h3>get in touch</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe provident nihil non unde, quia magnam
        quibusdam ad obcaecati nam animi?</p>
    <div class="inputBox">
        <input type="text" placeholder="your name"/>
        <input type="email" placeholder="your email"/>
    </div>
    <div class="inputBox">
        <input type="number" placeholder="your number"/>
        <input type="text" placeholder="subject"/>
    </div>
    <textarea name="" placeholder="your message" id="" cols="30" rows="10"></textarea>
    <button type="submit" value="send message" class="btn">Submit</button>
</form>

<iframe class="map"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115806.34359550575!2d91.79094155131145!3d24.899747201107232!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375054d3d270329f%3A0xf58ef93431f67382!2sSylhet!5e0!3m2!1sen!2sbd!4v1643525653201!5m2!1sen!2sbd"
    allowfullscreen="" loading="lazy"></iframe>

</section>



<section class="newsletter">

<div class="content">
    <h3>newsletter</h3>
    <p>subscribe for weelky newsletter.</p>
</div>

  <from action="" class="news-from">
    <input type="email" name="" placeholder="Enter Your Email" id="" class="email"/>
    <input type="submit" value="subscribe" class="btn"/>
  </from>

</section>
                    

    
    
 </div>

   
);
};

export default Contact;