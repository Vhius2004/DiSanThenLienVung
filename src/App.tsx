import React, { useState } from 'react';
import { ActiveTab } from './types/index.ts';
import { Header } from './components/Header.tsx';
import { Footer } from './components/Footer.tsx';
import { DiscoveryScreen } from './components/DiscoveryScreen.tsx';
import { DetailScreen } from './components/DetailScreen.tsx';
import { AiAssistantScreen } from './components/AiAssistantScreen.tsx';
import { SourcesScreen } from './components/SourcesScreen.tsx';
import { AboutScreen } from './components/AboutScreen.tsx';
import { ComparisonMatrixModal } from './components/ComparisonMatrixModal.tsx';

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('discovery');
  const [currentRecordId, setCurrentRecordId] = useState<string>('J01-00001');
  const [isMatrixOpen, setIsMatrixOpen] = useState<boolean>(false);

  const handleSelectRecord = (id: string) => {
    setCurrentRecordId(id);
    setActiveTab('detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToDiscovery = () => {
    setActiveTab('discovery');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-rose-900 selection:text-white">
      {/* Top Bar Contract Header */}
      <Header
        activeTab={activeTab}
        setActiveTab={(tab) => {
          setActiveTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenMatrix={() => setIsMatrixOpen(true)}
      />

      {/* Main Content Viewport */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8">
        {activeTab === 'discovery' && (
          <DiscoveryScreen
            onSelectRecord={handleSelectRecord}
            onOpenMatrix={() => setIsMatrixOpen(true)}
          />
        )}

        {activeTab === 'detail' && (
          <DetailScreen
            currentRecordId={currentRecordId}
            onSelectRecord={(id) => setCurrentRecordId(id)}
            onBackToDiscovery={handleBackToDiscovery}
          />
        )}

        {activeTab === 'assistant' && <AiAssistantScreen />}

        {activeTab === 'sources' && <SourcesScreen />}

        {activeTab === 'about' && <AboutScreen />}
      </main>

      {/* Side-by-Side Scientific Comparison Matrix Modal */}
      <ComparisonMatrixModal
        isOpen={isMatrixOpen}
        onClose={() => setIsMatrixOpen(false)}
        onSelectRecord={handleSelectRecord}
      />

      {/* Quiet Footer */}
      <Footer
        setActiveTab={(tab) => {
          setActiveTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenMatrix={() => setIsMatrixOpen(true)}
      />
    </div>
  );
}
