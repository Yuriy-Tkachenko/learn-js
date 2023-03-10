function aclean(words) {
    let map = new Map();
  
    for (let word of words) {
      let sorted = word.toLowerCase().split("").sort().join("");
      map.set(sorted, word);
    }
  
    return Array.from(map.values());
  };