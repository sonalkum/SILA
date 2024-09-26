// List of captions and audio files
const captions = [
    "Explosion, & loudness: very loud",
    "Explosion, & loudness: very soft",
    "The deep rumble of the storm echoes through the sky, & loudness: soft.",
    "The deep rumble of the storm echoes through the sky, & loudness: very loud.",
    "Futuristic sci-fi swish and whoosh, swish & fade: out",
    "Big metal object hitting a large metal tank with a , deep sound & pitch: low, & duration: 5 seconds & reverb: slightly wet",
    "Consecutive footsteps in dress shoes, echoing on a hard floor surface & fade: in & noise: silent background & reverb: wet"
    "A dog barking nearby, & reverb: dry.",
    "A dog barking nearby, & reverb: wet.",
    "Gunshots being fired, & reverb: dry.",
    "Gunshots being fired, & reverb: wet.",
    "Footsteps on a wooden floor, & reverb: dry.",
    "Footsteps on a wooden floor, & reverb: very wet.",
    "A joyful man giggling, & reverb: very wet.",
    "Continuos pouring of rain, & reverb: wet."
];

const audioFiles = [
    "audio/very loud explosion (1).wav",
    "audio/very soft explosion (1).wav",
    "audio/soft thundering.wav",
    "audio/very loud thundering.wav",
    "audio/8cb6043ea479800c2345.wav",
    "audio/3f8d0a8bc079047bb675.wav",
    "audio/867db3e602bfccb185e5.wav",
    "audio/dog bark, dry.wav",
    "audio/dog bark, wet.wav",
    "audio/gun shots, dry.wav",
    "audio/gunshots, wet.wav",
    "audio/footsteps, dry.wav",
    "audio/footsteps, wet.wav",  
    "audio/giggle wet.wav",  
    "audio/rain wet.wav",
];

// Function to generate the audio players and captions in a table
function loadAudios() {
    const audioContainer = document.getElementById('audio-table-body');

    // Loop through all audio files and captions
    for (let i = 0; i < captions.length; i++) {
        // Create table row
        const row = document.createElement('tr');

        // Create index cell
        const indexCell = document.createElement('td');
        indexCell.textContent = i + 1;  // Display index starting from 1
        row.appendChild(indexCell);

        // Create caption cell
        const captionCell = document.createElement('td');
        captionCell.textContent = captions[i];
        row.appendChild(captionCell);

        // Create audio cell
        const audioCell = document.createElement('td');
        const audioElement = document.createElement('audio');
        audioElement.controls = true;
        const sourceElement = document.createElement('source');
        sourceElement.src = audioFiles[i];
        sourceElement.type = 'audio/mpeg';
        audioElement.appendChild(sourceElement);
        audioCell.appendChild(audioElement);
        row.appendChild(audioCell);

        // Append the row to the table body
        audioContainer.appendChild(row);
    }
}

// Call the function when the page loads
window.onload = loadAudios;
