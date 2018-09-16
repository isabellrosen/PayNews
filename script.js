// Our variables
const key = "515410f9337d47b8977e7c5776d4ef84"
const urlPopular = `https://newsapi.org/v2/everything?pageSize=12&sortBy=popularity&q=+payments, mobile, online, pay&apiKey=${key}`
const urlLatest = `https://newsapi.org/v2/everything?q=+payments, mobile, online, pay&pageSize=12&sortBy=publishedAt&apiKey=${key}`

// Our main function

// Our main function
const recievedNews = (newsdata) => {
	// For each article object from the API, we create a new div in HTML.
    newsdata.articles.forEach((article) => {
					// Check if urlToImage is not null ie no image
					if(article.urlToImage) {
					//Here we create and add html elements to our html file
					document.querySelector(".allNews").innerHTML +=
            `<div class="news">
            <h3>${article.title}</h3>
            <img src="${article.urlToImage}"/>
            <p>${article.description}</p>
            <button class="readMore"><a href="${article.url}">Read more</a></button>
            </div>`
					}
    })
}


const latestNews = (newsdata) => {
	// For each article object from the API, we create a new div in HTML.
    newsdata.articles.forEach((article) => {
					// Check if urlToImage is not null ie no image
					if(article.urlToImage) {
					//Here we create and add html elements to our html file
					document.querySelector(".latestNews").innerHTML +=
            `<div class="news">
            <h3>${article.title}</h3>
            <img src="${article.urlToImage}"/>
            <p>${article.description}</p>
            <button class="readMore"><a href="${article.url}">Read more</a></button>
            </div>`
					}
    })
}


//Fetch is a built in function in Javascript, it gets the data from the API and tranforms it into Javascript objects – JSON data.
fetch(urlPopular)
  .then(response => response.json())
  .then(recievedNews)

fetch(urlLatest)
  .then(response => response.json())
  .then(latestNews)
