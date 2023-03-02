import data from "./data/quiz.json" assert { type: "json" };
let nowQuestion = 0;
let score = 0;

// รับ event จากปุ่ม start quiz เพื่อให้เริ่มแสดงคำถามภายใน div.question
// เรียก start button เพื่อดำเนินการดังนี้ ------
// เปลี่ยนข้อความของปุ่มเป็น re quiz
// เรียกใช้ start() เพื่อ ทำการรีเซ็ตกลับเป็นค่าเริ่มต้นทั้งหมด
const startQ = document.querySelector('#control') //#id
startQ.addEventListener('click', () => { //addEvent
  startQ.textContent = 're quiz'

  start()

})


function start() {
  // รีเซ็ตการทำงานในส่วนที่แสดง score ทั้งหมด for NewGame
  const scoreDiv = document.querySelector('#score')
  scoreDiv.textContent = ''

  nowQuestion = 0;
  score = 0;
  question(); // แสดงคำถาม และรายการของตัวเลือกในแต่ละข้อ
  // รีเซ็ตการทำงานในส่วนที่แสดง score ทั้งหมด
}
function question() {
  let now = data[nowQuestion++]; //object Ques ไปอ่านข้อหกที่ไม่มี ถ้าไม่ ?. จะไม่แสดงข้อห้า
  // console.log(now)
  console.log(now?.Q)
  console.log(now?.A)


  // ภายใน div.question ให้ทำการแสดงคำถาม H3 ตัวเลือกทั้งหมดทีละข้อ h6
  const quest = document.querySelector('#question')
  quest.textContent = ''

  if (nowQuestion > data.length) { //
    const hONEElement = document.createElement('h1')
    hONEElement.textContent = score
    quest.appendChild(hONEElement)
  }
  else {

    const htreeElement = document.createElement('h3')
    htreeElement.textContent = now.No + ') ' + now.Q
    quest.appendChild(htreeElement)

    now.A.forEach(i => {
      const hsixElement = document.createElement('h6')
      // hsixElement.textContent=i.value //now.A[index].value

      const buttonCh = document.createElement('button')
      buttonCh.setAttribute('value', i.choice)
      buttonCh.setAttribute('class', 'button')
      buttonCh.textContent = i.choice + ')' //now.A[index].choice

      // ภายในตัวเลือกแต่ละข้อ ให้สร้างปุ่มเพื่อกำหนดอีเว้นของตัวเลือก spoiller:: assign value of button
      buttonCh.addEventListener('click', checkANS)
      hsixElement.append(buttonCh)
      hsixElement.append(i.value)

      quest.appendChild(hsixElement)

    });
  }
  // checkANS()
  // แสดงคำถาม และรายการของตัวเลือกในแต่ละข้อ
  // ในส่วนของปุ่มให้เรียกใช้
  // function checkANS(ข้อมูลของ button)

  // เมื่อผู้ใช้เลือกคำตอบ ให้แสดง stat ของการเลือกว่าถูกหรือผิด จากนั้นให้แสดงคำถามและตัวเลือกของข้อให้
  // สำหรับ stat ของคำตอบนั้น เมื่อผู้ใช้งานcore แสดงเลขข้อ และสถานะ และตั้ง bgcolor เป็นสี yellowgreen หากผิดให้แสดงเป้นสี red

  function checkANS(event) {
    console.log(event)
    console.log(event.target.value) //event.target:event ที่ทำงานอยู่ปัจจุบัน


    // กดปุ่มหน้าตัวเลือกให้ทำการเช็คเงื่อนไขว่า ปุ่มนั้นตรงกับคำตอบที่ถูกต้องหรือไม่
    // หากถูกต้อง ให้ทำการสร้าง span ใน div.s
    const scoreD = document.querySelector('#score')
    if (event.target.value == now.ANS) {
      const spanChek = document.createElement('span')
      spanChek.setAttribute('class', 'statCorrect')
      spanChek.setAttribute('style', 'background-color: yellowgreen')
      //สร้าง span เพื่ออัพเดต stat กรณีเลือกคำตอบที่ถูก
      score++;
      // nowQuestion++;
      question();
      spanChek.textContent = now.No
      scoreD.append(spanChek)

    } else {
      const spanChek = document.createElement('span')
      spanChek.setAttribute('class', 'statCorrect')
      spanChek.setAttribute('style', 'background-color: red;color:white')

      //สร้าง span เพื่ออัพเดต stat กรณีเลือกคำตอบที่ผิด
      // nowQuestion++;
      question();
      spanChek.textContent = now.No
      scoreD.append(spanChek)

    }
  }


}


