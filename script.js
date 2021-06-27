const menu = [
 {  id: 1,
    title:"curry",
    category: "lunch",
    img: "./image/Curry.jpg",
    desc:`my favourite`,
    price: "20"
},
{  id: 2,
  title:"chips",
  category: "lunch",
  img: "./image/chips.jpg",
  desc:`my favourite`,
  price: "3"
},
{  id: 3,
  title:"burge",
  category: "lunch",
  img: "./image/burger.jpg",
  desc:`my favourite`,
  price: "10"
},
{  id: 4,
  title:"mixed noodle",
  category: "lunch",
  img: "./image/Noodle.jpg",
  desc:`my favourite`,
  price: "15"
}
]
const sectionCenter = document.querySelector(".section-center")

window.addEventListener("DOMContentLoaded", function () {
  let displayMenu = menu.map(function (item) {

    return `<article class="menu-item">
          <img src=${item.img} alt=${item.title} width="250px" height="150px" class="photo" />
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
              <h4 class="price">$${item.price}</h4>
            </header>
            <p class="item-text">
              ${item.desc}
            </p>
          </div>
        </article>`
  });
  displayMenu = displayMenu.join("")
  console.log(displayMenu)

  sectionCenter.innerHTML = displayMenu
});