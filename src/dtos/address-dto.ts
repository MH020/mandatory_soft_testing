export interface postalCode {
    post_code: String, 
    city_name: string | null; 
}

export interface address {
    street: String, 
    number: String, 
    floor: String, 
    door: String, 
    postal_code_and_town: postalCode
}





