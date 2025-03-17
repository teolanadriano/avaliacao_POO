import {Item} from "./item.ts";

class Revista extends Item{
    edicao:number;
    periodicidade:string;

    constructor(id: number, titulo: string, ano: number, edicao: number, periodicidade: string) {
        super(id, titulo, ano);
        this.edicao = edicao;
        this.periodicidade = periodicidade;
    }
}