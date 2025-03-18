import {Item} from "./item.ts";

class Livro extends Item{
    autor:string;
    editora:string;
    numeroPaginas:string;

    constructor(id: number, titulo: string, ano: number, autor: string, editora: string, numeroPaginas: string) {
        super(id, titulo, ano);
        this.autor = autor;
        this.editora = editora;
        this.numeroPaginas = numeroPaginas;
    }

    exibirdetalhes(): string {
        return `ID: ${this.id} | Título: ${this.titulo} | Ano: ${this.ano} | Autor: ${this.autor} | Editora: ${this.editora} | Número de páginas: ${this.numeroPaginas}`;
    }
}

export {Livro};