import React from 'react'
import './ImageHeader.css'
import { Icon } from '@iconify/react';

const ImageHeader = () => {
  return (
    <div className='image-container'>
        <img src='/static/image/Logo.png' />
        <div className='text-container'>
            <Icon icon="solar:map-point-outline" />
            <h4>Av. Arce #2549, La Paz, Bolivia</h4>
        </div>
    </div>
  )
}

export default ImageHeader
