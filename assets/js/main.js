const pageHeading = document.querySelector("h1#page-heading");
const bannerImg = document.querySelector("#banner-img");
const image = document.querySelector("#image-gallery");
const changeUser = document.querySelector("#change-user");

function setUserName() {
    const myName = prompt("Please enter your name:");
    if(myName) {
        localStorage.setItem("username", myName);
        document.querySelector("#welcome-msg").textContent = `Welcome to the store, ${myName}`;
    } else {
        setUserName();
    }
}

// Change the heading
pageHeading.innerText = "My Purple Stationery";

// // Alert when click on body element except image element
// document.querySelector("body").addEventListener("click", function(){
//     image.addEventListener("click", (e) => {
//         e.stopPropagation();
//     });
    
//     changeUser.addEventListener("click", (e) => {
//         e.stopPropagation();
//     });

//     alert("Hi there");
// });

// // Alert when click on html element except body element
// document.querySelector("html").addEventListener("click", (e) => {
//     document.querySelector("body").addEventListener("click", (e) => {
//         e.stopPropagation();
//     });
//     alert("Not body element");
// });

// Change the image on clicking image element
image.addEventListener("click", () => {
    let src = image.getAttribute("src");
    let imagePath = "./assets/images/";

    if(src == imagePath + "2.jpg") {
        src = "3.jpg";
    } else {
        src = "2.jpg";
    }
    image.src = imagePath + src;
});

if (!localStorage.getItem("username")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("username");
    const newElement = document.createElement("h3");
    newElement.setAttribute("id", "welcome-msg");
    newElement.textContent = `Welcome to the store, ${storedName}`;
    bannerImg.parentNode.insertBefore(newElement, bannerImg);
}

changeUser.onclick = () => {
    setUserName();
};