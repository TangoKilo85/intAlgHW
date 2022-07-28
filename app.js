//Steamroller
function steamrollArray(arr) {
    const flattenedArray = [];
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        flattenedArray.push(...steamrollArray(arr[i]));
      } else {
        flattenedArray.push(arr[i]);
      }
    }
    return flattenedArray;
  };
  
steamrollArray([1, [2], [3, [[4]]]]);


//Binary Agents
function binaryAgent(str) {
    var biString = str.split(" ");
    var uniString = [];
  for (var i = 0; i < biString.length; i++) {
    uniString.push(String.fromCharCode(parseInt(biString[i], 2)));
    }
    return uniString.join("");
  }

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");


//Sum All Primes
function sumPrimes(num) {
    function isPrime(num) {
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i == 0)
          return false;
      }
      return true;
    }
    let sum = 0;
    for (let i = 2; i <= num; i++) {
      if (isPrime(i))
        sum += i;
    }
    return sum;
  }