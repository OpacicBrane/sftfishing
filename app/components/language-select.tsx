"use client";

import * as Select from "@radix-ui/react-select";
import { Check, ChevronDown } from "lucide-react";
import { useRouter } from "next/navigation";

export type LanguageOption = {
  code: string;
  name: string;
  label: string;
  flag: string;
};

type LanguageSelectProps = {
  current: string;
  label: string;
  options: LanguageOption[];
};

export function LanguageSelect({ current, label, options }: LanguageSelectProps) {
  const router = useRouter();
  const activeOption = options.find((option) => option.code === current);

  return (
    <Select.Root value={current} onValueChange={(value) => router.push(`/${value}`)}>
      <Select.Trigger
        aria-label={label}
        className="inline-flex h-11 min-w-28 items-center justify-between gap-3 rounded-md border border-white/15 bg-moss-950/80 px-3 text-xs font-black text-white shadow-lg shadow-black/20 outline-none transition hover:border-brass-300/60 hover:bg-moss-900 focus:ring-2 focus:ring-brass-300 data-[state=open]:border-brass-300/70"
      >
        <Select.Value aria-label={activeOption?.label}>
          <span className="flex items-center gap-2">
            <span className="text-base leading-none">{activeOption?.flag}</span>
            <span>{activeOption?.name}</span>
          </span>
        </Select.Value>
        <Select.Icon asChild>
          <ChevronDown size={16} strokeWidth={2.6} />
        </Select.Icon>
      </Select.Trigger>

      <Select.Portal>
        <Select.Content
          position="popper"
          sideOffset={8}
          className="z-[80] min-w-[var(--radix-select-trigger-width)] overflow-hidden rounded-md border border-white/10 bg-moss-950 p-1 text-white shadow-2xl shadow-black/40"
        >
          <Select.Viewport>
            {options.map((option) => (
              <Select.Item
                key={option.code}
                value={option.code}
                className="relative flex cursor-pointer select-none items-center gap-3 rounded px-8 py-2.5 text-sm font-bold outline-none data-[highlighted]:bg-brass-400 data-[highlighted]:text-moss-950"
              >
                <Select.ItemIndicator className="absolute left-2 flex items-center">
                  <Check size={15} strokeWidth={2.8} />
                </Select.ItemIndicator>
                <span className="text-base leading-none">{option.flag}</span>
                <Select.ItemText>{option.label}</Select.ItemText>
                <span className="ml-auto text-xs font-black opacity-70">{option.name}</span>
              </Select.Item>
            ))}
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
}
