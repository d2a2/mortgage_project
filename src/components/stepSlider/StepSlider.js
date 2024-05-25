import { useState, useEffect, useRef } from "react";
import Popup from "../popup/Popup";
import VideoBlock from "../videoBlock/VideoBlock";

import "./stepSlider.scss";

const StepSlider = ()=> {

	const [showModal, setShowModal] = useState(false);
	const [currentIndex, setCurrentIndex] = useState(null);
	const sectionRef = useRef(null);

	const handleScroll = () =>{
		const sectionRect = sectionRef.current.getBoundingClientRect();
		const isAtBottom = window.innerHeight >= sectionRect.bottom;

		if (isAtBottom) {
			setShowModal(true);
		}
	};

	useEffect(()=>{
		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);


	const slides = [
		{
			id: "01",
			title: "Get positioned",
			text: "Structure, pre-approval, gathering, put them into the position get the offer accepted.",
		},
		{
			id: "02",
			title: "Prep the offer",
			text: "Terms of your offer, how quickly you can turn things around and who your lenders is advising.",
		},
		{
			id: "03",
			title: "Finalize Closing",
			text: "Put the final touches on from contract to close. Close the deal.",
		}
	   ]

	
	const onActivateSlide = (index) => {
		setCurrentIndex(index);
};


	function renderSlides(arr) {
		const items = arr.map((slide, index) =>{
		return (
				<div className="tutorials__steps" key={index}>
				<li onClick={()=> onActivateSlide(index)} className={index === currentIndex ? "tutorials__step--active tutorials-step " : 'tutorials__step tutorials-step'} tabIndex="0">		
					<div className="tutorials-step__inner">
						<div className="tutorials-step__inner--number">{slide.id}</div>
						<h3 className="tutorials-step__title title title--h3 title--border">{slide.title}</h3>
						<div className="tutorials-step__text">
							<p>{slide.text}</p>
						</div>
					</div>
				</li>
				</div>
			
)  
})
		const paginate = arr.map((_, index) =>{
			return ( 
						<div key={index} onClick={()=> onActivateSlide(index)} className={index === currentIndex ? "tutorials__pagination-dot tutorials__pagination-dot--active" : "tutorials__pagination-dot"}></div>
				
			)
		})


			return (
				<ul className="tutorials__steps-wrapper">
					<div className="tutorials__pagination">
						<div className="tutorials__pagination-decor">
						{paginate}
						</div>
					</div>
					{items}
				</ul>			
			)
			}

		const active = showModal ? <Popup/> : null;

		return (
			<section ref={sectionRef} className="tutorials">
				<div className="tutorials__container">
					<div className="tutorials__head">
						<h2 className="title title--h2">Your mortgage journey is a story...</h2>
						<p>It’s not just about clicking a button.</p>
					</div>
					<div className="tutorials__body">
						{renderSlides(slides)}
							<div className="tutorials__content">
								<div className="tutorials__content-block">
									<VideoBlock/>
									<VideoBlock/>
									<VideoBlock/>
								</div>
							</div>
					</div>	
				</div>
				{active}
			</section>
		)


}

export default StepSlider;