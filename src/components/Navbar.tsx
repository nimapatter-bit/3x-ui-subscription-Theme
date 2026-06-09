import { Moon, Sun, ChevronDown, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

interface NavbarProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

export default function Navbar({ isDarkMode, toggleDarkMode }: NavbarProps) {
  const { lang, setLang, t } = useLanguage();

  return (
    <header className="flex flex-col pb-4 z-50 relative">
      <div className="flex items-center justify-between font-mono">
        <div className="flex items-center gap-2.5">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-indigo-600 dark:from-blue-600 dark:to-indigo-800 rounded-xl flex items-center justify-center shadow-[0_4px_20px_rgba(59,130,246,0.5)] border border-white/20">
            <ShieldCheck className="w-6 h-6 text-white" />
          </div>
          <span className="text-lg font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500 dark:from-blue-300 dark:to-indigo-300 font-sans tracking-tight drop-shadow-sm" dir="ltr">
            AmiricanoVPN
          </span>
        </div>
        <div className="flex items-center gap-2">
          <button 
            onClick={() => setLang(lang === 'FA' ? 'EN' : 'FA')}
            className="flex items-center gap-1.5 px-3 py-2 bg-white/10 dark:bg-black/20 backdrop-blur-md rounded-full hover:bg-white/20 dark:hover:bg-black/40 transition border border-white/10 shadow-sm"
          >
            <span className="text-[11px] font-medium text-slate-700 dark:text-slate-100 font-sans">{lang === 'FA' ? 'فارسی' : 'English'}</span>
            <ChevronDown className="w-3 h-3 text-slate-500 dark:text-slate-200" />
          </button>
          <button onClick={toggleDarkMode} className="p-2 bg-white/10 dark:bg-black/20 backdrop-blur-md rounded-full hover:bg-white/20 dark:hover:bg-black/40 transition border border-white/10 shadow-sm text-slate-700 dark:text-slate-200">
            {isDarkMode ? (
                <Sun className="w-4 h-4 text-amber-400" />
            ) : (
                <Moon className="w-4 h-4 text-indigo-500" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
