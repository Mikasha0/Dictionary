export interface NormalButtonTypes{
    btnName:string, 
    type:btnType,
    textColor:string,
    bgColor:string,
    onClick?:()=>void
}


export enum btnType{
    submit='submit', 
    button='button', 
    reset="reset"
}