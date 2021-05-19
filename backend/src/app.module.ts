import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CitaController } from './cita/cita.controller';
import { CitaService } from './cita/cita.service';
import { CitaModule } from "./cita/cita.module";
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/citasDB'), CitaModule],
  controllers: [AppController, CitaController],
  providers: [AppService, CitaService],
})
export class AppModule {}
