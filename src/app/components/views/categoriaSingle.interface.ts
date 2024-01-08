import { LivroInterface } from "./livro.interface";

export interface CategorySingle{
    id?: Number,
    name: String,
    description:String,
    books: LivroInterface[]
}