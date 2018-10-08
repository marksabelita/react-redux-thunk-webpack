import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux';
import { getNews } from '../actions/news';
class News extends Component {

  componentDidMount(){
    const { getNews } = this.props;
    getNews();
  }

  render() {
    const { news } = this.props;
    console.log(news);
    return (
      <div>
        <div>Test</div>
      </div>
    )
  }
}

const mapStateToProp = (state) => { 
  return { 
    news: state.news
  }
};

News.propTypes = {
  news: PropTypes.object,
  getNews: PropTypes.func.isRequired
};

export default connect(mapStateToProp, { getNews })(News);