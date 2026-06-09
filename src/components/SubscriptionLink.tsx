import { Copy, QrCode, Link2 } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export default function SubscriptionLink() {
  const { t } = useLanguage();
  return (
    <div className="w-full">
      <h3 className="text-xs font-medium text-slate-500 dark:text-slate-400 mb-2 px-1">{t('sub.title')}</h3>
      <div className="flex items-center gap-2">
        <div className="flex-1 bg-white/60 dark:bg-black/20 backdrop-blur-2xl border border-white/60 dark:border-white/5 rounded-[1.25rem] flex items-center pr-3 pl-1.5 h-12 sm:h-14 overflow-hidden relative shadow-[0_4px_20px_rgba(0,0,0,0.05)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.1)] group">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse pointer-events-none"></div>
          <Link2 className="text-blue-500 dark:text-blue-400 w-5 h-5 shrink-0" />
          <input 
            type="text" 
            readOnly 
            value="vless://e0c5ec1aaec8192521..." 
            className="bg-transparent border-none outline-none text-slate-700 dark:text-slate-300 text-[13px] font-mono w-full px-3 text-left direction-ltr"
            dir="ltr"
          />
          <button className="bg-slate-200/50 hover:bg-slate-300/50 dark:bg-white/5 dark:hover:bg-white/10 transition p-2 rounded-xl text-slate-500 dark:text-slate-200 shrink-0 mx-1 border border-white/20 dark:border-white/10">
            <QrCode className="w-5 h-5" />
          </button>
        </div>
        <button className="bg-gradient-to-br from-blue-500 to-indigo-600 dark:from-blue-600 dark:to-indigo-700 hover:opacity-90 transition h-12 w-12 sm:h-14 sm:w-14 rounded-[1.25rem] flex items-center justify-center text-white shrink-0 shadow-[0_8px_20px_rgba(59,130,246,0.3)] border border-white/20">
          <Copy className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      </div>
    </div>
  );
}
