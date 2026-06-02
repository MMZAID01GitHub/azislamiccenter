import { useEffect } from "react";
import OneSignal from "react-onesignal";

const APP_ID = "b3ce12ef-6e2a-4228-89b0-9cef43b73a5b";

let initialized = false; // guard against React StrictMode double-invoke

export default function OneSignalInit() {
  useEffect(() => {
    if (initialized || typeof window === "undefined") return;
    initialized = true;

    OneSignal.init({
      appId: APP_ID,
      notifyButton: { enable: true },          // floating bell in the corner
      allowLocalhostAsSecureOrigin: true,       // lets localhost work in dev
    }).catch(err => console.warn("OneSignal init error:", err));
  }, []);

  return null; // renders nothing — side-effects only
}
