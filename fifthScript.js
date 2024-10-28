// Data for the second table
// Data for the second table
const durationData = [{
    type: 'baseline',
    caption: "Flowing water stream, & duration: 3 seconds",
    audioFile: "audio/water_stream_baseline_3secs.wav"
},
{
    type: 'sila',
    caption: "Flowing water stream, & duration: 3 seconds",
    audioFile: "audio/water_stream_3secs.wav"
},
{
    type: 'baseline',
    caption: "Flowing water stream, & duration: 5 seconds",
    audioFile: "audio/water_stream_baseline_5secs.wav"
},
{
    type: 'sila',
    caption: "Flowing water stream, & duration: 5 seconds",
    audioFile: "audio/water_stream_5secs.wav"
},
{
    type: 'baseline',
    caption: "Car honk, & duration: 3 seconds",
    audioFile: "audio/car_honk_3secs_baseline.wav"
},
{
    type: 'sila',
    caption: "Car honk, & duration: 3 seconds",
    audioFile: "audio/car_honk_3secs.wav"
},
{
    type: 'baseline',
    caption: "Car honk, & duration: 5 seconds",
    audioFile: "audio/car_honk_5secs_baseline.wav"
},
{
    type: 'sila',
    caption: "Car honk, & duration: 5 seconds",
    audioFile: "audio/car_honk_5secs.wav"
},
{
    type: 'baseline',
    caption: "Baby crying, & duration: 3 seconds",
    audioFile: "audio/baby_cry_3secs_baseline.wav"
},
{
    type: 'sila',
    caption: "Baby crying, & duration: 3 seconds",
    audioFile: "audio/baby_cry_3secs.wav"
},
{
    type: 'baseline',
    caption: "Baby crying, & duration: 5 seconds",
    audioFile: "audio/baby_cry_5secs_baseline.wav"
},
{
    type: 'sila',
    caption: "Baby crying, & duration: 5 seconds",
    audioFile: "audio/dog_barking_5secs.wav"
},
];

// Function to generate the new audio players and captions
function loadDurationAudios() {
    const newAudioContainer = document.getElementById('duration-audio-table-body');

    for (let i = 0; i < durationData.length; i++) {
        const rowData = durationData[i];
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
    loadDurationAudios();
};
