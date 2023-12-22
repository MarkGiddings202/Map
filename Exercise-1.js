/*
    1. Create a Map called "myPet" with the following entries:
        - name -> "Sudo"
        - type -> "Dog"
        - breed -> "Poodle"
        - age -> 7
        - friends -> ["Bit", "Byte", "Data"]

    2. Print out "myPet" to the terminal

    3. Add a new entry: colour -> "Black"

    4. Change "breed" to be "Beagle"

    5. Remove "Data" from the list of friends for "myPet"
    
    6. Print out "myPet" to the terminal again

    7. Add "Chip" to the list of friends for "myPet"

    8. Print out "myPet" to the terminal again
*/

const myPet = new Map()

myPet.set("name", "Sudo")
myPet.set("type", "Sudo")
myPet.set("breed", "poodle")
myPet.set("age", 7)
myPet.set("friends", ["Bit", "Byte", "Data"])

console.log(myPet)

myPet.set("color", "black")
myPet.set("breed","Beagle")
// How to remove an item using Map()
// get returns the value of the key you selected
// myPet.get("freinds") === ["Bit", "Byte", "Data"]
// sooo.... ["Bit", "Byte", "Data"].pop() will give you ["Bit", "Byte"]
myPet.get("friends").pop()

console.log(myPet)
// its really important to keep in mind what the computer is reading in this editors without a console log. 
myPet.get("friends").push("Chip")

console.log(myPet)