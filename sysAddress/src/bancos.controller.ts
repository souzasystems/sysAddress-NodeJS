import { Controller, Get, Render } from '@nestjs/common';

@Controller('bancos')
export class BancosController {
  @Get('cadastro')
  @Render('bancos/viewCadastroBancos')
  getCadastroView() {
    // Qualquer lógica adicional pode ser implementada aqui, se necessário
    return {};
  }
}
