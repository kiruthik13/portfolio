import { useNavigate } from 'react-router-dom';

export default function StickyHeader({ title }) {
  const navigate = useNavigate();
  return (
    <div className="sticky top-0 z-40 bg-white/80 dark:bg-black/80 backdrop-blur border-b border-gray-200 dark:border-gray-800 flex items-center px-8 py-4">
      <button onClick={() => navigate(-1)} className="text-lg font-bold text-primary hover:underline">&larr; Back</button>
      {title && <span className="ml-6 text-xl font-bold text-gray-800 dark:text-gray-100">{title}</span>}
    </div>
  );
} 