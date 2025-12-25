import React from "react";
import DefaultLayout from "@/layouts/default";
import { RangeCalendar } from "@heroui/react";
import { today, getLocalTimeZone } from "@internationalized/date";

export default function BlogPage() {
  const [value, setValue] = React.useState({
    start: today(getLocalTimeZone()),
    end: today(getLocalTimeZone()).add({ weeks: 1 }),
  });

  return (
    <DefaultLayout>
      <section className="flex justify-center py-10">
        <div className="max-w-md">
          <RangeCalendar
            aria-label="Date range"
            value={value}
            onChange={setValue}
          />
        </div>
      </section>
    </DefaultLayout>
  );
}
