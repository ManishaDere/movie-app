import React from 'react';

class MovieList extends React.Component {

	componentDidMount() {
		let { category, getMoviesByType } = this.props;
		console.log("category:", category);
		console.log("getMoviesByType:", getMoviesByType);
		getMoviesByType(category);
	}
	render() {
		return (
			<div className="container">MovieList</div>
		);
	}
}

export default MovieList;