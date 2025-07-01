import NavBars from '@/components/headers/NavBar';
import Link from 'next/link';

export default function Headers() {
   return (
      <header>
         <div className="bg-gray-700 text-yellow-500 py-2 px-4">
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-center sm:justify-end gap-y-1 sm:gap-x-6 text-sm text-center sm:text-left">
               {/*<span>Tél : 819-743-6466</span>*/}
               <Link href="/" className="cursor-pointer">
                  Email : Kuntualaricarka@gmail.com
               </Link>
               <a
                  href="https://www.linkedin.com/in/ricarka-kuntuala-958129329/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
               >
                  LinkedIn : ricarka-kuntuala
               </a>
            </div>
         </div>
         <NavBars />
      </header>
   );
}
