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
  }
];
