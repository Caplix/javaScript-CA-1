

export const url = "https://secure.runescape.com/m=itemdb_oldschool/api/catalogue/items.json?category=1&alpha=b&page=4"

export const corsEnableUrl = "https://noroffcors.onrender.com/" + url;

const body = document.querySelector("body")
document.title = "Main page"

let selectedItem = "ss"
const api = document.querySelector(".results")


fetch(corsEnableUrl)
.then(res => {
    return res.json()
})
.then((data) => { 
  console.log(data, "data")
   data.items.forEach((element) => {
    const {name, current, members, icon_large, id} = element;

api.innerHTML += `
<a class="api-card" href="./../details.html" id="${id}">
<div class="api-card-details">
<h1> ${name} </h1>
<h4> ${current.price} gp </h4>
<img src ="${icon_large}"></img>
<h4> member only item: ${members}</h4>
</div>
</a>
`
   });
});

api.addEventListener('click', (event) => {
  console.dir(event.target.id);
  localStorage.setItem("selectedItem", event.target.id)
});