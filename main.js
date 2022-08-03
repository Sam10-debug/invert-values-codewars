// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

// invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
// invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
// invert([]) == []

function invert(array) {
	//check if the number is less than 0 he return it imes -1
	//loop through the array
	if(array.length===0){
	  return []
	}else{
	  return array.map(x=>x*-1)
	}
  }