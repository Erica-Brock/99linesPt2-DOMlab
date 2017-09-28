/*var friends=["Kiara", "Kirsten", "Tyffani", "Jeff", "Brandon"];
function sing(friend){
    console.log (friend +":")
    for(var i=99; i>1; i--){
        console.log( i + " lines of code in the file,", i + " lines of code; " , friend ," strikes one out clears it all out", i-1 +" lines of code in the file.");
    }
    console.log("1 line of code in the file, 1 line of code;", friend +" strikes one out, clears it all out, no more lines of code in the file." );
}
function callFriend(friends){
    for(var i=0; i<friends.length ; i++){
        sing(friends[i]);
    }
}

callFriend(friends);*/

document.addEventListener("DOMContentLoaded", function () {
    var friends = ["Tyffani", "Kiara", "Kirsten", "Jeff", "Brandon"];
    var buttonContainer = document.createElement('div');
    var btn = document.createElement('button');
    var sing = document.createTextNode("Sing!");
    btn.appendChild(sing);
    buttonContainer.appendChild(btn);
    document.body.appendChild(buttonContainer);
    buttonContainer.id = "button-container";
    btn.id = "sing-btn";
    var singBtn = document.getElementById("sing-btn")
    singBtn.addEventListener("click", function () {
        for (var i = 0; i < friends.length; i++) {
            var friendContainer=document.createElement('div');
            var friendName=document.createElement('h3');
            var name= document.createTextNode(friends[i]);
            friendName.appendChild(name);
            friendContainer.appendChild(friendName);
            document.body.appendChild(friendContainer);
           friendContainer.class="friends";
           friendName.id="name";
            for (var e = 99; e > 0; e--) {
                if (e > 2) {
                    console.log(e + " lines of code in the file", e + " lines of code", friends[i] + " takes one out, clears it all out,", e - 1 + " lines of code in the file.");
                }
                else if (e === 2) {
                    console.log(e + " lines of code in the file", e + " lines of code", friends[i] + " takes one out, clears it all out,", e - 1 + " line of code in the file.");
                }

                else if (e===1){
                    console.log("1 line of code in the file, 1 line of code;", friends[i] + " takes one out, clears it all out, no more lines of code in the file.");
                }


            }
        }
    })
})
/* This way will work as well and is much easier:


var friends=["Tyffani", "Kiara", "Kirsten", "Jeff", "Brandon"];
for (var i = 0; i < friends.length; i++) {
    console.log(friends[i] + ":");
    for (var e = 99; e>1; e--) {
                if (e = 1) {
            console.log("1 line of code in the file, 1 line of code;", i + " takes one out, clears it all out, no more lines of code in the file.");
        } 
        else if (e =2){
            console.log(e + " lines of code in the file", e + " lines of code", friends[i] + " takes one out, clears it all out,", e-1 + " line of code in the file.")
        }

        else{
            console.log(e + " lines of code in the file", e + " lines of code", friends[i] + " takes one out, clears it all out,", e-1 + " lines of code in the file.");
        } 


    } 
    */