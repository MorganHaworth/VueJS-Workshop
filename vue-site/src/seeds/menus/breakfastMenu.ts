import MenuInterface from "@/interfaces/MenuInterface";

const breakfastMenu: MenuInterface = {
    name: 'Breakfast Menu',
    menuItems: [
        {
            price: 4.99,
            name: 'Vegemite and Toast',
            ingredients: 'Vegemite spread on two slices of toast',
            photo: 'https://thumbor.thedailymeal.com/WBmw1GIsBtR03nTMpxhRj_EArwA=//https://www.thedailymeal.com/sites/default/files/story/2016/vegemitetoast%20crop.jpg',
            id: 'vegemite-toast'
        },
        {
            price: 4.99,
            name: 'Jianbing',
            ingredients: 'Savory pancake with chili sauce',
            photo: 'https://static01.nyt.com/images/2017/03/22/dining/22HUNGRY-slide-N0YB/22HUNGRY-slide-N0YB-articleLarge.jpg?quality=75&auto=webp&disable=upscale',
            id: 'jianbing'

        },
        {
            price: 4.99,
            name: 'Shakshuka',
            ingredients: 'Poached eggs in a tomato and, pepper, and garlic sauce',
            photo: 'https://downshiftology.com/wp-content/uploads/2018/12/Shakshuka-19-500x500.jpg',
            id: 'shakshuka'
        },
        {
            price: 4.99,
            name: 'Fruity Pebbles',
            ingredients: 'Fruity cereal in a bowl of milk',
            photo: 'https://cdn11.bigcommerce.com/s-0544a/images/stencil/1080x1080/products/1125/2474/fruity_pebbles__61514.1645022423.jpg?c=2',
            id: 'fruity-pebbles'
        },
    ]
}

export default breakfastMenu;