"serviceWorker"in navigator&&navigator.serviceWorker.register("/sw.js");const calc=()=>{const e=parseFloat(document.getElementById("target-av").value),t=parseFloat(document.getElementById("noruma-total").value),a=parseFloat(document.getElementById("uriage").value),n=parseFloat(document.getElementById("noruma-remaining").value),d=document.getElementById("result");if(d.value="",isNaN(e)||isNaN(t)||isNaN(a)||isNaN(n))return;let o;if(document.getElementById("hande").checked){const d=parseFloat(document.getElementById("kadou-total").value),c=parseFloat(document.getElementById("kadou-remaining").value);if(isNaN(d)||isNaN(c))return;o=(.01*e-.001*(d+c))*(t+n)-a}else o=.01*e*(t+n)-a;d.value=o<0||0===o?document.getElementById("hikokumin").checked?"目標達成済":"🎌目標達成済🎌":parseFloat(o.toFixed(3))};document.addEventListener("DOMContentLoaded",(()=>{const e=document.getElementById("kimigayo"),t=()=>e.paused&&!document.getElementById("hikokumin").checked&&e.play();e.loop=!0;const a=localStorage.getItem("hikokuminLS");!a&&localStorage.setItem("hikokuminLS","false"),document.getElementById("hikokumin").checked="true"===a,document.title="true"===a?"計算機":"🎌日本万歳🎌",document.body.addEventListener("touchstart",t),document.body.addEventListener("mousedown",t),document.getElementById("calculator").addEventListener("keyup",(()=>calc())),document.getElementById("hande").addEventListener("change",(e=>{document.getElementById("kadou-total").disabled=!e.target.checked,document.getElementById("kadou-remaining").disabled=!e.target.checked,calc()})),document.getElementById("hikokumin").addEventListener("change",(t=>{t.target.checked?e.pause():e.play(),document.title=t.target.checked?"計算機":"🎌日本万歳🎌",localStorage.setItem("hikokuminLS",t.target.checked),calc()})),document.getElementById("share").addEventListener("click",(()=>{navigator.share&&navigator.share({title:"🎌日本万歳🎌",text:"日本同胞国民諸君へ",url:"https://u28ozjhp.github.io/"})})),(async()=>{const e=(new Date).toISOString().slice(0,10),t=await fetch(`https://holidays-jp.github.io/api/v1/${e.slice(0,4)}/date.json`),a=(await t.json())[e];a&&!a.includes("振替休日")&&document.body.classList.add("🎌")})()}));