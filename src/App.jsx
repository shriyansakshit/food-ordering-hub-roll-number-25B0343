import { useState, useEffect } from "react";
import MenuGrid from "./components/MenuGrid";
import CartSidebar from "./components/CartSidebar";

const restaurants = [
  {
    id: "spice-garden",
    name: "Spice Garden",
    cuisine: "Indian",
    deliveryTime: "30-40 min",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400",
    menu: [
      {
        id: "sg1",
        name: "Butter Chicken",
        price: 180,
        image: "https://imgs.search.brave.com/tZqgWZM3VVqChZOQVnpjT5P9Xq_yJn57Ia8qHcT0P94/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTQ3/OTI2MjExMi9waG90/by9idXR0ZXItY2hp/Y2tlbi5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9bTBYdG5U/WF94NWlkZVZFV2ww/d2lfaGo5dTRHMk1p/ZkNhaHZYczB6aTNX/Zz0",
        isVeg: false,
        isTrending: true,
        tags: ["Spicy", "Popular"],
      },
      {
        id: "sg2",
        name: "Paneer Tikka",
        price: 160,
        image: "https://imgs.search.brave.com/yzIsg6HTD5-LlvVmRIm7pnGgZj99XmWX9LDS9utuD-g/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzE5LzQzLzkwLzMz/LzM2MF9GXzE5NDM5/MDMzMTlfTlZpeTY4/cnd6U1pzVmNHMXNW/cm1mSEhycDJER2JF/OUQuanBn",
        isVeg: true,
        isTrending: false,
        tags: ["Veg", "Grilled"],
      },
      {
        id: "sg3",
        name: "Veg Thali",
        price: 300,
        image: "https://imgs.search.brave.com/s-HywAayVXwx49ah0t8F3C6Xqrkyn6DzFBWeNRwojog/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMjIz/MTE5MDU1MC9waG90/by90cmFkaXRpb25h/bC1pbmRpYW4tdGhh/bGktd2l0aC12YXJp/b3VzLWRpc2hlcy1v/bi1hLXRhYmxlLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz1H/RlR4RDJfN3FxdmZu/T3JpSHpkWVhUQWJ6/TGhYeHVuY0JSNThZ/WWFmNUg0PQ",
        isVeg: true,
        isTrending: false,
        tags: ["Veg", "Classic"],
      },
      {
        id: "sg4",
        name: "Chicken Biryani",
        price: 220,
        image: "https://imgs.search.brave.com/leLAWyy-Yp2RNWen7mUnXd5fahbUQh-DwNX4Uc2YKVM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cnVjaGlza2l0Y2hl/bi5jb20vd3AtY29u/dGVudC91cGxvYWRz/LzIwMjAvMDkvSG93/LXRvLW1ha2UtdGhl/LWJlc3QtQ2hpY2tl/bi1CaXJ5YW5pLTAy/Ny03Njh4MTM2NS5q/cGcud2VicA",
        isVeg: false,
        isTrending: true,
        tags: ["Spicy", "Popular"],
      },
      {
        id: "sg5",
        name: "Samosa",
        price: 40,
        image: "https://imgs.search.brave.com/e9bY3kO40CkB15u4xASg3m0YTgEriXenOWFK62WxA0w/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNzMv/NjM5LzUyMC9zbWFs/bC9ob3QtZnJlc2hs/eS1mcmllZC1zYW1v/c2FzLXJlbGVhc2lu/Zy1hcm9tYXRpYy1z/dGVhbS1pbi1nb2xk/ZW4tbGlnaHQtYS1k/ZWxpY2lvdXMtaGln/aGxpZ2h0LW9mLWlu/ZGlhbi1jdWlzaW5l/LXBob3RvLmpwZw",
        isVeg: true,
        isTrending: false,
        tags: ["Veg", "Street"],
      },
      {
        id:"sg6",
        name: "Tandoori Roti",
        price: 20,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK7quolDCtXmRF-pY5e_7X3Xdk9drvsbmUqdJ9LBPS-YN32K8_5eQPXmj5fObyuTNw1FYn6kwTflYMJAgKossNnsxp1WXV3CWAP-JnM0ey&s=10",
        isVeg: true,
        isTrending: false,
        tags: ["Veg", "Bread"]
      }
    ],
  },
  {
    id: "dragon-wok",
    name: "Dragon Wok",
    cuisine: "Chinese",
    deliveryTime: "25-35 min",
    rating: 4.3,
    image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=400",
    menu: [
      {
        id: "dw1",
        name: "Kung Pao Chicken",
        price: 200,
        image: "https://imgs.search.brave.com/CBE3wL2llEjNMHNcuAa-QQo79I1hhY1IsfqdsT9Zqko/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jYWZl/ZGVsaXRlcy5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMTgv/MDQvS3VuZy1QYW8x/LmpwZw",
        isVeg: false,
        isTrending: true,
        tags: ["Spicy", "Popular"],
      },
      {
        id: "dw2",
        name: "Veg Fried Rice",
        price: 150,
        image: "https://imgs.search.brave.com/j_Cl78ragTFjEpKgRdInjYXwLMAMi24Uk-pjAVIzqZw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMjE4/MDIwNTg0MS9waG90/by9zdGlyLWZyaWVk/LXJpY2Utd2l0aC1t/dXNocm9vbS1hbmQt/dG9mdS1kaXJlY3Rs/eS1hYm92ZS1waG90/by5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9RTJWaDRZbHNT/SjQtVm00ZFN3YVJq/WTloVHVWRE1CMWFu/c3E5QmhxaUI4cz0",
        isVeg: true,
        isTrending: false,
        tags: ["Veg", "Classic"],
      },
      {
        id: "dw3",
        name: "Dim Sum Basket",
        price: 180,
        image: "https://imgs.search.brave.com/lrkbU3wfkpKs9-iWUXA59t13h7t0JpOWpDYuCu0v1n0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjQv/NjE5Lzg3MS9zbWFs/bC9zdGVhbWVkLWRp/bS1zdW0tYmFza2V0/LXBvcmstZHVtcGxp/bmdzLXZlZ2V0YWJs/ZS1idW5zLWJlZWYt/c291cC1nZW5lcmF0/ZWQtYnktYWktZnJl/ZS1waG90by5qcGc",
        isVeg: false,
        isTrending: true,
        tags: ["Steamed", "Popular"],
      },
      {
        id: "dw4",
        name: "Hot & Sour Soup",
        price: 100,
        image: "https://imgs.search.brave.com/vddVLRkAq051CiGGbS6zI2ffEviEgfNYazpiRJiEZnM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9taXNz/aW9uLWZvb2QuY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDIz/LzEyL0NoaW5lc2Ut/SG90LWFuZC1Tb3Vy/LVNvdXAtMTIuanBn",
        isVeg: true,
        isTrending: false,
        tags: ["Veg", "Soup"],
      },
      {
        id: "dw5",
        name: "Chilli Paneer",
        price: 170,
        image: "https://imgs.search.brave.com/65cQbJeVQMjTewZgfbCgCrGzn_QUnBXw85yxuspifDc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/eXVtbXl0dW1teWFh/cnRoaS5jb20vd3At/Y29udGVudC91cGxv/YWRzLzIwMjMvMDYv/Y2hpbGxpLXBhbmVl/ci0xLmpwZWc",
        isVeg: true,
        isTrending: false,
        tags: ["Veg", "Spicy"],
      },
    ],
  },
  {
    id: "mcdonalds",
    name: "McDonald's",
    cuisine: "Fast Food",
    deliveryTime: "20-30 min",
    rating: 4.1,
    image: "https://images.unsplash.com/photo-1552895638-f7fe08d2f7d5?w=400",
    menu: [
      {
        id: "mc1",
        name: "McAloo Tikki",
        price: 89,
        image: "https://imgs.search.brave.com/2gjkxgmLwRyOABOijXhGc4V-Ih94mJ_JNOmO14JtJQw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tY2Rv/bmFsZHNibG9nLmlu/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDIy/LzAzL01jQWxvby10/aWtraTEuanBn",
        isVeg: true,
        isTrending: true,
        tags: ["Veg", "Popular"],
      },
      {
        id: "mc3",
        name: "French Fries",
        price: 60,
        image: "https://imgs.search.brave.com/LRXfGZ24LpJ9A4F3oRuf4nk3xrs-_sEsARq9v03vUac/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzg0Lzc2/LzE5Lzg0NzYxOWVi/NTdkMmU2NTljYzEx/N2ZjNDFjYTE2ODM0/LmpwZw",
        isVeg: true,
        isTrending: false,
        tags: ["Veg", "Sides"],
      },
      {
        id: "mc4",
        name: "McFlurry Oreo",
        price: 99,
        image: "https://imgs.search.brave.com/5wztTKLgECjE-xozbdCm9AWhL6_AC96aHDwjtmfO6rM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzIyL2Vm/L2VjLzIyZWZlYzA0/MTJlZDFlNDIxZmFm/NTQzNzNlMDcxOTcw/LmpwZw",
        isVeg: true,
        isTrending: false,
        tags: ["Veg", "Dessert"],
      },
      {
        id: "mc5",
        name: "Chicken McNuggets",
        price: 179,
        image: "https://imgs.search.brave.com/Y_M6r1ALwQIoS0HsOEsP4uWQtvDxbkI2JCNfRmFZwr4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wcmV2/aWV3LnJlZGQuaXQv/dG8td2hvZXZlci1r/ZWVwcy1wdXR0aW5n/LTUtaW4tbXktNC1w/aWVjZS1jaGlja2Vu/LW1jbnVnZ2V0cy12/MC1qNG9iYmhrNmMx/ZmcxLmpwZz93aWR0/aD02NDAmY3JvcD1z/bWFydCZhdXRvPXdl/YnAmcz01YTFkNzQ1/MDA0YmQ4MjlhMTU2/NTdjMTQzMzlhNmM2/MjRkMWZjYzdh",
        isVeg: false,
        isTrending: false,
        tags: ["Non-Veg", "Snack"],
      },
    ],
  },
  {
    id: "kfc",
    name: "KFC",
    cuisine: "Fast Food",
    deliveryTime: "25-35 min",
    rating: 4.2,
    image: "https://images.unsplash.com/photo-1513639776629-7b61b0ac49cb?w=400",
    menu: [
      {
        id: "kf1",
        name: "Original Fried Chicken",
        price: 199,
        image: "https://imgs.search.brave.com/XBt-8LMMZKRLdJ1TAuFtrH3s3IIxwb7VHC2fzFW9dCc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMTQv/MjE0LzMzNC9zbWFs/bC9kZWxpY2lvdXMt/aG90LWFuZC1jcmlz/cHktZnJpZWQtY2hp/Y2tlbi1tZWF0LWZy/ZWUtcGhvdG8uanBn",
        isVeg: false,
        isTrending: true,
        tags: ["Non-Veg", "Popular"],
      },
      {
        id: "kf2",
        name: "Zinger Burger",
        price: 179,
        image: "https://imgs.search.brave.com/p00WmryZ9QBApUDZVleg-_K-0rmpBUW8mBzNbopfhDY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2ZiLzNi/LzM0L2ZiM2IzNGY0/MjM4YzE5MjNmZGY5/MWM3NTI0YTI2YWM2/LmpwZw",
        isVeg: false,
        isTrending: true,
        tags: ["Non-Veg", "Spicy"],
      },
      {
        id: "kf4",
        name: "Popcorn Chicken",
        price: 79,
        image: "https://imgs.search.brave.com/DvwyMv5mYkpug2XO5xgQe_o-bRKwQYemiL8B8oLcrC8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9teW1v/cm5pbmdtb2NoYS5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MjIvMDEvS0ZDLVN0/eWxlLVBvcGNvcm4t/Q2hpY2tlbi5qcGc",
        isVeg: false,
        isTrending: false,
        tags: ["Non-Veg", "Snack"],
      },
      {
        id: "kf5",
        name: "6pc Chicken Wings",
        price: 129,
        image: "https://imgs.search.brave.com/n4_RgmUu7bhf8khKVK1IBtzco4-lCv-FHvr2Ml3BOtI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Zm9vZGp1bmtpZXVr/LmNvLnVrL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDIwLzA1L0lN/R180NTg0LTU4NXg1/ODUuanBnP3Y9MTU4/OTgxMDU4Ng",
        isVeg: false,
        isTrending: true,
        tags: ["Sides", "Spicy"],
      },
    ],
  },
  {
    id: "dominos",
    name: "Domino's",
    cuisine: "Pizza",
    deliveryTime: "30-45 min",
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400",
    menu: [
      {
        id: "dm1",
        name: "Margherita Pizza",
        price: 199,
        image: "https://imgs.search.brave.com/2xgmpYuTAPjMab_7UJXVTgmblFf6QVOF0ntI7Atr8-g/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dGh1cnNkYXluaWdo/dHBpenphLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyMC8w/NS9tYXJnaGVyaXRh/LXBpenphX2xhbmRz/Y2FwZS1vbi1wZWVs/LTcyMHg1NzYucG5n",
        isVeg: true,
        isTrending: false,
        tags: ["Veg", "Classic"],
      },
      {
        id: "dm2",
        name: "Pepperoni Pizza",
        price: 299,
        image: "https://imgs.search.brave.com/rVMVDzfDpBH4vwWfvdLx1wYRumxFIOZ7SmXuNAuR4uw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjIv/OTk0LzAzNi9zbWFs/bC90aGUtcGVwcGVy/b25pLXBpenphLWFu/ZC1hLXBpZWNlLW9m/LXN0cmVjaGVkLWNo/ZWVzZS1waXp6YS13/aXRoLWFpLWdlbmVy/YXRlZC1mcmVlLXBo/b3RvLmpwZw",
        isVeg: false,
        isTrending: true,
        tags: ["Non-Veg", "Popular"],
      },
      {
        id: "dm3",
        name: "Garlic Bread",
        price: 129,
        image: "https://imgs.search.brave.com/os-OudH9f4h6jFoUXIABTElZ1DFf3gFXomGRv5LcF7E/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9yZWFs/Zm9vZHdob2xlbGlm/ZS5jb20vd3AtY29u/dGVudC91cGxvYWRz/LzIwMjMvMTEvRXNz/ZW50aWFsR2FybGlj/QnJlYWQtMTMuanBn",
        isVeg: true,
        isTrending: false,
        tags: ["Veg", "Sides"],
      },
      {
        id: "dm4",
        name: "Veg Farmhouse Pizza",
        price: 259,
        image: "https://imgs.search.brave.com/YIbbiqZ2AYlamDnjxzqB0TzAjXDn2BXc0f8XXOT5znQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE3/NDM2MTUzNTc4NzEt/ZWIwNGNkNDM0YzZl/P2ZtPWpwZyZxPTYw/Jnc9MzAwMCZpeGxp/Yj1yYi00LjAuMyZp/eGlkPU0zd3hNakEz/ZkRCOE1IeHpaV0Z5/WTJoOE1UQjhmSFps/WnlVeU1IQnBlbnBo/ZkdWdWZEQjhmREI4/Zkh3dw",
        isVeg: true,
        isTrending: true,
        tags: ["Veg", "Popular"],
      },
      {
        id: "dm5",
        name: "Choco Lava Cake",
        price: 99,
        image: "https://imgs.search.brave.com/sueFTG9g1aGURpnlwgwA4tc9Rmu32bOHiBk0uvLxONk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNzMv/MjUxLzU5OS9zbWFs/bC9kZWxpY2lvdXMt/Y2hvY29sYXRlLWxh/dmEtY2FrZS13aXRo/LXZhbmlsbGEtaWNl/LWNyZWFtLWFuZC1m/cmVzaC1yYXNwYmVy/cmllcy1waG90by5q/cGc",
        isVeg: true,
        isTrending: false,
        tags: ["Veg", "Dessert"],
      },
    ],
  },
];

const PROMO_CODES = {
  SAVE20: 0.2,
  FLAT50: 50,
  HUNGRY10: 0.1,
};


const getCartTotal = (cartItems) =>
  cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

const getCartCount = (cartItems) =>
  cartItems.reduce((sum, item) => sum + item.quantity, 0);

const getRestaurantForItem = (itemId) =>
  restaurants.find((r) => r.menu.some((m) => m.id === itemId));

const getRecommendations = (cartItems) => {
  if (cartItems.length === 0) return [];

  const restaurantCount = {};
  cartItems.forEach((item) => {
    const restaurant = getRestaurantForItem(item.id);
    if (restaurant) {
      restaurantCount[restaurant.id] = (restaurantCount[restaurant.id] || 0) + item.quantity;
    }
  });

  const topRestaurantId = Object.entries(restaurantCount).sort(
    (a, b) => b[1] - a[1]
  )[0]?.[0];

  if (!topRestaurantId) return [];

  const topRestaurant = restaurants.find((r) => r.id === topRestaurantId);
  const cartItemIds = new Set(cartItems.map((i) => i.id));

  return topRestaurant.menu
    .filter((item) => !cartItemIds.has(item.id))
    .slice(0, 3)
    .map((item) => ({ ...item, restaurantName: topRestaurant.name }));
};


export default function App() {
  const [cartItems, setCartItems] = useState(() => {
    try {
      const saved = localStorage.getItem("foodhub-cart");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("foodhub-theme") === "dark";
  });
  const [cartOpen, setCartOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [vegFilter, setVegFilter] = useState("all"); // "all" | "veg" | "nonveg"
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [promoCode, setPromoCode] = useState("");
  const [promoApplied, setPromoApplied] = useState(null); // { code, discount }
  const [promoError, setPromoError] = useState("");
  const [orderPlaced, setOrderPlaced] = useState(false);

  useEffect(() => {
    localStorage.setItem("foodhub-cart", JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    localStorage.setItem("foodhub-theme", darkMode ? "dark" : "light");
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  const addToCart = (item, restaurantId) => {
    setCartItems((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { ...item, quantity: 1, restaurantId }];
    });
  };

  const incrementItem = (itemId) => {
    setCartItems((prev) =>
      prev.map((i) => (i.id === itemId ? { ...i, quantity: i.quantity + 1 } : i))
    );
  };

  const decrementItem = (itemId) => {
    setCartItems((prev) => {
      const item = prev.find((i) => i.id === itemId);
      if (item.quantity === 1) return prev.filter((i) => i.id !== itemId);
      return prev.map((i) =>
        i.id === itemId ? { ...i, quantity: i.quantity - 1 } : i
      );
    });
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => prev.filter((i) => i.id !== itemId));
  };

  const clearCart = () => setCartItems([]);

  const applyPromo = () => {
    const code = promoCode.trim().toUpperCase();
    if (!code) return;

    if (PROMO_CODES[code] !== undefined) {
      const discount = PROMO_CODES[code];
      setPromoApplied({ code, discount });
      setPromoError("");
    } else {
      setPromoError("Invalid promo code. Try SAVE20, FLAT50, or HUNGRY10.");
      setPromoApplied(null);
    }
  };

  const removePromo = () => {
    setPromoApplied(null);
    setPromoCode("");
    setPromoError("");
  };

  const handlePlaceOrder = () => {
    setOrderPlaced(true);
    clearCart();
    removePromo();
    setTimeout(() => {
      setOrderPlaced(false);
      setCheckoutOpen(false);
    }, 3000);
  };

  const subtotal = getCartTotal(cartItems);

  const discountAmount = promoApplied
    ? typeof promoApplied.discount === "number" && promoApplied.discount < 1
      ? subtotal * promoApplied.discount
      : promoApplied.discount
    : 0;

  const finalTotal = Math.max(0, subtotal - discountAmount);
  const cartCount = getCartCount(cartItems);
  const recommendations = getRecommendations(cartItems);

  const filteredRestaurants = restaurants
    .map((restaurant) => {
      const query = searchQuery.toLowerCase();

      const restaurantMatches = restaurant.name.toLowerCase().includes(query) ||
        restaurant.cuisine.toLowerCase().includes(query);

      const filteredMenu = restaurant.menu.filter((item) => {
        const nameMatches = item.name.toLowerCase().includes(query);
        const vegMatch =
          vegFilter === "all" ||
          (vegFilter === "veg" && item.isVeg) ||
          (vegFilter === "nonveg" && !item.isVeg);

        return (restaurantMatches || nameMatches) && vegMatch;
      });

      if (filteredMenu.length === 0) return null;
      return { ...restaurant, menu: filteredMenu };
    })
    .filter(Boolean);

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">

        <header className="sticky top-0 z-40 bg-white dark:bg-gray-800 shadow-md">
          <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
            <div className="flex items-center gap-2 shrink-0">
             <span className="font-bold text-xl text-brand">FLAME CRAFT</span>
            </div>

            <div className="flex-1 max-w-xl relative">
              <input
                type="text"
                placeholder="Search restaurants or dishes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-sm border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>

            <div className="flex items-center gap-3">
              <div className="hidden sm:flex gap-1 bg-gray-100 dark:bg-gray-700 rounded-sm p-1">
                {["all", "veg", "nonveg"].map((f) => (
                  <button
                    key={f}
                    onClick={() => setVegFilter(f)}
                    className={`px-3 py-1 rounded-sm text-xs font-medium transition-all ${
                      vegFilter === f
                        ? "bg-brand text-white"
                        : "text-gray-600 dark:text-gray-300"
                    }`}
                  >
                    {f === "all" ? "All" : f === "veg" ? "Veg" : "Non-Veg"}
                  </button>
                ))}
              </div>

              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-lg"
                aria-label="Toggle theme"
              >
                {darkMode ? "☀️" : "🌙"}
              </button>

              <button
                onClick={() => setCartOpen(true)}
                className="relative flex items-center gap-2 bg-brand hover:bg-brand-dark text-white px-4 py-2 rounded-sm font-medium text-sm transition-colors"
              >
                🛒
                <span className="hidden sm:inline">Cart</span>
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-sm flex items-center justify-center font-bold">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </header>

        <main className="max-w-7xl mx-auto px-4 py-8">
          {filteredRestaurants.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-5xl mb-4">🍽️</p>
              <p className="text-xl text-gray-500 dark:text-gray-400">
                No restaurants or dishes found for "{searchQuery}"
              </p>
            </div>
          ) : (
            <MenuGrid
              restaurants={filteredRestaurants}
              cartItems={cartItems}
              onAddToCart={addToCart}
              onIncrement={incrementItem}
              onDecrement={decrementItem}
            />
          )}
        </main>

        <CartSidebar
          isOpen={cartOpen}
          onClose={() => setCartOpen(false)}
          cartItems={cartItems}
          onIncrement={incrementItem}
          onDecrement={decrementItem}
          onRemove={removeFromCart}
          subtotal={subtotal}
          discountAmount={discountAmount}
          finalTotal={finalTotal}
          promoCode={promoCode}
          setPromoCode={setPromoCode}
          promoApplied={promoApplied}
          promoError={promoError}
          onApplyPromo={applyPromo}
          onRemovePromo={removePromo}
          onCheckout={() => { setCartOpen(false); setCheckoutOpen(true); }}
          recommendations={recommendations}
          onAddRecommendation={(item) => {
            const restaurant = restaurants.find((r) =>
              r.menu.some((m) => m.id === item.id)
            );
            if (restaurant) addToCart(item, restaurant.id);
          }}
          darkMode={darkMode}
        />

        {checkoutOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 max-w-sm w-full mx-4 text-center shadow-2xl">
              {orderPlaced ? (
                <>
                  <div className="text-6xl mb-4 animate-bounce">🎉</div>
                  <h2 className="text-2xl font-bold text-green-500 mb-2">Order Placed!</h2>
                  <p className="text-gray-500 dark:text-gray-400">
                    Your food is being prepared. Estimated delivery: 30-40 mins.
                  </p>
                </>
              ) : (
                <>
                  <div className="text-5xl mb-4">🧾</div>
                  <h2 className="text-2xl font-bold dark:text-white mb-1">Order Summary</h2>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mb-6">
                    {cartCount} items · {cartItems.length > 0
                      ? getRestaurantForItem(cartItems[0].id)?.name
                      : ""}
                  </p>

                  <div className="space-y-2 text-left mb-6">
                    <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
                      <span>Subtotal</span>
                      <span>₹{subtotal}</span>
                    </div>
                    {promoApplied && (
                      <div className="flex justify-between text-sm text-green-500">
                        <span>Discount ({promoApplied.code})</span>
                        <span>-₹{discountAmount.toFixed(0)}</span>
                      </div>
                    )}
                    <div className="flex justify-between font-bold text-lg dark:text-white border-t pt-2 dark:border-gray-600">
                      <span>Total</span>
                      <span>₹{finalTotal.toFixed(0)}</span>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <button
                      onClick={() => setCheckoutOpen(false)}
                      className="flex-1 py-2 rounded-sm border border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors text-sm"
                    >
                      Go Back
                    </button>
                    <button
                      onClick={handlePlaceOrder}
                      className="flex-1 py-2 rounded-sm bg-brand hover:bg-orange-600 text-white font-semibold transition-colors text-sm"
                    >
                      Place Order
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}