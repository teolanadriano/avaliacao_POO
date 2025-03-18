import { Item } from "./item.ts";
import type { Pesquisavel } from "./pesquisavel.ts";

class Biblioteca {
    arrayItens: Item[];

    constructor(arrayItens: Item[]) {
        this.arrayItens = arrayItens;
    }

    buscarItens(termo: string): Item[] {
        return this.arrayItens.filter(item => {
            if ("pesquisar" in item) {
                return (item as Pesquisavel).pesquisar(termo);
            }
            return false;
        });
    }
}
