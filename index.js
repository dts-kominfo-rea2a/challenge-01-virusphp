// TODO: Buatlah data dari kedua user di sini
// Color List
const yellow = "Yellow";
const pink = "Pink";
const white = "White";
const purple = "Purple";
const blue = "Blue";
const black = "Black";
const grey = "Grey";

// Restaurant List
const bento = "Bento";
const sushi = "Sushi";
const pancake = "Pancake";
const eggy = "Eggy";
const tempura = "Tempura";
const padang = "Padang";
const tteok = "Tteok";
const katsu = "Katsu";
const geprek = "Geprek";


// Tentukan tipe data dan struktur data yang menurut kalian tepat
//Monica
const namaMonica = "Monica";
const genderMonica = "Female";
const ageMonica = "17";
const emailMonica = "monica@dicoding.com";
const favoriteColorMonica = [];
const isHavePetMonica = "Yes";
const educationMonica = [];
const favoriteRestaurantMonica = [];

const monicaColor = new Set();
monicaColor.add(yellow);
monicaColor.add(pink);
monicaColor.add(white);
monicaColor.add(purple);
favoriteColorMonica.push(...monicaColor);

const sdMonica = new Object();
sdMonica.name = "SD 01";
sdMonica.city = "Jakarta";
sdMonica.graduate = "2016";
const smpMonica = new Object();
smpMonica.name = "SMP 02";
smpMonica.city = "Jakarta";
smpMonica.graduate = "2019";
const smaMonica = new Object();
smaMonica.name = "SMA 03";
smaMonica.city = "Tangerang";
educationMonica.push(sdMonica, smpMonica, smaMonica);

const monicaResto = new Set();
monicaResto.add(bento);
monicaResto.add(sushi);
monicaResto.add(pancake);
monicaResto.add(eggy);
monicaResto.add(tempura);
monicaResto.add(bento);
monicaResto.add(eggy);
monicaResto.add(padang);
monicaResto.add(tteok);
monicaResto.add(sushi);
monicaResto.add(sushi);
favoriteRestaurantMonica.push(...monicaResto);


const namaWendy = "Wendy";
const genderWendy = "Male";
const ageWendy = "23";
const emailWendy = "wendy@dicoding.com";
const favoriteColorWendy = [];
const isHavePetWendy = "No";
const educationWendy = [];
const favoriteRestaurantWendy = [];

const wendyColor = new Set();
wendyColor.add(blue);
wendyColor.add(black);
wendyColor.add(grey);
favoriteColorWendy.push(...wendyColor);

// sd wendy
const sdWendy = new Object();
sdWendy.name = "SD 02";
sdWendy.city = "Jakarta";
sdWendy.graduate = "2010";

// smp wendy
const smpWendy = new Object();
smpWendy.name = "SMP 03";
smpWendy.city = "Bogor";
smpWendy.graduate = "2013";

// sma wendy
const smaWendy = new Object();
smaWendy.name = "SMA 01";
smaWendy.city = "Surabaya";
smaWendy.graduate = "2016";

// universitas wendy
const univWendy = new Object();
univWendy.name = "Universitas Majua";
univWendy.city = "Tangerang";

educationWendy.push(sdWendy, smpWendy, smaWendy, univWendy);

const wendyResto = new Set();
wendyResto.add(tempura);
wendyResto.add(bento);
wendyResto.add(sushi);
wendyResto.add(pancake);
wendyResto.add(padang);
wendyResto.add(katsu);
wendyResto.add(geprek);
wendyResto.add(pancake);
wendyResto.add(eggy);
favoriteRestaurantWendy.push(...wendyResto);


// Kalian bisa membuat variabel lain untuk dimasukkan ke dalam atribut user agar lebih mudah dibaca
const firstUser = {
    name: namaMonica,
    gender: genderMonica,
    age : ageMonica,
    email : emailMonica,
    isHavePet: isHavePetMonica,
    favoriteColor: favoriteColorMonica,
    education: educationMonica,
    favoriteRestaurant: favoriteRestaurantMonica
};
const secondUser = {
    name: namaWendy,
    gender: genderWendy,
    age : ageWendy,
    email : emailWendy,
    isHavePet: isHavePetWendy,
    favoriteColor: favoriteColorWendy,
    education: educationWendy,
    favoriteRestaurant: favoriteRestaurantWendy
};

// TODO: Masukkan hasil akhir dari kedua user di sini
const users = [firstUser, secondUser];

// ! JANGAN MODIFIKASI LINE DI BAWAH
function main() {
    console.log(users.length || users.size);
    console.log(users);
}

main();

module.exports = {
    users
};