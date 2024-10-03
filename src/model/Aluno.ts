export class Aluno{
    private idAluno: number = 0;
    private nome: string;
    private sobrenome: string;
    private dataNascimento: Date;
    private endereco: string;
    private email: string;
    private celular: string;

    constructor(
        nome: string, 
        sobrenome: string,
        dataNascimento: Date,
        endereco: string,
        email: string,
        celular: string

    ) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.dataNascimento = dataNascimento;
        this.endereco = endereco;
        this.email = email;
        this.celular = celular;

    }
    public getnome():string{
        return this.nome;
    }
    public setnome(nome:string): void{
        this.nome = nome;
    }


    public getsobrenome():string{
        return this.sobrenome;
    }
    public setsobrenome(sobrenome:string): void{
        this.sobrenome = sobrenome;
    }


    public getdataNascimento():Date{
        return this.dataNascimento;
    }
    public setdataNascimento(dataNascimento:Date): void{
        this.dataNascimento = dataNascimento;
    }

    public getendereco():string{
        return this.endereco;
    }
    public setendereco(endereco:string): void{
        this.endereco = endereco;
    }


    public getemail():string{
        return this.email;
    }
    public setemail(email:string): void{
        this.email = email;
    }


    public getcelular():string{
        return this.celular;
    }
    public setcelular(celular:string): void{
        this.celular = celular;
    }
}