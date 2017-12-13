var langs = ["Java", "C++", "Python", "Ruby"];
findIndex(langs, function(lang, index, arr) {
  //function will return -1 because Javascript does not exist in the array.
  return lang === "JavaScript";
});

