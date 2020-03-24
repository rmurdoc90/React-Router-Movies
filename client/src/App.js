import React, { useState } from 'react';
import { Route, Link, Switch } from "react-router-dom";
import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList'
import Movie from './Movies/Movie';


const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <SavedList list={savedList} />
      <div>
        <Switch>
          <Route path='/'>
            <MovieList />
            <Link to='/movies/:movieID'>Movie</Link>
          </Route>
          <Route path='/movies/'>
            <Movie />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default App;
