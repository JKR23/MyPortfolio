'use client';

import React from 'react';
import Logo from '@/public/img/me1.jpg';
import Image from 'next/image';
import Link from 'next/link';

export default function Footers() {
   return (
      <footer className="bg-gray-700 text-white">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
               {/* Slogan */}
               <div className="flex flex-col items-center sm:items-start">
                  <Image
                     src={Logo}
                     alt="Kuntuala Julio Ricarka"
                     width={80}
                     height={80}
                     className="rounded-full cursor-pointer"
                  />
                  <div className="mt-4 text-center sm:text-left">
                     <h2 className="bg-yellow-500 text-white text-base sm:text-lg md:text-xl font-bold px-4 py-2 rounded leading-tight">
                        Kuntuala Julio Ricarka <br className="hidden sm:inline" />
                        Java Backend Junior
                     </h2>
                  </div>
               </div>

               {/* Navigation */}
               <div>
                  <h3 className="text-lg font-semibold mb-4 text-yellow-500">Navigation</h3>
                  <ul className="space-y-2">
                     <li>
                        <Link
                           href="#home"
                           className="text-white/80 hover:text-yellow-400 transition duration-300"
                        >
                           Accueil
                        </Link>
                     </li>
                     <li>
                        <Link
                           href="#formation"
                           className="text-white/80 hover:text-yellow-400 transition duration-300"
                        >
                           Formation
                        </Link>
                     </li>
                     <li>
                        <Link
                           href="#competences"
                           className="text-white/80 hover:text-yellow-400 transition duration-300"
                        >
                           Compétences
                        </Link>
                     </li>
                     <li>
                        <Link
                           href="#projets"
                           className="text-white/80 hover:text-yellow-400 transition duration-300"
                        >
                           Projets
                        </Link>
                     </li>
                     <li>
                        <Link
                           href="#apropos"
                           className="text-white/80 hover:text-yellow-400 transition duration-300"
                        >
                           À propos
                        </Link>
                     </li>
                  </ul>
               </div>

               {/* Ce que je propose */}
               <div>
                  <h3 className="text-lg font-semibold mb-4 text-yellow-500">Ce que je propose</h3>
                  <p className="text-sm text-white/80 text-justify">
                     En tant que développeur backend Java junior, je conçois des APIs REST simples
                     mais efficaces avec Spring Boot. Je suis capable de connecter ces services à
                     une base de données MySQL, et de les tester avec JUnit et Mockito. J’intègre
                     également des interfaces React de base pour interagir avec mes APIs.
                  </p>
               </div>

               {/* Outils que j'apprends */}
               <div>
                  <h3 className="text-lg font-semibold mb-4 text-yellow-500">
                     Outils que j'apprends
                  </h3>
                  <p className="text-sm text-white/80 text-justify">
                     Je me forme activement à l'utilisation de Docker, Jakarta EE, AWS (pour le
                     stockage d’images), et à l’architecture orientée microservices. Mon objectif
                     est de devenir développeur backend complet, capable de concevoir des solutions
                     professionnelles de bout en bout.
                  </p>
               </div>
            </div>

            <div className="border-t border-white/30 mt-12 pt-20 text-center text-white/60 text-sm">
               © 2025 JKR23 - Kuntuala Julio. Tous droits réservés.
            </div>
         </div>
      </footer>
   );
}
