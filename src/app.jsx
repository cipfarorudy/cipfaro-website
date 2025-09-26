import React, { useState, useEffect } from "react";

const App = () => {
  const [activeSection, setActiveSection] = useState('accueil');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  const formations = [
    {
      id: 1,
      title: "Conseiller en Insertion Professionnelle (CIP)",
      category: "Insertion Pro",
      duration: "6 mois",
      level: "Certifiant",
      description: "Titre professionnel reconnu visant à former des accompagnateurs dans le domaine de l'insertion professionnelle et sociale.",
      icon: "🎯"
    },
    {
      id: 2,
      title: "Formateur Professionnel d'Adultes (FPA)",
      category: "Pédagogie",
      duration: "4 mois",
      level: "Certifiant",
      description: "Formation complète à la pédagogie, l'ingénierie de formation et l'animation de groupes d'adultes.",
      icon: "🎓"
    },
    {
      id: 3,
      title: "Sauveteur Secouriste du Travail (SST)",
      category: "Sécurité",
      duration: "2 jours",
      level: "Certification",
      description: "Formation aux gestes de premiers secours et à la prévention des risques professionnels.",
      icon: "⛑️"
    },
    {
      id: 4,
      title: "Bureautique et Numérique",
      category: "Compétences",
      duration: "8 semaines",
      level: "Perfectionnement",
      description: "Maîtrise des outils Microsoft Office, cybersécurité et usage des outils collaboratifs numériques.",
      icon: "💻"
    }
  ];

  const testimonials = [
    {
      name: "Marie Dupont",
      role: "Ancienne stagiaire CIP",
      content: "La formation m'a permis de trouver un emploi dans un service d'insertion en moins de 3 mois après l'obtention de mon titre. Un accompagnement humain et professionnel exceptionnel !",
      image: "https://placehold.co/80x80/3b82f6/ffffff?text=MD"
    },
    {
      name: "Jean Martin",
      role: "Formateur FPA",
      content: "Le centre m'a offert les compétences nécessaires pour devenir formateur. Le programme est complet et parfaitement adapté aux réalités du terrain.",
      image: "https://placehold.co/80x80/10b981/ffffff?text=JM"
    },
    {
      name: "Sophie Laurent",
      role: "Responsable RH",
      content: "Nous recrutons régulièrement des diplômés de CIP FARO. Leur niveau de compétence et leur engagement sont remarquables.",
      image: "https://placehold.co/80x80/f59e0b/ffffff?text=SL"
    }
  ];

  const upcomingSessions = [
    { id: 1, formation: "CIP", date: "15 Septembre 2024", places: 12 },
    { id: 2, formation: "FPA", date: "02 Octobre 2024", places: 8 },
    { id: 3, formation: "SST", date: "20 Septembre 2024", places: 15 },
    { id: 4, formation: "Bureautique", date: "05 Octobre 2024", places: 10 }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonialIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-green-500 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">CF</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">CIP FARO</h1>
                <p className="text-sm text-gray-600">Centre de Formation</p>
              </div>
            </div>

            <nav className="hidden md:flex space-x-8">
              {['accueil', 'formations', 'temoignages', 'agenda', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize font-medium transition-colors duration-200 ${
                    activeSection === item
                      ? 'text-blue-600 border-b-2 border-blue-600'
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  {item === 'accueil' ? 'Accueil' : 
                   item === 'formations' ? 'Formations' :
                   item === 'temoignages' ? 'Témoignages' :
                   item === 'agenda' ? 'Agenda' : 'Contact'}
                </button>
              ))}
            </nav>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-gray-100"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden bg-white border-t border-gray-200 py-4">
              {['accueil', 'formations', 'temoignages', 'agenda', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 capitalize"
                >
                  {item === 'accueil' ? 'Accueil' : 
                   item === 'formations' ? 'Formations' :
                   item === 'temoignages' ? 'Témoignages' :
                   item === 'agenda' ? 'Agenda' : 'Contact'}
                </button>
              ))}
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="accueil" className="bg-gradient-to-br from-blue-50 via-white to-green-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  Votre avenir commence ici
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Centre de formation aux Abymes, Guadeloupe, dédié à votre <span className="text-blue-600 font-semibold">montée en compétences</span> et à votre <span className="text-green-600 font-semibold">insertion professionnelle</span>.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => scrollToSection('formations')}
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Découvrir nos formations
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-200"
                >
                  Nous contacter
                </button>
              </div>

              <div className="grid grid-cols-3 gap-8 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">15+</div>
                  <div className="text-sm text-gray-600">Années d'expérience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">500+</div>
                  <div className="text-sm text-gray-600">Stagiaires formés</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600">95%</div>
                  <div className="text-sm text-gray-600">De réussite</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                <img
                  src="https://placehold.co/600x400/3b82f6/ffffff?text=Pr%C3%A9sentation+CIP+FARO"
                  alt="Présentation du centre CIP FARO"
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                  <button className="bg-white bg-opacity-20 backdrop-blur-sm rounded-full p-4 hover:bg-opacity-30 transition-all duration-200">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Formations Section */}
      <section id="formations" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Nos Formations Certifiantes
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des parcours professionnalisants conçus pour vous accompagner vers l'emploi et le développement de vos compétences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {formations.map((formation) => (
              <div
                key={formation.id}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="p-6">
                  <div className="text-4xl mb-4">{formation.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{formation.title}</h3>
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full font-medium">
                      {formation.category}
                    </span>
                    <span className="text-sm text-gray-500">{formation.duration}</span>
                  </div>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {formation.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full font-medium">
                      {formation.level}
                    </span>
                    <button className="text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors duration-200">
                      En savoir +
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-gradient-to-r from-blue-600 to-green-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-green-600 transition-all duration-200 shadow-lg">
              Télécharger le catalogue
            </button>
          </div>
        </div>
      </section>

      {/* Témoignages Section */}
      <section id="temoignages" className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Ils ont réussi grâce à nous
            </h2>
            <p className="text-xl text-gray-600">
              Découvrez les témoignages inspirants de nos anciens stagiaires
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 relative overflow-hidden">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <img
                    src={testimonials[currentTestimonialIndex].image}
                    alt={testimonials[currentTestimonialIndex].name}
                    className="w-20 h-20 rounded-full object-cover ring-4 ring-blue-100"
                  />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <blockquote className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6 italic">
                    "{testimonials[currentTestimonialIndex].content}"
                  </blockquote>
                  <div>
                    <div className="font-semibold text-gray-900 text-lg">
                      {testimonials[currentTestimonialIndex].name}
                    </div>
                    <div className="text-blue-600 font-medium">
                      {testimonials[currentTestimonialIndex].role}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-center space-x-2 mt-8">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonialIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-200 ${
                      index === currentTestimonialIndex ? 'bg-blue-600' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Agenda Section */}
      <section id="agenda" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Prochaines Sessions
            </h2>
            <p className="text-xl text-gray-600">
              Inscrivez-vous dès maintenant pour les prochaines sessions de formation
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Formation</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Date de début</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Places disponibles</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {upcomingSessions.map((session) => (
                    <tr key={session.id} className="hover:bg-gray-50 transition-colors duration-150">
                      <td className="px-6 py-4">
                        <div className="font-medium text-gray-900">{session.formation}</div>
                      </td>
                      <td className="px-6 py-4 text-gray-600">{session.date}</td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                          session.places > 10 ? 'bg-green-100 text-green-800' :
                          session.places > 5 ? 'bg-yellow-100 text-yellow-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          {session.places} places
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors duration-200">
                          S'inscrire
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="text-center mt-12">
            <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-200">
              Voir tout l'agenda
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-blue-600 to-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                  Contactez-nous
                </h2>
                <p className="text-xl text-blue-100">
                  Une question ? Besoin d'informations ? Notre équipe est à votre écoute.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-white bg-opacity-20 p-3 rounded-lg">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Adresse</h3>
                    <p className="text-blue-100">Zone Industrielle Jarry, Les Abymes, Guadeloupe</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-white bg-opacity-20 p-3 rounded-lg">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Téléphone</h3>
                    <p className="text-blue-100">+590 590 00 00 00</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-white bg-opacity-20 p-3 rounded-lg">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Email</h3>
                    <p className="text-blue-100">contact@cipfaro.gp</p>
                  </div>
                </div>
              </div>

              <div className="flex space-x-4 pt-6">
                <a
                  href="https://wa.me/590590000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors duration-200 flex items-center space-x-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-2.108 7.372c-1.673 0-3.028-.149-3.028-.149-.669-.075-1.337-.324-1.882-.67-.712-.458-1.262-1.213-1.262-2.143 0-2.207.957-4.719 1.336-5.298.149-.224.347-.521.57-.793.224-.273.446-.372.67-.372.124 0 .272.024.42.074.149.05.938.446 1.236.594.305.149.503.223.702.223.198 0 .371-.074.57-.223.198-.148.768-.94 1.213-1.264.446-.323 1.016-.521 1.586-.521.57 0 1.337.173 1.836.272.499.1 1.881.768 1.881 1.972 0 1.204-1.737 2.383-1.935 2.507-.198.124-1.436.807-1.635.882-.198.075-.346.112-.57.112-.223 0-.916-.137-1.361-.424"/>
                  </svg>
                  <span>WhatsApp</span>
                </a>
                <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200">
                  Formulaire
                </button>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Formulaire d'inscription</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Prénom
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Votre prénom"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nom
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Votre nom"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="votre@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="+590 XX XX XX XX"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Formation souhaitée
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option>Sélectionnez une formation</option>
                    {formations.map((f) => (
                      <option key={f.id} value={f.title}>{f.title}</option>
                    ))}
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 shadow-lg"
                >
                  Envoyer ma demande
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-green-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">CF</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold">CIP FARO</h3>
                  <p className="text-blue-200">Centre de Formation</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed mb-4">
                Votre partenaire de confiance pour l'insertion professionnelle et le développement de vos compétences en Guadeloupe.
              </p>
              <div className="flex space-x-4">
                <div className="bg-blue-600 p-2 rounded-lg">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.195-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </div>
                <div className="bg-blue-700 p-2 rounded-lg">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Formations</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors duration-200">CIP</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">FPA</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">SST</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">Bureautique</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-300">
                <li>+590 590 00 00 00</li>
                <li>contact@cipfaro.gp</li>
                <li>Les Abymes, Guadeloupe</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 CIP FARO. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;