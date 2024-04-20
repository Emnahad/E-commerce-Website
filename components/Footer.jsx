import React from 'react';
import { AiFillInstagram } from 'react-icons/ai';
import { FaTiktok } from 'react-icons/fa';
import { BsFacebook } from 'react-icons/bs';




const Footer = () => {
  return (
    <div className='footer-container'>
      <p>2022 Products All right reserved</p>
      <p className='icons'>
        <AiFillInstagram />
        <BsFacebook />
        <FaTiktok />
      </p>
    </div>
  )
}

export default Footer;
