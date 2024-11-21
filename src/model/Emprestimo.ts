import { DatabaseModel } from "./DatabaseModel";

// armazenei o pool de conexões
const database = new DatabaseModel().pool;

export class Emprestimo{
    private idEmprestimo: number = 0;
    private idAluno: number;
    private idLivro: number;
    private dataEmprestimo: Date;
    private dataDevolucao: Date;

    constructor(
        idAluno: number, 
        idLivro: number,
        dataEmprestimo: Date,
        dataDevolucao: Date,


    ) {
        this.idAluno = idAluno;
        this.idLivro = idLivro;
        this.dataEmprestimo = dataEmprestimo;
        this.dataDevolucao = dataDevolucao;

    }

    public getIdEmprestimo():number{
        return this.idEmprestimo;
    }
    public setIdEmprestimo(idEmprestimo:number): void{
        this.idEmprestimo = idEmprestimo;
    }


    public getIdAluno():number{
        return this.idAluno;
    }
    public setIdAluno(idAluno:number): void{
        this.idAluno = idAluno;
    }


    public getIdLivro():number{
        return this.idLivro;
    }
    public setIdLivro(idLivro:number): void{
        this.idLivro = idLivro;
    }


    public getDataEmprestimo():Date{
        return this.dataEmprestimo;
    }
    public setDataEmprestimo(dataEmprestimo:Date): void{
        this.dataEmprestimo = dataEmprestimo;
    }

    public getDataDevolucao():Date{
        return this.dataDevolucao;
    }
    public setDataDevolucao(dataDevolucao:Date): void{
        this.dataDevolucao = dataDevolucao;
    }



         /**
     * Busca e retorna uma lista de Emprestimos do banco de dados.
     * @returns Um array de objetos do tipo `Emprestimo` em caso de sucesso ou `null` se ocorrer um erro durante a consulta.
     * 
     * - A função realiza uma consulta SQL para obter todas as informações da tabela "Emprestimo".
     * - Os dados retornados do banco de dados são usados para instanciar objetos da classe `Emprestimo`.
     * - Cada Emprestimo é adicionado a uma lista que será retornada ao final da execução.
     * - Se houver falha na consulta ao banco, a função captura o erro, exibe uma mensagem no console e retorna `null`.
     */
         static async listagemEmprestimos(): Promise<Array<Emprestimo> | null> {
            // objeto para armazenar a lista de Emprestimos
            const listaDeEmprestimos: Array<Emprestimo> = [];
    
            try {
                // query de consulta ao banco de dados
                const querySelectEmprestimo = `SELECT * FROM Emprestimo;`;
    
                // fazendo a consulta e guardando a resposta
                const respostaBD = await database.query(querySelectEmprestimo);
    
                // usando a resposta para instanciar um objeto do tipo Emprestimo
                respostaBD.rows.forEach((linha) => {
                    // instancia (cria) objeto Emprestimo
                    const novoEmprestimo = new Emprestimo(
    
                        linha.id_aluno,
                        linha.id_livro,
                        linha.data_emprestimo,
                        linha.data_devolucao,
                    );
    
                    // atribui o ID objeto
                    novoEmprestimo.setIdEmprestimo(linha.id_emprestimo);
    
                    // adiciona o objeto na lista
                    listaDeEmprestimos.push(novoEmprestimo);
                });
    
                // retorna a lista de Emprestimos
                return listaDeEmprestimos;
            } catch (error) {
                console.log('Erro ao buscar lista de Emprestimos');
                return null;
            }
        }
    
        /**
         * Realiza o cadastro de um Emprestimo no banco de dados.
         * 
         * Esta função recebe um objeto do tipo `Emprestimo` e insere seus dados (marca, modelo, ano e cor)
         * na tabela `Emprestimo` do banco de dados. O método retorna um valor booleano indicando se o cadastro 
         * foi realizado com sucesso.
         * 
         * @param {Emprestimo} emprestimo - Objeto contendo os dados do Emprestimo que será cadastrado. O objeto `Emprestimo`
         *                        deve conter os métodos `getMarca()`, `getModelo()`, `getAno()` e `getCor()`
         *                        que retornam os respectivos valores do Emprestimo.
         * @returns {Promise<boolean>} - Retorna `true` se o Emprestimo foi cadastrado com sucesso e `false` caso contrário.
         *                               Em caso de erro durante o processo, a função trata o erro e retorna `false`.
         * 
         * @throws {Error} - Se ocorrer algum erro durante a execução do cadastro, uma mensagem de erro é exibida
         *                   no console junto com os detalhes do erro.
         */
        static async cadastroEmprestimo(emprestimo: Emprestimo): Promise<boolean> {
            try {
                // query para fazer insert de um Emprestimo no banco de dados
                const queryInsertEmprestimo = `INSERT INTO Emprestimo (marca, modelo, ano, cor)
                                            VALUES
                                            ('${emprestimo.getIdAluno()}', 
                                            '${emprestimo.getIdLivro()}', 
                                            ${emprestimo.getDataDevolucao()}, 
                                            ${emprestimo.getDataDevolucao()},)
                                            RETURNING id_aluno;`;
    
                // executa a query no banco e armazena a resposta
                const respostaBD = await database.query(queryInsertEmprestimo);
    
                // verifica se a quantidade de linhas modificadas é diferente de 0
                if (respostaBD.rowCount != 0) {
                    console.log(`Emprestimo cadastrado com sucesso! ID do Emprestimo: ${respostaBD.rows[0].id_emprestimo}`);
                    // true significa que o cadastro foi feito
                    return true;
                }
                // false significa que o cadastro NÃO foi feito.
                return false;
    
                // tratando o erro
            } catch (error) {
                // imprime outra mensagem junto com o erro
                console.log('Erro ao cadastrar o Emprestimo. Verifique os logs para mais detalhes.');
                // imprime o erro no console
                console.log(error);
                // retorno um valor falso
                return false;
        }
    }
}