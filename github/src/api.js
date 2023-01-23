import { API_URL } from './config.js'

export async function fetchRepos(user, perPage = 2, page = 0) {
   const response = await fetch(`${API_URL}/${user}/repos?per_page=${perPage}&page=${page}`);
   const data = response.json();

   return data
}
