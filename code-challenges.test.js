// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest


// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining items.

// a) Create a test with an expect statement using the variable provided.
// HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray


describe("ranColors", () => {
  it("removes the first item from the array and shuffles the remaining items", () => {

    const colors1 = ["purple", "blue", "green", "yellow", "pink"]
    // Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
    expect(["blue", "green", "yellow", "pink"]).toEqual(expect.not.arrayContaining(colors1))   
    
    const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
    expect(["indigo","periwinkle", "ochre", "aquamarine", "saffron"]).toEqual(expect.not.arrayContaining(colors2))
  })
})
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]

// b) Create the function that makes the test pass.

// Pseudo code:
// name : ranColors
// input : 1 array
// output : 1 array
// process : a function that will take an array as a parameter, use shift to remove the first element of the array, then use the Fisher-Yates shuffle to shuffle the array.

const ranColors = (array) => { // function that takes an array as a parameter

  array.shift() // this will remove the first element of the array using shift

// ---- the Fisher-Yates shuffle will shuffle the array
  for (let i = array.length - 1; i > 0; i--) { 
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
// ----
  return array // this will return the array

}

// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the end tally.

// a) Create a test with expect statements for each of the variables provided.

describe("redditPost", () => {
  it("takes in an object that contains up votes and down votes and returns the end tally", () => {

    const votes1 = { upVotes: 13, downVotes: 2 }
    // Expected output: 11
    expect(redditPost(votes1)).toEqual(11)

    const votes2 = { upVotes: 2, downVotes: 33 }
    // Expected output: -31
    expect(redditPost(votes2)).toEqual(-31)
  })
})
// b) Create the function that makes the test pass.

// Pseudo code:
// name : redditPost
// input : object
// output : number
// process : have a conditional that checks if the downVotes are less then the Upvotes, is so then i make the downVotes into a negative then add them to the upVotes, if there are more upVotes then downVotes then i just substract

const redditPost = (object) => { // function thst take an object as a parameter
  if (object.upVotes < object.downVotes) { // this will check if there are more downVotes then upVotes
    return object.upVotes + object.downVotes * -1 // this will turn downVotes into a negative number then add both upVotes and downVotes together
  }
  else {
    return object.upVotes - object.downVotes // this will subtract both the upVotes and downVotes
  }
}
// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.


describe("noDuplicateArray", () => {
  it("takes in two arrays as arguments and returns one array with no duplicate values", () => {

    const dataTypesArray1 = ["array", "object", "number", "string", "Boolean"]
    const dataTypesArray2 = ["string", "null", "Boolean", "string", "undefined"]
    // Expected output: ["array", "object", "number", "string", "Boolean", "null", "undefined"]

    expect(noDuplicateArray(dataTypesArray1, dataTypesArray2)).toEqual(["array", "object", "number", "string", "Boolean", "null", "undefined"])
  })
})

// b) Create the function that makes the test pass.

// Pseudo code:
// name : noDuplicateArray
// input : 2 arrays
// output : 1 array
// process : a function that take in multiple arrays as a parameter, make an array that will combine both arrays using (concat), create a new set that will get rid of any duplicates in both arrays

const noDuplicateArray = (...array) => { // this function will take multiple arrays as a parameter using the spread operator
  const combineArray = [].concat(...array) // this will combine both arrays together using concat
  return [...new Set(combineArray)] // this will make a Set and will get rid of any duplicates in the combined array, using new and Set. the spread operator will transport the elements of the set back into an array
}
