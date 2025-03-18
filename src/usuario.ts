import { Item } from "./item.ts";

class Usuario {
    private _id: number;
    private _nome: string;
    private _email: string;
    private _telefone: string;
    private _itensEmprestados: Item[];

    constructor(_id: number, _nome: string, _email: string, _telefone: string, _itensEmprestados: Item[]) {
        this._id = _id;
        this._nome = _nome;
        this.email = _email; // Usando o setter
        this._telefone = _telefone;
        this._itensEmprestados = _itensEmprestados;
    }

    get id(): number {
        return this._id;
    }
    set id(value: number) {
        this._id = value;
    }

    get nome(): string {
        return this._nome;
    }
    set nome(value: string) {
        this._nome = value;
    }

    get email(): string {
        return this._email;
    }
    set email(value: string) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            throw new Error("Email inválido");
        }
        this._email = value;
    }

    get telefone(): string {
        return this._telefone;
    }
    set telefone(value: string) {
        this._telefone = value;
    }

    get itensEmprestados(): Item[] {
        return this._itensEmprestados;
    }
    set itensEmprestados(value: Item[]) {
        this._itensEmprestados = value;
    }

    emprestarItem(item: Item): boolean {
        if (this._itensEmprestados.some(i => i.id === item.id)) {
            console.log(`O item ${item.id} já está emprestado para este usuário.`);
            return false;
        }
        this._itensEmprestados.push(item);
        console.log(`Item ${item.id} emprestado para ${this._nome}.`);
        return true;
    }

    devolverItem(id: number): boolean {
        const index = this._itensEmprestados.findIndex(item => item.id === id);
        if (index === -1) {
            console.log(`Item ${id} não encontrado na lista de itens emprestados.`);
            return false;
        }
        this._itensEmprestados.splice(index, 1);
        console.log(`Item ${id} devolvido por ${this._nome}.`);
        return true;
    }
}
