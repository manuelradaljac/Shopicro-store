import { Hero } from "../types";

const url = `${process.env.NEXT_PUBLIC_API_URL}/heroes`

const getHeroes = async (id: string): Promise<Hero> => {
    const res = await fetch(`${url}/${id}`)
    return res.json()
}

export default getHeroes