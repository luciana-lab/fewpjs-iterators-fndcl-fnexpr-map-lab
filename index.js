const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  // use the .map method on the tutorials to return a new array

  const newTutorials = tutorials.map(function (title) {
    let word = title.split(" ");
    // console.log(word)
    const titleChanged = word.map(w => w.charAt(0).toUpperCase() + w.slice(1));
    // for (let  = 0; i < word.length; i++) {
    //   word[i].charAt(0).toUpperCase() + word[i].slice(1);
    // };
    return titleChanged.join(" ");
  })

  // console.log(newTutorials)
  return newTutorials
}
titleCased(tutorials)
console.log(titleCased(tutorials));