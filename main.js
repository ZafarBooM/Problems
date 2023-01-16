// ---- IF ELSE FOR ----

// 1. A butun son berilgan. Jumlani rostlikka tekshiring: A son musbat
// let a = +prompt("A ni kiriting");
// if(a >= 0){
//     document.write(a >= 0);
// }else{
//     document.write(a > 0);
// }

// 2. A butun son berilgan. Jumlani rostlikka tekshiring: A toq son

// let a = +prompt("A ni kiriting");
// if(a < 0){
//     document.write(a < 0);
// }else{
//     document.write(a <= 0);
// }

// 3. A butun son berilgan. Jumlani rostlikka tekshiring: A juft son

// let a = +prompt("A ni kiriting");
// if(a/2 === 1){
//     document.write("Bu juft son");
// }else{
//     document.write("Bu toq son");
// }

// 4. Ikkita butun son berilgan. Jumlani rostlikka tekshiring. M-s a > 0 && b > 0

// let a=+prompt("A ni kiriting"), b=+prompt("B ni kiriting");

// if(a>0 && b>0){
//     document.write("Ikkala son ham musbat");
// }else if(a > 0 && b < 0 ){
//     document.write("Sonlarning biri manfiy");
// }else if(a < 0 && b >0){
//     document.write("Sonlarning biri manfiy");
// }else{
//     document.write("Ikkala son ham manfiy");
// }


// 5. 3 ta son berilgan a,b,c. a bdan katta b c dan katta rostlikka tekshiring 

// let a = +prompt("A ni kiriting"), b = +prompt("B ni kiriting"), c = +prompt("C ni kiriting");

// if(a > b && b > c && a > c){
//     document.write("Javobingiz to'g'ri");
// }else{
//     document.write("Siz xato javob berdingiz")
// }

// 6. a, b, c, son berilgan. b son a va c sonlarni orasida yotadi.

// let a = +prompt("A ni kiriting"), b = +prompt("B ni kiriting"), c = +prompt("C ni kiriting");
// if(b > a && b < c){
//     document.write("B son A va C sonlar o'rtasida yotadi")
// }else{
//     document.write("Xato")
// }


// 7. a, b sonlar berilgan sonlarni toq songa tekshiring.

// let a = +prompt("A ni kiriting"),
// b = +prompt("B sonni kiriting");
// if(a%2 === 1 && b%2 === 1){
//     document.write("Har ikkala son toq son");
// }else if(a%2 != 1 && b%2 === 1){
//     document.write("Sonlarnning biri toq son")
// }else if(a%2 === 1 && b%2 != 1){
//     document.write("Sonlarning biri toq son")
// }else{
//     document.write("Sonlar toq emas")
// }



// 8. a,b,c,d sonlar berilgan barchasi musbat

// let a = +prompt("A ni kiriting"),
// b = +prompt("B ni kiriting"),
// c = +prompt("C ni kiriting"),
// d = +prompt("D ni kiriting");

// if(a >= 0 && b >= 0 && c >= 0 && d >=0){
//     alert("Bu sonlar musbat");
// }else if(a <= 0 || b <=0 || c <= 0 || d <= 0){
//     alert("Bu sonlar musbat emas");
// }
// else{
//     alert("Bu sonlar musbat ham manfiy ham emas");
// }


//  9. a,b,c sonlar berilgan kamida ikkitasi musbat berilgan

// let a = +prompt("A ni kiriting"),
//     b = +prompt("B ni kiriting"),
//     c = +prompt("C ni kiriting")
//     if((a >= 0 || b>=0 && c>=0) || (a >= 0 && b >= 0 || c>=0 ) || (a >= 0 || c >= 0 && b >= 0)){
//         alert("Sonlarning kamida 2tasi musbat");
//     }else{
//         alert("Sonlarning kamida 2tasi musbat bo'lishi shart")
//     }

// 10. hafta kunlari berilgan raqamga qarab hafta kunlarini nomini chiqaring

// let a = +prompt("Hafta kunini kiriting");

// if(a === 1){
//     alert("Dushanba")
// }else if(a === 2){
//     alert("Seshanba")
// }else if(a === 3){
//     alert("Chorshanba")
// }else if(a === 4){
//     alert("Payshanba")
// }else if(a === 5){
//     alert("Juma")
// }else if(a === 6){
//     alert("Shanba")
// }else if(a === 7){
//     alert("Yakshanba")
// }else{
//     alert("Bunday hafta kuni yo'q")
// }

// 11. Telefon nomer kodi orqali qaysi kompaniya ekanligini tekshiring

// let a = +prompt("O'zbekistondagi kompanya telefon nomer kodni kiriting");
// if(a === 33){
//     alert("Humans");
// }else if(a === 65){
//     alert("Uy telefoni")
// }
// else if(a === 77){
//     alert("UzMobile");
// }else if(a === 88){
//     alert("UMS")
// }else if(a === 90){
//     alert("Beeline")
// }else if(a === 91){
//     alert("Beeline")
// }else if(a === 93){
//     alert("Ucell")
// }else if(a === 94){
//     alert("Ucell")
// }else if(a === 95){
//     alert("Perfectum")
// }else if(a === 97){
//     alert("UMS")
// }else if(a === 99){
//     alert("UzMobile")
// }else{
//     alert("Bunday telefon kodi mavjud emas")
// }


// 12. Butun son berilgan agar son musbat bo'lsa unda sonni bittaga oshiring aks xolda 1taga kamaytiring

// let x = +prompt("Sonni kiriting");
// if(x >= 0){
//     alert(++x);
// }else{
//     alert(--x);
// }

// 13. Butun son berilgan agar son musbat bo'lsa sonni 3 ga oshiring manfiy bo'lsa unda 2ga kamaytiring

// let x = +prompt("Sonni kiriting");
// if(x >= 0){
//     alert(x += 3);
// }else if(x <= 0){
//     alert(x -= 2);
// }


// 14. Ikkita butun son berilgan kattasin aniqlovchi dastur tuzing

// let a = +prompt("Birinchi sonni kiriting"),
// b = +prompt("Ikkinchi sinni kiriting");

// if(a > b){
//     alert(`Sonlarning kattasi ${a}`);
// }if(a < b){
//     alert(`Sonlarning kattasi ${b}`);
// }else{
//     alert("Bu sonlar tengdir")
// }


// 15. 3 ta butun son berilgan eng kattasini aniqlovchi dastur tuzing

// let a = +prompt("Birinchi sonni kiriting"),
//     b = +prompt("Ikkinchi sinni kiriting"),
//     c = +prompt("Uchinchi sinni kiriting");

// if (a > b && a > c) {
//     console.log(`Sonlarning kattasi ${a}`);
// } if (a < b && b > c) {
//     console.log(`Sonlarning kattasi ${b}`);
// } else if (a < c && b < c) {
//     console.log(`Sonlarning kattasi ${c}`);
// }
// else if(a = b = c){
//     console.log("Bu sonlar tengdir");
// } 


// 16. 3 ta son berilgan eng kichikin aniqlovchi dastur tuzing

// let a = +prompt("Birinchi sonni kiriting"),
//     b = +prompt("Ikkinchi sinni kiriting"),
//     c = +prompt("Uchinchi sinni kiriting");


// if (a < b && a < c ) {
//     console.log(`Sonlarning kichigi ${a}`);
// }else if (a > b && c > b) {
//     console.log(`Sonlarning kichigi ${b}`);
// }else if (a > c && b > c) {
//     console.log(`Sonlarning kichigi ${c}`);
// }else if(a == b && b == c && a == c){
//     console.log("Bu sonlar tengdir");
// } 

// 17 - misol DOM orqali html da ishlangan

// 18. Bahoga qarab stependiyani aniqlovchi dastur tuzing
// let baho = +prompt("Bahoni kiriting")
//    const stipendiya = function(){
//         if(baho == 5){
//             console.log("Sizning stipendiyangiz 500 ming so\'m")
//         }else if(baho == 4){
//             console.log("Sizning stipendiyangiz 400 ming so\'m");
//         }else if(baho == 3){
//             console.log("Sizning stipendiyangiz 300 ming so\'m");
//         }else{
//             console.log("Sizda stipendiya mavjud emas");
//         }
//     }
//     stipendiya();


// 19. Butun son berilgan shu songa qarab toq musbat, toq manfiy, juft musbat, juft manfiy deb chiqaruvchi dastur tuzing

// let son = +prompt("Butun son kiriting");

// const add = function(){
//     if(son >= 0 && son % 2 == 0){
//         console.log("Bu son juft musbat");
//     } else if(son >= 0 && son % 2 == 1){
//         console.log("Bu son toq musbat");
//     } else if(son < 0 && son % 2 == 0){
//         console.log("Bu son juft manfiy");
//     } else if(son < 0 && son % 2 == 1){
//         console.log("Bu son toq manfiy");
//     }else{
//         console.log("Bu son butun son emas");
//     }
// }
// add();

// 20. Yilga qarab yoshni aniqlovchi dastur tuzing

// const age = function(birthYear){
//     const date = new Date();
//     year = date.getFullYear();
//     console.log(year-birthYear);

// }
// age(+prompt("Tug\'ilgan yilingizni kiriting"));


// 21. 3 ta butun son berilgan jumlani rostlikkar tekshiring. A <= B <= C

// const number = function(a, b, c){
//     if(a <= b && b <= c){
//         console.log(a <= b && b <= c)
//     }else{
//         console.log("Xato");
//     }
// }
// number(+prompt("A ni kiriting"), +prompt("B ni kiriting"), +prompt("C ni kiriting"));


// 22. ikki butun son berilgan ikki sondan faqat 1tasi toq son hisoblanadi
// const number = function(a, b){
//     if((a%2 == 1 && b%2 == 0) || (a%2 == 0 && b%2 == 1)){
//         console.log("Shartni qanoatlantiradi!");
//     }else{
//         console.log("Shartni qanoatlantirmaydi!");
//     }
// }
// number(+prompt("A ni kiriting"), +prompt("B ni kiriting"));


// 23. a,b,c sonlar berilgan har biri musbat son

// const number = function(a, b, c){
//     if(a >= 0 && b >= 0 && c >= 0) {
//         console.log("Shartni qanoatlantiradi!");
//     }else{
//         console.log("Shartni qanoatlantirmaydi!");
//     }
// }
// number(+prompt("A ni kiriting"), +prompt("B ni kiriting"), +prompt("C ni kiriting"));

// 24. a,b,c sonlardan biri musbat son

// const number = function(a, b, c){
//     if((a >= 0 && b <= 0 && c <= 0) || (a <= 0 && b >= 0 && c <= 0) || a <= 0 && b <= 0 && c >= 0) {
//         console.log("Shartni qanoatlantiradi!");
//     }else{
//         console.log("Shartni qanoatlantirmaydi!");
//     }
// }
// number(+prompt("A ni kiriting"), +prompt("B ni kiriting"), +prompt("C ni kiriting"));


// 25. 3 xonali son berilgan har bir raqamlari har xil


// const uchson = function (a) {
//     x = Math.floor(a / 100);
//     y = Math.floor(a / 10) - (x * 10);
//     z = a % 10;
//     if (a <= 999 && x !== y && y !== z) {

//         console.log(`Sonning raqamlari bir-biriga teng emas`);
//     } else {
//         console.log("Bu sonning raqamlari teng");
//     }
// }
// uchson(+prompt("Sonni kiriting"));


// 26. 3 xonali son berilgan raqamlari ketma ket o'sib boruvchi joylashgan

// const number = function (son) {
//     x = Math.floor(son / 100);
//     y = Math.floor(son / 10) - (x * 10);
//     z = son % 10;
//     if(son <= 999 && y == x + 1 && z == y + 1 ){
//         console.log("Sonlar ketma-ketligi to'g'ri");
//     }else{
//         console.log("Sonlar ketma-ketligi xato");
//     }
// }
// number(+prompt("Sonni kiriting"));


// 27. Kompyuter nomiga qarab kompyuter summasini chiqaruvchi dastur yarating

// const computer = function(){
//     let result = prompt("Write the computer name in capital letters: ");
//     let compName = result.toUpperCase(); 
//     if(compName == "HP"){
//         console.log(`${compName} cost: 800$`);
//     }else if(compName == "LENOVO"){
//         console.log(`${compName} cost: 900$`);
//     }else if(compName == "ASUS"){
//         console.log(`${compName} cost: 1500$`);
//     }else if(compName == "MACBOOK"){
//         console.log(`${compName} cost: 2000$`);
//     }else{
//         console.log(`We don't have such a computer or you didn't enter the computer name in the specified order`);
//     }
// }
// computer();

// 28. Sonlar berilgan shu sonlar ichidan faqat murakkab sonlarni chiqaruvchi dastur tuzing (for)!

// 29. k va n butun son berilgan. K ni n marta chiqaruvchi dastur tuzing

// let k = +prompt("Son ni kiriting"),
// n = +prompt("Son necha marta takrorlansin");
//  for(let i = 1; i<=n; i++){
//     console.log(k*(1**n));
//  }

// 30. a, b sonlar beilgan. A b dan katta a va b orasidagi butun sonlarni chiqaruvchi dastur tuzing. A va B ni ozi ham chiqsin

// let  a = +prompt("A ni kiriting"),
// b = +prompt("B ni kiriting");
// if(a > b){
//     for(let i = b; a >= i; i++){
//         console.log(i);
// }
// }else{
//     console.log("A B dan katta emas");
// }


// 31. a,b sonlar berilgan a b dan katta a va b orasidagi barcha butun sonlarni kamayish tartibida chiqaring a va b kirmasin

// let  a = Math.floor(+prompt("A ni kiriting")),
// b = Math.floor(+prompt("B ni kiriting"));
// if(a > b){
//         for(let j = b+1; j < a ; --j){
//                 console.log(j);
// }
// }else if(a < b || a == b){
//     console.log("A B dan katta emas");
// }

// 32. 1kg konfet 10000so'm berilgan. 1 kgdan 10 kggacha barchasini narxini chiqaruvchi dastur tuzing

// let konfetCost = 10000;
// for(let i = 1; i <= 9; i++){
//     console.log(`${i} kg konfet narxi ${i * konfetCost} so'm `);
// }


// 33. 1kg konfet 10000so'm. 0,1 kg dan 1 kg gacha bo'lgan konfet narxin toping

// let konfetCost = 10000;
// for(let i = 1; i <= 10; i++){
//     console.log(`${i/10} kg konfet narxi ${i/10 * konfetCost} so'm `);
// }

// 34. 1kg konfet 10000so'm. 1,2kg, 1,4, 1,6, 1,8, 2kg konfetlarni narxini toping

// let konfetCost = 10000;
// for (let i = 1.2; i <= 2; i = i + 0.2) {
//     console.log(`${Math.round(i)} kg konfet narxi ${Math.round(i * konfetCost)}`)
// }

// 35. a,b sonlar berilgan. A dan b gacha barcha butun sonlarni yig'indisin topuvchi dastur yozing

// let a = +prompt("Sonning boshlanish ni kiriting"),
// b = +prompt("Sonning tugash chegarasini ko'rsating"),
// z = 0;
// if(b > a && a%1 == 0 && a%1 == 0){
//    for(i = a + 1; i < b; i++){
//     z += i;
//    }
//    console.log(z);
// }else{
//     console.log("Sonning boshlanish nuqtasi va tugash nuqtasidan katta yoki kiritilgan sonlar butun son emas");
// }

// 36. a,b sonlar berilgan. A dan b gacha barcha butun sonlarni ko'paytmasin topuvchi dastur yozing

// let a = +prompt("Sonning boshlanish ni kiriting"),
// b = +prompt("Sonning tugash chegarasini ko'rsating"),
// z = 1;
// if(b > a && a%1 == 0 && a%1 == 0){
//    for(i = a + 1; i < b; i++){
//     z *= i;
//     console.log(i);
//    }
//    console.log(z);
// }else{
//     console.log("Sonning boshlanish nuqtasi va tugash nuqtasidan katta yoki kiritilgan sonlar butun son emas");
// }

// 37. a,b sonlar berilgan a dan b gacha bo'lgan sonlarni kvadratlarini yig'indisin topuvchi dastur toping

// let a = +prompt("Sonning boshlanish ni kiriting"),
// b = +prompt("Sonning tugash chegarasini ko'rsating"),
// z = 0;
// if(b > a && a%1 == 0 && a%1 == 0){
//    for(i = a + 1; i < b; i++){
//     z += i*i;
//    }
//    console.log(z);
// }else{
//     console.log("Sonning boshlanish nuqtasi va tugash nuqtasidan katta yoki kiritilgan sonlar butun son emas");
// }


// 38. n soni berilgan quydagi yig'indini hisoblang. S = 1/1 + 1/2 + …. + 1/n

// let n = +prompt("N ni kiriting"),
// S = 0;
// for (i = 1; i <= n; i++){
//     S += 1/i;
// }
//  console.log(S);

// 39. n soni berilgan shu soni ichidan toqlarin ko'ruvchi dastur yozing

// let n = +prompt("Son chegarasini kiriting");
// for(i = 1; i <= n; i++){
//     if(i%2 == 1){
//         console.log(i);
//     }else{
//         console.log("False");
//     }
// }

// 40. n soni berilgan shu sonlarni ichidan juftlarini koruvchi dastur yozing

// let n = +prompt("Son chegarasini kiriting");
// for(i = 1; i <= n; i++){
//     if(i%2 == 0){
//         console.log(i);
//     }else{
//         console.log("False");
//     }
// }

// 41. 28-misol bilan bir xil

// 42. n soni berilgan shu sonlarni ichidan juft va toq sonlarni kvadratlarini chiqaring


// let n = +prompt("N ni kiriting"),
// toqYigindi = 0,
// juftYigindi = 0;

// for(i = 1; i <= n; i++){
//     if(i%2 == 1){
//         toqYigindi += i*i;
//     }else if(i%2 == 0){
//         juftYigindi += i*i
//     }
// }
// console.log(`Toq sonlar kvadrati yig'indisi ${toqYigindi} ga teng`);
// console.log(`Juft sonlar kvadrati yig'indisi ${juftYigindi} ga teng`);

// 43. n son berilgan n sonidan kamayish tartibida sonlar chiqarilsin

// let n = +prompt("N ni kiriting");

// for (let i = n; i > 0; --i) {
//     console.log(i);
// }


// 44. n son berilgan 0 va n gacha sonlar orasida 5 ga karralisini tashlab o'tib ketuvchi dastur tuzing

// let n = +prompt("Son chegarasini kiriting");
// for(i = 1; i <= n; i++){
//     if(i%5 === 0){
//         continue;
//     }
//    console.log(i);

// }


// 45. n butun son berilgan ngacha butun sonlarni ko'paytmasini topuvchi dastur tuzing

// let n = +prompt("Son chegarasini kiriting"),
// kopaytma = 1;
// if(n%1 === 0){

// for(i = 1; i <=n; i++){
//     kopaytma *= i
// }
// console.log(kopaytma);

// }


// 46. n butun son berilgan 1 sikldan foydalanib quydagi yigindini hisoblovchi dastur tuzing. 1!+2!+..+n!


// let n = +prompt("Faktarial chegarasini kiriting"),
//     kopaytma = 1,
//     yigindi = 0;
// for (i = 1; i <= n; i++) {
//     kopaytma *= i 
//     yigindi += kopaytma 
// }
// console.log(yigindi);

// 47. n butun son va x haqiqiy sonlar berilgan (n>0) Quydagi yig'indi hisoblang.1+x+x2/2!+x3/3!+..+xn/n!

    // let n = +prompt("N ni kiriting"),
    // x = +prompt("X ni kiriting"),
    // kopaytma = 1,
    // yigindi = 0;

    // if(n > 0){
    //     for(i = 0; i <= n; i++){
    //         kopaytma *= i
    //         // yigindi += kopaytma 
    //     }
    //     c = (x**i)/kopaytma
    //     console.log(c);
    // }else{
    //     console.log("N > 0 dan bo'lishi shart");
    // }



// 48. n va x sonlar berilgan 0 dan n gacha sonlar orasida x ga bo'linadigan sonlarni topuvchi dastur tuzing

// let n = +prompt("N ni kiriting"),
//     x = +prompt("X ni kiriting");

// for (i = 0; i <= n; i++) {
//     if (i % x == 0) {
//         console.log(i);
//     }

// }

// 49. n va x sonlar berilgan quydagi yigindini topuvchi dastur tuzing. 1(1,2,3…x) + 2(1,2,3..x) + .. + n(1,2,3,..x)

// Masala xato berilgan









// ---- DATA TYPES ----


// 1. Uzunligi L berilgan Undagi to'liq metrlar sonini aniqlovchi progrramm tuzing!

// let L = +prompt("Uzunlikni sm da kiriting");
// console.log(L/100 + " m");


// 2. Og'irligi M kg da berilgan Uning to'liq tonnalar sonini aniqlang. 1t = 1000kg

// let M = +prompt("Og'irlikni kg da kiriting!");

// console.log(M/1000 + " t");


// 3. A va B musbat sonlar (A > B a b dan katta) A kesmada B kesmani necha marta joylashtirish mumkin!

// let a = +prompt("A ni kiriting \nA B dan katta bo'lishi shart"),
//  b = +prompt("A ni kiriting");
//  if(a > b){
//     console.log(`${a} o'lchamli kesmada ${b} o'lchamli kesma ${a/b} marta joylashgan`);
//  }else{
//     console.log("A B dan katta emas");
//  }

// 4 5 6. Ikki xonali son berilgan uning o'nliklar xonasidagi va birliklar xonasida raqamini aniqlang, uning raqamlar yig'indisini, raqamlar ko'paytmasini topuvchi programma tuzing!!

// !!!!! 4 5 6 -misollar bittada bajarilgan !!!!!

// let ikkiSon = +prompt("Ikki xonali son kiriting"),
//     onlik = 0,
//     birlik = 0;
// if (ikkiSon < 100) {
//     onlik = Math.floor(ikkiSon / 10);
//     birlik = ikkiSon % 10;
//     console.log(`Kiritilgan son o'nliklar xonasidagi raqami ${onlik}, \nbirliklar xonasidagi raqami esa ${birlik} ga teng.`);
//     console.log(`Kiritilgan son raqamlar yig'indisi ${onlik + birlik} ga teng.`);
//     console.log(`Kiritilgan son raqamlar ko'paytmasi ${onlik * birlik} ga teng.`);
// } else {
//     console.log("Kiritilgan son ikki xonali son emas");
// }


// 7. 999 dan katta son berilgan bolib butun olib va qoldiqli bo'lish operatsiyasidan foydalanib yuzlarni topuvchi dastur tuzing!


// let son = +prompt("999 dan katta bo'lgan son kiriting");

// if(son > 999){
//     console.log(Math.floor(son/100)%100);
// }else{console.log("Kiritilgan son 999 dan katta emas")};

// 8. Kun boshidan N sekund o'tdi kun boshidan necha minut, soat, o'tganligin aniqlang

// let sekund = +prompt("Kun boshidan necha sekund o'tdi"),
//     minut,
//     soat;

//     soat = Math.floor(sekund / 3600);
//     minut = sekund / 60;
//     console.log(`Kun boshidan ${soat} soat yoki ${minut} o'tdi`);







// ---- SWITCH CASE ----

// 1. 1-7 gacha butun son berilgan kiritilgan songa mos ravishda hafta kunini so'zlarda ifodolovchi dastur tuzing
// let day;
// switch (day = +prompt("Enter a number")){
//     case 1: console.log("It is Monday");break;
//     case 2: console.log("It is Tuesday");break;
//     case 3: console.log("It is Wednesday");break;
//     case 4: console.log("It is Thursday");break;
//     case 5: console.log("It is Friday");break;
//     case 6: console.log("It is Saturday");break;
//     case 7: console.log("It is Sunday");break;
//     default: console.log("There is no such day of the week");
// }


// 2. K butun son berilgan Baho natijalarini chiqaruvchi dastur tuzing. 1-yomon, 2-qoniqarsiz, 3-qoniqarli, 4-yaxshi, 5 - alo


// let point;

// switch (day = +prompt("Bahoni kiriting")){
//     case 1: console.log("Yomon");break;
//     case 2: console.log("Qoniqarsiz");break;
//     case 3: console.log("Qoniqarli");break;
//     case 4: console.log("Yaxshi");break;
//     case 5: console.log("A'lo");break;
//     default: console.log("Bunday baho mavjud emas");
// }

// 3. Oy raqami berilgan Kiritilgan oy qaysi faslga tegishli ekanin chiqaruvchi dastur tuzing. M - s 2 - qish

//



// 4. Oy raqami berilgan shu oyda nechta kun borligin aniqlovchi dastur tuzing

// let month;
// switch (month = +prompt("Oy ni kiriting")){
//     case 1: console.log("31");break;
//     case 2: console.log("28");break;
//     case 3: console.log("31");break;
//     case 4: console.log("30");break;
//     case 5: console.log("31");break;
//     case 6: console.log("30");break;
//     case 7: console.log("31");break;
//     case 8: console.log("31");break;
//     case 9: console.log("30");break;
//     case 10: console.log("31");break;
//     case 11: console.log("30");break;
//     case 12: console.log("31");break;
//     default: console.log("Bunday oy yo'q");
// }

// 5. a, b sonlar berilgan c amal ham berilgan a va b sonlar ustida amal bajaruvchi dastur tuzing

// let a = +prompt("A ni kiriting"),
// b = +prompt("B ni kiriting");
// c = 0;
// switch (c = prompt("Amalni kiriting")) {
//     case "+": console.log(a+b);break;
//     case "-": console.log((a-b));break
//     case "*": console.log((a*b));break
//     case "/": console.log((a/b));break
//     default: console.log("Bizda bunday amal mavjud emas");
//         break;
// }


// 6. Bahoga qarab stependiyani aniqlovchi dastur tuzing

// let point;
// switch (point = +prompt("Baho ni kiriting")) {
//     case 5:console.log("Sizning stipendiyangiz 500 ming so'm.");break;
//     case 4:console.log("Sizning stipendiyangiz 400 ming so'm.");break;
//     case 3:console.log("Sizning stipendiyangiz 300 ming so'm.");break;
//     default: console.log("Sizda stipendiya mavjud emas");break;
// }