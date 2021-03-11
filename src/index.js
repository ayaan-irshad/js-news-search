console.log("hello world!");


let body= document.getElementsByTagName("body")[0];

let button = document.getElementById("button");

button.addEventListener("click", () => {
    body.classList.toggle("dark_mode")
})


let field = document.getElementById("field");
let submit = document.getElementById("submit");
let newsCards = document.getElementById("news");


let API_KEY = "18f77dd1df1244549051e71056898f9c";
let search = "";

let art =[] ;


submit.addEventListener("click", (e)=>{
    e.preventDefault();
    search = field.value;
    getArticles(search);
})

// field.addEventListener("change", (event)=>{
//     event.preventDefault();
//     search = field.value;
// })

 async function  getArticles(sea){
    let articles = await fetch(`https://newsapi.org/v2/everything?q=${sea}&from=2021-03-10&sortBy=popularity&apiKey=${API_KEY}`)
    .then( result => result.json())
    .then(data => {console.log(data.articles); art =data.articles; listArticles(data.articles)})
}

function listArticles(a){
    
   let news = a.map((el)=> {

      return   `<div>
                    <h1>${el.title}</h1> 
                    <img src=${el.urlToImage} />
                    
                    <h3>${el.source.name}</h3>
                    <p>${el.content}<p/> 
                </div>`    
    }).join(" ");

    console.log(a,news);
    newsCards.innerHTML = news;

}

