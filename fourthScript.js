// Data for the second table
const pitchData = [{
    type: 'baseline',
    caption: "Car honk, & pitch: low",
    audioFile: "audio/dog_baseline_dry.wav"
},
{
    type: 'sila',
    caption: "Car honk, & pitch: low",
    audioFile: "audio/car_honk_low_pitch.wav"
},
{
    type: 'baseline',
    caption: "Car honk, & pitch: high",
    audioFile: "audio/dog_baseline_dry.wav"
},
{
    type: 'sila',
    caption: "Car honk, & pitch: high",
    audioFile: "audio/car_honk_high_pitch.wav"
},
{
    type: 'baseline',
    caption: "Gun shot, & pitch: low",
    audioFile: "audio/gun_shot_baeline_low_pitch.wav"
},
{
    type: 'sila',
    caption: "Gun shot, & pitch: low",
    audioFile: "audio/gunshot_low_pitch.wav"
},
{
    type: 'baseline',
    caption: "Gun shot, & pitch: high",
    audioFile: "audio/gunshot_baseline_high_pitch.wav"
},
{
    type: 'sila',
    caption: "Gun shot, & pitch: high",
    audioFile: "audio/gunshot_high_pitch.wav"
},
];

// Function to generate the new audio players and captions
function loadPitchAudios() {
    const newAudioContainer = document.getElementById('pitch-audio-table-body');

    for (let i = 0; i < pitchData.length; i++) {
        const rowData = pitchData[i];
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
    loadNewAudios();   // Function from secondScript.js
    loadNoiseAudios();  
    loadPitchAudios();
};
