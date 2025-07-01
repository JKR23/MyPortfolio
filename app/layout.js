import { Inter } from 'next/font/google';
import Header from '@/components/headers/Header';
import Footer from '@/components/footers/Footer';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });
export const metadata = {
   title: 'Julio Kuntuala – Développeur Backend Java | Portfolio',
   description:
      'Découvrez le portfolio de Julio Kuntuala, développeur backend Java. Projets Spring Boot, API REST, React et gestion de base de données.',
   keywords: [
      'développeur Java',
      'Spring Boot',
      'backend',
      'API REST',
      'React',
      'portfolio développeur',
      'Julio Kuntuala',
      'TakeItFree',
      'Java Junior',
      'projets Java',
      'MySQL',
      'JUnit',
   ],
   openGraph: {
      title: 'Julio Kuntuala – Développeur Backend Java | Portfolio',
      description:
         'Portfolio de Julio Kuntuala : projets Java avec Spring Boot, gestion d’authentification, microservices, tests unitaires et frontend React.',
      url: 'https://jkr-portfolio.vercel.app/',
      siteName: 'Portfolio Julio Kuntuala',
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
