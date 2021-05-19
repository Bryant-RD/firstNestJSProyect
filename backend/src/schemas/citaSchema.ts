import { SchemaFactory ,Prop, Schema } from "@nestjs/mongoose";
import { Document } from 'mongoose';



export type CitaDocument = Cita & Document;

@Schema()
export class Cita {
    @Prop({require: true})
    namePet: String;

    @Prop({required: true})
    NameOwner: String;

    @Prop({required: true, type: Number})
    callNumber: Number;

    @Prop({default: Date.now})
    date: Date;

    @Prop({required: true })
    hour: String;

    @Prop({required: true})
    description: String;

}

export const CitaSchema = SchemaFactory.createForClass(Cita);