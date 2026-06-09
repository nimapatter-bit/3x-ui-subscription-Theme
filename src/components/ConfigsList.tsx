import { Copy, QrCode, Server } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const configs = [
  { id: '1', name: 'GB/20 GB 0.44', protocol: 'TROJAN', flag: '🏳️', extra: 'TROJAN Protocol', type: 'trojan' },
  { id: '2', name: '1405/04/18', protocol: 'TROJAN', flag: '📅', extra: 'TROJAN Protocol', type: 'trojan' },
  { id: '3', name: 'هر روز لینکتون رو آپدیت کنید', protocol: 'TROJAN', flag: '🚀', extra: 'TROJAN Protocol', type: 'trojan' },
  { id: '4', name: 'Turkey 🍓 → Luna', protocol: 'TROJAN', flag: '🇹🇷', extra: 'TROJAN Protocol', type: 'trojan' },
  { id: '5', name: 'Fi9 🤍 → Elite', protocol: 'VMESS', flag: '🇫🇮', extra: 'VMESS Protocol', type: 'vmess' },
  { id: '6', name: 'DE1 🤍 → Elite', protocol: 'VMESS', flag: '🇩🇪', extra: 'VMESS Protocol', type: 'vmess' },
  { id: '7', name: 'DE8 🤍 → Elite', protocol: 'VMESS', flag: '🇩🇪', extra: 'VMESS Protocol', type: 'vmess' },
  { id: '8', name: 'Turkey 🍓 → Prime', protocol: 'VMESS', flag: '🇹🇷', extra: 'VMESS Protocol', type: 'vmess' },
];

export default function ConfigsList() {
  const { t } = useLanguage();
  return (
    <div className="w-full">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <span className="bg-blue-500/10 dark:bg-blue-500/20 text-blue-700 dark:text-blue-400 font-mono text-xs px-3 py-1 rounded-lg border border-blue-500/20 dark:border-blue-500/20">{configs.length} {t('configs.count')}</span>
        <div className="flex items-center gap-3">
          <div>
            <h3 className="font-bold text-slate-800 dark:text-white text-base">{t('configs.title')}</h3>
            <p className="text-[10px] text-slate-500 dark:text-slate-400 text-right mt-0.5">{t('configs.hint')}</p>
          </div>
          <div className="w-10 h-10 bg-white/60 dark:bg-black/20 rounded-xl flex items-center justify-center shrink-0 border border-white/60 dark:border-white/20 backdrop-blur-md shadow-sm">
             <Server className="w-5 h-5 text-blue-600 dark:text-blue-300" />
          </div>
        </div>
      </div>

      {/* Config Items List */}
      <div className="space-y-3">
        {configs.map((config) => (
          <div 
            key={config.id} 
            className="p-3.5 bg-white/60 dark:bg-black/20 backdrop-blur-xl border border-white/60 dark:border-white/5 rounded-2xl flex items-center justify-between hover:bg-white/80 dark:hover:bg-black/40 transition-all shadow-sm group cursor-pointer"
          >
            <div className="flex gap-1.5 shrink-0">
              <button className="p-2 text-slate-500 dark:text-slate-300 hover:text-slate-800 dark:hover:text-white bg-white/50 hover:bg-white/80 dark:bg-white/5 dark:hover:bg-white/10 rounded-xl transition border border-transparent dark:hover:border-white/20">
                <Copy className="w-4 h-4" />
              </button>
              <button className="p-2 text-slate-500 dark:text-slate-300 hover:text-slate-800 dark:hover:text-white bg-white/50 hover:bg-white/80 dark:bg-white/5 dark:hover:bg-white/10 rounded-xl transition border border-transparent dark:hover:border-white/20">
                <QrCode className="w-4 h-4" />
              </button>
            </div>
            
            <div className="flex items-center gap-3 text-right flex-1 justify-end truncate ml-2">
              <div className="truncate">
                <h4 className="font-bold text-slate-800 dark:text-white text-sm mb-0.5 font-mono flex items-center justify-end gap-1.5 truncate">
                  <span dir="ltr" className="truncate">{config.name}</span>
                  <span className="text-base leading-none shrink-0">{config.flag}</span>
                </h4>
                <p className="text-[10px] text-slate-500 dark:text-slate-400 font-mono tracking-wider">{config.extra}</p>
              </div>
              <div className={`text-[9px] font-bold px-2 py-1 rounded-lg tracking-wider shrink-0 shadow-sm ${
                config.type === 'trojan' ? 'bg-purple-500/10 dark:bg-purple-500/20 text-purple-600 dark:text-purple-200 border border-purple-500/20 dark:border-purple-500/30' : 'bg-orange-500/10 dark:bg-orange-500/20 text-orange-600 dark:text-orange-200 border border-orange-500/20 dark:border-orange-500/30'
              }`}>
                {config.protocol}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
