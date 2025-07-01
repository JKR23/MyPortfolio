import { Inter } from 'next/font/google';
import Header from '@/components/headers/Header';
import Footer from '@/components/footers/Footer';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });
export const metadata = {
   title: 'Clima Pro – Installation et Entretien de Climatisation',
   description:
      'Clima Pro offre des services de climatisation de qualité : installation, maintenance et dépannage pour particuliers et professionnels.',
   keywords: [
      'climatisation',
      'Clima Pro',
      'installation climatiseur',
      'entretien',
      'BKCNDynastie',
      'services climatisation',
   ],
   openGraph: {
      title: 'Clima Pro – Installation et Entretien de Climatisation',
      description:
         "Installation, dépannage et entretien de climatiseurs pour maisons et entreprises. Contactez Clima Pro dès aujourd'hui.",
      url: 'https://clima-pro-bkcndynastie.vercel.app/',
      siteName: 'Clima Pro',
      locale: 'fr_FR',
      type: 'website',
   },
};

export default function RootLayout({ children }) {
   return (
      <html lang="en">
         <body className={`${inter.className} flex flex-col min-h-screen`}>
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
         </body>
      </html>
   );
}
