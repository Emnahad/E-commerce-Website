import React from 'react';
import Link from 'next/Link';
import { urlFor } from '../lib/client';

const Fluffy = ({ fluffy }) => {
    console.log(fluffy);
    if (!fluffy) {
        return null;
    }
    
    const { smallText, midText,largeText1,image,product,buttonText,desc} = Array.isArray(fluffy) ? fluffy[0] : fluffy;

    return (
        <div className='hero-banner-container'>
            <div>
                <p className='beats-solo'>{smallText}</p>
                <h3>{midText}</h3>
                <h1>{largeText1}</h1>
                <img src={urlFor(image)} alt='headphones' className='hero-banner-image' />
                <div>
                    <Link href={'/product/${product}'}>
                        <button type='button'>{buttonText}</button>
                    </Link>
                    <div className='desc'>
                        <h5>Description</h5>
                        <p>{desc}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Fluffy;
