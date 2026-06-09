import { Monitor, Apple, Tv, Smartphone, Plus, Download } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export default function AppsGuide() {
  const { t } = useLanguage();
  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-4 px-1">
        <h3 className="text-sm font-bold text-slate-800 dark:text-white">{t('apps.title')}</h3>
        <span className="text-[10px] text-slate-600 dark:text-slate-300 bg-white/40 dark:bg-white/10 px-2 py-1 rounded-md border border-slate-200 dark:border-transparent">{t('apps.tutorial')}</span>
      </div>
      
      {/* Platform Tabs (Glass) */}
      <div className="flex overflow-x-auto hide-scrollbar gap-2.5 mb-6 pb-2">
        <button className="flex items-center gap-2 px-4 py-2 bg-white/80 dark:bg-white/10 backdrop-blur-md rounded-xl text-slate-800 dark:text-white whitespace-nowrap border border-slate-200 dark:border-white/20 shadow-sm">
          <Monitor className="w-4 h-4 text-blue-500 dark:text-blue-200" />
          <span className="text-sm font-medium">{t('apps.windows')}</span>
        </button>
        <button className="flex items-center gap-2 px-4 py-2 bg-white/40 dark:bg-black/20 backdrop-blur-md rounded-xl text-slate-600 dark:text-slate-200 whitespace-nowrap border border-white/40 dark:border-white/5 hover:bg-white/60 dark:hover:bg-white/10 transition">
          <Apple className="w-4 h-4 text-slate-500 dark:text-slate-300" />
          <span className="text-sm font-medium">{t('apps.mac')}</span>
        </button>
        <button className="flex items-center gap-2 px-4 py-2 bg-white/40 dark:bg-black/20 backdrop-blur-md rounded-xl text-slate-600 dark:text-slate-200 whitespace-nowrap border border-white/40 dark:border-white/5 hover:bg-white/60 dark:hover:bg-white/10 transition">
          <span className="text-base leading-none">🐧</span>
          <span className="text-sm font-medium">{t('apps.linux')}</span>
        </button>
      </div>

      {/* Recommended App Card (Liquid Effect) */}
      <div className="bg-white/60 dark:bg-black/20 backdrop-blur-2xl rounded-[1.5rem] p-5 border border-white/60 dark:border-white/5 mb-5 shadow-lg relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-400/10 dark:bg-emerald-400/20 rounded-full blur-[50px] pointer-events-none group-hover:bg-emerald-400/20 dark:group-hover:bg-emerald-400/30 transition-colors"></div>
        
        <div className="flex justify-between items-center mb-5 relative z-10 gap-3">
          <div className="flex-1 text-right min-w-0 pr-1">
            <h4 className="text-base sm:text-lg font-bold text-slate-800 dark:text-white mb-2 flex items-center justify-end gap-2 shrink-0">
              <span className="text-[9px] sm:text-[10px] font-normal text-emerald-600 dark:text-emerald-300 bg-emerald-500/10 dark:bg-emerald-500/20 px-2 py-0.5 rounded-full border border-emerald-500/20 whitespace-nowrap hidden sm:inline-block">{t('apps.recommended')}</span>
              <span className="truncate">Happ</span>
            </h4>
            <div className="flex justify-end gap-1.5 flex-wrap">
              <button className="px-2.5 py-1 bg-white/40 dark:bg-white/5 backdrop-blur-sm rounded-lg text-[10px] text-slate-600 dark:text-slate-200 border border-white/40 dark:border-white/10 hover:bg-white/60 dark:hover:bg-white/20 transition">
                Google Play
              </button>
              <button className="px-2.5 py-1 bg-white/40 dark:bg-white/5 backdrop-blur-sm rounded-lg text-[10px] text-slate-600 dark:text-slate-200 border border-white/40 dark:border-white/10 hover:bg-white/60 dark:hover:bg-white/20 transition">
                APK
              </button>
            </div>
          </div>
          <div className="w-14 h-14 bg-gradient-to-br from-emerald-400 to-teal-600 rounded-[1rem] flex items-center justify-center shrink-0 shadow-[0_4px_15px_rgba(52,211,153,0.3)] text-white font-bold text-2xl border border-white/40 dark:border-white/20 ml-4">
            H
          </div>
        </div>
        
        <button className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:opacity-90 transition text-white rounded-xl py-3.5 flex items-center justify-center gap-2 font-medium shadow-[0_4px_15px_rgba(16,185,129,0.3)] relative z-10">
          <Plus className="w-5 h-5" />
          افزودن خودکار به Happ
        </button>
      </div>

      {/* Other Apps */}
      <div>
         <h4 className="text-[11px] font-medium text-slate-500 dark:text-slate-400 mb-3 px-2">{t('apps.other')}</h4>
         
         <div className="bg-white/40 dark:bg-black/20 backdrop-blur-md rounded-2xl p-3 border border-white/50 dark:border-white/5 flex justify-between items-center shadow-sm">
            <button className="bg-white/60 hover:bg-white/80 dark:bg-white/5 dark:hover:bg-white/10 transition px-3 py-2 rounded-xl text-xs text-slate-600 dark:text-slate-200 flex items-center gap-1.5 border border-white/60 dark:border-white/10">
              <Download className="w-3.5 h-3.5 text-slate-400 dark:text-slate-300" />
              {t('apps.directDownload')}
            </button>
            <div className="flex items-center gap-3">
              <span className="font-bold text-slate-800 dark:text-white text-sm">V2RayNG</span>
              <div className="w-10 h-10 bg-slate-100 dark:bg-black/60 rounded-xl relative overflow-hidden flex items-center justify-center border border-white/60 dark:border-white/10 shadow-inner">
                <span className="text-blue-500 dark:text-blue-300 font-black text-xl leading-none block transform translate-y-px">V</span>
              </div>
            </div>
         </div>
      </div>
    </div>
  );
}
