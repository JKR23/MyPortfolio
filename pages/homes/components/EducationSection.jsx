import LogoSection from '@/public/img/clc.png'; // ou logo de La Cité

export default function EducationSection() {
   return (
      <section
         id="formation"
         className="flex flex-col md:flex-row items-center justify-between py-16 px-6 max-w-7xl mx-auto"
      >
         {/* Image à gauche */}
         <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <img
               src={LogoSection.src}
               alt="Collège La Cité"
               className="w-full h-auto rounded-lg shadow-lg"
            />
         </div>

         {/* Texte à droite */}
         <div className="w-full md:w-1/2 md:pl-8 hover:shadow-lg rounded-lg transition duration-300">
            <h3 className="text-3xl font-bold text-yellow-400 mb-4">Formation</h3>
            <h2 className="text-2xl font-semibold mb-4">Diplôme en Programmation informatique</h2>
            <p className="text-lg text-black-300 mb-4">
               J’ai complété ma formation au <strong>Collège La Cité</strong>, où j’ai appris les
               fondamentaux du développement logiciel : algorithmique, bases de données, conception
               orientée objet, développement web et mobile.
            </p>
            <p className="text-lg text-black-300 mb-6">
               Ce parcours m’a permis d’acquérir une base solide en :
            </p>
            <ul className="list-disc list-inside text-black-300 mb-3 italic">
               <li>Java</li>
               <li>Spring Boot</li>
               <li>SQL</li>
               <li>Bonnes pratiques du développement backend</li>
            </ul>
         </div>
      </section>
   );
}
