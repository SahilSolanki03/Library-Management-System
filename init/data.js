const sampleData = [
    {
      title: "Cozy Studio in the Heart of Paris",
      description: "This charming studio apartment is located in a historic building near the Louvre Museum. It has a comfortable sofa bed, a kitchenette, a bathroom, and a balcony with a view of the Eiffel Tower. It is perfect for couples or solo travelers who want to explore the city of lights.",
      image: "https://shorttermsage.com/wp-content/uploads/2022/01/pexels-vlada-karpovich-4050295-1-1024x682.jpg",
      price: 80,
      location: "Paris",
      country: "France"
    },
    {
      title: "Modern Loft in New York City",
      description: "This spacious loft apartment is located in a trendy neighborhood in Manhattan. It has a king-size bed, a sofa, a dining table, a fully equipped kitchen, a bathroom, and a rooftop terrace. It is ideal for business travelers or families who want to enjoy the urban lifestyle.",
      image: "https://independenttravelcats.com/wp-content/uploads/2017/02/5.jpg",
      price: 200,
      location: "New York City",
      country: "USA"
    },
    {
      title: "Traditional Villa in Bali",
      description: "This beautiful villa is located in a serene village in Bali. It has two bedrooms, two bathrooms, a living room, a kitchen, and a private pool. It is surrounded by lush greenery and rice fields. It is suitable for groups or families who want to experience the authentic Balinese culture.",
      image: "https://images.saymedia-content.com/.image/c_limit%2Ccs_srgb%2Cq_auto:eco%2Cw_700/MjAwMDA5OTM3ODMxNjAxMjYw/apps-like-airbnb.webp",
      price: 120,
      location: "Bali",
      country: "Indonesia"
    },
    {
      title: "Luxury Penthouse in Dubai",
      description: "This stunning penthouse apartment is located in a skyscraper in Dubai. It has three bedrooms, four bathrooms, a living room, a kitchen, and a balcony with a panoramic view of the city and the sea. It is equipped with high-end amenities and services. It is perfect for VIP guests who want to indulge in the ultimate luxury.",
      image: "https://www.nerdwallet.com/assets/blog/wp-content/uploads/2022/04/GettyImages-56181170-1920x1152.jpg",
      price: 500,
      location: "Dubai",
      country: "UAE"
    },
    {
      title: "Rustic Cabin in the Canadian Rockies",
      description: "This cozy cabin is located in a secluded area in the Canadian Rockies. It has a fireplace, a sofa, a kitchen, a bathroom, and a loft with a queen-size bed. It is surrounded by snow-capped mountains and pine trees. It is ideal for couples or adventurers who want to enjoy the nature and the wildlife.",
      image: "https://publish.purewow.net/wp-content/uploads/sites/2/2022/09/sites-like-airbnb_uni.jpg?fit=2050%2C1100",
      price: 100,
      location: "Banff",
      country: "Canada"
    },
    {
      title: "Beachfront Bungalow in Thailand",
      description: "This lovely bungalow is located on a sandy beach in Thailand. It has a king-size bed, a bathroom, a mini fridge, and a fan. It has a wooden deck with a hammock and a view of the sea. It is great for honeymooners or backpackers who want to relax and have fun in the sun.",
      image: "https://blog.rentaltrader.com/wp-content/uploads/2021/12/Outdoorsy.jpg",
      price: 40,
      location: "Koh Samui",
      country: "Thailand"
    },
    {
      title: "Elegant Apartment in Rome",
      description: "This stylish apartment is located in a historic building in Rome. It has a double bed, a sofa bed, a kitchen, a bathroom, and a balcony with a view of the Colosseum. It is decorated with antique furniture and artworks. It is convenient for travelers who want to visit the famous landmarks and museums.",
      image: "",
      price: 120,
      location: "Rome",
      country: "Italy"
    },
    {
      title: "Treehouse in Costa Rica",
      description: "This amazing treehouse is located in a rainforest in Costa Rica. It has a double bed, a bathroom, a kitchen, and a terrace with a view of the canopy and the river. It is connected to a zip line and a suspension bridge. It is adventurous for travelers who want to explore the wildlife and the nature.",
      image: "",
      price: 150,
      location: "Monteverde",
      country: "Costa Rica"
    },
    {
      title: "Castle in Scotland",
      description: "This magnificent castle is located in a countryside in Scotland. It has six bedrooms, six bathrooms, a living room, a dining room, a kitchen, and a library. It is furnished with medieval and modern elements. It has a garden and a lake. It is suitable for large groups or families who want to experience the royal and historic atmosphere.",
      image: "",
      price: 600,
      location: "Edinburgh",
      country: "Scotland"
    },
    {
      title: "Igloo in Finland",
      description: "This unique igloo is located in a snow village in Finland. It has a double bed, a bathroom, a heater, and a glass roof. It is illuminated with colorful lights. It has a view of the stars and the northern lights. It is cozy for couples or solo travelers who want to enjoy the winter wonderland.",
      image: "",
      price: 300,
      location: "Lapland",
      country: "Finland"
    },
    {
        title: "Chic Apartment in London",
        description: "This modern apartment is located in a vibrant area in London. It has a double bed, a sofa, a TV, a kitchen, a bathroom, and a balcony with a view of the city. It is close to many attractions, restaurants, and pubs. It is convenient for travelers who want to experience the cosmopolitan culture.",
        image: "",
        price: 150,
        location: "London",
        country: "UK"
      },
      {
        title: "Coastal Cottage in Ireland",
        description: "This charming cottage is located on a cliff overlooking the sea in Ireland. It has two bedrooms, one bathroom, a living room, a kitchen, and a fireplace. It is surrounded by scenic views and nature trails. It is cozy for travelers who want to enjoy the tranquility and the beauty of the Irish countryside.",
        image: "",
        price: 100,
        location: "Donegal",
        country: "Ireland"
      },
      {
        title: "Sunny Studio in Rio de Janeiro",
        description: "This bright studio apartment is located in a lively neighborhood in Rio de Janeiro. It has a queen-size bed, a sofa, a kitchenette, a bathroom, and a balcony with a view of the beach. It is close to many shops, cafes, and bars. It is great for travelers who want to have fun and explore the Brazilian culture.",
        image: "",
        price: 60,
        location: "Rio de Janeiro",
        country: "Brazil"
      },
      {
        title: "Zen Retreat in Japan",
        description: "This peaceful retreat is located in a forest in Japan. It has a tatami room, a futon, a bathroom, a kitchen, and a zen garden. It is decorated with minimalist and traditional elements. It is relaxing for travelers who want to meditate and reconnect with nature.",
        image: "",
        price: 80,
        location: "Kyoto",
        country: "Japan"
      },
      {
        title: "Bohemian Flat in Prague",
        description: "This artistic flat is located in a historic building in Prague. It has a king-size bed, a sofa, a piano, a kitchen, a bathroom, and a terrace with a view of the castle. It is furnished with eclectic and colorful items. It is inspiring for travelers who want to discover the artistic and cultural side of the city.",
        image: "",
        price: 90,
        location: "Prague",
        country: "Czech Republic"
      },
      {
        title: "Beach House in Australia",
        description: "This spacious beach house is located on a sandy shore in Australia. It has three bedrooms, two bathrooms, a living room, a kitchen, and a deck with a view of the ocean. It is equipped with a barbecue, a surfboard, and a kayak. It is perfect for travelers who want to enjoy the sun, the sand, and the water.",
        image: "",
        price: 180,
        location: "Gold Coast",
        country: "Australia"
      },
      {
        title: "Mountain Chalet in Switzerland",
        description: "This cozy chalet is located in a ski resort in Switzerland. It has two bedrooms, one bathroom, a living room, a kitchen, and a fireplace. It is made of wood and stone. It has a balcony with a view of the mountains and the snow. It is ideal for travelers who want to ski, snowboard, or hike.",
        image: "",
        price: 200,
        location: "Zermatt",
        country: "Switzerland"
      },
      {
        title: "Rooftop Apartment in Istanbul",
        description: "This stylish apartment is located in a central area in Istanbul. It has a double bed, a sofa, a TV, a kitchen, a bathroom, and a rooftop terrace with a view of the city and the Bosphorus. It is close to many historical and cultural sites, such as the Hagia Sophia and the Grand Bazaar. It is convenient for travelers who want to experience the Turkish hospitality and cuisine.",
        image: "",
        price: 70,
        location: "Istanbul",
        country: "Turkey"
      },
      {
        title: "Safari Lodge in Kenya",
        description: "This amazing lodge is located in a wildlife reserve in Kenya. It has a king-size bed, a bathroom, a mini fridge, and a fan. It has a wooden deck with a view of the savanna and the animals. It is connected to a restaurant and a pool. It is adventurous for travelers who want to see the wildlife and the nature.",
        image: "",
        price: 250,
        location: "Masai Mara",
        country: "Kenya"
      },
      {
        title: "Cave House in Greece",
        description: "This unique house is located in a cave in Greece. It has a double bed, a sofa, a kitchen, a bathroom, and a jacuzzi. It is decorated with white and blue colors. It has a terrace with a view of the sea and the sunset. It is romantic for couples or solo travelers who want to enjoy the Greek island life.",
        image: "",
        price: 150,
        location: "Santorini",
        country: "Greece"
      }
  ];

  module.exports = { data : sampleData };
  