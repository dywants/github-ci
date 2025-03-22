import { Head, Link } from '@inertiajs/react';
import { useState } from 'react';

export default function Welcome({ auth }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            <Head title="Entreprise | Site Vitrine" />
            <div className="bg-white text-gray-800 min-h-screen">
                {/* Navigation */}
                <nav className="fixed top-0 w-full bg-white shadow-md z-50 py-4">
                    <div className="container mx-auto px-4 md:px-6 lg:px-8 flex justify-between items-center">
                        <div className="flex items-center">
                            <span className="text-blue-600 text-2xl font-bold">LOGO</span>
                        </div>
                        
                        {/* Desktop navigation */}
                        <div className="hidden md:flex space-x-8">
                            <a href="#hero" className="text-gray-800 hover:text-blue-600 transition-colors">Accueil</a>
                            <a href="#services" className="text-gray-800 hover:text-blue-600 transition-colors">Services</a>
                            <a href="#about" className="text-gray-800 hover:text-blue-600 transition-colors">À propos</a>
                            <a href="#portfolio" className="text-gray-800 hover:text-blue-600 transition-colors">Portfolio</a>
                            <a href="#testimonials" className="text-gray-800 hover:text-blue-600 transition-colors">Témoignages</a>
                            <a href="#contact" className="text-gray-800 hover:text-blue-600 transition-colors">Contact</a>
                        </div>
                        
                        {/* Login/Register */}
                        <div className="hidden md:flex items-center space-x-4">
                            {auth.user ? (
                                <Link
                                    href={route('dashboard')}
                                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                                >
                                    Dashboard
                                </Link>
                            ) : (
                                <>
                                    <Link
                                        href={route('login')}
                                        className="text-gray-800 hover:text-blue-600 transition-colors"
                                    >
                                        Connexion
                                    </Link>
                                    <Link
                                        href={route('register')}
                                        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                                    >
                                        Inscription
                                    </Link>
                                </>
                            )}
                        </div>
                        
                        {/* Mobile menu button */}
                        <div className="md:hidden">
                            <button 
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="text-gray-500 hover:text-blue-600 focus:outline-none"
                            >
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    {isMenuOpen ? (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    ) : (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                    )}
                                </svg>
                            </button>
                        </div>
                    </div>
                    
                    {/* Mobile Navigation */}
                    {isMenuOpen && (
                        <div className="md:hidden bg-white py-4 px-4">
                            <div className="flex flex-col space-y-4">
                                <a href="#hero" className="text-gray-800 hover:text-blue-600 transition-colors">Accueil</a>
                                <a href="#services" className="text-gray-800 hover:text-blue-600 transition-colors">Services</a>
                                <a href="#about" className="text-gray-800 hover:text-blue-600 transition-colors">À propos</a>
                                <a href="#portfolio" className="text-gray-800 hover:text-blue-600 transition-colors">Portfolio</a>
                                <a href="#testimonials" className="text-gray-800 hover:text-blue-600 transition-colors">Témoignages</a>
                                <a href="#contact" className="text-gray-800 hover:text-blue-600 transition-colors">Contact</a>
                                
                                {auth.user ? (
                                    <Link
                                        href={route('dashboard')}
                                        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors inline-block"
                                    >
                                        Dashboard
                                    </Link>
                                ) : (
                                    <div className="flex flex-col space-y-2">
                                        <Link
                                            href={route('login')}
                                            className="text-gray-800 hover:text-blue-600 transition-colors"
                                        >
                                            Connexion
                                        </Link>
                                        <Link
                                            href={route('register')}
                                            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors inline-block"
                                        >
                                            Inscription
                                        </Link>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                </nav>
                
                <main>
                    {/* Hero Section */}
                    <section id="hero" className="pt-32 pb-20 bg-gradient-to-r from-blue-50 to-indigo-50">
                        <div className="container mx-auto px-4 md:px-6 lg:px-8">
                            <div className="flex flex-col lg:flex-row items-center">
                                <div className="lg:w-1/2 lg:pr-10 mb-10 lg:mb-0">
                                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                                        Solutions Innovantes pour votre Entreprise
                                    </h1>
                                    <p className="text-xl text-gray-600 mb-8">
                                        Nous créons des solutions digitales sur mesure pour propulser votre entreprise vers le succès dans un monde en constante évolution.                                     
                                    </p>
                                    <div className="flex flex-col sm:flex-row gap-4">
                                        <a href="#contact" className="px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors inline-block text-center">
                                            Demander un devis
                                        </a>
                                        <a href="#services" className="px-6 py-3 bg-white text-blue-600 font-medium rounded-md border border-blue-600 hover:bg-blue-50 transition-colors inline-block text-center">
                                            Nos services
                                        </a>
                                    </div>
                                </div>
                                <div className="lg:w-1/2">
                                    <img 
                                        src="https://images.unsplash.com/photo-1587614382346-4ec70e388b28?q=80&w=1000" 
                                        alt="Business team" 
                                        className="rounded-lg shadow-xl w-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </section>
                    
                    {/* Clients/Partners Section */}
                    <section className="py-10 bg-gray-50">
                        <div className="container mx-auto px-4 md:px-6 lg:px-8">
                            <div className="text-center mb-10">
                                <p className="text-gray-600 font-medium">Ils nous font confiance</p>
                            </div>
                            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70">
                                {/* Placeholder logos - Replace with actual client logos */}
                                <div className="w-32 h-12 flex items-center justify-center">
                                    <span className="text-2xl font-bold text-gray-400">Client 1</span>
                                </div>
                                <div className="w-32 h-12 flex items-center justify-center">
                                    <span className="text-2xl font-bold text-gray-400">Client 2</span>
                                </div>
                                <div className="w-32 h-12 flex items-center justify-center">
                                    <span className="text-2xl font-bold text-gray-400">Client 3</span>
                                </div>
                                <div className="w-32 h-12 flex items-center justify-center">
                                    <span className="text-2xl font-bold text-gray-400">Client 4</span>
                                </div>
                                <div className="w-32 h-12 flex items-center justify-center">
                                    <span className="text-2xl font-bold text-gray-400">Client 5</span>
                                </div>
                            </div>
                        </div>
                    </section>
                    
                    {/* Services Section */}
                    <section id="services" className="py-20">
                        <div className="container mx-auto px-4 md:px-6 lg:px-8">
                            <div className="text-center mb-16">
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nos Services</h2>
                                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                    Nous proposons une gamme complète de services digitaux pour répondre à vos besoins spécifiques
                                </p>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {/* Service 1 */}
                                <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                                    <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                                        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Développement Web</h3>
                                    <p className="text-gray-600">
                                        Création de sites web et d'applications sur mesure avec les technologies les plus modernes et performantes.
                                    </p>
                                </div>
                                
                                {/* Service 2 */}
                                <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                                    <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                                        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Applications Mobiles</h3>
                                    <p className="text-gray-600">
                                        Développement d'applications mobiles natives et cross-platform pour iOS et Android.
                                    </p>
                                </div>
                                
                                {/* Service 3 */}
                                <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                                    <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                                        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Design UX/UI</h3>
                                    <p className="text-gray-600">
                                        Création d'interfaces utilisateurs modernes, intuitives et esthétiques pour une expérience utilisateur optimale.
                                    </p>
                                </div>
                                
                                {/* Service 4 */}
                                <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                                    <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                                        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Cloud & DevOps</h3>
                                    <p className="text-gray-600">
                                        Déploiement et maintenance d'applications dans le cloud avec des pratiques DevOps modernes.
                                    </p>
                                </div>
                                
                                {/* Service 5 */}
                                <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                                    <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                                        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Marketing Digital</h3>
                                    <p className="text-gray-600">
                                        Stratégies de marketing digital pour accroître votre visibilité en ligne et attirer plus de clients.
                                    </p>
                                </div>
                                
                                {/* Service 6 */}
                                <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                                    <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                                        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Cybersécurité</h3>
                                    <p className="text-gray-600">
                                        Protection de vos systèmes et données contre les menaces informatiques modernes.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                    
                    {/* About Section */}
                    <section id="about" className="py-20 bg-gray-50">
                        <div className="container mx-auto px-4 md:px-6 lg:px-8">
                            <div className="flex flex-col lg:flex-row items-center gap-12">
                                <div className="lg:w-1/2">
                                    <img 
                                        src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1000" 
                                        alt="Notre équipe" 
                                        className="rounded-lg shadow-xl w-full object-cover"
                                    />
                                </div>
                                <div className="lg:w-1/2">
                                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                        À propos de nous
                                    </h2>
                                    <p className="text-lg text-gray-600 mb-6">
                                        Nous sommes une équipe passionnée de développeurs, designers et experts en marketing digital qui travaillent ensemble pour créer des solutions digitales innovantes et sur mesure.                                   
                                    </p>
                                    <p className="text-lg text-gray-600 mb-6">
                                        Depuis notre création, nous avons accompagné des dizaines d'entreprises dans leur transformation digitale et les avons aidées à atteindre leurs objectifs commerciaux grâce à des solutions technologiques adaptées.
                                    </p>
                                    <div className="grid grid-cols-2 gap-6 mt-8">
                                        <div>
                                            <p className="text-4xl font-bold text-blue-600">10+</p>
                                            <p className="text-gray-600">Années d'expérience</p>
                                        </div>
                                        <div>
                                            <p className="text-4xl font-bold text-blue-600">250+</p>
                                            <p className="text-gray-600">Projets réalisés</p>
                                        </div>
                                        <div>
                                            <p className="text-4xl font-bold text-blue-600">50+</p>
                                            <p className="text-gray-600">Experts</p>
                                        </div>
                                        <div>
                                            <p className="text-4xl font-bold text-blue-600">98%</p>
                                            <p className="text-gray-600">Clients satisfaits</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    
                    {/* Portfolio Section */}
                    <section id="portfolio" className="py-20">
                        <div className="container mx-auto px-4 md:px-6 lg:px-8">
                            <div className="text-center mb-16">
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Notre Portfolio</h2>
                                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                    Découvrez nos réalisations récentes et les projets dont nous sommes fiers
                                </p>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {/* Project 1 */}
                                <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                                    <div className="relative h-64 overflow-hidden">
                                        <img 
                                            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000" 
                                            alt="Projet e-commerce" 
                                            className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-110"
                                        />
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Plateforme E-commerce</h3>
                                        <p className="text-gray-600 mb-4">
                                            Développement d'une plateforme de commerce en ligne complète avec système de paiement sécurisé.
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            <span className="px-3 py-1 bg-blue-100 text-blue-600 text-sm font-medium rounded-full">Laravel</span>
                                            <span className="px-3 py-1 bg-blue-100 text-blue-600 text-sm font-medium rounded-full">Vue.js</span>
                                            <span className="px-3 py-1 bg-blue-100 text-blue-600 text-sm font-medium rounded-full">Stripe</span>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Project 2 */}
                                <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                                    <div className="relative h-64 overflow-hidden">
                                        <img 
                                            src="https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?q=80&w=1000" 
                                            alt="Application mobile" 
                                            className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-110"
                                        />
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Application Mobile de Livraison</h3>
                                        <p className="text-gray-600 mb-4">
                                            Application mobile permettant de suivre la livraison de colis en temps réel.
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            <span className="px-3 py-1 bg-blue-100 text-blue-600 text-sm font-medium rounded-full">React Native</span>
                                            <span className="px-3 py-1 bg-blue-100 text-blue-600 text-sm font-medium rounded-full">Node.js</span>
                                            <span className="px-3 py-1 bg-blue-100 text-blue-600 text-sm font-medium rounded-full">MongoDB</span>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Project 3 */}
                                <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                                    <div className="relative h-64 overflow-hidden">
                                        <img 
                                            src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=1000" 
                                            alt="Plateforme SaaS" 
                                            className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-110"
                                        />
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Plateforme SaaS de Gestion</h3>
                                        <p className="text-gray-600 mb-4">
                                            Solution complète de gestion de projets et de ressources pour les PME.
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            <span className="px-3 py-1 bg-blue-100 text-blue-600 text-sm font-medium rounded-full">Laravel</span>
                                            <span className="px-3 py-1 bg-blue-100 text-blue-600 text-sm font-medium rounded-full">React</span>
                                            <span className="px-3 py-1 bg-blue-100 text-blue-600 text-sm font-medium rounded-full">MySQL</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="text-center mt-12">
                                <a href="#contact" className="px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors inline-block">
                                    Discuter de votre projet
                                </a>
                            </div>
                        </div>
                    </section>
                    {/* Testimonials Section */}
                    <section id="testimonials" className="py-20">
                        <div className="container mx-auto px-4 md:px-6 lg:px-8">
                            <div className="text-center mb-16">
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Ce que disent nos clients</h2>
                                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                    Découvrez les témoignages de nos clients satisfaits
                                </p>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {/* Testimonial 1 */}
                                <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                                    <div className="flex items-center mb-6">
                                        <div className="w-14 h-14 rounded-full overflow-hidden mr-4">
                                            <img 
                                                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000" 
                                                alt="Client 1" 
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-semibold text-gray-900">Thomas Dubois</h4>
                                            <p className="text-gray-600">CEO, Company One</p>
                                        </div>
                                    </div>
                                    <p className="text-gray-600 italic">
                                        "Travailler avec cette équipe a été une expérience incroyable. Ils ont su comprendre nos besoins et délivrer une solution qui a dépassé nos attentes."
                                    </p>
                                    <div className="flex mt-4">
                                        <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                        <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                        <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                        <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                        <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                    </div>
                                </div>
                                
                                {/* Testimonial 2 */}
                                <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                                    <div className="flex items-center mb-6">
                                        <div className="w-14 h-14 rounded-full overflow-hidden mr-4">
                                            <img 
                                                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1000" 
                                                alt="Client 2" 
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-semibold text-gray-900">Sophie Martin</h4>
                                            <p className="text-gray-600">Marketing Director, Company Two</p>
                                        </div>
                                    </div>
                                    <p className="text-gray-600 italic">
                                        "La réactivité et le professionnalisme de l'équipe ont été impressionnants. Notre site e-commerce a vu ses ventes augmenter de 40% en seulement trois mois après le lancement."
                                    </p>
                                    <div className="flex mt-4">
                                        <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                        <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                        <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                        <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                        <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                    </div>
                                </div>
                                
                                {/* Testimonial 3 */}
                                <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                                    <div className="flex items-center mb-6">
                                        <div className="w-14 h-14 rounded-full overflow-hidden mr-4">
                                            <img 
                                                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1000" 
                                                alt="Client 3" 
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-semibold text-gray-900">Pierre Lemaire</h4>
                                            <p className="text-gray-600">CTO, Company Three</p>
                                        </div>
                                    </div>
                                    <p className="text-gray-600 italic">
                                        "L'application mobile développée est devenue un élément essentiel de notre stratégie. La qualité du code et l'expérience utilisateur sont exceptionnelles."
                                    </p>
                                    <div className="flex mt-4">
                                        <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                        <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                        <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                        <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                        <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>idden"
                                            onError={handleImageError}
                                        />
                                        <img
                                            src="https://laravel.com/assets/img/welcome/docs-dark.svg"
                                            alt="Laravel documentation screenshot"
                                            className="hidden aspect-video h-full w-full flex-1 rounded-[10px] object-cover object-top drop-shadow-[0px_4px_34px_rgba(0,0,0,0.25)] dark:block"
                                        />
                                        <div className="absolute -bottom-16 -left-16 h-40 w-[calc(100%+8rem)] bg-gradient-to-b from-transparent via-white to-white dark:via-zinc-900 dark:to-zinc-900"></div>
                                    </div>

                                    <div className="relative flex items-center gap-6 lg:items-end">
                                        <div
                                            id="docs-card-content"
                                            className="flex items-start gap-6 lg:flex-col"
                                        >
                                            <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[#FF2D20]/10 sm:size-16">
                                                <svg
                                                    className="size-5 sm:size-6"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        fill="#FF2D20"
                                                        d="M23 4a1 1 0 0 0-1.447-.894L12.224 7.77a.5.5 0 0 1-.448 0L2.447 3.106A1 1 0 0 0 1 4v13.382a1.99 1.99 0 0 0 1.105 1.79l9.448 4.728c.14.065.293.1.447.1.154-.005.306-.04.447-.105l9.453-4.724a1.99 1.99 0 0 0 1.1-1.789V4ZM3 6.023a.25.25 0 0 1 .362-.223l7.5 3.75a.251.251 0 0 1 .138.223v11.2a.25.25 0 0 1-.362.224l-7.5-3.75a.25.25 0 0 1-.138-.22V6.023Zm18 11.2a.25.25 0 0 1-.138.224l-7.5 3.75a.249.249 0 0 1-.329-.099.249.249 0 0 1-.033-.12V9.772a.251.251 0 0 1 .138-.224l7.5-3.75a.25.25 0 0 1 .362.224v11.2Z"
                                                    />
                                                    <path
                                                        fill="#FF2D20"
                                                        d="m3.55 1.893 8 4.048a1.008 1.008 0 0 0 .9 0l8-4.048a1 1 0 0 0-.9-1.785l-7.322 3.706a.506.506 0 0 1-.452 0L4.454.108a1 1 0 0 0-.9 1.785H3.55Z"
                                                    />
                                                </svg>
                                            </div>

                                            <div className="pt-3 sm:pt-5 lg:pt-0">
                                                <h2 className="text-xl font-semibold text-black dark:text-white">
                                                    Documentation
                                                </h2>

                                                <p className="mt-4 text-sm/relaxed">
                                                    Laravel has wonderful
                                                    documentation covering every
                                                    aspect of the framework.
                                                    Whether you are a newcomer
                                                    or have prior experience
                                                    with Laravel, we recommend
                                                    reading our documentation
                                                    from beginning to end.
                                                </p>
                                            </div>
                                        </div>

                                        <svg
                                            className="size-6 shrink-0 stroke-[#FF2D20]"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                                            />
                                        </svg>
                                    </div>
                                </a>

                                <a
                                    href="https://laracasts.com"
                                    className="flex items-start gap-4 rounded-lg bg-white p-6 shadow-[0px_14px_34px_0px_rgba(0,0,0,0.08)] ring-1 ring-white/[0.05] transition duration-300 hover:text-black/70 hover:ring-black/20 focus:outline-none focus-visible:ring-[#FF2D20] lg:pb-10 dark:bg-zinc-900 dark:ring-zinc-800 dark:hover:text-white/70 dark:hover:ring-zinc-700 dark:focus-visible:ring-[#FF2D20]"
                                >
                                    <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[#FF2D20]/10 sm:size-16">
                                        <svg
                                            className="size-5 sm:size-6"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                        >
                                            <g fill="#FF2D20">
                                                <path d="M24 8.25a.5.5 0 0 0-.5-.5H.5a.5.5 0 0 0-.5.5v12a2.5 2.5 0 0 0 2.5 2.5h19a2.5 2.5 0 0 0 2.5-2.5v-12Zm-7.765 5.868a1.221 1.221 0 0 1 0 2.264l-6.626 2.776A1.153 1.153 0 0 1 8 18.123v-5.746a1.151 1.151 0 0 1 1.609-1.035l6.626 2.776ZM19.564 1.677a.25.25 0 0 0-.177-.427H15.6a.106.106 0 0 0-.072.03l-4.54 4.543a.25.25 0 0 0 .177.427h3.783c.027 0 .054-.01.073-.03l4.543-4.543ZM22.071 1.318a.047.047 0 0 0-.045.013l-4.492 4.492a.249.249 0 0 0 .038.385.25.25 0 0 0 .14.042h5.784a.5.5 0 0 0 .5-.5v-2a2.5 2.5 0 0 0-1.925-2.432ZM13.014 1.677a.25.25 0 0 0-.178-.427H9.101a.106.106 0 0 0-.073.03l-4.54 4.543a.25.25 0 0 0 .177.427H8.4a.106.106 0 0 0 .073-.03l4.54-4.543ZM6.513 1.677a.25.25 0 0 0-.177-.427H2.5A2.5 2.5 0 0 0 0 3.75v2a.5.5 0 0 0 .5.5h1.4a.106.106 0 0 0 .073-.03l4.54-4.543Z" />
                                            </g>
                                        </svg>
                                    </div>

                                    <div className="pt-3 sm:pt-5">
                                        <h2 className="text-xl font-semibold text-black dark:text-white">
                                            Laracasts
                                        </h2>

                                        <p className="mt-4 text-sm/relaxed">
                                            Laracasts offers thousands of video
                                            tutorials on Laravel, PHP, and
                                            JavaScript development. Check them
                                            out, see for yourself, and massively
                                            level up your development skills in
                                            the process.
                                        </p>
                                    </div>

                                    <svg
                                        className="size-6 shrink-0 self-center stroke-[#FF2D20]"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                                        />
                                    </svg>
                                </a>

                                <a
                                    href="https://laravel-news.com"
                                    className="flex items-start gap-4 rounded-lg bg-white p-6 shadow-[0px_14px_34px_0px_rgba(0,0,0,0.08)] ring-1 ring-white/[0.05] transition duration-300 hover:text-black/70 hover:ring-black/20 focus:outline-none focus-visible:ring-[#FF2D20] lg:pb-10 dark:bg-zinc-900 dark:ring-zinc-800 dark:hover:text-white/70 dark:hover:ring-zinc-700 dark:focus-visible:ring-[#FF2D20]"
                                >
                                    <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[#FF2D20]/10 sm:size-16">
                                        <svg
                                            className="size-5 sm:size-6"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                        >
                                            <g fill="#FF2D20">
                                                <path d="M8.75 4.5H5.5c-.69 0-1.25.56-1.25 1.25v4.75c0 .69.56 1.25 1.25 1.25h3.25c.69 0 1.25-.56 1.25-1.25V5.75c0-.69-.56-1.25-1.25-1.25Z" />
                                                <path d="M24 10a3 3 0 0 0-3-3h-2V2.5a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2V20a3.5 3.5 0 0 0 3.5 3.5h17A3.5 3.5 0 0 0 24 20V10ZM3.5 21.5A1.5 1.5 0 0 1 2 20V3a.5.5 0 0 1 .5-.5h14a.5.5 0 0 1 .5.5v17c0 .295.037.588.11.874a.5.5 0 0 1-.484.625L3.5 21.5ZM22 20a1.5 1.5 0 1 1-3 0V9.5a.5.5 0 0 1 .5-.5H21a1 1 0 0 1 1 1v10Z" />
                                                <path d="M12.751 6.047h2a.75.75 0 0 1 .75.75v.5a.75.75 0 0 1-.75.75h-2A.75.75 0 0 1 12 7.3v-.5a.75.75 0 0 1 .751-.753ZM12.751 10.047h2a.75.75 0 0 1 .75.75v.5a.75.75 0 0 1-.75.75h-2A.75.75 0 0 1 12 11.3v-.5a.75.75 0 0 1 .751-.753ZM4.751 14.047h10a.75.75 0 0 1 .75.75v.5a.75.75 0 0 1-.75.75h-10A.75.75 0 0 1 4 15.3v-.5a.75.75 0 0 1 .751-.753ZM4.75 18.047h7.5a.75.75 0 0 1 .75.75v.5a.75.75 0 0 1-.75.75h-7.5A.75.75 0 0 1 4 19.3v-.5a.75.75 0 0 1 .75-.753Z" />
                                            </g>
                                        </svg>
                                    </div>

                                    <div className="pt-3 sm:pt-5">
                                        <h2 className="text-xl font-semibold text-black dark:text-white">
                                            Laravel News
                                        </h2>

                                        <p className="mt-4 text-sm/relaxed">
                                            Laravel News is a community driven
                                            portal and newsletter aggregating
                                            all of the latest and most important
                                            news in the Laravel ecosystem,
                                            including new package releases and
                                            tutorials.
                                        </p>
                                    </div>

                                    <svg
                                        className="size-6 shrink-0 self-center stroke-[#FF2D20]"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                                        />
                                    </svg>
                                </a>

                                <div className="flex items-start gap-4 rounded-lg bg-white p-6 shadow-[0px_14px_34px_0px_rgba(0,0,0,0.08)] ring-1 ring-white/[0.05] lg:pb-10 dark:bg-zinc-900 dark:ring-zinc-800">
                                    <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[#FF2D20]/10 sm:size-16">
                                        <svg
                                            className="size-5 sm:size-6"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                        >
                                            <g fill="#FF2D20">
                                                <path d="M16.597 12.635a.247.247 0 0 0-.08-.237 2.234 2.234 0 0 1-.769-1.68c.001-.195.03-.39.084-.578a.25.25 0 0 0-.09-.267 8.8 8.8 0 0 0-4.826-1.66.25.25 0 0 0-.268.181 2.5 2.5 0 0 1-2.4 1.824.045.045 0 0 0-.045.037 12.255 12.255 0 0 0-.093 3.86.251.251 0 0 0 .208.214c2.22.366 4.367 1.08 6.362 2.118a.252.252 0 0 0 .32-.079 10.09 10.09 0 0 0 1.597-3.733ZM13.616 17.968a.25.25 0 0 0-.063-.407A19.697 19.697 0 0 0 8.91 15.98a.25.25 0 0 0-.287.325c.151.455.334.898.548 1.328.437.827.981 1.594 1.619 2.28a.249.249 0 0 0 .32.044 29.13 29.13 0 0 0 2.506-1.99ZM6.303 14.105a.25.25 0 0 0 .265-.274 13.048 13.048 0 0 1 .205-4.045.062.062 0 0 0-.022-.07 2.5 2.5 0 0 1-.777-.982.25.25 0 0 0-.271-.149 11 11 0 0 0-5.6 2.815.255.255 0 0 0-.075.163c-.008.135-.02.27-.02.406.002.8.084 1.598.246 2.381a.25.25 0 0 0 .303.193 19.924 19.924 0 0 1 5.746-.438ZM9.228 20.914a.25.25 0 0 0 .1-.393 11.53 11.53 0 0 1-1.5-2.22 12.238 12.238 0 0 1-.91-2.465.248.248 0 0 0-.22-.187 18.876 18.876 0 0 0-5.69.33.249.249 0 0 0-.179.336c.838 2.142 2.272 4 4.132 5.353a.254.254 0 0 0 .15.048c1.41-.01 2.807-.282 4.117-.802ZM18.93 12.957l-.005-.008a.25.25 0 0 0-.268-.082 2.21 2.21 0 0 1-.41.081.25.25 0 0 0-.217.2c-.582 2.66-2.127 5.35-5.75 7.843a.248.248 0 0 0-.09.299.25.25 0 0 0 .065.091 28.703 28.703 0 0 0 2.662 2.12.246.246 0 0 0 .209.037c2.579-.701 4.85-2.242 6.456-4.378a.25.25 0 0 0 .048-.189 13.51 13.51 0 0 0-2.7-6.014ZM5.702 7.058a.254.254 0 0 0 .2-.165A2.488 2.488 0 0 1 7.98 5.245a.093.093 0 0 0 .078-.062 19.734 19.734 0 0 1 3.055-4.74.25.25 0 0 0-.21-.41 12.009 12.009 0 0 0-10.4 8.558.25.25 0 0 0 .373.281 12.912 12.912 0 0 1 4.826-1.814ZM10.773 22.052a.25.25 0 0 0-.28-.046c-.758.356-1.55.635-2.365.833a.25.25 0 0 0-.022.48c1.252.43 2.568.65 3.893.65.1 0 .2 0 .3-.008a.25.25 0 0 0 .147-.444c-.526-.424-1.1-.917-1.673-1.465ZM18.744 8.436a.249.249 0 0 0 .15.228 2.246 2.246 0 0 1 1.352 2.054c0 .337-.08.67-.23.972a.25.25 0 0 0 .042.28l.007.009a15.016 15.016 0 0 1 2.52 4.6.25.25 0 0 0 .37.132.25.25 0 0 0 .096-.114c.623-1.464.944-3.039.945-4.63a12.005 12.005 0 0 0-5.78-10.258.25.25 0 0 0-.373.274c.547 2.109.85 4.274.901 6.453ZM9.61 5.38a.25.25 0 0 0 .08.31c.34.24.616.561.8.935a.25.25 0 0 0 .3.127.631.631 0 0 1 .206-.034c2.054.078 4.036.772 5.69 1.991a.251.251 0 0 0 .267.024c.046-.024.093-.047.141-.067a.25.25 0 0 0 .151-.23A29.98 29.98 0 0 0 15.957.764a.25.25 0 0 0-.16-.164 11.924 11.924 0 0 0-2.21-.518.252.252 0 0 0-.215.076A22.456 22.456 0 0 0 9.61 5.38Z" />
                                            </g>
                                        </svg>
                                    </div>

                                    <div className="pt-3 sm:pt-5">
                                        <h2 className="text-xl font-semibold text-black dark:text-white">
                                            Vibrant Ecosystem
                                        </h2>

                                        <p className="mt-4 text-sm/relaxed">
                                            Laravel's robust library of
                                            first-party tools and libraries,
                                            such as{' '}
                                            <a
                                                href="https://forge.laravel.com"
                                                className="rounded-sm underline hover:text-black focus:outline-none focus-visible:ring-1 focus-visible:ring-[#FF2D20] dark:hover:text-white dark:focus-visible:ring-[#FF2D20]"
                                            >
                                                Forge
                                            </a>
                                            ,{' '}
                                            <a
                                                href="https://vapor.laravel.com"
                                                className="rounded-sm underline hover:text-black focus:outline-none focus-visible:ring-1 focus-visible:ring-[#FF2D20] dark:hover:text-white"
                                            >
                                                Vapor
                                            </a>
                                            ,{' '}
                                            <a
                                                href="https://nova.laravel.com"
                                                className="rounded-sm underline hover:text-black focus:outline-none focus-visible:ring-1 focus-visible:ring-[#FF2D20] dark:hover:text-white"
                                            >
                                                Nova
                                            </a>
                                            ,{' '}
                                            <a
                                                href="https://envoyer.io"
                                                className="rounded-sm underline hover:text-black focus:outline-none focus-visible:ring-1 focus-visible:ring-[#FF2D20] dark:hover:text-white"
                                            >
                                                Envoyer
                                            </a>
                                            , and{' '}
                                            <a
                                                href="https://herd.laravel.com"
                                                className="rounded-sm underline hover:text-black focus:outline-none focus-visible:ring-1 focus-visible:ring-[#FF2D20] dark:hover:text-white"
                                            >
                                                Herd
                                            </a>{' '}
                                            help you take your projects to the
                                            next level. Pair them with powerful
                                            open source libraries like{' '}
                                            <a
                                                href="https://laravel.com/docs/billing"
                                                className="rounded-sm underline hover:text-black focus:outline-none focus-visible:ring-1 focus-visible:ring-[#FF2D20] dark:hover:text-white"
                                            >
                                                Cashier
                                            </a>
                                            ,{' '}
                                            <a
                                                href="https://laravel.com/docs/dusk"
                                                className="rounded-sm underline hover:text-black focus:outline-none focus-visible:ring-1 focus-visible:ring-[#FF2D20] dark:hover:text-white"
                                            >
                                                Dusk
                                            </a>
                                            ,{' '}
                                            <a
                                                href="https://laravel.com/docs/broadcasting"
                                                className="rounded-sm underline hover:text-black focus:outline-none focus-visible:ring-1 focus-visible:ring-[#FF2D20] dark:hover:text-white"
                                            >
                                                Echo
                                            </a>
                                            ,{' '}
                                            <a
                                                href="https://laravel.com/docs/horizon"
                                                className="rounded-sm underline hover:text-black focus:outline-none focus-visible:ring-1 focus-visible:ring-[#FF2D20] dark:hover:text-white"
                                            >
                                                Horizon
                                            </a>
                                            ,{' '}
                                            <a
                                                href="https://laravel.com/docs/sanctum"
                                                className="rounded-sm underline hover:text-black focus:outline-none focus-visible:ring-1 focus-visible:ring-[#FF2D20] dark:hover:text-white"
                                            >
                                                Sanctum
                                            </a>
                                            ,{' '}
                                            <a
                                                href="https://laravel.com/docs/telescope"
                                                className="rounded-sm underline hover:text-black focus:outline-none focus-visible:ring-1 focus-visible:ring-[#FF2D20] dark:hover:text-white"
                                            >
                                                Telescope
                                            </a>
                                            , and more.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    
                    {/* Contact Section */}
                    <section id="contact" className="py-20 bg-gray-50">
                        <div className="container mx-auto px-4 md:px-6 lg:px-8">
                            <div className="text-center mb-16">
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Contactez-nous</h2>
                                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                    Vous avez un projet ou une question ? N'hésitez pas à nous contacter.
                                </p>
                            </div>
                            
                            <div className="flex flex-col lg:flex-row gap-12">
                                {/* Contact Form */}
                                <div className="lg:w-2/3">
                                    <form className="bg-white p-8 rounded-lg shadow-md">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                            <div>
                                                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Nom</label>
                                                <input 
                                                    type="text" 
                                                    id="name" 
                                                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                    placeholder="Votre nom"
                                                />
                                            </div>
                                            <div>
                                                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                                                <input 
                                                    type="email" 
                                                    id="email" 
                                                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                    placeholder="Votre email"
                                                />
                                            </div>
                                        </div>
                                        <div className="mb-6">
                                            <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Sujet</label>
                                            <input 
                                                type="text" 
                                                id="subject" 
                                                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                placeholder="Sujet de votre message"
                                            />
                                        </div>
                                        <div className="mb-6">
                                            <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                                            <textarea 
                                                id="message" 
                                                rows="5" 
                                                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                placeholder="Votre message"
                                            ></textarea>
                                        </div>
                                        <button 
                                            type="submit" 
                                            className="px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors"
                                        >
                                            Envoyer le message
                                        </button>
                                    </form>
                                </div>
                                
                                {/* Contact Info */}
                                <div className="lg:w-1/3">
                                    <div className="bg-white p-8 rounded-lg shadow-md h-full">
                                        <h3 className="text-2xl font-bold text-gray-900 mb-6">Informations de contact</h3>
                                        
                                        <div className="flex items-start mb-6">
                                            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                                                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                </svg>
                                            </div>
                                            <div>
                                                <h4 className="text-lg font-semibold text-gray-900 mb-1">Addresse</h4>
                                                <p className="text-gray-600">123 Boulevard Saint-Michel,<br/>75005 Paris, France</p>
                                            </div>
                                        </div>
                                        
                                        <div className="flex items-start mb-6">
                                            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                                                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                                </svg>
                                            </div>
                                            <div>
                                                <h4 className="text-lg font-semibold text-gray-900 mb-1">Téléphone</h4>
                                                <p className="text-gray-600">+33 1 23 45 67 89</p>
                                            </div>
                                        </div>
                                        
                                        <div className="flex items-start mb-6">
                                            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                                                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                </svg>
                                            </div>
                                            <div>
                                                <h4 className="text-lg font-semibold text-gray-900 mb-1">Email</h4>
                                                <p className="text-gray-600">contact@entreprise.com</p>
                                            </div>
                                        </div>
                                        
                                        <div className="flex items-start">
                                            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                                                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                            </div>
                                            <div>
                                                <h4 className="text-lg font-semibold text-gray-900 mb-1">Heures d'ouverture</h4>
                                                <p className="text-gray-600">Lun-Ven: 9h00 - 18h00<br/>Sam-Dim: Fermé</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
                
                {/* Footer */}
                <footer className="bg-gray-900 text-white py-12">
                    <div className="container mx-auto px-4 md:px-6 lg:px-8">
                        <div className="flex flex-col md:flex-row justify-between">
                            <div className="mb-8 md:mb-0">
                                <span className="text-2xl font-bold text-blue-400">LOGO</span>
                                <p className="mt-4 max-w-xs text-gray-400">
                                    Solutions innovantes pour propulser votre entreprise vers le succès.
                                </p>
                            </div>
                            
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                                <div>
                                    <h4 className="text-lg font-semibold mb-4">Liens rapides</h4>
                                    <ul className="space-y-2">
                                        <li><a href="#hero" className="text-gray-400 hover:text-white transition-colors">Accueil</a></li>
                                        <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
                                        <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">À propos</a></li>
                                        <li><a href="#portfolio" className="text-gray-400 hover:text-white transition-colors">Portfolio</a></li>
                                        <li><a href="#testimonials" className="text-gray-400 hover:text-white transition-colors">Témoignages</a></li>
                                        <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
                                    </ul>
                                </div>
                                
                                <div>
                                    <h4 className="text-lg font-semibold mb-4">Services</h4>
                                    <ul className="space-y-2">
                                        <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Web Development</a></li>
                                        <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Mobile Apps</a></li>
                                        <li><a href="#" className="text-gray-400 hover:text-white transition-colors">UX/UI Design</a></li>
                                        <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Cloud & DevOps</a></li>
                                        <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Digital Marketing</a></li>
                                    </ul>
                                </div>
                                
                                <div>
                                    <h4 className="text-lg font-semibold mb-4">Légal</h4>
                                    <ul className="space-y-2">
                                        <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Mentions légales</a></li>
                                        <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Politique de confidentialité</a></li>
                                        <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Conditions d'utilisation</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        
                        <div className="border-t border-gray-800 mt-12 pt-8">
                            <p className="text-gray-400 text-center">
                                © {new Date().getFullYear()} Entreprise. Tous droits réservés.
                            </p>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
}
