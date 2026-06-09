import { Home, Grid, Server } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

interface BottomNavProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function BottomNav({ activeTab, setActiveTab }: BottomNavProps) {
  const { t } = useLanguage();

  const tabs = [
    { id: 'apps', icon: Grid, label: t('nav.apps') },
    { id: 'home', icon: Home, label: t('nav.home') },
    { id: 'configs', icon: Server, label: t('nav.configs') },
  ];

  return (
    <div className="flex items-center justify-between bg-white/60 dark:bg-black/40 backdrop-blur-3xl border border-white/60 dark:border-white/10 rounded-full px-2 py-1.5 shadow-[0_8px_32px_rgba(0,0,0,0.1)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.4)] w-[92%] max-w-[360px] mx-auto">
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;
        const Icon = tab.icon;
        return (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex flex-col items-center justify-center w-full py-1.5 rounded-full transition-all duration-300 relative ${
              isActive 
                ? 'bg-blue-500/10 dark:bg-white/10 scale-100' 
                : 'hover:bg-black/5 dark:hover:bg-white/5 scale-95 opacity-70 hover:opacity-100'
            }`}
          >
            <Icon className={`w-4 h-4 mb-0.5 z-10 transition-colors ${
              isActive ? 'text-blue-600 dark:text-blue-400' : 'text-slate-500 dark:text-slate-400'
            }`} />
            <span className={`text-[9px] font-medium z-10 transition-colors ${
              isActive ? 'text-blue-900 dark:text-white' : 'text-slate-500 dark:text-slate-400'
            }`}>
              {tab.label}
            </span>
          </button>
        );
      })}
    </div>
  );
}
