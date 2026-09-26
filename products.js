// Product & category data — kept separate from UI components.
// To swap in a real product photo later: drop the file under
// public/images/ and set this product's `image` field to that path
// (e.g. '/images/mango.webp'). ProductVisual reads only this field —
// no component ever hard-codes a filename — so when `image` is null
// it renders the CSS 3D placeholder, and the moment a path is set it
// renders the real photo via next/image automatically.

export const categories = [
  { id: 'all', label: 'ทั้งหมด' },
  { id: 'smoothie', label: 'สมูทตี้' },
  { id: 'coffee', label: 'กาแฟ' },
  { id: 'fresh', label: 'ผลไม้สด' },
  { id: 'signature', label: 'ซิกเนเจอร์' },
];

export const products = [
  {
    id: 'mango',
    name: 'Mango Velvet',
    thai: 'มะม่วงเวลเวท',
    price: 89,
    category: 'smoothie',
    tone: 'mango',
    badge: 'ขายดี',
    description: 'มะม่วงหอมหวาน เนื้อเนียน ละมุนแบบไอศกรีม',
    image: null, // → '/images/mango.webp'
  },
  {
    id: 'berry',
    name: 'Berry Noir',
    thai: 'เบอร์รี่ นัวร์',
    price: 99,
    category: 'smoothie',
    tone: 'berry',
    badge: 'NEW',
    description: 'เบอร์รี่เข้มข้น เปรี้ยวหวานสดชื่น กลิ่นหอมชัด',
    image: null, // → '/images/berry.webp'
  },
  {
    id: 'matcha',
    name: 'Matcha Cloud',
    thai: 'มัทฉะคลาวด์',
    price: 109,
    category: 'signature',
    tone: 'matcha',
    badge: 'Signature',
    description: 'มัทฉะเข้ม หอมละมุน พร้อมโฟมนมบางเบา',
    image: null, // → '/images/matcha.webp'
  },
  {
    id: 'latte',
    name: 'Butterscotch Latte',
    thai: 'บัตเตอร์สก็อตช์ ลาเต้',
    price: 95,
    category: 'coffee',
    tone: 'latte',
    badge: 'ยอดนิยม',
    description: 'เอสเปรสโซ่คั่วหอม นมเนียน และซอสบัตเตอร์สก็อตช์',
    image: null, // → '/images/latte.webp'
  },
  {
    id: 'black',
    name: 'Black Citrus',
    thai: 'แบล็คซิตรัส',
    price: 85,
    category: 'coffee',
    tone: 'black',
    badge: 'สดชื่น',
    description: 'กาแฟดำเย็นกับซิตรัส หอมคม ดื่มง่าย',
    image: null, // → '/images/black-citrus.webp'
  },
  {
    id: 'pineapple',
    name: 'Pineapple Fizz',
    thai: 'สับปะรดฟิซซ์',
    price: 79,
    category: 'fresh',
    tone: 'pineapple',
    badge: 'สดใหม่',
    description: 'สับปะรดสด เปรี้ยวหวาน พร้อมฟองซ่าบางๆ',
    image: null, // → '/images/pineapple.webp'
  },
];
