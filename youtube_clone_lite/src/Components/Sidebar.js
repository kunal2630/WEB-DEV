import React from 'react'
import './Sidebar.css';
import SidebarRow from './SidebarRow';
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HistoryIcon from '@mui/icons-material/History';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';


const Sidebar = () => {
  return (
    <div className='siderbar'>

        <SidebarRow selected iconname={HomeIcon} title="Home" />
        <SidebarRow iconname={WhatshotIcon} title="Trending"/>
        <SidebarRow iconname={SubscriptionsIcon} title="Subscription"/>

        <hr />
        <SidebarRow iconname={VideoLibraryIcon} title="Library"/>
        <SidebarRow iconname={HistoryIcon} title="History"/>
        <SidebarRow iconname={OndemandVideoIcon} title="Your Videos"/>
        <SidebarRow iconname={WatchLaterIcon} title="Watch Later"/>
        <SidebarRow iconname={ThumbUpOutlinedIcon} title="Liked Videos"/>
        <SidebarRow iconname={ExpandMoreOutlinedIcon} title="Show  More"/>
        <hr />

        
        </div>
  )
}

export default Sidebar