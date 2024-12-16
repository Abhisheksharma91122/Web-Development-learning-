console.log("Abhishek Sharma");

function card(title, views, month, cname, thumbnail,time) {
    let v;
    if (views < 1000) {
        v = views;
    } else if (views < 1000000) {
        v = views / 1000 + "k";
    } else {
        v = views / 1000000 + "M";
    }
    let html = `<div class="card">
            <div class="image">
                <img src="${thumbnail}"
                    alt="imgae">
                <span class="capsule">${time}</span>
            </div>
            <div class="contain">
                <h1>${title}</h1>
                <p>${cname} . ${v} views.${month}months ago</p>
            </div>
        </div>`;
    
        document.querySelector(".container").innerHTML = html;
}

card("This is my video",1000000,7,"AbhishekSharma","https://i.ytimg.com/vi/mCx5aSEK8YE/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLB4h3uLYCuzx1GRi4VEg_QRgdPr0w","45:00");