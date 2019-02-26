import React from 'react';
import Hero from './Hero/Hero';
import Jumbotron from './Jumbotron';
import MappedItem from './MappedItem';
import { Row, Card } from 'reactstrap';
import './mappedItem.css';

const Home = props => {
  return (
    <>
      <Hero
        loading={props.loading}
        random={props.randomBackgroundImage}
        randomTitle={props.randomTitle}
        getReleaseYear={props.getReleaseYear}
        handleChange={props.handleChange}
        searchHandler={props.searchHandler}
        searchResults={props.searchResults}
        searchCriteria={props.searchCriteria}
      />
      <Jumbotron />
      <div className="featured">
        <h2>Popular Movies</h2>
        <div className="cardWrapper">
          <Row className="nopadding">
            {props.movies.map(item => {
              return <MappedItem key={item.id} item={item} />;
            })}
          </Row>
        </div>
      </div>
      <div className="popularReviewers">
        <h1>Popular Reviewers</h1>
        <Card>
          <div className="cardWrapper" />
        </Card>
      </div>
    </>
  );
};

export default Home;
