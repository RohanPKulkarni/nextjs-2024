'use client'

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';

export default function Installation() {
  const [installPrompt, setInstallPrompt] = useState(null);
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    const checkIfInstalled = () => {
      const standaloneMode = window.matchMedia('(display-mode: standalone)').matches;
      const isIosInstalled = navigator.standalone; 
      setIsInstalled(standaloneMode || isIosInstalled);
    };

    checkIfInstalled();

    const handleBeforeInstallPrompt = (event) => {
      if (!isInstalled) {
        event.preventDefault(); 
        setInstallPrompt(event); 
      }
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
  }, [isInstalled]);

  const handleInstallClick = () => {
    if (installPrompt) {
      installPrompt.prompt(); 
      installPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the install');
        } else {
          console.log('User dismissed the install');
        }
        setInstallPrompt(null); 
      });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center mt-12">
      <Button
        className="px-6 py-2 text-black underline border-2 border-black bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none"
        onClick={handleInstallClick}
      >
        Download the App
      </Button>
    </div>

  );
}
