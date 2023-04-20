import React from 'react';

const Header = () => {
  return (

    <div className='header'>
        <nav>
          <div className='ImageLogo'>
            <img src={require("../images/logo.png")} alt='SignEncoder-Decoder' />
          </div>
         <ul>
            <li><a href='./header'>Home</a></li>
            <li><a href='./about'>About us</a></li>
            <li><a href='./contact'>Contact us</a></li>
         </ul>
        </nav>
        <div class="area" >
            <ul class="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>
    </div>
    </div >
  )
}

export default Header