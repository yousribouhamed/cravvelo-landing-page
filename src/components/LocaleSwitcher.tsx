import { useLocale } from "next-intl";
import LocaleSwitcherSelect from "./LocaleSwitcherSelect";

export default function LocaleSwitcher() {
  const locale = useLocale();

  return (
    <LocaleSwitcherSelect
      defaultValue={locale}
      items={[
        {
          value: "en",
          label: "english",
        },
        {
          value: "fr",
          label: "frensh",
        },
        {
          value: "ar",
          label: "arabic",
        },
      ]}
      label={"language"}
    />
  );
}
