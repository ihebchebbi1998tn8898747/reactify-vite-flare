import React, { useState } from 'react';
import { useToast } from "@/components/ui/use-toast";
import axios from 'axios';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await axios.post('https://respizenmedical.com/fiori/subscribe_email.php', {
        email
      });

      if (response.data.status === 'success') {
        toast({
          title: "Inscription réussie !",
          description: "Merci de vous être inscrit à notre newsletter.",
          duration: 2000,
        });
        setEmail('');
      } else {
        throw new Error(response.data.message);
      }
    } catch (error) {
      console.error('Erreur d\'inscription à la newsletter:', error);
      toast({
        variant: "destructive",
        title: "Erreur",
        description: "Une erreur s'est produite lors de l'inscription. Veuillez réessayer.",
        duration: 2000,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <footer className="bg-white text-gray-800">
      {/* Newsletter Bar */}
      <div className="border-y border-gray-200">
        <div className="container mx-auto px-4 py-3.5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm font-medium text-center md:text-left">Abonnez-vous aujourd'hui et obtenez 5% de réduction sur votre premier achat</p>
          <form onSubmit={handleSubmit} className="flex gap-2 w-full md:w-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Entrez votre email"
              className="px-4 py-2 rounded-md border border-gray-300 flex-1 md:w-[280px] text-sm"
            />
            <button
              type="submit"
              disabled={isLoading}
              className="bg-[#700100] text-white px-6 py-2 rounded-md text-sm hover:bg-[#700100]/90 whitespace-nowrap"
            >
              S'abonner
            </button>
          </form>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Contact and Social - Left side on mobile */}
          <div className="space-y-4 col-span-1">
            <h3 className="font-semibold text-sm mb-4">CONTACTEZ-NOUS</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <span className="inline-block">+212-529-15-93-92</span>
              </li>
              <li>
                <a href="#" className="hover:underline flex items-center gap-2">
                  <span>Envoyez-nous un email</span>
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline flex items-center gap-2">
                  <span>Chat en direct</span>
                </a>
              </li>
            </ul>
            <div className="pt-4">
              <p className="mb-3 text-sm">Suivez-nous</p>
              <div className="flex gap-4">
                <a href="#" className="hover:text-[#700100]-600 transition-colors"><i className="fab fa-instagram text-xl"></i></a>
                <a href="#" className="hover:text-[#700100]-600 transition-colors"><i className="fab fa-facebook text-xl"></i></a>
                <a href="#" className="hover:text-[#700100]-600 transition-colors"><i className="fab fa-youtube text-xl"></i></a>
                <a href="#" className="hover:text-[#700100]-600 transition-colors"><i className="fab fa-tiktok text-xl"></i></a>
              </div>
            </div>
          </div>

          {/* About and Customer Service - Right side on mobile */}
          <div className="space-y-4 col-span-1">
            <h3 className="font-semibold text-sm mb-4">À PROPOS</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">Qu'est-ce que Fiori</a></li>
              <li><a href="#" className="hover:underline">Rapport d'impact</a></li>
              <li><a href="#" className="hover:underline">Prêt à vendre sur Fiori ?</a></li>
            </ul>
            <div className="mt-8">
              <h3 className="font-semibold text-sm mb-4">SERVICE CLIENT</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:underline">Nous contacter</a></li>
                <li><a href="#" className="hover:underline">Informations de livraison</a></li>
                <li><a href="#" className="hover:underline">FAQ</a></li>
                <li><a href="#" className="hover:underline">Politique de retour</a></li>
              </ul>
            </div>
          </div>

          {/* Les Artisans - Only visible on desktop */}
          <div className="hidden lg:block space-y-4">
            <h3 className="font-semibold text-sm mb-4">LES ARTISANS</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">Le monde Fiori</a></li>
              <li><a href="#" className="hover:underline">L'univers Cadeaux</a></li>
              <li><a href="#" className="hover:underline">Le prét à porter</a></li>
              <li><a href="#" className="hover:underline">Accessoires</a></li>
              <li><a href="#" className="hover:underline">Le sur mesure</a></li>
              <li><a href="#" className="hover:underline">Outlet</a></li>
            </ul>
            <div className="pt-4">
              <p className="text-sm mb-2">Nous acceptons</p>
              <div className="flex gap-2">
                <img src="https://i.ibb.co/JnwRLrJ/visa-and-mastercard-logos-logo-visa-png-logo-visa-mastercard-png-visa-logo-white-png-awesome-logos.png" alt="Mastercard" className="h-7" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p className="text-center md:text-left">© 2024 FioriForYou</p>
          <p className="text-xs text-center md:text-right">Fait avec ❤️ en Tunisia par <strong>Holastudie</strong></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;