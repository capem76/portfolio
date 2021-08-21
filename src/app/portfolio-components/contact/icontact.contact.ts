export interface IContact {
    name: string,
    email: string,
    message: string,
    date?: Date,
    formStatus?: string,
    formPristine?: boolean,
    formTouched?: boolean

}
