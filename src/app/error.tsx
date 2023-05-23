'use client';

export default function Error({ error }: { error: Error }) {
  return <h4 className="m-4 text-center text-red-400">{error.message || 'Алдаа гарлаа'}</h4>;
}
