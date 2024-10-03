export class Emprestimo{
    private idEmprestimo: number = 0;
    private idAluno: number;
    private idLivro: number;
    private dataEmprestimo: Date;
    private dataDevolucao: Date;
    private statusEmprestimo: string;

    constructor(
        idAluno: number, 
        idLivro: number,
        dataEmprestimo: Date,
        dataDevolucao: Date,
        statusEmprestimo: string,

    ) {
        this.idAluno = idAluno;
        this.idLivro = idLivro;
        this.dataEmprestimo = dataEmprestimo;
        this.dataDevolucao = dataDevolucao;
        this.statusEmprestimo = statusEmprestimo;

    }
    public getidAluno():number{
        return this.idAluno;
    }
    public setidAluno(idAluno:number): void{
        this.idAluno = idAluno;
    }


    public getidLivro():number{
        return this.idLivro;
    }
    public setidLivro(idLivro:number): void{
        this.idLivro = idLivro;
    }


    public getdataEmprestimo():Date{
        return this.dataEmprestimo;
    }
    public setddataEmprestimo(dataEmprestimo:Date): void{
        this.dataEmprestimo = dataEmprestimo;
    }

    public getdataDevolucao():Date{
        return this.dataDevolucao;
    }
    public setdataDevolucao(dataDevolucao:Date): void{
        this.dataDevolucao = dataDevolucao;
    }


    public getstatusEmprestimo():string{
        return this.statusEmprestimo;
    }
    public setstatusEmprestimo(statusEmprestimo:string): void{
        this.statusEmprestimo = statusEmprestimo;
    }
}