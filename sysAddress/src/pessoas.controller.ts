import { Controller, Get, Render } from '@nestjs/common';

@Controller('pessoas')
export class PessoasController {
  @Get('cadastro')
  @Render('pessoas/viewCadastroPessoas')
  getCadastroView() {
    // Qualquer lógica adicional pode ser implementada aqui
    return {};
  }
}
