import React from 'react';
import { connect } from 'react-redux';
import Container from 'react-bootstrap/Container';
import { MOVIE_CATEGORY } from '../../config/constants';
import { getMoviesByType,
  setSelectedMovie,
  clearSelectedMovie } from '../../actions/movies-actions';
import MovieList from './MovieList';
import './home.scss';

class Home extends React.Component {
	render() {
		return (
			<Container>
				<MovieList
					category={MOVIE_CATEGORY.LATEST}
					getMoviesByType={getMoviesByType}
				/>
				<MovieList
					category={MOVIE_CATEGORY.TRENDING}
					getMoviesByType={getMoviesByType}
				/>
			</Container>
		);
	}
}

const mapDispatchToProps = dispatch => ({
  getMoviesByType: type => dispatch(getMoviesByType(type))
});

// export default Home;
export default connect(
	null,
	mapDispatchToProps
)(Home);







import { fetchMovie } from '../../actions/movie-actions';
import './home.scss';

class Home extends React.PureComponent {
  render() {
    const {
      getMoviesByType,
      movieType,
      setSelectedMovie
    } = this.props;
    return (
      <Container>
        <MovieList
          type={MOVIE_CATEGORY.LATEST}
          getMoviesByType={getMoviesByType}
          movieType={movieType}
          setSelectedMovie={setSelectedMovie}
        />
        <MovieList
          type={MOVIE_CATEGORY.TRENDING}
          getMoviesByType={getMoviesByType}
          movieType={movieType}
          setSelectedMovie={setSelectedMovie}
        />
        {/*<MovieDetailsPopup*/}
        {/*    clearSelectedMovie={clearSelectedMovie}*/}
        {/*    selectedMovie={selectedMovie}*/}
        {/*    fetchMovie={fetchMovie}*/}
        {/*    info={info}*/}
        {/*/>*/}
      </Container>
    );
  }
}

const mapStateToProps = state => {
  const { movieType, movieReducer } = state;
  const { selectedMovie } = movieType;
  const { info } = movieReducer;
  return {
    movieType,
    selectedMovie,
    info
  };
};

const mapDispatchToProps = dispatch => ({
  getMoviesByType: type => dispatch(getMoviesByType(type)),
  setSelectedMovie: id => dispatch(setSelectedMovie(id)),
  fetchMovie: id => dispatch(fetchMovie(id)),
  clearSelectedMovie: () => dispatch(clearSelectedMovie())
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);