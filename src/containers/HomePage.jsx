/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { fetchRepos, resetReposList } from '../store/actions/repos';
import { setError, removeError } from '../store/actions/error';

import '../styles/HomePage.css';

const HomePage = () => {
  const reposList = useSelector((state) => state.repos);
  const error = useSelector((state) => state.error);

  const [userName, setUserName] = useState('');
  const [inLoad, setInLoad] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    setInLoad(true);
    dispatch(resetReposList());
    dispatch(fetchRepos(userName))
      .then(() => {
        dispatch(removeError());
        setInLoad(false);
        setUserName('');
      })
      .catch((err) => {
        dispatch(setError(err));
        setInLoad(false);
      });
  };

  const handleClick = (id, e) => {
    e.preventDefault();
    history.push(`/repos/${id}`);
  };

  return (
    <div className="HomePage">
      <h1 className="HomePage-headline">Github finder</h1>

      <form className="HomePage-form" onSubmit={handleSubmit}>
        <label htmlFor="username"> Enter an existing Github username:</label>
        <div>
          <input id="username" type="text" onChange={(e) => setUserName(e.target.value)} value={userName} autoComplete="off" placeholder="e.g: egorshum, getify etc." />
          <button type="submit" disabled={!userName}>Submit</button>
          { error && <div className="HomePage-error">{error}</div>}
        </div>
      </form>


      <ul className="HomePage-list">
        { reposList.length ? (
          reposList.map((item) => (
            <li key={item.id} className="HomePage-li">
              <a href={`/repos/${item.id}`} onClick={handleClick.bind(this, item.id)}>{item.name}</a>
              <div>{item.description}</div>
            </li>
          ))
        ) : (
          inLoad && <p>Loading...</p>
        )}
      </ul>
    </div>
  );
};

export default HomePage;
