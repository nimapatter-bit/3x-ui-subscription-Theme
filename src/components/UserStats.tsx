import { User } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export default function UserStats() {
  const { t, lang } = useLanguage();
  return (
    <div className="shrink-0 bg-white/40 dark:bg-black/20 backdrop-blur-md rounded-[1.75rem] overflow-hidden p-5 py-6 sm:p-7 border border-white/50 dark:border-white/10 relative group">
      <div className="flex justify-between items-start mb-4 relative z-10">
        <div>
          <h2 className="text-lg font-bold tracking-tight mb-1 text-slate-800 dark:text-white">Nimapatter@gmail.com</h2>
          <div className="flex items-center gap-1.5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 dark:bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500 dark:bg-emerald-400 shadow-[0_0_8px_rgba(16,185,129,0.8)] dark:shadow-[0_0_8px_rgba(52,211,153,0.8)]"></span>
            </span>
            <span className="text-[11px] font-medium text-emerald-600 dark:text-emerald-300">{t('status.active')}</span>
          </div>
        </div>
        <div className="w-10 h-10 bg-white/50 dark:bg-white/5 rounded-[0.75rem] flex items-center justify-center shrink-0 border border-white/40 dark:border-white/10 shadow-lg backdrop-blur-md">
          <User className="w-5 h-5 text-blue-600 dark:text-blue-200" />
        </div>
      </div>

      <div className="space-y-2 mb-4 relative z-10">
        <div className="flex justify-between items-end">
          <span className="text-blue-600 dark:text-blue-400 font-bold text-2xl drop-shadow-[0_0_12px_rgba(147,197,253,0.4)]">2.2%</span>
          <span className="text-slate-500 dark:text-slate-300 text-[11px] font-medium">{t('status.total')}</span>
        </div>
        
        {/* Liquid Progress Bar */}
        <div className="h-2 w-full bg-slate-200/50 dark:bg-black/40 rounded-full overflow-hidden shadow-inner relative border border-slate-300/30 dark:border-white/5">
          <div className={`absolute top-0 bottom-0 ${lang === 'FA' ? 'right-0 bg-gradient-to-l' : 'left-0 bg-gradient-to-r'} from-blue-500 to-indigo-500 dark:from-blue-600 dark:to-cyan-400 rounded-full w-[2.2%] shadow-[0_0_15px_rgba(96,165,250,0.6)]`}>
             <div className="absolute inset-0 bg-white/20 w-full h-full rounded-full animate-pulse"></div>
          </div>
        </div>
        
        <div className={`flex justify-between items-center text-[10px] px-1 text-slate-500 dark:text-slate-300 font-medium font-mono pt-1 ${lang === 'FA' ? 'flex-row' : 'flex-row-reverse'}`}>
          <span>Used: 446 MB</span>
          <div className="flex items-center gap-2">
             <span className="text-emerald-600 dark:text-emerald-400 drop-shadow-sm px-1 flex gap-0.5"><span className="text-emerald-500 dark:text-emerald-300">↓</span> 1.2 GB</span>
             <span className="text-blue-600 dark:text-blue-400 drop-shadow-sm px-1 flex gap-0.5"><span className="text-blue-500 dark:text-blue-300">↑</span> 210 MB</span>
          </div>
          <span className="text-right">Total: 20 GB</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2 mt-4">
        <div className="bg-white/40 dark:bg-black/20 rounded-xl py-3 px-2 flex flex-col items-center justify-center text-center border border-white/30 dark:border-white/10 backdrop-blur-sm">
          <span className="text-slate-500 dark:text-slate-400 text-[10px] mb-1 font-medium">{t('status.remainingData')}</span>
          <span className="text-[15px] font-bold text-slate-800 dark:text-white font-mono">19.56 GB</span>
        </div>
        <div className="bg-white/40 dark:bg-black/20 rounded-xl py-3 px-2 flex flex-col items-center justify-center text-center border border-white/30 dark:border-white/10 backdrop-blur-sm">
          <span className="text-slate-500 dark:text-slate-400 text-[10px] mb-1 font-medium">{t('status.remainingDays')}</span>
          <span className="text-[15px] font-bold text-slate-800 dark:text-white">29 <span className="text-[10px] font-normal">{t('status.days')}</span></span>
        </div>
        <div className="bg-white/40 dark:bg-black/20 rounded-xl py-3 px-2 flex flex-col items-center justify-center text-center border border-white/30 dark:border-white/10 backdrop-blur-sm">
          <span className="text-slate-500 dark:text-slate-400 text-[10px] mb-1 font-medium">{t('status.expireJalali')}</span>
          <span className="text-[15px] font-bold text-slate-800 dark:text-white font-mono leading-none pt-0.5 pb-0.5">1405/04/18</span>
        </div>
        <div className="bg-white/40 dark:bg-black/20 rounded-xl py-3 px-2 flex flex-col items-center justify-center text-center border border-white/30 dark:border-white/10 backdrop-blur-sm">
          <span className="text-slate-500 dark:text-slate-400 text-[10px] mb-1 font-medium">{t('status.expireGregorian')}</span>
          <span className="text-[15px] font-bold text-slate-800 dark:text-white font-mono leading-none pt-0.5 pb-0.5">2026-07-09</span>
        </div>
      </div>
    </div>
  );
}
