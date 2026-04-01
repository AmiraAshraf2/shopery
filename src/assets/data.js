import gamain from "./productsimgs/Green Apple main.jpg"
import ga1 from "./productsimgs/Green Apple 1.jpg"
import ga2 from "./productsimgs/Green Apple 2.jpg"
import ga3 from "./productsimgs/Green Apple 3.jpg"

import cfmain from "./productsimgs/Cauliflower main.png"
import cf1 from "./productsimgs/Cauliflower 1.jpg"
import cf2 from "./productsimgs/Cauliflower 2.jpg"
import cf3 from "./productsimgs/Cauliflower 3.jpg"

import rsfmain from "./productsimgs/River Salmon Fillet main.jpg"
import rsf1 from "./productsimgs/River Salmon Fillet 1.jpg"
import rsf2 from "./productsimgs/River Salmon Fillet 2.jpg"
import rsf3 from "./productsimgs/River Salmon Fillet 3.jpg"

import MONmain from "./productsimgs/Mixed Organic Nuts main.jpg"
import MON1 from "./productsimgs/Mixed Organic Nuts 1.jpg"
import MON2 from "./productsimgs/Mixed Organic Nuts 2.jpg"
import MON3 from "./productsimgs/Mixed Organic Nuts 3.jpg"

// New Imports for remaining items
import pjm from "./productsimgs/Pure Orange Juice main.jpg"
import pj1 from "./productsimgs/Pure Orange Juice 1.jpg"
import pj2 from "./productsimgs/Pure Orange Juice 2.jpg"
import pj3 from "./productsimgs/Pure Orange Juice 3.jpg"

import vcsmain from "./productsimgs/Vitamin C Serum main.jpg"
import vcs1 from "./productsimgs/Vitamin C Serum 1.jpg"
import vcs2 from "./productsimgs/Vitamin C Serum 2.jpg"
import vcs3 from "./productsimgs/Vitamin C Serum 3.jpg"

import fbm from "./productsimgs/French Baguette main.jpg"
import fb1 from "./productsimgs/French Baguette 1.jpg"
import fb2 from "./productsimgs/French Baguette 2.jpg"
import fb3 from "./productsimgs/French Baguette 3.jpg"

import ofm from "./productsimgs/Organic Flour main.jpg"
import of1 from "./productsimgs/Organic Flour 1.jpg"
import of2 from "./productsimgs/Organic Flour 2.jpg"
import of3 from "./productsimgs/Organic Flour 3.jpg"

import ssm from "./productsimgs/Sea Salt Grinder main.jpg"
import ss1 from "./productsimgs/Sea Salt Grinder 1.jpg"
import ss2 from "./productsimgs/Sea Salt Grinder 2.jpg"
import ss3 from "./productsimgs/Sea Salt Grinder 3.jpg"

import sbm from "./productsimgs/Sugar-Free Biscuits main.jpg"
import sb1 from "./productsimgs/Sugar-Free Biscuits 1.jpg"
import sb2 from "./productsimgs/Sugar-Free Biscuits 2.jpg"
import sb3 from "./productsimgs/Sugar-Free Biscuits 3.jpg"

import ldm from "./productsimgs/Lemon Dish Soap main.jpg"
import ld1 from "./productsimgs/Lemon Dish Soap 1.jpg"
import ld2 from "./productsimgs/Lemon Dish Soap 2.jpg"
import ld3 from "./productsimgs/Lemon Dish Soap 3.jpg"

import som from "./productsimgs/Sunflower Oil main.jpg"
import so1 from "./productsimgs/Sunflower Oil 1.jpg"
import so2 from "./productsimgs/Sunflower Oil 2.jpg"
import so3 from "./productsimgs/Sunflower Oil 3.jpg"

import rsm from "./productsimgs/Red Strawberries main.png"
import rs1 from "./productsimgs/Red Strawberries 1.jpg"
import rs2 from "./productsimgs/Red Strawberries 2.jpg"
import rs3 from "./productsimgs/Red Strawberries 3.jpg"

import ocm from "./productsimgs/Organic Carrots main.jpg"
import oc1 from "./productsimgs/Organic Carrots 1.jpg"
import oc2 from "./productsimgs/Organic Carrots 2.jpg"
import oc3 from "./productsimgs/Organic Carrots 3.jpg"

import cbm from "./productsimgs/Chicken Breast main.jpg"
import cb1 from "./productsimgs/Chicken Breast 1.jpg"
import cb2 from "./productsimgs/Chicken Breast 2.jpg"
import cb3 from "./productsimgs/Chicken Breast 3.jpg"

import dcm from "./productsimgs/Dark Chocolate main.jpg"
import dc1 from "./productsimgs/Dark Chocolate 1.jpg"
import dc2 from "./productsimgs/Dark Chocolate 2.jpg"
import dc3 from "./productsimgs/Dark Chocolate 3.jpg"

import gtm from "./productsimgs/Green Tea Bags main.jpg"
import gt1 from "./productsimgs/Green Tea Bags 1.jpg"
import gt2 from "./productsimgs/Green Tea Bags 2.jpg"
import gt3 from "./productsimgs/Green Tea Bags 3.jpg"

import mlm from "./productsimgs/Multigrain Loaf main.jpg"
import ml1 from "./productsimgs/Multigrain Loaf 1.jpg"
import ml2 from "./productsimgs/Multigrain Loaf 2.jpg"
import ml3 from "./productsimgs/Multigrain Loaf 3.jpg"

import bsm from "./productsimgs/Baking Soda main.jpg"
import bs1 from "./productsimgs/Baking Soda 1.jpg"
import bs2 from "./productsimgs/Baking Soda 2.jpg"
import bs3 from "./productsimgs/Baking Soda 3.jpg"

import lgm from "./productsimgs/Low GI Rice main.jpg"
import lg1 from "./productsimgs/Low GI Rice 1.jpg"
import lg2 from "./productsimgs/Low GI Rice 2.jpg"
import lg3 from "./productsimgs/Low GI Rice 3.jpg"

import com from "./productsimgs/Coconut Oil main.jpg"
import co1 from "./productsimgs/Coconut Oil 1.jpg"
import co2 from "./productsimgs/Coconut Oil 2.jpg"
import co3 from "./productsimgs/Coconut Oil 3.jpg"

const products = [
  // --- FRESH FRUIT ---
  {
    "id": 1,
    "name": "Green Apple",
    "slug": "green-apple",
    "category": "Fresh Fruit",
    "description": "Crisp, tart, and refreshing organic green apples. perfect for snacks or baking.",
    "price": 14.99,
    "discount": 10,
    "rating": 4.5,
    "mainImage": gamain,
    "images": [ga1, ga2, ga3]
  },
  {
    "id": 13,
    "name": "Red Strawberries",
    "slug": "red-strawberries",
    "category": "Fresh Fruit",
    "description": "Sweet and juicy seasonal strawberries.",
    "price": 8.00,
    "discount": 20,
    "rating": 4.9,
    "mainImage": rsm,
    "images": [rs1, rs2, rs3]
  },
  // {
  //   "id": 22,
  //   "name": "Ripe Bananas",
  //   "slug": "ripe-bananas",
  //   "category": "Fresh Fruit",
  //   "description": "A bunch of naturally ripened, sweet yellow bananas.",
  //   "price": 3.50,
  //   "discount": 0,
  //   "rating": 4.6,
  //   "mainImage": rbmain,
  //   "images": [rb1, rb2, rb3]
  // },
  // {
  //   "id": 23,
  //   "name": "Fresh Blueberries",
  //   "slug": "fresh-blueberries",
  //   "category": "Fresh Fruit",
  //   "description": "Plump and sweet antioxidant-rich blueberries.",
  //   "price": 6.99,
  //   "discount": 5,
  //   "rating": 4.8,
  //   "mainImage": blmain,
  //   "images": [bl1, bl2, bl3]
  // },

  // --- FRESH VEGETABLES ---
  {
    "id": 2,
    "name": "Fresh Cauliflower",
    "slug": "fresh-cauliflower",
    "category": "Fresh Vegetables",
    "description": "Farm-fresh white cauliflower, rich in fiber and vitamins.",
    "price": 4.00,
    "discount": 0,
    "rating": 4.8,
    "mainImage": cfmain,
    "images": [cf1, cf2, cf3]
  },
  {
    "id": 14,
    "name": "Organic Carrots",
    "slug": "organic-carrots-bunch",
    "category": "Fresh Vegetables",
    "description": "Crunchy orange carrots with greens attached.",
    "price": 2.99,
    "discount": 0,
    "rating": 4.7,
    "mainImage": ocm,
    "images": [oc1, oc2, oc3]
  },
  // {
  //   "id": 24,
  //   "name": "Organic Spinach",
  //   "slug": "organic-spinach",
  //   "category": "Fresh Vegetables",
  //   "description": "Fresh, leafy green spinach packed with iron.",
  //   "price": 3.49,
  //   "discount": 0,
  //   "rating": 4.5,
  //   "mainImage": spmain,
  //   "images": [sp1, sp2, sp3]
  // },
  // {
  //   "id": 25,
  //   "name": "Mixed Bell Peppers",
  //   "slug": "mixed-bell-peppers",
  //   "category": "Fresh Vegetables",
  //   "description": "A colorful trio of red, yellow, and green sweet bell peppers.",
  //   "price": 4.50,
  //   "discount": 10,
  //   "rating": 4.6,
  //   "mainImage": bpmain,
  //   "images": [bp1, bp2, bp3]
  // },

  // --- MEAT & FISH ---
  {
    "id": 3,
    "name": "River Salmon Fillet",
    "slug": "river-salmon-fillet",
    "category": "Meat & Fish",
    "description": "High-quality Atlantic salmon, perfect for grilling or pan-searing.",
    "price": 25.00,
    "discount": 15,
    "rating": 4.9,
    "mainImage": rsfmain,
    "images": [rsf1, rsf2, rsf3]
  },
  {
    "id": 15,
    "name": "Chicken Breast",
    "slug": "chicken-breast-boneless",
    "category": "Meat & Fish",
    "description": "Lean, skinless chicken breast, perfect for healthy meals.",
    "price": 15.00,
    "discount": 10,
    "rating": 4.4,
    "mainImage": cbm,
    "images": [cb1, cb2, cb3]
  },
  // {
  //   "id": 26,
  //   "name": "Beef Ribeye Steak",
  //   "slug": "beef-ribeye-steak",
  //   "category": "Meat & Fish",
  //   "description": "Premium, thickly cut ribeye steak with excellent marbling.",
  //   "price": 28.99,
  //   "discount": 5,
  //   "rating": 4.8,
  //   "mainImage": brmain,
  //   "images": [br1, br2, br3]
  // },
  // {
  //   "id": 27,
  //   "name": "Turkey Bacon",
  //   "slug": "turkey-bacon",
  //   "category": "Meat & Fish",
  //   "description": "Smoked turkey bacon strips, a lower-fat alternative to pork.",
  //   "price": 6.50,
  //   "discount": 0,
  //   "rating": 4.3,
  //   "mainImage": tbmain,
  //   "images": [tb1, tb2, tb3]
  // },

  // --- SNACKS ---
  {
    "id": 4,
    "name": "Mixed Organic Nuts",
    "slug": "mixed-organic-nuts",
    "category": "Snacks",
    "description": "A healthy blend of walnuts, almonds, and cashews.",
    "price": 12.50,
    "discount": 5,
    "rating": 4.2,
    "mainImage": MONmain,
    "images": [MON1, MON2, MON3]
  },
  {
    "id": 16,
    "name": "Dark Chocolate 70%",
    "slug": "dark-chocolate-bar",
    "category": "Snacks",
    "description": "Rich dark chocolate with hints of sea salt.",
    "price": 5.00,
    "discount": 0,
    "rating": 4.8,
    "mainImage": dcm,
    "images": [dc1, dc2, dc3]
  },
  // {
  //   "id": 28,
  //   "name": "Sea Salt Potato Chips",
  //   "slug": "sea-salt-potato-chips",
  //   "category": "Snacks",
  //   "description": "Crunchy, kettle-cooked potato chips with a touch of sea salt.",
  //   "price": 3.99,
  //   "discount": 0,
  //   "rating": 4.5,
  //   "mainImage": pcmain,
  //   "images": [pc1, pc2, pc3]
  // },
  // {
  //   "id": 29,
  //   "name": "Butter Popcorn",
  //   "slug": "butter-popcorn",
  //   "category": "Snacks",
  //   "description": "Lightly salted, movie-theater style buttered popcorn.",
  //   "price": 4.50,
  //   "discount": 10,
  //   "rating": 4.6,
  //   "mainImage": popmain,
  //   "images": [pop1, pop2, pop3]
  // },

  // --- BEVERAGES ---
  {
    "id": 5,
    "name": "Pure Orange Juice",
    "slug": "pure-orange-juice",
    "category": "Beverages",
    "description": "100% squeezed oranges with no added sugar or preservatives.",
    "price": 6.99,
    "discount": 0,
    "rating": 4.7,
    "mainImage": pjm,
    "images": [pj1, pj2, pj3]
  },
  {
    "id": 17,
    "name": "Green Tea Bags",
    "slug": "green-tea-organic",
    "category": "Beverages",
    "description": "Antioxidant-rich green tea leaves in biodegradable bags.",
    "price": 10.00,
    "discount": 15,
    "rating": 4.5,
    "mainImage": gtm,
    "images": [gt1, gt2, gt3]
  },
  // {
  //   "id": 30,
  //   "name": "Sparkling Mineral Water",
  //   "slug": "sparkling-mineral-water",
  //   "category": "Beverages",
  //   "description": "Refreshing carbonated mineral water sourced from natural springs.",
  //   "price": 2.99,
  //   "discount": 0,
  //   "rating": 4.8,
  //   "mainImage": swmain,
  //   "images": [sw1, sw2, sw3]
  // },
  // {
  //   "id": 31,
  //   "name": "Whole Bean Coffee",
  //   "slug": "whole-bean-coffee",
  //   "category": "Beverages",
  //   "description": "Medium roast Arabica coffee beans for the perfect morning cup.",
  //   "price": 14.50,
  //   "discount": 5,
  //   "rating": 4.9,
  //   "mainImage": wcmain,
  //   "images": [wc1, wc2, wc3]
  // },

  // --- BEAUTY & HEALTH ---
  {
    "id": 6,
    "name": "Vitamin C Serum",
    "slug": "vitamin-c-serum",
    "category": "Beauty & Health",
    "description": "Brightening facial serum with natural citrus extracts.",
    "price": 32.00,
    "discount": 20,
    "rating": 4.6,
    "mainImage": vcsmain,
    "images": [vcs1, vcs2, vcs3]
  },
  // {
  //   "id": 32,
  //   "name": "Hydrating Face Cream",
  //   "slug": "hydrating-face-cream",
  //   "category": "Beauty & Health",
  //   "description": "Daily moisturizer enriched with hyaluronic acid.",
  //   "price": 24.00,
  //   "discount": 10,
  //   "rating": 4.7,
  //   "mainImage": hcmain,
  //   "images": [hc1, hc2, hc3]
  // },
  // {
  //   "id": 33,
  //   "name": "Herbal Shampoo",
  //   "slug": "herbal-shampoo",
  //   "category": "Beauty & Health",
  //   "description": "Sulfate-free shampoo infused with aloe vera and mint.",
  //   "price": 12.99,
  //   "discount": 0,
  //   "rating": 4.5,
  //   "mainImage": hsmain,
  //   "images": [hs1, hs2, hs3]
  // },
  // {
  //   "id": 34,
  //   "name": "SPF 50 Sunscreen",
  //   "slug": "spf-50-sunscreen",
  //   "category": "Beauty & Health",
  //   "description": "Broad-spectrum, water-resistant sun protection lotion.",
  //   "price": 18.50,
  //   "discount": 15,
  //   "rating": 4.8,
  //   "mainImage": snmain,
  //   "images": [sn1, sn2, sn3]
  // },

  // --- BREAD & BAKERY ---
  {
    "id": 7,
    "name": "French Baguette",
    "slug": "french-baguette",
    "category": "Bread & Bakery",
    "description": "Traditional crusty baguette baked fresh daily.",
    "price": 3.50,
    "discount": 0,
    "rating": 4.4,
    "mainImage": fbm,
    "images": [fb1, fb2, fb3]
  },
  {
    "id": 18,
    "name": "Multigrain Loaf",
    "slug": "multigrain-bread-loaf",
    "category": "Bread & Bakery",
    "description": "Hearty bread packed with oats, seeds, and grains.",
    "price": 6.50,
    "discount": 5,
    "rating": 4.3,
    "mainImage": mlm,
    "images": [ml1, ml2, ml3]
  },
  // {
  //   "id": 35,
  //   "name": "Butter Croissants",
  //   "slug": "butter-croissants",
  //   "category": "Bread & Bakery",
  //   "description": "Flaky, golden, and rich all-butter croissants, pack of 4.",
  //   "price": 5.99,
  //   "discount": 0,
  //   "rating": 4.8,
  //   "mainImage": bcmain,
  //   "images": [bc1, bc2, bc3]
  // },
  // {
  //   "id": 36,
  //   "name": "Sourdough Loaf",
  //   "slug": "sourdough-loaf",
  //   "category": "Bread & Bakery",
  //   "description": "Artisan sourdough bread with a chewy crust and soft interior.",
  //   "price": 7.00,
  //   "discount": 10,
  //   "rating": 4.9,
  //   "mainImage": sdmain,
  //   "images": [sd1, sd2, sd3]
  // },

  // --- BAKING NEEDS ---
  {
    "id": 8,
    "name": "Organic Flour",
    "slug": "organic-flour-all-purpose",
    "category": "Baking Needs",
    "description": "Fine-milled organic wheat flour for all your baking projects.",
    "price": 8.00,
    "discount": 0,
    "rating": 4.3,
    "mainImage": ofm,
    "images": [of1, of2, of3]
  },
  {
    "id": 19,
    "name": "Baking Soda",
    "slug": "pure-baking-soda",
    "category": "Baking Needs",
    "description": "Premium leavening agent for cakes and cookies.",
    "price": 2.50,
    "discount": 0,
    "rating": 4.9,
    "mainImage": bsm,
    "images": [bs1, bs2, bs3]
  },
  // {
  //   "id": 37,
  //   "name": "Pure Vanilla Extract",
  //   "slug": "pure-vanilla-extract",
  //   "category": "Baking Needs",
  //   "description": "Rich and aromatic vanilla extract sourced from Madagascar beans.",
  //   "price": 14.00,
  //   "discount": 5,
  //   "rating": 4.8,
  //   "mainImage": vemain,
  //   "images": [ve1, ve2, ve3]
  // },
  // {
  //   "id": 38,
  //   "name": "Unsweetened Cocoa Powder",
  //   "slug": "unsweetened-cocoa-powder",
  //   "category": "Baking Needs",
  //   "description": "100% pure cocoa powder for deep chocolate desserts.",
  //   "price": 6.50,
  //   "discount": 0,
  //   "rating": 4.7,
  //   "mainImage": cpmain,
  //   "images": [cp1, cp2, cp3]
  // },

  // --- COOKING ---
  {
    "id": 9,
    "name": "Sea Salt Grinder",
    "slug": "sea-salt-grinder",
    "category": "Cooking",
    "description": "Coarse Mediterranean sea salt in a convenient grinder.",
    "price": 5.25,
    "discount": 10,
    "rating": 4.8,
    "mainImage": ssm,
    "images": [ss1, ss2, ss3]
  },
  // {
  //   "id": 39,
  //   "name": "Black Peppercorn Grinder",
  //   "slug": "black-peppercorn-grinder",
  //   "category": "Cooking",
  //   "description": "Whole black peppercorns ready to be freshly ground.",
  //   "price": 5.50,
  //   "discount": 0,
  //   "rating": 4.7,
  //   "mainImage": bpgmain,
  //   "images": [bpg1, bpg2, bpg3]
  // },
  // {
  //   "id": 40,
  //   "name": "Garlic Powder",
  //   "slug": "garlic-powder",
  //   "category": "Cooking",
  //   "description": "Finely ground, aromatic garlic powder to season any dish.",
  //   "price": 3.99,
  //   "discount": 0,
  //   "rating": 4.6,
  //   "mainImage": gpmain,
  //   "images": [gp1, gp2, gp3]
  // },
  // {
  //   "id": 41,
  //   "name": "Balsamic Vinegar",
  //   "slug": "balsamic-vinegar",
  //   "category": "Cooking",
  //   "description": "Aged balsamic vinegar from Modena, Italy. Perfect for dressings.",
  //   "price": 11.50,
  //   "discount": 15,
  //   "rating": 4.9,
  //   "mainImage": bvmain,
  //   "images": [bv1, bv2, bv3]
  // },

  // --- DIABETIC FOOD ---
  {
    "id": 10,
    "name": "Sugar-Free Biscuits",
    "slug": "sugar-free-biscuits",
    "category": "Diabetic Food",
    "description": "Delicious fiber-rich biscuits suitable for diabetics.",
    "price": 7.50,
    "discount": 0,
    "rating": 4.1,
    "mainImage": sbm,
    "images": [sb1, sb2, sb3]
  },
  {
    "id": 20,
    "name": "Low GI Rice",
    "slug": "low-gi-white-rice",
    "category": "Diabetic Food",
    "description": "White rice specially processed to have a low glycemic index.",
    "price": 18.00,
    "discount": 10,
    "rating": 4.2,
    "mainImage": lgm,
    "images": [lg1, lg2, lg3]
  },
  // {
  //   "id": 42,
  //   "name": "Sugar-Free Strawberry Jam",
  //   "slug": "sugar-free-strawberry-jam",
  //   "category": "Diabetic Food",
  //   "description": "Sweetened with Stevia, this jam is completely sugar-free.",
  //   "price": 6.99,
  //   "discount": 5,
  //   "rating": 4.5,
  //   "mainImage": sjmain,
  //   "images": [sj1, sj2, sj3]
  // },
  // {
  //   "id": 43,
  //   "name": "Keto Nut Granola",
  //   "slug": "keto-nut-granola",
  //   "category": "Diabetic Food",
  //   "description": "Low-carb, high-protein granola made entirely of seeds and nuts.",
  //   "price": 12.00,
  //   "discount": 0,
  //   "rating": 4.6,
  //   "mainImage": kgmain,
  //   "images": [kg1, kg2, kg3]
  // },

  // --- DISH DETERGENTS ---
  {
    "id": 11,
    "name": "Lemon Dish Soap",
    "slug": "lemon-dish-soap",
    "category": "Dish Detergents",
    "description": "Grease-cutting formula with a fresh lemon scent.",
    "price": 3.99,
    "discount": 5,
    "rating": 4.5,
    "mainImage": ldm,
    "images": [ld1, ld2, ld3]
  },
  // {
  //   "id": 44,
  //   "name": "Dishwasher Tablets",
  //   "slug": "dishwasher-tablets",
  //   "category": "Dish Detergents",
  //   "description": "All-in-one powerful dishwashing tablets, pack of 30.",
  //   "price": 14.99,
  //   "discount": 10,
  //   "rating": 4.8,
  //   "mainImage": dtmain,
  //   "images": [dt1, dt2, dt3]
  // },
  // {
  //   "id": 45,
  //   "name": "Apple Scent Dish Soap",
  //   "slug": "apple-scent-dish-soap",
  //   "category": "Dish Detergents",
  //   "description": "Gentle on hands, tough on grease with a crisp green apple scent.",
  //   "price": 3.99,
  //   "discount": 0,
  //   "rating": 4.4,
  //   "mainImage": asmain,
  //   "images": [as1, as2, as3]
  // },
  // {
  //   "id": 46,
  //   "name": "Heavy Duty Dish Gel",
  //   "slug": "heavy-duty-dish-gel",
  //   "category": "Dish Detergents",
  //   "description": "Concentrated gel for soaking and removing baked-on food.",
  //   "price": 5.50,
  //   "discount": 0,
  //   "rating": 4.7,
  //   "mainImage": hdmain,
  //   "images": [hd1, hd2, hd3]
  // },

  // --- OIL ---
  {
    "id": 12,
    "name": "Sunflower Oil",
    "slug": "sunflower-oil-1l",
    "category": "Oil",
    "description": "Pure sunflower oil for everyday cooking and frying.",
    "price": 9.50,
    "discount": 0,
    "rating": 4.6,
    "mainImage": som,
    "images": [so1, so2, so3]
  },
  {
    "id": 21,
    "name": "Coconut Oil",
    "slug": "extra-virgin-coconut-oil",
    "category": "Oil",
    "description": "Cold-pressed coconut oil for cooking and skin care.",
    "price": 14.00,
    "discount": 0,
    "rating": 4.7,
    "mainImage": com,
    "images": [co1, co2, co3]
  },
  // {
  //   "id": 47,
  //   "name": "Extra Virgin Olive Oil",
  //   "slug": "extra-virgin-olive-oil",
  //   "category": "Oil",
  //   "description": "Premium cold-pressed olive oil, ideal for salads and drizzling.",
  //   "price": 16.50,
  //   "discount": 15,
  //   "rating": 4.9,
  //   "mainImage": evmain,
  //   "images": [ev1, ev2, ev3]
  // },
  // {
  //   "id": 48,
  //   "name": "Avocado Oil",
  //   "slug": "avocado-oil",
  //   "category": "Oil",
  //   "description": "High heat-tolerant avocado oil, great for roasting and searing.",
  //   "price": 19.00,
  //   "discount": 10,
  //   "rating": 4.8,
  //   "mainImage": avmain,
  //   "images": [av1, av2, av3]
  // }
];

export default products;