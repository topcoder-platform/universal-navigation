import type { ContactSupportRequest } from './contact-support-request.model'

export async function sendSupportRequest(request: ContactSupportRequest): Promise<any> {
  const url: string = `${ENV_IS_PROD ? 'https://api.topcoder.com/v5' : 'https://api.topcoder-dev.com/v5'}/challenges/support-requests`

  return fetch(url, {
    method: 'POST',
    headers: {'content-type': 'application/json'},
    body: JSON.stringify(request)
  });
}
