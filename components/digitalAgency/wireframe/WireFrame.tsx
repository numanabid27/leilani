import React from 'react'
import style from './WireFrame.module.scss'
const wirefram = ({data}:any) => { 
  return (
    <div className={style.container}>
      <h1>
      We replace unreliable wireframe and expensive agencies for on of the best organized layer.
      </h1>
      <div className={style.main_frame}>
         <p>
         {data?.detail_section.description}
         </p>
         <img src="/images/wireFrame-img.png" alt="" />
      </div>
      </div>
  )
}

export default wirefram