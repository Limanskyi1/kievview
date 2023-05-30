const langArr = {
    "unit": {
        "en": "Comfortable rest in the center of Kyiv",
        "ua": "Комфортний відпочинок у центрі Києва",
    },
    "railway": {
        "en": "<span>South Railway Station </span></br> 4 minutes - 600 m",
        "ua": "<span>Південний вокзал </span></br> 4 хв - 600 м",
    },
    "wifi": {
        "en": "Free Wi-fi",
        "ua": "Безкоштовний Wi-Fi",
    },
    "parking": {
        "en": "Parking is 140 meters from the hotel",
        "ua": "Паркінг знаходиться за 140 м від готелю",
    },
    "transfer": {
        "en": "Transfer from/to the airport",
        "ua": "Трансфер з/до аеропорту",
    },
    "security": {
        "en": "Round-the-clock security",
        "ua": "Цілодобова охорона",
    },
    "video": {
        "en": "Video review of the hotel and apartments",
        "ua": "Відео-огляд готелю та апартаментів",
    },
    "video__presentation": {
        "en": "Presentation of all rooms",
        "ua": "Презентація всіх номерів",
    },
    "video__time": {
        "en": "Viewing time: 60 seconds",
        "ua": "Час перегляду: 60 секунд",
    },
    "video__click": {
        "en": "Click to view",
        "ua": "Натисніть,щоб подивитися",
    },
    "standart__double": {
        "en": "«Double standard»",
        "ua": "«Двомісний стандарт»",
    },
    "standart__double__laptop": {
        "en": "«Double standard»",
        "ua": "«Двомісний стандарт»",
    },
    "double": {
        "en": "«Double»",
        "ua": "«Двомісний»",
    },
    "double__laptop": {
        "en": "«Double»",
        "ua": "«Двомісний»",
    },
    "double__improve": {
        "en": "«Superior Double»",
        "ua": "«Покращений двомісний»",
    },
    "double__improve__laptop": {
        "en": "«Superior Double»",
        "ua": "«Покращений двомісний»",
    },
    "threeset": {
        "en": "«Three-seater deluxe»",
        "ua": "«Тримісний делюкс»",
    },
    "threeset__laptop": {
        "en": "«Three-seater deluxe»",
        "ua": "«Тримісний делюкс»",
    },
    "four__set": {
        "en": "«Deluxe four-seater»",
        "ua": "«Чотиримісний делюкс»",
    },
    "four__set__laptop": {
        "en": "«Deluxe four-seater»",
        "ua": "«Чотиримісний делюкс»",
    },
    "": {
        "en": "«Deluxe four-seater»",
        "ua": "«Чотиримісний делюкс»",
    },
    "impr__kitchen": {
        "en": "«Superior Apartment with kitchen»",
        "ua": "«Покращені Апартаменти з кухнею»",
    },
    "impr__kitchen__laptop": {
        "en": "«Superior Apartment with kitchen»",
        "ua": "«Покращені Апартаменти з кухнею»",
    },
    "studio": {
        "en": "«Studio apartment»",
        "ua": "«Апартаменти-студіо»",
    },
    "studio__laptop": {
        "en": "«Studio apartment»",
        "ua": "«Апартаменти-студіо»",
    },

    "king": {
        "en": "«Studio with king-size bed and sofa bed»",
        "ua": "«Номер-студіо з ліжком розміру «king-size» та диван-ліжком»",
    },

    "king__laptop": {
        "en": "«Studio with king-size bed and sofa bed»",
        "ua": "«Номер-студіо з ліжком розміру «king-size» та диван-ліжком»",
    },

    "studio__kitchen": {
        "en": "«Studio apartment with kitchen»",
        "ua": "«Апартаменти студіо з кухнею»",
    },

    "studio__kitchen__laptop": {
        "en": "«Studio apartment with kitchen»",
        "ua": "«Апартаменти студіо з кухнею»",
    },
    "deluxe": {
        "en": "«Deluxe apartment with kitchen»",
        "ua": "«Апартаменти делюкс з кухнею»",
    },

    "deluxe__laptop": {
        "en": "«Deluxe apartment with kitchen»",
        "ua": "«Апартаменти делюкс з кухнею»",
    },
    "panthouse": {
        "en": "«Penthouse apartment with kitchen»",
        "ua": "«Апартаменти в пентхаусі з кухнею»",
    },

    "panthouse__laptop": {
        "en": "«Penthouse apartment with kitchen»",
        "ua": "«Апартаменти в пентхаусі з кухнею»",
    },
    "size15": {
        "en": "15 sq.m.",
        "ua": "15 кв. м ",
    },
    "size35": {
        "en": "35 sq.m.",
        "ua": "35 кв. м ",
    },
    "size20": {
        "en": "20 sq.m.",
        "ua": "20 кв. м ",
    },
    "size25": {
        "en": "25 sq.m.",
        "ua": "25 кв. м ",
    },
    "size18": {
        "en": "18 sq.m.",
        "ua": "18 кв. м ",
    },
    "size27": {
        "en": "27 sq.m.",
        "ua": "27 кв. м ",
    },
    "size40": {
        "en": "40 sq.m.",
        "ua": "40 кв. м ",
    },
    "monument": {
        "en": "Landmark view",
        "ua": "Вид на пам'ятку",
    },
    "view__city": {
        "en": "A view of the city",
        "ua": "Вид на місто",
    },
    "condition": {
        "en": "Air Conditioning",
        "ua": "Кондиціонер",
    },
    "bathroom": {
        "en": "Bathroom in the room",
        "ua": "Ванна кімната в номері",
    },
    "tv": {
        "en": "Flat screen TV",
        "ua": "Телевізор з плоским екраном",
    },
    "mini__bar": {
        "en": "Mini-bar",
        "ua": "Міні-бар",
    },
    "price": {
        "en": "from <span>25$</span> /night",
        "ua": "від <span>25$</span> /ніч",
    },
    "kitchen": {
        "en": "Own kitchen",
        "ua": "Власна кухня",
    },
    "kitchen__mini": {
        "en": "Your own kitchenette",
        "ua": "Власна міні-кухня",
    },
    "price__27": {
        "en": "from <span>27$</span> /night",
        "ua": "від <span>27$</span> /ніч",
    },
    "price__35": {
        "en": "from <span>35$</span> /night",
        "ua": "від <span>35$</span> /ніч",
    },
    "price__40": {
        "en": "from <span>40$</span> /night",
        "ua": "від <span>40$</span> /ніч",
    },
    "price__30": {
        "en": "from <span>30$</span> /night",
        "ua": "від <span>30$</span> /ніч",
    },
    "price__33": {
        "en": "from <span>33$</span> /night",
        "ua": "від <span>33$</span> /ніч",
    },
    "price__37": {
        "en": "from <span>37$</span> /night",
        "ua": "від <span>37$</span> /ніч",
    },
    "sound__insulation": {
        "en": "Sound insulation",
        "ua": "Звукоізоляція",
    },
    "rewiew__title": {
        "en": "We always read your feedback",
        "ua": "Ми завжди читаємо ваші відгуки",
    },
    "feedback": {
        "en": "1033 reviews",
        "ua": "1033 відгуки ",
    },
    "contacts__title": {
        "en": "Contacts",
        "ua": "Контакти",
    },
    "adress": {
        "en": "Address:",
        "ua": "Адреса:",
    },
    "adress__link": {
        "en": "16G Vasyl Lypkivsky Street, Kyiv, 02000",
        "ua": "вулиця Василя Липківського, 16Г, Київ, 02000",
    },
    "phone": {
        "en": "Administration phone number:",
        "ua": "Телефон адміністрації:",
    },
    "graphic": {
        "en": "Schedule",
        "ua": "Графік",
    },
    "graphic__time": {
        "en": "Check-in: from 14:00 <br>Departure: </br> 03:00-12:00",
        "ua": "Заїзд:  з 14:00 <br>Виїзд:  03:00–12:00",
    },
    "south": {
        "en": "<span> South Station</span></br> 4 min - 600 m",
        "ua": "<span> Південний вокзал</span> 4 хв - 600 м",
    },
    "railway": {
        "en": "<span></span>m. Vokzalna<br> 7 min - 950 m.",
        "ua": "<span>м. Вокзальна</span> <br> 7 хв - 950 м",
    },
    "metro": {
        "en": "<span>м. Vokzalna</span> 7 min - 950 m",
        "ua": "<span>м. Вокзальна</span>  7 хв - 950 м",
    },
    "email": {
        "en": "<span> Mail:</span",
        "ua": "<span>  Пошта:</span>",
    },
    "documents": {
        "en": "Legal documents",
        "ua": "Юридичні документи",
    },
    "mainpage": {
        "en": "Main page",
        "ua": "Головна",
    },
    "rooms": {
        "en": "Rooms",
        "ua": "Номери",
    },
    "appartments": {
        "en": "Apartments",
        "ua": "Апартаменти",
    },
    "rewiews": {
        "en": "Reviews",
        "ua": "Відгуки",
    },
    "contacts": {
        "en": "Contacts",
        "ua": "Контакти",
    },
    "back__main": {
        "en": "Back to the main page",
        "ua": "Назад на головну",
    },
    "rooms__look": {
        "en": "Extended room overview",
        "ua": "Розширений огляд номерів",
    },
    "size15__text": {
        "en": "<span>Room size:</span> 15 m²",
        "ua": "<span>Розмір номера:</span> 15 м²",
    },
    "doublebed": {
        "en": "1 double bed",
        "ua": "1 двоспальне ліжко",
    },
    "amenities": {
        "en": "Amenities",
        "ua": "Зручності",
    },
    "video__look": {
        "en": "Video review",
        "ua": "Відео-огляд",
    },
    "singlebed2": {
        "en": "2 single beds",
        "ua": "2 односпальні ліжка",
    },
    "or": {
        "en": "or",
        "ua": "або",
    },
    "large_doublebed": {
        "en": "1 wide double bed",
        "ua": "1 широке двоспальне ліжко",
    },
    "sofa": {
        "en": "1 sofa bed",
        "ua": "1 диван-ліжко",
    },
    "and": {
        "en": "and",
        "ua": "і",
    },
    "up": {
        "en": "Up top",
        "ua": "Наверх",
    },
    "size15__text": {
        "en": "<span>Room size:</span> 15 m²",
        "ua": "<span>Розмір номера:</span> 15 м²",
    },
    "size20__text": {
        "en": "<span>Room size:</span> 20 m²",
        "ua": "<span>Розмір номера:</span> 20 м²",
    },
    "size18__text": {
        "en": "<span>Room size:</span> 18 m²",
        "ua": "<span>Розмір номера:</span> 18 м²",
    },
    "size25__text": {
        "en": "<span>Room size:</span> 25 m²",
        "ua": "<span>Розмір номера:</span> 25 м²",
    },
    "size27__text": {
        "en": "<span>Room size:</span> 27 m²",
        "ua": "<span>Розмір номера:</span> 27 м²",
    },
    "size35__text": {
        "en": "<span>Room size:</span> 35 m²",
        "ua": "<span>Розмір номера:</span> 35 м²",
    },
    "size40__text": {
        "en": "<span>Room size:</span> 40 m²",
        "ua": "<span>Розмір номера:</span> 40 м²",
    },
    "apartments__look": {
        "en": "Extended overview of the apartments",
        "ua": "Розширений огляд апартаментів",
    },
    "bedroom": {
        "en": "Bedroom:",
        "ua": "Спальня:",
    },
    "living__room": {
        "en": "Living room:",
        "ua": "Вітальня:",
    },
    "book": {
        "en": "Reserve",
        "ua": "Забронювати",
    },
    "description": {
        "en": "Details",
        "ua": "Детальніше",
    },
    "map": {
        "en": "Open the map",
        "ua": "Відкрити мапу",
    },



    //


    "hotel_facilities": {
        "en": "Facilities at the Kyiv View Railway Station Hotel",
        "ua": "Зручності у готелі Kyiv View Railway Station",
    },
    "bathroom": {
        "en": "Bathroom",
        "ua": "Ванна кімната",
    },
    "toilet_paper": {
        "en": "Toilet paper",
        "ua": "Туалетний папір",
    },
    "towels": {
        "en": "Towels",
        "ua": "Рушники",
    },
    "bath_or_shower": {
        "en": "Bath or shower",
        "ua": "Ванна або душ",
    },
    "slippers": {
        "en": "Slippers",
        "ua": "Капці",
    },
    "private_bathroom": {
        "en": "Private bathroom",
        "ua": "Власна ванна кімната",
    },
    "toilet": {
        "en": "Toilet",
        "ua": "Туалет",
    },
    "toiletries": {
        "en": "Toiletries",
        "ua": "Туалетно-косметичні засоби",
    },
    "hair_dryer": {
        "en": "Hair dryer",
        "ua": "Фен",
    },
    "shower": {
        "en": "Shower",
        "ua": "Душ",
    },



    "free_wifi": {
        "en": "Free Wi-Fi",
        "ua": "Безкоштовний Wi-Fi",
    },
    "parking": {
        "en": "Parking",
        "ua": "Автостоянка",
    },
    "airport_transfer": {
        "en": "Airport transfer",
        "ua": "Трансфер з/до аеропорту",
    },
    "family_rooms": {
        "en": "Family rooms",
        "ua": "Сімейні номери",
    },
    "non_smoking_rooms": {
        "en": "Non-smoking rooms",
        "ua": "Номери для некурців",
    },
    "24_hour_front_desk": {
        "en": "24-hour front desk",
        "ua": "Цілодобова стійка реєстрації гостей",
    },
    "room_service": {
        "en": "Room service",
        "ua": "Обслуговування номерів",
    },
    "bar": {
        "en": "Bar",
        "ua": "Бар",
    },
    "heating": {
        "en": "Heating",
        "ua": "Опалення",
    },
    "coffee_tea_maker": {
        "en": "Coffee/tea maker in all rooms",
        "ua": "Чайо-/кавоварка у всіх номерах",
    },


    "bedroom": {
        "en": "Bedroom",
        "ua": "Спальня",
    },
    "linen": {
        "en": "Linen",
        "ua": "Білизна",
    },
    "wardrobe": {
        "en": "Wardrobe",
        "ua": "Шафа або гардероб",
    },
    "alarm_clock": {
        "en": "Alarm clock",
        "ua": "Будильник",
    },
    "clothes_rack": {
        "en": "Clothes rack",
        "ua": "Гардеробна",
    },

    "view": {
        "en": "View",
        "ua": "Вид",
    },


    "kitchen": {
        "en": "Kitchen",
        "ua": "Кухня",
    },
    "dining_table": {
        "en": "Dining table",
        "ua": "Обідній стіл",
    },
    "cleaning_supplies": {
        "en": "Cleaning supplies",
        "ua": "Засоби для чищення",
    },
    "electric_kettle": {
        "en": "Electric kettle",
        "ua": "Електрочайник",
    },
    "fridge": {
        "en": "Fridge",
        "ua": "Холодильник",
    },
    "room__amenities": {
        "en": "Room amenities",
        "ua": "Зручності в номері",
    },
    "outlet__near__bed": {
        "en": "Outlet near bed",
        "ua": "Розетка поблизу з ліжком",
    },
    "clothes__hanger": {
        "en": "Clothes hanger",
        "ua": "Вішалка для одягу",
    },
    "sports__and__recreation": {
        "en": "Sports and recreation",
        "ua": "Спорт і відпочинок",
    },
    "children__playground": {
        "en": "Children's playground",
        "ua": "Дитячий майданчик",
    },
    "living__room": {
        "en": "Living room",
        "ua": "Вітальня",
    },
    "work__desk": {
        "en": "Work desk",
        "ua": "Робочий стіл",
    },


    "media_technology": {
        "en": "Media and Technology",
        "ua": "Медіа та технології",
    },
    "television": {
        "en": "TV",
        "ua": "Телевізор",
    },
    "pay_per_view_channels": {
        "en": "Pay-per-view channels",
        "ua": "Канали з платою за перегляд",
    },



    "food_and_drinks": {
        "en": "Food and drinks",
        "ua": "Їжа і напої",
    },

    "cafe": {
        "en": "Café (on site)",
        "ua": "Кав'ярня (на території)",
    },

    "fruit": {
        "en": "Fruit (additional charge)",
        "ua": "Фрукти (Оплачується окремо)",
    },

    "wine": {
        "en": "Wine/Champagne (additional charge)",
        "ua": "Вино/шампанське (Оплачується окремо)",
    },

    "snack_bar": {
        "en": "Snack bar",
        "ua": "Снек-бар",
    },

    "room_service_breakfast": {
        "en": "Room service breakfast",
        "ua": "Сніданок у номері",
    },

    "kettle_coffee_maker": {
        "en": "Kettle/Coffee maker",
        "ua": "Чайник/кавоварка",
    },


    "Internet": {
        "en": "Internet",
        "ua": "Інтернет",
    },
    "wifi__text": {
        "en": "Wireless internet access is available throughout the hotel free of charge",
        "ua": "Бездротовий доступ до Інтернету надається на всій території готелю безкоштовно.",
    },
    "parking__text": {
        "en": "Public parking is available near the hotel (no pre-booking space required) and costs UAH 200 per day.",
        "ua": "Громадська автостоянка доступна поблизу готелю (попереднє резервування місця не потрібне) і коштує UAH 200 за день.",
    },
    "garage": {
        "en": "Parking in the garage",
        "ua": "Паркування в гаражі",
    },




    "reception": {
        "en": "Reception Desk",
        "ua": "Стійка реєстрації",
    },
    "bill": {
        "en": "Bill is provided",
        "ua": "Надається рахунок",
    },
    "individual_registration": {
        "en": "Individual Check-In/Check-Out",
        "ua": "Індивідуальна реєстрація заїзду/виїзду",
    },
    "concierge": {
        "en": "Concierge Services",
        "ua": "Послуги консьєржа",
    },
    "atm": {
        "en": "ATM on Site",
        "ua": "Банкомат на території готелю",
    },
    "luggage_storage": {
        "en": "Luggage Storage",
        "ua": "Камера зберігання багажу",
    },
    "tour_desk": {
        "en": "Tour Desk",
        "ua": "Туристичне бюро",
    },
    "currency_exchange": {
        "en": "Currency Exchange",
        "ua": "Пунтк обміну валют",
    },
    "express_checkin_checkout": {
        "en": "Express Check-In/Check-Out",
        "ua": "Експрес-реєстрація заїзду/виїзду",
    },
    "24hr_reception": {
        "en": "24-Hour Reception Desk",
        "ua": "Цілодобова стійка реєстрації гостей",
    },


    "entertainment__family": {
        "en": "Entertainment and family services:",
        "ua": "Розваги та сімейні послуги:",
    },
    "outdoor_games_equipment": {
        "en": "Outdoor games equipment",
        "ua": "Обладнання для ігор на вулиці",
    },
    "board_games_puzzles": {
        "en": "Board games / puzzles",
        "ua": "Настільні ігри / пазли",
    },
    "children_books_music_movies": {
        "en": "Children's books, music, or movies",
        "ua": "Дитячі книги, музика чи фільми",
    },
    "daily_housekeeping": {
        "en": "Daily housekeeping",
        "ua": "Щоденне прибирання",
    },
    "ironing_service": {
        "en": "Ironing service (additional charge)",
        "ua": "Прасування одягу (оплачується окремо)",
    },
    "dry_cleaning": {
        "en": "Dry cleaning (additional charge)",
        "ua": "Хімчистка (оплачується окремо)",
    },
    "laundry": {
        "en": "Laundry (additional charge)",
        "ua": "Пральня (оплачується окремо)",
    },
    "clean": {
        "en": "Cleaning services",
        "ua": "Послуги прибирання",
    },


    "bussines__centr": {
        "en": "Business center services",
        "ua": "Послуги бізнес-центра",
    },
    "fax": {
        "en": "Fax/photocopying (paid separately)",
        "ua": "Факс/ксерокопіювання (Оплачується окремо)",
    },


    "security": {
        "en": "Security",
        "ua": "Безпека"
    },
    "fire_extinguishers": {
        "en": "Fire Extinguishers",
        "ua": "Вогнегасники"
    },
    "external_cctv": {
        "en": "External CCTV",
        "ua": "Відеоспостереження ззовні будівлі",
    },
    "public_area_cctv": {
        "en": "CCTV in Public Areas",
        "ua": "Відеоспостереження в зонах загального користування",
    },
    "smoke_detectors": {
        "en": "Smoke Detectors",
        "ua": "Датчики диму",
    },
    "security_alarm": {
        "en": "Security Alarm",
        "ua": "Охоронна сигналізація",
    },
    "card_access": {
        "en": "Card Access",
        "ua": "Вхід з електронною карткою",
    },
    "key_access": {
        "en": "Key Access",
        "ua": "Вхід з ключем",
    },
    "24_7_security": {
        "en": "24/7 Security",
        "ua": "Цілодобова охорона",
    },



    "general": {
        "en": "General",
        "ua": "Загальні",
    },
    "transfer": {
        "en": "Transfer (surcharge)",
        "ua": "Трансфер (оплачується окремо)",
    },
    "grocery_delivery": {
        "en": "Grocery Delivery (surcharge)",
        "ua": "Доставка продуктів (оплачується окремо)",
    },
    "allergy_friendly": {
        "en": "Allergy Friendly",
        "ua": "Безпечний для алергіків",
    },
    "smoking_areas": {
        "en": "Smoking Areas",
        "ua": "Місця для куріння",
    },
    "no_smoking": {
        "en": "No Smoking Throughout",
        "ua": "На всій території готельного об'єкта і в номерах заборонено курити",
    },
    "heating": {
        "en": "Heating",
        "ua": "Опалення",
    },
    "packed_lunches": {
        "en": "Packed Lunches",
        "ua": "Запаковані ланчі",
    },
    "soundproof_rooms": {
        "en": "Soundproof Rooms",
        "ua": "Звуконепроникні номери",
    },

    "lift": {
        "en": "Elevator",
        "ua": "Ліфт"
    },
    "fan": {
        "en": "Fan",
        "ua": "Вентилятор"
    },
    "family__rooms": {
        "en": "Family rooms",
        "ua": "Сімейні номери"
    },
    "ironing__facilities": {
        "en": "Ironing facilities",
        "ua": "Приладдя для прасування одягу"
    },
    "airport__shuttle": {
        "en": "Airport shuttle (additional charge)",
        "ua": "Трансфер з/до аеропорту (оплачується окремо)"
    },
    "non__smoking__rooms": {
        "en": "Non-smoking rooms",
        "ua": "Номери для некурців"
    },
    "iron": {
        "en": "Iron",
        "ua": "Праска"
    },
    "wake__up__service": {
        "en": "Wake-up service",
        "ua": "Дзвінок-(будильник)",
    },
    "room__service": {
        "en": "Room service",
        "ua": "Обслуговування номерів",
    },
    "carpark": {
        "en": "Parking is 140 meters from the hotel",
        "ua": "Паркінг знаходиться за 140 м від готелю",
    },
    "airport": {
        "en": "Transfer from/to the airport",
        "ua": "Трансфер з/до аеропорту",
    },
    "save": {
        "en": "Round-the-clock security",
        "ua": "Цілодобова охорона",
    },
    "rewiew__slide": {
        "en": "Would you like to see more feedback from our visitors?",
        "ua": "Хочете переглянути більше відгуків наших відвідувачів?",
    },
    "relook": {
        "en": "View more",
        "ua": "Переглянути",
    },
    "numbers": {
        "en": "Rooms",
        "ua": "Номери",
    },
    "apartament": {
        "en": "Apartments",
        "ua": "Апартаменти",
    },
    "availability": {
        "en": "Availability",
        "ua": "Доступність",
    },
    "lift__tohi": {
        "en": "There is an elevator to get to the higher floors",
        "ua": "На вищі поверхи можна піднятися на ліфті",
    },
    "language": {
        "en": "Language of communication",
        "ua": "Мова спілкування",
    },
    "english": {
        "en": "English",
        "ua": "англійська",
    },
    "russian": {
        "en": "Russian",
        "ua": "російська",
    },
    "ukraine": {
        "en": "Ukrainian",
        "ua": "українська",
    },
    "room__reserve": {
        "en": "Reserve a room",
        "ua": "Забронювати номер",
    },
    "popup__text": {
        "en": "Leave your phone number for booking and we will call you back within a day",
        "ua": "Залиште номер телефону для бронювання і ми зателефонуємо вам протягом дня",
    },
    "popup__text2": {
        "en": "By clicking the button, you agree to the terms of data processing and privacy policy",
        "ua": "Натискаючи на кнопку, ви погоджуєтеся з умовами обробки даних і політикою конфіденційності",
    },
    "polit_safe": {
        "en": "Privacy policy",
        "ua": "Політика конфіденційності",
    },
    "who_am_i": {
        "en": "Who we are",
        "ua": "Хто ми",
    },
    "our_link": {
        "en": "Our website address: https://kyiv-view.com",
        "ua": "Наша адреса сайту: https://kyiv-view.com",
    },
    "coments": {
        "en": "Comments",
        "ua": "Коментарі",
    },
    "doc_text1": {
        "en": "When visitors leave comments on the site, we collect the data displayed in the comment form, as well as as well as the visitor's IP address and browser agent string to help detect spam.",
        "ua": "Коли відвідувачі залишають коментарі на сайті, ми збираємо дані, що відображаються у формі коментарів, а також IP-адреси відвідувачів та рядку агента-браузера користувача, щоб допомогти виявити спам.",
    },
    "doc_text2": {
        "en": "An anonymous string generated from your email address (also called a hash) may be provided to to Gravatar to find out if you are using it. The privacy policy of the Gravatar service is available here: https://kyiv-view.com/privacy/. Once your comment is approved, your profile picture will be visible to the public in the context of your comment.",
        "ua": "Анонімний рядок, створений за вашою адресою електронної пошти (також називається хеш), може бути наданий службі Gravatar, щоб дізнатись, чи ви його використовуєте. Політика конфіденційності служби Gravatar доступна тут: https://kyiv-view.com/privacy/. Після схвалення вашого коментаря, ваше зображення профілю буде видно для громадськості в контексті вашого коментарю.",
    },
    "mediafiles": {
        "en": "Media files",
        "ua": "Медіафайли",
    },
    "media_text": {
        "en": "If you are uploading images to a website, you should avoid uploading images with embedded location data (EXIF GPS) embedded in them. Visitors to your site can download and extract any location data from location data from images on the site.",
        "ua": "Якщо ви завантажуєте зображення на сайт, вам слід уникати завантаження зображень із вбудованими даними про місцезнаходження (EXIF GPS). Відвідувачі сайту можуть завантажувати та витягувати будь-які дані про місцезнаходження із зображень на сайті.",
    },
    "cookies_text": {
        "en": "If you leave a comment on our website, you can enable the storage of your name, email address and website in cookies. This is for your convenience, so you don't have to fill in your information again, the next time you leave a comment. These cookies will be stored for 1 year.",
        "ua": "Якщо ви залишаєте коментар на нашому сайті, ви можете ввімкнути збереження свого імені, електронної адреси та сайту в файлах cookie. Це для вашої зручності, так що вам не потрібно буде повторно заповнювати ваші дані, коли ви залишатимете наступний коментар. Ці файли cookie зберігатимуться 1 рік.",
    },
    "cookies_text2": {
        "en": "If you have an account on the site and you log in, we will set a temporary cookie to determine support cookies by your browser, the cookie does not contain any personal information and is deleted when you close your browser.",
        "ua": "Якщо у вас є обліковий запис на сайті і ви ввійдете в нього, ми встановимо тимчасовий cookie для визначення підтримки cookies вашим браузером, cookie не містить ніякої особистої інформації і віддаляється при закритті вашого браузера.",
    },
    "cookies_text3": {
        "en": "When you log in, we will also set a few cookies to save your login information and screen settings. Login cookies are stored for 2 days, and screen settings cookies are stored for - 1 year. If you select <Remember Me>, your login information will be stored for 2 weeks. If you log out of your account, your login cookies will be deleted.",
        "ua": "Коли ви ввійдете в систему, ми також встановимо декілька файлів cookie, щоб зберегти інформацію про ваш логін та налаштування екрана. Cookie-файли для входу зберігаються 2 дні, а файли cookie-файлів налаштувань екрану — 1 рік. Якщо ви виберете «Запам’ятати мене», ваш логін буде зберігатися протягом 2 тижнів. Якщо ви вийдете зі свого облікового запису, файли cookie логіну будуть видалені.",
    },
    "cookies_text4": {
        "en": "If you edit or publish an article, an additional cookie will be stored in your browser. This cookie does not contain any personal data and simply indicates the ID of the article you have just edited. It expires after 1 day.",
        "ua": "Якщо ви редагуєте або публікуєте статтю, у вашому веб-переглядачі буде збережений додатковий файл cookie. Цей файл cookie не містить особистих даних і просто вказує ідентифікатор статті, яку ви щойно редагували. Його термін дії закінчується через 1 день.",
    },
    "another_webs": {
        "en": "Embedded content from other websites",
        "ua": "Вбудований вміст з інших веб-сайтів",
    },
    "another_text": {
        "en": "Articles on this site may contain embedded content (for example, videos, images, articles, etc.). Embedded content from other sites behaves in the same way as if the user had visited the other site.",
        "ua": "Статті на цьому сайті можуть містити вбудований вміст (наприклад: відео, зображення, статті тощо). Вбудований вміст з інших сайтів веде себе так само, як би користувач відвідав інший сайт.",
    },
    "another_text2": {
        "en": "These sites may collect data about you, use cookies, embedded third-party tracking applications, and monitor your interaction with this embedded content. This includes tracking your interaction with embedded content if you have an account and are logged in to that site.",
        "ua": "Ці сайти можуть збирати дані про вас, використовувати файли cookie, вбудовані додатки відстеження третіх сторін та стежити за вашою взаємодією з цим вбудованим вмістом. Зокрема відстежувати взаємодію з вбудованим вмістом, якщо у вас є обліковий запис і ви увійшли на цей сайт.",
    },
    "your_data": {
        "en": "Who we share your data with",
        "ua": "З ким ми ділимося вашими даними",
    },
    "data_text": {
        "en": "If you request a password reset, your IP address will be specified in the reset email.",
        "ua": "Якщо ви запросите скидання паролю, ваш IP буде вказано в email-повідомленні про скидання.",
    },

    "how_long": {
        "en": "How long we keep your data",
        "ua": "Як довго ми зберігаємо ваші дані",
    },
    "how_long_text": {
        "en": "If you leave a comment, it and its metadata are stored indefinitely. This way, we can automatically identify and approve each subsequent comment instead of keeping them in a moderation queue.",
        "ua": "Якщо ви залишаєте коментар, він та його метадані зберігаються протягом невизначеного терміну. Таким чином, ми можемо автоматично визначати та затверджувати кожен наступний коментар замість того, щоб тримати їх у черзі на модерації.",
    },
    "forusers": {
        "en": "For users who register on our site (if any), we store the personal information they provide in their user profile. All users can view, edit or delete their personal information at any time (except that they cannot change their username). Site administrators can also view and edit this information.",
        "ua": "Для користувачів, які реєструються на нашому сайті (якщо такі є), ми зберігаємо надану ними персональну інформацію у їхньому профілі користувача. Всі користувачі можуть переглядати, редагувати або видаляти свої особисті дані в будь-який час (за винятком того, що вони не можуть змінити своє ім’я користувача). Адміністратори сайту також можуть переглядати та редагувати цю інформацію.",
    },
    "your_rules": {
        "en": "What rights do you have regarding your data",
        "ua": "Які права ви маєте відносно своїх даних",
    },
    "your_rules_text": {
        "en": "If you have an account on this site or have left comments, you may request to receive an exported file of the personal data we hold about you, including any data you have provided to us. You may also request that we erase any personal data we hold about you. This does not include any data that we are required to keep for administrative, legal and security purposes.",
        "ua": "Якщо у вас є обліковий запис на цьому сайті або ви залишили коментарі, ви можете подати запит на отримання експортованого файлу особистих даних які ми зберігаємо про вас, включаючи всі дані, які ви надали нам. Ви також можете вимагати, щоб ми стерли будь-які особисті дані, які ми маємо щодо вас. Це не включає будь-які дані, які ми зобов’язані зберігати в адміністративних, правових та цілях безпеки.",
    },
    "where_send": {
        "en": "Where your data is sent to",
        "ua": "Куди відправляються ваші дані",
    },
    "where_send_text": {
        "en": "Visitors' comments can be checked using an automatic spam detection service.",
        "ua": "Коментарі відвідувачів можуть бути перевірені за допомогою служби автоматичного виявлення спаму.",
    },
    "singlebed1": {
        "en": "1 bed",
        "ua": "1 ліжко",
    },
    "electric_cooker": {
        "en": "Electric cooker",
        "ua": "Електрична плита",
    },
    "microwave": {
        "en": "Microwave",
        "ua": "Мікрохвильова піч",
    },
    "cooking_appliances": {
        "en": "Cooking appliances",
        "ua": "Прибори для приготування їжі",
    },
    "tableware": {
        "en": "Tableware",
        "ua": "Столовий посуд",
    },
    "cutlery": {
        "en": "Cutlery",
        "ua": "Столові прибори",
    },

   
   
    
    
    
    
}