import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'
import { Button } from '../Styles/Button';

const Restaurant = () => {

  return (
    <>
      <div>
      <img src='res.png' height="200px"/>
    </div>
      <Wrapper>
          <div className='container grid grid-two-column'>
              <div className='section-hero-data'>
                  <p className='hero-top-data'>Laxmi Palace Heritage Hotel</p>
                  <h1 className='hero-heading'>D-194, Jagdish Marg, behind Sindhi Camp, Kanti Nagar, Bani Park, Jaipur, Rajasthan 302016</h1>
                  <p className='hero-para'>Experience convenience and luxury as a solo traveler at Laxmi Palace Heritage Boutique Hotel in Jaipur. Stay in comfortable air-conditioned rooms with complimentary Wi-Fi and stunning city views. Explore bustling markets and iconic attractions nearby like Hawa Mahal and City Palace. 
                      Enjoy a traditional folk show, delicious food options, and relax by the inviting swimming pool or at the on-site bar. .</p>
                  <Button className='btn explore-btn'>
                      <NavLink to="/Laxmi-Palace-book">Book Now</NavLink>
                  </Button>
              </div>
              
              <div className='section-hero-image'>
                  <picture>
                      <img src='hotel1.webp' className='hero-img'/>
                  </picture>
              </div>

              <div className='section-hero-data'>
                  <p className='hero-top-data'>Umaid Bhawan-A Heritage Hotel</p>
                  <h1 className='hero-heading'>D1-2A,Behind Collectorate,Bank Road, Bani Park, Bani Park, Jaipur, India, 302016 </h1>
                  <p className='hero-para'>
                  Escape to Umaid Bhawan, a Heritage Style Boutique Hotel in vibrant Bani Park, Jaipur.
                  Immerse yourself in rich history and culture, with iconic landmarks like Hawa Mahal and City Palace nearby. 
                  Indulge in opulent luxury with antique-inspired rooms featuring modern amenities.
                    Relax by the pool,and take advantage of convenient shuttle service. Explore Elefun Park, just 1.6 km away. 
                  Delight in delicious meals and live music at the rooftop restaurant.  </p>
                  <Button className='btn explore-btn'>
                      <NavLink to="/Laxmi-Palace-book">Book Now</NavLink>
                  </Button>
              </div>
              
              <div className='section-hero-image'>
                  <picture>
                      <img src='hotel2.jpg' className='hero-img'/>
                  </picture>
              </div>


              <div className='section-hero-data'>
                  <p className='hero-top-data'>Welcome  Heritage Haveli Hotel</p>
                  <h1 className='hero-heading'>A-C-4-C, Gayatri Marg, Sawai Jai Singh Highway, Banipark, Bani Park, Jaipur, India, 302016 </h1>
                  <p className='hero-para'>The car parking and the Wi-Fi are always free, so you can stay in touch and come and go as you please. 
                      Strategically situated in Bani Park, allowing you access and proximity to local attractions and sights. 
                      Don't leave before paying a visit to the famous Amber Fort. Rated with 3.5 stars, 
                      this high-quality property provides guests with access to massage, restaurant and spa on-site.</p>
                  <Button className='btn explore-btn'>
                      <NavLink to="/Laxmi-Palace-book">Book Now</NavLink>
                  </Button>
              </div>
              
              <div className='section-hero-image'>
                  <picture>
                      <img src='hotel3.webp' className='hero-img'/>
                  </picture>
              </div>

              <div className='section-hero-data'>
                  <p className='hero-top-data'>Fort Chandragupt Hotel</p>
                  <h1 className='hero-heading'>Malsisar House,Sindhi Camp, Station Road, Jaipur, India, 302006 </h1>
                  <p className='hero-para'>Stay at Fort Chandragupt Hotel, a centrally located and solo traveler-friendly hotel. 
                      Enjoy spa services, an outdoor pool, diverse dining options, and accessible public transportation.
                      Experience the vibrant atmosphere and stunning roof terraces. Fort Chandragupt Hotel in Sindhi Camp, 
                      Jaipur is perfect for solo travelers seeking excitement. 
                      Explore Jaipur's cultural and historical landmarks, including Hawa Mahal and City Palace, just a short distance away.</p>
                  <Button className='btn explore-btn'>
                      <NavLink to="/Laxmi-Palace-book">Book Now</NavLink>
                  </Button>
              </div>
              
              <div className='section-hero-image'>
                  <picture>
                      <img src='hotel4.webp' className='hero-img'/>
                  </picture>
              </div>
          </div>

      </Wrapper>
    </>
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
  }
  .hero-top-data {
    text-transform: uppercase;
    font-weight: 600;
    font-size: 3rem;
    color: #e4007c;
  }
  .hero-heading {
    gap: 4rem;
    text-transform: uppercase;
    font-size: 1.8rem;
    color: ${({ theme }) => theme.colors.helper};
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
    border-radius: 40px;
  }
`;
export default Restaurant
