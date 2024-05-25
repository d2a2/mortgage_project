import { useState, useEffect } from "react";
import './home.scss';
import Spinner from "../spinner/Spinner";

import promoBG from '../../assets/img/promo-bg.jpeg';
import logo from '../../assets/img/logo.png';
import play from '../../assets/svgicons/play.svg';
import arrow from '../../assets/svgicons/arrow.svg';


const Promo = () =>{

	const [videoDuration, setVideoDuration] = useState(null);


	useEffect(()=>{

		let player;
		window.onYouTubeIframeAPIReady = () => {
			console.log("YouTube Iframe API is ready");
            const player = new window.YT.Player('player', {
                videoId: 'RLgUEEAgvMg',
                events: {
                    'onReady': onPlayerReady
                }
            });
			
        };

        const tag = document.createElement('script');
        tag.src = "https://www.youtube.com/iframe_api";
        const firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
	}, []); 

	
	function onPlayerReady(event) {
		console.log("Player is ready");
        const duration = event.target.getDuration();
        setVideoDuration(duration);
    }

	const showVideoDuration = videoDuration !==null ? videoDuration : <Spinner/>;


    return(
        <section className="promo">
		<div className="promo__inner">
			<div className="promo__col" style={{backgroundImage: `url(${promoBG})`}}>
				<div className="promo__col-inner">
					<div className="promo__why">
						<p className="promo__why-text promo__text promo__text--light">Why a mortgage is so much more
							than just a rate?</p>
						<div data-video-block className="row row-20">
							<a href="https://www.youtube.com/watch?v=RLgUEEAgvMg" target="_blank" className="play">
								<img src={play} alt='play'/>
                            </a>
							<div className="time"><span>{showVideoDuration}</span></div>
						</div>
					</div>
				</div>
			</div>
			<div className="promo__col">
				<div className="promo__col-inner">
					<div className="promo__head row">
						 <a href="#" className="promo__logo logo"><img src={logo} alt="Logo"/> </a>
					</div>
					<div>
						<h1 className="promo__title title title--h1">Finding a mortgage is so <span>much more</span> than <span>just a
								rate</span>
						</h1>
						<div className="promo__content-text">
							<p>Rates change, but every mortgage journey starts with a relationship.
								(Pssst...it’s not just about clicking a button)</p>
						</div>
					</div>
					<div className="promo__action">
						<p className="promo__action-text promo__text promo__text--dark">Let us help you create your mortgage journey</p>
						<div className="promo__action-btns row row-wrap row-center">
							<a href="#" className="button">Get started
								<img src={arrow} alt='arrow'/>
							</a>
							<a href="#" className="button button--outline">Schedule a time</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
    )
};

export default Promo;