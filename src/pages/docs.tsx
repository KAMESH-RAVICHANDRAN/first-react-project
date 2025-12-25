import { useEffect, useState } from "react";
import DefaultLayout from "@/layouts/default";
import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Skeleton,
} from "@heroui/react";

export default function DocsPage() {
  const [loading, setLoading] = useState(true);

  const list = [
    { title: "Orange", img: "/images/fruit-1.jpeg", price: "$5.50" },
    { title: "Tangerine", img: "/images/fruit-2.jpeg", price: "$3.00" },
    { title: "Raspberry", img: "/images/fruit-3.jpeg", price: "$10.00" },
    { title: "Lemon", img: "/images/fruit-4.jpeg", price: "$5.30" },
    { title: "Avocado", img: "/images/fruit-5.jpeg", price: "$15.70" },
    { title: "Lemon 2", img: "/images/fruit-6.jpeg", price: "$8.00" },
    { title: "Banana", img: "/images/fruit-7.jpeg", price: "$7.50" },
    { title: "Watermelon", img: "/images/fruit-8.jpeg", price: "$12.20" },
  ];

  // ⏳ Show skeleton for 1 second
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <DefaultLayout>
      <section className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid gap-4 grid-cols-2 sm:grid-cols-4">
          {loading
            ? // 🔹 SKELETON CARDS (same size as real cards)
              Array.from({ length: list.length }).map((_, index) => (
                <Card key={index} shadow="sm">
                  <CardBody className="p-0 overflow-hidden">
                    <Skeleton className="w-full h-[160px]" />
                  </CardBody>

                  <CardFooter className="text-small justify-between">
                    <Skeleton className="h-4 w-24 rounded-md" />
                    <Skeleton className="h-4 w-12 rounded-md" />
                  </CardFooter>
                </Card>
              ))
            : // 🔹 REAL CARDS
              list.map((item, index) => (
                <Card
                  key={index}
                  isPressable
                  shadow="sm"
                  className="hover:scale-[1.02] transition-transform"
                >
                  <CardBody className="p-0 overflow-hidden">
                    <Image
                      alt={item.title}
                      src={item.img}
                      className="w-full h-[160px] object-cover"
                    />
                  </CardBody>

                  <CardFooter className="text-small justify-between">
                    <b>{item.title}</b>
                    <p className="text-default-500">{item.price}</p>
                  </CardFooter>
                </Card>
              ))}
        </div>
      </section>
    </DefaultLayout>
  );
}
