export interface People {
    persons: Array<NameGender>
}

// full name and gender. read from /data/person.json
export interface NameGender {
    name: string,
    surname: string,
    gender: string
}

// The full person DTO, with every possible variable.
export interface Person {
    name: string,
    surname: string,
    gender: string,
    dob: string,
    cpr: string,
    phone: string,
    address: string
}

