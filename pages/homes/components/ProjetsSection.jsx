import Link from 'next/link';

export default function ProjetsSection() {
   const projects = [
      {
         title: 'TakeitfreeAuthBackend',
         description:
            'API REST en Spring Boot pour la gestion et authentification des utilisateurs (JWT, sécurité, endpoints dédiés).',
      },
      {
         title: 'TakeItFreeItemManagement',
         description:
            'Service backend Spring Boot pour gérer les articles (CRUD), stockage en base SQL (MySQL) via JDBC.',
      },
      {
         title: 'TakeitfreeAuthFrontend',
         description:
            "Frontend React basique qui communique avec l'API d’authentification (formulaires, gestion de session).",
      },
      {
         title: 'TakeItFreeItemManagementFrontend',
         description:
            'Interface React/Hooks pour afficher et modifier les articles via l’API backend.',
      },
      {
         title: 'ClimaProBKCN',
         description:
            "Site vitrine réalisé en React pour présenter les services d'une entreprise de climatisation : installation, entretien et dépannage. Interface responsive avec formulaire de contact intégré.",
      },
   ];

   return (
      <section id="projets" className="py-20 px-4 sm:px-6 max-w-7xl mx-auto overflow-x-hidden">
         <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-yellow-400 mb-6 break-words">
               Mes Projets
            </h2>
            <p className="text-lg sm:text-xl text-black-300 max-w-2xl mx-auto italic break-words">
               Voici quelques-unes de mes créations en Java et technologies backend, accompagnées
               d’un frontend fonctionnel. Chaque projet reflète mon savoir-faire en API REST, Spring
               Boot, React, et gestion de données.
            </p>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
               <div
                  key={index}
                  className="bg-gray-700 backdrop-blur shadow-lg rounded-lg p-6 border border-gray-600"
               >
                  <h3 className="text-xl sm:text-2xl font-bold text-yellow-400 mb-2 break-words max-w-full overflow-hidden">
                     {project.title}
                  </h3>
                  <p className="text-gray-200 text-sm sm:text-base">{project.description}</p>
               </div>
            ))}
         </div>

         {/* Bloc explicatif sur le projet TakeItFree */}
         <div className="mt-16 bg-yellow-100 border-l-4 border-yellow-400 shadow-md p-6 rounded-lg text-gray-900">
            <h3 className="text-xl sm:text-2xl font-bold mb-2 text-yellow-600 break-words">
               Projet Global : TakeItFree
            </h3>
            <p className="text-base sm:text-lg">
               Les 4 microservices ci-dessus communiquent entre eux et constituent un seul projet :{' '}
               <strong>TakeItFree</strong>. Ce projet permet aux utilisateurs inscrits de publier
               les articles dont ils ne veulent plus. Tout le monde peut consulter les articles
               disponibles à donner, voir dans quelle ville ils se trouvent, ainsi que la distance
               (en mètres) à partir de sa propre position.
            </p>
         </div>

         <div className="mt-16 text-center">
            <Link
               href="https://github.com/JKR23"
               target="_blank"
               rel="noopener noreferrer"
               className="inline-block bg-yellow-400 text-black px-6 py-3 sm:px-8 sm:py-3 rounded-lg hover:bg-yellow-500 transition font-bold text-base sm:text-lg"
            >
               Voir tous mes projets sur GitHub
            </Link>
         </div>
      </section>
   );
}
