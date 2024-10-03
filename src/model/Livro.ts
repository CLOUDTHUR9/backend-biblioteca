export class Livro{
    private idLivro: number = 0;
    private titulo: string;
    private autor: string;
    private editora: string;
    private anoPublicacao: string;
    private isbn: string;
    private qunatTotal: number;
    private quantDisponivel: number;
    private valorAquisicao: number;
    private satusLivroEmprestado: string;

    constructor(
        titulo: string, 
        autor: string,
        editora: string,
        anoPublicacao: string,
        isbn: string,
        qunatTotal: number,
        quantDisponivel: number,
        valorAquisicao: number,
        satusLivroEmprestado: string

    ) {
        this.titulo = titulo;
        this.autor = autor;
        this.editora = editora;
        this.anoPublicacao = anoPublicacao;
        this.isbn = isbn;
        this.qunatTotal = qunatTotal;
        this.quantDisponivel = quantDisponivel;
        this.valorAquisicao = valorAquisicao;
        this.satusLivroEmprestado = satusLivroEmprestado;

    }
    public gettitulo():string{
        return this.titulo;
    }
    public settitulo(titulo:string): void{
        this.titulo = titulo;
    }


    public getautor():string{
        return this.autor;
    }
    public setautor(autor:string): void{
        this.autor = autor;
    }


    public geteditora():string{
        return this.editora;
    }
    public seteditora(editora:string): void{
        this.editora = editora;
    }

    public getanoPublicacao():string{
        return this.anoPublicacao;
    }
    public setanoPublicacao(anoPublicacao:string): void{
        this.anoPublicacao = anoPublicacao;
    }


    public getisbn():string{
        return this.isbn;
    }
    public setisbn(isbn:string): void{
        this.isbn = isbn;
    }


    public getqunatTotal():number{
        return this.qunatTotal;
    }
    public setqunatTotal(qunatTotal:number): void{
        this.qunatTotal = qunatTotal;
    }


    public getquantDisponivel():number{
        return this.quantDisponivel;
    }
    public setquantDisponivel(quantDisponivel:number): void{
        this.quantDisponivel = quantDisponivel;
    }


    public getvalorAquisicao():number{
        return this.valorAquisicao;
    }
    public setvalorAquisicao(valorAquisicao:number): void{
        this.valorAquisicao = valorAquisicao;
    }


    public gesatusLivroEmprestado():string{
        return this.satusLivroEmprestado;
    }
    public setsatusLivroEmprestado(satusLivroEmprestado:string): void{
        this.satusLivroEmprestado = satusLivroEmprestado;
    }
}