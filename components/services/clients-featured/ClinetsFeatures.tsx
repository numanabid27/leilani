import React from 'react'
import style from "./ClinetsFeatures.module.scss";
import useDimensions from '@/hooks/use-dimensions';
import Marquee from "react-fast-marquee";
const ClinetsFeatures = () => {
    const {width} = useDimensions();
    const data = [
      {
        img:"../images/logo1.png"
      },
      {
        img:"../images/logo2.png"
      },
      {
        img:"../images/logo3.png"
      },
      {
        img:"../images/logo4.png"
      },
      {
        img:"../images/logo5.png"
      },
      {
        img:"../images/logo6.png"
      },
      {
        img:"../images/logo7.png"
      },
      {
        img:"../images/logo8.png"
      },
      {
        img:"../images/logo9.png"
      },
      {
        img:"../images/logo10.png"
      },
      {
        img:"../images/logo11.png"
      },
      {
        img:"../images/logo12.png"
      },
      {
        img:"../images/logo13.png"
      },
      {
        img:"../images/logo14.png"
      },

      {
        img:"../images/logo15.png"
      },
      {
        img:"../images/logo16.png"
      },
      {
        img:"../images/logo17.png"
      },
      {
        img:"../images/logo18.png"
      },
      {
        img:"../images/logo19.png"
      },
      {
        img:"../images/logo20.png"
      },
      {
        img:"../images/logo21.png"
      },
    ]
    const data1 = [
      {
        img:"../images/cimg1.png"
      },
      {
        img:"../images/cimg2.png"
      },
      {
        img:"../images/cimg3.svg"
      },
      {
        img:"../images/cimg4.png"
      },
      {
        img:"../images/cimg5.png"
      },
      {
        img:"../images/cimg6.png"
      },
      {
        img:"../images/cimg7.png"
      },
      {
        img:"../images/cimg8.png"
      },
      {
        img:"../images/cimg9.png"
      },
      {
        img:"../images/cimg10.png"
      },
      {
        img:"../images/cimg11.png"
      },
      {
        img:"../images/cimg12.png"
      },
    ]
  return (
<>
<div className={style.container}>
  <h1>
      Featured Clients & Partners 

  </h1>
    <div className={style.upper_imgs}>
        <Marquee speed={30} gradientWidth={"200px"} pauseOnHover >
          {
            data.map((resp:any, i:number) => {
              return <div key={i.toString()}>
                <img src= {resp.img} />
              </div>
            })
          }
       
        </Marquee>
        </div>
        <div className={style.upper_imgs}>
        <Marquee speed={30} gradientWidth={"200px"} pauseOnHover >
        {
            data1.map((resp:any, i:number) => {
              return <div key={i.toString()}>
                <img src= {resp.img} />
              </div>
            })
          }
        </Marquee>
        </div>
        </div>

</>

  )
}

export default ClinetsFeatures