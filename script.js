const word = document.getElementById("word");
const text = document.getElementById("text");
const scoreEl = document.getElementById("score");
const timeEl = document.getElementById("time");
const endgameEl = document.getElementById("end-game-container");
const settingBtn = document.getElementById("setting-btn");
const settings = document.getElementById("setting");
const settingsForm = document.getElementById("setting-form");
const difficultySelect = document.getElementById("difficulty");

//list of words
const words = ['өрөө',
'рө',
'өр',
'ролд',
'өбый',
'йыбө',
'длор',
'болд',
'бодлоороо',
'оролдлоо',
'бордоо',
'өөрөө',
'орой',
'бор',
'доор',
'долоо',
'ой',
'оллоо',
'ой',
'оллор',
'боролдой',
'орлоод',
'өөдөө',
'өөрөө',
'өдрөөр',
'лоолой',
'ор',
'өл',
'ол',
'бод',
'оролд',
'ойрдоо',
'дөрөө',
'олдлоо',
'боол',
'бодлоор',
'ойд',
'дорой',
'болор',
'бороо',
'дөл',
'дөрөө',
'өрөө',
'өрөөл',
'оройд',
'олоод',
'болоод',
'бор',
'өөрөөр',
'рыб',
'орыб',
'одый',
'бай',
'байр',
'ах',
'ахлах',
'алхах',
'айл',
'хайр',
'хайхрах',
'паар',
'пөөх',
'поох',
'пор',
'под',
'пад',
'байрлах',
'бөөрлөх',
'хороолол',
'парад',
'болдоо',
'бадрах',
'бадрал',
'бодрол',
'алдар',
'балар',
'болор',
'харлах',
'халдах',
'бордох',
'хоолой',
'хараа',
'хөрөө',
'дараа',
'папа',
'халх',
'өрөх',
'байх',
'одоо  хоолоо ол',
'хөл доороо хай',
'айл өрх болох',
'алхаа алхах',
'ойр ойроор алдал',
'бөх бөхөөрөө бөөрлө',
'арай ахар ахраар',
'жаргал гуай',
'жаран жаргалан',
'гэрэл гөлгөө',
'дэгээ энгэр',
'эхнэр хорголж',
'нарлаг борлог',
'данхар дархан',
'драп дорж',
'поожоо дах',
'драпны ой',
'гоц гүц',
'дош дөл',
'дух дүн',
'дүр дэд',
'жад жөр',
'үйлдэл',
'үнэ ханш',
'үүд хаалга',
'хүж арц',
'цай цүй',
'цал цул',
'уур ууш',
'гүүр гүнж',
'даалуу дарш',
'доош шөнө',
'дунд пүрш',
'үдэш үнэг',
'үхэр хурц',
'цонх цана',
'зүйл зүүд',
'зун цаг',
'зураг хуар',
'фабрика форд',
'карма кадр',
'дагз дайз',
'жүнз жунз',
'жүрж бааз',
'клуб граф',
'цүнх франц',
'пүнз зэрэг',
'задгай залаа',
'ганзага зуншлага',
'газар зүй',
'бөхөлзүүл',
'бөөрөлзгөнө',
'зургаадугаар',
'кроп кабала',
'кабан каждый',
'казар казах',
'какао кайла',
'как канц',
'фой фазан',
'фагон фабула',
'фабкор фарфор',
'фарш фаш',
'мөөхий',
'тэнгэрийн',
'мал мод',
'хот том',
'тос хас',
'алт сур',
'мэх моод',
'топ сайхан',
'сунгаж цацсан',
'зүсэр хасар',
'тарган тоомсог',
'баатарлаг',
'бийр цаас',
'цасан даам',
'тойрог тором',
'суниа тийм',
'охь бохь',
'барь хорь',
'толь дарь',
'суурьд',
'сургууль',
'ёотон',
'ёороол',
'ёндон',
'ёохор',
'ёмбоо',
'ёсоор',
'тоть',
'бахь',
'соль',
'морь',
'ёслол',
'оёдол',
'ёсгүй',
'томьёо',
'хөх',
'бийр',
'барс',
'Алтанбулаг',
'Арвайхээр',
'Цэцэрлэг',
'Улаанбаатар',
'Орхон',
'Москва',
'Чойбалсан',
'Сүхбаатар',
'Сэлэнгэ',
'Хэрлэн',
'Онон',
'далайд усч',
'нойронд сэргэг',
'номонд мэргэн',
'үйлэнд уран',
'үгэнд цэцэн',];

//init word
let randomWord;
let score = 0;
let time = 20;
let difficulty =
  localStorage.getItem("difficulty") !== null
    ? localStorage.getItem("difficulty")
    : "medium";
//set diff select value
difficultySelect.value = difficulty;
//focus on text
text.focus();
//start count down
const timeInterval = setInterval(updateTime, 1000);
//generate random word
function getRandomWord() {
  return words[Math.floor(Math.random() * words.length)];
}
//add word to dom
function addWordToDOM() {
  randomWord = getRandomWord();
  word.innerHTML = randomWord;
}
addWordToDOM();
//update score
function updateScore() {
  score++;
  scoreEl.innerHTML = score;
}

//update time
function updateTime() {
  time--;
  timeEl.innerHTML = time + "с";
  if (time === 0) {
    clearInterval(timeInterval);
    gameOver();
  }
}
//game over
function gameOver() {
  endgameEl.innerHTML = `
        <h1> Цаг дууслаа</h1>
        <p>Таны эцсийн оноо  ${score} байна</p>
        <button onclick="location.reload()">дахин эхлэх</button>
    `;
  endgameEl.style.display = "flex";
}
//event
text.addEventListener("input", (e) => {
  const insetedText = e.target.value;
  if (insetedText === randomWord) {
    addWordToDOM();
    updateScore();
    //clear
    e.target.value = "";
    if (difficulty === "hard") {
      time += 2;
    } else if (difficulty === "medium") {
      time += 3;
    } else {
      time += 4;
    }

    updateTime();
  }
});
//setting
settingBtn.addEventListener("click", () => settings.classList.toggle("hide"));
//setting select
settingsForm.addEventListener("change", (e) => {
  difficulty = e.target.value;
  localStorage.setItem("difficulty", difficulty);
});
