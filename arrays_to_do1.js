function pushFront(arr,val){
    for(let i = arr.length; i>=0; i--){
        arr[i] = arr[i-1]
    }
    arr[0]= val

    return arr
}

console.log(pushFront([5,7,2,3], 8))

function popFront(arr){
    newarr = arr
    for(let i = 0; i < newarr.length; i++){
        newarr[i] = newarr[i+1]
    }
    newarr.length= newarr.length-1
    return newarr
}

console.log(popFront([5,6,8,9]))

function insertAt(arr, index, val){
    newarr = arr
    for(let i = newarr.length; i>=index; i--){
        newarr[i]=newarr[i-1]
    }
    newarr[index]=val
    return newarr
}

console.log(insertAt([9,33,7], 1, 42))