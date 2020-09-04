// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.
const cardsContainer = document.querySelector('.cards-container');
console.log(cardsContainer);


axios.get('https://lambda-times-api.herokuapp.com/articles')
    .then(stuff => {
        const articleData = stuff.data.articles;
        console.log(articleData)
        
        for(const article in articleData){
            const obj = articleData[article];
            for(const o in obj){
                // console.log(obj[o]);
                const articleCards = articleMaker(obj[o]); 
                cardsContainer.appendChild(articleCards);
            }
        }
        // articleData.forEach(article => {
        //     for(const data in article){
        //         console.log(article[data]);
        //         console.log(data);
        //     }
        //     articleMaker(article)
        //     const articleCards = articleMaker(article); 
        //     cardsContainer.appendChild(articleCards);
        //     console.log(article);
        // })
 
        
    })
    .catch(err => {
        debugger
    })

function articleMaker(obj){
    console.log(obj);
    const cardDiv = document.createElement('div');
    const headline = document.createElement('div');
    const author = document.createElement('div');
    const imgDiv = document.createElement('div')
    const authorImg = document.createElement('img');
    const authorName = document.createElement('span');

    cardDiv.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    imgDiv.classList.add('img-container');

    cardDiv.appendChild(headline);
    cardDiv.appendChild(author);
    author.appendChild(imgDiv);
    author.appendChild(authorName);
    imgDiv.appendChild(authorImg);

    headline.textContent = obj.headline;
    authorImg.src = obj.authorPhoto;
    authorName.textContent = obj.authorName;

    cardDiv.addEventListener('click', () => {
        console.log(headline);
    })

    return cardDiv;
}