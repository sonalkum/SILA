// List of captions and audio files
const captions = [
    "Here is an audio file of a piano sound.",
    "This is a sound of ocean waves crashing.",
    "A short clip of birds chirping in the morning."
];

const audioFiles = [
    "audio/piano.mp3",
    "audio/ocean-waves.mp3",
    "audio/birds-chirping.mp3"
];

// Function to generate table rows for audio players and captions
function loadAudios() {
    const audioContainer = document.getElementById('audio-container');

    // Loop through all audio files and captions
    for (let i = 0; i < captions.length; i++) {
        // Create table row
        const tableRow = document.createElement('tr');

        // Create caption column (td)
        const captionCell = document.createElement('td');
        captionCell.textContent = captions[i];

        // Create audio column (td)
        const audioCell = document.createElement('td');
        const audioElement = document.createElement('audio');
        audioElement.controls = true;
        const sourceElement = document.createElement('source');
        sourceElement.src = audioFiles[i];
        sourceElement.type = 'audio/mpeg';
        audioElement.appendChild(sourceElement);
        audioCell.appendChild(audioElement);

        // Append both cells to the row
        tableRow.appendChild(captionCell);
        tableRow.appendChild(audioCell);

        // Append row to the table body
        audioContainer.appendChild(tableRow);
    }
}

// Call the function when the page loads
window.onload = loadAudios;