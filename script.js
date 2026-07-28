/**
 * OUR STORY SO FAR — ARYAVEER & BHOOMIKA
 * Pure Vanilla JavaScript (Fix Patch Edition)
 */

document.addEventListener('DOMContentLoaded', () => {

    // =========================================================================
    // 1. LIVE COUNTDOWN TIMER
    // =========================================================================
    const startDate = new Date("2025-07-29T00:00:00");

    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');

    function updateCounter() {
        const now = new Date();
        const diffMs = now - startDate;

        if (diffMs < 0) {
            if (daysEl) daysEl.textContent = "000";
            if (hoursEl) hoursEl.textContent = "00";
            if (minutesEl) minutesEl.textContent = "00";
            if (secondsEl) secondsEl.textContent = "00";
            return;
        }

        const totalSeconds = Math.floor(diffMs / 1000);
        const days = Math.floor(totalSeconds / (3600 * 24));
        const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = Math.floor(totalSeconds % 60);

        if (daysEl) daysEl.textContent = String(days).padStart(3, '0');
        if (hoursEl) hoursEl.textContent = String(hours).padStart(2, '0');
        if (minutesEl) minutesEl.textContent = String(minutes).padStart(2, '0');
        if (secondsEl) secondsEl.textContent = String(seconds).padStart(2, '0');
    }

    updateCounter();
    setInterval(updateCounter, 1000);

    // =========================================================================
    // 2. FALLING ROSE PETALS GENERATOR
    // =========================================================================
    const petalsContainer = document.getElementById('rose-petals-container');
    if (petalsContainer) {
        const petalCount = 18;
        for (let i = 0; i < petalCount; i++) {
            createPetal(petalsContainer);
        }
    }

    function createPetal(container) {
        const petal = document.createElement('div');
        petal.classList.add('rose-petal');

        const size = Math.random() * 12 + 10;
        const left = Math.random() * 100;
        const delay = Math.random() * 12;
        const duration = Math.random() * 8 + 8;

        petal.style.width = `${size}px`;
        petal.style.height = `${size * 1.3}px`;
        petal.style.left = `${left}%`;
        petal.style.animationDelay = `${delay}s`;
        petal.style.animationDuration = `${duration}s`;

        container.appendChild(petal);
    }

    // =========================================================================
    // 3. EXACT 167 UNIQUE CAPTION MAPPING (PRE-ASSIGNED 1:1 DIRECT MAP)
    // =========================================================================
    const EXACT_PHOTO_CAPTIONS = {
        "Screenshot 2026-07-29 000719.png": "I love u more than I could ever express my baby 😘.",
        "WhatsApp Image 2026-07-28 at 11.34.37 PM (1).jpeg": "meri jaan, you're the softest place I know.",
        "WhatsApp Image 2026-07-28 at 11.34.37 PM.jpeg": "Every version of you, I'd choose again, baby.",
        "WhatsApp Image 2026-07-28 at 11.34.38 PM (1).jpeg": "mai hu na, cutu. hamesha.",
        "WhatsApp Image 2026-07-28 at 11.34.38 PM.jpeg": "You're not a chapter, cutie pie, you're the whole book.",
        "WhatsApp Image 2026-07-28 at 11.34.39 PM.jpeg": "Baby, my heart just does this thing when I see you.",
        "WhatsApp Image 2026-07-28 at 11.34.40 PM (1).jpeg": "tumse hi shuru, tumse hi khatam, meri jaan.",
        "WhatsApp Image 2026-07-28 at 11.34.40 PM (2).jpeg": "My favorite place is wherever you are, meri laado.",
        "WhatsApp Image 2026-07-28 at 11.34.40 PM.jpeg": "You feel like home in the most literal way, bubu.",
        "WhatsApp Image 2026-07-28 at 11.34.41 PM.jpeg": "meri laado, I'd choose this a thousand times over.",
        "WhatsApp Image 2026-07-28 at 11.34.42 PM (1).jpeg": "There's a version of forever, and it looks like you, my princess.",
        "WhatsApp Image 2026-07-28 at 11.34.42 PM.jpeg": "dil se, sirf tum, cutu.",
        "WhatsApp Image 2026-07-28 at 11.34.43 PM.jpeg": "You're my favorite kind of peace, baby.",
        "WhatsApp Image 2026-07-28 at 11.34.44 PM (1).jpeg": "Loving you is the easiest thing I've ever done, meri jaan.",
        "WhatsApp Image 2026-07-28 at 11.34.44 PM (2).jpeg": "My princess, my person, my forever.",
        "WhatsApp Image 2026-07-28 at 11.34.44 PM.jpeg": "tum ho toh sab kuch hai, meri jaan.",
        "WhatsApp Image 2026-07-28 at 11.34.46 PM.jpeg": "Meri jaan, you make ordinary feel like everything.",
        "WhatsApp Image 2026-07-28 at 11.34.56 PM.jpeg": "I found my favorite person, bubu, and I'm never letting go.",
        "WhatsApp Image 2026-07-28 at 11.34.57 PM (1).jpeg": "Ngl you're kind of my whole personality now, cutu.",
        "WhatsApp Image 2026-07-28 at 11.34.57 PM.jpeg": "How are you this unfairly cute, baby.",
        "WhatsApp Image 2026-07-28 at 11.35.03 PM (1).jpeg": "You + me, bubu, undefeated combo.",
        "WhatsApp Image 2026-07-28 at 11.35.03 PM (2).jpeg": "baby you have no idea what you do to me.",
        "WhatsApp Image 2026-07-28 at 11.35.03 PM.jpeg": "My cute little munchkin causing chaos in my head 24/7.",
        "WhatsApp Image 2026-07-28 at 11.35.04 PM (1).jpeg": "kitni cute ho yaar, unfair hai ye.",
        "WhatsApp Image 2026-07-28 at 11.35.04 PM.jpeg": "You're giving main character energy, cutie pie, and I'm obsessed.",
        "WhatsApp Image 2026-07-28 at 11.35.05 PM (1).jpeg": "Not me falling for you all over again, meri jaan, looking at this.",
        "WhatsApp Image 2026-07-28 at 11.35.05 PM (2).jpeg": "If being obsessed with you is a crime, baby, arrest me.",
        "WhatsApp Image 2026-07-28 at 11.35.05 PM (3).jpeg": "Ten outta ten, no notes, just you, cutu.",
        "WhatsApp Image 2026-07-28 at 11.35.05 PM.jpeg": "Ok you're actually just built different, princess.",
        "WhatsApp Image 2026-07-28 at 11.35.06 PM (1).jpeg": "bubu. that's it. that's the caption.",
        "WhatsApp Image 2026-07-28 at 11.35.06 PM (2).jpeg": "cutu. 🫶",
        "WhatsApp Image 2026-07-28 at 11.35.06 PM.jpeg": "Meri jaan, always.",
        "WhatsApp Image 2026-07-28 at 11.35.07 PM (1).jpeg": "Just... you. every time, baby.",
        "WhatsApp Image 2026-07-28 at 11.35.07 PM (2).jpeg": "My person. My favorite person, meri laado.",
        "WhatsApp Image 2026-07-28 at 11.35.07 PM.jpeg": "mera bubu ❤️",
        "WhatsApp Image 2026-07-28 at 11.35.08 PM (1).jpeg": "Cutest human alive, no debate, cutie pie.",
        "WhatsApp Image 2026-07-28 at 11.35.08 PM (2).jpeg": "My whole heart, right here, munchkin.",
        "WhatsApp Image 2026-07-28 at 11.35.08 PM.jpeg": "Yours, always, baby.",
        "WhatsApp Image 2026-07-28 at 11.35.09 PM (1).jpeg": "Little moments like this are my favorite, my princess.",
        "WhatsApp Image 2026-07-28 at 11.35.09 PM (2).jpeg": "My cute little munchkin, forever.",
        "WhatsApp Image 2026-07-28 at 11.35.09 PM.jpeg": "meri laado ❤️",
        "WhatsApp Image 2026-07-28 at 11.35.10 PM (1).jpeg": "This one's staying in my camera roll forever, cutu.",
        "WhatsApp Image 2026-07-28 at 11.35.10 PM (2).jpeg": "Simply obsessed with you, bubu.",
        "WhatsApp Image 2026-07-28 at 11.35.10 PM.jpeg": "Not me screenshotting this for later, cutu.",
        "WhatsApp Image 2026-07-28 at 11.35.11 PM (1).jpeg": "This is going straight to my favorites folder, baby.",
        "WhatsApp Image 2026-07-28 at 11.35.11 PM (2).jpeg": "I love u Infinite my BBG",
        "WhatsApp Image 2026-07-28 at 11.35.11 PM.jpeg": "Officially the best thing that happened to me this year, meri jaan.",
        "WhatsApp Image 2026-07-28 at 11.35.12 PM (1).jpeg": "My baby, my forever, my favorite chaos.",
        "WhatsApp Image 2026-07-28 at 11.35.12 PM (2).jpeg": "tumhare bina adhoori hai ye zindagi, meri laado.",
        "WhatsApp Image 2026-07-28 at 11.35.12 PM.jpeg": "Every day with you feels like a bonus level, cutie pie.",
        "WhatsApp Image 2026-07-28 at 11.35.13 PM (1).jpeg": "You unlocked a whole soft side of me, my princess.",
        "WhatsApp Image 2026-07-28 at 11.35.13 PM (2).jpeg": "cutie pie behavior, love it.",
        "WhatsApp Image 2026-07-28 at 11.35.13 PM (3).jpeg": "Meri jaan, this is what happy looks like.",
        "WhatsApp Image 2026-07-28 at 11.35.13 PM.jpeg": "Certified favorite human, no contest, munchkin.",
        "WhatsApp Image 2026-07-28 at 11.35.14 PM (1).jpeg": "My cute little munchkin owns my whole heart.",
        "WhatsApp Image 2026-07-28 at 11.35.14 PM (2).jpeg": "Ok but we're kind of iconic ngl, cutu.",
        "WhatsApp Image 2026-07-28 at 11.35.14 PM.jpeg": "I don't know what I did to deserve someone like you, meri jaan.",
        "WhatsApp Image 2026-07-28 at 11.35.15 PM (1).jpeg": "You make even the ordinary days feel worth remembering, baby.",
        "WhatsApp Image 2026-07-28 at 11.35.15 PM (2).jpeg": "Every time I see you I remember why I fell for you, cutu.",
        "WhatsApp Image 2026-07-28 at 11.35.15 PM.jpeg": "baby, you're the best decision my heart ever made.",
        "WhatsApp Image 2026-07-28 at 11.35.16 PM (1).jpeg": "I could look at you all day, meri laado, and still not get bored.",
        "WhatsApp Image 2026-07-28 at 11.35.16 PM (2).jpeg": "meri laado, you're the softest, warmest part of my life.",
        "WhatsApp Image 2026-07-28 at 11.35.16 PM.jpeg": "This is what I mean when I say I got lucky, bubu.",
        "WhatsApp Image 2026-07-28 at 11.35.17 PM (1).jpeg": "You're the reason my days feel a little lighter, always, meri jaan.",
        "WhatsApp Image 2026-07-28 at 11.35.17 PM (2).jpeg": "cutu, I don't say it enough but you mean everything to me.",
        "WhatsApp Image 2026-07-28 at 11.35.17 PM.jpeg": "My princess, my favorite person, my whole heart, all in one.",
        "WhatsApp Image 2026-07-28 at 11.35.18 PM (1).jpeg": "tumhare saath har pal special lagta hai, meri jaan.",
        "WhatsApp Image 2026-07-28 at 11.35.18 PM (2).jpeg": "I'll never get tired of choosing you, every single day, cutie pie.",
        "WhatsApp Image 2026-07-28 at 11.35.18 PM.jpeg": "bubu ill love u till my last breat mera baccha",
        "WhatsApp Image 2026-07-28 at 11.35.19 PM (1).jpeg": "munchkin, you're the best part of my everyday.",
        "WhatsApp Image 2026-07-28 at 11.35.19 PM (2).jpeg": "meri jaan, my heart picked you and never looked back.",
        "WhatsApp Image 2026-07-28 at 11.35.19 PM (3).jpeg": "bubu, you make even doing nothing feel like something.",
        "WhatsApp Image 2026-07-28 at 11.35.19 PM.jpeg": "cutie pie, you're my favorite notification.",
        "WhatsApp Image 2026-07-28 at 11.35.20 PM (1).jpeg": "baby, this is what \"the one\" is supposed to feel like.",
        "WhatsApp Image 2026-07-28 at 11.35.20 PM (2).jpeg": "my princess, forever isn't long enough with you.",
        "WhatsApp Image 2026-07-28 at 11.35.20 PM.jpeg": "meri laado, every bit of my heart, only for you.",
        "WhatsApp Image 2026-07-28 at 11.35.21 PM (1).jpeg": "bubu, you're my favorite person and that's just facts.",
        "WhatsApp Image 2026-07-28 at 11.35.21 PM (2).jpeg": "cutu, I don't think I'll ever get tired of you.",
        "WhatsApp Image 2026-07-28 at 11.35.21 PM.jpeg": "Koi kehe sakta hai is bande ki itni sundar GF hai🙃",
        "WhatsApp Image 2026-07-28 at 11.35.22 PM (1).jpeg": "baby, loving you feels this easy every single time.",
        "WhatsApp Image 2026-07-28 at 11.35.22 PM (2).jpeg": "my princess, you make my heart do the most.",
        "WhatsApp Image 2026-07-28 at 11.35.22 PM.jpeg": "cutie pie, I'm so lucky it's actually unfair.",
        "WhatsApp Image 2026-07-28 at 11.35.23 PM (1).jpeg": "munchkin, my heart just melts, no explanation needed.",
        "WhatsApp Image 2026-07-28 at 11.35.23 PM (2).jpeg": "meri laado, you're my favorite kind of everything.",
        "WhatsApp Image 2026-07-28 at 11.35.23 PM (3).jpeg": "tumhe dekh ke sab theek lagta hai, meri jaan.",
        "WhatsApp Image 2026-07-28 at 11.35.23 PM.jpeg": "Official in front of everyone who matters — holding you close, meri laado.",
        "WhatsApp Image 2026-07-28 at 11.35.24 PM (1).jpeg": "bubu, my person, my peace, my everything.",
        "WhatsApp Image 2026-07-28 at 11.35.24 PM (2).jpeg": "You had me the moment I met you.",
        "WhatsApp Image 2026-07-28 at 11.35.24 PM.jpeg": "baby, I choose you again and again, no hesitation.",
        "WhatsApp Image 2026-07-28 at 11.35.25 PM (1).jpeg": "cutipieeee mai hu tere sath tere paas and humesha rahunga",
        "WhatsApp Image 2026-07-28 at 11.35.25 PM (2).jpeg": "meri jaan, forever sounds better with you in it.",
        "WhatsApp Image 2026-07-28 at 11.35.25 PM (3).jpeg": "my princess, you're proof good things exist.",
        "WhatsApp Image 2026-07-28 at 11.35.25 PM.jpeg": "maharani sa kese dikhte ho aap inte pyaare",
        "WhatsApp Image 2026-07-28 at 11.35.26 PM (1).jpeg": "cutie pie, my heart's favorite person, hands down.",
        "WhatsApp Image 2026-07-28 at 11.35.26 PM (2).jpeg": "bubu, you're stuck with me now.",
        "WhatsApp Image 2026-07-28 at 11.35.26 PM.jpeg": "tum mile toh sab kuch sahi lagne laga.",
        "WhatsApp Image 2026-07-28 at 11.35.27 PM (1).jpeg": "meri laado, every day feels lighter with you around.",
        "WhatsApp Image 2026-07-28 at 11.35.27 PM (2).jpeg": "baby, you're my favorite habit.",
        "WhatsApp Image 2026-07-28 at 11.35.27 PM.jpeg": "munchkin, I'd pick you in every universe.",
        "WhatsApp Image 2026-07-28 at 11.35.28 PM.jpeg": "My heart said yes before my brain caught up.",
        "WhatsApp Image 2026-07-28 at 11.37.16 PM (1).jpeg": "cutu, you're my calm in all the chaos.",
        "WhatsApp Image 2026-07-28 at 11.37.16 PM.jpeg": "meri jaan, my forever person, no doubt about it.",
        "WhatsApp Image 2026-07-28 at 11.37.17 PM (1).jpeg": "my princess, I got so lucky with you.",
        "WhatsApp Image 2026-07-28 at 11.37.17 PM.jpeg": "bubu u make loving u feel efortless",
        "WhatsApp Image 2026-07-28 at 11.37.18 PM (1).jpeg": "Not me being obsessed with you, still.",
        "WhatsApp Image 2026-07-28 at 11.37.18 PM.jpeg": "baby, you're my favorite kind of trouble.",
        "WhatsApp Image 2026-07-28 at 11.37.19 PM.jpeg": "cutie pie, my heart's got you on speed dial.",
        "WhatsApp Image 2026-07-28 at 11.37.20 PM (1).jpeg": "meri laado, you're it for me, always have been.",
        "WhatsApp Image 2026-07-28 at 11.37.20 PM (2).jpeg": "Dekho to sahi is masoom se chehre ko🫠.",
        "WhatsApp Image 2026-07-28 at 11.37.20 PM.jpeg": "munchkin, my favorite notification, every time.",
        "WhatsApp Image 2026-07-28 at 11.37.21 PM (1).jpeg": "bubu, my heart's happiest with you around.",
        "WhatsApp Image 2026-07-28 at 11.37.21 PM (2).jpeg": "My person. No further questions.",
        "WhatsApp Image 2026-07-28 at 11.37.21 PM.jpeg": "meri jaan, I love you more than words manage to say.",
        "WhatsApp Image 2026-07-28 at 11.37.22 PM (1).jpeg": "baby, you're my favorite decision, hands down.",
        "WhatsApp Image 2026-07-28 at 11.37.22 PM.jpeg": "cutu, you make everything a little softer.",
        "WhatsApp Image 2026-07-28 at 11.37.23 PM (1).jpeg": "my princess, my heart chose right.",
        "WhatsApp Image 2026-07-28 at 11.37.23 PM.jpeg": "This is what happy looks like for me.",
        "WhatsApp Image 2026-07-28 at 11.37.24 PM (1).jpeg": "bubu, you're the reason I smile at my phone.",
        "WhatsApp Image 2026-07-28 at 11.37.24 PM (2).jpeg": "meri laado, you have my whole heart, always.",
        "WhatsApp Image 2026-07-28 at 11.37.24 PM.jpeg": "cutie pie, I got the best one.",
        "WhatsApp Image 2026-07-28 at 11.37.25 PM (1).jpeg": "tumse pyaar karna sabse aasaan kaam hai, meri jaan.",
        "WhatsApp Image 2026-07-28 at 11.37.25 PM.jpeg": "munchkin, you're my favorite kind of home.",
        "WhatsApp Image 2026-07-28 at 11.37.26 PM (1).jpeg": "baby, I'm not even mad about how obsessed I am.",
        "WhatsApp Image 2026-07-28 at 11.37.26 PM (2).jpeg": "My heart's favorite person, that's you.",
        "WhatsApp Image 2026-07-28 at 11.37.26 PM.jpeg": "cutu, forever feels short with you.",
        "WhatsApp Image 2026-07-28 at 11.37.27 PM (1).jpeg": "meri jaan, you're my person, simple as that.",
        "WhatsApp Image 2026-07-28 at 11.37.27 PM.jpeg": "my princess, my heart's best decision.",
        "WhatsApp Image 2026-07-28 at 11.37.28 PM (1).jpeg": "tujhe pata bhi hai kitni pyaari hai teri ankhe unme doob chuka hai tera ashiq",
        "WhatsApp Image 2026-07-28 at 11.37.28 PM (2).jpeg": "Every single time, it's you.",
        "WhatsApp Image 2026-07-28 at 11.37.28 PM.jpeg": "meri laado, you're the best part of my everyday.",
        "WhatsApp Image 2026-07-28 at 11.37.29 PM (1).jpeg": "baby, I got so lucky and I know it.",
        "WhatsApp Image 2026-07-28 at 11.37.29 PM (2).jpeg": "The mountain breeze, a bouquet of roses, and a ring — proposal magic with my princess.",
        "WhatsApp Image 2026-07-28 at 11.37.29 PM (3).jpeg": "tum ho toh zindagi thodi zyada khoobsurat lagti hai.",
        "WhatsApp Image 2026-07-28 at 11.37.29 PM.jpeg": "cutie pie, my favorite person, no contest.",
        "WhatsApp Image 2026-07-28 at 11.37.30 PM (1).jpeg": "munchkin, you make my heart do a whole thing.",
        "WhatsApp Image 2026-07-28 at 11.37.30 PM.jpeg": "My heart's home is you.",
        "WhatsApp Image 2026-07-28 at 11.37.31 PM.jpeg": "bubu, you're my favorite kind of forever.",
        "WhatsApp Image 2026-07-28 at 11.37.32 PM (1).jpeg": "meri jaan, I'll never stop choosing you.",
        "WhatsApp Image 2026-07-28 at 11.37.32 PM (2).jpeg": "cutu, you're my person, through and through.",
        "WhatsApp Image 2026-07-28 at 11.37.32 PM.jpeg": "baby, I love you more today than yesterday.",
        "WhatsApp Image 2026-07-28 at 11.37.33 PM (1).jpeg": "my princess, you make my world make sense.",
        "WhatsApp Image 2026-07-28 at 11.37.33 PM (2).jpeg": "mai hu na cutu ill always be there to protect u forever(pr mujhe tujhse kon bachaega🫠)",
        "WhatsApp Image 2026-07-28 at 11.37.33 PM.jpeg": "meri laado, my heart's favorite address.",
        "WhatsApp Image 2026-07-28 at 11.37.34 PM (1).jpeg": "bubu, you're the best thing that's happened to me.",
        "WhatsApp Image 2026-07-28 at 11.37.34 PM.jpeg": "tumhare saath sab kuch aasaan lagta hai.",
        "WhatsApp Image 2026-07-28 at 11.37.35 PM (1).jpeg": "cutie pie, you're my favorite kind of lucky.",
        "WhatsApp Image 2026-07-28 at 11.37.35 PM (2).jpeg": "munchkin, you own my whole heart, casually.",
        "WhatsApp Image 2026-07-28 at 11.37.35 PM.jpeg": "baby, you're my favorite person to love.",
        "WhatsApp Image 2026-07-28 at 11.37.36 PM (1).jpeg": "meri jaan, I got the best one and I know it.",
        "WhatsApp Image 2026-07-28 at 11.37.36 PM (2).jpeg": "cutu, my heart's happiest with you.",
        "WhatsApp Image 2026-07-28 at 11.37.36 PM.jpeg": "my princess, you're my favorite forever.",
        "WhatsApp Image 2026-07-28 at 11.37.37 PM (1).jpeg": "bubu, I'm so glad I found you.",
        "WhatsApp Image 2026-07-28 at 11.37.37 PM (2).jpeg": "Loving you just makes sense, every time.",
        "WhatsApp Image 2026-07-28 at 11.37.37 PM (3).jpeg": "meri laado, you're my heart's favorite person.",
        "WhatsApp Image 2026-07-28 at 11.37.37 PM.jpeg": "tumse behtar kuch nahi ho sakta, meri jaan.",
        "WhatsApp Image 2026-07-28 at 11.37.38 PM (1).jpeg": "cutie pie, you're my favorite kind of home.",
        "WhatsApp Image 2026-07-28 at 11.37.38 PM (2).jpeg": "munchkin, my heart's whole and happy with you.",
        "WhatsApp Image 2026-07-28 at 11.37.38 PM.jpeg": "baby, my favorite person, hands down, no debate.",
        "WhatsApp Image 2026-07-28 at 11.37.39 PM (1).jpeg": "My heart's best decision was you.",
        "WhatsApp Image 2026-07-28 at 11.37.39 PM (2).jpeg": "bubu, you make everything feel like enough.",
        "WhatsApp Image 2026-07-28 at 11.37.39 PM.jpeg": "meri jaan, you're my person, my peace, my favorite.",
        "WhatsApp Image 2026-07-28 at 11.37.40 PM (1).jpeg": "cutu, I'd choose you every single time.",
        "WhatsApp Image 2026-07-28 at 11.37.40 PM (2).jpeg": "my princess, you're my heart's favorite thing.",
        "WhatsApp Image 2026-07-28 at 11.37.40 PM.jpeg": "Still can't believe I get to call you mine.",
        "WhatsApp Image 2026-07-28 at 11.37.41 PM (1).jpeg": "meri laado, my favorite person, always and forever.",
        "WhatsApp Image 2026-07-28 at 11.37.41 PM (2).jpeg": "One year down, forever to go with my cute little munchkin!",
        "WhatsApp Image 2026-07-28 at 11.37.41 PM.jpeg": "baby, you're the best part of my everyday, easily."
    };

    // Build gallery items
    const filenames = Object.keys(EXACT_PHOTO_CAPTIONS);
    const galleryData = filenames.map((filename, index) => {
        const isHero = Boolean(
            filename === "Screenshot 2026-07-29 000719.png" ||
            filename === "WhatsApp Image 2026-07-28 at 11.37.29 PM (2).jpeg" ||
            filename === "WhatsApp Image 2026-07-28 at 11.35.23 PM.jpeg" ||
            filename === "WhatsApp Image 2026-07-28 at 11.37.41 PM (2).jpeg"
        );

        return {
            filename: filename,
            src: `assets/photos/${encodeURIComponent(filename)}`,
            caption: EXACT_PHOTO_CAPTIONS[filename],
            category: "GENERAL",
            isHero: isHero,
            index: index
        };
    });

    window.galleryData = galleryData;

    // =========================================================================
    // 5. RENDER GALLERY MASONRY
    // =========================================================================
    const galleryGrid = document.getElementById('gallery-grid');

    if (galleryGrid) {
        galleryGrid.innerHTML = '';
        galleryData.forEach((item) => {
            const card = document.createElement('article');
            card.className = 'gallery-item';
            card.dataset.index = item.index;

            card.innerHTML = `
                <div class="washi-tape-gallery"></div>
                ${item.isHero ? '<span class="gallery-badge">Key Moment ♥</span>' : ''}
                <div class="gallery-photo-wrapper">
                    <img src="${item.src}" alt="${item.caption}" loading="lazy">
                </div>
                <p class="gallery-caption">${item.caption}</p>
            `;

            card.addEventListener('click', () => {
                openLightbox(item.index);
            });

            galleryGrid.appendChild(card);
        });
    }

    // =========================================================================
    // 6. INTERSECTION OBSERVER FOR GALLERY CARDS
    // =========================================================================
    const galleryObserverOptions = {
        root: null,
        rootMargin: '0px 0px -50px 0px',
        threshold: 0.05
    };

    const galleryObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, galleryObserverOptions);

    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach(item => {
        galleryObserver.observe(item);
    });

    // =========================================================================
    // 7. LIGHTBOX MODAL NAVIGATION
    // =========================================================================
    const lightboxModal = document.getElementById('lightbox-modal');
    const lightboxBackdrop = document.getElementById('lightbox-backdrop');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const lightboxCounter = document.getElementById('lightbox-counter');
    const lightboxClose = document.getElementById('lightbox-close');
    const lightboxPrev = document.getElementById('lightbox-prev');
    const lightboxNext = document.getElementById('lightbox-next');

    let currentLightboxIndex = 0;

    function openLightbox(index) {
        currentLightboxIndex = index;
        updateLightboxContent();
        if (lightboxModal) {
            lightboxModal.classList.add('is-active');
            lightboxModal.setAttribute('aria-hidden', 'false');
            document.body.style.overflow = 'hidden';
        }
    }

    function closeLightbox() {
        if (lightboxModal) {
            lightboxModal.classList.remove('is-active');
            lightboxModal.setAttribute('aria-hidden', 'true');
            document.body.style.overflow = '';
        }
    }

    function updateLightboxContent() {
        const item = galleryData[currentLightboxIndex];
        if (item && lightboxImg && lightboxCaption && lightboxCounter) {
            lightboxImg.src = item.src;
            lightboxImg.alt = item.caption;
            lightboxCaption.textContent = item.caption;
            lightboxCounter.textContent = `${currentLightboxIndex + 1} / ${galleryData.length}`;
        }
    }

    function prevLightbox() {
        currentLightboxIndex = (currentLightboxIndex - 1 + galleryData.length) % galleryData.length;
        updateLightboxContent();
    }

    function nextLightbox() {
        currentLightboxIndex = (currentLightboxIndex + 1) % galleryData.length;
        updateLightboxContent();
    }

    if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
    if (lightboxBackdrop) lightboxBackdrop.addEventListener('click', closeLightbox);
    if (lightboxPrev) lightboxPrev.addEventListener('click', prevLightbox);
    if (lightboxNext) lightboxNext.addEventListener('click', nextLightbox);

    document.addEventListener('keydown', (e) => {
        if (!lightboxModal || !lightboxModal.classList.contains('is-active')) return;
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft') prevLightbox();
        if (e.key === 'ArrowRight') nextLightbox();
    });

    // =========================================================================
    // 8. MOON MERGE ANIMATION (Intersection Observer, scroll-triggered)
    // =========================================================================
    const moonStage = document.getElementById('moon-stage');
    const moonCaption = document.getElementById('moon-caption');

    if (moonStage) {
        const moonObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Trigger the merge animation after a short delay for drama
                    setTimeout(() => {
                        moonStage.classList.add('is-merged');
                        // Reveal caption after merge + glow completes
                        if (moonCaption) {
                            setTimeout(() => {
                                moonCaption.classList.add('is-visible');
                            }, 1800);
                        }
                    }, 400);
                    moonObserver.unobserve(moonStage);
                }
            });
        }, { threshold: 0.45 });

        moonObserver.observe(moonStage);
    }

    // =========================================================================
    // 9. ENVELOPE OPEN / CLOSE ANIMATION
    // =========================================================================
    const envelope = document.getElementById('envelope');
    const envelopeHint = document.getElementById('envelope-hint');

    if (envelope) {
        function toggleEnvelope() {
            envelope.classList.toggle('is-open');
            if (envelopeHint) envelopeHint.classList.add('hidden');
        }

        envelope.addEventListener('click', toggleEnvelope);

        // Also support keyboard Enter/Space for accessibility
        envelope.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                toggleEnvelope();
            }
        });
    }

    // =========================================================================
    // 10. TWO-SONG FLOATING MUSIC MINI-PLAYER (Play/Pause + Next + Auto-advance)
    // =========================================================================
    const songList = [
        "Crook - Mere bina (Lyrics Video) Emraan Hashmi.mp3",
        "Sajjan Raazi (Lyrics) - Satinder Sartaj.mp3"
    ];

    let currentSongIndex = 0;
    let isPlaying = false;

    const bgAudio = document.getElementById('bg-audio');
    const btnPlay = document.getElementById('music-btn-play');
    const btnNext = document.getElementById('music-btn-next');
    const iconPlay = document.getElementById('music-icon-play');
    const iconPause = document.getElementById('music-icon-pause');
    const trackIndicator = document.getElementById('music-track-indicator');

    function updateTrackUI() {
        if (trackIndicator) {
            trackIndicator.textContent = `${currentSongIndex + 1}/${songList.length}`;
        }
    }

    function updatePlayPauseIcon(playing) {
        if (iconPlay && iconPause) {
            if (playing) {
                iconPlay.classList.add('hidden');
                iconPause.classList.remove('hidden');
            } else {
                iconPlay.classList.remove('hidden');
                iconPause.classList.add('hidden');
            }
        }
    }

    function loadSong(index) {
        if (!bgAudio) return;
        const filename = songList[index];
        bgAudio.src = "assets/audio/" + encodeURIComponent(filename);
        bgAudio.load();
        updateTrackUI();
    }

    function playCurrentSong() {
        if (!bgAudio) return;
        if (!bgAudio.src || bgAudio.src === "" || bgAudio.src === window.location.href) {
            loadSong(currentSongIndex);
        }
        const playPromise = bgAudio.play();
        if (playPromise !== undefined) {
            playPromise
                .then(() => {
                    isPlaying = true;
                    updatePlayPauseIcon(true);
                })
                .catch((err) => {
                    console.warn("Autoplay/Playback blocked or error:", err);
                    isPlaying = false;
                    updatePlayPauseIcon(false);
                });
        }
    }

    function pauseCurrentSong() {
        if (!bgAudio) return;
        bgAudio.pause();
        isPlaying = false;
        updatePlayPauseIcon(false);
    }

    function nextSong(shouldPlay = isPlaying) {
        currentSongIndex = (currentSongIndex + 1) % songList.length;
        loadSong(currentSongIndex);
        if (shouldPlay) {
            playCurrentSong();
        } else {
            pauseCurrentSong();
        }
    }

    if (bgAudio) {
        loadSong(currentSongIndex);

        bgAudio.addEventListener('ended', () => {
            nextSong(true);
        });

        bgAudio.addEventListener('error', (e) => {
            console.warn(`Audio error loading track ${currentSongIndex + 1}:`, e);
            isPlaying = false;
            updatePlayPauseIcon(false);
        });
    }

    if (btnPlay) {
        btnPlay.addEventListener('click', () => {
            if (isPlaying) {
                pauseCurrentSong();
            } else {
                playCurrentSong();
            }
        });
    }

    if (btnNext) {
        btnNext.addEventListener('click', () => {
            nextSong(isPlaying);
        });
    }
});
