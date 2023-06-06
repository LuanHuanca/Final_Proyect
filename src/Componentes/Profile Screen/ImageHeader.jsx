import React from 'react'
import './ImageHeader.css'
import { Icon } from '@iconify/react';

const ImageHeader = () => {
  return (
    <div className='image-container'>
        <img src='/static/image/Logo.png' />
        <div className='text-container'>
            <Icon icon="solar:map-point-outline" />
            <a href='https://goo.gl/maps/anhxK26x5H5vRsa98'>Av. Arce #2549, La Paz, Bolivia</a>
        </div>
    </div>
  )
}

export default ImageHeader
