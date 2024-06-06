function capitalizeName(str) {
  // Split the string into an array of words
  let words = str.split(' ');

  // Capitalize the first letter of each word and lowercase the rest
  words = words.map(word => {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  });

  // Join the words back into a single string
  return words.join(' ');
}
