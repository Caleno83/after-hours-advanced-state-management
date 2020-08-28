import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import ChuckContext from '../contexts/checkContext';

const ChuckIsAGod = () => {
    // const { loading, chuck } = useSelector(state => state);
    const { chuck, loading } = useContext(ChuckContext);

    return (
        <h1>
            {loading ? 'Loading joke...' : chuck}
        </h1>
    );
}

export default ChuckIsAGod;