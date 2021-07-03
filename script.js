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
const btnContainer = document.querySelector(".btn-container")

window.addEventListener("DOMContentLoaded", function () {
  diplayMenuItems(menu)
  displayMenuButtons()
});

function diplayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    return `<article class="menu-item">
          <img src=${item.img}  width="250px" height="150px" alt=${item.title} class="photo" />
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
  sectionCenter.innerHTML = displayMenu
}
function displayMenuButtons() {
  const categories = menu.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category)
      }
      return values
    },
    ["all"]
  );
  const categoryBtns = categories
    .map(function (category) {
      return `<button type="button" class="filter-btn" data-id=${category}>
          ${category}
        </button>`
    })
    .join("")

  btnContainer.innerHTML = categoryBtns
  const filterBtns = btnContainer.querySelectorAll(".filter-btn")
  console.log(filterBtns)

  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {

      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter(function (menuItem) {
        if (menuItem.category === category) {
          return menuItem;
        }
      })
      if (category === "all") {
        diplayMenuItems(menu)
      } else {
        diplayMenuItems(menuCategory)
      }
    })
  })
}