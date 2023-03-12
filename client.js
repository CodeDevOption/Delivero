import { createClient } from "@sanity/client";
import ImageUrlBuilder from "@sanity/image-url";

const client = createClient({
  projectId: "c2n1z68m",
  dataset: "production",
  useCdn: true,
  apiVersion: "2022-01-12",
});

const builder = ImageUrlBuilder(client);

export const urlFor = (source) => builder.image(source).url();

export default client;
