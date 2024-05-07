import './home.scss';



import promoBG from '../../img/promo-bg.jpeg';
import logo from '../../img/logo.png';
import play from '../../svgicons/play.svg';
import arrow from '../../svgicons/arrow.svg';


const Promo = () =>{

	

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
							<div className="time"><span>0:34</span></div>
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