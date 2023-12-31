import { z } from 'zod'
import { UseQueryResult, useQuery } from '@tanstack/react-query'

type categories = 'electronics' | 'jewelery' | "men's clothing" | "women's clothing"

interface FakeStoreGetProductQueryParams {
  sort?: 'desc' | 'asc'
  limit?: number
}

interface FakeStoreGetProductPropsReturnArray extends FakeStoreGetProductQueryParams {
  category?: categories
  id?: undefined
}
interface FakeStoreGetProductPropsReturnItem extends FakeStoreGetProductQueryParams {
  id: number
  category?: undefined
}

type FakeStoreProductProps = FakeStoreGetProductPropsReturnArray | FakeStoreGetProductPropsReturnItem

const productSchema = z.object({
  id: z.number(),
  title: z.string(),
  price: z.number(),
  description: z.string(),
  category: z.string(),
  image: z.string().url(),
  rating: z.object({
    rate: z.number(),
    count: z.number(),
  }),
})

export type Product = z.infer<typeof productSchema>

export function useFakeStoreGetProduct(props?: FakeStoreGetProductPropsReturnArray): UseQueryResult<
  {
    id: number
    title: string
    price: number
    description: string
    category: string
    image: string
    rating: {
      rate: number
      count: number
    }
  }[],
  Error
>
export function useFakeStoreGetProduct(props?: FakeStoreGetProductPropsReturnItem): UseQueryResult<
  {
    id: number
    title: string
    price: number
    description: string
    category: string
    image: string
    rating: {
      rate: number
      count: number
    }
  },
  Error
>
export function useFakeStoreGetProduct({ category, id, limit, sort }: FakeStoreProductProps = {}) {
  const baseUrl = 'https://fakestoreapi.com/products'

  let url = `${baseUrl}/`
/* 
  if (category) {
    url += `category/${category}`
  } else if (id) {
    url += `${id}`
  }
 */

// prendre en charge le paramètre de catégorie comme suit 
  if (category) {
    url += `/category/${category}`;
  } else if (id) {
    url += `/${id}`;
  }



  if (sort) {
    url += `?sort=${sort}`
  }

  if (limit) {
    url += `?limit=${limit}`
  }

  console.log(url)

  const query = useQuery({
    queryKey: ['fakeStore', url],
    queryFn: async () => {
      const response = await fetch(url)

      if (!response.ok) {
        throw new Error('Network response was not ok')
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
