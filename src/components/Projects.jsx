import { motion } from "framer-motion";

const projects = [
  {
    name: "Indar Deco",
    description:
      "Indar Deco est une plateforme de v-commerce spécialisée dans les produits de mobilier, intégrant des technologies de réalité augmentée (AR) et de réalité virtuelle (VR) pour offrir une expérience d'achat immersive et innovante. Grâce à ces technologies, les utilisateurs peuvent visualiser les produits dans leur environnement via AR et explorer un showroom virtuel en VR, le tout en ligne.",
    image: "/assets/images/1726764094685-portrait.png", // Remplacer par le chemin réel de l'image
    link: "#", // Mettre le lien réel du projet si nécessaire
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-12 bg-gray-100">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-3xl font-bold text-[#284F75] text-center mb-12 font-[orbitron]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Nos Projets
        </motion.h2>
        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="flex flex-col lg:flex-row items-center w-full bg-white shadow-lg rounded-lg overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="w-full lg:w-1/2 p-8 text-left">
                <h3 className="text-2xl font-semibold text-[#284F75]">
                  {project.name}
                </h3>
                <p className="text-gray-700 text-lg mt-4">
                  {project.description}
                </p>
                {project.link && (
                  <a
                    href={project.link}
                    className="mt-4 inline-block text-blue-500 hover:underline"
                  >
                    En savoir plus →
                  </a>
                )}
              </div>
              <div className="w-full lg:w-1/2 flex justify-center items-center">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full max-w-xs lg:max-w-md h-auto lg:h-[300px] object-cover"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
