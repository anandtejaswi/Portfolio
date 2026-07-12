import Script from 'next/script';

/**
 * Site-wide analytics tags (Google Analytics + Contentsquare/Hotjar).
 *
 * IDs/URLs are read from public env vars (never hardcoded) so they can be
 * changed from the deployment environment without a code change:
 *   - NEXT_PUBLIC_GA_MEASUREMENT_ID   e.g. G-XXXXXXXXXX
 *   - NEXT_PUBLIC_CONTENTSQUARE_SRC   full script URL
 *
 * Each tag only renders when its env var is set, so previews/local builds
 * without the vars stay untracked.
 */
export function Analytics() {
    const gaMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
    const contentsquareSrc = process.env.NEXT_PUBLIC_CONTENTSQUARE_SRC;

    return (
        <>
            {gaMeasurementId && (
                <>
                    <Script
                        id='gtag-js'
                        src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`}
                        strategy='afterInteractive'
                    />
                    <Script id='gtag-init' strategy='afterInteractive'>
                        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${gaMeasurementId}');`}
                    </Script>
                </>
            )}

            {contentsquareSrc && (
                <Script id='contentsquare' src={contentsquareSrc} strategy='afterInteractive' />
            )}
        </>
    );
}
