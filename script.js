// List of captions and audio files
const captions = [
    "The deep rumble of the storm echoes through the sky, & loudness: soft."
];

const audioFiles = [
    "audio/soft_thunder.wav",
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
