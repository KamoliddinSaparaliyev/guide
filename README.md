# Loyiha Haqida

Har qanday kompaniya bo’lsin, unda turli xil ichki qoidalar mavjud. Bu qoidalarga ishchilar amal qilishlari shart. Bazi qoidalar faqat, ma’lum bir guruhga kiruvchi ishchilar uchun mo’ljallangan bo’lishi mumkin. Misol uchun “Imtihon natijalarini o’quv bo’limiga yuborish tartibi” yoki “Imtihon savollarini o’quv bo’limidan tasdiqlatib olish tartibi”, “Markazda tashrif buyurtgan mehmonlarni kutib olish tartibi”, va hokazo. Yuqoridagi birinchi va ikkinchi qoidalar faqat o’qituvchilar uchun bo’lsa, ohirgini administratorlarga tegishli.

Muammo shundagi, bunday tartib qoidalarga qanchalar amal qilinayapti yoki qilinmayapti, buni nazorat qilish oson emas. Bundan tashqari, hamma qonun-qoidalarni markazlashgan xolda saqlash va agarda biror qoida o’zgarsa boshqalarni bu haqda ogohlantirish oson emas. Yoki bu qonun qoidalarga amal qilmayotganlarni qonun-qoidalar bilan qayta tanishtrish, bunga ketadigan vaqt.

Yuqoridagi holatdan tashqari, yana bir muammo bor. Kompaniyaga yangi ishchi kelganida, uni qonun-qoidalar bilan to’liq tanishtirib chiqiladi. Bu jarayon “Onboarding” deyiladi. Qonun-qoidalarni tushuntirguncha, masul kishidan ancha mashaqqat talab qilinadi.

Biz yasamoqchi bo’lgan loyiha, mana shu muammoga yechim sifatida qilinadi. Agarda loyiha qonun-qoidaga amal qilinishini nazorat qiladi deb o’ylasangiz xato o’ylayapsiz. Loyiha kompaniyadagi qonun-qoidalarni bir joyda jamlovchi va qaysidir hodim ular bilan tanishib chiqishi lozim bo’lsa, ularga yordam beruvchi platformadir.

## User Modeli

### User - Loyiha Foydalanuvchilari

Loyihada 2 turdagi foydalanuvchilar bo’ladi.

- “employee” - Bu kompaniyadagi ishchi. Najot Ta’lim misolida, usto'zlar, yordamchi ustozlar, administratorlar, umumiy holatda kompaniya ichki qonun-qoidalarga amal qilishi kerak bo’lgan har qanday hodim, mazkur roleda deb hisoblanadi.

- “admin” - Bu roledagi hodim ham aslida kompaniya vakili, lekin u o’zi qonun-qoidalarga amal qilibgina qolmay, balki boshqalarning ham qonun-qoidalarga amal qilib borishini nazorat qilib boradi. Najot Ta’lim misolida “Teacher Support” profilidagi hodim bu vazifani bajarishi mumkin.

User modelida quidagi maydonlar mavjud:

- `id` - foydalanuvchining unikal maydoni

- `first_name` - foydalanuvchining ismi

- `last_name` - foydalanuvchining familiyasi

- `age` - foydalanuvchining yoshi

- `role` - foydalanuvchi qaysi rolda ekanligi

- `username` - foydalanuvchining tizimdagi logini

- `password` - foydalanuvchining paroli

# Guide Modeli

Guide modeli, kompaniyadagi qonun-qoida va tartiblarni qanday ishlashini haqida ma’lumotlarni o’zida saqlovchi modeldir.

## 1-misol: Oylik Maoshni Sir Saqlash Bo’yicha Tartib

Sizning oylik maoshingiz, kompaniya va siz o’rtangizda qolishi kerak. Bir xil darajadagi hodim bo’lishlariga qaramasdan, ma’lum sabablarga ko’ra shartnomada turli xil moashga kelishilgan bo’lishi mumkin. Moash haqidagi ma’lumotlarni oshkor etish, hodimlar o’rtasida tushunmovchiliklarga olib kelishi mumkin. Bu esa o’z navbatida nosog’lom ish muhitini yaratadi.

## 2-misol: O’qituvchi va Yordamchi O’qituvchilarning Dars Qoldirish Tartibi

Agar ma’lum sabablarga ko’ra dars qoldirishga majbur bo’lsangiz, birinchi o’rinda o’rningizga dars o’tib berish uchun o’qituvchi topishingiz kerak. Buni yo’nalishingiz bo’yicha guruhdagi boshqa o’qituvchilardan so’rashingiz mumkin. Bu ishni dars qoldiradigan kundan uch kun oldin qidirishingiz kerak. Agar o’qituvchi topilsa, o’sha kun uchun maosh o’tib o’rningizga o’tib bergan ustozga yoziladi. Agar o’qituvchi topilmasa, unda o’quvchilar bilan kelishib, qoldirilgan darsni boshqa sanaga ko’chirish kerak bo’ladi, va uni ikki hafta ichida o’tib berish kerak. Favqulotda vaziyatlarda, o’qituvchilarni qo’llab quvvatlash bo’yicha hodimga bog’laning.

Guide modelida quidagi maydonlar mavjud:

- `id` - guideni tanib olish uchun unikal maydon

- `title` - guideni sarlavhasi

- `content` - guideni to’liq mazmuni

# UserGuide Modeli

UserGuide modeli, foydalanuvchi va guide modellari orasidagi bog’lanishni ifodalovchi modeldir. Bu bog’lanish, foydalanuvchining guide ni o’qib, uni bilan tanishib chiqishi kerakligini bildiradi. Foydalanuvchi guide bilan tanishib chiqqandan so’ng, UserGuide ni "tanishib chiqdim" deb belgilab qo’ya oladi.

## UserGuide modelida quidagi maydonlar mavjud

- `id` - Bu user guide modelining unikal maydoni

- `guide_id` - Tanishib chiqilishi kerak bo’lgan guide IDsi.

- `user_id` - Qaysi foydalanuvchi tanishib chiqishi kerak ekanligi.

- `completed` - Guide tanishib chiqildimi yoki yo’qmi.
