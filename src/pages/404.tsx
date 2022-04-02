import useTranslation from 'next-translate/useTranslation'
import { Layout } from '../components/layout';
import Link from 'next/link'

export default function Error404() {
  const { t, lang } = useTranslation()

  return (
    <Layout title="Lorem ipsum" desc="Lorem ipsum">
      <div className="mx-auto my-0 h-80 px-6">
        <h1 className="text-3xl font-bold font-Outfit text-purple py-12">{t`error:404`}</h1>
          <Link href="/" locale={lang == 'es' ? 'es': 'en'}>
            <a className="underline font-bold font-Outfit">{t`error:backToHomepage`}</a>
          </Link>
      </div>
    </Layout>
  )
}
