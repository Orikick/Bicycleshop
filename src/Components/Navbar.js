import logo from './logo.png'
import './Navbar.css';
import React from 'react';
import modalimg from './about.jpg'
import storephoto from './store_image.png'
import hrestyk from './hrestyk.png'



export default function Navbar() {
  const [open1, setOpen1] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);

  return (
    <div className="navbar">
      <div className="navbar_logo">
        <img className='navbar_image' src={logo} alt='' /></div>
      <p>OnMyWay</p>
      <ul className='navbar_list'>
        <li onClick={() => setOpen1(true)}>About Us</li>
        <li onClick={() => setOpen2(true)}>Contact</li>
      </ul>
      <div className={`about ${open1 ? 'show' : ''}`}>
        <div className='about_modal'>
          <img onClick={() => setOpen1(false)} className='hrestyk' src={hrestyk}></img>
          <div>
            <div>
              <img src={logo}></img>
              <span><h1>OnMyWay</h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, ea at? Sit, impedit facilis odio rem officia ex maxime excepturi non repudiandae a possimus ut aut esse sed ad dolorem?Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, ea at? Sit, impedit facilis odio rem officia ex maxime excepturi non repudiandae a possimus ut aut esse sed ad dolorem?</span>
            </div>
            <div>
              <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, ea at? Sit, impedit facilis odio rem officia ex maxime excepturi non repudiandae a possimus ut aut esse sed ad dolorem?Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, ea at? Sit, impedit facilis odio rem officia ex maxime excepturi non repudiandae a possimus ut aut esse sed ad dolorem?</span>
              <img src={modalimg}></img>
            </div>
          </div>
          <div>
            <h3></h3>
            <div>
              <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, ea at? Sit, impedit facilis odio rem officia ex maxime excepturi non repudiandae a possimus ut aut esse sed ad dolorem?Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, ea at? Sit, impedit facilis odio rem officia ex maxime excepturi non repudiandae a possimus ut aut esse sed ad dolorem?</span>
              <img src={storephoto}></img>
            </div>
            <h1 className='loc'>Location</h1>
            <div>
              <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d46965.53735494319!2d30.566370249533772!3d50.44762512585821!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNTDCsDI2JzQzLjEiTiAzMMKwMzMnNDMuMSJF!5e0!3m2!1sru!2sua!4v1682428214858!5m2!1sru!2sua" width={'630px'} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>
          </div>

        </div>
      </div>
      <div className={`contact ${open2 ? 'show' : ''}`}>
        <div className='contact_modal'>
          <img onClick={() => setOpen2(false)} className='hrestyk' src={hrestyk}></img>
          <h1>OnMyWay</h1>
          <h3>Call Us</h3>
          <p><a href='tel:+111 11 11 11'>+111 11 11 11</a></p>
          <h3>Email Us</h3>
          <p><a href='mailto:@gamil.com'>onmyway@gamil.com</a></p>
          <h3>↓ We are on sotial networks! Links Below ↓</h3>
        </div>
      </div>

    </div>
  );
}