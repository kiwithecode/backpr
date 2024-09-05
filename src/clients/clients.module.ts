import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ClientsService } from './clients.service';
import { ClientsController } from './clients.controller';
import { ClientSchema } from './clients.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Client', schema: ClientSchema }]),
  ],
  providers: [ClientsService],
  controllers: [ClientsController],
})
export class ClientsModule {}
