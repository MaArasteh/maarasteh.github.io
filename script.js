async function fetchRepositories() {
    const response = await fetch('https://maarasteh.github.io/repos.json');
    const repositories = await response.json();
    return repositories;
}

function renderRepositories(repositories) {
    const container = document.getElementById('repository-list');

    repositories.forEach(repo => {
        const repoElement = document.createElement('div');
        repoElement.className = 'repository';

        repoElement.innerHTML = `
            <h2><a href="${repo.html_url}" target="_blank">${repo.name}</a></h2>
            <p>${repo.description}</p>
            <div class="repository-meta">
                <span>Language: ${repo.language}</span>
                <span>Updated on ${new Date(repo.updated_at).toDateString()}</span>
                <span>★ ${repo.stargazers_count}</span>
                <span>🍴 ${repo.forks_count}</span>
            </div>
        `;

        container.appendChild(repoElement);
    });
}

async function init() {
    const repositories = await fetchRepositories();
    renderRepositories(repositories);
}

document.addEventListener('DOMContentLoaded', init);
