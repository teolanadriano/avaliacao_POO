import { Item } from "./item.ts";



export interface Pesquisavel {
    pesquisar(termo: string): boolean;
}
class Biblioteca {
    arrayItens: Item[];

    constructor(arrayItens: Item[]) {
        this.arrayItens = arrayItens;
    }
/*
    buscarItens(termo: string): Item[] {
        return this.arrayItens.filter(item => {
            if ("pesquisar" in item) {
                return (item as Pesquisavel).pesquisar(termo);
            }
            return false;
        });
    }
    */
    buscarItens(termo: string): Item[] {
        return this.arrayItens.filter((item): item is Item & Pesquisavel => 
            "pesquisar" in item && typeof item.pesquisar === "function" && item.pesquisar(termo)
        );
    }
    
}

export {Biblioteca};