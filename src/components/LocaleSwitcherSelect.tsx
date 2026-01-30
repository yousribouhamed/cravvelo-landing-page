"use client";

import { useTransition, useRef, useEffect } from "react";

import { Locale } from "@/lib/i18n/config";
import { setUserLocale } from "@/services/locale";

type Props = {
  defaultValue: string;
  items: Array<{ value: string; label: string }>;
  label: string;
};

export default function LocaleSwitcherSelect({
  defaultValue,
  items,
  label,
}: Props) {
  const [isPending, startTransition] = useTransition();
  const selectRef = useRef<HTMLSelectElement>(null);

  function onChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const locale = event.target.value as Locale;
    startTransition(() => {
      setUserLocale(locale);
    });
  }

  // Update select element when defaultValue changes
  useEffect(() => {
    if (selectRef.current) {
      selectRef.current.value = defaultValue;
    }
  }, [defaultValue]);

  return (
    <div className="relative flex items-center">
      <select
        ref={selectRef}
        aria-label={label}
        defaultValue={defaultValue}
        onChange={onChange}
        disabled={isPending}
        className={`
          appearance-none
          pl-8 pr-8 py-2
          rounded-sm
          bg-transparent
          border border-transparent
          transition-colors
          hover:bg-slate-200
          focus:outline-none
          focus:border-slate-300
          ${isPending ? "opacity-60 cursor-not-allowed" : "cursor-pointer"}
        `}
      >
        {items.map((item) => (
          <option key={item.value} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
    </div>
  );
}
