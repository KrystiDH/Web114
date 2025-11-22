//Krysti Helton 11/21/25
//Step 1: Select mood display element
const moodDisplay = document.getElementById('moodDisplay');

//Step 2: Configurations for each mood
const moods = {
    happy: {
        bg: '#ff9800',
        text: '#3e2723',
        message: 'Pumpkin spice everything!'
    },
    calm: {
        bg: '#e3ec45ff',
        text: '#3ae0faff',
        message: 'Deep breath in and out!'
    },
    excited: {
        bg: '#e90734ff',
        text: '#f70f8bff',
        message: 'Get the party started!'
    },
    chill: {
        bg: '#12b7f3ff',
        text: '#1441f3ff',
        message: 'Dont worry, be happy!'
    },
    mysterious: {
        bg: '#9b28c1ff',
        text: '#000000',
        message: "Dun dun dun"
    },
    //bonus reset
    reset: {
        bg: '#ffffff',
        text: '#000000',
        message: 'Choose a mood...'
    }
};

//Step 3: Add event listener
document.addEventListener('click', function (event) {

  // Check if the clicked element has the class 'mood-btn'
  if (event.target.classList.contains('mood-btn')) {

    // Step 4: Get the mood from the button's data-mood attribute
    const mood = event.target.getAttribute('data-mood');

    // Get the configuration for this mood from the moods object
    const config = moods[mood];

    // Step 5: Update the page styles and message
    // Update the background color of the body
    document.body.style.backgroundColor = config.bg;

    // Update the text color of the body
    document.body.style.color = config.text;

    // Update the display message
    moodDisplay.textContent = config.message;
  }
});