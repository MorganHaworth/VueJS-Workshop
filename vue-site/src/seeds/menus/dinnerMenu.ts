import MenuInterface from "@/interfaces/MenuInterface";

const dinnerMenu: MenuInterface = {
    name: 'Dinner Menu',
    menuItems: [
        {
            price: 7.99,
            name: 'Green Curry',
            ingredients: 'Spiced sauce with vegetables served with steamed rice',
            photo: 'https://www.thespruceeats.com/thmb/m7lyKJKk2x7ezOnDM_oHncbP1xg=/1776x1332/smart/filters:no_upscale()/thai-green-curry-recipe-p3-3217442-hero-1-a3fcdfbc551849718c7750fa63ec8c6a.jpg',
            id: 'green-curry'
        },
        {
            price: 7.99,
            name: 'Fried Chicken',
            ingredients: 'Battered Chicken breast and thigh deep fried',
            photo: 'https://insanelygoodrecipes.com/wp-content/uploads/2020/04/Fried_Chicken-1024x536.png',
            id: 'fried-chicken'
        },
        {
            price: 7.99,
            name: 'Spaghetti',
            ingredients: 'Red sauce over spagetti served with freshly-greated parmesan',
            photo: 'https://hips.hearstapps.com/hmg-prod/images/homemade-spaghetti-sauce-horizontal-1530890913.jpg',
            id: 'spaghetti'
        },
        {
            price: 0.19,
            name: '18.5¢ Ramen',
            ingredients: 'Boiling water poured over 18.5¢ ramen',
            photo: 'https://www.kroger.com/product/images/medium/front/0007066201003',
            id: 'ramen'
        },
    ]
}

export default dinnerMenu;