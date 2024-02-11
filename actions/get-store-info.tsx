import { StoreSettings } from "../types";

const url = `${process.env.NEXT_PUBLIC_API_URL}/store-info`

const getStoreInfo = async (): Promise<StoreSettings> => {
    const res = await fetch(`${url}/`)
    return res.json()
}

export default getStoreInfo