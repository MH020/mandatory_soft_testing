

export function getRandomNameGender(nameGenderList: Array<string>) {
    return nameGenderList[Math.floor(Math.random() * nameGenderList.length)];
}