// write a function that takes an array of integers and returns an array of integers with the duplicates removed
var test = [1,2,3,4,1,4,3,17,23,17,35,99,35];
test.sort()
let results = []
for (let i = 0; i < test.length; i++) {
    if (results.indexOf(test) === -1) {
        results.push(test)
    }
    
}
console.log(results)