import React from 'react'
import styled from 'styled-components'

const Things = () => {
  return (
    <>
    <div>
      <img src='top2.png' height="200px"/>
    </div>
    <Wrapper>
    <div className='container grid grid-three-column'>
      <div className='card'>
        <figure>
          <img src='johari.jpg'/>
        </figure>
        <div className='card-data'>
          <h3>Johari Bazar</h3>
          <p>Johari Bazaar in Jaipur has a reputation that precedes itself. Located near Hawa Mahal,
             this market of exquisite jewellery and artefacts to choose from, can immerse shoppers in its glittering glory. 
            It is considered to be one of the oldest markets of Jaipur City.</p>

        </div>
      </div>

      <div className='card'>
        <figure>
          <img src='tripolia.jpg'/>
        </figure>
        <div className='card-data'>
          <h3>Tripolia Bazar</h3>
          <p>The Tripolia Bazar in Jaipur is one of the oldest markets in the city and is famous for the traditional lac bangles. 
            Known for its rich history and vibrant fabrics, 
            Jaipur markets are unavoidable when it comes for a shopping enthusiast to explore them to the fullest. </p>

        </div>
      </div>

      <div className='card'>
        <figure>
          <img src='chandpole.jpg'/>
        </figure>
        <div className='card-data'>
          <h3>Chandpole Bazar</h3>
          <p>Chandpole Bazar Jaipur is one of the most popular markets for shopping.
            It is located in the heart of Jawahar Circle; 
            many people like to visit this place on Sundays because it has lots of shops which are normally closed on other days.</p>

        </div>
      </div>

      <div className='card'>
        <figure>
          <img src='dal.jpg'/>
        </figure>
        <div className='card-data'>
          <h3>Dal Bati Churma–The Epitome of Rajasthani Cuisine:</h3>
          <p>No culinary exploration of Jaipur is complete without savouring the iconic Dal Bati Churma.
            Dal, a luscious lentil curry tempered with aromatic spices, is paired with Bati, baked wheat flour dumplings infused with ghee.</p>

        </div>
      </div>

      <div className='card'>
        <figure>
          <img src='ghewar.jpg'/>
        </figure>
        <div className='card-data'>
          <h3>Ghevar–The Majestic Rajasthani Dessert:</h3>
          <p>No culinary journey through Jaipur is complete without savouring the royal dessert, Ghevar.
            This exquisite sweet is made with flour and ghee, soaked in sugar syrup, and garnished with dry fruits. .</p>

        </div>
      </div>

      <div className='card'>
        <figure>
          <img src='ker.jpg'/>
        </figure>
        <div className='card-data'>
          <h3>Ker Sangri – A Unique Rajasthani Dish:</h3>
          <p>Ker Sangri is a traditional Rajasthani preparation that combines dried berries (ker) and beans (sangri) in a delectable mix of spices and flavours.
            The sun-dried vegetables are cooked with aromatic spices, creating a savoury and tangy dish that pairs perfectly with rotis.</p>

        </div>
      </div>

      <div className='card'>
        <figure>
          <img src='mewar.jpg'/>
        </figure>
        <div className='card-data'>
          <h3>Gangaur Festival :</h3>
          <p>Gangaur is a colourful festival which is one of the most important celebrations of the people of Rajasthan.
             It is observed throughout the state with great fervor and devotion by womenfolk who worship the goddess Gauri (Parvati), 
            the consort of Shiva during the Hindu month of Chaitra (March–April)</p>

        </div>
      </div>

      <div className='card'>
        <figure>
          <img src='gang.jpg'/>
        </figure>
        <div className='card-data'>
          <h3>Marwar Festival :</h3>
          <p>Marwar Festival is the total reflection of precious cultural values of Rajasthan is lifestyle thru the dance and music performances. 
            The pageant reflects the lifestyle of Rajasthan villages thru cultural performances. 
            It is the primary appeal of the competition which attracts a massive number of vacationers from everywhere in the country.</p>

        </div>
      </div>

      <div className='card'>
        <figure>
          <img src='fair.jpg'/>
        </figure>
        <div className='card-data'>
          <h3>PushKar Fair:</h3>
          <p>Pushkar Fair is also known as the camel fair or Pushkar Mela. It is a colorful and vibrant parade of exclusive exhibitions,
             exciting races, and attractive events. Celebrate for seven days, this annual camel and livestock fair, 
            held in the town of Pushkar between October and November, and draws a significant number of crowds. .</p>

        </div>
      </div>

    </div>
    </Wrapper>
    </>
  )
};
const Wrapper = styled.section`
  padding: 9rem 0;
  
  .container {
    max-width: 120rem;
  }
  .card {
    border: 0.1rem solid rgb(170 170 170 / 40%);
    border-radius: 20px;
    .card-data {
      padding: 0 2rem;
    }
    h3 {
      margin: 2rem 0;
      font-weight: 300;
      font-size: 2.4rem;
    }
  }
  figure {
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    transition: all 0.5s linear;
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 0%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      transition: all 0.2s linear;
      cursor: pointer;
    }
    &:hover::after {
      width: 100%;
    }
    &:hover img {
      transform: scale(1.2);
    }
    img {
      max-width: 90%;
      margin-top: 1.5rem;
      height: 20rem;
      transition: all 0.2s linear;
    }
  }
  

`;

export default Things