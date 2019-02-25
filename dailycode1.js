// This problem was recently asked by Google.

// Given a list of numbers and a number k, return whether any two numbers from the list add up to k.

// For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

// Bonus: Can you do this in one pass?

let example = [10, 15, 7, 16, 1, -1, 18, 17, 3]

let k = 17

function AddUp() {
    for (let i = 0; i < example.length; i++) {
        example[i]
        for (let j = 0; j < example.length; j++) {
            example[j]
        if (example[i] + example[j] === k) {
            console.log(example[i], example[j])
        }
    }
}
}
AddUp()