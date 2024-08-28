import tradeAnalysis from "../assets/revenue.png"

import secImg2 from '../assets/copy-trade3.png'
import secImg3 from '../assets/copy-trade2.png'
import secImg5 from '../assets/fast-shipping.webp'
import secImg4 from '../assets/connect-with-ease.webp'
import aboutImg from '../assets/blackFriday.png'


//import products
import product1 from "../assets/products/product-1.jpg"
import product2 from "../assets/products/product-2.jpg"
import product3 from "../assets/products/product-3.jpg"
import product4 from "../assets/products/product-4.jpg"
import product5 from "../assets/products/product-5.jpg"
import product6 from "../assets/products/product-6.jpg"
import product7 from "../assets/products/product-7.jpg"
import product8 from "../assets/products/product-8.jpg"
import product9 from "../assets/products/product-9.jpg"
import product10 from "../assets/products/product-10.jpg"
import product11 from "../assets/products/product-11.jpg"
import product12 from "../assets/products/product-12.jpg"
import product13 from "../assets/products/product-13.jpg"
import product14 from "../assets/products/product-14.jpg"
import product15 from "../assets/products/product-15.jpg"


export const formatBalance = (balance: number) => {
  if(!balance) return 0
  return new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(balance);
};



//Products 
export const products = [
  {
    name: 'Electric Air Compressor',
    imgUrl: product1,
    showMore: false,
    duration: '7 days',
    quantity: 10,
    buyPrice: 10.25,
    sellPrice: 20.5,
    desc: 'Electric Air Compressor Rechargeable High Precision Car Tyre Inflator LCD Display Portable Air Pump for Car Motorcycle Bike Ball'
  },
  {
    name: 'Muscle Stimulator',
    imgUrl: product2,
    showMore: false,
    duration: '2 days',
    quantity: 10,
    buyPrice: 3.99,
    sellPrice: 4.22,
    desc: 'EMS Abdominal Muscle Stimulator Fitness ABS Arm Training Patches Muscle Exercise Instrument USB Charging Home Men'
  },
  {
    name: 'Electric Shavers',
    imgUrl: product3,
    showMore: false,
    duration: '1 day',
    quantity: 10,
    buyPrice: 0.99,
    sellPrice: 1.01,
    desc: 'Electric Shavers for Men Waterproof Electric Trimmer Razor Wet &amp Dry Use Rechargeable Battery Rotary Shavers Machine shaving'
  },
  {
    name: 'Handheld Milk Frother',
    imgUrl: product4,
    showMore: false,
    duration: '5 days',
    quantity: 10,
    buyPrice: 4.40,
    sellPrice: 5.72,
    desc: 'Handheld Milk Frother, Battery Operated Electric Foam Maker and Mixer for Drinks ,Drink Mixer for Coffee, Mini Foamer for Cappuc'
  },
  {
    name: 'Electric Waffle Maker',
    imgUrl: product5,
    showMore: false,
    duration: '10 days',
    quantity: 10,
    buyPrice: 13.82,
    sellPrice: 41.76,
    desc: 'Professional Electric Waffle Maker Cooking Kitchen Appliances Multifunction Breakfast Waffles Machine Non-stick Iron Pan'
  },
  {
    name: 'Hair Trimmer',
    imgUrl: product6,
    showMore: false,
    duration: '15 days',
    quantity: 10,
    buyPrice: 23.19,
    sellPrice: 69.57,
    desc: 'Hair Trimmer for Men DLC T-Blade LED Display USB Interface Ceramic Blade Professional Hair Clipper Finishing Machine Barbershop'
  },
  {
    name: 'Portable Folding Treadmills',
    imgUrl: product7,
    showMore: false,
    duration: '20 days',
    quantity: 10,
    buyPrice: 230.87,
    sellPrice: 1439.22,
    desc: 'Portable Folding Treadmills for Home, Max 3.0 HP Running Walking Treadmill with 12 Pre Set Programs and Wider Tread Belt,'
  },
  {
    name: 'Folding Washing Machine',
    imgUrl: product8,
    showMore: false,
    duration: '30 days',
    quantity: 10,
    buyPrice: 35.63,
    sellPrice: 320.67,
    desc: 'Folding Washing Machine Bucket for Clothes Socks Underwear Cleaning Washer Portable Small Travel Washing Machine EU/US PLUG'
  }
];




export const imgRootLink = 'https://assets.website-files.com/63904f663019b0d8edf8d57c'

export const heroAvatarLinks = [
  `${imgRootLink}/63905430069fb027f83abb71_Ellipse-3.jpg`,
  `${imgRootLink}/63905435069fb009d43abbb1_Ellipse-2.jpg`,
  `${imgRootLink}/6390542e809b5c72a0cdcb99_Ellipse.jpg`,
  `${imgRootLink}/6390543797156ee437ef0425_Ellipse-1.jpg`,
]



export const testimonies = [
  {
    title: 'Product Manager | Capsule',
    name: 'Josh Tyson',
    imgUrl: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80',
    message: "The product arbitrage services have revolutionized how I approach buying and selling. The automated system is seamless, allowing me to profit from reselling without the hassle. This platform's efficiency and ease of use have been game-changers for my business.",
  },
  {
    title: 'Senior Director of Operations | Fitbit',
    name: 'Luisa',
    imgUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80',
    message: "This arbitrage company is a standout in the market. Their automated buy-and-resell system has streamlined my operations and boosted my profits significantly. The user-friendly platform and excellent customer support make it a top choice for anyone looking to excel in product arbitrage.",
  },
  {
    title: 'Financial Analyst | Nova',
    name: 'Alisa Williams',
    imgUrl: 'https://images.unsplash.com/photo-1579017331263-ef82f0bbc748?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80',
    message: "The arbitrage services provided have exceeded my expectations. The platform's ability to automatically handle purchases and resales has saved me time and effort while ensuring consistent profits. It's a must-have tool for anyone in the product reselling business.",
  },
  {
    title: 'Tech Entrepreneur | Quantum',
    name: 'Michael',
    imgUrl: 'https://images.pexels.com/photos/3932542/pexels-photo-3932542.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    message: "The automation in buying and reselling products is simply remarkable. This arbitrage platform has allowed me to capitalize on market opportunities without getting bogged down by manual processes. It's efficient, reliable, and incredibly profitable.",
  },
  {
    title: 'Investment Strategist | Luna',
    name: 'Sarah Thompson',
    imgUrl: 'https://source.unsplash.com/320x320/?woman',
    message: "Utilizing this arbitrage platform has transformed my investment strategy. The automated buy-and-resell feature ensures that I never miss a lucrative opportunity. It's a reliable and user-friendly solution for anyone looking to maximize their profits through product arbitrage.",
  },
  {
    title: 'Wealth Manager | Quantum',
    name: 'Anderson',
    imgUrl: 'https://plus.unsplash.com/premium_photo-1682000321215-a061fd738095?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODV8fHdoaXRlJTIwbWFsZXxlbnwwfHwwfHx8MA%3D%3D',
    message: "The automated arbitrage services offered here are exceptional. They handle everything from purchasing to reselling, ensuring maximum profitability with minimal effort. This platform's effectiveness has greatly enhanced my wealth management strategies.",
  },
  {
    title: 'Entrepreneur | Happy customer',
    name: 'Clark',
    imgUrl: 'https://images.unsplash.com/photo-1554260570-9140fd3b7614?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fHdoaXRlJTIwbWFsZXxlbnwwfHwwfHx8MA%3D%3D',
    message: "This arbitrage platform stands out for its efficiency and profitability. The automated system for buying and reselling products has simplified my operations and increased my earnings. It's an invaluable tool for anyone in the reselling business.",
  },
  {
    title: 'Crypto Enthusiast | Cosmos',
    name: 'Miller',
    imgUrl: 'https://images.unsplash.com/photo-1514851947871-97fd1e04b2e5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjR8fHdoaXRlJTIwbWFsZXxlbnwwfHwwfHx8MA%3D%3D',
    message: "The product arbitrage services here are phenomenal. The automated system has allowed me to leverage market fluctuations to my advantage, resulting in significant profits. It's a powerful tool for any investor looking to capitalize on reselling opportunities.",
  },
  {
    title: 'Retirement Planner | Nebula',
    name: 'Yousaf',
    imgUrl: 'https://images.unsplash.com/photo-1610611803787-7cd04238196f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fHdoaXRlJTIwbWFsZXxlbnwwfHwwfHx8MA%3D%3D',
    message: "I've seen incredible returns thanks to this arbitrage platform. The automated buy-and-resell feature is a game-changer, making it easy to stay ahead of the market and maximize profits. It's an essential tool for anyone serious about product reselling.",
  },
  {
    title: 'Socially Responsible Investor | Quantum',
    name: 'Nathan',
    imgUrl: 'https://images.unsplash.com/photo-1590086782957-93c06ef21604?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2hpdGUlMjBtYWxlfGVufDB8fDB8fHww',
    message: "The commitment to efficiency and profitability in this arbitrage platform is impressive. The automated processes for buying and reselling products have helped me achieve my financial goals effortlessly. It's a must-have for any investor looking to make the most out of arbitrage opportunities.",
  },
];



export const aboutSteps = [
  {
    title: "Sourcing",
    desc: "Arbitrageurs often source products from suppliers or markets where prices are lower. This can include purchasing from wholesalers, liquidation sales, clearance events, or even direct from manufacturers."
  },
  {
    title: "Sales Channels",
    desc: "Products acquired through arbitrage are usually sold through different sales channels such as online marketplaces (like Amazon, eBay), retail stores, or even direct-to-consumer through e-commerce websites."
  },
  {
    title: "Risk and Reward",
    desc: "The success of product arbitrage depends on accurately predicting market trends, demand fluctuations, and managing inventory effectively. It offers the potential for high returns but also carries risks such as price fluctuations, changes in demand, or logistical challenges."
  },
  {
    title: "Types of Arbitrage",
    desc: `There are different types of product arbitrage:`,
    moreDesc: [
      "Retail Arbitrage: Buying products from retail stores or outlets at a lower price and reselling them at a higher price.",
      "Online Arbitrage: Purchasing products online at a lower price and selling them for a profit on different online platforms.",
      "International Arbitrage: Taking advantage of price differences between countries or regions to buy and sell products across borders.",
    ]
  },
  {
    title: "Tools and Strategies",
    desc: "Successful arbitrageurs often use software tools and algorithms to track prices, analyze market trends, and identify profitable opportunities. They may also employ strategies like bundling products, optimizing shipping costs, or leveraging seasonal demand."
  },
  {
    title: "Legal and Ethical Considerations",
    desc: "While arbitrage itself is a legitimate business practice, it's important to comply with laws and regulations related to taxes, import/export duties, and intellectual property rights. Ethically, some sellers may have concerns about undercutting local businesses or exploiting price discrepancies unfairly."
  },
]



//Home Section
export const HomeSec1 = {
  title: "Monitor Revenue",
  span: undefined,
  desc: "Add Shopify stores and products to Sales Tracker to track performance over time, monitor sales, and spot the next big opportunity before others.",
  moreDesc: [],
  imgUrl: tradeAnalysis,
}


//Home Section
export const HomeSec2 = {
  title: "Copy Trading Simplified",
  desc: "With over 500+ registered and regulated traders on Salesgurucommunity, you get the liberty to beat the PDT & day trading by getting started with our copy trading tool below the $25k minimum requirement. Mirror your desired expert on the best linked platform like Thinkorswim, Webull, Robinhood. At Salesgurucommunity we thrive to bring you the modern trading experience.",
  imgUrl: secImg2,
  url: "#"
}

//Home Section
export const HomeSec3 = {
  title: "When They Trade, You Trade",
  desc: "Whether you're a beginner learning the basics or you simply don't have time to watch the markets, now it's easy to leverage other traders' expertise. With Salesgurucommunity Copy Trading, you can automatically copy top-performing traders, instantly replicating their trading in your own portfolio.",
  imgUrl: secImg3,
}

//Home Section
export const HomeSec4 = {
  title: "",
  span: undefined,
  desc: undefined,
  moreDesc: [
    "Diverse Products: Wide range of high-demand products.",
    "Easy to Use: Simple, intuitive platform.", 
    "Low Prices: Competitive product pricing.",
    "24/7 Support: Round-the-clock assistance.",
    "Automation: Streamlined order management.",
  ],
  imgUrl: secImg4,
  reverse: true,
  bulletList: true
}


//Home Section
export const HomeSec5 = {
  title: "Product Arbitrage",
  desc: "The practice of buying products at a lower price in one market and selling them at a higher price in another market, profiting from the price difference. It typically involves exploiting price disparities between different geographical regions, online platforms, or sales channels.",
  url: "/login",
  imgUrl: secImg5,
}


//Company Sections
export const companySec1 = {
  title: "Product",
  span: "Arbitrage",
  desc: "Refers to the practice of buying products at a lower price in one market and selling them at a higher price in another market, thereby profiting from the price difference. It typically involves exploiting price disparities between different geographical regions, online platforms, or sales channels",
  desc2: "Here are some key points about product arbitrage:",
  imgUrl: aboutImg,
  bulletList: true,
  rounded: true,
}




//Hero Details for Company
export const whyHero = {
  title: "About Salesguru",
  subtitle: "Here's All You Need To Know About Salesguru Product Arbitrage Business Model.",
}

//Hero Details for Company
export const productHero = {
  title: "Recent",
  subtitle: "Register, Buy And Resell Instantly",
}

export const contactHero = {
  title: "Swift Customer Service, 24/7",
  subtitle: "Encountered Any Glitch On The Platform?",
}