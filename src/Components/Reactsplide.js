import "./Reactsplide.css"
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import React from "react";
import './Bikeinfo.css'

const myCards = [
  {
    id: 1,
    bic_image: "https://www.bikesonline.com.au/assets/full/2022_XTRADA_7.jpg?20220427143203",
    name: '2023 Polygon Xtrada 7 1x12',
    price: '1,199',
    description: ['ALX XC SPORT ALUMINIUM FRAME','MODERN XC GEOMETRY','INTERNAL CABLE ROUTING','THRU AXLES','SPEC HIGHLIGHTS'],
    sold: 53,
    nomer: '0001',
  },
  {
    id: 2,
    bic_image: "https://www.bikesonline.com.au/assets/full/2022_XTRADA_6.jpg?20220427143203",
    name: 'Polygon Xtrada 6 1x11 - Mountain Bike',
    price: '999',
    description: ['ALX XC SPORT ALUMINIUM FRAME','MODERN XC GEOMETRY','120MM SUSPENSION FORK','SHIMANO MT201 HYDRAULIC DISC BRAKES'],
    sold: 84,
    nomer: '0002',
  },
  {
    id: 3,
    bic_image: "https://www.bikesonline.com.au/assets/full/2022_PREMIER_4.jpg?20220427143203",
    name: 'Polygon Premier 4 - Mountain Bike',
    price: '579',
    description: ['ALUTECH XC SPORT ALUMINIUM FRAME','SHIMANO ACERA / ALTUS 2X8 SPEED DRIVETRAIN','SUNTOUR XCM 120MM FORK','TEKTRO M275 HYDRAULIC DISC BRAKES'],
    sold: 105,
    nomer: '0003',
  },
  {
    id: 4,
    bic_image: "https://www.bikesonline.com.au/assets/full/4875550.jpg?20210318031512",
    name: 'Polygon Cleo 2 - 27.5 inch Mountain Bike',
    price: '569',
    description: ['Hydroformed AL6 Alutech Aluminium frame','Shimano Acera/Altus 24 Speed Drivetrain','27.5"? Polygon double wall alloy rims','Tektro Hydraulic Disc Brakes'],
    sold: 60,
    nomer: '0004',
  },
  {
    id: 5,
    bic_image: "https://www.bikesonline.com.au/assets/full/2022_CASCADE_3.jpg?20220427143203",
    name: 'Polygon Cascade 3 - 27.5 inch Mountain Bike',
    price: '599',
    description: ['ALUTECH XC SPORT 27.5" ALUMINIUM FRAME','SHIMANO TOURNEY 3X7 SPEED DRIVETRAIN','SUNTOUR XCE 100MM TRAVEL FORK','TEKTRO DISC BRAKES'],
    sold: 208,
    nomer: '0005',
  },
  {
    id: 6,
    bic_image: "https://www.bikesonline.com.au/assets/full/2022_WILDCAT_1.jpg?20220616152107",
    name: "Marin Wildcat Trail 1 - Women's Mountain Bike",
    price: '639',
    description: ['WOMEN`S SPECIFIC FRAME','SHIMANO 3X7 DRIVETRAIN','100MM SR SUNTOUR XCM HLO FORK','POWER CX 7 DISC BRAKES','WOMEN`S SPECIFIC CONTACT POINT'],
    sold: 31,
    nomer: '0006',
  },
  {
    id: 7,
    bic_image: "https://www.bikesonline.com.au/assets/full/2022_XTRADA_5.jpg?20220427143203",
    name: 'Polygon Xtrada 5 2x10 - Mountain Bike',
    price: '799',
    description: ['ALX XC SPORT ALUMINIUM FRAME','MODERN XC GEOMETRY','INTERNAL CABLE ROUTING','TEKTRO M275 HYDRAULIC DISC BRAKES','SUNTOUR XCM HLO 120MM FORK'],
    sold: 105,
    nomer: '0007',
  }
];

function Card({ myCard }) {
  const[open3,SetOpen3] = React.useState(false)
  return(
    <>
    <div className="card" >
      <img className="card_img" src={myCard.bic_image}/>
      <h1 className="card_name">{myCard.name}</h1>
      <span className="price"><h3>Price:&nbsp;&nbsp;</h3> <h2>${myCard.price}.00</h2></span>
      <ul className="desc">
        {myCard.description.map((text) => (
          <li key={text}>{text}</li>
        ))}
      </ul>      
      <h3 className="sold">Sold: {myCard.sold}</h3>
      <div className="btn_div"><button onClick={()=>SetOpen3(true)} className="btn_more">more</button></div>
      <p className="number">№{myCard.nomer}</p>
      </div>
      <div className={`bikeinfo ${open3 ? 'show' : ''}`}>
            <div className='bikeinfo_modal'>
                <div className='bikeinfo_col1'>
                    <div className="bikeinfo_img">
                        <img src='https://www.bikesonline.com.au/assets/alt_1/2022_XTRADA_6.jpg?20220430174745'></img>
                    </div>
                    <div>

                    </div>
                </div>
                <div className='bikeinfo_col2'>
                    <div>

                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </div>
 
    </>
  );
}



export default function () {
  
  const [step, setStep] = React.useState(0);
  const myCard = myCards[step];
  return(
    <div>
    <div className="splide__head"><h1 >Mountain Bikes</h1></div>
    <Splide aria-label="My Favorite Images"   
      options={ {
        type : 'loop',
        clones : 1,
        focus    : 'center',
        fixedWidth: '75%',
        perPage : 3,        
        gap: '14.5px',
        padding: '20%',
        drag   : 'free',
      } }>
      {myCards.map((card, index) => (
        <SplideSlide key={index}>
          <Card myCard={card} />
        </SplideSlide>
      ))}
    </Splide>
        
    </div>
  );
}