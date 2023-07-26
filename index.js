const like1 = document.getElementById("like-btn-1");
const comment1 = document.getElementById("comment-btn-1");
const share1 = document.getElementById("share-btn-1");
const retweet1 = document.getElementById("retweet-btn-1");


const like2 = document.getElementById("like-btn-2");
const comment2 = document.getElementById("comment-btn-2");
const share2 = document.getElementById("share-btn-2");
const retweet2 = document.getElementById("retweet-btn-2");

const like3 = document.getElementById("like-btn-3");
const comment3 = document.getElementById("comment-btn-3");
const share3 = document.getElementById("share-btn-3");
const retweet3 = document.getElementById("retweet-btn-3");

const link = "https://github.com/Sahil-Rajwar-2004";

let likeCount1 = 0;
let retweetCount1 = 0;

let likeCount2 = 0;
let retweetCount2 = 0;

let likeCount3 = 0;
let retweetCount3 = 0;

like1.addEventListener("click",function(){
    likeCount1++;
    if(likeCount1%2==0){
        alert("You Dis-liked It! hypothetically");
    }else{
        alert("You Liked It! hypothetically");
    }
});

comment1.addEventListener("click",function(){
    let msg = prompt("your thoughts? ");
    if(msg === "" || msg === null || msg.trim() === ""){
        alert("please write something!");
    }else{
        alert("your comment has been posted hypothetically!");
    }
});

share1.addEventListener("click",function(){
    const tempInput = document.createElement("textarea")
    tempInput.value = link;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
    alert("link is indeed copied successfully")
});

retweet1.addEventListener("click",function(){
    retweetCount1++;
    if(retweetCount1%2!==0){
        alert("Retweeted! hypothetically");
    }else{
        alert("Undo Retweeted! hypothetically");
    }
});

like2.addEventListener("click",function(){
    likeCount2++;
    if(likeCount2%2==0){
        alert("You Dis-liked It! hypothetically");
    }else{  
        alert("You Liked It! hypothetically");
    }
});

comment2.addEventListener("click",function(){
    let msg = prompt("your thoughts? ");
    if(msg === "" || msg === null || msg.trim() === ""){
        alert("please write something!");
    }else{
        alert("your comment has been posted hypothetically!");
    }
});

share2.addEventListener("click",function(){
    const tempInput = document.createElement("textarea")
    tempInput.value = link;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
    alert("link is indeed copied successfully")
});

retweet2.addEventListener("click",function(){
    retweetCount2++;
    if(retweetCount2%2!==0){
        alert("Retweeted! hypothetically");
    }else{
        alert("Undo Retweeted! hypothetically");
    }
});

like3.addEventListener("click",function(){
    likeCount3++;
    if(likeCount3%2==0){
        alert("You Dis-liked It! hypothetically");
    }else{  
        alert("You Liked It! hypothetically");
    }
});

comment3.addEventListener("click",function(){
    let msg = prompt("your thoughts? ");
    if(msg === "" || msg === null || msg.trim() === ""){
        alert("please write something!");
    }else{
        alert("your comment has been posted hypothetically!");
    }
});

share3.addEventListener("click",function(){
    const tempInput = document.createElement("textarea")
    tempInput.value = link;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
    alert("link is indeed copied successfully");
});

retweet3.addEventListener("click",function(){
    retweetCount3++;
    if(retweetCount3%2!==0){
        alert("Retweeted! hypothetically");
    }else{
        alert("Undo Retweeted! hypothetically");
    }
});
