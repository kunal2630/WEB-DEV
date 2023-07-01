import React from 'react';
import './SidebarRow.css';

import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';


const SidebarRow = (props) => {

    
  return (

    // if selected is true then class is sidebarrow selected else class is sidebarrow
    //WE DID THIS BASICALLY TO HIGHLIGHT THE CURRENT COMPONENT - LIKE ON WHICH PAGE WE ARE THERE- HOME,TRENDING OR SUSBCRIPTION
     
    <div className={ props.selected ?'sidebarrow selected':'sidebarrow'}>
        

        <props.iconname className='sidebarrow__icon'/>

        <p className='sidebarrow__title'>{props.title}</p>
    </div>
  )
}

export default SidebarRow