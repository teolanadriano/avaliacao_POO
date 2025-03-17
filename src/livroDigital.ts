import {Livro} from "./livro.ts";

class LivroDigital extends Livro{
    formato:string;
    tamanhoMB:number;
    linkDownload:string;

    constructor(id: number, titulo: string, ano: number, autor: string, editora: string, numeroPaginas: string, formato: string, tamanhoMB: number, linkDownload: string){
        super(id, titulo, ano, autor, editora, numeroPaginas);
        this.formato = formato;
        this.tamanhoMB = tamanhoMB;
        this.linkDownload = linkDownload;
    }
}