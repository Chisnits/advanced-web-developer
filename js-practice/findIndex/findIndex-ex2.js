var arr = [5,11,13,8,6,7];
findIndex(arr, function(num, index, array) {
  //will return 3.
  return num % 2 === 0;
});

