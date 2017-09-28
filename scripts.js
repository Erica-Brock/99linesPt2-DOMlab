
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
           friendContainer.className="friends";
           friendName.id="name";
            for (var e = 99; e > 0; e--) {
                if (e > 2) {                
                    var para=document.createElement('p');
                    var song=document.createTextNode(e + " lines of code in the file "+ e+ " lines of code "+ friends[i] + " takes one out, clears it all out, "+ (e - 1) + " lines of code in the file.");
                    para.appendChild(song);
                    friendContainer.appendChild(para);                    
                }
                else if (e ===2) {
                    var para=document.createElement('p');
                    var song=document.createTextNode(e + " lines of code in the file "+ e+ " lines of code "+ friends[i] + " takes one out, clears it all out, "+ (e - 1) + " line of code in the file. ");
                    para.appendChild(song);
                    friendContainer.appendChild(para); 
                }

                else if (e===1){
                    var para=document.createElement('p');
                    var song=document.createTextNode(" 1 line of code in the file, 1 line of code; "+ friends[i] + " takes one out, clears it all out, no more lines of code in the file.");
                    para.appendChild(song);
                    friendContainer.appendChild(para);                   
                }


            }
        }
    })
})