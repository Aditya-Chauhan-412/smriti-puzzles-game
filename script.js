"use strict";

/* ==========================================
STATE MANAGEMENT
========================================== */

const State = {


language: "en",

difficulty: 16,

selectedImageId: "meghalaya",

gameStarted: false,

lockedPieces: 0,

totalPieces: 16,

customImageUrl: null,

showHint: true,

selectedMobilePiece: null,

touchDrag: {
    active: false,
    sourcePiece: null,
    ghost: null
},


puzzleImages: [
    { id:"meghalaya", category:"Meghalaya Landscape", title:"Meghalaya Hills", description:"A peaceful mountain landscape inspired by the green hills, clouds and valleys of Meghalaya.", url:"https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=1400&q=85" },
    { id:"arunachal", category:"Arunachal Pradesh", title:"Eastern Himalayan Mountains", description:"A calm mountain scene inspired by the valleys and Himalayan landscapes of Arunachal Pradesh.", url:"https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=85" },
    { id:"tawang", category:"Heritage & Monastery", title:"Tawang Monastery", description:"A puzzle inspired by the peaceful monasteries and mountain heritage of Tawang.", url:"https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1400&q=85" },
    { id:"river", category:"River & Nature", title:"Umngot River", description:"A clear river and natural landscape inspired by the famous waters of Meghalaya.", url:"https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=1400&q=85" },
    { id:"loktak", category:"Manipur Landscape", title:"Loktak Lake", description:"A peaceful water landscape inspired by Loktak Lake and the floating natural beauty of Manipur.", url:"https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1400&q=85" },
    { id:"culture", category:"North-East Culture", title:"Traditional Culture", description:"A colourful puzzle inspired by traditional clothing, festivals, dance and cultural heritage.", url:"https://images.unsplash.com/photo-1532375810709-75b1da00537c?auto=format&fit=crop&w=1400&q=85" },
    { id:"butter-chicken", category:"Food & Culture", title:"Indian Food", description:"A familiar Indian meal with rice and traditional dishes.", url:"https://unsplash.com/photos/pXgVIgHwcgM/download?force=true&w=1400" },
    { id:"grilled-food", category:"Food & Drink", title:"Grilled Food", description:"A colourful grilled food scene.", url:"https://unsplash.com/photos/UC0HZdUitWY/download?force=true&w=1400" },
    { id:"traditional-people", category:"Culture & People", title:"Traditional People", description:"People standing together in traditional clothing.", url:"https://unsplash.com/photos/8JbQZRa4YJQ/download?force=true&w=1400" },
    { id:"kaziranga-rhinos", category:"Assam Wildlife", title:"Kaziranga Rhinos", description:"A pair of rhinos standing in the grass.", url:"https://unsplash.com/photos/DgJF_SX30Zc/download?force=true&w=1400" },
    { id:"heritage-building", category:"Heritage & Architecture", title:"Yellow and White Heritage", description:"A yellow and white heritage building.", url:"https://unsplash.com/photos/5ZQum_bxg0g/download?force=true&w=1400" },
    { id:"meghalaya-waterfall", category:"Meghalaya Nature", title:"Shillong Waterfall", description:"A waterfall surrounded by green trees in Shillong, Meghalaya.", url:"https://unsplash.com/photos/XKCFg-wJx8M/download?force=true&w=1400" },
    { id:"colorful-building", category:"Heritage & Architecture", title:"Colourful Building", description:"A colourful building with many windows.", url:"https://unsplash.com/photos/eawfhMhzYA8/download?force=true&w=1400" },
    { id:"monpa-people", category:"Arunachal Culture", title:"Monpa People", description:"A group of people from the cultural landscape of Arunachal Pradesh.", url:"https://unsplash.com/photos/IpRIguCAQes/download?force=true&w=1400" }
]
};

/* ==========================================
TRANSLATIONS
========================================== */

const Translations = {

en: {
    appSubtitle: "Memories of North-East India",
    language: "Language",
    restart: "Restart",

    instructionsTitle:
        "Choose a picture and complete the puzzle",

    instructionsText:
        "Choose a familiar picture. Drag each piece into the matching outlined space. Correct pieces gently snap into place.",

    progress: "Progress",

    uploadTitle:
        "Create a Puzzle from Your Own Photo",

    uploadDescription:
        "Choose a photo from your phone, tablet, or computer. Your image will immediately become a puzzle.",

    uploadButton:
        "Choose Photo",

    uploadReady:
        "Your photo is ready. The puzzle has started!",

    uploadPrivacy:
        "Your photo stays on this device.",

    uploadError:
        "Please choose a valid image file.",

    galleryTitle:
        "North-East India Puzzle Gallery",

    gallerySubtitle:
        "Landscapes, culture, heritage, rivers, mountains and familiar places.",

    difficultyTitle:
        "Select Difficulty",

    difficultyHelp:
        "Start with fewer pieces for an easier experience.",

    startGame:
        "Start Game",

    piecesPoolTitle:
        "Puzzle Pieces",

    piecesPoolHelp:
        "Drag one piece at a time to its matching space.",

    boardTitle:
        "Puzzle Board",

    boardHelp:
        "Match every piece to its outlined position.",

    poolPlaceholder:
        "Choose a picture or upload your own photo, then press Start Game.",

    wellDone:
        "Well Done!",

    completedPrefix:
        "You completed the puzzle.",

    playAgain:
        "Play Again",

    customImage:
        "Your Photo"
},


hi: {
    appSubtitle: "उत्तर-पूर्व भारत की यादें",
    language: "भाषा",
    restart: "फिर से शुरू करें",
    instructionsTitle: "एक तस्वीर चुनें और पहेली पूरी करें",
    instructionsText: "एक परिचित तस्वीर चुनें। हर टुकड़े को उसकी सही जगह पर रखें। सही टुकड़े धीरे से अपनी जगह पर लग जाएंगे।",
    progress: "प्रगति",
    uploadTitle: "अपनी फोटो से पहेली बनाएं",
    uploadDescription: "अपने फोन, टैबलेट या कंप्यूटर से एक फोटो चुनें। आपकी तस्वीर तुरंत पहेली बन जाएगी।",
    uploadButton: "फोटो चुनें",
    uploadReady: "आपकी फोटो तैयार है। पहेली शुरू हो गई है!",
    uploadPrivacy: "आपकी फोटो इसी डिवाइस पर रहती है।",
    uploadError: "कृपया एक सही इमेज फ़ाइल चुनें।",
    galleryTitle: "उत्तर-पूर्व भारत पहेली गैलरी",
    gallerySubtitle: "प्रकृति, संस्कृति, विरासत, नदियाँ, पहाड़ और परिचित स्थान।",
    difficultyTitle: "कठिनाई चुनें",
    difficultyHelp: "आसान अनुभव के लिए कम टुकड़ों से शुरू करें।",
    startGame: "खेल शुरू करें",
    piecesPoolTitle: "पहेली के टुकड़े",
    piecesPoolHelp: "एक समय में एक टुकड़ा उसकी सही जगह पर रखें।",
    boardTitle: "पहेली बोर्ड",
    boardHelp: "हर टुकड़े को उसकी सही जगह से मिलाएं।",
    poolPlaceholder: "एक तस्वीर चुनें या अपनी फोटो अपलोड करें, फिर खेल शुरू करें।",
    wellDone: "बहुत बढ़िया!",
    completedPrefix: "आपने पहेली पूरी कर ली।",
    playAgain: "फिर से खेलें",
    customImage: "आपकी फोटो"
},


as: {
    appSubtitle: "উত্তৰ-পূব ভাৰতৰ স্মৃতি",
    language: "ভাষা",
    restart: "আৰম্ভৰ পৰা",
    instructionsTitle: "এখন ছবি বাছি লওক আৰু পাজল সম্পূৰ্ণ কৰক",
    instructionsText: "এখন চিনাকি ছবি বাছি লওক আৰু প্ৰতিটো টুকুৰা মিল থকা ঠাইত ৰাখক। সঠিক টুকুৰা নিজৰ ঠাইত লাগি যাব।",
    progress: "অগ্ৰগতি",
    uploadTitle: "নিজৰ ফটোৰ পৰা পাজল বনাওক",
    uploadDescription: "আপোনাৰ ফোন, টেবলেট বা কম্পিউটাৰৰ পৰা এখন ছবি বাছি লওক। ছবিখন লগে লগে পাজল হ'ব।",
    uploadButton: "ফটো বাছি লওক",
    uploadReady: "আপোনাৰ ফটো সাজু হৈছে। খেল আৰম্ভ হৈছে!",
    uploadPrivacy: "আপোনাৰ ফটো এই ডিভাইচতেই থাকে।",
    uploadError: "অনুগ্ৰহ কৰি এখন সঠিক ছবি ফাইল বাছি লওক।",
    galleryTitle: "উত্তৰ-পূব ভাৰত পাজল গ্যালাৰী",
    gallerySubtitle: "প্ৰকৃতি, পাহাৰ, নদী, সংস্কৃতি আৰু ঐতিহ্যৰ ছবি।",
    difficultyTitle: "কঠিনতাৰ স্তৰ বাছি লওক",
    difficultyHelp: "সহজ অভিজ্ঞতাৰ বাবে কম টুকুৰাৰে আৰম্ভ কৰক।",
    startGame: "খেল আৰম্ভ কৰক",
    piecesPoolTitle: "পাজলৰ টুকুৰা",
    piecesPoolHelp: "এটা এটাকৈ টুকুৰা মিল থকা ঠাইত ৰাখক।",
    boardTitle: "পাজল ব'ৰ্ড",
    boardHelp: "প্ৰতিটো টুকুৰা সঠিক স্থানত মিলাওক।",
    poolPlaceholder: "এখন ছবি বাছি লওক বা নিজৰ ফটো আপলোড কৰক।",
    wellDone: "অতি ভাল!",
    completedPrefix: "আপুনি পাজলটো সম্পূৰ্ণ কৰিলে।",
    playAgain: "আকৌ খেলক",
    customImage: "আপোনাৰ ফটো"
},


mni: {
    appSubtitle: "ꯅꯣꯔꯊ ꯏꯁ꯭ꯠ ꯏꯟꯗꯤꯌꯥꯒꯤ ꯅꯤꯡꯁꯤꯡꯕꯥ",
    language: "ꯂꯣꯟ",
    restart: "ꯑꯅꯧꯕꯥ ꯑꯣꯏꯅꯥ ꯍꯧꯕꯤꯌꯨ",
    instructionsTitle: "ꯄꯤꯛꯆꯔ ꯑꯃꯥ ꯈꯜꯂꯨ ꯑꯃꯁꯨꯡ ꯄꯥꯖꯜ ꯂꯣꯏꯁꯤꯟꯕꯤꯌꯨ",
    instructionsText: "ꯄꯤꯛꯆꯔ ꯑꯃꯥ ꯈꯜꯂꯨ। ꯄꯤꯁꯁꯤꯡ ꯆꯥꯅꯕꯥ ꯃꯐꯝꯗ ꯊꯝꯕꯤꯌꯨ।",
    progress: "ꯂꯥꯛꯂꯤꯕꯥ",
    uploadTitle: "ꯅꯍꯥꯛꯀꯤ ꯐꯣꯇꯣꯗꯒꯤ ꯄꯥꯖꯜ ꯁꯦꯝꯕꯤꯌꯨ",
    uploadDescription: "ꯐꯣꯟ, ꯇꯦꯕꯂꯦꯠ ꯅꯠꯇ꯭ꯔꯒꯥ ꯀꯝꯄꯤꯎꯇꯔꯗꯒꯤ ꯐꯣꯇꯣ ꯑꯃꯥ ꯈꯜꯂꯨ।",
    uploadButton: "ꯐꯣꯇꯣ ꯈꯜꯂꯨ",
    uploadReady: "ꯅꯍꯥꯛꯀꯤ ꯐꯣꯇꯣ ꯁꯦꯝꯈ꯭ꯔꯦ।",
    uploadPrivacy: "ꯅꯍꯥꯛꯀꯤ ꯐꯣꯇꯣ ꯃꯁꯤ ꯗꯤꯚꯥꯏꯁꯗ ꯈꯛꯇꯃꯛ ꯂꯩꯔꯤ।",
    uploadError: "ꯆꯥꯕꯥ ꯄꯤꯛꯆꯔ ꯐꯥꯏꯜ ꯈꯜꯂꯨ।",
    galleryTitle: "ꯅꯣꯔꯊ ꯏꯁ꯭ꯠ ꯏꯟꯗꯤꯌꯥ ꯄꯥꯖꯜ ꯒꯦꯂꯔꯤ",
    gallerySubtitle: "ꯃꯥꯂꯦꯝ, ꯁꯟꯁ꯭ꯀꯔꯤꯇꯤ ꯑꯃꯁꯨꯡ ꯍꯦꯔꯤꯇꯦꯖ।",
    difficultyTitle: "ꯑꯁꯤꯕꯥ ꯂꯩꯕꯥ ꯈꯜꯂꯨ",
    difficultyHelp: "ꯄꯤꯁ ꯈꯔꯥꯅ ꯍꯧꯕꯤꯌꯨ।",
    startGame: "ꯁꯦꯟꯕꯥ ꯍꯧꯕꯤꯌꯨ",
    piecesPoolTitle: "ꯄꯥꯖꯜ ꯄꯤꯁꯁꯤꯡ",
    piecesPoolHelp: "ꯄꯤꯁ ꯑꯃꯃꯥ ꯑꯃꯃꯥ ꯆꯥꯅꯕꯥ ꯃꯐꯝꯗ ꯊꯝꯕꯤꯌꯨ।",
    boardTitle: "ꯄꯥꯖꯜ ꯕꯣꯔꯗ",
    boardHelp: "ꯄꯤꯁ ꯄꯨꯝꯅꯃꯛ ꯆꯨꯝꯅꯕꯥ ꯃꯐꯝꯗ ꯊꯝꯕꯤꯌꯨ।",
    poolPlaceholder: "ꯄꯤꯛꯆꯔ ꯈꯜꯂꯨ ꯅꯠꯇ꯭ꯔꯒꯥ ꯐꯣꯇꯣ ꯑꯄꯂꯣꯗ ꯇꯧꯕꯤꯌꯨ।",
    wellDone: "ꯌꯥꯝꯅꯥ ꯐꯕꯥ!",
    completedPrefix: "ꯅꯍꯥꯛꯅꯥ ꯄꯥꯖꯜ ꯂꯣꯏꯁꯤꯟꯈ꯭ꯔꯦ।",
    playAgain: "ꯑꯃꯨꯛ ꯁꯦꯟꯕꯤꯌꯨ",
    customImage: "ꯅꯍꯥꯛꯀꯤ ꯐꯣꯇꯣ"
},


kha: {
    appSubtitle: "Ki jingkynmaw jong ka North-East India",
    language: "Ktien",
    restart: "Sdang biang",
    instructionsTitle: "Jied ka dur bad pyndep ia ka puzzle",
    instructionsText: "Jied ia ka dur kaba phi tip bad buh ia ki bynta ha ka jaka kaba biang.",
    progress: "Ka jingïaid shaphrang",
    uploadTitle: "Shna Puzzle na ka Dur Jong Phi",
    uploadDescription: "Jied ia ka dur na ka phone, tablet ne computer jong phi.",
    uploadButton: "Jied Dur",
    uploadReady: "Ka dur jong phi ka la long puzzle.",
    uploadPrivacy: "Ka dur jong phi ka sah ha kane ka device.",
    uploadError: "Sngewbha jied ia ka image file kaba biang.",
    galleryTitle: "North-East India Puzzle Gallery",
    gallerySubtitle: "Ki lum, ki wah, ka kolshor bad ki jaka paidbah.",
    difficultyTitle: "Jied ka jingeh",
    difficultyHelp: "Sdang da ki bynta kiba khyndiat ban long suk.",
    startGame: "Sdang ka jingïalehkai",
    piecesPoolTitle: "Ki bynta jong ka Puzzle",
    piecesPoolHelp: "Shim ia ka bynta bad buh ha ka jaka kaba biang.",
    boardTitle: "Ka Puzzle Board",
    boardHelp: "Pynbiang ia baroh ki bynta.",
    poolPlaceholder: "Jied ia ka dur ne upload ia ka dur jong phi.",
    wellDone: "Phi la leh bha!",
    completedPrefix: "Phi la pyndep ia ka puzzle.",
    playAgain: "Lehkai biang",
    customImage: "Ka Dur Jong Phi"
},


lus: {
    appSubtitle: "North-East India thil hriatna",
    language: "Tawng",
    restart: "Tan nawn",
    instructionsTitle: "Thlalak thlang la, puzzle zawh rawh",
    instructionsText: "Thlalak thlang la, piece tin chu a hmun dikah dah rawh.",
    progress: "Hmasawnna",
    uploadTitle: "I Photo Aṭangin Puzzle Siam Rawh",
    uploadDescription: "I phone, tablet emaw computer aṭangin photo thlang rawh.",
    uploadButton: "Photo Thlang Rawh",
    uploadReady: "I photo chu puzzle a lo ni ta.",
    uploadPrivacy: "I photo chu i device-ah chauh a awm.",
    uploadError: "Image file dik thlang rawh.",
    galleryTitle: "North-East India Puzzle Gallery",
    gallerySubtitle: "Ram, tlang, tui, nunphung leh hnam ropui.",
    difficultyTitle: "Harsat zawng thlang rawh",
    difficultyHelp: "A awlsam zawk nan piece tlem zawk atangin tan rawh.",
    startGame: "Game Tan Rawh",
    piecesPoolTitle: "Puzzle Piece-te",
    piecesPoolHelp: "Piece pakhat pakhat la chhuak la, a hmun dikah dah rawh.",
    boardTitle: "Puzzle Board",
    boardHelp: "Piece zawng zawngte a hmun dikah dah rawh.",
    poolPlaceholder: "Thlalak thlang emaw i photo upload rawh.",
    wellDone: "A tha e!",
    completedPrefix: "Puzzle chu i zawh ta.",
    playAgain: "Leh nawn rawh",
    customImage: "I Photo"
},


brx: {
    appSubtitle: "North-East India-ni mwmang",
    language: "Rao",
    restart: "Gwdanai",
    instructionsTitle: "Moxangon khamlo arw puzzle phura",
    instructionsText: "Moxang khamlo arw piece gubunfwr thik jaygayaw don.",
    progress: "Jao-hograi",
    uploadTitle: "Nwi Photo Niphrai Puzzle Bona",
    uploadDescription: "Phone, tablet ba computer niphrai photo khamlo.",
    uploadButton: "Photo Khamlo",
    uploadReady: "Nwi photo puzzle jawna.",
    uploadPrivacy: "Nwi photo nwi device-aw nanga.",
    uploadError: "Thik image file khamlo.",
    galleryTitle: "North-East India Puzzle Gallery",
    gallerySubtitle: "Pahar, nodi, prakriti arw sanskriti.",
    difficultyTitle: "Jotilota Khamlo",
    difficultyHelp: "Kom piece niphrai jagai.",
    startGame: "Game Fwthambai",
    piecesPoolTitle: "Puzzle Piece",
    piecesPoolHelp: "Piece monse monse lanan thik jaygayaw don.",
    boardTitle: "Puzzle Board",
    boardHelp: "Piece gubunfwr thik jaygayaw don.",
    poolPlaceholder: "Moxang khamlo ba nwi photo upload.",
    wellDone: "Gahai!",
    completedPrefix: "Nang puzzle khw phura.",
    playAgain: "Gwdanai Ladai",
    customImage: "Nwi Photo"
}
};

/* ==========================================
AUDIO ENGINE
========================================== */

const AudioEngine = {

context: null,


initialize() {

    const AudioContextClass =
        window.AudioContext ||
        window.webkitAudioContext;


    if (
        !this.context &&
        AudioContextClass
    ) {

        this.context =
            new AudioContextClass();

    }


    if (
        this.context &&
        this.context.state === "suspended"
    ) {

        this.context.resume();

    }

},


playCorrectSound() {

    try {

        this.initialize();

        if (!this.context) return;


        const now =
            this.context.currentTime;


        const oscillator =
            this.context.createOscillator();


        const gain =
            this.context.createGain();


        oscillator.type =
            "sine";


        oscillator.frequency.setValueAtTime(
            520,
            now
        );


        oscillator.frequency.exponentialRampToValueAtTime(
            760,
            now + 0.12
        );


        gain.gain.setValueAtTime(
            0.0001,
            now
        );


        gain.gain.exponentialRampToValueAtTime(
            0.12,
            now + 0.02
        );


        gain.gain.exponentialRampToValueAtTime(
            0.0001,
            now + 0.22
        );


        oscillator.connect(gain);

        gain.connect(
            this.context.destination
        );


        oscillator.start(now);

        oscillator.stop(now + 0.24);

    }
    catch (error) {

        console.warn(
            "Audio unavailable",
            error
        );

    }

},


playCompletionSound() {

    try {

        this.initialize();

        if (!this.context) return;

        /*
         * Brighter and louder winning fanfare.
         * The short ascending melody plus the final chord gives a clear
         * "puzzle completed" celebration without requiring an external audio file.
         */
        const now = this.context.currentTime;
        const notes = [
            { frequency: 523.25, time: 0.00, duration: 0.20 },
            { frequency: 659.25, time: 0.12, duration: 0.20 },
            { frequency: 783.99, time: 0.24, duration: 0.22 },
            { frequency: 1046.50, time: 0.38, duration: 0.34 }
        ];

        notes.forEach(({ frequency, time, duration }, index) => {
            const oscillator = this.context.createOscillator();
            const gain = this.context.createGain();
            const startTime = now + time;

            oscillator.type = index === notes.length - 1 ? "triangle" : "sine";
            oscillator.frequency.setValueAtTime(frequency, startTime);

            gain.gain.setValueAtTime(0.0001, startTime);
            gain.gain.exponentialRampToValueAtTime(0.28, startTime + 0.025);
            gain.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);

            oscillator.connect(gain);
            gain.connect(this.context.destination);
            oscillator.start(startTime);
            oscillator.stop(startTime + duration + 0.02);
        });

        /* Final celebratory chord. */
        [1046.50, 1318.51, 1567.98].forEach((frequency, index) => {
            const oscillator = this.context.createOscillator();
            const gain = this.context.createGain();
            const startTime = now + 0.58;

            oscillator.type = index === 1 ? "triangle" : "sine";
            oscillator.frequency.setValueAtTime(frequency, startTime);

            gain.gain.setValueAtTime(0.0001, startTime);
            gain.gain.exponentialRampToValueAtTime(0.18, startTime + 0.03);
            gain.gain.exponentialRampToValueAtTime(0.0001, startTime + 0.62);

            oscillator.connect(gain);
            gain.connect(this.context.destination);
            oscillator.start(startTime);
            oscillator.stop(startTime + 0.66);
        });

    }
    catch (error) {

        console.warn(
            "Completion audio unavailable",
            error
        );

    }

}

};

/* ==========================================
UI
========================================== */

const UI = {

elements: {},


initialize() {

    this.elements = {

        languageSelect:
            document.getElementById("languageSelect"),

        restartButton:
            document.getElementById("restartButton"),

        startButton:
            document.getElementById("startButton"),

        difficultyControls:
            document.getElementById("difficultyControls"),

        gallery:
            document.getElementById("gallery"),

        imageUpload:
            document.getElementById("imageUpload"),

        hintModeInputs:
            document.querySelectorAll('input[name="hintMode"]'),

        uploadStatus:
            document.getElementById("uploadStatus"),

        piecesPool:
            document.getElementById("piecesPool"),

        puzzleBoard:
            document.getElementById("puzzleBoard"),

        progressBar:
            document.getElementById("progressBar"),

        progressText:
            document.getElementById("progressText"),

        successModal:
            document.getElementById("successModal"),

        successTitle:
            document.getElementById("successTitle"),

        successDescription:
            document.getElementById("successDescription"),

        successImage:
            document.getElementById("successImage"),

        playAgainButton:
            document.getElementById("playAgainButton")

    };


    this.renderTranslations();

    this.renderGallery();

    this.renderEmptyPool();

    this.updateProgress();

},


translate(key) {

    return (
        Translations[State.language]?.[key] ||
        Translations.en[key] ||
        key
    );

},


setText(id, key) {

    const element =
        document.getElementById(id);


    if (element) {

        element.textContent =
            this.translate(key);

    }

},


renderTranslations() {

    this.setText(
        "appSubtitle",
        "appSubtitle"
    );

    this.setText(
        "languageLabel",
        "language"
    );

    this.setText(
        "restartText",
        "restart"
    );

    this.setText(
        "instructionsTitle",
        "instructionsTitle"
    );

    this.setText(
        "instructionsText",
        "instructionsText"
    );

    this.setText(
        "progressLabel",
        "progress"
    );

    this.setText(
        "uploadTitle",
        "uploadTitle"
    );

    this.setText(
        "uploadDescription",
        "uploadDescription"
    );

    this.setText(
        "uploadButton",
        "uploadButton"
    );

    this.setText(
        "galleryTitle",
        "galleryTitle"
    );

    this.setText(
        "gallerySubtitle",
        "gallerySubtitle"
    );

    this.setText(
        "difficultyTitle",
        "difficultyTitle"
    );

    this.setText(
        "difficultyHelp",
        "difficultyHelp"
    );

    this.setText(
        "startText",
        "startGame"
    );

    this.setText(
        "piecesPoolTitle",
        "piecesPoolTitle"
    );

    this.setText(
        "piecesPoolHelp",
        "piecesPoolHelp"
    );

    this.setText(
        "boardTitle",
        "boardTitle"
    );

    this.setText(
        "boardHelp",
        "boardHelp"
    );

    this.setText(
        "playAgainButton",
        "playAgain"
    );


    if (!State.gameStarted) {

        this.renderEmptyPool();

    }


    this.renderGallery();

    this.updateProgress();

},


renderEmptyPool() {

    this.elements.piecesPool.innerHTML = `
        <p class="pool-placeholder">
            ${this.translate("poolPlaceholder")}
        </p>
    `;

},


renderGallery() {

    this.elements.gallery.innerHTML = "";


    State.puzzleImages.forEach(
        (image) => {

            const card =
                document.createElement("button");


            card.type = "button";


            card.className =
                "gallery-card";


            if (
                image.id ===
                State.selectedImageId
            ) {

                card.classList.add(
                    "selected"
                );

            }


            const isCustom =
                image.isCustom === true;


            card.innerHTML = `

                <img
                    src="${image.url}"
                    alt="${image.title}"
                >

                <div class="gallery-overlay">

                    ${
                        isCustom
                            ? `
                                <span class="custom-image-badge">
                                    ${this.translate("customImage")}
                                </span>
                            `
                            : `
                                <div class="text-xs opacity-80 mb-1">
                                    ${image.category}
                                </div>
                            `
                    }

                    <div>
                        ${image.title}
                    </div>

                </div>

            `;


            card.addEventListener(
                "click",
                () => {

                    State.selectedImageId =
                        image.id;


                    this.renderGallery();


                    if (
                        State.gameStarted
                    ) {

                        PuzzleLogic.startGame();

                    }

                }
            );


            this.elements.gallery.appendChild(
                card
            );

        }
    );

},


updateProgress() {

    State.totalPieces =
        State.difficulty;


    const percentage =
        State.totalPieces === 0
            ? 0
            : (
                State.lockedPieces /
                State.totalPieces
            ) * 100;


    this.elements.progressText.textContent =
        `${State.lockedPieces} / ${State.totalPieces}`;


    this.elements.progressBar.style.width =
        `${percentage}%`;

},


updateDifficultySelection() {

    document
        .querySelectorAll(
            ".difficulty-btn"
        )
        .forEach(
            (button) => {

                button.classList.toggle(
                    "active",
                    Number(
                        button.dataset.difficulty
                    ) === State.difficulty
                );

            }
        );

},


setUploadStatus(
    key,
    isError = false
) {

    this.elements.uploadStatus.textContent =
        this.translate(key);


    this.elements.uploadStatus.style.color =
        isError
            ? "#ad6046"
            : "#5f7f62";

},


showSuccess() {

    const image =
        PuzzleLogic.getSelectedImage();


    this.elements.successTitle.textContent =
        this.translate("wellDone");


    this.elements.successDescription.textContent =
        `${this.translate("completedPrefix")} ${image.description}`;


    this.elements.successImage.src =
        image.url;


    this.elements.successImage.alt =
        image.title;


    this.elements.successModal.classList.add(
        "show"
    );


    AudioEngine.playCompletionSound();

},


hideSuccess() {

    this.elements.successModal.classList.remove(
        "show"
    );

}

};

/* ==========================================
PUZZLE LOGIC
========================================== */

const PuzzleLogic = {


getGridConfiguration() {

        const configurations = {
            8: { columns: 4, rows: 2 },
            12: { columns: 4, rows: 3 },
            16: { columns: 4, rows: 4 },
            24: { columns: 6, rows: 4 },
            32: { columns: 8, rows: 4 }
        };

        return configurations[State.difficulty] ||
            configurations[16];

    },

getSelectedImage() {

    return State.puzzleImages.find(
        image =>
            image.id ===
            State.selectedImageId
    );

},


shuffle(array) {

    const result =
        [...array];


    for (
        let i =
            result.length - 1;

        i > 0;

        i--
    ) {

        const randomIndex =
            Math.floor(
                Math.random() *
                (i + 1)
            );


        [
            result[i],
            result[randomIndex]
        ] =
        [
            result[randomIndex],
            result[i]
        ];

    }


    return result;

},


startGame() {

    const image =
        this.getSelectedImage();


    if (!image) {

        return;

    }


    AudioEngine.initialize();


    State.gameStarted = true;

    State.lockedPieces = 0;


    UI.updateProgress();

    UI.elements.piecesPool.innerHTML = "";

    UI.elements.puzzleBoard.innerHTML = "";

    State.selectedMobilePiece = null;

    UI.elements.puzzleBoard.classList.toggle(
        "show-hint",
        State.showHint
    );

    UI.elements.puzzleBoard.style.setProperty(
        "--hint-image",
        `url("${image.url}")`
    );


    const grid =
        this.getGridConfiguration();


    UI.elements.puzzleBoard.style.gridTemplateColumns =
        `repeat(${grid.columns}, 1fr)`;


    UI.elements.puzzleBoard.style.gridTemplateRows =
        `repeat(${grid.rows}, 1fr)`;


    const pieces = [];


    for (
        let row = 0;

        row < grid.rows;

        row++
    ) {

        for (
            let column = 0;

            column < grid.columns;

            column++
        ) {

            const pieceId =
                `${row}-${column}`;


            const slot =
                this.createDropSlot(
                    pieceId
                );


            UI.elements.puzzleBoard.appendChild(
                slot
            );


            pieces.push({
                pieceId,
                row,
                column
            });

        }

    }


    const shuffledPieces =
        this.shuffle(pieces);


    shuffledPieces.forEach(
        pieceData => {

            const piece =
                this.createPuzzlePiece(
                    pieceData,
                    image,
                    grid
                );


            UI.elements.piecesPool.appendChild(
                piece
            );

        }
    );


    requestAnimationFrame(
        () => {

            this.resizePoolPieces();

        }
    );

},


createDropSlot(pieceId) {

    const slot =
        document.createElement("div");


    slot.className =
        "drop-slot";


    slot.dataset.pieceId =
        pieceId;


    slot.addEventListener(
        "dragover",
        event => {

            event.preventDefault();


            if (
                !slot.classList.contains(
                    "correct-slot"
                )
            ) {

                slot.classList.add(
                    "drop-target-active"
                );

            }

        }
    );


    slot.addEventListener(
        "dragleave",
        () => {

            slot.classList.remove(
                "drop-target-active"
            );

        }
    );


    slot.addEventListener(
        "drop",
        event => {

            event.preventDefault();


            slot.classList.remove(
                "drop-target-active"
            );


            const pieceId =
                event.dataTransfer.getData(
                    "text/plain"
                );


            const piece =
                document.querySelector(
                    `.puzzle-piece[data-piece-id="${pieceId}"]`
                );


            if (piece) {

                this.attemptPlacement(
                    piece,
                    slot
                );

            }

        }
    );


    slot.addEventListener(
        "pointerdown",
        event => {
            if (
                event.pointerType === "mouse" ||
                window.innerWidth > 1024
            ) return;

            const selectedPiece =
                State.selectedMobilePiece;

            if (
                selectedPiece &&
                !selectedPiece.classList.contains("locked")
            ) {
                event.preventDefault();
                this.attemptPlacement(selectedPiece, slot);
            }
        }
    );


    return slot;

},


createPuzzlePiece(
    pieceData,
    image,
    grid
) {

    const piece =
        document.createElement("div");


    piece.className =
        "puzzle-piece";


    piece.draggable =
        true;


    piece.dataset.pieceId =
        pieceData.pieceId;


    /*
     * The complete image is scaled across the
     * mathematical size of the entire puzzle.
     *
     * Each piece then displays only its own
     * correct section using background-position.
     */

    const backgroundX =
        (
            pieceData.column /
            (grid.columns - 1 || 1)
        ) * 100;


    const backgroundY =
        (
            pieceData.row /
            (grid.rows - 1 || 1)
        ) * 100;


    piece.style.backgroundImage =
        `url("${image.url}")`;


    piece.style.backgroundSize =
        `${grid.columns * 100}% ${grid.rows * 100}%`;


    piece.style.backgroundPosition =
        `${backgroundX}% ${backgroundY}%`;


    /* Desktop Drag */

    piece.addEventListener(
        "dragstart",
        event => {

            if (
                piece.classList.contains(
                    "locked"
                )
            ) {

                event.preventDefault();

                return;

            }


            event.dataTransfer.effectAllowed =
                "move";


            event.dataTransfer.setData(
                "text/plain",
                piece.dataset.pieceId
            );


            piece.classList.add(
                "dragging"
            );

        }
    );


    piece.addEventListener(
        "dragend",
        () => {

            piece.classList.remove(
                "dragging"
            );


            document
                .querySelectorAll(
                    ".drop-slot"
                )
                .forEach(
                    slot => {

                        slot.classList.remove(
                            "drop-target-active"
                        );

                    }
                );

        }
    );


    /* Touch / Tablet Drag */

    piece.addEventListener(
        "pointerdown",
        event => {

            if (
                event.pointerType ===
                "mouse"
            ) {

                return;

            }


            if (
                piece.classList.contains(
                    "locked"
                )
            ) {

                return;

            }


            if (
                window.innerWidth <= 1024
            ) {
                event.preventDefault();

                document
                    .querySelectorAll(
                        ".puzzle-piece.selected-for-placement"
                    )
                    .forEach(
                        selected =>
                            selected.classList.remove(
                                "selected-for-placement"
                            )
                    );

                State.selectedMobilePiece = piece;
                piece.classList.add("selected-for-placement");
                return;
            }


            this.startTouchDrag(
                event,
                piece
            );

        }
    );


    return piece;

},


resizePoolPieces() {

    const pool =
        UI.elements.piecesPool;


    const grid =
        this.getGridConfiguration();


    const availableWidth =
        Math.max(
            200,
            pool.clientWidth - 40
        );


    let displayColumns =
        3;


    if (
        State.difficulty === 24 ||
        State.difficulty === 32
    ) {
        displayColumns = 4;
    }

    if (
        State.difficulty === 8 &&
        window.innerWidth <= 700
    ) {
        displayColumns = 2;
    }


    const gap =
        12;


    const pieceWidth =
        Math.max(
            62,
            Math.min(
                150,
                (
                    availableWidth -
                    gap * (
                        displayColumns - 1
                    )
                ) /
                displayColumns
            )
        );


    /*
     * Puzzle board aspect ratio = 2:1.
     *
     * Piece aspect ratio depends on:
     * rows / columns.
     */

    const pieceHeight =
        pieceWidth *
        (
            grid.rows /
            grid.columns
        );


    document
        .querySelectorAll(
            ".puzzle-piece:not(.locked)"
        )
        .forEach(
            piece => {

                piece.style.width =
                    `${pieceWidth}px`;


                piece.style.height =
                    `${pieceHeight}px`;

            }
        );

},


attemptPlacement(
    piece,
    slot
) {

    if (
        !piece ||
        !slot
    ) {

        return;

    }


    if (
        piece.classList.contains(
            "locked"
        )
    ) {

        return;

    }


    if (
        slot.classList.contains(
            "correct-slot"
        )
    ) {

        return;

    }


    if (
        piece.dataset.pieceId ===
        slot.dataset.pieceId
    ) {

        this.lockPiece(
            piece,
            slot
        );

    }

    else {

        this.indicateIncorrectDrop(
            piece
        );

    }

},


lockPiece(
    piece,
    slot
) {

    piece.draggable =
        false;


    piece.classList.remove(
        "dragging"
    );


    piece.classList.add(
        "locked"
    );

    piece.classList.remove(
        "selected-for-placement"
    );

    if (State.selectedMobilePiece === piece) {
        State.selectedMobilePiece = null;
    }


    slot.classList.add(
        "correct-slot"
    );


    slot.appendChild(
        piece
    );


    State.lockedPieces++;


    UI.updateProgress();


    AudioEngine.playCorrectSound();


    if (
        State.lockedPieces >=
        State.totalPieces
    ) {

        setTimeout(
            () => {

                UI.showSuccess();

            },
            450
        );

    }

},


indicateIncorrectDrop(
    piece
) {

    if (
        !piece.animate
    ) {

        return;

    }


    piece.animate(
        [
            {
                transform:
                    "translateX(0)"
            },
            {
                transform:
                    "translateX(-8px)"
            },
            {
                transform:
                    "translateX(8px)"
            },
            {
                transform:
                    "translateX(0)"
            }
        ],
        {
            duration: 260,
            easing: "ease-in-out"
        }
    );

},


/* ======================================
   TOUCH DRAG SYSTEM
====================================== */

startTouchDrag(
    event,
    piece
) {

    event.preventDefault();


    const rect =
        piece.getBoundingClientRect();


    const ghost =
        piece.cloneNode(true);


    ghost.classList.remove(
        "locked"
    );


    ghost.classList.add(
        "touch-drag-ghost"
    );


    ghost.style.width =
        `${rect.width}px`;


    ghost.style.height =
        `${rect.height}px`;


    ghost.style.left =
        `${event.clientX}px`;


    ghost.style.top =
        `${event.clientY}px`;


    document.body.appendChild(
        ghost
    );


    piece.classList.add(
        "dragging"
    );


    State.touchDrag.active =
        true;


    State.touchDrag.sourcePiece =
        piece;


    State.touchDrag.ghost =
        ghost;


    const pointerId =
        event.pointerId;


    const moveHandler =
        moveEvent => {

            if (
                moveEvent.pointerId !==
                pointerId
            ) {

                return;

            }


            ghost.style.left =
                `${moveEvent.clientX}px`;


            ghost.style.top =
                `${moveEvent.clientY}px`;


            this.highlightSlotAtPosition(
                moveEvent.clientX,
                moveEvent.clientY
            );

        };


    const endHandler =
        endEvent => {

            if (
                endEvent.pointerId !==
                pointerId
            ) {

                return;

            }


            this.finishTouchDrag(
                endEvent.clientX,
                endEvent.clientY
            );


            window.removeEventListener(
                "pointermove",
                moveHandler
            );


            window.removeEventListener(
                "pointerup",
                endHandler
            );


            window.removeEventListener(
                "pointercancel",
                endHandler
            );

        };


    window.addEventListener(
        "pointermove",
        moveHandler
    );


    window.addEventListener(
        "pointerup",
        endHandler
    );


    window.addEventListener(
        "pointercancel",
        endHandler
    );

},


highlightSlotAtPosition(
    x,
    y
) {

    document
        .querySelectorAll(
            ".drop-slot"
        )
        .forEach(
            slot => {

                const rect =
                    slot.getBoundingClientRect();


                const inside =
                    x >= rect.left &&
                    x <= rect.right &&
                    y >= rect.top &&
                    y <= rect.bottom;


                if (
                    inside &&
                    !slot.classList.contains(
                        "correct-slot"
                    )
                ) {

                    slot.classList.add(
                        "drop-target-active"
                    );

                }

                else {

                    slot.classList.remove(
                        "drop-target-active"
                    );

                }

            }
        );

},


finishTouchDrag(
    x,
    y
) {

    const piece =
        State.touchDrag.sourcePiece;


    const ghost =
        State.touchDrag.ghost;


    if (ghost) {

        ghost.remove();

    }


    if (piece) {

        piece.classList.remove(
            "dragging"
        );

    }


    let targetSlot =
        null;


    document
        .querySelectorAll(
            ".drop-slot"
        )
        .forEach(
            slot => {

                const rect =
                    slot.getBoundingClientRect();


                const inside =
                    x >= rect.left &&
                    x <= rect.right &&
                    y >= rect.top &&
                    y <= rect.bottom;


                if (
                    inside &&
                    !slot.classList.contains(
                        "correct-slot"
                    )
                ) {

                    targetSlot =
                        slot;

                }


                slot.classList.remove(
                    "drop-target-active"
                );

            }
        );


    if (
        piece &&
        targetSlot
    ) {

        this.attemptPlacement(
            piece,
            targetSlot
        );

    }


    State.touchDrag.active =
        false;


    State.touchDrag.sourcePiece =
        null;


    State.touchDrag.ghost =
        null;

}


};

/* ==========================================
CUSTOM IMAGE UPLOAD
========================================== */

const CustomImageUpload = {

handleFile(file) {

    if (!file) {

        return;

    }


    if (
        !file.type ||
        !file.type.startsWith(
            "image/"
        )
    ) {

        UI.setUploadStatus(
            "uploadError",
            true
        );


        return;

    }


    /*
     * Remove the previous temporary local URL.
     */

    if (
        State.customImageUrl
    ) {

        URL.revokeObjectURL(
            State.customImageUrl
        );

    }


    const localImageUrl =
        URL.createObjectURL(
            file
        );


    State.customImageUrl =
        localImageUrl;


    /*
     * Remove any previous custom image from the
     * gallery array.
     */

    State.puzzleImages =
        State.puzzleImages.filter(
            image =>
                !image.isCustom
        );


    /*
     * Add the newly uploaded image.
     */

    const customImage = {

        id:
            `custom-${Date.now()}`,

        category:
            UI.translate(
                "customImage"
            ),

        title:
            file.name
                ? file.name
                : UI.translate(
                    "customImage"
                ),

        description:
            "A personal photo selected from your device.",

        url:
            localImageUrl,

        isCustom:
            true

    };


    /*
     * Put custom image at the beginning so it is
     * immediately visible in the gallery.
     */

    State.puzzleImages.unshift(
        customImage
    );


    State.selectedImageId =
        customImage.id;


    UI.renderGallery();


    UI.setUploadStatus(
        "uploadReady"
    );


    /*
     * Immediately turn the uploaded image into
     * an active puzzle.
     */

    UI.hideSuccess();


    PuzzleLogic.startGame();


    /*
     * Bring the game area into view on smaller
     * devices after upload.
     */

    setTimeout(
        () => {

            document
                .getElementById(
                    "piecesPool"
                )
                .scrollIntoView(
                    {
                        behavior:
                            "smooth",

                        block:
                            "center"
                    }
                );

        },
        250
    );

}

};


/* ==========================================
APPLICATION
========================================== */

const App = {


initialize() {

    UI.initialize();

    this.bindEvents();


    window.addEventListener(
        "resize",
        () => {

            if (
                State.gameStarted
            ) {

                PuzzleLogic.resizePoolPieces();

            }

        }
    );


    /*
     * Clean up temporary object URL when
     * the page is closed.
     */

    window.addEventListener(
        "beforeunload",
        () => {

            if (
                State.customImageUrl
            ) {

                URL.revokeObjectURL(
                    State.customImageUrl
                );

            }

        }
    );

},


bindEvents() {


    /* -----------------------------
       Language
    ----------------------------- */

    UI.elements.languageSelect.addEventListener(
        "change",
        event => {

            State.language =
                event.target.value;


            UI.renderTranslations();


            if (
                !State.customImageUrl
            ) {

                UI.setUploadStatus(
                    "uploadPrivacy"
                );

            }

        }
    );


    /* -----------------------------
       Custom Image Upload
    ----------------------------- */

    UI.elements.imageUpload.addEventListener(
        "change",
        event => {

            const file =
                event.target.files?.[0];


            CustomImageUpload.handleFile(
                file
            );


            /*
             * Reset input so the same image can
             * be selected again if needed.
             */

            event.target.value =
                "";

        }
    );


    /* -----------------------------
       Background Hint
    ----------------------------- */

    UI.elements.hintModeInputs.forEach(
        input => {
            input.addEventListener(
                "change",
                () => {
                    State.showHint =
                        input.value === "yes";

                    UI.elements.puzzleBoard.classList.toggle(
                        "show-hint",
                        State.showHint
                    );
                }
            );
        }
    );


    /* -----------------------------
       Start Game
    ----------------------------- */

    UI.elements.startButton.addEventListener(
        "click",
        () => {

            UI.hideSuccess();

            PuzzleLogic.startGame();

        }
    );


    /* -----------------------------
       Restart
    ----------------------------- */

    UI.elements.restartButton.addEventListener(
        "click",
        () => {

            UI.hideSuccess();

            PuzzleLogic.startGame();

        }
    );


    /* -----------------------------
       Play Again
    ----------------------------- */

    UI.elements.playAgainButton.addEventListener(
        "click",
        () => {

            UI.hideSuccess();

            PuzzleLogic.startGame();

        }
    );


    /* -----------------------------
       Difficulty Selection
    ----------------------------- */

    UI.elements.difficultyControls.addEventListener(
        "click",
        event => {

            const button =
                event.target.closest(
                    ".difficulty-btn"
                );


            if (!button) {

                return;

            }


            State.difficulty =
                Number(
                    button.dataset.difficulty
                );


            State.totalPieces =
                State.difficulty;


            State.lockedPieces =
                0;


            UI.updateDifficultySelection();

            UI.updateProgress();


            if (
                State.gameStarted
            ) {

                PuzzleLogic.startGame();

            }

        }
    );


    /* -----------------------------
       Modal Background Close
    ----------------------------- */

    UI.elements.successModal.addEventListener(
        "click",
        event => {

            if (
                event.target ===
                UI.elements.successModal
            ) {

                UI.hideSuccess();

            }

        }
    );

}

};

/* ==========================================
APPLICATION START
========================================== */

document.addEventListener(
"DOMContentLoaded",
() => {

    App.initialize();

}

);
