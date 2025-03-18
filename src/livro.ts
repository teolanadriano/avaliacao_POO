import { Item } from "./item.ts";
import type { Pesquisavel } from "./biblioteca.ts";

class Livro extends Item implements Pesquisavel {
    autor: string;
    editora: string;
    numeroPaginas: string;

    constructor(id: number, titulo: string, ano: number, autor: string, editora: string, numeroPaginas: string) {
        super(id, titulo, ano);
        this.autor = autor;
        this.editora = editora;
        this.numeroPaginas = numeroPaginas;
    }

    exibirdetalhes(): string {
        return `ID: ${this.id} | Título: ${this.titulo} | Ano: ${this.ano} | Autor: ${this.autor} | Editora: ${this.editora} | Número de páginas: ${this.numeroPaginas}`;
    }

    pesquisar(termo: string): boolean {
        return (
            this.titulo.includes(termo) ||
            this.autor.includes(termo) ||
            this.editora.includes(termo)
        );
    }
}

export { Livro };
