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
        return `ID: ${this.id} | Título: ${this.titulo} | Ano: ${this.ano}`;
    }
}

export {Item};