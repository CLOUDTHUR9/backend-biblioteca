import { Request, Response, Router } from "express";
import { AlunoController } from "./controller/AlunoController";
import { EmprestimoController } from "./controller/EmprestimoController";
import { LivroController } from  "./controller/LivroController";

// Cria um roteador
const router = Router();

// Criando sua rota principal para a aplicação
router.get("/", (req:Request, res:Response) => {
    res.json({ mensagem: "Bem-vindo ao meu servidor"});
});
router.get('/lista/aluno', AlunoController.todos);
router.post('/novo/aluno', AlunoController.novo);

router.get('/lista/emprestimo', EmprestimoController.todos);

router.get('/lista/livro', LivroController.todos);
router.post('/novo/livro', LivroController.novo);

// Exportando as rotas
export{ router };

