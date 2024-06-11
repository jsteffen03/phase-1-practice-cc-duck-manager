// write your code here!
fetch("http://localhost:3000/ducks")
.then(r => r.json())
.then(ducks=> {
    
    const likes = document.querySelector("#duck-display-likes")

    likes.addEventListener("click",()=>{
        
        likes.textContent = parseInt(likes.textContent)+1 + " Likes"
    })

    const duckForm = document.querySelector("#new-duck-form")

    duckForm.addEventListener("submit",(e)=>{
        e.preventDefault()

        console.log(e.target["duck-name-input"].value)
        console.log(e.target["duck-image-input"].value)

        const newDuck = {
            name: e.target["duck-name-input"].value,
            img_url: e.target["duck-image-input"].value,
            likes: 0
        }
        displayDucks(newDuck)
    })


    ducks.forEach((duck)=> {
        displayDucks(duck)
    })
}
)

function displayDucks(duck){
        const duckImg = document.createElement("img")
        duckImg.src = duck.img_url
        const navBar = document.querySelector("#duck-nav")
        navBar.append(duckImg)

        duckImg.addEventListener("click",() => {
                displayMainDuck(duck)
        })

}
function displayMainDuck(duck){

        const name = document.querySelector("#duck-display-name")
        const image = document.querySelector("#duck-display-image")
        const likes = document.querySelector("#duck-display-likes")

        name.textContent = duck.name
        image.src = duck.img_url
        likes.textContent = duck.likes + " Likes"

}


