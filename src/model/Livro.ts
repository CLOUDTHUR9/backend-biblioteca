import { DatabaseModel } from "./DatabaseModel";

// armazenei o pool de conexões
const database = new DatabaseModel().pool;

export class Livro{
    private idLivro: number = 0;
    private titulo: string;
    private autor: string;
    private editora: string;
    private anoPublicacao: string;
    private isbn: string;
    private quantTotal: number;
    private quantDisponivel: number;
    private valorAquisicao: number;
    private satusLivroEmprestado: string;

    constructor(
        titulo: string, 
        autor: string,
        editora: string,
        anoPublicacao: string,
        isbn: string,
        quantTotal: number,
        quantDisponivel: number,
        valorAquisicao: number,
        satusLivroEmprestado: string

    ) {
        this.titulo = titulo;
        this.autor = autor;
        this.editora = editora;
        this.anoPublicacao = anoPublicacao;
        this.isbn = isbn;
        this.quantTotal = quantTotal;
        this.quantDisponivel = quantDisponivel;
        this.valorAquisicao = valorAquisicao;
        this.satusLivroEmprestado = satusLivroEmprestado;

    }

    public getIdLivro():number{
        return this.idLivro;
    }
    public setIdLivro(idLivro:number): void{
        this.idLivro = idLivro;
    }


    public getTitulo():string{
        return this.titulo;
    }
    public setTitulo(titulo:string): void{
        this.titulo = titulo;
    }


    public getAutor():string{
        return this.autor;
    }
    public setAutor(autor:string): void{
        this.autor = autor;
    }


    public getEditora():string{
        return this.editora;
    }
    public setEditora(editora:string): void{
        this.editora = editora;
    }

    public getAnoPublicacao():string{
        return this.anoPublicacao;
    }
    public setAnoPublicacao(anoPublicacao:string): void{
        this.anoPublicacao = anoPublicacao;
    }


    public getIsbn():string{
        return this.isbn;
    }
    public setIsbn(isbn:string): void{
        this.isbn = isbn;
    }


    public getQuantTotal():number{
        return this.quantTotal;
    }
    public setQuantTotal(quantTotal:number): void{
        this.quantTotal = quantTotal;
    }


    public getQuantDisponivel():number{
        return this.quantDisponivel;
    }
    public setQuantDisponivel(quantDisponivel:number): void{
        this.quantDisponivel = quantDisponivel;
    }


    public getValorAquisicao():number{
        return this.valorAquisicao;
    }
    public setValorAquisicao(valorAquisicao:number): void{
        this.valorAquisicao = valorAquisicao;
    }


    public getStatusLivroEmprestado():string{
        return this.satusLivroEmprestado;
    }
    public setStatusLivroEmprestado(satusLivroEmprestado:string): void{
        this.satusLivroEmprestado = satusLivroEmprestado;
    }
         /**
     * Busca e retorna uma lista de Livros do banco de dados.
     * @returns Um array de objetos do tipo `Livro` em caso de sucesso ou `null` se ocorrer um erro durante a consulta.
     * 
     * - A função realiza uma consulta SQL para obter todas as informações da tabela "Livro".
     * - Os dados retornados do banco de dados são usados para instanciar objetos da classe `Livro`.
     * - Cada Livro é adicionado a uma lista que será retornada ao final da execução.
     * - Se houver falha na consulta ao banco, a função captura o erro, exibe uma mensagem no console e retorna `null`.
     */
         static async listagemLivros(): Promise<Array<Livro> | null> {
            // objeto para armazenar a lista de Livros
            const listaDeLivros: Array<Livro> = [];
    
            try {
                // query de consulta ao banco de dados
                const querySelectLivro = `SELECT * FROM Livro;`;
    
                // fazendo a consulta e guardando a resposta
                const respostaBD = await database.query(querySelectLivro);
    
                // usando a resposta para instanciar um objeto do tipo Livro
                respostaBD.rows.forEach((linha) => {
                    // instancia (cria) objeto Livro
                    const novoLivro = new Livro(
    
                        linha.titulo,
                        linha.autor,
                        linha.editora,
                        linha.ano_publicacao,
                        linha.isbn,
                        linha.quant_total,
                        linha.quant_disponivel,
                        linha.valor_aquisicao,
                        linha.status_livro_emprestado
                    );
    
                    // atribui o ID objeto
                    novoLivro.setIdLivro(linha.id_livro);
    
                    // adiciona o objeto na lista
                    listaDeLivros.push(novoLivro);
                });
    
                // retorna a lista de Livros
                return listaDeLivros;
            } catch (error) {
                console.log('Erro ao buscar lista de Livros');
                return null;
            }
        }
    
        /**
         * Realiza o cadastro de um Livro no banco de dados.
         * 
         * Esta função recebe um objeto do tipo `Livro` e insere seus dados (marca, modelo, ano e cor)
         * na tabela `Livro` do banco de dados. O método retorna um valor booleano indicando se o cadastro 
         * foi realizado com sucesso.
         * 
         * @param {Livro} livro - Objeto contendo os dados do Livro que será cadastrado. O objeto `Livro`
         *                        deve conter os métodos `getMarca()`, `getModelo()`, `getAno()` e `getCor()`
         *                        que retornam os respectivos valores do Livro.
         * @returns {Promise<boolean>} - Retorna `true` se o Livro foi cadastrado com sucesso e `false` caso contrário.
         *                               Em caso de erro durante o processo, a função trata o erro e retorna `false`.
         * 
         * @throws {Error} - Se ocorrer algum erro durante a execução do cadastro, uma mensagem de erro é exibida
         *                   no console junto com os detalhes do erro.
         */
        static async cadastroLivro(livro: Livro): Promise<boolean> {
            try {
                // query para fazer insert de um Livro no banco de dados
                const queryInsertLivro = `INSERT INTO Livro (titulo, autor, editora, ano_publicacao, isbn, quant_total, quant_disponivel, valor_aquisicao, status_livro_emprestado )
                                            VALUES
                                            ('${livro.getTitulo()}', 
                                             '${livro.getAutor()}', 
                                             '${livro.getEditora()}', 
                                             '${livro.getAnoPublicacao()}',
                                             '${livro.getIsbn()}',
                                             '${livro.getQuantTotal()}',
                                             '${livro.getQuantDisponivel()}',
                                             '${livro.getValorAquisicao()}',
                                             '${livro.getStatusLivroEmprestado()}')
                                            RETURNING id_livro;`;
    
                // executa a query no banco e armazena a resposta
                const respostaBD = await database.query(queryInsertLivro);
    
                // verifica se a quantidade de linhas modificadas é diferente de 0
                if (respostaBD.rowCount != 0) {
                    console.log(`Livro cadastrado com sucesso! ID do Livro: ${respostaBD.rows[0].id_livro}`);
                    // true significa que o cadastro foi feito
                    return true;
                }
                // false significa que o cadastro NÃO foi feito.
                return false;
    
                // tratando o erro
            } catch (error) {
                // imprime outra mensagem junto com o erro
                console.log('Erro ao cadastrar o Livro. Verifique os logs para mais detalhes.');
                // imprime o erro no console
                console.log(error);
                // retorno um valor falso
                return false;
            }
        }
}