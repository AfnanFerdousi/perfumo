import React from 'react';
import './Partners.css'

const Partners = () => {
    return (
        <div className='container'>
            <h2 className='text-center d-inline-block borderClass my-3'>Collaborations</h2>
        <div className='d-flex justify-content-center my-5'>
          <div className='col-md-3'> 
            <img alt='collab' className=' w-50' src='https://media.designrush.com/inspirations/129360/conversions/_1513770087_98_chanel1-preview.jpg'/>
          </div>
          <div className='col-md-3'>
          <img alt='collab' className=' w-50' src='https://www.logopik.com/wp-content/uploads/edd/2018/08/Gucci-Logo-Vector.png'/>
          </div>
          <div className='col-md-3'>
          <img alt='collab' className=' w-50' src='https://i.pinimg.com/474x/cc/76/46/cc764695836d7c0836463aee2822ae4a.jpg'/>
          </div>
          <div className='col-md-3'>
          <img alt='collab' className=' w-50' src='http://blog.logomyway.com/wp-content/uploads/2020/08/lui-vuitton-logo2.jpg'/>
          </div>
          </div>
      </div>        
    );
};
export default Partners;