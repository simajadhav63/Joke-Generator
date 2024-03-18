const jokes = [
    "Why don't scientists trust atoms? Because they make up everything!",
    "Parallel lines have so much in common. It’s a shame they’ll never meet.",
    "I told my computer I needed a break and now it won’t stop sending me to vacation websites.",
    "Why was the math book sad? Because it had too many problems.",
    "I used to be a baker, but I couldn’t make enough dough.",
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
"How does a penguin build its house? Igloos it together!",
"Why couldn't the bicycle stand up by itself? Because it was two-tired!",
"What do you call a bear with no teeth? A gummy bear!",
"Why don't scientists trust atoms? Because they make up everything!",
"What do you get when you cross a snowman and a vampire? Frostbite!",
"What do you call fake spaghetti? An impasta!",
"Why did the tomato turn red? Because it saw the salad dressing!",
"How do you organize a space party? You planet!",
"What do you call cheese that isn't yours? Nacho cheese!",
"Why did the math book look sad? Because it had too many problems!",
"What do you call a can opener that doesn't work? A can't opener!",
"Why was the broom late? It overswept!",
"What did the ocean say to the shore? Nothing, it just waved!",
"Why was the belt arrested? For holding up a pair of pants!",
"What do you call a fish wearing a crown? A kingfish!",
"Why don't skeletons fight each other? They don't have the guts!",
"What do you get when you cross a snowman and a dog? Frostbite!",
"Why did the tomato turn into a superhero? Because it wanted to fight crime and ketchup with criminals!",
"How does a cucumber become a pickle? It goes through a jarring experience!",
"Why did the golfer bring two pairs of pants? In case he got a hole in one!",
"What do you call a bear in the rain? A drizzly bear!",
"How do you catch a squirrel? Climb a tree and act like a nut!",
"Why did the cookie go to the doctor? Because it was feeling crumbly!",
"What do you call a snowman with a six-pack? An abdominal snowman!",
"Why did the scarecrow go to school? To become outstanding in his field!",
"How do you organize a space party? You planet!",
"What do you call a lazy kangaroo? A pouch potato!",
"Why don't scientists trust stairs? Because they're always up to something!",
"What do you call a belt made out of watches? A waist of time!",
"Why was the broom late? It overswept!",
"What do you call a snowman party? A snowball!",
"Why don't skeletons fight each other? They don't have the guts!",
"What do you call a bear without any teeth? A gummy bear!",
"Why don't eggs tell jokes? Because they might crack up!",
"What do you call a fake noodle? An impasta!",
"Why don't oysters give to charity? Because they're shellfish!",
"How do you catch a squirrel? Climb a tree and act like a nut!",
"Why did the tomato turn red? Because it saw the salad dressing!",
"What do you get when you cross a snowman and a dog? Frostbite!"
    

  ];
  
  function generateJoke() {
    const randomIndex = Math.floor(Math.random() * jokes.length);
    const jokeElement = document.getElementById('joke');
    jokeElement.textContent = jokes[randomIndex];
  }
  
  const generateBtn = document.getElementById('generateBtn');
  generateBtn.addEventListener('click', generateJoke);
  