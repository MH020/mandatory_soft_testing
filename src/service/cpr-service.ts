
export default function generateCprNumberFromDobAndGender(dob: Date, gender: string) {
    const dateString = formatDateAsDDMMYY(dob);
    const numberString = generateCprSecretDigits(gender);
    
    return dateString + "-" + numberString ;
}

// format date as ddmmyy (for cpr)
function formatDateAsDDMMYY(dob: Date) {
    let result = '';

    // format date
    if (dob.getDate() < 10) {
        result += ' ';
    }
    result += dob.getDate().toString();

    // format month
    if(dob.getMonth() < 10) {
        result += ' ';
    }
    result += dob.getMonth().toString();

    dob.getFullYear().toString().slice(2);
}

function generateCprSecretDigits(gender: string) {
    let secretDigits: string = '';

    for (let i = 0; i < 2; i++) {
        secretDigits += (Math.random() * 10).toFixed(0).toString();
    }

    let lastDigit: number = Math.floor( (Math.random() * 10) );

    // add 1 if even
    if (gender === "male" 
        && lastDigit % 2 === 0
    ) { 
        lastDigit ++;
    } 
    
    // subtracts 1 if uneven
    else if (gender === "female" 
        && lastDigit % 2 === 1
    ) { 
        lastDigit --;
    }

    secretDigits += lastDigit.toString();

    return secretDigits;
}

