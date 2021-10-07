export type Studant = {
    id: number,
    name: string,
    email: string,
    birthDate: Date,
    classId?: number
}

export type Teacher = {
    id: number,
    name: string,
    email: string,
    birthDate: Date,
    classId?: number
}

export type Classes = {
    id:number,
    name:string,
    module: number,
    startDate: Date,
    endDate: Date
}