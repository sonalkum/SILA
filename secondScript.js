// Data for the second table
const newCaptions = [
    "Whispering winds through the trees, & pitch: high.",
    "Whispering winds through the trees, & pitch: low.",
];

const newAudioFiles = [
    "audio/high_pitch_wind.wav",
    "audio/low_pitch_wind.wav",
];

// Function to generate the new audio players and captions
function loadNewAudios() {
    const newAudioContainer = document.getElementById('new-audio-table-body');

    for (let i = 0; i < newCaptions.length; i++) {
        const row = document.createElement('tr');

        // Index Cell
        const indexCell = document.createElement('td');
        indexCell.textContent = i + 1;
        row.appendChild(indexCell);

        // Caption Cell
        const captionCell = document.createElement('td');
        captionCell.textContent = newCaptions[i];
        row.appendChild(captionCell);

        // Audio Cell
        const audioCell = document.createElement('td');
        const audioElement = document.createElement('audio');
        audioElement.controls = true;
        const sourceElement = document.createElement('source');
        sourceElement.src = newAudioFiles[i];
        sourceElement.type = 'audio/mpeg';
        audioElement.appendChild(sourceElement);
        audioCell.appendChild(audioElement);
        row.appendChild(audioCell);

        // Append Row to Table Body
        newAudioContainer.appendChild(row);
    }
}

// Ensure both scripts' functions are called when the page loads
window.onload = function() {
    loadAudios();     // Function from script.js
    loadNewAudios();  // Function from secondScript.js
};
