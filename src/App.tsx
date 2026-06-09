import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import UserStats from './components/UserStats';
import SubscriptionLink from './components/SubscriptionLink';
import AppsGuide from './components/AppsGuide';
import ConfigsList from './components/ConfigsList';
import BottomNav from './components/BottomNav';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <div className="h-[100dvh] w-full relative overflow-hidden bg-slate-100 dark:bg-slate-950 transition-colors duration-700 font-sans text-slate-800 dark:text-slate-100 flex flex-col items-center justify-center">
      {/* Liquid UI Background Orbs - adapt to dark/light */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden max-w-md mx-auto w-full">
         <div className="absolute top-[-5%] right-[-10%] w-[350px] h-[350px] bg-blue-300/40 dark:bg-blue-800/30 rounded-[100%] blur-[80px] transition-all duration-1000 animate-pulse"></div>
         <div className="absolute bottom-[20%] left-[-15%] w-[400px] h-[400px] bg-indigo-300/30 dark:bg-indigo-900/30 rounded-[100%] blur-[90px] transition-all duration-1000 animate-pulse delay-700"></div>
         <div className="absolute top-[40%] left-[20%] w-[250px] h-[250px] bg-sky-300/20 dark:bg-sky-900/20 rounded-[100%] blur-[100px] transition-all duration-1000"></div>
      </div>

      <div className="w-full max-w-md h-full flex flex-col relative z-10 shadow-2xl overflow-hidden bg-gradient-to-b from-white/10 to-transparent dark:from-white/5 border-x border-white/10">
        
        <div className="px-5 shrink-0 pt-6">
          <Navbar isDarkMode={isDarkMode} toggleDarkMode={() => setIsDarkMode(!isDarkMode)} />
        </div>

        <div className="flex-1 overflow-hidden px-4 sm:px-5 relative z-20 flex flex-col pt-1">
          {activeTab === 'home' && (
            <div className="flex flex-col overflow-y-auto hide-scrollbar pb-36 pt-2 animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-4 sm:space-y-6">
              <UserStats />
              <div className="shrink-0 pointer-events-auto">
                <SubscriptionLink />
              </div>
            </div>
          )}
          {activeTab === 'apps' && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 h-full overflow-y-auto hide-scrollbar pb-36 pt-2 pointer-events-auto">
              <AppsGuide />
            </div>
          )}
          {activeTab === 'configs' && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 h-full overflow-y-auto hide-scrollbar pb-36 pt-2 pointer-events-auto">
              <ConfigsList />
            </div>
          )}
        </div>

        {/* Floating Bottom Nav */}
        <div className="absolute bottom-0 left-0 right-0 z-50 px-6 pb-6 pt-16 bg-gradient-to-t from-slate-100 via-slate-100/95 dark:from-slate-950 dark:via-slate-950/95 to-transparent pointer-events-none">
          <div className="pointer-events-auto max-w-md mx-auto relative">
             {/* Nav Glow */}
             <div className="absolute inset-0 bg-blue-500/20 dark:bg-blue-600/10 blur-xl rounded-full pointer-events-none"></div>
             <BottomNav activeTab={activeTab} setActiveTab={setActiveTab} />
          </div>
        </div>
      </div>
    </div>
  );
}
