// How To Define String OR Methods To Define String ? 

// Here Are Three Methods To Define :-

// Method 1

let string1 = 'one "two" three'
console.log(string1)

// Method 2

let string2 = "three 'one' three"
console.log(string2)

// Method 3 

let num = 10
let string3 = `the value is ${num}`
console.log(string3)


// Small String

let strSamll = "abcdefghijklmnopqrstuvwxyz"
console.log(
    strSamll.charAt(25), strSamll[1], strSamll.at(-1)  
)  // The Output is :- z, b, z


// ASCII Value

let strSmall = "abccccdde"
let strBig = "ABCCCCDDE"
console.log (
    strSmall.charCodeAt(0), // The Output is :- 97
    strBig.charCodeAt(0), // The Output is :- 65 
)


// Slice In String.

console.log(
    strSamll.slice(5)
) // The Output is :- fghijklmnopqrstuvwxyz. Here At the Index of 5 is the Starting Point

console.log(
    strSamll.slice(5,9)
) // The Output is :- fghi. Here the output is getting between Index 5 And Index 8. Here Index 9 is not Consider.


// SubString in String.

console.log(
    strSamll.substring(1,3)
) // The Output is :- bc. Here The Index 3 is not Consider. 


// UpperCase in String. It is used to Convert LowerCase into UpperCase

console.log(
    strSamll.toUpperCase()
) // The Output is :- ABCDEFGHIJKLMNOPQRSTUVWXYZ


// LowerCase in String. It is used to Convert UpperCase into LowerCase

console.log(
    strBig.toLowerCase()
) // The Output is :- abccccdde


// Concet in String. It is used to join Two String & make a Single String

console.log(
    strSmall.concat(strBig)
) // The Output is :- abccccddeABCCCCDDE


// Trim in String

let myStr = "  trim  "
console.log(
    myStr.trim()
) // In the Output Both Side's Space Are REMOVED & Content is Print As a normal Word.

// Trim Start

console.log(
    myStr.trimStart()
) // In the Output After's Space are REMOVED

// Trim End

console.log(
    myStr.trimEnd()
) // The Output is :-   trim.


// Using Trim & Any Case At a Same Time

let name = "  SmiT UpadhyaY   "
let nweName = name.trim().toLowerCase()
console.log(nweName); // The Output is :- smit upadhyay


// Replace In String

let name1 = "  smeet upaddhyay   "
let newname = name1.trim().toLowerCase()
console.log(newname)
newname = newname.replace("smeet", "smit")
newname = newname.replace("upaddhyay", "upadhyay")

console.log(newname.trim().toLowerCase())
// Output Before Replace :- smeet upaddhyay
// Output After Replace :- smit upadhyay


// ReplaceAll in String

let name2 = "smeet upadhyay smeet"
let newName1 = name2.replaceAll("smeet", "smit")

console.log(newName1) // After The ReplaceAll The Output is :- smit upadhyay smit


// Split in String

let name3 = "   PengTroolshangs Trools kakaPVC"

let newName2 = name3.trim().toLowerCase()
console.log(newName2) // The Output is :- pengtroolshangs trool kakapvc

newName2 = newName2.replace("peng", "ping")
newName2 = newName2.replaceAll("trools", "tree-")
console.log(newName2) // The Output is :- pingtree-hangs tree- kakapvc

let newStr = newName2.trim().toLowerCase()
console.log(newStr.split("-")) // The Output is :-  ['pingtree', 'hangs tree', ' kakapvc']