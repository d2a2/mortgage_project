
const BlogArticle = () => {
    
    return (
<a href="#" class="blog-article @@class">
  <div class="blog-article__tag accent-subtitle">blog</div>
  <div class="blog-article__content">
    <h3 class="blog-article__title title title--h3">title</h3>
    <div class="blog-article__text">
      <p>text</p>
    </div>
  </div>
  <div class="blog-article__author">
    <div class="blog-article__avatar">
      <img src="@@avatar" alt="Avatar"/>
    </div>
    <div>
      <div>by</div>
      <div class="blog-article__name">author</div>
    </div>
  </div>
</a>
    )
}

export default BlogArticle;