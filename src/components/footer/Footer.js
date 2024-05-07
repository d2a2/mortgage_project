 const Footer = () => {

    return(
<footer className="footer">
	<div className="container">
		<div className="footer__head">
			<a href="#" className="logo">
				<img src="@img/logo-light.png" alt="Logo"/>
			</a>
			<a href="#" className="button button--light">Schedule a time</a>
		</div>
		<div class="footer__body">
			<ul class="footer__items">
				<li>
					<h6 className="footer__item-title title title--h6">Contact us</h6>
				</li>
				<li className="footer__item">
					<a href="#" className="footer__item-link">14511 Myford Road, Suite 100, Tustin, CA 92780</a>
				</li>
				<li className="footer__item">
					<a href="#" className="footer__item-link">800-450-2010</a>
				</li>
				<li className="footer__item">
					<a href="mailto:customerservice@nafinc.com" className="footer__item-link">customerservice@nafinc.com</a>
				</li>
			</ul>
			<ul className="footer__items">
				<li>
					<h6 class="footer__item-title title title--h6">Education</h6>
				</li>
				<li className="footer__item">
					<a href="#" class="footer__item-link">Blog</a>
				</li>
				<li className="footer__item">
					<a href="#" class="footer__item-link">Ebook</a>
				</li>
				<li className="footer__item">
					<a href="#" class="footer__item-link">Webinar</a>
				</li>
			</ul>
			<ul className="footer__items">
				<li>
					<h6 class="footer__item-title title title--h6">Legal</h6>
				</li>
				<li className="footer__item">
					<a href="#" class="footer__item-link">Terms of use</a>
				</li>
				<li className="footer__item">
					<a href="#" class="footer__item-link">Privacy policy</a>
				</li>
			</ul>
			<div className="footer__text">
				<p>
					New American Funding makes Customer Service our number one priority. We encourage you to call our Corporate
					Customer Service department at 800-450-2010 ext. 7100 between 8 am and 5:00 pm Pacific or email us anytime at
					customerservice@nafinc.com for any complaint resolution you may have regarding the origination of your loan.
				</p>
				<p>
					This site is not authorized by the New York State Department of Financial Services. No mortgage solicitation
					activity or loan applications for properties located in the State of New York can be facilitated through this
					site.
					Read more <a href="https://www.newamericanfunding.com/#SsSswc4OzfksTC0E.99">here</a>
				</p>
			</div>
		</div>
		<div className="footer__bottom">
			<div className="footer__bottom-text">
				<p>If you received a letter from New American Funding and would like to be removed from our mailing list, please
					call 800-450-2010.</p>
				<p>&copy; 2018 Broker Solutions, Inc. DBA New American Funding. All Rights Reserved.</p>
			</div>
		</div>
	</div>
</footer>
    )
 }

 export default Footer;