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
      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center mb-16"
          >
            <p className="text-xs uppercase tracking-[0.4em] text-primary mb-4">Contact</p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl tracking-wide mb-6">
              Entrons en contact
            </h1>
            <p className="text-foreground/60 text-lg max-w-2xl mx-auto">
              Vous êtes galeriste, journaliste, ou simplement touché par mon univers ? 
              N'hésitez pas à m'écrire pour toute demande de collaboration, exposition ou information.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="pb-32">
        <div className="container-narrow">
          <div className="grid lg:grid-cols-3 gap-16">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="space-y-12"
            >
              <div>
                <h2 className="text-xl tracking-wide mb-8">Informations</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="text-primary mt-1" size={20} strokeWidth={1.5} />
                    <div>
                      <p className="text-foreground/80">Atelier</p>
                      <p className="text-muted-foreground">Nantes, France</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Mail className="text-primary mt-1" size={20} strokeWidth={1.5} />
                    <div>
                      <p className="text-foreground/80">Email</p>
                      <p className="text-muted-foreground">contact@carrementabstrait.com</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-border/50">
                <h3 className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">
                  Pour les professionnels
                </h3>
                <p className="text-foreground/60 text-sm leading-relaxed">
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
              transition={{ duration: 1, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <label htmlFor="name" className="block text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">
                      Nom *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-0 py-4 border-0 border-b border-border bg-transparent focus:outline-none focus:border-primary transition-colors duration-300 text-foreground placeholder:text-muted-foreground"
                      placeholder="Votre nom"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-0 py-4 border-0 border-b border-border bg-transparent focus:outline-none focus:border-primary transition-colors duration-300 text-foreground placeholder:text-muted-foreground"
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">
                    Objet *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-0 py-4 border-0 border-b border-border bg-transparent focus:outline-none focus:border-primary transition-colors duration-300 text-foreground"
                  >
                    <option value="" className="bg-background">Sélectionnez un objet</option>
                    <option value="exposition" className="bg-background">Proposition d'exposition</option>
                    <option value="presse" className="bg-background">Demande presse</option>
                    <option value="collaboration" className="bg-background">Collaboration artistique</option>
                    <option value="information" className="bg-background">Demande d'information</option>
                    <option value="autre" className="bg-background">Autre</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-0 py-4 border-0 border-b border-border bg-transparent focus:outline-none focus:border-primary transition-colors duration-300 resize-none text-foreground placeholder:text-muted-foreground"
                    placeholder="Votre message..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group inline-flex items-center gap-4 bg-primary text-background px-10 py-5 text-sm uppercase tracking-[0.15em] hover:bg-primary/90 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    "Envoi en cours..."
                  ) : (
                    <>
                      Envoyer
                      <Send size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
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
