import MenuInterface from "@/interfaces/MenuInterface";

const breakfastMenu: MenuInterface = {
    name: 'Breakfast Menu',
    menuItems: [
        {
            price: 4.99,
            name: 'Vegemite and Toast',
            ingredients: 'Vegemite spread on two slices of toast',
            id: 1
        },
        {
            price: 4.99,
            name: 'Jianbing',
            ingredients: 'Savory pancake with chili sauce',
            id: 2

        },
        {
            price: 4.99,
            name: 'Shakshuka',
            ingredients: 'Poached eggs in a tomato and, pepper, and garlic sauce',
            id: 3
        },
        {
            price: 4.99,
            name: 'Fruity Pebbles',
            ingredients: 'Fruity cereal in a bowl of milk',
            id: 4
        },
    ]
}

export default breakfastMenu;