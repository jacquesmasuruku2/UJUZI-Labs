import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { ArrowRight, Users, Calendar, Rocket, Award, Star, Zap, Globe, Heart } from "lucide-react";
import ModernButton from "@/components/ui/ModernButton";
import ModernCard from "@/components/ui/ModernCard";
import ModernSectionWrapper from "@/components/ui/ModernSectionWrapper";
import Container from "@/components/ui/Container";
import '@/styles/AboutDesign.css';

const About = () => {
  const { t } = useTranslation();

  const coreValues = [
    {
      title: "Innovation Contextuelle",
      description: "Nous adaptons la technologie (Web3, IA, Agrotech) pour répondre aux défis spécifiques de notre communauté et de notre environnement.",
      icon: "🌱",
      color: "#FF6B35"
    },
    {
      title: "Intégrité Technologique",
      description: "À travers nos opérations de validateurs (Cardano, Apex, Safro), nous prônons la transparence, la sécurité et la décentralisation comme gages de confiance.",
      icon: "🔐",
      color: "#E74C3C"
    },
    {
      title: "Durabilité Régénératrice",
      description: "Qu'il s'agisse de lignes de code ou de semences maraîchères, chaque projet doit laisser une empreinte positive et durable sur l'environnement de la RDC.",
      icon: "🌍",
      color: "#F39C12"
    },
    {
      title: "Empowerment Communautaire",
      description: "Le savoir ne vaut que s'il est partagé. Notre succès se mesure à la réussite des jeunes que nous formons et à la croissance des projets que nous incubons.",
      icon: "🤝",
      color: "#FF6B35"
    }
  ];

  const objectives = [
    {
      title: "Onboarding & Éducation Web3",
      description: "Initier et certifier au moins 500 jeunes par an aux technologies de la Blockchain et du Web3, en leur fournissant les compétences techniques nécessaires.",
      icon: "🎓"
    },
    {
      title: "Innovation Environnementale",
      description: "Digitaliser la reforestation à travers le projet Mtidano, en utilisant les NFTs pour tracer, financer et garantir la survie d'arbres plantés.",
      icon: "🌳"
    },
    {
      title: "Pionnier du Développement Durable",
      description: "Développer des fermes pilotes utilisant des méthodes d'agriculture durable et maraîchère pour accroître la production locale.",
      icon: "🚜"
    },
    {
      title: "Infrastructure & Décentralisation",
      description: "Opérer des nœuds validateurs robustes sur les réseaux Cardano, Apex Fusion et Safrochain pour la gouvernance blockchain.",
      icon: "⚡"
    }
  ];

  const team = [
    { 
      name: "Jacques Masuruku", 
      role: "Founder & CEO", 
      bio: "Visionnaire blockchain avec 5+ ans d'expérience en Web3 et développement durable. Passionné par l'innovation technologique au service de l'Afrique.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face"
    },
    { 
      name: "Sarah Mutesa", 
      role: "Head of Education", 
      bio: "Éducatrice passionnée par l'accessibilité blockchain pour tous les publics. Spécialiste en pédagogie numérique et inclusion technologique.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face"
    },
    { 
      name: "Jean-Pierre Bakole", 
      role: "Community Lead", 
      bio: "Créateur de ponts entre communautés locales et écosystèmes Web3 globaux. Expert en engagement communautaire et développement de réseaux.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face"
    },
    { 
      name: "Grace Lukoo", 
      role: "Tech Lead", 
      bio: "Développeuse full-stack spécialisée en smart contracts et solutions décentralisées. Passionnée par la blockchain et l'innovation sociale.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face"
    },
    { 
      name: "Michel Kavota", 
      role: "Operations Manager", 
      bio: "Expert en gestion de projets et opérations. Veille à l'excellence opérationnelle et à l'efficacité des processus internes.",
      image: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=300&h=300&fit=crop&crop=face"
    },
    { 
      name: "Aline Mbayo", 
      role: "Marketing Lead", 
      bio: "Stratège en marketing digital et communication. Spécialisée dans la promotion de technologies innovantes et l'engagement des parties prenantes.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop&crop=face"
    }
  ];

  return (
    <div className="min-h-screen" style={{ background: 'var(--dark-bg)' }}>
      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="animate-fade-in-up"
          >
            <div className="hero-badge">
              <Star className="w-4 h-4" />
              <span>Centre d'Innovation Hybride</span>
            </div>
            
            <h1 className="hero-title">
              À Propos d'<span style={{ color: 'var(--accent-orange)' }}>UJUZI Labs</span>
            </h1>
            
            <p className="hero-subtitle">
              Le centre d'innovation hybride pour le développement de la RD Congo, 
              transformant le potentiel de la jeunesse en impact réel à travers la blockchain 
              et l'agriculture durable.
            </p>
            
            <div className="hero-buttons">
              <a href="/community" className="btn-primary">
                <Zap className="w-5 h-5" />
                Rejoindre la communauté
                <ArrowRight className="w-5 h-5" />
              </a>
              
              <a href="/events" className="btn-secondary">
                <Calendar className="w-5 h-5" />
                Voir les événements
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="about-section">
        <Container size="lg">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="section-header"
          >
            <h2 className="section-title">
              Notre <span style={{ color: 'var(--accent-orange)' }}>Mission</span>
            </h2>
            <p className="section-subtitle">
              Transformer le potentiel de la jeunesse de Goma en impact réel par l'innovation hybride. 
              Nous nous donnons pour mission d'éduquer, d'accompagner et d'outiller les talents locaux 
              aux technologies de la <span style={{ color: 'var(--accent-orange)' }}>Blockchain</span> et aux pratiques de 
              l'<span style={{ color: 'var(--accent-orange)' }}>agriculture durable</span>.
            </p>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="content-card"
          >
            <h3 style={{ 
              fontSize: '28px', 
              fontWeight: '600', 
              color: 'var(--light-primary)', 
              marginBottom: '20px',
              fontFamily: 'var(--font-heading)'
            }}>
              Notre <span style={{ color: 'var(--accent-orange)' }}>Vision</span>
            </h3>
            <p style={{ 
              fontSize: '18px', 
              lineHeight: '1.7', 
              color: 'var(--light-secondary)',
              fontFamily: 'var(--font-body)'
            }}>
              Faire de la RDC le premier épicentre africain de la <span style={{ color: 'var(--accent-orange)' }}>"Blockchain for Good"</span>. 
              Nous aspirons à un avenir où la technologie Web3 n'est plus une abstraction, 
              mais un levier puissant pour régénérer nos écosystèmes (via <span style={{ color: 'var(--accent-orange)' }}>Mtidano NFTree</span>) 
              et sécuriser notre souveraineté alimentaire. Nous voyons Goma Hub comme le moteur 
              d'une économie décentralisée, verte et prospère en Afrique Centrale.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Core Values Section */}
      <section className="about-section-light">
        <Container size="lg">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="section-header"
          >
            <h2 className="section-title">
              Nos <span style={{ color: 'var(--accent-orange)' }}>Piliers Fondamentaux</span>
            </h2>
            <p className="section-subtitle">
              Nos actions sont guidées par quatre piliers indissociables qui définissent notre identité et notre approche.
            </p>
          </motion.div>

          <div className="values-grid">
            {coreValues.map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 * i }}
                viewport={{ once: true }}
                className="value-card"
              >
                <span className="value-icon" style={{ color: value.color }}>
                  {value.icon}
                </span>
                <h3 className="value-title">{value.title}</h3>
                <p className="value-description">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Objectives Section */}
      <section className="about-section">
        <Container size="lg">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="section-header"
          >
            <h2 className="section-title">
              Objectif <span style={{ color: 'var(--accent-orange)' }}>Principal</span>
            </h2>
            <p className="section-subtitle">
              Propulser la RDC comme le premier pôle d'innovation hybride en Afrique Centrale, 
              en formant une nouvelle génération de leaders capables de transformer l'économie numérique 
              (Web3/Blockchain) et la résilience écologique (Agriculture Durable).
            </p>
          </motion.div>

          <div className="objectives-grid">
            {objectives.map((objective, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 * i }}
                viewport={{ once: true }}
                className="objective-card"
              >
                <div className="objective-icon">{objective.icon}</div>
                <h4 className="objective-title">{objective.title}</h4>
                <p className="objective-description">{objective.description}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Team Section */}
      <section className="team-section" id="team">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="section-header"
          >
            <h2 className="section-title">
              Notre <span style={{ color: 'var(--accent-orange)' }}>Équipe</span>
            </h2>
            <p className="section-subtitle">
              Rencontrez les talents passionnés qui font battre le cœur d'UJUZI Labs 
              et transforment notre vision en réalité.
            </p>
          </motion.div>

          <div className="team-grid">
            {team.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 * i }}
                viewport={{ once: true }}
                className="team-card"
              >
                <div className="team-avatar">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    loading="lazy"
                  />
                </div>
                <h3 className="team-name">{member.name}</h3>
                <p className="team-role">{member.role}</p>
                <p className="team-bio">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Call to Action */}
      <section className="about-section-light">
        <Container size="md">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="content-card text-center"
            style={{ 
              background: 'linear-gradient(135deg, var(--accent-orange), var(--accent-red))',
              border: 'none'
            }}
          >
            <h3 style={{ 
              fontSize: '32px', 
              fontWeight: '700', 
              color: 'var(--light-primary)', 
              marginBottom: '16px',
              fontFamily: 'var(--font-heading)'
            }}>
              Rejoignez Notre Mission
            </h3>
            <p style={{ 
              fontSize: '18px', 
              lineHeight: '1.6', 
              color: 'rgba(255, 255, 255, 0.9)',
              marginBottom: '32px',
              fontFamily: 'var(--font-body)',
              maxWidth: '600px',
              margin: '0 auto 32px'
            }}>
              Ensemble, transformons la RD Congo en un pôle d'innovation blockchain 
              et de développement durable. Votre contribution fait la différence.
            </p>
            <div style={{ 
              display: 'flex', 
              gap: '24px', 
              justifyContent: 'center',
              flexWrap: 'wrap'
            }}>
              <a href="/contact" className="btn-primary" style={{ 
                background: 'var(--light-primary)', 
                color: 'var(--accent-orange)' 
              }}>
                <Heart className="w-5 h-5" />
                Nous Contacter
              </a>
              <a href="/community" className="btn-secondary" style={{ 
                borderColor: 'var(--light-primary)', 
                color: 'var(--light-primary)' 
              }}>
                <Users className="w-5 h-5" />
                Rejoindre la communauté
              </a>
            </div>
          </motion.div>
        </Container>
      </section>
    </div>
  );
};

export default About;
