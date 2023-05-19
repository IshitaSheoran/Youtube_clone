const main_page_list = [
    {
        main_vid_thumbnail : "thumbnails/thumbnail-1.webp",
        main_vid_time : "14:20",
        main_vid_creatorDP : "thumbnails/channel-1.jpeg" ,
        main_vid_title : "Talking Tech and AI with Google CEO Sundar Pichai!",
        main_vid_creator : "Marques Browniee",
        main_vid_views : "3.4M views &#183 6 months ago",
        main_vid_src : "https://www.youtube.com/embed/n2RNcPRtAiY",
        main_vid_subscribers : "16.7M Subscribers"
    },

    {
        main_vid_thumbnail : "thumbnails/thumbnail-2.webp",
        main_vid_time : "8:22",
        main_vid_creatorDP : "thumbnails/channel-2.jpeg" ,
        main_vid_title : "Try Not To Laugh Challenge #9",
        main_vid_creator : "Markiplier",
        main_vid_views : "19M views &#183 4 years ago",
        main_vid_src : "https://www.youtube.com/embed/mP0RAo9SKZk",
        main_vid_subscribers : "34.6M Subscribers"
    },

    {
        main_vid_thumbnail : "thumbnails/thumbnail-3.webp",
        main_vid_time : "9:13",
        main_vid_creatorDP : "thumbnails/channel-3.jpeg" ,
        main_vid_title : "Crazy Tik Toks Taken Moments Before DISASTER",
        main_vid_creator : "SSSniperWolf",
        main_vid_views : "12M views &#183 1 year ago",
        main_vid_src : "https://www.youtube.com/embed/FgjPQQeTh1w",
        main_vid_subscribers : "33.4M Subscribers"
    },

    {
        main_vid_thumbnail : "thumbnails/thumbnail-4.webp",
        main_vid_time : "22:09",
        main_vid_creatorDP : "thumbnails/channel-4.jpeg" ,
        main_vid_title : "The Simplest Math Problem No One Can Solve - Collatz Conjecture",
        main_vid_creator : "Veritasium",
        main_vid_views : "18M views &#183 4 months ago",
        main_vid_src : "https://www.youtube.com/embed/094y1Z2wpJg",
        main_vid_subscribers : "13.5M Subscribers"
    },

    {
        main_vid_thumbnail : "thumbnails/thumbnail-5.webp",
        main_vid_time : "11:17",
        main_vid_creatorDP : "thumbnails/channel-5.jpeg" ,
        main_vid_title : "Kadanes Algorithm to Maximum Sum Subarray Problem",
        main_vid_creator : "CS Dojo",
        main_vid_views : "512K views &#183 5 years ago",
        main_vid_src : "https://www.youtube.com/embed/86CQq3pKSUw",
        main_vid_subscribers : "1.9M Subscribers"
    },

    {
        main_vid_thumbnail : "thumbnails/thumbnail-6.webp",
        main_vid_time : "19:59",
        main_vid_creatorDP : "thumbnails/channel-6.jpeg" ,
        main_vid_title : "Anything You Can Fit In The Circle Ill Pay For",
        main_vid_creator : "MrBeast",
        main_vid_views : "141M views &#183 1 year ago",
        main_vid_src : "https://www.youtube.com/embed/yXWw0_UfSFg",
        main_vid_subscribers : "138M Subscribers"
    },

    {
        main_vid_thumbnail : "thumbnails/thumbnail-7.webp",
        main_vid_time : "10:13",
        main_vid_creatorDP : "thumbnails/channel-7.jpeg" ,
        main_vid_title : "Why Planes Dont Fly Over Tibet",
        main_vid_creator : "RealLifeLore",
        main_vid_views : "66M views &#183 1 year ago",
        main_vid_src : "https://www.youtube.com/embed/fNVa1qMbF9Y",
        main_vid_subscribers : "6.7M Subscribers"
    },

    {
        main_vid_thumbnail : "thumbnails/thumbnail-8.webp",
        main_vid_time : "7:12",
        main_vid_creatorDP : "thumbnails/channel-8.jpeg" ,
        main_vid_title : "Inside The Worlds Biggest Passenger Plane",
        main_vid_creator : "TechVision",
        main_vid_views : "3.7M views &#183 10 months ago",
        main_vid_src : "https://www.youtube.com/embed/lFm4EM1juls",
        main_vid_subscribers : "807M Subscribers"
    },

    {
        main_vid_thumbnail : "thumbnails/thumbnail-9.webp",
        main_vid_time : "13:17",
        main_vid_creatorDP : "thumbnails/channel-9.jpeg" ,
        main_vid_title : "The Secret to Super Human Strength",
        main_vid_creator : "ThenX",
        main_vid_views : "20M views &#183 3 years ago",
        main_vid_src : "https://www.youtube.com/embed/ixmxOlcrlUc",
        main_vid_subscribers : "7.59M Subscribers"
    },

    {
        main_vid_thumbnail : "thumbnails/thumbnail-10.webp",
        main_vid_time : "7:53",
        main_vid_creatorDP : "thumbnails/channel-10.jpeg" ,
        main_vid_title : "How The Worlds Largest Cruise Ship MAkes 30,000 Meals Everyday",
        main_vid_creator : "Business Insider",
        main_vid_views : "14M views &#183 1 year ago",
        main_vid_src : "https://www.youtube.com/embed/R2vXbFp5C9o",
        main_vid_subscribers : "7.6M Subscribers"
    },

    {
        main_vid_thumbnail : "thumbnails/thumbnail-11.webp",
        main_vid_time : "4:10",
        main_vid_creatorDP : "thumbnails/channel-11.jpeg" ,
        main_vid_title : "Dubais Crazy Underwater Train ans Other Things #Only in Dubai",
        main_vid_creator : "Destination Tips",
        main_vid_views : "3M views &#183 1 year ago",
        main_vid_src : "https://www.youtube.com/embed/0nZuYyXET3s",
        main_vid_subscribers : "281K Subscribers"
    },

    {
        main_vid_thumbnail : "thumbnails/thumbnail-12.webp",
        main_vid_time : "4:51",
        main_vid_creatorDP : "thumbnails/channel-12.jpeg" ,
        main_vid_title : "What Would Happen If You Didnt Drink Water? - Mia Nacamulli",
        main_vid_creator : "TED-Ed",
        main_vid_views : "12M views &#183 5 year ago",
        main_vid_src : "https://www.youtube.com/embed/9iMGFqMmUFs",
        main_vid_subscribers : "18.4M Subscribers"
    }
]

let mainPageList = document.getElementById("main_page")

let list = ""

let count = 0

function iframelink(link, title, creator, photo, subscribers) {
    history.pushState({link, title, creator, photo, subscribers},"","next_page.html");
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({event : "next_page", video : title});
    window.location.reload() 
}
//console.log(main_page_list)
for (let i = 0 ; i < main_page_list.length ; i++) {
    let el = main_page_list[i]
    console.log(el)
    list += `
            <div> <!--Vid-->       
            <div class="thumbnail-row"> <!--Thumbnail-->
                
                    <img onclick="iframelink('${el.main_vid_src}', '${el.main_vid_title}', '${el.main_vid_creator}', '${el.main_vid_creatorDP}', '${el.main_vid_subscribers}');" class="thumbnail" src=${el.main_vid_thumbnail}>
                                      
                <div class="video-time">${el.main_vid_time}</div>
            </div>
            <div class="video-info-grid"> <!--Thumbnail k neeche wala content-->
                <div> <!--creator ki dp-->
                    <img class="video-creator-dp" src=${el.main_vid_creatorDP}>
                </div>
                <div style="vertical-align: middle;"> <!--video info-->
                    <p class="video-heading">
                        ${el.main_vid_title}
                    </p>
                    <p class="video-creator">
                        ${el.main_vid_creator}
                    </p>
                    <p class="views">
                        ${el.main_vid_views}
                    </p>
                </div>                
            </div>
        </div>
        `
}

mainPageList.innerHTML = list
