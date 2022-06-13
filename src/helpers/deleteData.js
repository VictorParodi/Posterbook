import jsonplaceholder from "../apis/jsonplaceholder";

const deleteData = async (endpoint) => {
	await jsonplaceholder.delete(endpoint);
}

export {deleteData};