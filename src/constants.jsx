import deal80Img from "./assets/deal-80.png";
import deal70Img from "./assets/deal-70.webp";
import deal50Img from "./assets/deal-50.png";
import deal30Img from "./assets/deal-30.webp";
import steakImg from "./assets/steak.png";
import grillImg from "./assets/grill.jpg";
import veganImg from "./assets/vegan.webp";
import dinnerImg from "./assets/dinner.webp";
import pizzaImg from "./assets/pizza.jpg";
import cuisine from "./assets/cuisine.jpg";
export const deals = [
  {
    title: "Biggest Deal Ever",
    discount: "80% off all bills over $30 (up to $10 off)",
    condition:
      "During the promotion time, when you dine at the restaurant, the deal can be applied.",
    restaurant: "Boston BeefSteak",
    description:
      "Boston BeefSteak is a renowned steakhouse that has been a local favorite for over two decades, offering an extensive selection of premium cuts of beef sourced from the finest farms. The warm, upscale ambiance features dark wood paneling, leather seating, and soft lighting, creating an ideal setting for romantic dinners or business meetings. Signature dishes include the 16-ounce ribeye with truffle mashed potatoes and a signature garlic butter sauce, paired with an award-winning wine list. The restaurant also prides itself on its attentive service and a private dining room for special occasions.",
    location: "15 Pizza Street, Boston, MA",
    rate: 4,
    timeLeft: "0:456",
    imageSrc: steakImg,
    imageSrc2: grillImg,
    dealIcon: deal80Img,
  },
  {
    title: "Super Saver Deal",
    discount: "70% off all orders above $20 (up to $5 off)",
    condition: "Valid only on weekdays from 12 PM to 3 PM.",
    restaurant: "New York Grill",
    description:
      "New York Grill is a bustling eatery in the heart of the city, known for its innovative take on American classics with a modern twist. Established in 2010, this vibrant spot features an open kitchen, exposed brick walls, and a lively bar area that draws both locals and tourists. The menu highlights include juicy burgers with artisanal buns, hand-cut fries, and a rotating selection of craft beers from local breweries. With its energetic atmosphere and frequent live music events, it’s a perfect spot for casual dining or a night out with friends.",
    location: "123 Main St, New York, NY",
    rate: 3,
    timeLeft: "0:789",
    imageSrc: grillImg,
    imageSrc2: steakImg,
    dealIcon: deal70Img,
  },
  {
    title: "Lunch Special",
    discount: "50% off your next meal",
    condition: "Applicable with a minimum order of $15.",
    restaurant: "Chicago Pizza House",
    description:
      "Chicago Pizza House is a beloved institution celebrated for its authentic deep-dish pizza, a tradition that began over 40 years ago when the founders perfected their family recipe. The restaurant boasts a warm, family-friendly environment with checkered tablecloths, vintage photos, and a jukebox playing classic tunes. Signature offerings include the loaded supreme pizza with multiple layers of cheese, sausage, and peppers, alongside hearty Italian pasta dishes. It also features a spacious patio for outdoor dining, making it a go-to spot for families and pizza enthusiasts alike.",
    location: "456 Oak Ave, Chicago, IL",
    rate: 5,
    timeLeft: "0:123",
    imageSrc: veganImg,
    imageSrc2: pizzaImg,
    dealIcon: deal50Img,
  },
  {
    title: "Dinner Discount",
    discount: "30% off all bills",
    condition: "Offer valid for dine-in only.",
    restaurant: "LA Sushi Bar",
    description:
      "LA Sushi Bar is an upscale dining destination that brings the art of sushi to life with its fresh, handcrafted rolls and sashimi, crafted by master chefs with decades of experience. Opened in 2015, the restaurant features a sleek, modern coastal design with ocean-inspired decor, floor-to-ceiling windows, and a sushi counter where guests can watch the preparation process. Popular dishes include the spicy tuna roll and the signature LA Dragon roll, complemented by an extensive sake menu. It’s a favorite for special occasions and food lovers seeking a refined experience.",
    location: "789 Pine Rd, Los Angeles, CA",
    rate: 2,
    timeLeft: "0:654",
    imageSrc: dinnerImg,
    imageSrc2: steakImg,
    dealIcon: deal50Img,
  },
  {
    title: "Weekend Offer",
    discount: "70% off all orders above $20 (up to $5 off)",
    condition: "Expires at the end of the month.",
    restaurant: "Seattle Seafood",
    description:
      "Seattle Seafood is a waterfront gem offering the freshest catches from the Pacific, with a rich history dating back to 1998 when it started as a small fish market. The nautical-themed dining room features wooden beams, maritime artifacts, and panoramic views of the harbor. Signature dishes include cedar-plank salmon, Dungeness crab cakes, and a seafood chowder that’s a local legend. The restaurant also hosts weekly seafood cooking classes, making it a cultural hub for food enthusiasts and tourists exploring the coast.",
    location: "1010 Maple Dr, Seattle, WA",
    rate: 4,
    timeLeft: "0:321",
    imageSrc: pizzaImg,
    imageSrc2: grillImg,
    dealIcon: deal70Img,
  },
  {
    title: "Biggest Deal Ever",
    discount: "50% off your next meal",
    condition:
      "During the promotion time, when you dine at the restaurant, the deal can be applied.",
    restaurant: "Boston BeefSteak",
    description:
      "Boston BeefSteak is a renowned steakhouse that has been a local favorite for over two decades, offering an extensive selection of premium cuts of beef sourced from the finest farms. The warm, upscale ambiance features dark wood paneling, leather seating, and soft lighting, creating an ideal setting for romantic dinners or business meetings. Signature dishes include the 16-ounce ribeye with truffle mashed potatoes and a signature garlic butter sauce, paired with an award-winning wine list. The restaurant also prides itself on its attentive service and a private dining room for special occasions.",
    location: "15 Pizza Street, Boston, MA",
    rate: 5,
    timeLeft: "0:987",
    imageSrc: cuisine,
    imageSrc2: steakImg,
    dealIcon: deal50Img,
  },
  {
    title: "Super Saver Deal",
    discount: "30% off all bills",
    condition: "Valid only on weekdays from 12 PM to 3 PM.",
    restaurant: "New York Grill",
    description:
      "New York Grill is a bustling eatery in the heart of the city, known for its innovative take on American classics with a modern twist. Established in 2010, this vibrant spot features an open kitchen, exposed brick walls, and a lively bar area that draws both locals and tourists. The menu highlights include juicy burgers with artisanal buns, hand-cut fries, and a rotating selection of craft beers from local breweries. With its energetic atmosphere and frequent live music events, it’s a perfect spot for casual dining or a night out with friends.",
    location: "123 Main St, New York, NY",
    rate: 3,
    timeLeft: "0:234",
    imageSrc: grillImg,
    imageSrc2: pizzaImg,
    dealIcon: deal80Img,
  },
  {
    title: "Lunch Special",
    discount: "80% off all bills over $30 (up to $10 off)",
    condition: "Applicable with a minimum order of $15.",
    restaurant: "Chicago Pizza House",
    description:
      "Chicago Pizza House is a beloved institution celebrated for its authentic deep-dish pizza, a tradition that began over 40 years ago when the founders perfected their family recipe. The restaurant boasts a warm, family-friendly environment with checkered tablecloths, vintage photos, and a jukebox playing classic tunes. Signature offerings include the loaded supreme pizza with multiple layers of cheese, sausage, and peppers, alongside hearty Italian pasta dishes. It also features a spacious patio for outdoor dining, making it a go-to spot for families and pizza enthusiasts alike.",
    location: "456 Oak Ave, Chicago, IL",
    rate: 4,
    timeLeft: "0:567",
    imageSrc: pizzaImg,
    imageSrc2: veganImg,
    dealIcon: deal80Img,
  },
  {
    title: "Dinner Discount",
    discount: "70% off all orders above $20 (up to $5 off)",
    condition: "Offer valid for dine-in only.",
    restaurant: "LA Sushi Bar",
    description:
      "LA Sushi Bar is an upscale dining destination that brings the art of sushi to life with its fresh, handcrafted rolls and sashimi, crafted by master chefs with decades of experience. Opened in 2015, the restaurant features a sleek, modern coastal design with ocean-inspired decor, floor-to-ceiling windows, and a sushi counter where guests can watch the preparation process. Popular dishes include the spicy tuna roll and the signature LA Dragon roll, complemented by an extensive sake menu. It’s a favorite for special occasions and food lovers seeking a refined experience.",
    location: "789 Pine Rd, Los Angeles, CA",
    rate: 2,
    timeLeft: "0:890",
    imageSrc: steakImg,
    imageSrc2: dinnerImg,
    dealIcon: deal70Img,
  },
  {
    title: "Weekend Offer",
    discount: "30% off all bills",
    condition: "Expires at the end of the month.",
    restaurant: "Seattle Seafood",
    description:
      "Seattle Seafood is a waterfront gem offering the freshest catches from the Pacific, with a rich history dating back to 1998 when it started as a small fish market. The nautical-themed dining room features wooden beams, maritime artifacts, and panoramic views of the harbor. Signature dishes include cedar-plank salmon, Dungeness crab cakes, and a seafood chowder that’s a local legend. The restaurant also hosts weekly seafood cooking classes, making it a cultural hub for food enthusiasts and tourists exploring the coast.",
    location: "1010 Maple Dr, Seattle, WA",
    rate: 5,
    timeLeft: "0:345",
    imageSrc: veganImg,
    imageSrc2: pizzaImg,
    dealIcon: deal50Img,
  },
  {
    title: "Midweek Madness",
    discount: "70% off all orders above $25 (up to $7 off)",
    condition: "Valid only on Wednesdays from 5 PM to 9 PM.",
    restaurant: "Miami BBQ Joint",
    description:
      "Miami BBQ Joint is a smoky, flavorful haven specializing in slow-cooked ribs, pulled pork, and tangy sauces that reflect the city’s vibrant culinary scene. Founded by a local pitmaster in 2012, the restaurant features a lively outdoor patio with string lights, live music on weekends, and a rustic interior with barbecue memorabilia. Signature dishes include the signature smoked brisket with homemade coleslaw and cornbread, paired with a selection of craft cocktails. It’s a popular spot for foodies and those seeking an authentic Southern BBQ experience.",
    location: "200 Sunset Blvd, Miami, FL",
    rate: 4,
    timeLeft: "0:678",
    imageSrc: grillImg,
    imageSrc2: dinnerImg,
    dealIcon: deal70Img,
  },
  {
    title: "Family Feast Deal",
    discount: "50% off family meals over $40",
    condition: "Applicable with a party of 4 or more.",
    restaurant: "Houston Tex-Mex",
    description:
      "Houston Tex-Mex is a festive dining destination offering a vibrant array of spicy tacos, enchiladas, and margaritas, rooted in a rich tradition that blends Texan and Mexican flavors. Established in 2005, the restaurant features colorful decor with hand-painted murals, a spacious dining area, and an outdoor courtyard perfect for large gatherings. Signature dishes include the sizzling fajita platter and the creamy queso dip, served with freshly made tortilla chips. Known for its lively atmosphere and family-friendly service, it’s a staple for locals and visitors alike.",
    location: "300 River Walk, Houston, TX",
    rate: 3,
    timeLeft: "0:432",
    imageSrc: dinnerImg,
    imageSrc2: steakImg,
    dealIcon: deal50Img,
  },
  {
    title: "Happy Hour Special",
    discount: "30% off all drinks and appetizers",
    condition: "Offer valid from 4 PM to 7 PM daily.",
    restaurant: "Portland Brew Pub",
    description:
      "Portland Brew Pub is a cozy, laid-back establishment that has been a cornerstone of the local craft beer scene since 2009, offering a wide selection of house-brewed ales and lagers. The rustic interior features exposed wooden beams, a long communal table, and a chalkboard menu that changes with the seasons. Signature items include the pub’s famous pretzels with beer cheese dip and a rotating lineup of seasonal stouts. The pub also hosts trivia nights and live acoustic performances, making it a beloved gathering place for beer enthusiasts and casual diners.",
    location: "400 Oak St, Portland, OR",
    rate: 5,
    timeLeft: "0:901",
    imageSrc: cuisine,
    imageSrc2: pizzaImg,
    dealIcon: deal30Img,
  },
  {
    title: "Chef’s Choice Deal",
    discount: "80% off all bills over $50 (up to $15 off)",
    condition:
      "During the promotion time, when you dine at the restaurant, the deal can be applied.",
    restaurant: "Denver Steakhouse",
    description:
      "Denver Steakhouse is a sophisticated dining venue specializing in dry-aged steaks, fine wines, and an elegant culinary experience, established by a renowned chef in 2017. The luxurious interior boasts crystal chandeliers, plush velvet seating, and an open kitchen where guests can observe the grilling process. Signature offerings include the 20-ounce bone-in filet mignon with a red wine reduction and roasted vegetables, paired with an extensive cellar of vintage wines. The restaurant also features a private chef’s table for exclusive events, attracting food connoisseurs and celebrities.",
    location: "500 Pine Ave, Denver, CO",
    rate: 4,
    timeLeft: "0:234",
    imageSrc: steakImg,
    imageSrc2: dinnerImg,
    dealIcon: deal80Img,
  },
  {
    title: "Brunch Bonanza",
    discount: "50% off brunch items",
    condition: "Valid only on weekends from 10 AM to 2 PM.",
    restaurant: "San Francisco Cafe",
    description:
      "San Francisco Cafe is a charming urban retreat known for its artisanal coffee, freshly baked pastries, and a sunny outdoor seating area overlooking the city skyline, opened in 2011. The cozy interior features exposed brick walls, vintage furniture, and a display case filled with daily-baked goods. Signature items include the avocado toast with poached eggs and the fluffy Belgian waffles with seasonal fruit compote. The cafe also offers live jazz on Sunday mornings, making it a popular spot for brunch lovers and remote workers seeking a relaxed vibe.",
    location: "600 Market St, San Francisco, CA",
    rate: 4,
    timeLeft: "0:876",
    imageSrc: veganImg,
    imageSrc2: pizzaImg,
    dealIcon: deal50Img,
  },
];
