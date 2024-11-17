import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'
import { Button } from '../Styles/Button';
import {  FaDiscord, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <Wrapper>
      <section className='contact-short'>
        <div className='grid grid-two-column'>
          <div>
            <h3>Ready to explore India</h3>
            <h3>Visit Us Today</h3>
          </div>

          <div>
             <NavLink to="/">
              <Button>Get Started</Button>
             </NavLink>
          </div>
        </div>
      </section>

      <footer>
        <div className='container grid grid-four-column'>
          <div className='footer-about'>
            <h3>HERICULE`</h3>
            <p>Welcome to our website! Explore Indian Culture and Heritage</p>
          </div>
          
          <div className='footer-subscribe'>
            <h3>Subscribe To get More updates</h3>
            <form action='#'>
              <input type='email' required autoComplete='off' placeholder='Email' />
              <input type='submit' value="Subscribe"/>
            </form>
          </div>

          <div className='footer-social'>
            <h3>Follow Us</h3>
            <div className='footer-social--icons'>
              <div>
                <FaDiscord className='icons'/>
              </div>
              <div>
                <FaInstagram className='icons'/>
              </div>
              <div>
                <FaYoutube className='icons'/>
              </div>
            </div>
          </div>

          <div className='footer-contact'>
            <h3>Call Us</h3>
            <h3>+91 12345238976</h3>
          </div>
        </div>
      </footer>

    </Wrapper>
  )
}
const Wrapper = styled.section`
  .contact-short {
    max-width: 50vw;
    margin: auto;
    padding: 3rem 10rem;
    background-color: #f4f0ec;
    border-radius: 1rem;
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    transform: translateY(50%);

    .grid div:last-child {
      justify-self: end;
      align-self: center;
    }

    .contact-short-btn {
    justify-self: end;
    align-self: center;
    }
  }
  footer {
    padding: 14rem 0 9rem 0;
    background-color: ${({ theme }) => theme.colors.bg};

    h3 {
      color: ${({ theme }) => theme.colors.hr};
      margin-bottom: 2.4rem;
    }
    p {
      color: ${({ theme }) => theme.colors.white};
    }

    .footer-social--icons {
      display: flex;
      gap: 2rem;
      div {
        padding: 1rem;
        border-radius: 50%;
        border: 2px solid ${({ theme }) => theme.colors.white};
        .icons {
          color: ${({ theme }) => theme.colors.white};
          font-size: 2.4rem;
          position: relative;
          cursor: pointer;
        }
      }
    }
  }

`;

export default Footer
