// foods changing button dinamacilly

let foodsBtn = ["All", "DesiFood", "FastFood", "Italians", "Chiniese", "Softdrink"]

let btnDiv = document.querySelector('.allFoodsBtn')

// console.log(btnDiv);

let btnStore = []

foodsBtn.forEach((btn) => {
    let btnDinamically = `<button class="foodBtn" onclick="changedFoodItem('${btn}') ">${btn.toUpperCase()}</button>`
    btnStore.push(btnDinamically)
})

// console.log(btnStore);

btnDiv.innerHTML = btnStore.join(" ")

// Menu list 

let menuList = [
    {
        id: 1,
        itemName: "chicken Biryani",
        category: "desiFood",
        price: " 800 per Kg",
        image: "./pictures/chikBiryani.webp",
        discription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis fugit odio minus sequi! Consectetur ad earum delectus perferendis explicabo labore, quas iure dolores reiciendis..'
    },
    {
        id: 2,
        itemName: "Beef Biryani",
        category: "desiFood",
        price: "1500 per kg",
        image: "./pictures/beefBiryani.jpg",
        discription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis fugit odio minus sequi! Consectetur ad earum delectus perferendis explicabo labore, quas iure dolores reiciendis..'
    },
    {
        id: 3,
        itemName: "Beef Korma",
        category: "desiFood",
        price: "1000 full",
        image: "./pictures/korma.jpg",
        discription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis fugit odio minus sequi! Consectetur ad earum delectus perferendis explicabo labore, quas iure dolores reiciendis..'
    },
    {
        id: 4,
        itemName: "karahi",
        category: "desiFood",
        price: "2000 full",
        image: "./pictures/karahi.webp",
        discription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis fugit odio minus sequi! Consectetur ad earum delectus perferendis explicabo labore, quas iure dolores reiciendis..'
    },
    {
        id: 5,
        itemName: "Chiken Haandi",
        category: "desiFood",
        price: "2000 (full)",
        image: "./pictures/handi.jpg",
        discription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis fugit odio minus sequi! Consectetur ad earum delectus perferendis explicabo labore, quas iure dolores reiciendis..'
    },
    {
        id: 6,
        itemName: "Nihari",
        category: "desiFood",
        price: "300 per plate",
        image: "./pictures/nihari.jpg",
        discription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis fugit odio minus sequi! Consectetur ad earum delectus perferendis explicabo labore, quas iure dolores reiciendis..'
    },
    {
        id: 7,
        itemName: "Chana nalli",
        category: "desiFood",
        price: "150 plate",
        image: "./pictures/chana.jpg",
        discription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis fugit odio minus sequi! Consectetur ad earum delectus perferendis explicabo labore, quas iure dolores reiciendis..'
    },
    {
        id: 8,
        itemName: "Burgers",
        category: "FastFood",
        price: "300",
        image: "./pictures/burger.jpg",
        discription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis fugit odio minus sequi! Consectetur ad earum delectus perferendis explicabo labore, quas iure dolores reiciendis..'
    },
    {
        id: 9,
        itemName: "Broast",
        category: "FastFood",
        price: "800 full",
        image: "./pictures/broast.jpg",
        discription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis fugit odio minus sequi! Consectetur ad earum delectus perferendis explicabo labore, quas iure dolores reiciendis..'
    },
    {
        id: 10,
        itemName: "ROLLS",
        category: "fastFood",
        price: "200",
        image: "./pictures/rolls.jpg",
        discription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis fugit odio minus sequi! Consectetur ad earum delectus perferendis explicabo labore, quas iure dolores reiciendis..'
    },
    {
        id: 11,
        itemName: "Delight French fries",
        category: "fastFood",
        price: "200 per plate",
        image: "./pictures/fries.jpg",
        discription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis fugit odio minus sequi! Consectetur ad earum delectus perferendis explicabo labore, quas iure dolores reiciendis..'
    },
    {
        id: 12,
        itemName: "Dumplings",
        category: "chiniese",
        price: "400 per plate",
        image: "./pictures/Dumplings.jpg",
        discription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis fugit odio minus sequi! Consectetur ad earum delectus perferendis explicabo labore, quas iure dolores reiciendis..'
    },
    {
        id: 13,
        itemName: "Chicken Shashlike",
        category: "chiniese",
        price: "350 per plate",
        image: "./pictures/ChickenShashlike.jpg",
        discription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis fugit odio minus sequi! Consectetur ad earum delectus perferendis explicabo labore, quas iure dolores reiciendis..'
    },
    {
        id: 14,
        itemName: " kung Pao Chicken",
        category: "chiniese",
        price: "450 per spine",
        image: "./pictures/kungPaoChicken.jpg",
        discription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis fugit odio minus sequi! Consectetur ad earum delectus perferendis explicabo labore, quas iure dolores reiciendis..'
    },
    {
        id: 15,
        itemName: "Hot Pot",
        category: "chiniese",
        price: "230 per plate",
        image: "./pictures/HotPot.jpg",
        discription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis fugit odio minus sequi! Consectetur ad earum delectus perferendis explicabo labore, quas iure dolores reiciendis..'
    },
    {
        id: 16,
        itemName: "beijing Duck",
        category: "chiniese",
        price: "300 per duck",
        image: "./pictures/beijingDuck.jpg",
        discription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis fugit odio minus sequi! Consectetur ad earum delectus perferendis explicabo labore, quas iure dolores reiciendis..'
    },
    {
        id: 17,
        itemName: "Pizza",
        category: "Italians",
        price: "1000 Medium",
        image: "./pictures/pizza.jpg",
        discription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis fugit odio minus sequi! Consectetur ad earum delectus perferendis explicabo labore, quas iure dolores reiciendis..'
    },
    {
        id: 18,
        itemName: "Pastas",
        category: "Italians",
        price: "530 medium dish",
        image: "./pictures/pasta.jpg",
        discription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis fugit odio minus sequi! Consectetur ad earum delectus perferendis explicabo labore, quas iure dolores reiciendis..'
    },
    {
        id: 19,
        itemName: "Macronies",
        category: "Italians",
        price: "330 per dish",
        image: "./pictures/macroni.jpg",
        discription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis fugit odio minus sequi! Consectetur ad earum delectus perferendis explicabo labore, quas iure dolores reiciendis..'
    },
    {
        id: 20,
        itemName: "spagetties",
        category: "Italians",
        price: "440 per dish",
        image: "./pictures/spagetti.jpg",
        discription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis fugit odio minus sequi! Consectetur ad earum delectus perferendis explicabo labore, quas iure dolores reiciendis..'
    },
    {
        id: 21,
        itemName: "Cold Drinks",
        category: "softDrink",
        price: "80,120,200,280 ml",
        image: "./pictures/coldDrink.jpg",
        discription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis fugit odio minus sequi! Consectetur ad earum delectus perferendis explicabo labore, quas iure dolores reiciendis..'
    },
    {
        id: 22,
        itemName: "Limca,s",
        category: "softDrink",
        price: "160 Per  glass",
        image: "./pictures/limca.jpg",
        discription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis fugit odio minus sequi! Consectetur ad earum delectus perferendis explicabo labore, quas iure dolores reiciendis..'
    },
    {
        id: 23,
        itemName: "Pitcher",
        category: "softDrink",
        price: "400 per jug",
        image: "./pictures/Pitcher.jpg",
        discription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis fugit odio minus sequi! Consectetur ad earum delectus perferendis explicabo labore, quas iure dolores reiciendis..'
    },
    {
        id: 24,
        itemName: "shakes",
        category: "softDrink",
        price: "250 per glass",
        image: "./pictures/shakes.jpg",
        discription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis fugit odio minus sequi! Consectetur ad earum delectus perferendis explicabo labore, quas iure dolores reiciendis..'
    },
];


let mainArea = document.querySelector('.sectionMenu')

let itemsStorageArray = []

menuList.forEach((item) => {
    // console.log(item);
    let ItemFrame = ` <div class="main">
    <div class="singleItem d-flex ">
        <div class="textArea mx-4">
            <div class="imageDiv">
                <img class="img-fluid picture" src="${item.image}" alt="burger" >
            </div>

            <div class="upperText d-flex justify-content-between align-items-center">
                <h3>${item.itemName}</h3>
                <h4>Rs:${item.price}</h4>
            </div>
            <hr>
            <div class="lowerText">
                <p>${item.discription}</p>
            </div>
        </div>
    </div>
</div>`

    // console.log(ItemFrame);

    itemsStorageArray.push(ItemFrame)

})

mainArea.innerHTML = itemsStorageArray.join("")





const changedFoodItem = (find) => {
    // console.log(find);

    if (find === "All") {
        // console.log("yes");
        mainArea.innerHTML = itemsStorageArray.join("")
    }
    else {
        const findCategoury = menuList.filter((FoodItem) => FoodItem.category.toLowerCase() ===
            find.toLowerCase()).map((menu) => {
                return ` <div class="main">
            <div class="singleItem d-flex ">
                <div class="textArea mx-4">
                    <div class="imageDiv">
                        <img class="img-fluid picture" src="${menu.image}" alt="burger" >
                    </div>
        
                    <div class="upperText d-flex justify-content-between align-items-center">
                        <h3>${menu.itemName}</h3>
                        <h4>Rs:${menu.price}</h4>
                    </div>
                    <hr>
                    <div class="lowerText">
                        <p>${menu.discription}</p>
                    </div>
                </div>
            </div>
        </div>`
            })
        // console.log(findCategoury);
        mainArea.innerHTML = findCategoury.join("")
    }
}