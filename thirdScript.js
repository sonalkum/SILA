// Data for the second table
const noiseData = [{
    type: 'baseline',
    caption: "Metal utensils clanking, & noise: silent",
    audioFile: "audio/metal_clank_silent_baseline.wav"
},
{
    type: 'sila',
    caption: "Metal utensils clanking, & noise: silent",
    audioFile: "audio/metal_clanking_silent.wav"
},
{
    type: 'baseline',
    caption: "Metal utensils clanking, & noise: noisy",
    audioFile: "audio/metal_clank_noisy_baseline.wav"
},
{
    type: 'sila',
    caption: "Metal utensils clanking, & noise: noisy",
    audioFile: "audio/metal_clanking_noisy.wav"
},
{
    type: 'baseline',
    caption: "Futuristic sci-fi swish, & noise: silent",
    audioFile: "audio/futuristic_swoosh_baseline_noisy.wav"
},
{
    type: 'sila',
    caption: "Futuristic sci-fi swish, & noise: silent",
    audioFile: "audio/scifi_swish_silent.wav"
},
{
    type: 'baseline',
    caption: "Futuristic sci-fi swish, & noise: noisy",
    audioFile: "audio/futuristic_swoosh_baseline_noisy.wav"
},
{
    type: 'sila',
    caption: "Futuristic sci-fi swish, & noise: noisy",
    audioFile: "audio/scifi_swish_noisy.wav"
},
{
    type: 'baseline',
    caption: "Glass explosion, & noise: silent",
    audioFile: "audio/glass_explosion_baseline_silent.wav"
},
{
    type: 'sila',
    caption: "Glass explosion, & noise: silent",
    audioFile: "audio/glass_explosion_silent.wav"
},
{
    type: 'baseline',
    caption: "Glass explosion, & noise: noisy",
    audioFile: "audio/glass_explosion_baseline_noisy.wav"
},
{
    type: 'sila',
    caption: "Glass explosion, & noise: noisy",
    audioFile: "audio/glass_explosion_noisy.wav"
},
{
    type: 'baseline',
    caption: "whoosh, & noise: silent",
    audioFile: "audio/whoosh_baseline_silent.wav"
},
{
    type: 'sila',
    caption:"whoosh, & noise: silent",
    audioFile: "audio/whoosh_silent.wav"
},
{
    type: 'baseline',
    caption: "whoosh, & noise: noisy",
    audioFile: "audio/whoosh_baseline_silent_noisy.wav"
},
{
    type: 'sila',
    caption:"whoosh, & noise: noisy",
    audioFile: "audio/whoosh_noisy.wav"
},
];

// Function to generate the new audio players and captions
function loadNoiseAudios() {
    const newAudioContainer = document.getElementById('noise-audio-table-body');

    for (let i = 0; i < noiseData.length; i++) {
        const rowData = noiseData[i];
        const row = document.createElement('tr');

        // Apply class based on the type
        if (rowData.type === 'baseline') {
            row.classList.add('baseline-row');
        } else if (rowData.type === 'sila') {
            row.classList.add('sila-row');
        }

        // Index Cell
        const indexCell = document.createElement('td');
        indexCell.textContent = i + 1;
        row.appendChild(indexCell);

        // Caption Cell
        const captionCell = document.createElement('td');
        captionCell.textContent = rowData.caption;
        row.appendChild(captionCell);

        // Audio Cell
        const audioCell = document.createElement('td');
        const audioElement = document.createElement('audio');
        audioElement.controls = true;
        const sourceElement = document.createElement('source');
        sourceElement.src = rowData.audioFile;
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
    loadNewAudios();
    loadNoiseAudios();  // Function from secondScript.js
};
