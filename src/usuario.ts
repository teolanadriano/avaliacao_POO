import {Item} from "./item.ts";

class Usuario{
    private _id:number;
    private _nome:string;
    private _email:string;
    private _telefone:string;
    private _itensEmprestados:(Item[]);

    constructor(_id: number, _nome: string, _email: string, _telefone: string, _itensEmprestados: Item[]){
        this._id = _id;
        this._nome = _nome;
        this._email = _email;
        this._telefone = _telefone;
        this._itensEmprestados = _itensEmprestados;
    }

    get id(): number{
        return this._id;
    }
    get nome(): string{
        return this._nome;
    }
    get email(): string{
        return this._email;
    }
    get telefone(): string{
        return this._telefone;
    }
    get itensEmprestados(): Item[]{
        return this._itensEmprestados;
    }

    emprestarItem(item: Item): boolean{
        console.log(`Item ${item} emprestado.`);
        return true;
    }

    devolverItem(id: number): boolean{
        console.log("Item devolvido.")
        return true;
    }
}