import {fetchRepos} from "./api.js";
import {formatDate, formatTimeAgo} from "./format-date.js";

let page = 1;
let perPage = 4;

let totalPages = 0;

function getRepos() {
    fetchRepos('techorda3', perPage, page).then(repos => {
        totalPages = repos.totalPages;
        const reposDiv = document.getElementById('repos');

        let reposHtml = ''
        repos.forEach(repo => {
            reposHtml += `
        <p>${repo.full_name}</p>
        <p>Default branch is: ${repo.default_branch}</p>
        <time>Created at ${formatDate(repo.created_at)}</time>
        <time>${formatTimeAgo(repo.created_at)}</time>
    `
        })
        reposDiv.insertAdjacentHTML('afterbegin', reposHtml)
    })
}

// getRepos();
//
// function next() {
//     page++;
//     getRepos();
// }
//
// function prev() {
//     if (page > 1) {
//         page--;
//         getRepos()
//     }
// }

// document.getElementById('next').addEventListener('click', next);
// document.getElementById('prev').addEventListener('click', prev);

const observer = new IntersectionObserver(([entries]) => {
    if (entries.isIntersecting) {
        page++;
        getRepos();
    } else {
        // observer.disconnect();
    }
});

observer.observe(document.getElementById('anchor'));
