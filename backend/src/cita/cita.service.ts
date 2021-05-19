import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { citaType } from "src/interfaces/cita.interface";
import { Cita, CitaDocument } from "../schemas/citaSchema";


export class CitaService {
    
    constructor(@InjectModel(Cita.name) private readonly citaModel: Model<CitaDocument>) { }

    async getCitas(): Promise<Cita[]> {
        const cita = await this.citaModel.find();
        return cita;
    }

    async getCita(citaID: string): Promise<Cita> {
        const cita = await this.citaModel.findById(citaID);
        return cita;
    }

    async createCita(newCita: citaType): Promise<Cita> {
        const cita =  new this.citaModel(newCita);
        return await cita.save();
    }

    async deleteCita(citaID: string): Promise<Cita> {
        const cita = await this.citaModel.findByIdAndDelete(citaID);
        return cita;
    }

    async editCita(citaID: string, cita: citaType): Promise<Cita> {
        const citaNew = await this.citaModel.findByIdAndUpdate(citaID, cita, {
            new: true
        })
        console.log(cita);
        
        return citaNew;        
    }
}