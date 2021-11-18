// Web Storage API

// Not part of the Dom - refers to the window API
// Available to JS via the global variable: window

// We do not have to type window. It is implied:


const myObject = {
    name:"Sash",
    logName: function(){
        console.log(this.name);
    }
};

const myArray = ["eat", "sleep", "code"];

sessionStorage.setItem("mySessionStore", myArray);
const mySessionData = sessionStorage.getItem("mySessionStore");
console.log(mySessionData);
console.log(typeof mySessionData);
