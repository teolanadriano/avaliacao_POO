import {Livro} from "./livro.ts";

class LivroDigital extends Livro{
    formato:string;
    tamanhoMB:number;
    linkDownload:string;

    constructor(id: number, titulo: string, ano: number, autor: string, editora: string, numeroPaginas: number, formato: string, tamanhoMB: number, linkDownload: string){
        super(id, titulo, ano, autor, editora, numeroPaginas);
        this.formato = formato;
        this.tamanhoMB = tamanhoMB;
        this.linkDownload = linkDownload;
    }

    exibirdetalhes(): string {
        return `ID: ${this.id} | Título: ${this.titulo} | Ano: ${this.ano} | Autor: ${this.autor} | Editora: ${this.editora} | Número de páginas: ${this.numeroPaginas} | formato: ${this.formato} | Tamanho (MB): ${this.tamanhoMB} | link Download: ${this.linkDownload} `;
    }
}

export {LivroDigital};