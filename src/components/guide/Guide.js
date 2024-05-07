
const Guide = () =>{

    return(
        <section class="guide">
  <div className="guide__container">
    <div className="guide__content">
      <div>
        <h2 className="guide__title title title--h2">Get started with us</h2>
        <div className="guide__text">
          <p>Rates change, but every mortgage journey starts with a relationship. (Pssst...it’s not just about
            clicking
            a button)</p>
        </div>
      </div>
      <div className="guide__action action">
        <a href="#" className="button">Get started
          <svg>
            <use xlink:href="@img/icons/icons.svg#arrow"></use>
          </svg>
        </a>
        <a href="#" className="button button--outline">Schedule a time</a>
      </div>
    </div>
    <div className="guide__img">
      <img src="@img/promo-bg.jpeg" alt="Image"/>
    </div>
  </div>
</section>
    )
}

export default Guide;