var queryURL ='https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${encodeURIComponent(searchTerm)}&api-key=${adHsQ4r1MPpOJF8Dv3up0X7w2pt5b5bx}';
fetch(queryURL)
        .then(function(response){
             return response.json();
         })
        .then();
    });
    
        

// https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=yourkey 




















/*
document.getElementById('searchButton').addEventListener('click', function() {
    let searchTerm = document.getElementById('searchTerm').value;
    fetchArticles(searchTerm);
});

function fetchArticles(searchTerm) {
    let apiKey = 'adHsQ4r1MPpOJF8Dv3up0X7w2pt5b5bx'; // Replace with your actual API key
    let url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${encodeURIComponent(searchTerm)}&api-key=${adHsQ4r1MPpOJF8Dv3up0X7w2pt5b5bx}`;


}

function displayResults(data) {
    let resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = ''; // Clear previous results

    if (data.response.docs.length === 0) {
        resultsContainer.innerHTML = '<p>No results found</p>';
        return;
    }

    data.response.docs.forEach(article => {
        let articleElement = document.createElement('div');
        articleElement.innerHTML = `
            <h3>${article.headline.main}</h3>
            <p>${article.snippet}</p>
            <a href="${article.web_url}" target="_blank">Read more</a>
        `;
        resultsContainer.appendChild(articleElement);
    });
}/*
