import ArticlePreview from './ArticlePreview';
import ListPagination from './ListPagination';
import React from 'react';

const ArticleList = props => {
  if (!props.articles) {
    return (
      <div className="article-preview">Loading...</div>
    );
  }

  if (props.articles.length === 0) {
    return (
      <div className="article-preview">
        No articles are here... yet.
      </div>
    );
  }

  return (
    <div>
      <section className="section">
        <div className="container">
          <div className="row masonry-container">
            {
              props.articles.map(article => {
                return (
                        <ArticlePreview article={article} key={article.slug} />
                );
              })
            }
          </div>
        </div>
        <ListPagination
        pager={props.pager}
        articlesCount={props.articlesCount}
        currentPage={props.currentPage} />
      </section>
    </div>
  );
};

export default ArticleList;
