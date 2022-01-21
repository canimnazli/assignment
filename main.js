const manualBtn = document.getElementById('manual-btn');
const addressBtn = document.getElementById('address-btn');
const trackBtn = document.getElementById('track-btn');
const undeliveredBtn = document.getElementById('undelivered-btn');
const feedbackBtn = document.getElementById('feedback-btn');
const arabicBtn = document.getElementById('arabic-btn');
const englishBtn = document.getElementById('english-btn');

manualBtn.addEventListener('click', (e) => {
	console.log(e.target);
	console.log('Manual btn is pressed');
});

addressBtn.addEventListener('click', () =>
	console.log('Address btn is pressed'),
);

trackBtn.addEventListener('click', () => console.log('Track btn is pressed'));

undeliveredBtn.addEventListener('click', () =>
	console.log('Undelivered btn is pressed'),
);

feedbackBtn.addEventListener('click', () =>
	console.log('feedback btn is pressed'),
);
arabicBtn.addEventListener('click', () => console.log('arabic btn is pressed'));
englishBtn.addEventListener('click', () =>
	console.log('english btn is pressed'),
);
