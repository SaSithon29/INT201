function my() {
    let a = 's'
    const b = 'a'
    var c = 'y'
    // console.log(a)
    // console.log(b)
    // console.log(c)
    return {a:a,b:b,c:c}

}
let t= my()
console.log(t)
console.log(t.a)
console.log(Object.keys(t).length)
// console.log(Object.keys==arrayOfkeyInObject  
// (t).length==lengthOfkey)

// console.log(b) //error
// console.log(c) //error
