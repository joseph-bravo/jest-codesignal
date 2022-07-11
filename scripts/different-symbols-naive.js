module.exports = function solution(string) {
  const x = string.split('').reduce((uniques, letter) => {
    if (!uniques.includes(letter)) {
      uniques.push(letter);
    }
    return uniques;
  }, []);
  return x.length;
};
