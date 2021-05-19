import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CitaController } from "./cita.controller";
import { Cita, CitaSchema } from "../schemas/citaSchema";
import { CitaService } from "./cita.service";


@Module({
    imports: [
      MongooseModule.forFeature([{ name: Cita.name, schema: CitaSchema }])],
    exports: [MongooseModule],
  
    controllers: [CitaController],
    providers: [CitaService]
  })
  export class CitaModule { }
  