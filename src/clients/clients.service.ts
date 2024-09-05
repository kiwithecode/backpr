import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Client } from './client.model';  // No es necesario el uso de una interfaz aquí, pero puedes mantenerla si prefieres.

@Injectable()
export class ClientsService {
  constructor(@InjectModel('Client') private readonly clientModel: Model<Client>) {}

  async create(client: Client): Promise<Client> {
    const newClient = new this.clientModel(client);
    return newClient.save();
  }

  async findAll(): Promise<Client[]> {
    return this.clientModel.find().exec();
  }
}
