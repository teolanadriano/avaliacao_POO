console.log("------------------------------------------------------------------------------");

// --- Importação das classes
import {Usuario} from "./usuario.ts";
import {Livro} from "./livro.ts";
import {Revista} from "./revista.ts";
import {LivroDigital} from "./livroDigital.ts";
import {Biblioteca} from "./biblioteca.ts";


// --- Criação dos usuários
const usuario1 = new Usuario(1, "Abner", "abner@gmail.com", "86998714524", []);
const usuario2 = new Usuario(2, "Ernesto", "ernesto@gmail.com", "86994452970", []);

// --- Criação dos livros
const livro1 = new Livro(1, "Dom Casmurro", 1899, "Machado de Assis", "Livraria Garnier", 408);
const livro2 = new Livro(2, "Memórias Póstumas de Brás Cubas", 1881, "Machado de Assis", "Tipografia Nacional", 480);

// --- Criação de um livro digital e uma revista
const livroDigital = new LivroDigital(3, "1984", 1949, "George Orwell", "Editora Z", 328, "PDF", 2.5, "https://download.com/1984");
const revista = new Revista(4, "National Geographic", 2024, 350, "Mensal");

// --- Criação da Biblioteca
const biblioteca = new Biblioteca([livro1, livro2, livroDigital, revista]);

// --- Métodos de emprestar e devolver item
usuario1.emprestarItem(livro1);
console.log(`Quantidade de itens na posse de ${usuario1.nome}: ${usuario1.itensEmprestados.length}`);
usuario1.devolverItem(1);
console.log(`Quantidade de itens na posse de ${usuario1.nome}: ${usuario1.itensEmprestados.length}`);

// --- Tentativa de emprestar o mesmo livro duas vezes
usuario2.emprestarItem(livro2);
usuario2.emprestarItem(livro2);

// --- Tentativa de devolver o mesmo livro duas vezes
usuario2.devolverItem(2);
usuario2.devolverItem(2);


// --- Demonstração de polimorfismo
console.log("\nResultados da busca por 'Machado':");
console.log(biblioteca.buscarItens("Machado").map(item => item.exibirdetalhes()));

console.log("\nResultados da busca por 'National':");
console.log(biblioteca.buscarItens("National").map(item => item.exibirdetalhes()));

console.log("\nResultados da busca por '1984':");
console.log(biblioteca.buscarItens("1984").map(item => item.exibirdetalhes()));