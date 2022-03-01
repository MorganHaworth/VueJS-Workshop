import MenuInterface from "@/interfaces/MenuInterface";

const dinnerMenu: MenuInterface = {
    name: 'Dinner Menu',
    menuItems: [
        {
            price: 7.99,
            name: 'Green Curry',
            ingredients: 'Spiced sauce with vegetables served with steamed rice',
            id: 1
        },
        {
            price: 7.99,
            name: 'Fried Chicken',
            ingredients: 'Battered Chicken breast and thigh deep fried',
            id: 2
        },
        {
            price: 7.99,
            name: 'Spaghetti',
            ingredients: 'Red sauce over spagetti served with freshly-greated parmesan',
            id: 3
        },
        {
            price: 7.99,
            name: '20 cent Ramen',
            ingredients: 'Boiling water poured over 20 cent ramen',
            id: 4
        },
    ]
}

export default dinnerMenu;