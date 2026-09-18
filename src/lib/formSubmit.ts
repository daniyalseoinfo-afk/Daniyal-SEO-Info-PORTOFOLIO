const FORM_ENDPOINT = 'https://formsubmit.co/ajax/daniyalseoinfo@gmail.com';

export async function submitPortfolioForm(
  subject: string,
  fields: Record<string, string>
): Promise<void> {
  const response = await fetch(FORM_ENDPOINT, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      _subject: subject,
      _template: 'table',
      _captcha: 'false',
      _honey: '',
      submitted_from: window.location.href,
      ...fields
    })
  });

  if (!response.ok) {
    throw new Error('The form service could not accept this submission.');
  }

  const result = await response.json().catch(() => null);
  if (result && result.success === false) {
    throw new Error(result.message || 'The form service rejected this submission.');
  }
}
