import React from 'react'
import './VideoCard.css';
import Avatar from '@mui/material/Avatar';

const VideoCard = ({thumbnail,channelimage,title,channelname,views,timestamp}) => {
  return (
    <div className='videocard'>

      <div className="videocard__thumbnail">

        <img src={thumbnail} alt="" />
      </div>

      <div className="videocard__information">

          <div className="videocard__channenlogo">

             <Avatar src={channelimage} alt={channelname}/>

          </div>
          
          <div className="videocard__information__text">

              <div className="videocard__title">

                  <h4>{title}</h4>

              </div>

              <div className="videocard__information__views">

                  <div className="videocard__channel__name">

                      <p>{channelname}</p>

                  </div>

                  <div className="videocard__video__information">

                      <span>{views}</span> 
                      
                      <span className='videocard__video__information__dot' > &#8226; </span> 
                      
                      <span>{timestamp} </span>

                  </div>


              </div>

           </div>

         


      </div>



    </div>
  )
}

export default VideoCard