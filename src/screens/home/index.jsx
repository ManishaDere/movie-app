import React from 'react';
import { connect } from 'react-redux';
import Container from 'react-bootstrap/Container';
import { MOVIE_CATEGORY } from '../../config/constants';
import { getMoviesByType,
  setSelectedMovie,
  clearSelectedMovie } from '../../actions/movies-actions';
import MovieList from './MovieList';
import './home.scss';

class Home extends React.PureComponent {
	render() {
		const {
      getMoviesByType,
      movieType,
      // setSelectedMovie
    } = this.props;
    console.log("props==>", movieType);
		return (
			<Container>
				<MovieList
					category={MOVIE_CATEGORY.LATEST}
					getMoviesByType={getMoviesByType}
					movieType={movieType}
				/>
				<MovieList
					category={MOVIE_CATEGORY.TRENDING}
					getMoviesByType={getMoviesByType}
					movieType={movieType}
				/>
			</Container>
		);
	}
}

const mapDispatchToProps = dispatch => ({
  getMoviesByType: type => dispatch(getMoviesByType(type))
});
const mapStateToProps = state => {
  const { movieType, movieReducer } = state;
  console.log("state==>", state);
  // const { selectedMovie } = movieType;
  // const { info } = movieReducer;
  return {
    movieType,
    // selectedMovie,
    // info
  };
};

// export default Home;
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Home);


// const mapDispatchToProps = dispatch => ({
//   getMoviesByType: type => dispatch(getMoviesByType(type)),
//   // setSelectedMovie: id => dispatch(setSelectedMovie(id)),
//   // fetchMovie: id => dispatch(fetchMovie(id)),
//   // clearSelectedMovie: () => dispatch(clearSelectedMovie())
// });

// export default connect(null, mapDispatchToProps)(Home);