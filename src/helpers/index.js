export const navLinks = [
    { name: 'Home', to: '/' },
    { name: 'Products', to: '/products/domestic' },
    { name: 'About Us', to: '/about' },
    { name: 'Contact Us', to: '/contact' }
];

export const homeBannerSlides = [
    {
        image: require('../assets/banner/banner.png'),
        alt: 'Slide 1',
        interval: 1000,
    }
];

export const DomesticFeaturesItems = [
    {
        image: require('../assets/Domestic/stove-1.png'),
        alt: 'Slide 1',
        text: 'Heavy Burner',
    },
    {
        image: require('../assets/Domestic/stove-2.png'),
        alt: 'Slide 1',
        text: 'Flexible Knob',
    },
    {
        image: require('../assets/Domestic/stove-3.png'),
        alt: 'Slide 1',
        text: 'Rubber Legs for Better Stability',
    }
];

export const CommercialFeaturesItems = [
    {
        image: require('../assets/Commercial/stove-1.png'),
        alt: 'Slide 1',
        text: 'Efficient design for better cooking',
    },
    {
        image: require('../assets/Commercial/stove-2.png'),
        alt: 'Slide 1',
        text: 'Top grade Stainless Steel',
    },
    {
        image: require('../assets/Commercial/stove-3.png'),
        alt: 'Slide 1',
        text: 'Easy installation and working',
    }
];

export const HowWeWorkItems = [
    {
        steps: 'steps 1:',
        text: "Raw Drawing From Client",
    },
    {
        steps: 'steps 2:',
        text: "Back Of The House (Boh)",
    },
    {
        steps: 'steps 3:',
        text: "Front Of The House (Foh)",
    },
    {
        steps: 'steps 4:',
        text: "Customer Po",
    },
    {
        steps: 'steps 5:',
        text: "Mechanical, Electrical, And Plumbing (Mep) Plans",
    },
    {
        steps: 'steps 6:',
        text: "List Of Production",
    },
    {
        steps: 'steps 7:',
        text: "Quality Check",
    },
    {
        steps: 'steps 8:',
        text: "Installation",
    },
    {
        steps: 'steps 9:',
        text: "Handover Site To Client",
    }
];

export const DomesticBestSellerItems = [
    {
        image: require("../assets/BestSeller/stove-1.png"),
        alt: "Stove 1",
        buttonText: "Know More",
    },
    {
        image: require("../assets/BestSeller/stove-2.png"),
        alt: "Stove 2",
        buttonText: "Know More",
    },
    {
        image: require("../assets/BestSeller/stove-3.png"),
        alt: "Stove 3",
        buttonText: "Know More",
    },
];

export const DomesticBestSellerItemsForMobileView = [
    {
        image: require('../assets/BestSeller/mobile-stove-1.png'),
        alt: 'Slide 1',
        buttonText: 'Know More',
    },
    {
        image: require('../assets/BestSeller/mobile-stove-2.png'),
        alt: 'Slide 2',
        buttonText: 'Know More',
    },
    {
        image: require('../assets/BestSeller/mobile-stove-3.png'),
        alt: 'Slide 3',
        buttonText: 'Know More',
    }
];

export const CommercialBestSellersItems = [
    {
        image: require("../assets/CommercialBestSellers/best-1.png"),
        alt: "Stove 1",
        buttonText: "Know More",
    },
    {
        image: require("../assets/CommercialBestSellers/best-2.png"),
        alt: "Stove 2",
        buttonText: "Know More",
    },
    {
        image: require("../assets/CommercialBestSellers/best-3.png"),
        alt: "Stove 3",
        buttonText: "Know More",
    }
];

export const CommercialBestSellersItemsForMobileView = [
    {
        image: require('../assets/CommercialBestSellers/mobile-best-1.png'),
        alt: 'Slide 1',
        buttonText: 'Know More',
    },
    {
        image: require('../assets/CommercialBestSellers/mobile-best-2.png'),
        alt: 'Slide 2',
        buttonText: 'Know More',
    },
    {
        image: require('../assets/CommercialBestSellers/mobile-best-3.png'),
        alt: 'Slide 3',
        buttonText: 'Know More',
    }
];

export const productCategories = [
    {
        category: "Domestic Products",
        subcategories: [
            {
                subcategory: "Single Burner Range",
                products: [
                    {
                        image: require('../assets/Products/DomesticRange/SingleBurnerRange/kc-1.png'),
                        name: 'KC-00 Single(L)',
                    },
                    {
                        image: require('../assets/Products/DomesticRange/SingleBurnerRange/kc-2.png'),
                        name: 'KC-101 Prince',
                    },
                    {
                        image: require('../assets/Products/DomesticRange/SingleBurnerRange/kc-3.png'),
                        name: 'KC-102 Prestige',
                    },
                ],
                features: [
                    'Stainless Steel Body, Mini-500gm',
                    'Cast Iron Burner-Painted',
                    'MS Powder Coated Pan Support',
                    'Skid Free Rubber Legs For Better Stability',
                    'Strong Bakelite Knob',
                    'Complies with IS 4246 standards.'
                ],
            },
            {
                subcategory: "The Compatibility Range",
                products: [
                    {
                        image: require('../assets/Products/DomesticRange/TheCompatibilityRange/kc-1.png'),
                        name: 'KC-200 Lite',
                    },
                    {
                        image: require('../assets/Products/DomesticRange/TheCompatibilityRange/kc-2.png'),
                        name: 'KC-201 Gold',
                    },
                    {
                        image: require('../assets/Products/DomesticRange/TheCompatibilityRange/kc-3.png'),
                        name: 'KC-Nano',
                    },
                    {
                        image: require('../assets/Products/DomesticRange/TheCompatibilityRange/kc-4.png'),
                        name: 'KC-205 Nova',
                    },
                    {
                        image: require('../assets/Products/DomesticRange/TheCompatibilityRange/kc-5.png'),
                        name: 'KC-207 Supreme'
                    },
                    {
                        childcategory: "KC-202 Commander",
                        products: [
                            {
                                image: require('../assets/Products/DomesticRange/TheCompatibilityRange/KC-202Commander/kc-1.png'),
                            },
                            {
                                image: require('../assets/Products/DomesticRange/TheCompatibilityRange/KC-202Commander/kc-2.png'),
                            },
                            {
                                image: require('../assets/Products/DomesticRange/TheCompatibilityRange/KC-202Commander/kc-3.png'),
                            }
                        ],
                    },
                    {
                        childcategory: 'KC-203 Prime',
                        products: [
                            {
                                image: require('../assets/Products/DomesticRange/TheCompatibilityRange/KC-203Prime/kc-1.png'),
                            },
                            {
                                image: require('../assets/Products/DomesticRange/TheCompatibilityRange/KC-203Prime/kc-2.png'),
                            },
                            {
                                image: require('../assets/Products/DomesticRange/TheCompatibilityRange/KC-203Prime/kc-3.png'),
                            }
                        ]
                    },
                    {
                        childcategory: 'KC-204 Benz',
                        products: [
                            {
                                image: require('../assets/Products/DomesticRange/TheCompatibilityRange/KC-204Benz/kc-1.png'),
                            },
                            {
                                image: require('../assets/Products/DomesticRange/TheCompatibilityRange/KC-204Benz/kc-2.png'),
                            },
                            {
                                image: require('../assets/Products/DomesticRange/TheCompatibilityRange/KC-204Benz/kc-3.png'),
                            }
                        ]
                    }
                ],
                features: [
                    'Stainless Steel Body',
                    'Brass Burner Set',
                    'Electroplated Burner Set',
                    '2 MS Powder Coated Pan Support',
                    'Drip Tray',
                    'C.I. 3 Round Pan Support',
                ]
            },
            {
                subcategory: "The Signature Range",
                products: [
                    {
                        image: require('../assets/Products/DomesticRange/TheSignatureRange/kc-1.png'),
                        name: 'KC-208 Economy',
                    },
                    {
                        image: require('../assets/Products/DomesticRange/TheSignatureRange/kc-2.png'),
                        name: 'KC-209 Prestige',
                    },
                    {
                        image: require('../assets/Products/DomesticRange/TheSignatureRange/kc-3.png'),
                        name: 'KC-211 Magic',
                    }
                ],
                features: [
                    'Stainless Steel Body',
                    'Brass Burner Set',
                    'Electroplated Burner Set',
                    'MS Powder Coated Pan Support',
                    'Drip Tray',
                    'C.I. 3 Round Pan Support',
                ],
            },
            {
                subcategory: "The Orbit Range",
                products: [
                    {
                        image: require('../assets/Products/DomesticRange/TheOrbitRange/kc-1.png'),
                        name: 'KC-212 Smart',
                    },
                    {
                        image: require('../assets/Products/DomesticRange/TheOrbitRange/kc-1.png'),
                        name: 'KC-209 Prestige',
                    },
                    {
                        image: require('../assets/Products/DomesticRange/TheOrbitRange/kc-1.png'),
                        name: 'KC-211 Magic',
                    }
                ],
                features: [
                    'Stainless Steel Body',
                    'Brass Burner Set',
                    'Electroplated Burner Set',
                    'MS Powder Coated Pan Support',
                    'Drip Tray',
                    'C.I. 3 Round Pan Support',
                ],
            },
            {
                subcategory: "The Premium Range",
                products: [
                    {
                        image: require('../assets/Products/DomesticRange/ThePremiumRange/kc-1.png'),
                        name: 'KC-2012 Mitaso',
                    },
                    {
                        image: require('../assets/Products/DomesticRange/ThePremiumRange/kc-2.png'),
                        name: 'KC-2013 Sumo',
                    },
                    {
                        image: require('../assets/Products/DomesticRange/ThePremiumRange/kc-3.png'),
                        name: 'KC-2007 Super Deluxe',
                    }
                ],
                features: [
                    'Stainless Steel Body',
                    'Brass Burner Set',
                    '8 Prawn Powder Coated Pan Support',
                    'Drip Tray'
                ],
            },
            {
                subcategory: "The Trinity Range",
                products: [
                    {
                        image: require('../assets/Products/DomesticRange/TheTrinityRange/kc-1.png'),
                        name: 'KC-1003',
                    },
                    {
                        image: require('../assets/Products/DomesticRange/TheTrinityRange/kc-2.png'),
                        name: 'KC-2003',
                    },
                    {
                        image: require('../assets/Products/DomesticRange/TheTrinityRange/kc-3.png'),
                        name: 'KC-3003',
                    }
                ],
                features: [
                    'Stainless Steel Body',
                    'Brass Burner Set',
                    'High Efficiency Brass Burner',
                    'Sturdy Pan Support',
                    'Perfect Blue Flame',
                    'Slim Design',
                ],
            },
            {
                subcategory: 'The Spectra Range',
                products: [
                    {
                        image: require('../assets/Products/DomesticRange/TheSpectraRange/kc-1.png'),
                        name: "KC-1006",
                    },
                    {
                        image: require('../assets/Products/DomesticRange/TheSpectraRange/kc-2.png'),
                        name: "KC-2006",
                    },
                    {
                        image: require('../assets/Products/DomesticRange/TheSpectraRange/kc-3.png'),
                        name: "KC-3006",
                    },
                    {
                        image: require('../assets/Products/DomesticRange/TheSpectraRange/kc-4.png'),
                        name: "KC-4006",
                    }
                ],
                features: [
                    'Stainless Steel Body',
                    'Heavy Brass Burner Set',
                    'Round Euro Coated Grid',
                    'Smooth Operating Knobs',
                    'Manual Ignition',
                    'Easy Cleaning & Maintainance',
                ],
            },
            {
                subcategory: 'The Reflecto Range',
                products: [
                    {
                        image: require('../assets/Products/DomesticRange/TheReflectoRange/kc-1.png'),
                        name: "KC-2009 Junior",
                    },
                    {
                        image: require('../assets/Products/DomesticRange/TheReflectoRange/kc-1.png'),
                        name:'KC-2006'
                    },
                    {
                        image: require('../assets/Products/DomesticRange/TheReflectoRange/kc-1.png'),
                        name:'KC-3006'
                    },
                    {
                        image: require('../assets/Products/DomesticRange/TheReflectoRange/kc-1.png'),
                        name:'KC-3009'
                    },
                    {
                        image: require('../assets/Products/DomesticRange/TheReflectoRange/kc-1.png'),
                        name:'KC-3009'
                    },
                    {
                        image: require('../assets/Products/DomesticRange/TheReflectoRange/kc-1.png'),
                        name:'KC-3009'
                    },
                    {
                        image: require('../assets/Products/DomesticRange/TheReflectoRange/kc-1.png'),
                        name:'KC-3009'
                    },
                ],
                features: [
                    'Stainless Steel Body',
                    'Heavy Brass Burner Set',
                    'Round Euro Coated Grid',
                    'Smooth Operating Knobs',
                    'Manual Ignition',
                    'Easy Cleaning & Maintainance',
                ]
            }
        ]
    },
    {
        category: "Commercial Products",
        subcategories: [
            {
                subcategory: "The Single Burner Range",
                products: [
                    {
                        image: require('../assets/Products/CommercialRange/TheSingleBurnerRange/img-1.png'),
                        name: 'Single-Burner',
                        alt:"single-burner"
                    },
                    {
                        image: require('../assets/Products/CommercialRange/TheSingleBurnerRange/img-2.png'),
                        name: 'Single-Burner-Chinese',
                        alt:"single-burner-chinese"
                    },
                ],
            },
            {
                subcategory: "Display Counters",
                products: [
                    {
                        image: require('../assets/Products/CommercialRange/DisplayCounter/img-1.png'),
                        name: '',
                        alt:"display-counter"
                    }
                ]
            },
            {
                subcategory: "The 2 Burner Range",
                products: [
                    {
                        image: require('../assets/Products/CommercialRange/The2BurnerRange/img-1.png'),
                        name: '2-Burner',
                        alt:"2 Burner"
                    },
                    {
                        image: require('../assets/Products/CommercialRange/The2BurnerRange/img-2.png'),
                        name: `2 Burner Combo Indian & Chinese`,
                        alt:"2 Burner Combo Indian & Chinese"
                    },
                    {
                        image: require('../assets/Products/CommercialRange/The2BurnerRange/img-3.png'),
                        name: '2-Burner-Chinese',
                        alt:"2 Burner Chinese"
                    }
                ],
            },
            {
                subcategory: "The 3 Burner Range",
                products: [
                    {
                        image:require('../assets/Products/CommercialRange/The3BurnerRange/img-1.png'),
                        name: '',
                        alt:"The 3 Burner Range"
                    },
                ],
            },
            {
                subcategory: "The 4 Burner Range",
                products: [
                    {
                        image: require('../assets/Products/CommercialRange/The4BurnerRange/img-1.png'),
                        name: '',
                        alt:"The 4 Burner Range"
                    },
                ],
            },
            {
                subcategory: "Kadhai Range",
                products: [
                    {
                        image: require('../assets/Products/CommercialRange/KadhaiRange/img-1.png'),
                        name: '',
                        alt:"kadhai range"
                    },
                ],
            },{
                subcategory: "Griddle Grill",
                products: [
                    {
                        image: require('../assets/Products/CommercialRange/GriddleGrill/img-1.png'),
                        name: '',
                        alt:"Griddle Grill"
                    },
                ],
            },
            {
                subcategory: "Stock Pot Range",
                products: [
                    {
                        image:require('../assets/Products/CommercialRange/StockPotRange/img-1.png'),
                        name: 'Double-Stock Pot',
                        alt:"Double Stock Pot"
                    },
                    {
                        image: require('../assets/Products/CommercialRange/StockPotRange/img-2.png'),
                        name: 'Triple-Stock Pot',
                        alt:"Triple Stock Pot"
                    },
                ],
            },
            {
                subcategory: "Chapati Roti Puffer Plate",
                products: [
                    {
                        image: require('../assets/Products/CommercialRange/ChapatiRotiPufferPlate/img-1.png'),
                        name: '',
                        alt:"Chapati Roti Puffer Plate"
                    }
                ]
            }
        ]
    }
]