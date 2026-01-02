
let arr = [5,3,2,0,1]

function SumOfAllElement (n){

    if(n===0) return arr[0]

     return arr[n]+SumOfAllElement(n-1)

    

}

console.log(SumOfAllElement(arr.length-1))


