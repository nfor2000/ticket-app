import { Document, Schema, model, Model } from "mongoose";

export interface ITicket {
     title: string;
     description: string;
     category: string;
     priority: number;
     status: string;
     progress: number;
     active: boolean;
}

export interface ITicketDocument extends ITicket, Document {
     createdAt: Date;
     updatedAt: Date;
}

const ticketSchema = new Schema<ITicketDocument>(
     {
          title: { type: String, required: true },
          description: { type: String, required: true },
          category: { type: String, required: true },
          priority: { type: Number },
          status: { type: String, required: true },
          progress: { type: Number },
          active: { type: Boolean, default: true },
     },
     {
          timestamps: true,
     }
);

let Ticket: Model<ITicketDocument>;

try {
     Ticket = model("ticket") as Model<ITicketDocument>;
} catch (e) {
     Ticket = model<ITicketDocument>("ticket", ticketSchema);
}

export { Ticket };
