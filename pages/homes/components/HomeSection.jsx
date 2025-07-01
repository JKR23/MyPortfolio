'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Img1 from '@/public/img/me2.jpg';

export default function HomeSection() {
   return (
      <section id="home" className="relative w-full h-screen overflow-hidden">
         {/* Image en arrière-plan pleine page */}
         <Image
            src={Img1}
            alt="Image développeur"
            fill
            style={{ objectFit: 'cover' }}
            className="brightness-75 z-0"
            priority
         />

         {/* Contenu texte au-dessus de l’image, aligné à droite */}
         <motion.div
            className="relative z-10 flex items-center justify-end w-full h-full px-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
         >
            <div className="max-w-xl text-right text-white space-y-6">
               <h2 className="text-3xl md:text-5xl font-bold text-gray-700 italic">
                  Julio Kuntuala
               </h2>
               <h3 className="text-3xl md:text-5xl font-bold text-yellow-400">
                  Développeur Backend Java
               </h3>
               <p className="text-lg text-gray-300 leading-relaxed">
                  Passionné par la conception d'architectures robustes, je suis un développeur
                  backend Java junior. Mon univers : Spring Boot, les API REST, la performance, et
                  l'envie constante d'apprendre. Je transforme la complexité technique en solutions
                  simples, propres et efficaces.
               </p>

               <div className="flex flex-col md:flex-row gap-4 md:justify-end">
                  <a
                     href="#projets"
                     className="bg-yellow-400 text-black px-6 py-2 rounded hover:bg-yellow-500 transition"
                  >
                     Voir mes projets
                  </a>
                  <a
                     href="/Cv_RIcarka_Kuntuala.pdf"
                     download
                     className="border border-yellow-400 px-6 py-2 rounded hover:bg-yellow-400 hover:text-black transition"
                  >
                     Télécharger mon CV
                  </a>
               </div>
            </div>
         </motion.div>
      </section>
   );
}
