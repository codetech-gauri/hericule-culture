import React from 'react'
import styled from 'styled-components'
import { Button } from '../Styles/Button';
import Swal from 'sweetalert2'
import { NavLink } from 'react-router-dom'

const Tickets = () => {
  const handleAlertClick = ()=>{
    Swal.fire("Payment Successful");
  }
  return (
    
    <Wrapper>
        <div className='container grid grid-two-column'>
            <div className='section-hero-data'>
                <p className='hero-top-data'>Ticket Details</p>
                <hr/>
                <h1 className='hero-heading'>Hawa MAHAL</h1>
                <p className='hero-para'>Timings-9:00am - 5:00pm</p>
                <p className='fee'>Entry Fees:</p>
                <ul className='list'>
                  <li>Rs 50 per person for Indians</li>
                  <li>Rs 100 per person for Foreign Tourist</li>
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
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.352083257!2d75.82413947545028!3d26.924050559603312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db14b1bd30ba5%3A0x860e5d531eccb20c!2sHawa%20Mahal!5e0!3m2!1sen!2sin!4v1725711518105!5m2!1sen!2sin" 
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
    font-size: 6rem;
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

export default Tickets
