// const { text } = require("express");

const left = document.querySelector(".left"),
    right = document.querySelector(".right"),
    bar = document.querySelector(".bar"),
    editor = document.querySelector(".editor"),
    run = document.querySelector(".btn-run"),
    iframe = document.querySelector(".iframe"),
    darkMode = document.querySelector(".btn-dark"),
    lightMode = document.querySelector(".btn-light"),
    button = document.querySelector(".btn-save");


function drag(e) {
    e.preventDefault();
    document.selection ? document.selection.empty() :
        window.getSelection().removeAllRanges();
    left.style.width = (e.pageX - bar.offsetWidth / 3) + "px";
    editor.resize();
}

bar.addEventListener("mousedown", () => {
        document.addEventListener("mousemove", drag);
})
bar.addEventListener("mouseup", () => {
    document.removeEventListener("mousemove", drag);
    
})

// Run btn event listner
run.addEventListener("click", () => {
    const html = editor.textContent;
    iframe.src = "data:text/html;charset=utf-8," + encodeURI (html);
})

// for css 
// window.onload = function() {
//     let iframe = document.getElementById("iframe");
//     let doc = iframe.contentDocument;
//     doc.body.innerHTML = doc.body.innerHTML + '<style>/********Put your styles here******</style>';
// }
// run.addEventListener("click", () => {
//     const css = editor.textContent;
//     iframe.src = "data:text/css;charset=utf-8," + encodeURI (css);
// })

// fro setting of dark mode
darkMode.addEventListener("click" ,() => {
    editor.style.backgroundColor = "#000";
    editor.style.color ="#eee";
})
// fro setting of Light mode
lightMode.addEventListener("click" ,() => {
    editor.style.backgroundColor = "";
    editor.style.color ="";
})
// for LIVE coding
document.getElementById("live").onclick = function() {
    if (this.checked) {
        editor.addEventListener("keyup", () => {
            const html = editor.textContent;
            iframe.src = `data:text/html;charset=utf-8,${encodeURI(html)}`;
        })
    }
}
// var oDoc, sDefTxt;

// function initDoc() {
//   oDoc = document.getElementById("editor");
//   sDefTxt = oDoc.innerHTML;
//   if (document.compForm.switchMode.checked) { setDocMode(true); }
// }

// function formatDoc(sCmd, sValue) {
//   if (validateMode()) { document.execCommand(sCmd, false, sValue); oDoc.focus(); }
// }

// function validateMode() {
//   if (!document.compForm.switchMode.checked) { return true ; }
//   alert("Uncheck \"Show HTML\".");
//   oDoc.focus();
//   return false;
// }

// function setDocMode(bToSource) {
//   var oContent;
//   if (bToSource) {
//     oContent = document.createTextNode(oDoc.innerHTML);
//     oDoc.innerHTML = "";
//     var oPre = document.createElement("pre");
//     oDoc.contentEditable = false;
//     oPre.id = "sourceText";
//     oPre.contentEditable = true;
//     oPre.appendChild(oContent);
//     oDoc.appendChild(oPre);
//     document.execCommand("defaultParagraphSeparator", false, "div");
//   } else {
//     if (document.all) {
//       oDoc.innerHTML = oDoc.innerText;
//     } else {
//       oContent = document.createRange();
//       oContent.selectNodeContents(oDoc.firstChild);
//       oDoc.innerHTML = oContent.toString();
//     }
//     oDoc.contentEditable = true;
//   }
//   oDoc.focus();
// }

// function printDoc(onclick.btn-file) {
//   if (!validateMode()) { return; }
//   var oPrntWin = window.open("","_blank","width=450,height=470,left=400,top=100,menubar=yes,toolbar=no,location=no,scrollbars=yes");
//   oPrntWin.document.open();
//   oPrntWin.document.write("<!doctype html><html><head><title>Print<\/title><\/head><body onload=\"print();\">" + oDoc.innerHTML + "<\/body><\/html>");
//   oPrntWin.document.close();
// }
// for save as fucntion
// var button = document.getElementById('btn-save');
// button.addEventListener('click', function(e) {
//     var leftVal = document.getElementById('left').value;
//     element.setAttribute('href','data:text/plain;charset=utf-8,' + encodeURIComponent(leftval));
//     element.setAttribute('download',filename);
//     element.style.display = none;
//     document.body.appendChild(element);
//     element.click();
//     document.body.removeChild(element);
// });


var w = window.innerWidth;
var h = window.innerHeight;
var x = document.getElementById("result");
x.innerHTML = "W:" + w + " x H:" + h ;

document.getElementById("btn-file").onclick = function() {
    if (!validateMode()) { return; }
  var PrntWin = window.open("","_blank","width=450,height=470,left=400,top=100,menubar=yes,toolbar=no,location=no,scrollbars=yes");
  PrntWin.document.open();
  PrntWin.document.write("<!doctype html><html><head><title>Print<\/title><\/head><body onload=\"print();\">" + oDoc.innerHTML + "<\/body><\/html>");
  PrntWin.document.close();
}
