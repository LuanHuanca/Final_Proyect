import React from 'react'
import "./ImageHeader.css"

import { Icon } from "@iconify/react";

class ImageHeader extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return (  
            <div className='image-container'>
                <img src='/static/image/Logo.png' />
                <div className='text-container'>
                    <Icon icon="solar:map-point-outine" />
                    <h4>Av. Arce #2549, La Paz, Bolivia</h4>
                </div>
                
            </div>
        );
    }
}
 
export default  ImageHeader;