import { useState } from 'react';

import decor from '../../assets/img/icons/pagination-decor.svg'

import './tutorialsStep.scss';

const TutorialsStep = () =>{

    const [slideActive, setSlideActive] = useState(false);

    

return (
    <section class="tutorials">
		<div class="tutorials__container">
			<div class="tutorials__head">
				<h2 class="title title--h2">Your mortgage journey is a story...</h2>
				<p>It’s not just about clicking a button.</p>
			</div>
			<div class="tutorials__body">
				<div class="tutorials__steps-wrapper">
					<div class="tutorials__pagination">
						<div class="tutorials__pagination-decor">
							<div className='tutorials__pagination-dot'></div>
							<div className='tutorials__pagination-dot'></div>
							<div className='tutorials__pagination-dot'></div>
						</div>
					</div>
					<ul class="tutorials__steps">
						<li class="tutorials__step tutorials-step" tabindex="0">
							<div class="tutorials-step__inner">
								<h3 class="tutorials-step__title title title--h3 title--border">Get positioned</h3>
								<div class="tutorials-step__text">
									<p>Structure, pre-approval, gathering, put them
										into the position get the offer accepted.</p>
								</div>
							</div>
						</li>
						<li class="tutorials__step tutorials-step" tabindex="0">
							<div class="tutorials-step__inner">
								<h3 class="tutorials-step__title title title--h3 title--border">Prep the offer</h3>
								<div class="tutorials-step__text">
									<p>Terms of your offer, how quickly you can turn
										things around and who your lenders is advising.</p>
								</div>
							</div>
						</li>
						<li class="tutorials__step tutorials-step" tabindex="0">
							<div class="tutorials-step__inner">
								<h3 class="tutorials-step__title title title--h3 title--border">Finalize Closing</h3>
								<div class="tutorials-step__text">
									<p>Put the final touches on from contract to close.
										Close the deal.</p>
								</div>
							</div>
						</li>
					</ul>
				</div>
				{/* <div class="tutorials__content">
					<div class="tutorials__content-block">
						@@include('html/_video-block.html', {
						"class": "tutorials__video-block",
						"src": "img/tutorials/1.png",
						"text": "The difference between «fixed rate» and «adjustable»",
						"link": "https://www.youtube.com/watch?v=RLgUEEAgvMg"
						})
						@@include('html/_video-block.html', {
						"class": "tutorials__video-block",
						"src": "img/tutorials/1.png",
						"text": "The difference between «fixed rate» and «adjustable»",
						"link": "https://www.youtube.com/watch?v=RLgUEEAgvMg"
						})
						@@include('html/_video-block.html', {
						"class": "tutorials__video-block",
						"src": "img/tutorials/1.png",
						"text": "The difference between «fixed rate» and «adjustable»",
						"link": "https://www.youtube.com/watch?v=RLgUEEAgvMg"
						})
					</div>
					<div class="tutorials__content-block">
						@@include('html/_video-block.html', {
						"class": "tutorials__video-block",
						"src": "img/tutorials/1.png",
						"text": "The difference between «fixed rate» and «adjustable»",
						"link": "https://www.youtube.com/watch?v=RLgUEEAgvMg"
						})
						@@include('html/_video-block.html', {
						"class": "tutorials__video-block",
						"src": "img/tutorials/1.png",
						"text": "The difference between «fixed rate» and «adjustable»",
						"link": "https://www.youtube.com/watch?v=RLgUEEAgvMg"
						})
					</div>
					<div class="tutorials__content-block">
						@@include('html/_video-block.html', {
						"class": "tutorials__video-block",
						"src": "img/tutorials/1.png",
						"text": "The difference between «fixed rate» and «adjustable»",
						"link": "https://www.youtube.com/watch?v=RLgUEEAgvMg"
						})
					</div>
				</div> */}
			</div>
		</div>
	</section>
)

}

export default TutorialsStep;