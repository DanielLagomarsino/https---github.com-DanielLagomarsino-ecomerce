import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import 'font-awesome/css/font-awesome.min.css'
import { deleteMovie, getMovies } from '../services/fakeMovieService'


class Movies extends Component {
    state = {
        movies: getMovies(),
        moviesCount: 0
    }
    generateMovieTable = () => {
        this.state.movies.map(movie => {
            return <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
            </tr>
        })
    };

    deleteMovie = (movie) => {
        deleteMovie(movie._id)
        this.setState({
            movies: this.state.movies.filter(m => m._id !== movie._id)
        })
    }


    render() {
        this.state.moviesCount = this.state.movies.length
        if (this.state.moviesCount === 0) return (<p>No movies found</p>)
        return <><React.Fragment>
            <br />
            <p>Showing {this.state.moviesCount} movies in the database</p>
            <table class="table">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Genre</th>
                        <th>Stock</th>
                        <th>Rate</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.movies.map(movie => {
                            return <tr key={movie._id}>
                                <td>{movie.title}</td>
                                <td>{movie.genre.name}</td>
                                <td>{movie.numberInStock}</td>
                                <td>{movie.dailyRentalRate}</td>
                                <td><button onClick={() => this.deleteMovie(movie)}  className='btn btn-danger'>Delete</button></td>
                            </tr>
                        })}
                </tbody>
            </table>

        </React.Fragment></>
    }

}

export default Movies
