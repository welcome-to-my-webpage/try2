// Enable dark theme by default if not already present
document.addEventListener('DOMContentLoaded', function() {
  if (!document.body.classList.contains('dark-theme')) {
    document.body.classList.add('dark-theme');
  }
});
// --- 2 Intro Videos, 12 Story Pages, 1 End Photoframe Page ---
const storySteps = [

  {
    html: `<h2>Today, I am going to take you through a story about these two people...</h2>
      <video src="/A4FE46A6-CAE1-4A3D-BA9D-B348295C8ADF.MP4" controls autoplay style="max-width:100%;border-radius:16px;"></video>`
  },
  {
    html: `<h2>Look at these two people in the present year 2025,<br>but let me take you back 10 years.</h2>
      <video src="/C41C5F08-8487-4181-9FC2-625C131CB254.MP4" controls autoplay style="max-width:100%;border-radius:16px;"></video>`
  },
  // ...existing 12 story pages...
  {
    html: `<h2>First Page</h2><p>It all started with two kids who met in DDA coaching. Among hundreds of random kids running around, fate (or maybe pure chaos) decided to make them meet.<br>They vibed instantly—like two puzzle pieces that weirdly fit. But here’s the twist: one of them thought they were already dating (awkward 😂). Looking back now, it’s just hilarious.</p><img src="/first-page.jpg" alt="First Page" />`,
  },
  {
    html: `<h2>Second Page</h2><p>After 9 months of being bestest of friends, the girl finally started liking the boy too. And boom—dating began.</p><img src="/second_page.jpg" alt="Second Page" />`,
  },
  {
    html: `<h2>Third Page</h2><p>Dating as 14-year-olds was not flowers and violins—it was hugging behind cars (butterflies level: 1000 🦋), sneaky park hand-holding, and ninja-style secret meetings. Legendary.</p><img src="/third-page.jpg" alt="Third Page" />`,
  },
  {
    html: `<h2>Fourth Page</h2><p>Then came the “the breakup 💔". Dumbest decision ever. But they promised to always be friends.</p><img src="/fourth-page.png" alt="Fourth Page" />`,
  },
  {
    html: `<h2>Fifth Page</h2><p>And they actually did stay friends—cycling around, endless conversations, and being each other’s constant chaos partners.</p><img src="/fifth-page.jpg" alt="Fifth Page" />`,
  },
  {
    html: `<h2>Sixth Page</h2><p>Then college happened—new cities, new lives, new adventures. They drifted, discovered themselves, had new relationships. Both thought what they had was just a childhood chapter. (Spoiler: HAHA, nope.)</p><img src="/sixth-page1.jpeg" alt="Sixth Page 1" /><img src="/sixth-page2.webp" alt="Sixth Page 2" />`,
  },
  {
    html: `<h2>Seventh Page</h2><p>Both went through their own heartbreaks and last year of college both moved to bangalore for internships. And ofcourse—out of nowhere—they randomly decided to meet up in Bangalore. Plot twist enters the chat.</p><img src="/seventh-page.jpg" alt="Seventh Page" />`,
  },
  {
    html: `<h2>Eighth Page</h2><p>Of course, sparks flew again. When they met again after 7 years, they talked for 4 hours straight like no time had passed. It felt brand new and yet so nostalgic—like time had paused just for them.</p><img src="/eight-page.jpg" alt="Eighth Page" />`,
  },
  {
    html: `<h2>Ninth Page</h2><p>That month in Bangalore was WILD—scooty rides, HSR terrace, Indiranagar restuarants , late-night walks, endless calls, and intense 8-ball pool battles. madness, but pure magic.</p><img src="/ninth-page.jpg" alt="Ninth Page" />`,
  },
  {
    html: `<h2>Tenth Page</h2><p>But then… separate cities again. They had two options:<br><br>Stay together and suffer the pain of long-distance. (had to make it dramatic)<br><br>Not stay together (which, LOL, didn't feel even an option).<br>So, they kept talking… and talking…</p><img src="/tenth-page.jpg" alt="Tenth Page" />`,
  },
  {
    html: `<h2>Eleventh Page</h2><p>On 31st Oct 2024 (Halloween but make it romantic), the girl finally asked the boy out. After 7 years, they were officially dating again. It felt perfect—though, yeah, needed a little adjustment.</p><img src="/elevnth-page.jpg" alt="Eleventh Page" />`,
  },
  {
    html: `<h2>Twelfth Page</h2><p>Now there was no looking back—from visiting each other, to concerts, to endless trips—it felt unreal. And here we are.<br>Today is that boy’s birthday.<br>And the girl wanted to do something special.<br>So here it is—Happy Birthday to my best friend, my partner-in-crime, and my love. 💕 You’re crazy, annoying, amazing—and I wouldn’t want it any other way.</p><img src="/twelth-page.jpg" alt="Twelfth Page" />`,
  },
  // End photoframe page
  {
    html: `<h2>End Page</h2>
      <div class="photoframe-grid">
        <div class="photoframe-item"><img src="/IMG_0241.jpg" alt="Memory 1" /></div>
        <div class="photoframe-item"><img src="/IMG_0370.jpg" alt="Memory 2" /></div>
        <div class="photoframe-item"><img src="/IMG_0455.jpg" alt="Memory 3" /></div>
        <div class="photoframe-item"><img src="/IMG_9176.jpg" alt="Memory 4" /></div>
      </div>
      <p style="margin-top:24px;font-size:1.2em;color:#fda085;">Thank you for being part of this story. Happy Birthday! 💖</p>`
  },
];

let currentStep = 0;

// Transition effect between pages
function fadeOutIn(callback) {
  const content = document.getElementById('story-content');
  content.classList.add('fade-out');
  setTimeout(() => {
    callback();
    content.classList.remove('fade-out');
    content.classList.add('fade-in');
    setTimeout(() => {
      content.classList.remove('fade-in');
    }, 600);
  }, 500);
}

// Special effects for each page
function launchSpecialEffect(step) {
  // End page: confetti
  if (step === storySteps.length - 1) {
    launchConfetti();
    return;
  }
  // Sparkles for intro video
  if (step === 0) {
    launchSparkles();
    return;
  }
  // Hearts for page 1 (first story page)
  if (step === 2) {
    launchHearts();
    return;
  }
  // Stars for page 5
  if (step === 6) {
    launchStars();
    return;
  }
  // Balloons for page 10
  if (step === 11) {
    launchBalloons();
    return;
  }
  // Clear effects for other pages
  clearEffects();
}

// Sparkle effect
function launchSparkles() {
  clearEffects();
  const canvas = document.querySelector('.confetti');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  let sparkles = [];
  for (let i = 0; i < 80; i++) {
    sparkles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: 1 + Math.random() * 2,
      alpha: 0.5 + Math.random() * 0.5,
      dx: (Math.random() - 0.5) * 0.7,
      dy: (Math.random() - 0.5) * 0.7
    });
  }
  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let s of sparkles) {
      ctx.save();
      ctx.globalAlpha = s.alpha;
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, 2 * Math.PI);
      ctx.fillStyle = '#fffbe9';
      ctx.shadowColor = '#fda085';
      ctx.shadowBlur = 8;
      ctx.fill();
      ctx.restore();
      s.x += s.dx;
      s.y += s.dy;
      if (s.x < 0 || s.x > canvas.width || s.y < 0 || s.y > canvas.height) {
        s.x = Math.random() * canvas.width;
        s.y = Math.random() * canvas.height;
      }
    }
    if (window._sparkleActive) requestAnimationFrame(draw);
    else ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
  window._sparkleActive = true;
  draw();
}

// Hearts effect
function launchHearts() {
  clearEffects();
  const canvas = document.querySelector('.confetti');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  let hearts = [];
  for (let i = 0; i < 40; i++) {
    hearts.push({
      x: Math.random() * canvas.width,
      y: Math.random() * -canvas.height,
      size: 16 + Math.random() * 16,
      speed: 1 + Math.random() * 1.5,
      alpha: 0.7 + Math.random() * 0.3
    });
  }
  function drawHeart(x, y, size) {
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(x, y + size/4);
    ctx.bezierCurveTo(x, y, x - size/2, y, x - size/2, y + size/4);
    ctx.bezierCurveTo(x - size/2, y + size/2, x, y + size*0.8, x, y + size);
    ctx.bezierCurveTo(x, y + size*0.8, x + size/2, y + size/2, x + size/2, y + size/4);
    ctx.bezierCurveTo(x + size/2, y, x, y, x, y + size/4);
    ctx.closePath();
    ctx.fillStyle = '#fda085';
    ctx.globalAlpha = 0.8;
    ctx.fill();
    ctx.restore();
  }
  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let h of hearts) {
      drawHeart(h.x, h.y, h.size);
      h.y += h.speed;
      if (h.y > canvas.height + 40) {
        h.y = -40;
        h.x = Math.random() * canvas.width;
      }
    }
    if (window._heartsActive) requestAnimationFrame(draw);
    else ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
  window._heartsActive = true;
  draw();
}

// Stars effect
function launchStars() {
  clearEffects();
  const canvas = document.querySelector('.confetti');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  let stars = [];
  for (let i = 0; i < 60; i++) {
    stars.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: 2 + Math.random() * 2,
      alpha: 0.5 + Math.random() * 0.5,
      twinkle: Math.random() * Math.PI * 2
    });
  }
  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let s of stars) {
      ctx.save();
      ctx.globalAlpha = s.alpha * (0.7 + 0.3 * Math.sin(Date.now()/400 + s.twinkle));
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, 2 * Math.PI);
      ctx.fillStyle = '#fff';
      ctx.shadowColor = '#fda085';
      ctx.shadowBlur = 10;
      ctx.fill();
      ctx.restore();
    }
    if (window._starsActive) requestAnimationFrame(draw);
    else ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
  window._starsActive = true;
  draw();
}

// Balloons effect
function launchBalloons() {
  clearEffects();
  const canvas = document.querySelector('.confetti');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  let balloons = [];
  for (let i = 0; i < 18; i++) {
    balloons.push({
      x: Math.random() * canvas.width,
      y: canvas.height + Math.random() * 100,
      r: 18 + Math.random() * 16,
      color: `hsl(${Math.random()*360},90%,70%)`,
      speed: 1 + Math.random() * 1.2
    });
  }
  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let b of balloons) {
      ctx.save();
      ctx.beginPath();
      ctx.ellipse(b.x, b.y, b.r*0.7, b.r, 0, 0, 2*Math.PI);
      ctx.fillStyle = b.color;
      ctx.globalAlpha = 0.85;
      ctx.fill();
      ctx.beginPath();
      ctx.moveTo(b.x, b.y + b.r);
      ctx.lineTo(b.x, b.y + b.r + 24);
      ctx.strokeStyle = '#b97a56';
      ctx.lineWidth = 2;
      ctx.stroke();
      ctx.restore();
      b.y -= b.speed;
      if (b.y < -40) {
        b.y = canvas.height + 40;
        b.x = Math.random() * canvas.width;
      }
    }
    if (window._balloonsActive) requestAnimationFrame(draw);
    else ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
  window._balloonsActive = true;
  draw();
}

// Clear all effects
function clearEffects() {
  window._sparkleActive = false;
  window._heartsActive = false;
  window._starsActive = false;
  window._balloonsActive = false;
  const canvas = document.querySelector('.confetti');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
}

function showStep(step) {
  fadeOutIn(() => {
    const content = document.getElementById('story-content');
    content.innerHTML = storySteps[step].html;
    launchSpecialEffect(step);

    // Interactive memory reveal (if any)
    if (step === 1) {
      document.querySelectorAll('.memory-btn').forEach(btn => {
        btn.onclick = function() {
          const img = document.createElement('img');
          img.src = btn.getAttribute('data-img');
          img.alt = 'Memory';
          const reveal = document.getElementById('memory-reveal');
          reveal.innerHTML = '';
          reveal.appendChild(img);
          img.style.opacity = 0;
          setTimeout(() => { img.style.transition = 'opacity 0.7s'; img.style.opacity = 1; }, 10);
        };
      });
    }

    // Next button logic
    if (step < storySteps.length - 1) {
      const btn = document.createElement('button');
      btn.textContent = 'Next';
      btn.onclick = () => {
        currentStep++;
        showStep(currentStep);
      };
      setTimeout(() => { btn.focus(); }, 100);
      content.appendChild(btn);
    }
  });
}

// Confetti effect (smoother, animated)
function launchConfetti() {
  const canvas = document.querySelector('.confetti');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  let pieces = [];
  for (let i = 0; i < 140; i++) {
    pieces.push({
      x: Math.random() * canvas.width,
      y: Math.random() * -canvas.height,
      r: 6 + Math.random() * 10,
      d: Math.random() * 80,
      color: `hsl(${Math.random()*360},90%,70%)`,
      tilt: Math.random() * 10 - 10,
      tiltAngle: 0,
      tiltAngleIncremental: (Math.random() * 0.07) + 0.05,
      opacity: 0.7 + Math.random() * 0.3
    });
  }
  let angle = 0;
  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    angle += 0.01;
    for (let i = 0; i < pieces.length; i++) {
      let p = pieces[i];
      p.y += (Math.cos(angle + p.d) + 3 + p.r/2) * 0.7;
      p.x += Math.sin(angle);
      p.tiltAngle += p.tiltAngleIncremental;
      p.tilt = Math.sin(p.tiltAngle) * 15;
      ctx.save();
      ctx.globalAlpha = p.opacity;
      ctx.beginPath();
      ctx.lineWidth = p.r;
      ctx.strokeStyle = p.color;
      ctx.moveTo(p.x + p.tilt + p.r/3, p.y);
      ctx.lineTo(p.x + p.tilt, p.y + p.tilt + 10);
      ctx.stroke();
      ctx.restore();
    }
    pieces = pieces.filter(p => p.y < canvas.height);
    if (pieces.length > 0) requestAnimationFrame(draw);
    else ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
  draw();
}

// Background music
function playMusic() {
  const music = document.getElementById('bg-music');
  if (music) {
    music.volume = 0.25;
    music.play().catch(()=>{});
  }
}

document.getElementById('start-btn').onclick = () => {
  playMusic();
  currentStep = 0;
  showStep(currentStep);
};
