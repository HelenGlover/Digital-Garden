import { PayloadSDK } from '@payloadcms/sdk'
import {API_URL} from '@utils/constants/url';
import type { Config } from '@lib/types/payload-types'

const payload = new PayloadSDK<Config>({
  baseURL: `${API_URL}/api`
})

export default payload
