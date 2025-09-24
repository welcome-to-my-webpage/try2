// --- Story Steps ---
const storySteps = [
  {
    html: `<h2>Once upon a time...</h2><p>There was a wonderful person named <b>your name here</b> who turned 23 today!</p><img src="custom1.jpg" alt="Birthday memory" />`,
  },
  {
    html: `<h2>Memories Together</h2><p>Pick a memory to reveal:</p>
      <button class='memory-btn' data-img='custom2a.jpg'>Memory 1</button>
      <button class='memory-btn' data-img='custom2b.jpg'>Memory 2</button>
      <div id='memory-reveal'></div>`
  },
  {
    html: `<h2>Wishes</h2><p>May your year be filled with love, laughter, and adventure!</p><img src="custom3.jpg" alt="Birthday cake" />`,
  },
  {
    html: `<h2>From Me to You</h2><p>Happy birthday to my best friend and love. Click below for a surprise!</p><button id='final-btn'>See Surprise</button>`,
  },
  {
    html: `<h2>🎉 Surprise! 🎉</h2><p>I love you! Here’s to many more birthdays together. 💖</p><img src="custom4.jpg" alt="Us together" />`,
  },
];

let currentStep = 0;

function fadeOutIn(callback) {
  const content = document.getElementById('story-content');
  content.style.filter = 'blur(6px)';
  content.style.opacity = 0;
  setTimeout(() => {
    callback();
    content.style.filter = 'blur(0)';
    content.style.opacity = 1;
  }, 500);
}

function showStep(step) {
  fadeOutIn(() => {
    const content = document.getElementById('story-content');
    content.innerHTML = storySteps[step].html;

    // Interactive memory reveal
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
        if (currentStep === storySteps.length - 1) {
          launchConfetti();
        }
      };
      setTimeout(() => { btn.focus(); }, 100);
      content.appendChild(btn);
    } else if (step === storySteps.length - 2) {
      document.getElementById('final-btn').onclick = () => {
        currentStep++;
        showStep(currentStep);
        launchConfetti();
      };
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
