export type WhatToDoItem = {
  titleKey: string;
  descriptionKey: string;
  icon_url: string;
};

export const what_to_do: WhatToDoItem[] = [
  {
    titleKey: "items.create.title",
    descriptionKey: "items.create.description",
    icon_url: "/upload.svg",
  },
  {
    titleKey: "items.customize.title",
    descriptionKey: "items.customize.description",
    icon_url: "/store.svg",
  },
  {
    titleKey: "items.share.title",
    descriptionKey: "items.share.description",
    icon_url: "/peapol.svg",
  },
];

