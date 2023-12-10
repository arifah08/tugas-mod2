// *use client*

import { createClient } from "contentful";

export async function getData() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  const res = await client.getEntries({ content_type: "products" });

  return {
    props: {
      products: res.items,
    },
  };
}

export default function Products(products) {
  console.log(products);
  return <div>Products List</div>;
}
