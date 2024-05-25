import tutor from "../../assets/img/tutorials/1.png";
import play from '../../assets/svgicons/play.svg';

import "./videoBlock.scss";



const VideoBlock = () => {
    return (
        <div data-video-block className="video-block tutorials__video-block">
           <img className="video-block__img" src={tutor} alt="Image"/>
        <a href="https://www.youtube.com/watch?v=RLgUEEAgvMg2332" target="_blank" className="play play--light">
          <img src={play} alt='play'/>
        </a>
        <p className="video-block__text">The difference between «fixed rate» and «adjustable»</p>
        <div className="time"><span>50</span></div>
      </div>
    )
}

export default VideoBlock;