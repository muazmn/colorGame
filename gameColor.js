const rgb = document.querySelector(".rgb");
const p = document.querySelector(".p")
const elem2 = document.querySelector(".elem2")
const elemkedua = document.querySelector('.elemkedua')
const elem1 = document.querySelector('.elem1');
const hard = document.querySelector(".hard")
const easy = document.querySelector(".easy")
const k2 = document.querySelectorAll(".k2")
const square = document.querySelectorAll('.square');
const satu = document.querySelector(".s")
const dua = document.querySelector(".d")
const tiga = document.querySelector(".t")
const empat = document.querySelector(".em")
const lima = document.querySelector(".l")
const enam = document.querySelector(".e")
const kotak = document.getElementById('kotak')
const header = document.querySelector('.header')
// header.style.backgroundColor = "blue";
const ubahWarna = () => {
  // const rgb1 = [
  //     (r, g, b) => 
  //     `rgb(${Math.floor(r)},${Math.floor(g)},${Math.floor(b)})`,
  //     `rgb(${Math.floor(r)},${Math.floor(g)},${Math.floor(b)})`,
  //     `rgb(${Math.floor(r)},${Math.floor(g)},${Math.floor(b)})`,
  //     `rgb(${Math.floor(r)},${Math.floor(g)},${Math.floor(b)})`,
  //     `rgb(${Math.floor(r)},${Math.floor(g)},${Math.floor(b)})`,
  //     `rgb(${Math.floor(r)},${Math.floor(g)},${Math.floor(b)})`
  // ];
  var randomColor = [
    Math.floor(Math.random() * 16777211).toString(16),
    Math.floor(Math.random() * 16777212).toString(16),
    Math.floor(Math.random() * 16777213).toString(16),
    Math.floor(Math.random() * 16777214).toString(16),
    Math.floor(Math.random() * 16777215).toString(16),
    Math.floor(Math.random() * 16777216).toString(16)
  ];

  const hasilWarna1 = randomColor[Math.floor(Math.random() * 3)]
  const hasilWarna2 = randomColor[Math.floor(Math.random() * 6)]
  var warnaMouseOver = [
    satu.style.backgroundColor = "#" + randomColor[0],
    dua.style.backgroundColor = "#" + randomColor[1],
    tiga.style.backgroundColor = "#" + randomColor[2],
    empat.style.backgroundColor = "#" + randomColor[3],
    lima.style.backgroundColor = "#" + randomColor[4],
    enam.style.backgroundColor = "#" + randomColor[5]
  ];
  function hexToRgb(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  }
  const warnaBaru2 = hexToRgb((hasilWarna2))
  rgb.innerHTML = `RGB(${warnaBaru2.r},${warnaBaru2.g},${warnaBaru2.b})`;
  // rgb.style.color = "#" + hasilWarna2;

  var testRgb = `RGB(${warnaBaru2.r}, ${warnaBaru2.g}, ${warnaBaru2.b})`
  var testRgb2 = testRgb.toLowerCase()
  console.log(testRgb2)
  for (let i = 0; i < square.length; i++) {
    square[i].addEventListener("click", function (ev) {
      console.log(ev.target.style.backgroundColor === testRgb2)
      console.log(ev.target.style.backgroundColor)
      if (ev.target.style.backgroundColor === testRgb2) {
        elemkedua.innerHTML = "CORRECT!!";
        elem1.innerHTML = "TRY AGAIN?"
        elemkedua.style.opacity = "1"
        elemkedua.style.cursor = "pointer"
        square.forEach(s => {
          s.style.backgroundColor = testRgb2
        });
        header.style.backgroundColor = testRgb2;
        ev.target.style.opacity = "1"
        var scorePlus = 0;
        scorePlus = square[i].backgroundColor === testRgb2;
        document.getElementById('result').innerHTML = scorePlus
      } else if (ev.target.style.backgroundColor !== testRgb2) {
        elemkedua.innerHTML = "WRONG!!";
        elem1.innerHTML = "TRY AGAIN?"
        elemkedua.style.opacity = "1"
        elemkedua.style.cursor = "pointer"
        ev.target.style.opacity = "0"
        var scoreMinus = 0;
        scoreMinus = square[i].backgroundColor === testRgb2;
        document.getElementById('result').innerHTML = scoreMinus
      }
    })
  }
  function LightenColor(warnaMouseOver, percent) {
    var num = parseInt(warnaMouseOver.replace("#", ""), 16),
      amt = Math.round(2.55 * percent),
      R = (num >> 16) + amt,
      B = (num >> 8 & 0x00FF) + amt,
      G = (num & 0x0000FF) + amt;
    return "#" + (0x1000000 + (R < 255 ? R < 1 ? 0 : R : 255) * 0x10000 + (B < 255 ? B < 1 ? 0 : B : 255) * 0x100 + (G < 255 ? G < 1 ? 0 : G : 255)).toString(16).slice(1);
  };
  var a = LightenColor(warnaMouseOver[0], 15)
  var b = LightenColor(warnaMouseOver[1], 15)
  var c = LightenColor(warnaMouseOver[2], 15)
  var d = LightenColor(warnaMouseOver[3], 15)
  var e = LightenColor(warnaMouseOver[4], 15)
  var f = LightenColor(warnaMouseOver[5], 15)
}
const ubahWarna2 = () => {
  // const rgb1 = [
  //     (r, g, b) => 
  //     `rgb(${Math.floor(r)},${Math.floor(g)},${Math.floor(b)})`,
  //     `rgb(${Math.floor(r)},${Math.floor(g)},${Math.floor(b)})`,
  //     `rgb(${Math.floor(r)},${Math.floor(g)},${Math.floor(b)})`,
  //     `rgb(${Math.floor(r)},${Math.floor(g)},${Math.floor(b)})`,
  //     `rgb(${Math.floor(r)},${Math.floor(g)},${Math.floor(b)})`,
  //     `rgb(${Math.floor(r)},${Math.floor(g)},${Math.floor(b)})`
  // ];
  var randomColor = [
    Math.floor(Math.random() * 16777211).toString(16),
    Math.floor(Math.random() * 16777212).toString(16),
    Math.floor(Math.random() * 16777213).toString(16),
    Math.floor(Math.random() * 16777214).toString(16),
    Math.floor(Math.random() * 16777215).toString(16),
    Math.floor(Math.random() * 16777216).toString(16)
  ];

  const hasilWarna1 = randomColor[Math.floor(Math.random() * 3)]
  var warnaMouseOver = [
    satu.style.backgroundColor = "#" + randomColor[0],
    dua.style.backgroundColor = "#" + randomColor[1],
    tiga.style.backgroundColor = "#" + randomColor[2],
    empat.style.backgroundColor = "#" + randomColor[3],
    lima.style.backgroundColor = "#" + randomColor[4],
    enam.style.backgroundColor = "#" + randomColor[5]
  ];
  function hexToRgb(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  }
  const warnaBaru1 = hexToRgb((hasilWarna1))
  rgb.innerHTML = `RGB(${warnaBaru1.r},${warnaBaru1.g},${warnaBaru1.b})`;
  // rgb.style.color = "#" + hasilWarna1;

  var testRgb = `RGB(${warnaBaru1.r}, ${warnaBaru1.g}, ${warnaBaru1.b})`
  var testRgb2 = testRgb.toLowerCase()
  console.log(testRgb2)
  for (let i = 0; i < square.length; i++) {
    square[i].addEventListener("click", function (ev) {
      console.log(ev.target.style.backgroundColor === testRgb2)
      console.log(ev.target.style.backgroundColor)
      if (ev.target.style.backgroundColor === testRgb2) {
        elemkedua.innerHTML = "CORRECT!!";
        elem1.innerHTML = "TRY AGAIN?"
        elemkedua.style.opacity = "1"
        elemkedua.style.cursor = "pointer"
        square.forEach(s => {
          s.style.backgroundColor = testRgb2
        });
        header.style.backgroundColor = testRgb2;
        ev.target.style.opacity = "1";
        var scorePlus = 0;
        var scorePlus = square.style.opacity = "1";
        document.getElementById('result').innerHTML = scorePlus
      } else if (ev.target.style.backgroundColor !== testRgb2) {
        elemkedua.innerHTML = "WRONG!!";
        elem1.innerHTML = "TRY AGAIN?"
        elemkedua.style.opacity = "1"
        elemkedua.style.cursor = "pointer"
        ev.target.style.opacity = "0"
        var scoreMinus = 0
        document.getElementById('result').innerHTML = scoreMinus - 1
      }
    })
  }
  function LightenColor(warnaMouseOver, percent) {
    var num = parseInt(warnaMouseOver.replace("#", ""), 16),
      amt = Math.round(2.55 * percent),
      R = (num >> 16) + amt,
      B = (num >> 8 & 0x00FF) + amt,
      G = (num & 0x0000FF) + amt;
    return "#" + (0x1000000 + (R < 255 ? R < 1 ? 0 : R : 255) * 0x10000 + (B < 255 ? B < 1 ? 0 : B : 255) * 0x100 + (G < 255 ? G < 1 ? 0 : G : 255)).toString(16).slice(1);
  };
  var a = LightenColor(warnaMouseOver[0], 15)
  var b = LightenColor(warnaMouseOver[1], 15)
  var c = LightenColor(warnaMouseOver[2], 15)
  var d = LightenColor(warnaMouseOver[3], 15)
  var e = LightenColor(warnaMouseOver[4], 15)
  var f = LightenColor(warnaMouseOver[5], 15)
}







elem2.addEventListener("click", function (ev) {
  if (ev.target !== easy && ev.target == hard) {
    hard.style.backgroundColor = "#2C8E99";
    hard.style.color = "white";
    easy.style.backgroundColor = ""
    easy.style.color = "";
    elemkedua.style.opacity = "1"
    elemkedua.style.cursor = "pointer"
    elem1.innerHTML = "NEW COLOUR"
    for (var i = 0; i < square.length; i++) {
      square[i].style.opacity = "1"
    }
    for (const muaz of k2) {
      kotak.appendChild(muaz);
    }
    elemkedua.style.opacity = "0"
    elemkedua.style.cursor = "context-menu"
  } else if (ev.target !== hard && ev.target == easy) {
    easy.style.backgroundColor = "#2C8E99";
    easy.style.color = "white";
    hard.style.backgroundColor = ""
    hard.style.color = "";
    elemkedua.style.opacity = "1"
    elemkedua.style.cursor = "pointer"
    elem1.innerHTML = "NEW COLOUR"
    for (var i = 0; i < square.length; i++) {
      square[i].style.opacity = "1"
    }
    elemkedua.style.opacity = "0"
    elemkedua.style.cursor = "context-menu"

    for (const item of k2) {
      item.parentNode.removeChild(item);
    }
  }
})

elem1.addEventListener("click", () => {
  ubahWarna2();
  elemkedua.style.opacity = "0"
  elemkedua.style.cursor = "context-menu"
  elem1.innerHTML = "NEW COLOUR"
  for (var i = 0; i < square.length; i++) {
    square[i].style.opacity = "1"
  }
});
easy.addEventListener("click", ubahWarna2);
hard.addEventListener("click", ubahWarna);
window.addEventListener("load", () => {
  elem1.innerHTML = "LET'S PLAY FRIEND"
  elemkedua.style.opacity = "0"
  elemkedua.style.cursor = "context-menu"
})


// function hexToRgb(hex) {
//       var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
//       return result ? {
//     r: parseInt(result[1], 16),
//     g: parseInt(result[2], 16),
//     b: parseInt(result[3], 16)
//   } : null;
// }

// console.log((hexToRgb("#0033ff")));

var muaz = "saya" + " " + "muaz";

console.log(muaz)

