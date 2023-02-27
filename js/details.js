const itemId = localStorage.getItem("selectedItem") || "11832"

const url = "https://secure.runescape.com/m=itemdb_oldschool/api/catalogue/detail.json?item=" + itemId

const corsEnableUrl = "https://noroffcors.onrender.com/" + url;


const body = document.querySelector("body");

body.classList.add("body-detail")
document.title = "Detail page"

fetch(corsEnableUrl)
.then(res => {
    return res.json()
})
.then((data) => { 
  console.log(data)
    const {name, current, members, icon_large, description} = data.item;
     const api = document.querySelector(".results")
api.innerHTML += `
<div class="api-card-detail">
<h1> ${name} </h1>
<img src ="${icon_large}"></img>
<h4> ${current.price} gp </h4>
<h4> member only item: ${members}</h4>
<h4> Description: ${description}</h4>
</div>
`
});