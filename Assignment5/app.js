
async function fetchNews(){

    const loader = document.getElementById("loader");
    try{
        const topic = document.getElementById("news-topic").value;
        const response = await fetch(`https://newsapi.org/v2/everything?q=${topic}&apiKey=9bf5dc52f6454e23aa40690e258cae5d`);
        const newsData = await response.json();
        console.log(newsData);

        const container = document.getElementById("container-card");
        container.innerHTML="";
        loader.style.display = "block";
 
        newsData.articles.forEach(article =>{



                const col = document.createElement("div");
                col.classList.add("col-lg-4","col-md-6","col-12","mb-4");

                const card = document.createElement("div");
                card.classList.add("card");

                const news_image = document.createElement("img");
                news_image.classList.add("card-img-top","img-fluid","mb-2");
                news_image.src = article.urlToImage;

                const cardBody = document.createElement("div");
                cardBody.classList.add("card-body");

                const news_title = document.createElement("h3");
                news_title.classList.add("card-title");
                news_title.innerText = article.title;

                const news_description = document.createElement("p");
                news_title.classList.add("card-text");
                news_description.innerText = article.description;

                const news_author = document.createElement("h4");
                news_author.innerText = article.author;

                const news_publishedAt = document.createElement("h6");
                news_publishedAt.innerText = article.publishedAt;
                
                const news_source = document.createElement("h6");
                news_source.innerText = article.source.name;

                cardBody.appendChild(news_title);
                cardBody.appendChild(news_description);
                cardBody.appendChild(news_author);
                cardBody.appendChild(news_publishedAt);
                cardBody.appendChild(news_source);

                card.appendChild(news_image);
                card.appendChild(cardBody);

                col.appendChild(card);
                container.appendChild(col);


        })
    }catch(error){
        console.log(error);
    }finally{
        loader.style.display ="none";
    }
                
}