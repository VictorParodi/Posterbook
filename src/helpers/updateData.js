import jsonplaceholder from "../apis/jsonplaceholder";

const updateData = async (post, endpoint) => {
	const updatedPost = { ...post };
	await jsonplaceholder.patch(endpoint, updatedPost);
}

export {updateData};