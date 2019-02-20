import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchNews } from "../../store/actions/news";
import Loader from "../../components/Loader/Loader";
import classes from "./News.module.css";

class News extends Component {
  componentDidMount() {
    this.props.fetchNews();
  }
  render() {
    const news = this.props.news;

    return (
      <div className={classes.News}>
        <h2>НОВОСТИ</h2>
        <strong>Количество новостей: {news.length}</strong>

        {this.props.isLoading ? (
          <Loader />
        ) : (
          news.map((item, index) => {
            return (
              <article key={index}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <a href={item.url}>{item.url}</a>
              </article>
            );
          })
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    news: state.news.news,
    isLoading: state.news.isLoading
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchNews: () => {
      dispatch(fetchNews());
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(News);
