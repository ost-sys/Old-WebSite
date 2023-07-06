var facts = [
    "I'm OST (Operting System Tester), not WT (Windows Tester)!",
    "Android was originally developed as an OS for digital cameras",
    "Bill Gates originally planned to name Windows as 'Interface Manager'",
    "But it was many times better before, don't you think?",
    "Samsung says it started One UI development from scratch...",
    "Windows 1.0 was less than 1MB in size and had a 16-bit color interface",
    "ERR_FACTS_DID_NOT_LOAD",
    "Will we wait for the day when Samsung completely abandons Exynos? Or they make it better...",
    "MIUI is not the worst shell yet",
    "The design of the first prototype Android smartphone was very similar to the Blackberry.",
    "There are statues of Android on the grounds of Google headquarters that refer to each version of the OS.",
    "Turn the Mi logo upside down. You get the character '心', which translates to 'heart'."
];

function getRandomFact() {
    var randomIndex = Math.floor(Math.random() * facts.length);
    return facts[randomIndex];
}

function displayFact() {
    var factContainer = document.getElementById("fact-container");
    var fact = getRandomFact();
    factContainer.textContent = fact;
}

window.onload = displayFact;