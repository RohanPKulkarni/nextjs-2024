import { useEffect, useState } from 'react';

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
    <div>
      <h1>Welcome to Noterit</h1>
      {!isInstalled && installPrompt && (
        <button onClick={handleInstallClick}>Install App</button>
      )}
    </div>
  );
}
