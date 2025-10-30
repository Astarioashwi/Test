let isDOBOpen = false;   /* step 25(const and let, it can be changed later in program), goto line 24*/
let dateOfBirth;    /* step 45 goto line 87*/
const settingCogEl = document.getElementById("settingIcon");      /* step 22*/
const settingContentEl = document.getElementById("settingContent");   /* step 23, gotot line 23*/
const initialTextEl = document.getElementById("initialText");     /* step 42*/
const afterDOBBtnTxtEl = document.getElementById("afterDOBBtnTxt");  /* step 43*/
const dobButtonEl = document.getElementById("dobButton");   /* step 44 goto line 2*/
const dobInputEl = document.getElementById("dobInput");  /* step 48 goto line 55*/

const yearEl = document.getElementById("year");   /* step 58 goto line 35*/
const monthEl = document.getElementById("month");
const dayEl = document.getElementById("day");
const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minute");
const secondEl = document.getElementById("second");

console.log(localStorage.getItem("year"));      // step 81  

const makeTwoDigitNumber = (number) => {          // step 71 
  return number > 9 ? number : `0${number}`;  // step 72 (make everything inside the function), goto line 55
};

const toggleDateOfBirthSelector = () => {     /* step 24, goto line 1*/
  if (isDOBOpen) {                            /* step 26 */
    settingContentEl.classList.add("hide");    /* step 27 */
  } else {                                    /* step 28 */
    settingContentEl.classList.remove("hide");  /* step 29 */
  }                                             /* step 30 */
  isDOBOpen = !isDOBOpen;                 /* step 31 */

  console.log("Toggle", isDOBOpen);  /* step 33 (inspect and see toggle t/f), goto .css line 58*/
};

const updateAge = () => {    // step 57 goto line 10
  const currentDate = new Date();        // step 59 goto line 50
  const dateDiff = currentDate - dateOfBirth;   // step 60 goto line 43 (timestamp )
  const year = Math.floor(dateDiff / (1000 * 60 * 60 * 24 * 365));       // step 62 goto line 
  const month = Math.floor((dateDiff / (1000 * 60 * 60 * 24 * 365)) % 12);  // step 62
  const day = Math.floor(dateDiff / (1000 * 60 * 60 * 24)) % 30;    // step 62
  const hour = Math.floor(dateDiff / (1000 * 60 * 60)) % 24;      // step 62
  const minute = Math.floor(dateDiff / (1000 * 60)) % 60;     // step 62
  const second = Math.floor(dateDiff / 1000) % 60;       // step 62 goto line  44
          // step 61 console.log("dateDiff", dateDiff); and updateAge(); goto line 37
  yearEl.innerHTML = makeTwoDigitNumber(year);  // step 63 goto line 56
  monthEl.innerHTML = makeTwoDigitNumber(month);   // step 65
  dayEl.innerHTML = makeTwoDigitNumber(day);    // step 66
  hourEl.innerHTML = makeTwoDigitNumber(hour);    // step 67
  minuteEl.innerHTML = makeTwoDigitNumber(minute);    // step 68
  secondEl.innerHTML = makeTwoDigitNumber(second);      // step 69 goto line 77
};          // console.log({currentDate});  and updateAge(); and inspect  goto line 36

const setDOBHandler = () => {     /* step 47, goto line 8*/
  const dateString = dobInputEl.value;   /* step 49, goto line 61*/

  dateOfBirth = dateString ? new Date(dateString) : null;      // step 73 goto line 71
       // dateOfBirth = new Date(dateString);    // step 64 goto line 45
  const year = localStorage.getItem("year");     // step 77 
  const month = localStorage.getItem("month");   // step 78 
  const date = localStorage.getItem("date");     // step 79
  if (year && month && date) {                   // step 80 goto line 17
    console.log({         // step 50 goto line 70
      year,                 // console.log ("date of birth", dateOfBirth);
      month,
      date
    });

    dateOfBirth = new Date(year, month, date);
  }

  if (dateOfBirth) {      /* step 51 gotot line 74*/
    localStorage.setItem("year", dateOfBirth.getFullYear());        //step 74
    localStorage.setItem("month", dateOfBirth.getMonth());         //step 75
    localStorage.setItem("date", dateOfBirth.getDate());          //step 76 goto line 57
    initialTextEl.classList.add("hide");    /* step 52 goto line 79*/
    afterDOBBtnTxtEl.classList.remove("hide"); //step 55 goto line 84

    setInterval(() => updateAge(), 1000);  //step 70 goto line 39
  } else {
    afterDOBBtnTxtEl.classList.add("hide");   /* step 53*/
    initialTextEl.classList.remove("hide");   // step 54 goto line 75
  }
};

setDOBHandler();   /* step 56 goto line 34 (for timer)*/

settingCogEl.addEventListener("click", toggleDateOfBirthSelector);  /* step 32, goto line 31*/
dobButtonEl.addEventListener("click", setDOBHandler);    /* step 46 goto line 52*/
