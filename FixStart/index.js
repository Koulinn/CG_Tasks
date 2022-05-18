const fixStart = (string) => {
  const splittedString = string.split("");
  const modifiedString = splittedString.flatMap((currentValue, index) => {
    return currentValue === splittedString[0] && index > 0 ? "*" : currentValue;
  });

  return modifiedString.join("");
};

console.log(fixStart("babble"));
