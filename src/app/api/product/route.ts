import prisma from "@/lib/prisma";
import { NextResponse, NextRequest } from "next/server";

export async function POST(request: NextRequest) {
    try {
        const { productName, productUrlImage, productValue, productCode } = await request.json();

        const product = await prisma.product.create({
            data: {
                productName,
                productUrlImage,
                productValue,
                productCode,
            },
        });

        return NextResponse.json({ message: "Produto criado com sucesso!", product, status: 201 });

    } catch (error: unknown) {
        console.error("Erro ao criar o produto:", error);

        const errorMessage = error instanceof Error ? error.message : "Erro desconhecido.";
        return NextResponse.json({ message: "Erro ao criar o produto.", error: errorMessage, status: 500 });
    }
}
