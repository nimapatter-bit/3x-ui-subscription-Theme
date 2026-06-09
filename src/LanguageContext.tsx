import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Lang = 'FA' | 'EN';

interface LanguageContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: string) => string;
}

const translations = {
  FA: {
    'status.active': 'سرویس فعال است',
    'status.total': 'مصرف کل',
    'status.remainingData': 'حجم باقی‌مانده',
    'status.remainingDays': 'روزهای باقی‌مانده',
    'status.days': 'روز',
    'status.expireJalali': 'تاریخ انقضا (ش)',
    'status.expireGregorian': 'تاریخ انقضا (م)',
    'sub.title': 'لینک اتصال هوشمند (سابسکریپشن)',
    'apps.title': 'معرفی برنامه‌ها',
    'apps.tutorial': 'آموزش اتصال',
    'apps.windows': 'ویندوز',
    'apps.mac': 'مک',
    'apps.linux': 'لینوکس',
    'apps.recommended': 'پیشنهادی',
    'apps.other': 'سایر برنامه‌ها',
    'apps.directDownload': 'دانلود مستقیم',
    'configs.count': 'کانفیگ',
    'configs.title': 'کانفیگ‌های اختصاصی',
    'configs.hint': 'برای کپی کلیک کنید',
    'nav.apps': 'اپلیکیشن‌ها',
    'nav.home': 'داشبورد',
    'nav.configs': 'کانفیگ‌ها',
    'lang.fa': 'فارسی',
    'lang.en': 'English'
  },
  EN: {
    'status.active': 'Service is active',
    'status.total': 'Total Usage',
    'status.remainingData': 'Remaining Data',
    'status.remainingDays': 'Remaining Days',
    'status.days': 'Days',
    'status.expireJalali': 'Expiration (J)',
    'status.expireGregorian': 'Expiration (G)',
    'sub.title': 'Smart Connection Link (Subscription)',
    'apps.title': 'Apps Guide',
    'apps.tutorial': 'Tutorial',
    'apps.windows': 'Windows',
    'apps.mac': 'Mac',
    'apps.linux': 'Linux',
    'apps.recommended': 'Recommended',
    'apps.other': 'Other Apps',
    'apps.directDownload': 'Direct Download',
    'configs.count': 'Configs',
    'configs.title': 'Dedicated Configs',
    'configs.hint': 'Click to copy',
    'nav.apps': 'Apps',
    'nav.home': 'Dashboard',
    'nav.configs': 'Configs',
    'lang.fa': 'فارسی',
    'lang.en': 'English'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('FA');
  
  const t = (key: string) => {
    return translations[lang][key as keyof typeof translations['FA']] || key;
  };

  useEffect(() => {
    document.documentElement.dir = lang === 'FA' ? 'rtl' : 'ltr';
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
}
