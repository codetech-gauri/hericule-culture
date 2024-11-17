import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { Button } from '../Styles/Button'

const Monument = () => {
  return (
    <Wrapper>
    <div className='container grid grid-two-column'>
        <div className='section-hero-data'>
            <h1 className='hero-top-data'>Hawa Mahal</h1>
            {/* <h4 className='hero-heading'>About</h4> */}
            <p className='hero-para'>Made of red and pink sandstone, Jaipur's signature palace of 
                unusual architecture is a stunning example of local artistry. 
                The top of the Hawa Mahal offers an excellent view over the city.It was designed by Lal Chand Ustad. Its five-floor exterior is akin 
                to a honeycomb with its 953 small windows called Jharokhas decorated with intricate latticework.The original intent of the 
                lattice design was to allow royal ladies to observe everyday life and festivals celebrated in the street below without being seen. </p>
            <h3>Visit Timings : 9:00 am–5:00 pm</h3>
            <Button className='btn explore-btn'>
                    <NavLink to="/buy-ticket">Buy Tickets</NavLink>
            </Button>
        </div>
        
        <div className='section-hero-image'>
            <picture>
                {/* <img src='hawamahal1.jpg' className='hero-img' height="500px"/> */}
                <a href='https://uploads.knightlab.com/storymapjs/8f0214037664b80faad869d1c6e9d919/hawa-mahal/index.html'><img src='hawamahal1.jpg' className='hero-img' height="500px"/></a>
            </picture>
        </div>



        <div className='section-hero-data'>
            <h1 className='hero-top-data'>CITY PALACE</h1>
            {/* <h4 className='hero-heading'>About</h4> */}
            <p className='hero-para'>City Palace forms one of the most famous tourist attractions and a major landmark in Jaipur. 
              The beautiful palace was built by Maharaja Sawai Jai Singh during his reign.  
              The site for the palace was located on the site of a royal hunting lodge on a plain land encircled by a rocky hill range,
               five miles south of Amber. The history of the city palace is closely linked with the history of Jaipur city And its rulers, starting with Maharaja Sawai Jai Singh II who ruled from 1699 to 1744. 
              Among the various forts and palaces of Jaipur, 
              City Palace stands apart, with its outstanding art and architecture..</p>
            <h3>Visit Timings : 9:00 am–5:00 pm </h3>
            <Button className='btn explore-btn'>
                    <NavLink to="/buy-ticket">Buy Tickets</NavLink>
            </Button>
              
        </div>
        
        <div className='section-hero-image'>
            <picture>
                {/* <img src='hawamahal1.jpg' className='hero-img' height="500px"/> */}
                <a href='https://uploads.knightlab.com/storymapjs/8f0214037664b80faad869d1c6e9d919/city-palace-jaipur/index.html'><img src='city1.webp' className='hero-img' height="500px"/></a>
            </picture>
        </div>



        <div className='section-hero-data'>
            <h1 className='hero-top-data'>JANTAR MANTAR</h1>
            {/* <h4 className='hero-heading'>About</h4> */}
            <p className='hero-para'>he Jantar Mantar is a collection of 19 astronomical instruments built by the Rajput king Sawai Jai Singh, the founder of Jaipur, Rajasthan. The monument was completed in 1734.
               It features the world's largest stone sundial, and is a UNESCO World Heritage Site.The monument features instruments operating in each of the three main classical celestial coordinate systems: the horizon-zenith local system, the equatorial system, and the ecliptic system.
               It is near City Palace and Hawa Mahal.
              The instruments allow the observation of astronomical positions with the naked eye.</p>
            <h3>Visit Timings : 9:00 am–5:00 pm</h3>
            <Button className='btn explore-btn'>
                    <NavLink to="/buy-ticket">Buy Tickets</NavLink>
            </Button>
        </div>
        
        <div className='section-hero-image'>
            <picture>
                {/* <img src='hawamahal1.jpg' className='hero-img' height="500px"/> */}
                <a href='https://uploads.knightlab.com/storymapjs/8f0214037664b80faad869d1c6e9d919/jantar-mantar/index.html'><img src='Jantar1.jpg' className='hero-img' height="500px"/></a>
            </picture>
        </div>

        <div className='section-hero-data'>
            <h1 className='hero-top-data'>NAHARGARH FORT</h1>
            {/* <h4 className='hero-heading'>About</h4> */}
            <p className='hero-para'>Nahargarh Fort stands on the edge of the Aravalli Hills, 
              overlooking the city of Jaipur in the Indian state of Rajasthan. Along with Amer Fort and Jaigarh Fort, 
              Nahargarh once formed a strong defence ring for the city.The popular belief is that Nahar here stands for Nahar Singh Bhomia,whose spirit haunted the place and obstructed construction of the fort.
               The fort was originally named Sudershangarh, but it became known as Nahargarh, 
              which means 'abode of tigers'. </p>
              <h3>Visit Timings : 10:00 am – 5:30 pm</h3>
              <Button className='btn explore-btn'>
                    <NavLink to="/buy-ticket">Buy Tickets</NavLink>
              </Button>
              
        </div>
        
        <div className='section-hero-image'>
            <picture>
                {/* <img src='hawamahal1.jpg' className='hero-img' height="500px"/> */}
                <a href='https://uploads.knightlab.com/storymapjs/8f0214037664b80faad869d1c6e9d919/nahargarh-fort/index.html'><img src='nahargarh.jpg' className='hero-img' height="500px"/></a>
            </picture>
        </div>

        <div className='section-hero-data'>
            <h1 className='hero-top-data'>BIRLA MANDIR</h1>
            {/* <h4 className='hero-heading'>About</h4> */}
            <p className='hero-para'>Birla Mandir, Jaipur Lakshmi Narayan Templeis a Hindu temple located in Jaipur, 
              India and is one of many Birla mandirs.It was built by the B.M. Birla Foundation in 1988 and is constructed solely of white marble.
              It is dedicated to the Hindu goddess Lakshmi and god Vishnu Narayan,whose images appear inside, along with other Hindu gods and goddesses and selections from the Gita and Upanishads.
              It is located in Jaipur's Tilak Nagar neighborhood near Moti Dungari hill.</p>
              <h3>Visit Timings : 6:00 am – 12:00 pm</h3>
              <Button className='btn explore-btn'>
                    <NavLink to="/buy-ticket">Buy Tickets</NavLink>
              </Button>
        </div>
        
        <div className='section-hero-image'>
            <picture>
                {/* <img src='hawamahal1.jpg' className='hero-img' height="500px"/> */}
                <a href='https://uploads.knightlab.com/storymapjs/8f0214037664b80faad869d1c6e9d919/birla-mandir/index.html'><img src='birla.jpg' className='hero-img' height="500px"/></a>
            </picture>
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
    margin-top: 1.3rem;
  }
  .hero-top-data {
    text-transform: uppercase;
    font-weight: 500;
    font-size: 5rem;
    color: #e4007c;
    font-family: Times New Roman;
  }
  .hero-heading {
    gap:2rem;
    text-transform: uppercase;
    font-size: 2rem;
  }
  .hero-para {
    margin-top: 1.5rem;
    margin-bottom: 2rem;
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
    border-radius: 30px;
    max-width: 100%;
  }
`;
export default Monument
