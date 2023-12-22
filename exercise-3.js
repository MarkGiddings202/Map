/*
    1. Create a Map called "houseForSale" with the following entries:
        - area -> 940
        - value -> 320000
        - streetName -> "Fifth Street"
        - built -> "2012"
        - owner -> {name: "Blake", age: 29}
        - offers -> [290000, 295000, 315000, 312000]

    2. Print out "houseForSale" to the terminal

    3. Delete the entry with the key "built"

    4. Change the age of the owner to be 30 inside "houseForSale"

    5. Print out the maximum offerPrice (use reduce)

    6. Add a new entry: "sale price" -> 312000

    7. Print out "houseForSale" to the terminal

    *This is a challenging exercise - take it slow and step by step
*/

let houseForSale = new Map();

houseForSale.set("area", 940);
houseForSale.set("value", 320000);
houseForSale.set("streetName", "Ffith Street");
houseForSale.set("built", "2012");
houseForSale.set("owner", { name: "Blake", age: 29 });
houseForSale.set("offers", [290000, 295000, 315000, 312000, 9000000]);

console.log(houseForSale);

houseForSale.delete("built");

houseForSale.get("owner").age = 40;

let maximum = houseForSale.get("offers").reduce((max, price) => {
  // this isn't adding just so we're clear, this is checking if the price is greater than the max number we have.
  // so if the price is ever greater than the max then we send the price back to our counter in our second parameter.
  // if the max number we've counted however is larger than the price then we return the max number.
  // remeber the reduce method ONLY returns a single value.
  if (max < price) {
    return price;
  }
  return max;
}, 0);

console.log(maximum);

houseForSale.set("sale price", maximum);

console.log(houseForSale);
