// // Array order collection of value
let num=[1,2,3,4,5]
console.log(num[4]>num[1]) //true
console.log(num[num.length-1]) //5
console.log(num.length-3) //=== (num[3])
console.log(num[1]) //2
console.log('------------')

for(let y of num){
    console.log(y)
}
let a=[]
let b=null
let c
console.log(a) //[]
console.log(b) //null
console.log(b?.length) //undefined
console.log(c) //undefined
console.log(c?.length) //undefined
console.log('------------')


// Array Spread operator
// // spread operator : ...name แทนที่...ด้วยค่าแต่ละตัวของอาเรย์ก่อนหน้า
// referent collection other array
let d=[1,2,3,4]
let e=[...d,5,6,7,8,9,10]
console.log(e)
console.log('------------')

// Array() constructor
// : is sugar free:ช่วยนักเขียนโค้ดสายอื่นมาเขียนได้ง่ายขึ้น ex. for OOP
let r =new Array() //create 
let s=new Array(10) //fix length
let t=new Array(10,11,12) //สร้างแบบใส่ค่า *ห้ามเป็นเลขตัวเดียว=fix length*
console.log('------------')

// Array.of : สร้างแบบใส่ค่า ใส่เป็นเลขตัวเดียวได้

// Array.from : สร้างArray ที่มีการอ้างอิงค่าในอาเรย์อื่น


// -- destructuring : แตก collection ออกจากกันแล้วไปเข้าถึงค่าตามที่ระบุ
let h=[1,3,4]
let [ga1,ga2]=h 
console.log(ga2)
console.log('------------')

// array contains a different type of values
let diffArr = [10, 'in progress', true]
console.log(diffArr) //[10, 'in progress', true]

// array contains a nested arrays
let colors = [
    ['yellow', 'red', 'orange'],
    ['blue', 'green', 'purple']
]
console.log(colors) //[ ['yellow', 'red', 'orange'],  ['blue', 'green', 'purple'] ]


// array contains a collection of objects
let posts = [
    {
        id: 1,
        title: 'Fail fast and Learn Fast',
        body: 'Do not give up, just take some rest and go on',
        user: {
            id: 9,
            displayName: 'Somchai'
        },
        tags: ['learn', 'mindset', 'EF']
    },
    {
        id: 2,
        title: 'Practices make you better',
        body: 'Push yourself because Noone else to do it for you',
        user: {
            id: 12,
            displayName: 'Somsak'
        },
        tags: ['practice', 'mindset']
    }
]
console.log(posts)
