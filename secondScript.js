// Data for the second table
const newData = [
    {
        type: 'baseline',
        caption: "Dog barking, & reverb: dry.",
        audioFile: "audio/dog_baseline_dry.wav"
    },
    {
        type: 'sila',
        caption: "Dog barking, & reverb: dry.",
        audioFile: "audio/dog_barking_dry.wav"
    },
    {
        type: 'baseline',
        caption: "Dog barking, & reverb: wet.",
        audioFile: "audio/dog_baseline_wet.wav"
    },
    {
        type: 'sila',
        caption: "Dog barking, & reverb: wet.",
        audioFile: "audio/dog_barking_wet.wav"
    },
    {
        type: 'baseline',
        caption: "Gun shot, & reverb: dry.",
        audioFile: "audio/gun_shot_baseline_dry.wav"
    },
    {
        type: 'sila',
        caption: "Gun shot, & reverb: dry.",
        audioFile: "audio/gun_shot_dry.wav"
    },
    {
        type: 'baseline',
        caption: "Gun shot, & reverb: wet.",
        audioFile: "audio/gun_shot_baseline_dry.wav"
    },
    {
        type: 'sila',
        caption: "Gun shot, & reverb: wet.",
        audioFile: "audio/gun_shot_wet.wav"
    },
    {
        type: 'baseline',
        caption: "Cat meow, & reverb: dry.",
        audioFile: "audio/gun_shot_baseline_dry.wav"
    },
    {
        type: 'sila',
        caption:  "Cat meow, & reverb: dry.",
        audioFile: "audio/cat_meow_dry.wav"
    },
    {
        type: 'baseline',
        caption: "Cat meow, & reverb: very wet.",
        audioFile: "audio/gun_shot_baseline_dry.wav"
    },
    {
        type: 'sila',
        caption:  "Cat meow, & reverb: very wet.",
        audioFile: "audio/cat_meow_very_wet.wav"
    },
];

// Function to generate the new audio players and captions
function loadNewAudios() {
    const newAudioContainer = document.getElementById('new-audio-table-body');

    for (let i = 0; i < newData.length; i++) {
        const rowData = newData[i];
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
// window.onload = loadNewAudios;
window.onload = function() {
    loadAudios();     // Function from script.js
    loadNewAudios();  // Function from secondScript.js
};
