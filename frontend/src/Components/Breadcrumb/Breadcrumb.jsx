import React from 'react'
import './Breadcrumb.css'
import arrow_icon from '../Assets/breadcrum_arrow.png'

const Breadcrumb = (props) => {
  const {product} = props;
  return (

    <div className='breadcrumb'>

      HOME <img src={arrow_icon} alt='breadcrum Arrow'/>
      SHOP <img src={arrow_icon} alt='breadcrum Arrow'/>
      {product.category} <img src={arrow_icon} alt='breadcrum Arrow'/>
      {product.name} <img src={arrow_icon} alt='breadcrum Arrow'/>
      
      
    </div>
  )
}

export default Breadcrumb 

