function predictBaby() {
    const boyName = document.getElementById("boyName").value.trim().toUpperCase();
    const girlName = document.getElementById("girlName").value.trim().toUpperCase();
    const boyDob = document.getElementById("boyDob").value;
    const girlDob = document.getElementById("girlDob").value;

    if (!boyName || !girlName || !boyDob || !girlDob) {
        document.getElementById("output").innerText = "Please enter all required details!";
        return;
    }

    // Calculate age difference and determine gender
    const fatherAge = new Date().getFullYear() - new Date(boyDob).getFullYear();
    const motherAge = new Date().getFullYear() - new Date(girlDob).getFullYear();
    const ageDifference = Math.abs(fatherAge - motherAge);

    if (isNaN(ageDifference) || ageDifference < 0) {
        document.getElementById("output").innerText = "Not eligible for baby prediction!";
        return;
    }

    const genderPrediction = (ageDifference / 2) % 1 === 0 ? "Boy" : "Girl";

    // Alphabet set A-Z
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    // 1st Alphabet Logic: Find common letters and pick based on count
    let commonChars = [...new Set(boyName)].filter(char => girlName.includes(char));
    let firstAlphabet = letters[commonChars.length % 26] || "A"; // Default to 'A' if no common chars

    // 2nd Alphabet Logic: Total character count in both names
    let totalCharCount = boyName.length + girlName.length;
    let secondAlphabet = letters[totalCharCount % 26];

    // 3rd Alphabet Logic: Add common character if total sum is even
    let thirdAlphabet = "";
    if (totalCharCount % 2 === 0 && commonChars.length > 0) {
        thirdAlphabet = commonChars[0]; // Pick first common character
    }

    // Final Baby Name
    let babyName = firstAlphabet + secondAlphabet + thirdAlphabet;

    document.getElementById("output").innerText = 
        `Congratulations! You are having a ${genderPrediction}. Suggested baby name: ${babyName}`;
}
