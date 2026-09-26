# MASTER PROMPT — CLAUDE / FRUITLAB 3D PREMIUM MOBILE STORE

คุณคือ Senior Product Designer + Senior Frontend Engineer + UX Engineer ที่ต้อง “ลงมือทำใน repository จริง” ไม่ใช่แค่เสนอไอเดีย

## Mission
สร้างเว็บไซต์ร้านขายน้ำปั่นผลไม้ กาแฟ และเครื่องดื่มซิกเนเจอร์ชื่อ **FRUITLAB** ให้มีภาพลักษณ์ระดับ premium contemporary / luxury digital storefront และใช้งานจริงบนมือถือเป็นหลัก จากนั้นต้องพร้อม push ขึ้น GitHub และ deploy บน Vercel

อารมณ์ภาพรวม: **3D luxury + editorial + futuristic organic + premium café**
ให้นึกถึงสินค้า lifestyle ราคาแพง, art direction แบบแบรนด์แฟชั่น, วัสดุแก้ว/ของเหลว/โลหะ/แสงที่ดูมีมิติ แต่ยังต้องอ่านง่ายและซื้อของได้เร็ว

## Non-negotiable constraints
- Mobile-first. จอ 360px ต้องใช้งานได้จริงก่อน แล้วค่อยขยาย tablet/desktop
- ภาษา UI หลักเป็นภาษาไทย แต่ชื่อเมนูสามารถมี English branding ได้
- ไม่มี login, register, auth หรือระบบสมาชิก
- ห้ามทำเป็นเว็บ landing page ที่มีแต่ภาพสวย ต้องมี storefront interaction จริง
- ต้องมี menu, category filter, product details, add-to-cart, quantity control, subtotal และ checkout entry point
- อย่าใส่ payment gateway จริงโดยยังไม่มีข้อมูลร้าน ให้ทำ checkout flow แบบพร้อมเชื่อม backend/LINE OA ภายหลัง
- รูปสินค้า “ยังไม่มีของจริง” ตอนนี้ ให้สร้าง visual placeholder ที่ดูแพงและมี depth; โครงสร้างต้องเปลี่ยนไปใช้รูปจริงได้ง่ายจากไฟล์/field เดียว
- อย่าฝังชื่อไฟล์รูปจริงที่ยังไม่มี
- ห้ามใช้ lorem ipsum
- ห้ามทำระบบที่ต้องตั้งค่าซับซ้อนเพื่อเปิด local/dev
- อย่าเพิ่ม dependency ที่ไม่จำเป็น
- ให้ความสำคัญกับ performance บนมือถือและการใช้งานด้วยนิ้ว
- ห้ามทำ animation หนักจนเครื่องกลาง ๆ กระตุก; ใช้ transform/opacity เป็นหลัก
- respect prefers-reduced-motion

## Visual Direction
Palette:
- Near-black / charcoal background
- Warm off-white typography
- Acid lime / soft citrus green as primary accent
- Muted olive/forest secondary tones
- Very subtle glassmorphism

Typography:
- Serif display สำหรับ hero/headlines
- Clean sans-serif สำหรับ UI/body
- headline ใหญ่ มี editorial rhythm
- อย่าใช้ font หนาเต็มหน้าเกินไป

Materials & 3D language:
- translucent glass cup
- layered liquid
- glossy highlights
- soft shadows
- floating fruit spheres/orbs
- subtle ring/orbit geometry
- depth from foreground/midground/background
- lighting เหมือน studio product photography
- หลีกเลี่ยง 3D ที่ดูเหมือนเกมการ์ตูน

## Required page structure
1. Sticky premium navbar
   - brand
   - anchors: เมนู / เรื่องของเรา / ติดต่อ
   - cart count
2. Hero
   - strong brand statement
   - one hero drink rendered in 3D/CSS 3D or lightweight WebGL
   - CTA “เลือกเมนู”
   - secondary CTA เรื่องราวร้าน
   - small trust line
3. Animated ticker / marquee
4. Menu section
   - category pills
   - product cards
   - price
   - short description
   - badge เช่น ขายดี / NEW / Signature
   - add-to-cart
5. Story / brand section
6. Footer with business contact placeholders
7. Cart drawer / sheet
   - list items
   - plus/minus
   - subtotal
   - checkout CTA
8. Toast feedback หลัง add-to-cart

## Product catalog
Seed อย่างน้อย 6 products:
- Mango Velvet — มะม่วงเวลเวท — 89
- Berry Noir — เบอร์รี่ นัวร์ — 99
- Matcha Cloud — มัทฉะคลาวด์ — 109
- Butterscotch Latte — บัตเตอร์สก็อตช์ ลาเต้ — 95
- Black Citrus — แบล็คซิตรัส — 85
- Pineapple Fizz — สับปะรดฟิซซ์ — 79

จัด category: สมูทตี้ / กาแฟ / ผลไม้สด / ซิกเนเจอร์

## Architecture
ใช้ Next.js App Router + React
แยกข้อมูล product ออกจาก UI
แยก reusable components ให้ชัดเจน
แยก data/logic จาก presentation
หากใช้ 3D library ให้โหลดเฉพาะเมื่อจำเป็นและอย่าให้เป็นเหตุที่หน้าเว็บใช้งานไม่ได้
หน้าแรกควรมี fallback ที่ใช้งานได้แม้ WebGL ไม่พร้อม

Recommended structure:
- src/app/
- src/components/
- src/data/
- public/images/
- public/icons/

## Real-world readiness
- Metadata/title/description ต้องเรียบร้อย
- semantic HTML
- keyboard focus
- accessible buttons
- sufficient contrast
- touch targets ~44px หรือมากกว่า
- responsive at 360 / 390 / 430 / 768 / 1024 / 1440
- no horizontal overflow
- no console errors
- no React hydration errors
- image strategy ต้องพร้อมสำหรับรูปจริงในอนาคต
- lazy load non-critical visuals

## Ordering integration point
สร้าง function/module ที่ระบุชัดว่า checkout จะเชื่อมกับอะไรภายหลัง เช่น:
`createOrderPayload(cart)`

payload ควรประกอบด้วย:
- items
- quantities
- subtotal
- customer/contact placeholder
- createdAt

ตอนนี้ checkout อาจแสดง confirmation/toast ว่า “พร้อมเชื่อมระบบสั่งซื้อ” แทนการยิง API จริง

## Product image replacement design
ออกแบบ product model ให้มี field เช่น:
`image: '/images/mango.webp'`

เมื่อยังไม่มีรูปจริง ให้ UI fallback ไปใช้ 3D visual placeholder โดยอัตโนมัติ
เมื่อมีรูปจริงภายหลัง การเพิ่มรูปควรเป็นการอัปโหลดไฟล์ + แก้ field เดียว ไม่ต้องแก้ component หลายไฟล์

## Micro-interactions
- card hover บน desktop
- tap feedback บน mobile
- subtle parallax/float ใน hero
- button press scale เล็กน้อย
- cart count pop
- drawer slide-in
- toast
- category filter transition
อย่าใส่ effect ทุกอย่างพร้อมกันจนรก

## Performance guardrails
- Avoid huge background images
- Avoid autoplay video
- Avoid excessive blur/backdrop-filter on every element
- Avoid blocking render with a large 3D scene
- Keep hero 3D lightweight
- Use CSS transforms where possible
- Respect `prefers-reduced-motion`

## Deliverables
ต้องทำใน repository จริงให้ครบ:
1. working source code
2. README ที่มี local setup + GitHub + Vercel deployment
3. clean component/data structure
4. no auth
5. no fake broken links
6. no missing imports
7. production build must pass

## Validation
รันตามลำดับและแก้ปัญหาจนผ่าน:
- npm install
- npm run build
ถ้ามี lint/typecheck/test script ให้รันด้วย

เปิด dev server แล้วตรวจอย่างน้อย:
- หน้าแรกโหลดได้
- mobile layout
- category filter
- add to cart
- quantity +/-
- subtotal
- cart drawer close/open
- no horizontal scroll
- no console error

## Git/Vercel handoff
อย่าเปลี่ยน repository ให้ต้องใช้ login
อย่าเพิ่ม secret/env ที่ไม่จำเป็น
README ต้องมีคำสั่ง push GitHub และขั้นตอน import repo เข้า Vercel

## How you should work
- ลงมือแก้ไฟล์จริง
- อ่าน repository ก่อนแก้
- preserve working behavior ถ้ามีของเดิม
- อย่าลบ feature ที่ไม่ได้เกี่ยวข้อง
- แก้เป็น incremental commits ถ้าระบบ agent รองรับ
- อย่าหยุดที่ mockup: ต้องเป็นเว็บที่กดใช้งานได้จริง
- เมื่อพบปัญหา build/runtime ให้แก้ทันทีและตรวจซ้ำ
- ห้ามรอให้ user มาแก้ syntax/import เอง

## Definition of Done
โปรเจกต์ถือว่าเสร็จเมื่อ:
- `npm run build` ผ่าน
- หน้าเว็บเปิดได้จริง
- mobile UX ใช้งานด้วยนิ้วได้
- cart flow ทำงาน
- product data แก้จากจุดเดียวได้
- placeholder สามารถเปลี่ยนเป็นรูปจริงภายหลังได้
- ไม่มี auth
- README พร้อม GitHub/Vercel
- visual quality ให้ความรู้สึก premium/3D/luxury ไม่ใช่ template ทั่วไป

เริ่มทำทันทีจาก repository ปัจจุบัน ใช้ judgment ของคุณเพื่อแก้รายละเอียดที่ไม่จำเป็นต้องถามกลับ แต่ห้ามเปลี่ยน mission หลักข้างต้น
