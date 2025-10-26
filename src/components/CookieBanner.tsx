import { useState, useEffect } from "react";
import CookieConsent from "react-cookie-consent";
import { useLanguage } from "../contexts/LanguageContext";

interface Props {
    onConsentChange?: (accepted: boolean) => void;
}

export default function CookieBanner({ onConsentChange }: Props) {
    const [cookiesAccepted, setCookiesAccepted] = useState<boolean | null>(null);
    const { t } = useLanguage();

    useEffect(() => {
        if (cookiesAccepted !== null && onConsentChange) {
            onConsentChange(cookiesAccepted);
        }
    }, [cookiesAccepted, onConsentChange]);

    if (cookiesAccepted !== null) return null;

    return (
        <CookieConsent
            enableDeclineButton
            style={{
                background: "#245F73",
                width: "900px",
                height: "70px",
                margin: "0 auto",
                bottom: "20px",
                left: 0,
                right: 0,
                borderRadius: "8px",
                padding: "0 1rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 2000,
                position: "fixed",
            }}
            buttonStyle={{ display: "none" }}
            declineButtonStyle={{ display: "none" }}
        >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%" }}>
                <div style={{ color: "#fff" }}>{t("cookie_text")}</div>

                <div style={{ display: "flex", gap: "0.5rem" }}>
                    <button
                        onClick={() => setCookiesAccepted(true)}
                        style={{
                            background: "#6A89A7",
                            color: "#fff",
                            fontWeight: "bold",
                            padding: "0.5rem 1rem",
                            borderRadius: "4px",
                            border: "none",
                            cursor: "pointer",
                        }}
                    >
                        {t("cookie_accept")}
                    </button>
                    <button
                        onClick={() => setCookiesAccepted(false)}
                        style={{
                            background: "#ccc",
                            color: "#245F73",
                            fontWeight: "bold",
                            padding: "0.5rem 1rem",
                            borderRadius: "4px",
                            border: "none",
                            cursor: "pointer",
                        }}
                    >
                        {t("cookie_decline")}
                    </button>
                </div>
            </div>
        </CookieConsent>
    );
}
