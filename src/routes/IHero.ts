export default interface IHero {
    id: number,
    name: string,
    aliases: Array<string>,
    gender: HeroGender
}

export enum HeroGender {
    MALE = 'male',
    FEMALE = 'female'
}
