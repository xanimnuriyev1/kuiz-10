import React from 'react'
import '../home.css'
import SignImg from '../../assets/images/sign.png'
const HomeCenter = () => {
  return (
   <section>
    <div className='HomeCenter'>
   <div className='HomeCenterTop'>
    <div className='Border'></div>
    <div className='Welcome'>Welcome</div>
    <div className='Border'></div>
   </div>
   <div className='HomeCenterDown'>
     <div className='Box'>
        <h3 className='date'>2002</h3>
        <p className='BoxText'>Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Hic, minus quam <br /> distinctio recusandae fuga quaerat?</p>
     </div>
     <div className='Box'>
        <h3 className='date'>2010</h3>
        <p className='BoxText'>Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Hic, minus quam <br /> distinctio recusandae fuga quaerat?</p>
     </div>
     <div className='Box'>
        <h3 className='date'>2018</h3>
        <p className='BoxText'>Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Hic, minus quam <br /> distinctio recusandae fuga quaerat?</p>
     </div>
   </div>
   <div className='Sign'>
    <img src={SignImg} alt="" />
   </div>
    </div>
   </section>
  )
}

export default HomeCenter
