'use client';

import {FormEvent, useMemo, useState} from 'react';

type Props = {
  labels: {
    formTitle: string;
    name: string;
    company: string;
    email: string;
    phone: string;
    request: string;
    send: string;
    sending: string;
    success: string;
    error: string;
    required: string;
  };
};

export function QuoteForm({labels}: Props) {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [request, setRequest] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const isValid = useMemo(() => {
    return Boolean(name.trim() && email.trim() && request.trim());
  }, [email, name, request]);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!isValid) {
      setStatus('error');
      return;
    }

    setStatus('sending');

    await new Promise((resolve) => {
      window.setTimeout(resolve, 650);
    });

    setStatus('success');
    setName('');
    setCompany('');
    setEmail('');
    setPhone('');
    setRequest('');
  };

  return (
    <form onSubmit={onSubmit} className="surface-card space-y-4 rounded-2xl p-6">
      <h2 className="font-serif text-3xl text-[var(--foreground)]">{labels.formTitle}</h2>
      <div className="grid gap-4 md:grid-cols-2">
        <label className="text-sm text-[var(--secondary)]">
          {labels.name}
          <input
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="mt-1 w-full rounded-lg border border-[var(--line)] bg-[#fdfbf8] px-3 py-2"
          />
        </label>
        <label className="text-sm text-[var(--secondary)]">
          {labels.company}
          <input
            value={company}
            onChange={(event) => setCompany(event.target.value)}
            className="mt-1 w-full rounded-lg border border-[var(--line)] bg-[#fdfbf8] px-3 py-2"
          />
        </label>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <label className="text-sm text-[var(--secondary)]">
          {labels.email}
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="mt-1 w-full rounded-lg border border-[var(--line)] bg-[#fdfbf8] px-3 py-2"
          />
        </label>
        <label className="text-sm text-[var(--secondary)]">
          {labels.phone}
          <input
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            className="mt-1 w-full rounded-lg border border-[var(--line)] bg-[#fdfbf8] px-3 py-2"
          />
        </label>
      </div>
      <label className="block text-sm text-[var(--secondary)]">
        {labels.request}
        <textarea
          rows={5}
          value={request}
          onChange={(event) => setRequest(event.target.value)}
          className="mt-1 w-full rounded-lg border border-[var(--line)] bg-[#fdfbf8] px-3 py-2"
        />
      </label>

      {status === 'error' && (
        <p className="rounded-lg border border-amber-200 bg-amber-50 px-3 py-2 text-sm text-amber-800">{labels.required}</p>
      )}
      {status === 'success' && (
        <p className="rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-2 text-sm text-emerald-800">{labels.success}</p>
      )}

      <button
        type="submit"
        className="btn-primary px-5 py-3 text-sm font-medium"
        disabled={status === 'sending'}
      >
        {status === 'sending' ? labels.sending : labels.send}
      </button>
      <p className="text-xs text-[var(--secondary)]">{labels.error}</p>
    </form>
  );
}




