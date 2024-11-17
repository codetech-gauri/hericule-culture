import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'
import { Button } from '../Styles/Button';

const Herosection = () => {
  return (
  
      <Wrapper>
          <div className='container grid grid-two-column'>
              <div className='section-hero-data'>
                  <p className='hero-top-data'>Explore Bharat</p>
                  <h1 className='hero-heading'>HERICULE`</h1>
                  <p className='hero-para'>With unparalleled tapestry of diversity, vibrant cultures and magnificent landmarks, 
                  India stands as a resplendent destination, symbolizing the perfect harmony. 
                  Each state shows cultural microcosm, unique traditions, languages and culinary delights 
                  that reflect the rich heritage of India.</p>
                  <Button className='btn explore-btn'>
                      <NavLink to="/monuments">Explore</NavLink>
                  </Button>
              </div>
              
              <div className='section-hero-image'>
                  <picture>
                      <img src='map1.jpg' className='hero-img'/>
                  </picture>
              </div>
          </div>

      </Wrapper>
    
  )
}
const Wrapper = styled.section`
padding: 5rem 0;
  .section-hero-data {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .btn {
    max-width: 16rem;
  }
  .hero-top-data {
    text-transform: uppercase;
    font-weight: 500;
    font-size: 2.3rem;
    color: ${({ theme }) => theme.colors.helper};
    font-family: Times New Roman;
  }
  .hero-heading {
    text-transform: uppercase;
    font-size: 6.4rem;
  }
  .hero-para {
    margin-top: 1.5rem;
    margin-bottom: 3.4rem;
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
    max-width: 90%;
  }
`;
export default Herosection
