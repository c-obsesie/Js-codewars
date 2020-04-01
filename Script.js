//Find the first non-consecutive number

function firstNonConsecutive(arr) {
  for (let i = 0; i < arr.length - 1; ++i) {
    if (arr[i] + 1 !== arr[i + 1]) {
      return arr[i + 1]
    }
  }
  return null
}
// No oddities here

function noOdds( values ){
  // Return all non-odd values
  return values.filter(val=>val%2===0);
}

//Your task is to write a function which returns the sum of following series upto nth term(parameter).
//Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...

function SeriesSum(n) {
  for (var s = 0, i = 0; i < n; i++) {
    s += 1 / (1 + i * 3)
  }
  
  return s.toFixed(2)
}
//Perimeter

function findPerimeter(height,width){
	return (height + width) * 2;
}
//Number of Two or More Consecutive Ones

const countOnes = arr =>
  arr
    .join('')
    .split(/0+/)
    .filter(str => str && str.length > 1).length;

// Enough fuel 

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  return distanceToPump/mpg <= fuelLeft
};

//Create a function called that accepts 2 string arguments and returns an integer of the count of occurrences the 2nd argument is found in the first one.

function strCount(str, letter){  
  //code here
  let arr=str.split(letter).length-1
  
  return arr
}

//Find the Difference in Age between Oldest and Youngest Family Members

const differenceInAges = ages => [
  Math.min(...ages),
  Math.max(...ages),
  Math.max(...ages) - Math.min(...ages),
]
// Number of digits

function digits(n) {

 
 return( n.toString().length)
}



