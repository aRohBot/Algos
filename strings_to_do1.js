function removeBlanks(string){
    newString= ""
    for(let i =0; i<string.length; i++){
        if(string[i] != " "){
            newString += string[i]
        }
    }
    return newString
}

console.log(removeBlanks(" Pl ayTha tF u nkyM usi c "))
console.log(removeBlanks("I can not BELIEVE it's not BUTTER"))

function getDigits(string){
    newString = ""
    for(let char in string){
        if(isNaN(string[char])==false){
            newString += string[char]
        }
    }
    return Number(newString)
}

console.log(getDigits('alksdjfalsdjabc8c0d1ngd0j0!8'))
console.log(getDigits('0s1a3y5w7h9a2t4?6!8?0'))

function acronym(string){
    words = string.split(" ")
    aString = ""
    for(let word in words){
        if(words[word].length>0){
            aString += words[word][0].toUpperCase()
        }
    }
    return aString
}

console.log(acronym("there's no free lunch - gotta pay yer way."))
console.log(acronym("Live from New York, it's Saturday Night!"))

function countNonSpace(string){
    count= 0
    for(let char in string){
        if(string[char] != " "){
            count += 1
        }
    }
    return count
}

console.log(countNonSpace("Honey pie,you are driving me crazy"))
console.log(countNonSpace("Hello World !"))

function removeShorterStrings(arr, val){
    newArr = []
    index = 0
    for(let string in arr){
        if(arr[string].length>=val){
            newArr[index] = arr[string]
            index ++
        }
    }
    return newArr
}

console.log(removeShorterStrings(['Good morning', 'sunshine', 'the', 'Earth', 'says', 'hello'], 4))
console.log(removeShorterStrings(['There', 'is', 'a', 'bug', 'in', 'the', 'system'], 3))