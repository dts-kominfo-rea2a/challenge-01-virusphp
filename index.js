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
const ramen = "Ramen";
const spageti = "Spageti";
const padang = "Pancake";
const geprek = "Geprek";
const sate = "Sate";
const takoyaki = "takoyaki";
const candu = "Candu";
const katsu = "Katsu";

// Tentukan tipe data dan struktur data yang menurut kalian tepat
const namaPlayer = "";
const gender = "";
const age = 0;
const email = "";

const favoriteColorGandi = new Set();
favoriteColorGandi.add(black);
favoriteColorGandi.add(blue);
favoriteColorGandi.add(purple);

const favoriteColorWendi = new Set();
favoriteColorWendi.add(pink);
favoriteColorWendi.add(black);
favoriteColorWendi.add(grey);
favoriteColorWendi.add(yellow);

const favoriteRestaurantGandi = new Set();
favoriteRestaurantGandi.add(ramen);
favoriteRestaurantGandi.add(spageti);
favoriteRestaurantGandi.add(takoyaki);
favoriteRestaurantGandi.add(katsu);

const favoriteRestaurantWendi = new Set();
favoriteRestaurantWendi.add(geprek);
favoriteRestaurantWendi.add(sate);
favoriteRestaurantWendi.add(padang);
favoriteRestaurantWendi.add(candu);

const gandiEducation = new Object();
gandiEducation.name = "SD N 05";
gandiEducation.city = "Pekalongan";
gandiEducation.graduate = "2016";

const wendiEducation = new Object();
wendiEducation.name = "SD 02",
wendiEducation.city = "Jakarta",
wendiEducation.graduate = "2010";


// Kalian bisa membuat variabel lain untuk dimasukkan ke dalam atribut user agar lebih mudah dibaca
const firstUser = {
    namaPlayer: "Sugandi",
    gender: "male",
    age : 23,
    email : "packercyber@gmail.com",
    favoriteColor: [...favoriteColorGandi],
    education: [JSON.stringify(gandiEducation)],
    favoriteRestaurant: [...favoriteRestaurantGandi],
};
const secondUser = {
    namaPlayer: "Wendi",
    gender: "male",
    age : 28,
    email : "wendi@gmail.com",
    favoriteColor: [...favoriteColorWendi],
    education: [JSON.stringify(wendiEducation)],
    favoriteRestaurant: [...favoriteRestaurantWendi],
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