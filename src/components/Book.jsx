import React from 'react'
import styled from 'styled-components'
import { Button } from '../Styles/Button';
import Swal from 'sweetalert2'
import { NavLink } from 'react-router-dom'

const Book = () => {
  const handleAlertClick = ()=>{
    Swal.fire("Payment Successful");

  }
  return (
    <Wrapper>
        <div className='container grid grid-two-column'>
            <div className='section-hero-data'>
                <p className='hero-top-data'>Booking Details</p>
                <hr/>
                <h1 className='hero-heading'>Laxmi Palace Heritage Hotel</h1>
                <p className='hero-para'>Rating: 5 out of 5</p>
                <p className='fee'>Charges per Night:</p>
                <ul className='list'>
                  <li>Rs 3000 - Indians Tourist</li>
                  <li>$300 - Foreign Tourist</li>
                </ul>
                <div className='user-form'>
                  <form action='#' method='POST'>
                    <label for="fname" className='label-name'>Enter Your Name</label>
                    <br/>
                    <br/>
                    <input type='text'name='name' placeholder='name' autoComplete='off' required id='fname' className='input-box'/>
                    <br/>
                    <br/>
                    <label for="email" className='label-name'>Enter Your Email</label>
                    <br/>
                    <br/>
                    <input type='email'name='Email' placeholder='Email' autoComplete='off' required id='email' className='input-box'/>
                    <br/>
                    <br/>
                    <label for="amount" className='label-name'>Enter Your Total Amount</label>
                    <br/>
                    <br/>
                    <input type='amount'name='Amount' placeholder='Amount' autoComplete='off' required id='email' className='input-box'/>
                    <br/>
                    <br/>
                    <label for="card" className='label-name'>Enter Your Credit/Debit Card Number</label>
                    <br/>
                    <br/>
                    <input type='card'name='Card Number' placeholder='Card Number' autoComplete='off' required id='Card  Number' className='input-box'/>
                    
                    

                  </form>
                </div>
                
                <Button className='btn explore-btn' onClick={handleAlertClick}>
                  <NavLink to="/">Pay Now</NavLink>
                </Button>
            </div>
            
            <div className='section-hero-image'>
                {/* <picture>
                    <img src='hawa.webp' className='hero-img'/>
                </picture> */}
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.3113908696596!2d75.79851857545034!3d26.925341059547815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db3fc008bce8d%3A0xbbb1d89e093ad483!2sLaxmi%20Palace%20Heritage%20Boutique%20Hotel!5e0!3m2!1sen!2sin!4v1725715584274!5m2!1sen!2sin" 
                width="600" height="550" style={{ border:0 }} allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className='hero-img'></iframe>
            </div>
        </div>

    </Wrapper>
  )
}
const Wrapper = styled.section`
padding: 9rem 0;
  .section-hero-data {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .btn {
    max-width: 16rem;
    margin-top:2rem;
  }
  .hero-top-data {
    text-transform: uppercase;
    font-weight: 500;
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.helper};
  }
  .hero-heading {
    text-transform: uppercase;
    font-size: 2.6rem;
  }
  .hero-para {
    margin-top: 1.5rem;
    margin-bottom: 1.3rem;
    max-width: 60rem;
  }
  .section-hero-image {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  picture {
    text-align: center;
  }
  .hero-img {
    height:100%
    max-width: 90%;
  }
  .list {
    font-size: 1.6rem;
    padding: 1rem ;
  }
  .fee {
    font-size: 2rem;
  }
  .label-name{
    font-size:1.3rem;
  }
  .user-form{
    margin-top: 2rem;
  }
  .input-box{
      width:400px;
   }
  
`;

export default Book
