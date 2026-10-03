import { useState } from 'react';

/* Posts a form to Formspree as JSON. formId is the part after /f/ in your Formspree endpoint.
   status: idle | sending | success | error | unconfigured */
export function useFormspree(formId) {
  const [status, setStatus] = useState('idle');

  const onSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (!formId) return setStatus('unconfigured');
    const data = new FormData(form);
    if (data.get('_gotcha')) return; // honeypot: bots fill this in, people never see it
    const body = {};
    for (const key of new Set(data.keys())) {
      const values = data.getAll(key);
      body[key] = values.length > 1 ? values.join(', ') : values[0]; // multi-select chips -> "a, b, c"
    }
    setStatus('sending');
    try {
      const res = await fetch(`https://formspree.io/f/${formId}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(body),
      });
      if (res.ok) { setStatus('success'); form.reset(); } else setStatus('error');
    } catch {
      setStatus('error');
    }
  };

  return { status, onSubmit };
}