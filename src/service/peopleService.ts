
interface person {
    name: String,
    surname: String, 
    gender: String

}



function get_random_person(peoplelist: Array<person>) {
    return peoplelist[Math.floor(Math.random() * peoplelist.length)];
}