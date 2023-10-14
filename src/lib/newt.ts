import { createClient } from "newt-client-js";

export const newtClient = createClient({
  spaceUid: import.meta.env.NEWT_SPACE_UID,
  token: import.meta.env.NEWT_CDN_API_TOKEN,
  apiType: "cdn",
});

export interface Article {
  title: string;
  slug: string;
  body: string;
  coverImage: {
    _id: string;
    src: string;
    fileName: string;
    fileType: string;
    fileSize: number;
    width: number;
    height: number;
    title: string;
    altText: string;
    description: string;
    metadata: {};
  };
}
