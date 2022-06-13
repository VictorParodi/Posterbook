import { useState, useEffect } from 'react';
import jsonplaceholder from './../apis/jsonplaceholder';

const useFetch = (endpoint) => {
	const [state, setState ] = useState([]);

	useEffect(() => {
		(async () => {
			const response = await jsonplaceholder.get(endpoint);
			const { data } = await response;
			setState(data);
		})();
	}, [endpoint]);

	return state;
}

export {useFetch};