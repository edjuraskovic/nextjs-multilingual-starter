import React, { useEffect, useRef } from 'react'
import Link from 'next/link'
import useTranslation from 'next-translate/useTranslation'
import { Layout } from '../components/layout';

export default function Home() {
  const { t, lang } = useTranslation('home')
  const description = t('description')
  const ref = useRef(null);

  useEffect(() => {
    import("@lottiefiles/lottie-player");
  });
  return (
    <Layout title="Lorem ipsum" desc="Lorem ipsum">
      <div className="mx-auto my-0 h-80">
        <lottie-player
            id="firstLottie"
            ref={ref}
            autoplay
            loop
            mode="normal"
            src="/lottie/star-in-hand-baby-astronaut.json"
            style={{ width: "300px", height: "300px" }}
          ></lottie-player>
      </div>
      <p className="max-w-screen-xs text-3xl font-bold font-Outfit mx-auto my-0 px-6 py-6 md:py-12 text-purple">{description}</p>
        {lang !== 'es' ? (
          <Link href="/" locale="es">
            <a className="underline font-bold font-Outfit text-purple">Switch to Spanish</a>
          </Link>
        ) : (
          <Link href="/" locale="en">
            <a className="underline font-bold font-Outfit">Cambia en Inglés </a>
          </Link>
        )}
    </Layout>
  )
}
