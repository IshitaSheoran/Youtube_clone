const videoList = [
    {
        vidIcon : 'https://i.ytimg.com/vi/X2BYmmTI04I/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLARqYp8HlmsYfpVhAxRnNjvHffIkQ',
        vidTitle : "5 Seconds of Summer - She Looks So Perfect",
        vidCreator : "5SOS",
        vidTime : "3:09",
        vidViews : "313M views &#183 9 years ago",
        vidUrl : 'https://www.youtube.com/watch?v=X2BYmmTI04I'
    },

    {
        vidIcon : 'https://i.ytimg.com/vi/5vvBWO2K7KQ/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAbdoZiDDNhqx3NHWAwZfWjGoWOaA',
        vidTitle : "MAX & Ali Gatie - Butterflies",
        vidCreator : "Ali Gatie",
        vidViews : "2.6M views &#183 1 year ago",
        vidTime : "3:12",
        vidUrl : 'https://www.youtube.com/watch?v=5vvBWO2K7KQ'
    },

    {
        vidIcon : 'https://i.ytimg.com/vi/CXNv4_wQjKQ/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCzkEZr2JG1NNnpImWRHX5dYQWlXg',
        vidTitle : "Youngblood",
        vidCreator : "5SOS",
        vidViews : "60M views &#183 4 years ago",
        vidTime : "3:24",
        vidUrl : 'https://www.youtube.com/watch?v=CXNv4_wQjKQ'
    },

    {
        vidIcon : 'https://i.ytimg.com/vi/D5drYkLiLI8/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDzDVUwcS5EbReGh8RaR_Madg9AjA',
        vidTitle : "Kygo & Selena Gomez-It Ain't Me",
        vidCreator : "KygoMusic",
        vidViews : "611M views &#183 6 years ago",
        vidTime : "3:42",
        vidUrl : 'https://www.youtube.com/watch?v=D5drYkLiLI8'
    },

    {
        vidIcon : 'https://i.ytimg.com/vi/6tz1_znrbmc/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDZ33Y084eIdelmgdq1kZWX_sHuPQ',
        vidTitle : "Imagine Dragons - Not Today from ME BEFORE YOU",
        vidCreator : "Jhonaz",
        vidViews : "86M views &#183 6 years ago",
        vidTime : "4:19",
        vidUrl : 'https://www.youtube.com/watch?v=6tz1_znrbmc'
    }
]

let temp = ""

let sideVidList = document.getElementById("side-vid-list")
let iframeLinkChange = document.getElementById("iframeChange")
console.log(window.history)

iframeLinkChange.innerHTML = `
    <iframe width="866" height="433" src="${window.history.state.link}" title="${window.history.state.title}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <p class="main-vid-title">${window.history.state.title}</p>
                <div class="row"> <!--main vid k neeche wala-->                  
                    <div> <!--creator and name-->
                        <img class="main-vid-creator-dp" src="${window.history.state.photo}">
                    </div>
                    <div style="margin-right: 20px;">
                        <p class="main-vid-creator">
                            ${window.history.state.creator}
                        </p>
                        <p class="subscribers">
                            ${window.history.state.subscribers}
                        </p>
                    </div>
                    <!--buttuno ki line-->
                    <button class="subscribe">
                        Subscribe
                    </button>
                    <button class="like-dislike">
                        <img class="like-img" src="youtube logos/like.svg">
                        202K |
                        <img class="dislike-img" src="youtube logos/like.svg">
                    </button>
                    <button class="share">
                        <img class="share-img" src="youtube logos/share.svg">
                        Share
                    </button>
                    <button class="download">
                        Download
                    </button>
                    <button class="dots">
                        <img class="dots-img" src="youtube logos/dots.svg">
                    </button>
                </div> 
`

console.log(sideVidList)
console.log(window.history.state)

for (let i=0 ; i<videoList.length ; i++) {
    let el=videoList[i]
    temp += `
            <a href="${el.vidUrl}" style="text-decoration:none; color:black;">
                <div  class="row" style="margin-bottom: 15px;">
                    <div style="position: relative;">
                        <img class="list-img" src=${el.vidIcon}>
                        <div class="vid-time">${el.vidTime}</div>
                    </div>                    
                    <div class="vid-info"> <!--vid k side wala content-->
                        <div> <!--video info-->
                            <p class="vid-heading">
                                ${el.vidTitle}
                            </p>
                            <p class="vid-creator">
                                ${el.vidCreator}
                            </p>
                            <p class="views">
                                ${el.vidViews}
                            </p>
                        </div>                
                    </div>   
                </div>                
            </a>
            `
 }    

 sideVidList.innerHTML = temp
        
        