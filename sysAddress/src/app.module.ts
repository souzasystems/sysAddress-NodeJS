import { Module } from '@nestjs/common';
import { BancosModule } from './bancos/bancos.module';
import { PessoasModule } from './pessoas/pessoas.module';
import { LancamentosModule } from './lancamentos/lancamentos.module';

@Module({
  imports: [
    BancosModule,
    PessoasModule,
    LancamentosModule,
  ],
})
export class AppModule {}
