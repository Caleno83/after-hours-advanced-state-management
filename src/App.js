import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { fetchChuckJoke } from './actions/chuckActions';
import ChuckIsAGod from './components/ChuckIsAGod';
import ChuckContext from './contexts/checkContext';

function App() {
  // const dispatch = useDispatch();
  // const errors = useSelector(state => state.errors);

  const [chuck, setChuck] = useState('');
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState('');

  const getJoke = () => {
    setLoading(true);
    axios
    .get('http://api.icndb.com/jokes/random')
    .then(res => {
        // dispatch({ type: FETCH_CHUCKY_SUCCESS, payload: res.data.value.joke});
        setChuck(res.data.value.joke);
        setErrors('');
        setLoading(false);
    }).catch(err => {
      setLoading(false);
      setErrors(err.message);
    });
  }


  useEffect(() => {
    // dispatch(fetchChuckJoke());
    getJoke();
  }, []);

  return (
    <div>
      <img src='https://nakedsecurity.sophos.com/wp-content/uploads/sites/2/2012/01/chuck-norris-thumb.jpg' alt='Chuck Norris' />
      <ChuckContext.Provider value={{ chuck, loading }}>
        <ChuckIsAGod />
        <button onClick={getJoke}>More Norris Goodness</button>
        {errors ? <p>{errors}</p> : <></>}
      </ChuckContext.Provider>
    </div>
  );
}

export default App;
