"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {  Locale, usePathname, useRouter } from "@/i18n/routing";
import { useLocale } from "next-intl";
import {  useTransition } from "react";


export default function LocaleSwitcher() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const localActive = useLocale()
  

  const onChangeLanguage = (value: string) => {
    const nextLocale = value ;
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale as Locale });
    });

  };

  return (
    <Select onValueChange={onChangeLanguage} defaultValue={localActive} disabled={isPending}>
      <SelectTrigger className="w-[120px]">
        <SelectValue placeholder="Language" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="cn">简体中文</SelectItem>
        <SelectItem value="en">English</SelectItem>
      </SelectContent>
    </Select>
  );
}
