import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/routing';
import Header from '../components/header';

import '../globals.css'
 
export default function HomePage() {
  const t = useTranslations('HomePage');
  return (
    <div>
      <Header/>
      
      <div className='text-wrap'>
        
        <h1 className=' text-center gap-2 font-black text-2xl pt-4 lg:text-7xl md:text-6xl sm:text-4xl'>
          {t('title')}
        </h1>
        <p className="font-georgia text-8xl ordinal ">1</p>
      </div>
      
      
    </div>
  );
}