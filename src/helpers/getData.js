import jsonplaceholder from "../apis/jsonplaceholder"

const getData = async (endpoint) => {
	const response = await jsonplaceholder.get(endpoint);
	const { data } = await response;
	return data;
}

export { getData };