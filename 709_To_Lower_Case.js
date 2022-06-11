// Given a string s, return the string after replacing
// every uppercase letter with the same lowercase letter.
// Input: s = "Hello"
// Output: "hello"

// You can totally do
// 	return str.toLowerCase();
// but it is beating the purpose of the question.

//option 1
const toLowerCase1 = function (s) {
  let lowerCase = ''

  for (let letter of s) {
    const index = letter.charCodeAt(0)

    console.log(index)

    if (index >= 65 && index <= 90) {
      letter = String.fromCharCode(index + 32)
    }

    lowerCase += letter
  }

  return lowerCase
}

//option 2
const toLowerCase2 = (str) => {
  //Calculate Ascii diff from a to A
  const DIFF = 'a'.charCodeAt(0) - 'A'.charCodeAt(0)

  return Array.from(str)
    .map((ch) =>
      ch >= 'A' && ch <= 'Z' ? String.fromCharCode(ch.charCodeAt(0) + DIFF) : ch
    )
    .join('')
}
