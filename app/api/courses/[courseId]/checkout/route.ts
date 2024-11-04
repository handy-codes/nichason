import { NextRequest, NextResponse } from "next/server";
import { currentUser } from "@clerk/nextjs/server";

import { db } from "@/lib/db";

export const POST = async (
  req: NextRequest,
  { params }: { params: { courseId: string } }
) => {
  try {
    const user = await currentUser();

    if (!user || !user.id || !user.emailAddresses?.[0]?.emailAddress) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const course = await db.course.findUnique({
      where: { id: params.courseId, isPublished: true },
    });

    if (!course) {
      return new NextResponse("Course Not Found", { status: 404 });
    }

    const purchase = await db.purchase.findUnique({
      where: {
        customerId_courseId: { customerId: user.id, courseId: course.id },
      },
    });

    if (purchase) {
      return new NextResponse("Course Already Purchased", { status: 400 });
    }

    await db.purchase.create({
      data: {
        customerId: user.id,
        courseId: course.id,
      }
    })



    // const session = await stripe.checkout.sessions.create({
    //   customer: stripeCustomer.stripeCustomerId,
    //   payment_method_types: ["card"],
    //   line_items,
    //   mode: "payment",
    //   success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/courses/${course.id}/overview?success=true`,
    //   cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/courses/${course.id}/overview?canceled=true`,
    //   metadata: {
    //     courseId: course.id,
    //     customerId: user.id,
    //   },
    // });

    // return NextResponse.json({ url: session.url });
  } catch (err) {
    console.log("[courseId_checkout_POST]", err);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
};
