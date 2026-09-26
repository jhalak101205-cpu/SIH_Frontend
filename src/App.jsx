import React, { useState, useEffect } from 'react';
import { TopNav } from './components/TopNav';
import { HomePage } from './pages/HomePage';
import { NationalDashboard } from './pages/NationalDashboard/NationalDashboard';
import { ApiPage } from './pages/ApiPage';
import { HackathonPage } from './pages/HackathonPage';
import { MapExplorerModal } from './components/MapExplorerModal';
import { AiChatbotDrawer } from './components/AiChatbotDrawer';
import { UserManualModal } from './components/UserManualModal';
import { SignInModal } from './components/SignInModal';
import { Footer } from './components/Footer';
import { Bot } from 'lucide-react';
import './App.css';

export function App() {
  const getInitialPage = () => {
    const hash = window.location.hash.replace('#', '');
    if (['home', 'dashboard', 'api', 'hackathon'].includes(hash)) {
      return hash;
    }
    return 'home';
  };

  const [activePage, setActivePage] = useState(getInitialPage());
  const [fontScale, setFontScale] = useState('md');
  const [currentLang, setCurrentLang] = useState('en');

  // Modals & Drawers
  const [isMapModalOpen, setIsMapModalOpen] = useState(false);
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);
  const [isUserManualOpen, setIsUserManualOpen] = useState(false);
  const [isSignInOpen, setIsSignInOpen] = useState(false);

  // Sync hash changes
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (['home', 'dashboard', 'api', 'hackathon'].includes(hash)) {
        setActivePage(hash);
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page) => {
    setActivePage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Sync font scale with html root
  useEffect(() => {
    document.documentElement.classList.remove('font-scale-sm', 'font-scale-md', 'font-scale-lg');
    document.documentElement.classList.add(`font-scale-${fontScale}`);
  }, [fontScale]);

  return (
    <div className="app-main-layout" id="main-content">
      
      {/* 
        CRITICAL FIX FOR USER REQUEST:
        When on 'dashboard', we DO NOT render TopNav because NationalDashboard 
        has its OWN authentic Image 1 single navbar! This completely eliminates the double navbar!
      */}
      {activePage !== 'dashboard' && (
        <TopNav
          activePage={activePage}
          onNavigate={handleNavigate}
          fontScale={fontScale}
          setFontScale={setFontScale}
          currentLang={currentLang}
          setCurrentLang={setCurrentLang}
          onOpenSignIn={() => setIsSignInOpen(true)}
          onOpenUserManual={() => setIsUserManualOpen(true)}
        />
      )}

      {/* DEDICATED INDIVIDUAL PAGES */}
      <main className="page-content-wrapper">
        {activePage === 'home' && (
          <HomePage 
            onNavigate={handleNavigate}
            onOpenSignIn={() => setIsSignInOpen(true)}
            onOpenUserManual={() => setIsUserManualOpen(true)}
          />
        )}

        {activePage === 'dashboard' && (
          <NationalDashboard
            onNavigateBack={() => handleNavigate('home')}
            onOpenMapModal={() => setIsMapModalOpen(true)}
            onOpenChatbot={() => setIsChatbotOpen(true)}
          />
        )}

        {activePage === 'api' && (
          <ApiPage onNavigate={handleNavigate} />
        )}

        {activePage === 'hackathon' && (
          <HackathonPage onNavigate={handleNavigate} />
        )}
      </main>

      {/* FOOTER (rendered for main portal pages; NationalDashboard has its own Image 1 footer) */}
      {activePage !== 'dashboard' && (
        <Footer onNavigate={handleNavigate} />
      )}

      {/* SINGLE SUBTLE FLOATING BOT */}
      <div className="floating-bot-single-wrap">
        <button
          className="btn-floating-bot"
          onClick={() => setIsChatbotOpen(true)}
          title="Open Bhumi AI Policy Assistant"
          aria-label="Open AI Assistant"
        >
          <Bot size={20} />
          <span className="floating-bot-label">Ask Bhumi AI</span>
          <span className="floating-pulse-ring" />
        </button>
      </div>

      {/* MODALS */}
      <MapExplorerModal
        isOpen={isMapModalOpen}
        onClose={() => setIsMapModalOpen(false)}
      />

      <AiChatbotDrawer
        isOpen={isChatbotOpen}
        onClose={() => setIsChatbotOpen(false)}
      />

      <UserManualModal
        isOpen={isUserManualOpen}
        onClose={() => setIsUserManualOpen(false)}
      />

      <SignInModal
        isOpen={isSignInOpen}
        onClose={() => setIsSignInOpen(false)}
        onSuccessfulLogin={() => handleNavigate('dashboard')}
      />

    </div>
  );
}

export default App;
