const arr1 = [2, 3, 4, 1]
const arr2 = [1, 4, 2, 3]
const arr3 = [
    { a: 1 },
    { a: 2 },
    { a: 11 },
    { a: 6 },
    { a: 9 },
    { a: 7 },
    { a: 6 }
]

function findMax(arr){
   return Math.max.apply(null,arr)
}

function findMin(arr){
    return Math.min.apply(null,arr)
}

function coupleElementsOfArray(arr){

    let couple=arr.filter(el => el%2==0)

    return couple
}

function oddElementsOfArray(arr){
    
    let odd=arr.filter(el => el%2==1)

    return odd
}

function arrSort1(arr) {
   let sorted = arr.sort(function(first , second){

        return first-second

    });
    return sorted   
}

function arrSort2(arr) {
    let sorted = arr.sort(function(first , second){
 
         return second-first
 
     });
     return sorted   
 }

function objSortByProperty(arr){
   const sort= arr.sort(function(first, second){
        return first.a- second.a
    });
    
    return  sort
}

function getObjectWithProperty(arr,thisValue){
   
    let found = arr.find((item) => item.a  === thisValue);

      return found
      
}

function getObjectIndexWithProperty(arr,thisValue){
    let foundIndex = arr.findIndex((item) => item.a  === thisValue);

      return foundIndex
}

const max = findMax(arr1)
const min = findMin(arr1)
const couple = coupleElementsOfArray(arr1)
const odd = oddElementsOfArray(arr1)
const arrSorted1 = arrSort1(arr1);
const arrSorted2 = arrSort2(arr2)
const objSort = objSortByProperty(arr3)
const foundInObj = getObjectWithProperty(arr3,11)
const foundIndexObj= getObjectIndexWithProperty(arr3,11)

console.log(max)
console.log(min)
console.log(couple)
console.log(odd)
console.log(arrSorted1)
console.log(arrSorted2)
console.log(objSort)
console.log(foundInObj)
 console.log(foundIndexObj)