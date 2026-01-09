import { useState } from "react";
import { motion } from "framer-motion";
import { Send, MapPin, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Layout from "@/components/layout/Layout";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message envoyé",
      description: "Merci pour votre message. Je vous répondrai dans les plus brefs délais.",
    });

    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 md:py-24">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-4">
              Entrons en contact
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Vous êtes galeriste, journaliste, ou simplement touché par mon univers ? 
              N'hésitez pas à m'écrire pour toute demande de collaboration, exposition ou information.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="pb-20">
        <div className="container-narrow">
          <div className="grid lg:grid-cols-3 gap-16">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-xl font-semibold mb-6">Informations</h2>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <MapPin className="text-primary mt-1" size={20} />
                    <div>
                      <p className="font-medium">Atelier</p>
                      <p className="text-muted-foreground">Nantes, France</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Mail className="text-primary mt-1" size={20} />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-muted-foreground">contact@carrementabstrait.com</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-border">
                <h3 className="text-sm uppercase tracking-widest text-muted-foreground mb-4">
                  Pour les professionnels
                </h3>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  Je suis disponible pour des expositions personnelles ou collectives, 
                  des commandes sur mesure, et des collaborations artistiques.
                </p>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Nom *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border bg-transparent focus:outline-none focus:border-primary transition-colors"
                      placeholder="Votre nom"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border bg-transparent focus:outline-none focus:border-primary transition-colors"
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Objet *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border bg-transparent focus:outline-none focus:border-primary transition-colors"
                  >
                    <option value="">Sélectionnez un objet</option>
                    <option value="exposition">Proposition d'exposition</option>
                    <option value="presse">Demande presse</option>
                    <option value="collaboration">Collaboration artistique</option>
                    <option value="information">Demande d'information</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-border bg-transparent focus:outline-none focus:border-primary transition-colors resize-none"
                    placeholder="Votre message..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center gap-3 bg-foreground text-background px-8 py-4 text-sm uppercase tracking-widest hover:bg-foreground/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    "Envoi en cours..."
                  ) : (
                    <>
                      Envoyer
                      <Send size={16} />
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
