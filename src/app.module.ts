import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ClientsModule } from './clients/clients.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/tu-base-de-datos'),  // Cambia 'tu-base-de-datos' por tu nombre de base de datos
    ClientsModule,
  ],
})
export class AppModule {}
