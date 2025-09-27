
// --- Story Steps ---
const storySteps = [
  {
    html: `<h2 class='fade-in'>Once upon a time...</h2><p class='slide-in'>There was a idiot named <b>Kuxi</b> who is apparently turning 23 today! <3 <br><span style='color:#fda085;'>These are just some of my fav memories with you, I think this was the day we went to play pickleball for the first/second time. I trying new sports with ya</span></p><img src="IMG_0241.jpg" alt="Birthday memory" class='pop-in' />`,
  },
  {
    html: `<h2 class='fade-in'>Fav moments together</h2><p class='slide-in'>Pick a memory to reveal baby:<br><span style='color:#fda085;'>Each moment we’ve shared, like those in these photos, is a treasure I hold close to my heart.</span></p>
      <button class='memory-btn bounce' data-img='IMG_0370.jpg'>Memory 1</button>
      <button class='memory-btn bounce' data-img='IMG_0455.jpg'>Memory 2</button>
      <div id='memory-reveal'></div>`
  },
  {
    html: `<h2 class='fade-in'>Wishes</h2><p class='slide-in'>May your year be filled with love, laughter, and adventure (with me ofcourse).!<br><span style='color:#fda085;'>This picture is a reminder of the fun and laughter we share—may there be so much more to come!</span></p><img src="IMG_9176.jpg" alt="Birthday cake" class='pop-in' />`,
  },
  {
    html: `<h2 class='fade-in'>From Me to You</h2><p class='slide-in'>Happy birthday to my best friend and love.<br><span style='color:#fda085;'>You make every day brighter, and I’m so grateful for you. Click below for a surprise!</span></p><button id='final-btn' class='pulse'>See Surprise</button>`,
  },
  {
    html: `<h2 class='fade-in'>🎉 Surprise! 🎉</h2><p class='slide-in'>I love you! Here’s to many more birthdays together. 💖<br><span style='color:#fda085;'>Click below to see a special video memory!</span></p><button id='show-video-btn' class='pulse'>Show Video Surprise</button><div id='video-surprise-msg'></div>`,
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

    // Navigation buttons
    const navDiv = document.createElement('div');
    navDiv.style.marginTop = '28px';
    navDiv.style.display = 'flex';
    navDiv.style.justifyContent = 'center';
    navDiv.style.gap = '18px';

    if (step > 0) {
      const backBtn = document.createElement('button');
      backBtn.textContent = 'Back';
      backBtn.className = 'back-btn bounce';
      backBtn.onclick = () => {
        currentStep--;
        showStep(currentStep);
      };
      navDiv.appendChild(backBtn);
    }
    if (step < storySteps.length - 1) {
      const nextBtn = document.createElement('button');
      nextBtn.textContent = 'Next';
      nextBtn.className = 'next-btn bounce';
      nextBtn.onclick = () => {
        currentStep++;
        showStep(currentStep);
        if (currentStep === storySteps.length - 1) {
          launchConfetti();
        }
      };
      navDiv.appendChild(nextBtn);
    }
    content.appendChild(navDiv);

    if (step === storySteps.length - 2) {
      document.getElementById('final-btn').onclick = () => {
        currentStep++;
        showStep(currentStep);
        launchConfetti();
      };
    } else if (step === storySteps.length - 1) {
      // Surprise video logic
      const btn = document.getElementById('show-video-btn');
      if (btn) {
        btn.onclick = () => {
          showRandomVideoWithConfetti();
        };
      }
    }
  });
}

// Show a random video with confetti
function showRandomVideoWithConfetti() {
  const videos = [
    { src: 'A4FE46A6-CAE1-4A3D-BA9D-B348295C8ADF.MP4', label: 'Video 1' },
    { src: 'C41C5F08-8487-4181-9FC2-625C131CB254.MP4', label: 'Video 2' }
  ];
  const chosen = videos[Math.floor(Math.random() * videos.length)];
  const videoDiv = document.getElementById('video-surprise-msg');
  videoDiv.innerHTML = `<video width="320" height="240" controls autoplay style="margin-top:18px;"><source src="${chosen.src}" type="video/mp4">Your browser does not support the video tag.</video>`;
  launchConfetti();
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
