// prisma/seed.ts
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    // Seed the `Seat` table
    const seat = await prisma.seat.create({
        data: {
            location: 'A1',
            occupied: false,
        },
    });

    // Seed the `User` table with a reference to the `Seat`
    const user = await prisma.user.create({
        data: {
            firstName: 'John',
            lastName: 'Doe',
            section: 1,
            seatId: seat.id,
            vegetarian: false,
            halal: false,
            seatSatisfaction: 5,
        },
    });

    // Seed the `Food` table
    const food = await prisma.food.create({
        data: {
            name: 'Sandwich',
            vegetarian: true,
            halal: true,
            amount: 100,
        },
    });

    // Seed the `Order` table with a reference to the `User`
    const order = await prisma.order.create({
        data: {
            userId: user.id,
            orderConfirmed: true,
        },
    });

    // Seed the `OrderItem` table with references to the `Order` and `Food`
    await prisma.orderItem.create({
        data: {
            orderId: order.id,
            foodId: food.id,
            confirmation: true,
        },
    });
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
