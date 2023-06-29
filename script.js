 // Define an object containing arrays of quotes for each person
 const quotes = {
    "Mike Tyson": [
      "I'm a dreamer. I have to dream and reach for the stars, and if I miss a star then I grab a handful of clouds.",
      "Everyone has a plan 'till they get punched in the mouth.",
      "I know why they don't like me because they want the money I have.",
      "The temptation for greatness is the biggest drug in the world."
    ],
    "Muhammad Ali": [
      "Float like a butterfly, sting like a bee.",
      "Don't count the days; make the days count.",
      "I'm not the greatest, I'm the double greatest.",
      "The man who has no imagination has no wings."
    ],
    "Bill Gates": [
      "Success is a lousy teacher. It seduces smart people into thinking they can't lose.",
      "Your most unhappy customers are your greatest source of learning.",
      "If you can't make it good, at least make it look good.",
      "I failed in some subjects in exam, but my friend passed in all. Now he is an engineer in Microsoft and I am the owner of Microsoft."
    ],
    "Arnold": [
      "Strength does not come from winning. Your struggles develop your strengths. When you go through hardships and decide not to surrender, that is strength.",
      "The worst thing I can be is the same as everybody else. I hate that.",
      "Bodybuilding is much like any other sport. To be successful, you must dedicate yourself 100% to your training, diet and mental approach.",
      "The last three or four reps is what makes the muscle grow. This area of pain divides a champion from someone who is not a champion."
    ],
    "Sportsman": [
      "Champions keep playing until they get it right.",
      "The only way to prove that you're a good sport is to lose.",
      "The will to win is important, but the will to prepare is vital.",
      "The difference between the impossible and the possible lies in a person's determination."
    ],
    "Scientist": [
      "Science knows no country, because knowledge belongs to humanity, and is the torch which illuminates the world.",
      "The important thing in science is not so much to obtain new facts as to discover new ways of thinking about them.",
      "Science without religion is lame, religion without science is blind.",
      "An investment in knowledge pays the best interest."
    ],
    "Buddha": [
      "The mind is everything. What you think you become.",
      "Three things cannot be long hidden: the sun, the moon, and the truth.",
      "The only real failure in life is not to be true to the best one knows.",
      "Health is the greatest gift, contentment the greatest wealth, faithfulness the best relationship."
    ]
  };

  // Get references to the HTML elements
  const quoteSelector = document.getElementById("quote-selector");
  const generateButton = document.getElementById("generate-button");
  const quoteContainer = document.getElementById("quote-container");

  // Add event listener to the generate button
  generateButton.addEventListener("click", function() {
    // Get the selected person from the dropdown
    const person = quoteSelector.value;

    // Get a random quote from the selected person's array
    const quotesArray = quotes[person];
    const randomQuote = quotesArray[Math.floor(Math.random() * quotesArray.length)];

    // Display the quote in the quote container
    quoteContainer.innerHTML = `<p>"${randomQuote}"</p>`;
  });
