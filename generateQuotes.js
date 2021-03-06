// Array containing a list of quotes, both the quote itself and its source.
const quotes = [
	{
		"quote": "I shall call him squishy and he shall be mine and he shall be my squishy.",
		"source": "Finding Nemo - 2003"
	},
	{
		"quote": "C'mon, princess, you're not that ugly. All right, you are ugly. But you're only like this at night. Shrek's ugly 24/7.",
		"source": "Shrek - 2001"
	},
	{
		"quote": "That's what I love about these high school girls, man. I keep getting older, they stay the same age.",
		"source": "Dazed and Confused - 1993"
	},
	{
		"quote": "You know the difference between you and me? I make this look good.",
		"source": "Men in Black - 1997"
	},
	{
		"quote": "If you can dodge a wrench, you can dodge a ball.",
		"source": "Dodgeball: A True Underdog Story - 2004"
	},
	{
		"quote": "I have nipples, Greg. Could you milk me?",
		"source": "Meet the Parents - 2000"
	},
	{
		"quote": "I am serious... and don't call me Shirley.",
		"source": "Airplane! - 1980"
	},
	{
		"quote": "You've got to ask yourself a question: Do I feel lucky? Well, do ya, punk?",
		"source": "Dirty Harry - 1971"
	},
	{
		"quote": "Napoleon, don't be jealous that I've been chatting online with babes all day.",
		"source": "Napoleon Dynamite - 2004"
	},																			
]

// Add an click event listener to our button
document.getElementById('quoteGenerator-btn').addEventListener('click', function() {
	// After click begin looping through array of quotes
	for (let i = 0; i < quotes.length; i++) {
		// Generates the ramdom quote
		const randomQuote = Math.floor(Math.random() * quotes.length);
		// Disaplys that random quotes **quote** to our html <p> with the ID of 'quote'
		document.getElementById('quote').innerHTML = '&#8220; ' + quotes[randomQuote].quote + ' &#8222;';
		// Disaplys that random quotes **source** to our html <p> with the ID of 'source'
		document.getElementById('source').innerHTML = quotes[randomQuote].source;
	}
	// Define variable to hold three random rgba color values	
	let randomColor = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' +	// Generates first color number value from 0 - 256
			      (Math.floor(Math.random() * 256)) + ',' +		// Generates second color number value from 0 - 256
			      (Math.floor(Math.random() * 256)) + ')';		// Generates thrid color number value from 0 - 256	
	// Applies ramdon rgba color value to our html body with ID of 'mainContainer'
	document.getElementById('mainContainer').style.backgroundColor = randomColor;		
});

