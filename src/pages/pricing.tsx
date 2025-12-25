import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import {Snippet} from "@heroui/react";
import {Code} from "@heroui/react";

export default function DocsPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <Snippet>npm install @heroui/react</Snippet>
          
        </div>
      </section>
    </DefaultLayout>
  );
}
