var testValue = 1111;

var websites = ["https://www.google.com/*"];


chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.sync.set( { "test" : websites }, function(){
        //Callback function to confirm storage.
        console.log("Value is set to " + websites);
    } )
} );