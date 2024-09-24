import { Ticket } from "../../(models)/ticket";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
     try {
          const body = await req.json();
          const ticketData = body.formData;
          const ticket = new Ticket({
               ...ticketData,
          });

          await ticket.save();

          return NextResponse.json(
               { message: "Ticket created" },
               { status: 201 }
          );
     } catch (error) {
          return NextResponse.json(
               { message: "Error", error },
               { status: 500 }
          );
     }
}

export async function GET() {
     try {
          const tickets = await Ticket.find();
          return NextResponse.json({ tickets }, { status: 200 });
     } catch (error) {
          return NextResponse.json(
               { message: "Error", error },
               { status: 500 }
          );
     }
}