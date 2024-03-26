let username = prompt("zehmet olmasa adinizi daxil edin:");
let lenthOfName = username.length;
console.log("Daxil etdiyiniz ad " + lenthOfName + " simvoldan ibaretdir");
let symbol = prompt("simvol daxil edin:");
//5-ve 6 burda islemelidir
if (username.includes(symbol)) {
    console.log(username.indexOf(symbol));
  console.log("daxil etdiyiniz simvol adinizda movcuddur!");
} else {
  console.log("daxil etdiyiniz simvol adinizda movcud deyil!");
}
if (username.startsWith(symbol)) {
  console.log("daxil ediyiniz ad ikinci simvolla baslayir!");
} else if (username.endsWith(symbol)){
console.log("daxil etdiyiniz ad ikinci simvolla bitir!");
} else{
    console.log(
        "daxil etdiyiniz adda ikinci simvol movcud deyil!"
    );
}
