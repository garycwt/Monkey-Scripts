// ==UserScript==
// @name     First Test Script
// @version  1
// @include *
// @exclude https://hk.yahoo.com/*
// @grant    none
// ==/UserScript==

var targetPage = "http://www.aegpromotion.com/mayday2018";
var titleKeywords = ["Problem loading", "Internal server error"];
var urlKeywords = ["ServerBusy"];
// var delay_int = 5000;


function checkContainsKeywords(keywords, checkTarget){
  for (i = 0; i < keywords.length; i++) {
    if(checkTarget.includes(keywords[i]))
      return true;
  }
  return false;
}

function scheduleRun(my_func){
  delay_int = Math.floor((Math.random() * 5000) + 3000);
  window.setTimeout(my_func, delay_int);
}

function redirectToUrl(){
  console.log("### Start redirection ###");
  window.location.assign(targetPage);
}

console.log("*** Test Script Starts ***");

console.log("URL=" + window.location);
console.log("URL Test=" + checkContainsKeywords(urlKeywords, window.location.href));
if(checkContainsKeywords(urlKeywords, window.location.href)){
  scheduleRun(redirectToUrl);
}


console.log("Title=" + document.title);
console.log("Title Test=" + checkContainsKeywords(titleKeywords, document.title));
if(checkContainsKeywords(titleKeywords, document.title)){
  scheduleRun(redirectToUrl);
}

console.log("*** Test Script Ended ***");