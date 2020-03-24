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
          </Route>
          <Route path='/movies/:movieID'>
            <Movie />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default App;
