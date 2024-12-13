console.log("Hello world");

function card(title,views,monthold,cname,thumbnail,duration){
    let strviews;
    if(views < 1000){
        strviews =  views;
    } else if(views<1000000){
        strviews =  views/1000 + "k";
    } else {
        strviews =  views/1000000 + "M";
    }

    let html = `<div class="card">
            <div class="image">
                <img src="${thumbnail}"
                    alt="video image">
                <span class="capsule">${duration}</span>
            </div>
            <div class="contain">
                <h1>${title}</h1>
                <p>${cname} . ${strviews} views . ${monthold} months ago</p>
            </div>
        </div>`;

    // document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html;
    document.querySelector(".container").innerHTML = html;
}

card("Abhishek Sharma" , 340000 , 4 , "Abhishek" , "https://i.ytimg.com/vi/mCx5aSEK8YE/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLB4h3uLYCuzx1GRi4VEg_QRgdPr0w" , "34:00");