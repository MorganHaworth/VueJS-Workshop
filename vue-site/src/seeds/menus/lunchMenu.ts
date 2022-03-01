import MenuInterface from "@/interfaces/MenuInterface";

const lunchMenu: MenuInterface = {
    name: 'Lunch Menu',
    menuItems: [
        {
            price: 4.99,
            name: 'Burger',
            ingredients: 'Beef patty between two whole wheat buttered buns',
            id: 1
        },
        {
            price: 4.99,
            name: 'Falafel',
            ingredients: 'Dried chickpeas and parsley',
            id: 2
        },
        {
            price: 4.99,
            name: 'Tuna Onigiri',
            ingredients: 'Rice balls stuffed with spicy tuna mixture',
            id: 3
        },
        {
            price: 4.99,
            name: 'Quesadilla',
            ingredients: 'Cheese pan-cooked between a folded tortilla',
            id: 4
        },
    ]
}

export default lunchMenu;