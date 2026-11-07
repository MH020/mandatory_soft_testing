export interface people {
    persons: Array<NameGender>
}

export interface NameGender {
    name: string,
    surname: string,
    gender: string
}

export interface PersonDTO {
    CPR?: string,
    firstName?: string,
    lastNameValue?: string,
    gender?: string,
    birthDate?: string,
    address?: string,
    phoneNumber?: string,
}


export function NameGenderToPersonDTO(person:NameGender) {
       return {
        firstName: person.name,
        lastNameValue: person.surname,
        gender: person.gender,
    };
}