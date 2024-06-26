import React from 'react';
import Link from 'next/link';
import { urlFor } from '../lib/client';
const FooterBanner = ({ footerBanner }) => {
  console.log(footerBanner);
  if (!footerBanner) {
    return null;
  }

  const { image,buttonText,desc,midText,smallText,saleTime, discount, largeText1, largeText2 } = Array.isArray(footerBanner) ? footerBanner[0] : footerBanner;
  return (
    <div className='footer-banner-container'>
      <div className='banner-desc'>
        <div className='left'>
          <p>{discount}</p>
          <h3>{largeText1}</h3>
          <h3>{largeText2}</h3>
          <p>{saleTime}</p>
        </div>
        <div className='right'>
          <p>{smallText}</p>
          <h3>{midText}</h3>
          <p>{desc}</p>
          <Link href={'/product/${product}'}>
            <button type='button'>{buttonText}</button>
          </Link>
        </div>
        <img src={urlFor(image)}className='footer-banner-image' alt="" />
      </div>
      
    </div>
  )
}

export default FooterBanner
