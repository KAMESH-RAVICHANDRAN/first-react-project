import { useEffect, useState } from "react";
import { Snippet } from "@heroui/snippet";
import { Code } from "@heroui/code";
import { Button } from "@heroui/react";
import { title, subtitle } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";

export default function IndexPage() {
  const text = "KAMESH";
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const speed = isDeleting ? 80 : 250;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // typing
        setDisplayText(text.slice(0, displayText.length + 1));
        if (displayText.length === text.length) {
          setTimeout(() => setIsDeleting(true), 1000); // pause after typing
        }
      } else {
        // deleting
        setDisplayText(text.slice(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting]);

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center min-h-[70vh] gap-6 py-10 text-center">
        
        {/* HEADLINE */}
        <h1 className={title()}>
          Mr{" "}
          <span className={title({ color: "violet" })}>
            AJ {displayText}
          </span>
          <span className="animate-pulse">|</span>
        </h1>

        {/* SUBTITLE */}
        <p className={subtitle({ class: "max-w-xl" })}>
          Building beautiful, fast, and modern web applications using
          React, Vite, and HeroUI.
        </p>

        {/* CTA BUTTONS */}
        <div className="flex gap-4 mt-4">
          <Button color="primary" size="lg" as="a" href="/docs">
            View Components
          </Button>

          <Button
            variant="bordered"
            size="lg"
            as="a"
            href="https://github.com/KAMESH-RAVICHANDRAN"
            target="_blank"
          >
            GitHub
          </Button>
        </div>

        {/* CODE SNIPPET */}
        <div className="mt-8">
          <Snippet hideSymbol variant="bordered">
            <span>
              Get started by editing{" "}
              <Code color="primary">pages/index.tsx</Code>
            </span>
          </Snippet>
        </div>
      </section>
    </DefaultLayout>
  );
}

