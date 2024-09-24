import { Ticket } from "@/app/(models)/ticket";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(req: NextRequest, { params }: Params) {
     try {
          const { id } = params;
          await Ticket.findByIdAndDelete(id);

          return NextResponse.json(
               { message: "Ticket deleted" },
               { status: 200 }
          );
     } catch (error) {
          return NextResponse.json(
               { message: "Erroe", error },
               { status: 500 }
          );
     }
}

export async function PUT(req: NextRequest, { params }: Params) {
     try {
          const { id } = params;
          const body = await req.json();
          const ticketData = body.formData;

          await Ticket.findByIdAndUpdate(id, {
               ...ticketData,
          });

          return NextResponse.json(
               { message: "Ticket updated" },
               { status: 200 }
          );
     } catch (error) {
          return NextResponse.json(
               { message: "Erroe", error },
               { status: 500 }
          );
     }
}

export async function GET(req: NextRequest, { params }: Params) {
     try {
          const { id } = params;
          const ticket = await Ticket.findOne({ _id: id });

          return NextResponse.json({ ticket }, { status: 200 });
     } catch (error) {
          return NextResponse.json(
               { message: "Erroe", error },
               { status: 500 }
          );
     }
}
