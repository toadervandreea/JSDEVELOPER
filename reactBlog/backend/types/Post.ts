export interface Post  {
    id:number,
    titlu: string,
    continut: string,
    categorie_id: number,
    dataadaugare: Date,
    user_id: number,
    poza?:string,
}
