import React from 'react';
import './Header.css';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import VideoCallIcon from '@mui/icons-material/VideoCall';

import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';


export const Header = () => {
  return (
    <div className='header'>


        <div className="header__left">


            <MenuIcon fontSize='large'/>
            <img  src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png" alt="Youtube" className='youtube__logo'/>




        </div>

        <div className="header__center">


            <div className="header__center__search">

                <input  type="text" placeholder='Search'/>
                <SearchIcon fontSize='large' className="header__center__search__icon"/>

            </div>
             
             <div className="header__center__voiceicon">

                    <KeyboardVoiceIcon fontSize='medium' />


             </div>
          
            


        </div>
        

        <div className="header__right">

                <VideoCallIcon fontSize='large'/>
                <NotificationsIcon fontSize='large' />
                <AccountCircleIcon fontSize='large' />


        </div>
       
      
        
        </div>
  )
}
