"serviceWorker"in navigator&&navigator.serviceWorker.register("/sw.js");const kimigayo=new Audio("/assets/kimigayo.opus"),playKimigayo=()=>kimigayo.paused&&!document.getElementById("hikokumin").checked&&kimigayo.play();kimigayo.loop=!0;const calc=()=>{const e=parseFloat(document.getElementById("target-av").value),t=parseFloat(document.getElementById("noruma-total").value),a=parseFloat(document.getElementById("uriage").value),n=parseFloat(document.getElementById("noruma-remaining").value),o=document.getElementById("result");if(o.value="",isNaN(e)||isNaN(t)||isNaN(a)||isNaN(n))return;let d;if(document.getElementById("hande").checked){const o=parseFloat(document.getElementById("kadou-total").value),i=parseFloat(document.getElementById("kadou-remaining").value);if(isNaN(o)||isNaN(i))return;d=(.01*e-.001*(o+i))*(t+n)-a}else d=.01*e*(t+n)-a;o.value=d<0||0===d?document.getElementById("hikokumin").checked?"目標達成済":"🎌目標達成済🎌":parseFloat(d.toFixed(3))};document.addEventListener("DOMContentLoaded",(()=>{const e=localStorage.getItem("hikokuminLS");!e&&localStorage.setItem("hikokuminLS","false"),document.getElementById("hikokumin").checked="true"===e,document.title="true"===e?"計算機":"🎌日本万歳🎌",document.body.addEventListener("touchstart",playKimigayo),document.body.addEventListener("mousedown",playKimigayo),document.getElementById("calculator").addEventListener("keyup",(()=>calc())),document.getElementById("hande").addEventListener("change",(e=>{document.getElementById("kadou-total").disabled=!e.target.checked,document.getElementById("kadou-remaining").disabled=!e.target.checked,calc()})),document.getElementById("hikokumin").addEventListener("change",(e=>{e.target.checked?kimigayo.pause():kimigayo.play(),document.title=e.target.checked?"計算機":"🎌日本万歳🎌",localStorage.setItem("hikokuminLS",e.target.checked),calc()})),document.getElementById("share").addEventListener("click",(()=>{navigator.share&&navigator.share({title:"🎌日本万歳🎌",text:"日本同胞国民諸君へ",url:"https://u28ozjhp.github.io/"})})),(async()=>{const e=(new Date).toISOString().slice(0,10),t=await fetch(`https://holidays-jp.github.io/api/v1/${e.slice(0,4)}/date.json`),a=(await t.json())[e];a&&!a.includes("振替休日")&&document.body.classList.add("🎌")})()}));