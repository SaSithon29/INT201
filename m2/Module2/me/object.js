
// 1. USING LITERAL TO CREATE OBJECT ใต้ปีกกาใส่คีย์กับค่าได้เลย

let profile={
    id:123,
    // array value
    inter:['music','skiing']
}
console.log(profile)
profile.interests[profile.interests.length-1]='sleeping'
console.log(profile)

let book={
    isbn:1324,
    title:'JS',
    author:{
        firstname:'Umaporn',
        lastname:'Sup'
    }
}
book.author.firstname='Sasi'  
book['author']['lastname'] = 'Dontree'
console.log(book)

// 2. USING NEW OPERATOR 
    class Point{
        constructor(a,b){
            this.a=a
            this.b=b
        }
        compare(anotherPoint){
            console.log(`This.x:${this.a} -- This.y:${this.y}
            AnotherPoint.x=${anotherPoint.x} -- AnotherPoint.y=${anotherPoint.y}`)
        return `end`
        }
        whoMaxOfMultiply(anotherPoint){
            console.log(`This ${this.x}*${this.y} = ${this.x*this.y}
            AnotherPoint ${anotherPoint.x}*${anotherPoint.y}=${anotherPoint.x * anotherPoint.y}`)
        let a=(this.x*this.y < anotherPoint.x*anotherPoint.y)
            return `Max is ${a}`
        }
    }
    const z0=new Point(1,2)
    let z1=new Point(5,3)
// z0=z1 //unable to reassign ; z0 is const
// z0.x=100
// z0.y=50

// z1=z0 //able to reassign

console.log(p1.compare(p2))
console.log(p2.compare(p1))

console.log(p2.whoMaxOfMultiply(p1))
console.log(Object.prototype.isPrototypeOf(p1))  //true
console.log(Point.prototype.isPrototypeOf(p1))   //true