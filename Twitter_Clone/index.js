import { tweetsData } from './data.js'
const tweetInput = document.getElementById('tweet-input')
const tweetBtn = document.getElementById('tweet-btn')

tweetBtn.addEventListener('click', function () {
    console.log(tweetInput.value)
})

document.addEventListener('click', function(e){
    if (e.target.dataset.like){
        handleLikeClick(e.target.dataset.like)
    }
})


function handleLikeClick(tweetId){
    console.log(tweetBtn)
}


function getFeedHtml() {
    let feedHtml = ``
    /*
    Challenge:
    1. Inside each span that has a class of "tweet-detail",
       add an <i> tag.
    2. Give each <i> tag the classes it needs to render the
       correct icons next to the numbers.
       The classes you will need are:
        fa-regular, 
        fa-solid, 
        fa-comment-dots, 
        fa-heart, 
        fa-retweet
    */

    tweetsData.forEach(function (tweet) {
        feedHtml += `
<div class="tweet">
    <div class="tweet-inner">
        <img src="${tweet.profilePic}" class="profile-pic">
        <div>
            <p class="handle">${tweet.handle}</p>
            <p class="tweet-text">${tweet.tweetText}</p>
            <div class="tweet-details">
                <span class="tweet-detail">
                    <i class="fa-regular fa-comment-dots" data-reply = "${tweet.uuid}"></i>
                    ${tweet.replies.length}
                </span>
                <span class="tweet-detail">
                    <i class="fa-solid fa-heart" data-like = "${tweet.uuid}"></i>
                    ${tweet.likes}
                </span>
                <span class="tweet-detail">
                    <i class="fa-solid fa-retweet" data-retweet = "${tweet.uuid}></i>
                    ${tweet.retweets}
                </span>
            </div>   
        </div>            
    </div>
</div>
`
    })
    return feedHtml
}

function render() {
    document.getElementById('feed').innerHTML = getFeedHtml()
}

render()

