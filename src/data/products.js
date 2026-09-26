// Product & category data — kept separate from UI components.
// To swap in a real product photo later, just add an `image` path
// (e.g. '/images/mango.webp') under public/images and the product
// card will use it automatically instead of the CSS 3D placeholder.

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
    image: null, // e.g. '/images/mango.webp' once real photography is ready
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
    image: null,
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
    image: null,
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
    image: null,
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
    image: null,
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
    image: null,
  },
];
