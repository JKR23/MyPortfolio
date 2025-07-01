import { FaJava, FaDatabase, FaProjectDiagram, FaReact, FaCubes, FaVial } from 'react-icons/fa';
import { SiSpringboot, SiApachemaven, SiMysql, SiTestinglibrary } from 'react-icons/si';

export default function SkillSection() {
   return (
      <section id="competences" className="py-16 px-4 sm:px-6 max-w-7xl mx-auto overflow-x-hidden">
         <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-yellow-400 mb-4">Mes Compétences</h3>
            <p className="text-lg text-black-300 italic break-words">
               Voici les outils et technologies que je maîtrise en tant que développeur backend Java
               junior.
            </p>
         </div>

         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {[
               {
                  icon: <FaJava size={40} className="text-orange-500" />,
                  title: 'Java Core',
                  text: 'Bonne maîtrise de la programmation orientée objet, des collections, et des fondamentaux Java.',
               },
               {
                  icon: <SiSpringboot size={40} className="text-green-600" />,
                  title: 'Spring Boot',
                  text: 'Création d’API RESTful, injection de dépendances, gestion des services et contrôleurs.',
               },
               {
                  icon: <SiApachemaven size={40} className="text-blue-600" />,
                  title: 'Maven',
                  text: 'Utilisation de Maven pour la gestion des dépendances et la structuration de projets.',
               },
               {
                  icon: <FaDatabase size={40} className="text-indigo-600" />,
                  title: 'JDBC & MySQL',
                  text: 'Connexion aux bases de données avec JDBC, requêtes SQL, manipulation de données.',
               },
               {
                  icon: <FaProjectDiagram size={40} className="text-teal-500" />,
                  title: 'Architecture MVC',
                  text: 'Compréhension et mise en place d’architectures MVC dans des projets web Java.',
               },
               {
                  icon: <FaReact size={40} className="text-cyan-500" />,
                  title: 'React (niveau basique)',
                  text: 'Création de composants simples, gestion des props, intégration avec des APIs REST.',
               },
               {
                  icon: <FaCubes size={40} className="text-purple-500" />,
                  title: 'Jakarta EE (JEE)',
                  text: 'Notions sur les Servlets, JSP, JPA et le développement d’applications d’entreprise.',
               },
               {
                  icon: <FaVial size={40} className="text-red-400" />,
                  title: 'JUnit',
                  text: 'Écriture de tests unitaires pour assurer la qualité du code et détecter les régressions.',
               },
               {
                  icon: <SiTestinglibrary size={40} className="text-yellow-500" />,
                  title: 'Mockito',
                  text: 'Mocking de dépendances pour tester des composants isolés dans des applications Java.',
               },
            ].map((item, i) => (
               <div
                  key={i}
                  className="flex items-start gap-4 p-6 bg-gray-700 shadow-lg rounded-lg hover:shadow-xl transition duration-300 border border-gray-600"
               >
                  <div className="flex-shrink-0">{item.icon}</div>
                  <div>
                     <h4 className="text-lg font-semibold text-white">{item.title}</h4>
                     <p className="text-gray-300 text-sm">{item.text}</p>
                  </div>
               </div>
            ))}
         </div>
      </section>
   );
}
