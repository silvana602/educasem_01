import { titleFont } from '@/config/fonts';
import Link from 'next/link';
import '@/styles/styles.components/footer.css'

export const Footer = () => {
  return (
    <div className="footer">

      <Link
        href='/'
      >
        <span className={`${ titleFont.className } antialiased font-bold`}>Educasem </span>
        <span>© { new Date().getFullYear() }</span>
        <span className='margin-link'></span>
      </Link>

      <Link
        href='/'
        className="margin-link"
      >
        Privacidad & Legal
      </Link>

      <Link
        href='/'
        className="margin-link"
      >
        Ubicaciones
      </Link>
    </div>
  )
}