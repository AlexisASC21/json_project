// Print out our random user
function profiles(index){

    let profiles = document.querySelector("#profile");

let newDiv = document.createElement("div");
let text = document.createElement("p");
let newImg = document.createElement("img");

// Add content to our p tag, and add src to our image
text.innerHTML = "Name: " + randUser.results[index].name.first + " " + randUser.results[index].name.last + "<br>" + "Email: " + randUser.results[index].email;

newImg.src = randUser.results[index].picture.large;

// Add elements to page
newDiv.appendChild(newImg);
newDiv.appendChild(text);

profiles.appendChild(newDiv);

}

console.dir(randUser);

console.dir(randUser.results[0]);
console.dir(randUser.results[0].name.first);

let profile = document.querySelector("#profile");
for (let i = 0; i < 10; i ++) {

    profiles(i);
}

// Get references
