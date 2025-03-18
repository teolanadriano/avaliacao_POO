abstract class Item{
    id:number;
    titulo:string;
    ano:number;

    constructor(id: number, titulo: string, ano: number){
        this.id = id;
        this.titulo = titulo;
        this.ano = ano;
    }

    exibirdetalhes(): string {
        return '0';
    }
}

export {Item};