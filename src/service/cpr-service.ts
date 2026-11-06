
export function generateCprNumberFromDobAndGender(dob: Date, gender: string) {
    const dateString = formatDateAsDDMMYY(dob);
    const numberString = generateCprSecretDigits(gender);
    
    return dateString + "-" + numberString ;
}

// format date as ddmmyy (for cpr)
export function formatDateAsDDMMYY(dob: Date) {
    if (Number.isNaN(dob.getDate())
        || Number.isNaN(dob.getMonth()) 
        || Number.isNaN(dob.getFullYear()) 
    ) {
        throw new Error ('Invalid date format:' + dob);
    }

    if (dob.getFullYear() < 1000 || dob.getFullYear() >= 10000 ) {
        throw new Error('Invalid birth year: ' + dob.getFullYear() );
    }

    let result = '';

    // format date
    if (dob.getDate() < 10) {
        result += '0';
    }
    result += dob.getDate().toString();

    // format month
    const month = dob.getMonth() + 1;
    if(month < 10) {
        result += '0';
    }
    result += month.toString();

    //format year

    result += dob.getFullYear().toString().slice(2);
    
    return result;
}

export function generateCprSecretDigits(gender: string) {
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

