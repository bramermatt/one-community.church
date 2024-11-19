document.addEventListener("DOMContentLoaded", function () {
    // Function to calculate age in years
    function calculateAge(birthDate) {
        const today = new Date();
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();
        
        // Adjust age if the birthday hasn't occurred yet this year
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    }

    // Function to calculate age in months if under 1 year
    function calculateMonths(birthDate) {
        const today = new Date();
        const diffTime = today - birthDate;
        const diffMonths = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 30.44)); // Approximate average month length
        return diffMonths;
    }

    // Dates of birth
    const myBirthDate = new Date(1996, 9, 7); // October 7 1996
    const weddingDate = new Date(2018, 6, 7); // July 7, 2018

    const sonBirthDate = new Date(2020, 3, 2); // April 2, 2020
    const daughterBirthDate = new Date(2023, 9, 19); // October 19, 2023

    // Calculate ages
    const myAge = calculateAge(myBirthDate);
    const ourWeddingDate = calculateAge(weddingDate);
    const sonAge = calculateAge(sonBirthDate);
    
    // Check if daughter is under 1 year
    const daughterAge = calculateAge(daughterBirthDate) === 0 ? calculateMonths(daughterBirthDate) + " months" : "1";
    
    // Update the HTML with the calculated ages
    document.getElementById("matt-age").textContent = myAge;
    document.getElementById("matt-wedding-date").textContent = ourWeddingDate;
    document.getElementById("matt-son-age").textContent = sonAge;
    document.getElementById("matt-daughter-age").textContent = daughterAge;
});