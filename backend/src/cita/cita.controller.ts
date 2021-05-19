import { Controller, Res, Post, HttpStatus, Get, Param, Body, Put, Delete } from '@nestjs/common';
import { CitaDto } from "../dto/cita.dto";
import { CitaService } from './cita.service';

@Controller('cita')
export class CitaController {

    constructor(private citaService: CitaService) { }

    @Get()
    async getCitas(@Res() res) {
        const cita = await this.citaService.getCitas();
        return res.status(HttpStatus.OK).json({
            message: "Citas encontradas correctamente.",
            cita
        })
    }

    @Get(':citaID')
    async getCita(@Res() res, @Param('citaID') citaID: string) {
        const cita = await this.citaService.getCita(citaID);
        return res.status(HttpStatus.OK).json({
            message: "cita encontrada con exito.",
            cita
        })
    }


    @Post()
    async createCita(@Res() res, @Body() newCita: CitaDto) {
        const cita = await this.citaService.createCita(newCita);
        return res.status(HttpStatus.OK).json({
            message: "Nueva cita correctamente registrada.",
            cita
        })
    }

    @Put(':citaID')
    async updateCita(@Res() res, @Param('citaID') citaID: string, @Body() newCita: CitaDto) {
        const cita = await this.citaService.editCita(citaID, newCita);
        return res.status(HttpStatus.OK).json({
            message: "Cita correctamente editada.",
            cita
        })
    }

    @Delete(':citaID')
    async deleteCita(@Res() res, @Param('citaID') citaID: string) {
        const cita = await this.citaService.deleteCita(citaID);
        return res.status(HttpStatus.OK).json({
            message: "La cita ha sido eliminada correctamente.",
            cita
        })
    }

}
