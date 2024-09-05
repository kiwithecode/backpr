import { Controller, Post, Body, Get } from '@nestjs/common';
import { ClientsService } from './clients.service';
import { Client } from './client.model';  // No es necesario el uso de una interfaz aquí, pero puedes mantenerla si prefieres.

@Controller('clients')
export class ClientsController {
  constructor(private readonly clientsService: ClientsService) {}

  @Post()
  async addClient(@Body() client: Client): Promise<Client> {
    return this.clientsService.create(client);
  }

  @Get()
  async getAllClients(): Promise<Client[]> {
    return this.clientsService.findAll();
  }
}
