import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/router'
import { useTranslations } from "next-intl";
import Github from "./GitHub";

export default function Header() {
  const t = useTranslations('Index')
  const { locale, locales, route } = useRouter()
  const otherLocale = locales?.find((cur) => cur !== locale)

  return (
    <header className="flex justify-between items-center w-full mt-5 border-b-2 pb-7 sm:px-4 px-2">
      <Link href="/" className="flex space-x-3">
        <Image
          alt="header text"
          src="/icon.svg"
          className="sm:w-12 sm:h-12 w-8 h-8"
          width={32}
          height={32}
        />
        <h1 className="sm:text-4xl text-2xl font-bold ml-2 tracking-tight">
          {t('title')}
        </h1>
      </Link>
      <div className="flex items-center right">
      <span className="text-lg text-black-900">海量精选优质内容，快来看看！&nbsp;  &nbsp;</span>

      <Image
          alt="header text"
          src="/finger.svg"
          className="sm:w-12 sm:h-12 w-1 h-1 right"
          width={32}
          height={32}
        />
    
        </div>
      <div className="flex gap-2">
      {
        otherLocale && (
          <div
            className="relative font-medium text-black-600 before:absolute before:-bottom-1 before:h-0.5 before:w-full before:scale-x-0 before:bg-indigo-600 before:transition hover:before:scale-x-100">
          <Link href={route} locale={otherLocale}>
            {t('switchLocale', { locale: otherLocale })}
          </Link>
          </div>
        )
      }
    <Link href="https://www.xiaobaotong.vip/" className="flex space-x-3" legacyBehavior >
      <a target="_blank" rel="noopener noreferrer">
        <Image
              alt="header text"
              src="/logo.svg"
              className="sm:w-12 sm:h-12 w-8 h-8"
              width={32}
              height={32}
            />
      </a>
    </Link>
    </div>


    </header>
  );
}
