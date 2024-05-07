const VideoBlock = () => {
    return (
        <div data-video-block className="video-block @@class">
  <img className="video-block__img" src="@@src" alt="Image"/>
  <a href="@@link" target="_blank" className="play play--light">
    <svg width="11" height="16">
      <use xlink:href="@img/icons/icons.svg#play"></use>
    </svg>
  </a>
  <p className="video-block__text">ext</p>
  <div className="time"><span></span></div>
</div>
    )
}

export default VideoBlock;