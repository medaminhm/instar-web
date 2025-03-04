import { motion } from "framer-motion";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#284F75] text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold">Contactez-nous</h3>
            <p>Adresse: Pépinière d’entreprise de la manouba 2010, Tunisie</p>
            <p>Email: dhaouadinstar2024@gmail.com</p>
            <p>Téléphone: +216 56 273 801</p>
          </motion.div>

          {/* Quick Contact Form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col space-y-4"
          >
            <h3 className="text-xl font-bold">Envoyez-nous un message</h3>
            <input
              type="text"
              placeholder="Votre Nom"
              className="p-2 rounded text-black"
            />
            <input
              type="email"
              placeholder="Votre Email"
              className="p-2 rounded text-black"
            />
            <textarea
              placeholder="Votre Message"
              className="p-2 rounded text-black"
            ></textarea>
            <button className="bg-white text-[#284F75] py-2 px-4 rounded hover:bg-gray-200">
              Envoyer
            </button>
          </motion.form>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 items-start">
          {/* Social Media Links (Bottom Left) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-start space-x-4"
          >
            <h3 className="text-xl font-bold">Suivez-nous</h3>
            <div className="flex space-x-4 ml-4">
              <a href="#" className="text-white hover:text-gray-300 text-2xl">
                <FaFacebook />
              </a>
              <a href="#" className="text-white hover:text-gray-300 text-2xl">
                <FaTwitter />
              </a>
              <a href="#" className="text-white hover:text-gray-300 text-2xl">
                <FaLinkedin />
              </a>
              <a href="#" className="text-white hover:text-gray-300 text-2xl">
                <FaInstagram />
              </a>
            </div>
          </motion.div>

          {/* Nos partenaires (Aligned Left) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-start space-y-4 lg:px-4"
          >
            <h3 className="text-xl font-bold">Nos partenaires</h3>
            <div className="flex space-x-6">
              <a href="#" className="text-white hover:text-gray-300">
                {/* Partner 1 */}
                <img
                  src="src/assets/images/partners/logo-apii.jpg"
                  alt="APII Manouba"
                  className="h-12"
                />
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                {/* Partner 2 */}
                <img
                  src="src/assets/images/partners/ticdce.jpg"
                  alt="TICDCE"
                  className="h-12"
                />
              </a>
              {/* Add more partners as needed */}
            </div>
          </motion.div>
        </div>
      </div>

      <div className="text-center text-sm text-gray-300 mt-8">
        &copy; 2025 Instar. Tous droits réservés.
      </div>
    </footer>
  );
}
