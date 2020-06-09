import React from 'react';
import './homepage.style.scss';

const HomePage= () =>(
    <div className='HomePage'>
        <div className='directory'>

            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>Marvel</h1>
                    <span className='action'>View</span>
                </div>
            </div>
            
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>DC</h1>
                    <span className='action'>View</span>
                </div>
            </div>
          
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>Star Wars</h1>
                    <span className='action'>View</span>
                </div>
            </div>

            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>Dragon Ball Z</h1>
                    <span className='action'>View</span>
                </div>
            </div>

            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>Gundam</h1>
                    <span className='action'>View</span>
                </div>
            </div>

        </div>
    </div>

);
export default HomePage;

