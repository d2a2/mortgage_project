const Popup = () => {
 return (
<div className="popup">
  <div className="row row-20">
    <div className="popup__content">
      <p className="popup__text">
        A mortgage isn't just about a rate. It's about building a strategy to help you leverage
        your wealth.
      </p>
    </div>
    <div className="popup__profile">
      <img className="popup__profile-img" src="@img/mentors/avatar-1.jpeg" alt="Avatar Justin"/>
      <p className="popup__profile-name">Justin</p>
    </div>
  </div>
  <div className="popup__action">
    <div>Have a question?</div>
    <a href="#" className="button popup__btn">Let’s talk</a>
  </div>
</div>
 )
}

export default Popup;