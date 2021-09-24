// CRUD

// create
[]
["test",2,3,null]
console.log([])
let list= []
let list=["test",2,3,null]


// read
//#region
list[0] // "test"
list[1] // 2
list[2] // 3
list[3] // null
list[4] // undefined
list.length // mitu elementi listis(arrays) on
list

let fruits= ["orange", "pineapple", "apple"]
fruits.indexOf("pear") //-1 // näitab mitmes see on arrays
fruits.indexOf("apple") // 2
fruits.includes("pear) //false // näitab kas arrays on see asi või mitte
list.filter(elem=>elem>0) // 
//#endregion


//update
list.push("kiwi")
fruits.push("kiwi")
fruits[4]="watermelon" // vahetab välja
fruits.splice(2,0,"plum") // 2 näitab kuhu lisada, 0 näitab mitu numbrit kustutada

//delete
fruits.pop() // võtab viimase elemendi välja
fruits.splice(2,1) // võtab teise ja kustutab selle (1)

fruits[fruits.length - 1] et leida viimane element arrays.
