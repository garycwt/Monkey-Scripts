// ==UserScript==
// @name        Test
// @namespace   aegpromo
// @include     https://*.aegpromotion.com/*
// @require     https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js
// @version     1
// @grant       none
// ==/UserScript==

console.log("***Start Gary Chan custom script***");
//alert('東亞銀行信用卡優先訂票');
//alert($("p font:contains('東亞銀行信用卡優先訂票')"));

//addAutoButtonHandler('https://process2.aegpromotion.com/cheer2017/tc/main.asp');
addAutoRedirectHandler('東亞銀行信用卡優先訂票', 'http://hk.yahoo.com');

function addAutoRedirectHandler(keyword,dest){
    
    var selectorForText = 'p *:contains("'+keyword+'")';
    //console.log(selectorForText);
    console.log("Found text: " + $(selectorForText).length);
    if($(selectorForText).length > 0){
        setTimeout(function(){ window.location.href = dest; }, 3000);
        //window.location.href = dest;
    }
}

function addAutoButtonHandler(keyword){
    var selectorForButton = 'a[href$="'+keyword+'"]';
    console.log("Found links: " + $(selectorForButton).length);
    setTimeout(function(){ $(selectorForButton)[0].click(); }, 1000);
    //$(selectorForButton)[0].click();
}

console.log("***End Gary Chan custom script***");