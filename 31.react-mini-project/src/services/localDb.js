import p1Img from '../assets/product-1 (1).jpg';
import p2Img from '../assets/product-2 (1).jpg';
import p3Img from '../assets/product-3 (1).jpg';
import p4Img from '../assets/product-4 (1).jpg';
import p5Img from '../assets/product-5 (1).jpg';
import p6Img from '../assets/product-6 (1).jpg';
import p7Img from '../assets/product-7 (1).jpg';
import p8Img from '../assets/product-8 (1).jpg';

const KEYS = {
  products: 'vf_products',
  blogs: 'vf_blogs',
  cart: 'vf_cart',
  wishlist: 'vf_wishlist',
};

const seedProducts = [
  { id: 'p1', name: 'Bell Pepper', price: 5.0, image: p1Img, description: 'Fresh bell peppers' },
  { id: 'p2', name: 'Strawberry', price: 8.0, image: p2Img, description: 'Sweet strawberries' },
  { id: 'p3', name: 'Green Beans', price: 6.0, image: p3Img, description: 'Crisp green beans' },
  { id: 'p4', name: 'Purple Cabbage', price: 7.0, image: p4Img, description: 'Organic cabbage' },
  { id: 'p5', name: 'Tomato', price: 3.0, image: p5Img, description: 'Juicy tomatoes' },
  { id: 'p6', name: 'Broccoli', price: 4.0, image: p6Img, description: 'Fresh broccoli' },
  { id: 'p7', name: 'Carrots', price: 4.5, image: p7Img, description: 'Crunchy carrots' },
  { id: 'p8', name: 'Fruit Juice', price: 9.0, image: p8Img, description: 'Healthy fruit juice' },
];

const seedBlogs = [
  { id: 'b1', title: 'Why Organic?', content: 'Organic foods are grown without...' },
  { id: 'b2', title: 'Seasonal Fruits', content: 'Choosing seasonal fruits brings...' },
];

export function initDb() {
  if (!localStorage.getItem(KEYS.products)) {
    localStorage.setItem(KEYS.products, JSON.stringify(seedProducts));
  }
  if (!localStorage.getItem(KEYS.blogs)) {
    localStorage.setItem(KEYS.blogs, JSON.stringify(seedBlogs));
  }
  if (!localStorage.getItem(KEYS.cart)) {
    localStorage.setItem(KEYS.cart, JSON.stringify([]));
  }
  if (!localStorage.getItem(KEYS.wishlist)) {
    localStorage.setItem(KEYS.wishlist, JSON.stringify([]));
  }
}

export function readProducts() {
  return JSON.parse(localStorage.getItem(KEYS.products) || '[]');
}
export function saveProducts(items) {
  localStorage.setItem(KEYS.products, JSON.stringify(items));
}

export function readBlogs() {
  return JSON.parse(localStorage.getItem(KEYS.blogs) || '[]');
}
export function saveBlogs(items) {
  localStorage.setItem(KEYS.blogs, JSON.stringify(items));
}

export function readCart() {
  return JSON.parse(localStorage.getItem(KEYS.cart) || '[]');
}
export function saveCart(items) {
  localStorage.setItem(KEYS.cart, JSON.stringify(items));
}

export function readWishlist() {
  return JSON.parse(localStorage.getItem(KEYS.wishlist) || '[]');
}
export function saveWishlist(items) {
  localStorage.setItem(KEYS.wishlist, JSON.stringify(items));
}

export function uid(prefix) {
  return `${prefix}_${Math.random().toString(36).slice(2, 9)}`;
}
