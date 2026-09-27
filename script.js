const $=s=>document.querySelector(s);
const $$=s=>document.querySelectorAll(s);

const bootLines=[
  ["initializing TEJAS.EXE...", "ok"],
  ["loading birthday_protocol...", "ok"],
  ["searching memory_drive...", "ok"],
  ["warning: excessive affection detected.", "warn"],
  ["warning: subject is annoyingly lovable.", "warn"],
  ["system ready.", "ok"]
];
let lineIndex=0;
const lines=$("#bootLines"), progress=$("#bootProgress"), bootBtn=$("#bootBtn");
const interval=setInterval(()=>{
  if(lineIndex<bootLines.length){
    const [txt,cls]=bootLines[lineIndex++];
    const p=document.createElement("div"); p.textContent="> "+txt; p.className=cls;
    lines.appendChild(p); progress.style.width=(lineIndex/bootLines.length*100)+"%";
  }else{clearInterval(interval);bootBtn.classList.remove("hidden")}
},360);

bootBtn.addEventListener("click",()=>{
  $("#boot").style.transition="opacity .5s"; $("#boot").style.opacity="0";
  setTimeout(()=>{$("#boot").remove();$("#desktop").classList.remove("hidden")},500);
});

function clock(){
  const d=new Date();
  $("#clock").textContent=d.toLocaleTimeString([], {hour:"2-digit",minute:"2-digit"});
}
clock();setInterval(clock,1000);

const apps={
profile:{
title:"PLAYER_PROFILE",
desc:"subject data / birthday upgrade",
html:`<div class="profile-grid">
<div class="stat"><label>NAME</label><strong>TEJAS</strong></div>
<div class="stat"><label>VERSION</label><strong>+1 YEAR</strong></div>
<div class="stat"><label>CUTEST</label><strong>∞/10</strong><div class="bar"><i style="width:100%"></i></div></div>
<div class="stat"><label>SWAG</label><strong>∞</strong><div class="bar"><i style="width:100%"></i></div></div>
<div class="stat"><label>VALORANT BULLYING</label><strong>12/10</strong><div class="bar"><i style="width:100%"></i></div></div>
<div class="stat"><label>ABILITY TO MAKE ME WET</label><strong>classified</strong><div class="bar"><i style="width:100%"></i></div></div>
<div class="stat"><label>MAKING ME LAUGH</label><strong>∞</strong><div class="bar"><i style="width:100%"></i></div></div>
<div class="stat"><label>DIRTY TALKING</label><strong>dangerous</strong><div class="bar"><i style="width:97%"></i></div></div>
<div class="stat"><label>PRETTINESS</label><strong>∞/10</strong><div class="bar"><i style="width:100%"></i></div></div>
</div>
<div class="console" style="margin-top:12px"><span class="dim">> hidden attribute:</span> <span class="pink">ridiculously cute when he smiles with his teeth</span><br><span class="dim">> favourite word:</span> <span class="pink">baby</span><br><span class="dim">> current status:</span> <span class="green">loved ♡</span></div>`
},
files:{
title:"CASE_FILES",
desc:"classified memories / click a file to open",
html:`<div class="case-list">
<div class="case"><small>CASE_001 / VALORANT</small><strong>The Bullying Department</strong><p>you js love bullying me don't you? be it in val or in general. i js know it is your fav thing to do and you love getting a reaction out of me and making me whine. but i love how it makes you genuinely smile and giggle, it's so cute &lt;3</p></div>
<div class="case"><small>CASE_002 / CALLS</small><strong>The 3-Hour Call</strong><p>We'd start talking about one random thing and somehow three or four hours would disappear. I could talk to you about life forever.</p></div>
<div class="case"><small>CASE_003 / MOVIES</small><strong>The Tiny Cinema</strong><p>one of my favorite memories with you is movie night. 10 things i hate about you, crazy stupid love, obsession and even palm springs. all of it was so fun and i js love laughing over the same thing w u.</p></div>
<div class="case"><small>CASE_004 / CLOTHING</small><strong>The T-Shirt Incident</strong><p>the moment i got your t-shirt and smelled it, i felt so happy and loved i genuinely did cry and you heard me T^T. it is my favorite thing to wear. LITERALLY. js the way i have something that you owned and wore once makes me really happy :&gt; and your t-shirt is mine now hehe, soon more than half your wardrobe will be mine too</p></div>
<div class="case"><small>CASE_005 / VIDEO CALL</small><strong>The Bicep Incident</strong><p>OMG THIS. ISTG. the first time you sent me the picture w that filter i was like woah he looks so hot wtf AND THEN JS THE PICTURE OF YOUR BICEP. TS ONE OF MY FAVS. and then of course, you js flexing them on video call istg it makes me imagine sm stuff like how i would lay down on it :( bite it and maybe you can even squeeze my head in between :p</p></div>
<div class="case"><small>CASE_006 / FAMILY</small><strong>The Worlds Overlapping</strong><p>AHHHHHH THIS. one of my most favorite of all. its js how you and my family talk to each other and are comfortable, how they already consider you family too. and the way its the same with your mumma and family as well. it is the cutest and most intimate thing ever. even kiyo listen to you when you call his name out and i love talkin to ora on video call T^T</p></div>
<div class="case"><small>CASE_007 / INTIMACY</small><strong>Goonection</strong><p>The most intimate thing ever and honestly i love how neither of us are shy about it anymore :3 Gooning with you, finishing at the same time, being out of breath for a few minutes after that, telling how much we love each other in between, after doing it, giving each other kisses and the most important, making promises. it makes me feel so close to you, so loved. it really is an important part of you and me :3</p></div>
</div>`
},
chat:{
title:"CHAT_LOG",
desc:"selected messages / names changed to protect the stupid",
html:`<div class="chat">
<div class="bubble him"><small>TEJAS</small>super yurrrrrrrrr</div>
<div class="bubble you"><small>YOU</small>what does that even mean 😭</div>
<div class="bubble him"><small>TEJAS</small>super yurrrrrrrr</div>
<div class="bubble you"><small>YOU</small>rawrrrrrrr</div>
<div class="bubble him"><small>TEJAS</small>bro what</div>
<div class="bubble you"><small>YOU</small>you started this</div>
<div class="bubble him"><small>TEJAS</small>bal daati</div>
<div class="bubble you"><small>YOU</small>PRIOTIRIZE</div>
<div class="bubble him"><small>TEJAS</small>...</div>
<div class="console" style="margin-top:25px"><span class="dim">[system]</span> conversation has become incomprehensible. <span class="pink">this is probably your fault.</span></div>
</div>`
},
diagnostic:{
title:"TEJAS_DIAGNOSTIC",
desc:"running completely scientific tests",
html:`<div class="diag-list">
${["makes dumb jokes","smiles with teeth","calls girlfriend 'baby'","gets shy when complimented","is suspiciously good at everything","makes girlfriend laugh","looks hot while smoking on call","somehow became a safe person"].map(x=>`<div class="diag"><span>[✓] ${x}</span><b>PASS</b></div>`).join("")}
<div class="diag fail"><span>[!] excessive boyfriend behaviour detected</span><b>CRITICAL</b></div>
</div><div class="diagnosis">DIAGNOSIS<strong>unfortunately, you're Tejas.</strong><br><br>There is no known cure. Birthday cake may help.</div>`
},
music:{
title:"SOUNDTRACK",
desc:"songs that remind me of you",
html:`<div class="player"><div class="album"><div class="vinyl"></div></div>
<div class="track"><small>TRACK_01</small><strong>I've Never Felt This Way</strong><span>Take Care</span><button onclick="window.open('https://open.spotify.com/search/Ive%20Never%20Felt%20This%20Way%20Take%20Care','_blank')">SPOTIFY ↗</button></div>
<div class="track"><small>TRACK_02</small><strong>Love You</strong><span>Bleood</span><button onclick="window.open('https://open.spotify.com/search/Love%20You%20Bleood','_blank')">SPOTIFY ↗</button></div>
<div class="track"><small>TRACK_03</small><strong>fondu</strong><span>laydownrot</span><button onclick="window.open('https://open.spotify.com/search/fondu%20laydownrot','_blank')">SPOTIFY ↗</button></div>
<div class="track"><small>TRACK_04</small><strong>locked in love</strong><span>Saam Sultan</span><button onclick="window.open('https://open.spotify.com/search/locked%20in%20love%20Saam%20Sultan','_blank')">SPOTIFY ↗</button></div>
<div class="track"><small>TRACK_05</small><strong>telepathy love</strong><span>claralasan</span><button onclick="window.open('https://open.spotify.com/search/telepathy%20love%20claralasan','_blank')">SPOTIFY ↗</button></div>
<div class="track"><small>TRACK_06</small><strong>Can't Take My Eyes Off You</strong><span>Frankie Valli</span><button onclick="window.open('https://open.spotify.com/track/4mMJyNJ5AuCH8lfIrnsDEs','_blank')">SPOTIFY ↗</button></div>
</div>`
},
photos:{
title:"MEMORY_DRIVE",
desc:"four little pieces of us, safely stored",
html:`<div class="photo-note">MEMORY DRIVE ONLINE.<br><br>four little screenshots from our favourite digital universe ♡</div><div class="photo-slots">
<div class="slot photo-slot"><img src="assets/memory-01.png" alt="Memory 01"><span>MEMORY_01</span></div>
<div class="slot photo-slot"><img src="assets/memory-02.png" alt="Memory 02"><span>MEMORY_02</span></div>
<div class="slot photo-slot"><img src="assets/memory-03.png" alt="Memory 03"><span>MEMORY_03</span></div>
<div class="slot photo-slot"><img src="assets/memory-04.png" alt="Memory 04"><span>MEMORY_04</span></div></div>`
},
final:{
title:"FINAL_MESSAGE.txt",
desc:"open carefully",
html:`<div class="final"><div class="heart">♡</div><h2>HAPPY BIRTHDAY MEOW BEAR MWAHHHH</h2>
<p>finally 22 huh? AHAHAHAH UNC UNC UNC SAHURRRRRRR imagine bein 22 tejas like h-h-holyy shittt.</p>
<p>jokes apart i love you the most my prettiest boyfie, i am so glad you are with me and i am sooooooooooooo glad that i get to be with you on your birthday. sure i am not there in person but at least i get to wish you and stay by your side.</p>
<p>i really really really hope you stay the happiest and get all the things you wish for, and i wanna be by your side and be proud of you and celebrate you being successful. i know i know very corny and cheesy but it is genuinely how i feel&lt;3</p>
<p>you make me so happy, you make me feel so loved and baby, istg you are my everything. i want to have a future with you and only you. i wanna grow w u, love you even more than i already do, hug you, kiss you, have a freakathon :P. every single thing.</p>
<p>you are the most precious to me my love. please be happy always, i will do everything i possibly can to make sure you are loved.</p>
<p>happiest birthday my pretty meow bear, my boyfie, my husband :3 i love you the most. i used up all my brain power in this T^T i really hope you like it.</p>
<div class="sign">MWAHHHHHHHHHHHHHHHHHHH ♡</div></div>`
}
};

function openApp(key){
  if(key==="ribbon"){ $("#secretOverlay").classList.remove("hidden"); return; }
  const data=apps[key]; if(!data)return;
  const win=document.createElement("div"); win.className="window";
  const offset=document.querySelectorAll(".window").length*25;
  win.style.left=`calc(50% - 350px + ${offset%80}px)`;
  win.style.top=`calc(50% - 275px + ${offset%60}px)`;
  win.innerHTML=`<div class="window-head"><span>${data.title}</span><div class="controls"><button class="min">—</button><button class="close">×</button></div></div><div class="window-body"><div class="app-title">${data.title}</div><div class="app-desc">${data.desc}</div>${data.html}</div>`;
  $("#windowLayer").appendChild(win);
  win.querySelector(".close").onclick=()=>win.remove();
  win.querySelector(".min").onclick=()=>win.style.display=win.style.display==="none"?"block":"none";
  win.querySelectorAll(".case").forEach(c=>c.addEventListener("click",()=>c.classList.toggle("open")));
}
$$(".app-icon").forEach(icon=>icon.addEventListener("dblclick",()=>openApp(icon.dataset.app)));
$$(".app-icon").forEach(icon=>icon.addEventListener("click",()=>{$("#status").textContent=`OPEN ${icon.innerText.replace(/\n/g,"_").toUpperCase()}... DOUBLE-CLICK TO LAUNCH.`}));

$("#closeSecret").addEventListener("click",()=>$("#secretOverlay").classList.add("hidden"));


// Tiny pixel cat that follows the mouse.
const cursorCat = document.getElementById("cursorCat");
let catX = window.innerWidth / 2, catY = window.innerHeight / 2;
let targetX = catX, targetY = catY;

window.addEventListener("mousemove", (e) => {
  targetX = e.clientX;
  targetY = e.clientY;
});

function moveCat(){
  catX += (targetX - catX) * 0.12;
  catY += (targetY - catY) * 0.12;
  if(cursorCat){
    cursorCat.style.transform = `translate(${catX}px, ${catY}px) translate(-50%, -50%)`;
  }
  requestAnimationFrame(moveCat);
}
moveCat();


// Five tiny desktop secrets.
const starMessage = document.getElementById("starMessage");
document.querySelectorAll(".desktop-star").forEach((star) => {
  star.addEventListener("click", (event) => {
    event.stopPropagation();
    starMessage.textContent = star.dataset.starText;
    starMessage.classList.remove("hidden");
  });
});
if (starMessage) {
  starMessage.addEventListener("click", () => starMessage.classList.add("hidden"));
}


// Background music: local uploaded audio.
(function(){
  const toggle=document.getElementById('bg-music-toggle');
  const player=document.getElementById('bg-music-player');
  const close=document.getElementById('bg-music-close');
  const audio=document.getElementById('bg-music-audio');
  if(!toggle||!audio) return;

  let started=false;
  const playMusic=()=>{
    audio.play().then(()=>{
      started=true;
      toggle.classList.add('playing');
      toggle.setAttribute('aria-label','Pause background music');
    }).catch(()=>{});
  };
  const pauseMusic=()=>{
    audio.pause();
    toggle.classList.remove('playing');
    toggle.setAttribute('aria-label','Play background music');
  };

  toggle.addEventListener('click',()=>{
    if(audio.paused) playMusic(); else pauseMusic();
    if(player){
      player.classList.add('open');
      player.setAttribute('aria-hidden','false');
      clearTimeout(window.__bgMusicTimer);
      window.__bgMusicTimer=setTimeout(()=>{
        player.classList.remove('open');
        player.setAttribute('aria-hidden','true');
      },2200);
    }
  });

  close?.addEventListener('click',()=>{
    player.classList.remove('open');
    player.setAttribute('aria-hidden','true');
  });

  // Browsers may block audible autoplay until the user interacts.
  const startAfterInteraction=()=>{
    if(!started) playMusic();
    window.removeEventListener('pointerdown',startAfterInteraction);
    window.removeEventListener('keydown',startAfterInteraction);
  };
  window.addEventListener('pointerdown',startAfterInteraction,{once:true});
  window.addEventListener('keydown',startAfterInteraction,{once:true});

  audio.addEventListener('play',()=>{
    toggle.classList.add('playing');
    toggle.setAttribute('aria-label','Pause background music');
  });
  audio.addEventListener('pause',()=>{
    toggle.classList.remove('playing');
    toggle.setAttribute('aria-label','Play background music');
  });
})();
