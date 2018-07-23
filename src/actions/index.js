import axios from 'axios';
export const GET_PROVIDERS = 'GET_PROVIDERS';
export const GET_PROVIDER = 'GET_PROVIDER';
export const GET_REVIEW = 'GET_REVIEW';
export const GET_REVIEWS = 'GET_REVIEWS';
export const POST_REVIEW = 'POST_REVIEW';
export const DELETE_REVIEW = 'DELETE_REVIEW';
export const PATCH_REVIEW = 'UPDATE_REVIEW';
export const SELECT_PROVIDER = 'SELECT_PROVIDER';


const ROOT_URL = 'http://localhost:3004/';

// Search function searches all the fields, not just the name field
export function searchProviders(query) {
	const url = `${ROOT_URL}providers?q=${query}&_limit=20`;
	const request = axios.get(url);
	return{
		type: GET_PROVIDERS,
		payload: request
	};
}

export function getProviders() {
	const url = `${ROOT_URL}providers?_limit=20`;
	console.log(url);
	const request = axios.get(url);
	return{
		type: GET_PROVIDERS,
		payload: request
	};
}

export function getProvider(id) {
	const url = `${ROOT_URL}providers/${id}`;
	const request = axios.get(url);
	return{
		type: GET_PROVIDER,
		payload: request
	};
}

export function getReviews(providerId) {
	const url = `${ROOT_URL}reviews?providerId=${providerId}`;
	const request = axios
		.get(url);
	return{
		type: GET_REVIEWS,
		payload: request
	};
}

export function getReview(id) {
	const url = `${ROOT_URL}reviews/${id}`;
	const request = axios
		.get(url);
	return{
		type: GET_REVIEW,
		payload: request
	};
}

export function postReview(data, callback = ()=>{}) {
	const url = `${ROOT_URL}reviews`;
	const request = axios
		.post(url, data)
		.then(() => callback());
	return{
		type: POST_REVIEW,
		payload: request
	};
}
export function deleteReview(id, callback = ()=>{}) {
  const url = `${ROOT_URL}reviews/${id}`;
	const request = axios
		.delete(url)
		.then(() => callback());
  return{
	type: DELETE_REVIEW,
  	payload: request
  };
}

export function patchReview(id, data, callback = ()=>{}) {
	const url = `${ROOT_URL}reviews/${id}`;
	const request = axios
		.patch(url,data)
		.then(() => callback());
	return{
		type: PATCH_REVIEW,
		payload: request
	};
}

export function selectProvider(id) {
	return{
		type: SELECT_PROVIDER,
		payload: id
	};
}