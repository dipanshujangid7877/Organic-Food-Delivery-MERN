const cards = [
    {
    name: "Tomato",
    description: "Fresh and juicy tomatoes.",
    image_url: "https://oldworldgardenfarms.com/wp-content/uploads/2023/01/best-water-tomato-plants.jpg.webp",
    price: "₹30",
    discount: "10% OFF",
    quantity: "1 kg"
    },
    {
    name: "Potato",
    description: "Starchy and versatile potatoes.",
    image_url: "https://www.bigbasket.com/media/uploads/p/m/40047637_4-fresho-potato-chandramukhi-organically-grown.jpg?tr=w-1920,q=80",
    price: "₹40",
    discount: "5% OFF",
    quantity: "1 kg"
    },
    {
    name: "Onion",
    description: "Flavorful onions for cooking.",
    image_url: "https://i.pinimg.com/564x/11/1a/8c/111a8c2b9024f9dac852575cd99a9137.jpg",
    price: "₹25",
    discount: "15% OFF",
    quantity: "1 kg"
    },
    {
    name: "Carrot",
    description: "Sweet and crunchy carrots.",
    image_url: "https://i.pinimg.com/564x/7c/7c/fd/7c7cfddba256ea7fad24f9c5ed7be61a.jpg",
    price: "₹35",
    discount: "8% OFF",
    quantity: "500 g"
    },
    {
    name: "Broccoli",
    description: "Fresh broccoli for healthy meals.",
    image_url: "https://i.pinimg.com/564x/1e/ea/bf/1eeabfc0b8e3f48378da66fa5a1ea590.jpg",
    price: "₹60",
    discount: "10% OFF",
    quantity: "500 g"
    },
    {
    name: "Spinach",
    description: "Nutrient-rich spinach leaves.",
    image_url: "https://i.pinimg.com/564x/85/ef/39/85ef3906ae7e6f85790f6a34303f3e83.jpg",
    price: "₹50",
    discount: "12% OFF",
    quantity: "300 g"
    },
    {
    name: "Capsicum",
    description: "Colorful capsicum for added flavor.",
    image_url: "https://i.pinimg.com/564x/ad/32/f0/ad32f003361e59f3d81c8f1bcc9c072a.jpg",
    price: "₹70",
    discount: "5% OFF",
    quantity: "250 g"
    },
    {
    name: "Cauliflower",
    description: "Versatile cauliflower for various dishes.",
    image_url: "https://i.pinimg.com/564x/db/1e/38/db1e388746cddbd95eb33be91bcc247f.jpg",
    price: "₹55",
    discount: "10% OFF",
    quantity: "1 kg"
    },
    {
    name: "Beans",
    description: "Fresh green beans for a crunchy bite.",
    image_url: "https://i.pinimg.com/564x/1a/9a/2f/1a9a2f0378e79f1c8421a62a6a0648d6.jpg",
    price: "₹45",
    discount: "15% OFF",
    quantity: "500 g"
    },
    {
    name: "Cucumber",
    description: "Cool and refreshing cucumbers.",
    image_url: "https://i.pinimg.com/736x/bf/e8/0a/bfe80a697b1386e8891775d2d425daa4.jpg",
    price: "₹30",
    discount: "10% OFF",
    quantity: "500 g"
    },
    {
    name: "Beetroot",
    description: "Sweet and earthy beetroot.",
    image_url: "https://i.pinimg.com/564x/81/b0/98/81b0984e5193ae2d4ac0c98dfba5b22e.jpg",
    price: "₹40",
    discount: "5% OFF",
    quantity: "500 g"
    },
    {
    name: "Pumpkin",
    description: "Nutritious pumpkin for soups and stews.",
    image_url: "https://i.pinimg.com/564x/03/91/c7/0391c76403e6b7d3641cc1a5cf3a5484.jpg",
    price: "₹50",
    discount: "8% OFF",
    quantity: "1 kg"
    },
    {
    name: "Sweet Corn",
    description: "Sweet and tender corn kernels.",
    image_url: "https://i.pinimg.com/564x/2c/34/2a/2c342a3a51c617e5090a7247afaadfdc.jpg",
    price: "₹60",
    discount: "12% OFF",
    quantity: "500 g"
    },
    {
    name: "Brinjal",
    description: "Tender and versatile brinjals.",
    image_url: "Brinjal",
    price: "₹45",
    discount: "10% OFF",
    quantity: "1 kg"
    },
    {
    name: "Radish",
    description: "Crunchy and spicy radishes.",
    image_url: "https://i.pinimg.com/564x/ca/bb/bc/cabbbc771c5f38f2183dc93e2edf2b97.jpg",
    price: "₹35",
    discount: "15% OFF",
    quantity: "500 g"
    },
    {
    name: "Mushroom",
    description: "Fresh mushrooms for savory dishes.",
    image_url: "https://i.pinimg.com/564x/cd/c5/85/cdc585d3b81d462b3baba9f4b302e618.jpg",
    price: "₹80",
    discount: "8% OFF",
    quantity: "250 g"
    },
    {
    name: "Zucchini",
    description: "Tender and mild zucchini.",
    image_url: "https://i.pinimg.com/564x/56/7c/d0/567cd0e7c7b793e064b0c2e3fee35832.jpg",
    price: "₹55",
    discount: "10% OFF",
    quantity: "500 g"
    },
    {
    name: "Celery",
    description: "Crisp and fresh celery stalks.",
    image_url: "https://i.pinimg.com/564x/eb/94/ba/eb94baa3619c4872437256b42817ddb0.jpg",
    price: "₹70",
    discount: "5% OFF",
    quantity: "300 g"
    },
    {
    name: "Artichoke",
    description: "Tender artichoke hearts.",
    image_url: "https://i.pinimg.com/564x/e7/fd/53/e7fd531c6ddc8f2e6a5868c8e89b7443.jpg",
    price: "₹100",
    discount: "10% OFF",
    quantity: "250 g"
    },
    {
    name: "Apple",
    description: "Fresh and crisp apples.",
    image_url: "https://i.pinimg.com/564x/58/66/eb/5866eb4142253f4914f55c183079dcc0.jpg",
    price: "₹150",
    discount: "10% OFF",
    quantity: "1 kg"
    },
    {
    name: "Orange",
    description: "Juicy and tangy oranges.",
    image_url: "https://i.pinimg.com/564x/75/88/81/758881e0468a3f5e84795c5ea15c4d21.jpg",
    price: "₹120",
    discount: "10% OFF",
    quantity: "1 kg"
    },
    {
    name: "Mango",
    description: "Ripe and juicy mangoes.",
    image_url: "https://i.pinimg.com/564x/af/f6/4d/aff64d1cf552af1c18b2cbddc1e683c7.jpg",
    price: "₹200",
    discount: "15% OFF",
    quantity: "1 kg"
    },
    {
    name: "Pineapple",
    description: "Sweet and tropical pineapples.",
    image_url: "https://i.pinimg.com/564x/9d/68/ec/9d68ec1ee897f358aff8c180dd7a3e68.jpg",
    price: "₹90",
    discount: "12% OFF",
    quantity: "1 piece"
    },
    {
    name: "Strawberry",
    description: "Fresh and juicy strawberries.",
    image_url: "https://i.pinimg.com/474x/77/37/cc/7737cc5acaef557fea76441c3a484890.jpg",
    price: "₹250",
    discount: "10% OFF",
    quantity: "500 g"
    },
    {
    name: "Grapes",
    description: "Sweet and seedless grapes.",
    image_url: "https://i.pinimg.com/474x/54/11/ff/5411ffd87b40a56ed93679387ba39305.jpg",
    price: "₹180",
    discount: "5% OFF",
    quantity: "500 g"
    },
    {
    name: "Kiwi",
    description: "Tangy and juicy kiwis.",
    image_url: "https://i.pinimg.com/474x/c2/65/44/c265446aa67af36c78de356052597503.jpg",
    price: "₹200",
    discount: "10% OFF",
    quantity: "6 pieces"
    },
    {
    name: "Pomegranate",
    description: "Sweet and juicy pomegranates.",
    image_url: "https://i.pinimg.com/474x/86/55/e1/8655e12ad091d9cccbbd46534a7b0f84.jpg",
    price: "₹300",
    discount: "12% OFF",
    quantity: "1 piece"
    },
    {
    name: "Blueberry",
    description: "Fresh and tangy blueberries.",
    image_url: "https://i.pinimg.com/474x/b5/ac/eb/b5aceb5ed08466ed1a3898aeef8aa634.jpg",
    price: "₹350",
    discount: "15% OFF",
    quantity: "250 g"
    },
    {
    name: "Peach",
    description: "Sweet and juicy peaches.",
    image_url: "https://i.pinimg.com/474x/d1/90/d9/d190d9e41a810f3c3319ee8ce1a5385d.jpg",
    discount: "10% OFF",
    quantity: "500 g"
    },
    {
    name: "Cherry",
    description: "Sweet and delicious cherries.",
    image_url: "https://i.pinimg.com/474x/cc/f2/a6/ccf2a62d89c0bc33880e119c9f576a17.jpg",
    price: "₹400",
    discount: "8% OFF",
    quantity: "250 g"
    },
    {
    name: "Apricot",
    description: "Sweet and tender apricots.",
    image_url: "https://i.pinimg.com/474x/cf/7f/ba/cf7fbaee674f2448ffcd358dc0ccf803.jpg",
    price: "₹200",
    discount: "10% OFF",
    quantity: "500 g"
    },
    {
    name: "Papaya",
    description: "Sweet and ripe papayas.",
    image_url: "https://i.pinimg.com/474x/72/5c/96/725c9619b8cec09b792fbf1fa6f063e1.jpg",
    price: "₹150",
    discount: "5% OFF",
    quantity: "1 piece"
    },
    {
    name: "Watermelon",
    description: "Refreshing and juicy watermelon.",
    image_url: "https://i.pinimg.com/474x/f5/52/25/f5522551c5a750869e2453979df67264.jpg",
    price: "₹70",
    discount: "12% OFF",
    quantity: "1 piece"
    },
    {
    name: "Guava",
    description: "Sweet and aromatic guavas.",
    image_url: "https://i.pinimg.com/474x/b2/39/56/b23956e27130b60e0d4330a96784ea5b.jpg",
    price: "₹80",
    discount: "10% OFF",
    quantity: "1 kg"
    },
    {
    name: "Dragon Fruit",
    description: "Exotic and colorful dragon fruit.",
    image_url: "https://i.pinimg.com/474x/77/f3/cb/77f3cb72e17e26514c534a289019b90d.jpg",
    price: "₹350",
    discount: "10% OFF",
    quantity: "1 piece"
    },
    {
    name: "Cantaloupe",
    description: "Sweet and juicy cantaloupe.",
    image_url: "https://i.pinimg.com/474x/cb/07/28/cb0728473d3700bead015aff28f41626.jpg",
    price: "₹90",
    discount: "5% OFF",
    quantity: "1 piece"
    },
    {
    name: "Lychee",
    description: "Sweet and aromatic lychees.",
    image_url: "https://i.pinimg.com/474x/2c/c6/84/2cc6849c093b0a59f9b371827e44a943.jpg",
    price: "₹250",
    discount: "10% OFF",
    quantity: "500 g"
        },
    {
    name: "Coconut Water",
    description: "Refreshing coconut water.",
    image_url: "https://i.pinimg.com/474x/a0/d1/e5/a0d1e5b61f0d39bff1d81ec809522c5b.jpg",
    price: "₹360",
    discount: "10% OFF",
    quantity: "200 ml (Pack of 6)"
    },
    {
    name: "Pineapple Refreshers",
    description: "Tropical pineapple refresher.",
    image_url: "https://i.pinimg.com/474x/48/00/49/4800496af1ce6f5c06d9f16e6a3add5b.jpg",
    price: "₹240",
    discount: "10% OFF",
    quantity: "200 ml (Pack of 6)"
    },
    {
    name: "Pink Guava Chilli",
    description: "Unique pink guava with a hint of chili.",
    image_url: "https://i.pinimg.com/474x/81/6a/68/816a68679ea7b765141950ac9f62d6e2.jpg",
    price: "₹40",
    discount: "10% OFF",
    quantity: "200 ml (Pack of 1)"
    },
    {
    name: "Sugarcane Refreshers",
    description: "Sweet and refreshing sugarcane juice.",
    image_url: "https://i.pinimg.com/474x/87/44/89/874489b5c092aa8f890596da2259b3bc.jpg",
    price: "₹240",
    discount: "10% OFF",
    quantity: "200 ml (Pack of 6)"
    },
    {
    name: "Aam Mango",
    description: "Rich mango refresher.",
    image_url: "https://i.pinimg.com/474x/77/9a/1b/779a1be49ad8767b57a566e0ddb3cea2.jpg",
    price: "₹40",
    discount: "20% OFF",
    quantity: "200 ml (Pack of 1)"
    },
    {
    name: "Classic Lemon",
    description: "Tangy classic lemon juice.",
    image_url: "https://i.pinimg.com/474x/0d/4a/cd/0d4acd567a4d2b56c39bf336c9207a61.jpg",
    price: "₹900",
    discount: "10% OFF",
    quantity: "750 ml (Pack of 6)"
    },
    {
    name: "Aam Panna",
    description: "Traditional aam panna drink.",
    image_url: "https://i.pinimg.com/474x/4c/32/e5/4c32e5d851abf2d0fa2276e0bed3ed09.jpg",
    price: "₹900",
    discount: "10% OFF",
    quantity: "750 ml (Pack of 6)"
    },
    {
    name: "Pineapple Refreshers",
    description: "Refreshing pineapple refresher.",
    image_url: "https://i.pinimg.com/474x/87/4c/7b/874c7bba096f2bae3cdde5be5fbf9ae6.jpg",
    price: "₹900",
    discount: "10% OFF",
    quantity: "750 ml (Pack of 6)"
    },
    {
    name: "Pink Guava Chilli",
    description: "Tangy pink guava with chili.",
    image_url: "https://i0.wp.com/zheelicious.com/wp-content/uploads/2020/06/9dad4c_537a879cc0674085bad75a73495e8407mv2-2.jpg?fit=1480%2C2220&ssl=1",
    price: "₹150",
    discount: "10% OFF",
    quantity: "750 ml (Pack of 1)"
    },
    {
    name: "Sugarcane Refreshers",
    description: "Sweet sugarcane refresher.",
    image_url: "https://juicernet.com//wp-content/uploads/2022/09/XuAPRb1lfE8rgquN1x2nRjuKGKb9av9J1663676401.jpg",
    price: "₹900",
    discount: "10% OFF",
    quantity: "750 ml (Pack of 6)"
    },
    {
    name: "RAW Hydration Combo",
    description: "Combo pack of hydration juices.",
    image_url: "https://wingreensworld.com/cdn/shop/files/Rakhi_BestsellerBuyoutCombo.jpg?v=1692278078",
    price: "₹1,080",
    discount: "10% OFF",
    quantity: "Various"
    },
    {
    name: "Valencia Orange Juice",
    description: "Refreshing Valencia orange juice.",
    image_url: "https://www.twistedalchemy.com/cdn/shop/products/Orange-upright_1445x.jpg?v=1664320549",
    price: "₹720",
    discount: "10% OFF",
    quantity: "250 ml (Pack of 6)"
    },
    {
    name: "Pomegranate Juice",
    description: "Rich and healthy pomegranate juice.",
    image_url: "https://blog-images-1.pharmeasy.in/blog/production/wp-content/uploads/2022/07/24231655/29.jpg",
    price: "₹900",
    discount: "10% OFF",
    quantity: "250 ml (Pack of 6)"
    },
    {
    name: "Masala Lemon",
    description: "Spiced masala lemon juice for a unique flavor.",
    image_url: "https://www.archanaskitchen.com/images/archanaskitchen/1-Author/Janani_/Masala_Lemonade.jpg",
    price: "₹900",
    discount: "10% OFF",
    quantity: "750 ml (Pack of 6)"
    },
    {
    name: "Grapefruit Juice",
    description: "Zesty grapefruit juice for a refreshing taste.",
    image_url: "https://www.alphafoodie.com/wp-content/uploads/2022/12/Grapefruit-Juice-square.jpeg",
    price: "₹200",
    discount: "10% OFF",
    quantity: "250 ml (Pack of 1)"
        }
    ];
    


module.exports = { data: cards};