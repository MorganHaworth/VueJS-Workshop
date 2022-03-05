import MenuInterface from "@/interfaces/MenuInterface";

const lunchMenu: MenuInterface = {
    name: 'Lunch Menu',
    menuItems: [
        {
            price: 4.99,
            name: 'Burger',
            ingredients: 'Beef patty between two whole wheat buttered buns',
            photo: 'https://caddyshackomaha.com/wp-content/uploads/2017/06/10-Of-The-Best-Burger-Joints-in-Omaha.jpg',
            id: 'burger'
        },
        {
            price: 4.99,
            name: 'Falafel',
            ingredients: 'Dried chickpeas and parsley',
            photo: 'https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2019/07/Falafel-7.jpg',
            id: 'falafel'
        },
        {
            price: 4.99,
            name: 'Tuna Onigiri',
            ingredients: 'Rice balls stuffed with spicy tuna mixture',
            photo: 'https://fusedbyfionauyema.com/wp-content/uploads/2021/02/Fused-by-Fiona-Uyema-how-to-make-onigiri-with-tuna-mayo-500x375.jpg',
            id: 'tuna-onigiri'
        },
        {
            price: 4.99,
            name: 'Quesadilla',
            ingredients: 'Cheese pan-cooked between a folded tortilla',
            photo: 'https://www.simplyrecipes.com/thmb/G1vWbfqZTStutrwio9alnmyTk18=/2000x1333/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2019__03__Mushroom-Quesadilla-LEAD-1-122477758cee4ba29b4e7b1053ca8ff6.jpg',
            id: 'quesadilla'
        },
    ]
}

export default lunchMenu;