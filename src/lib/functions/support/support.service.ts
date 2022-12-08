import { TC_API_V5_HOST } from 'lib/config'

import type { ContactSupportRequest } from './contact-support-request.model'

export async function sendSupportRequest(request: ContactSupportRequest): Promise<any> {
  const url: string = `${TC_API_V5_HOST}/challenges/support-requests`

  return fetch(url, {
    method: 'POST',
    headers: {'content-type': 'application/json'},
    body: JSON.stringify(request)
  });
}
