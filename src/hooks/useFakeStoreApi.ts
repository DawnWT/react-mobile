import { z } from "zod"
import { UseQueryResult, useQuery } from "@tanstack/react-query"

type categories = "electronics" | "jewelery" | "men's clothing" | "women's clothing"

interface FakeStoreProductProps {
  id?: number
  category?: categories
  sort?: "desc" | "asc"
  limit?: number
}

const productSchema = z.object({
  id: z.number(),
  title: z.string(),
  price: z.number(),
  description: z.string(),
  category: z.string(),
  image: z.string().url(),
  rating: z.object({
    rate: z.number(),
    count: z.number()
  })
})

export function useFakeStoreGetProduct(props: FakeStoreProductProps & ({id?: undefined} | {category?: categories})): UseQueryResult<{
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
      rate: number;
      count: number;
  };
}[], Error>;
export function useFakeStoreGetProduct(props: FakeStoreProductProps & ({id?: number, category?: undefined})): UseQueryResult<{
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
      rate: number;
      count: number;
  };
}, Error>;
export function useFakeStoreGetProduct({category, id, limit, sort}: FakeStoreProductProps) {
  const baseUrl = "https://fakestoreapi.com/products"

  let url = `${baseUrl}/`

  if (category) {
    url += `category/${category}`
  } else if (id) {
      url += `${id}`
  }

  if (sort) {
    url += `?sort=${sort}`
  }

  if (limit) {
    url += `?limit=${limit}`
  }

  const query = useQuery({
    queryKey: ["fakeStore", url],
    queryFn: async () => {
      const response = await fetch(url)

      if (!response.ok) {
        throw new Error("Network response was not ok")
      }

      const data = await response.json()

      if (category || !id) {
        const validate = productSchema.array().parse(data)

        return validate
      }
      
      const validate = productSchema.parse(data)

      return validate
    },
  })

  return query
}