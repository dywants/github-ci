import { Head, Link } from "@inertiajs/react";
import { useState } from "react";

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
                            <span className="text-blue-600 text-2xl font-bold">
                                LOGO
                            </span>
                        </div>

                        {/* Desktop navigation */}
                        <div className="hidden md:flex space-x-8">
                            <a
                                href="#hero"
                                className="text-gray-800 hover:text-blue-600 transition-colors"
                            >
                                Accueil
                            </a>
                            <a
                                href="#services"
                                className="text-gray-800 hover:text-blue-600 transition-colors"
                            >
                                Services
                            </a>
                            <a
                                href="#about"
                                className="text-gray-800 hover:text-blue-600 transition-colors"
                            >
                                À propos
                            </a>
                            <a
                                href="#portfolio"
                                className="text-gray-800 hover:text-blue-600 transition-colors"
                            >
                                Portfolio
                            </a>
                            <a
                                href="#testimonials"
                                className="text-gray-800 hover:text-blue-600 transition-colors"
                            >
                                Témoignages
                            </a>
                            <a
                                href="#contact"
                                className="text-gray-800 hover:text-blue-600 transition-colors"
                            >
                                Contact
                            </a>
                        </div>

                        {/* Login/Register */}
                        <div className="hidden md:flex items-center space-x-4">
                            {auth.user ? (
                                <Link
                                    href={route("dashboard")}
                                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                                >
                                    Dashboard
                                </Link>
                            ) : (
                                <>
                                    <Link
                                        href={route("login")}
                                        className="text-gray-800 hover:text-blue-600 transition-colors"
                                    >
                                        Connexion
                                    </Link>
                                    <Link
                                        href={route("register")}
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
                                <svg
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    {isMenuOpen ? (
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    ) : (
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    )}
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Mobile Navigation */}
                    {isMenuOpen && (
                        <div className="md:hidden bg-white py-4 px-4">
                            <div className="flex flex-col space-y-4">
                                <a
                                    href="#hero"
                                    className="text-gray-800 hover:text-blue-600 transition-colors"
                                >
                                    Accueil
                                </a>
                                <a
                                    href="#services"
                                    className="text-gray-800 hover:text-blue-600 transition-colors"
                                >
                                    Services
                                </a>
                                <a
                                    href="#about"
                                    className="text-gray-800 hover:text-blue-600 transition-colors"
                                >
                                    À propos
                                </a>
                                <a
                                    href="#portfolio"
                                    className="text-gray-800 hover:text-blue-600 transition-colors"
                                >
                                    Portfolio
                                </a>
                                <a
                                    href="#testimonials"
                                    className="text-gray-800 hover:text-blue-600 transition-colors"
                                >
                                    Témoignages
                                </a>
                                <a
                                    href="#contact"
                                    className="text-gray-800 hover:text-blue-600 transition-colors"
                                >
                                    Contact
                                </a>

                                {auth.user ? (
                                    <Link
                                        href={route("dashboard")}
                                        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors inline-block"
                                    >
                                        Dashboard
                                    </Link>
                                ) : (
                                    <div className="flex flex-col space-y-2">
                                        <Link
                                            href={route("login")}
                                            className="text-gray-800 hover:text-blue-600 transition-colors"
                                        >
                                            Connexion
                                        </Link>
                                        <Link
                                            href={route("register")}
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
                    <section
                        id="hero"
                        className="pt-32 pb-20 bg-gradient-to-r from-blue-50 to-indigo-50"
                    >
                        <div className="container mx-auto px-4 md:px-6 lg:px-8">
                            <div className="flex flex-col lg:flex-row items-center">
                                <div className="lg:w-1/2 lg:pr-10 mb-10 lg:mb-0">
                                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                                        Solutions Innovantes pour votre
                                        Entreprise
                                    </h1>
                                    <p className="text-xl text-gray-600 mb-8">
                                        Nous créons des solutions digitales sur
                                        mesure pour propulser votre entreprise
                                        vers le succès dans un monde en
                                        constante évolution.
                                    </p>
                                    <div className="flex flex-col sm:flex-row gap-4">
                                        <a
                                            href="#contact"
                                            className="px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors inline-block text-center"
                                        >
                                            Demander un devis
                                        </a>
                                        <a
                                            href="#services"
                                            className="px-6 py-3 bg-white text-blue-600 font-medium rounded-md border border-blue-600 hover:bg-blue-50 transition-colors inline-block text-center"
                                        >
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
                                <p className="text-gray-600 font-medium">
                                    Ils nous font confiance
                                </p>
                            </div>
                            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70">
                                {/* Placeholder logos - Replace with actual client logos */}
                                <div className="w-32 h-12 flex items-center justify-center">
                                    <span className="text-2xl font-bold text-gray-400">
                                        Client 1
                                    </span>
                                </div>
                                <div className="w-32 h-12 flex items-center justify-center">
                                    <span className="text-2xl font-bold text-gray-400">
                                        Client 2
                                    </span>
                                </div>
                                <div className="w-32 h-12 flex items-center justify-center">
                                    <span className="text-2xl font-bold text-gray-400">
                                        Client 3
                                    </span>
                                </div>
                                <div className="w-32 h-12 flex items-center justify-center">
                                    <span className="text-2xl font-bold text-gray-400">
                                        Client 4
                                    </span>
                                </div>
                                <div className="w-32 h-12 flex items-center justify-center">
                                    <span className="text-2xl font-bold text-gray-400">
                                        Client 5
                                    </span>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Services Section */}
                    <section id="services" className="py-20">
                        <div className="container mx-auto px-4 md:px-6 lg:px-8">
                            <div className="text-center mb-16">
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                    Nos Services
                                </h2>
                                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                    Nous proposons une gamme complète de
                                    services digitaux pour répondre à vos
                                    besoins spécifiques
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {/* Service 1 */}
                                <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                                    <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                                        <svg
                                            className="w-8 h-8 text-blue-600"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                            />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                        Développement Web
                                    </h3>
                                    <p className="text-gray-600">
                                        Création de sites web et d'applications
                                        sur mesure avec les technologies les
                                        plus modernes et performantes.
                                    </p>
                                </div>

                                {/* Service 2 */}
                                <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                                    <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                                        <svg
                                            className="w-8 h-8 text-blue-600"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                                            />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                        Applications Mobiles
                                    </h3>
                                    <p className="text-gray-600">
                                        Développement d'applications mobiles
                                        natives et cross-platform pour iOS et
                                        Android.
                                    </p>
                                </div>

                                {/* Service 3 */}
                                <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                                    <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                                        <svg
                                            className="w-8 h-8 text-blue-600"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                                            />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                        Design UX/UI
                                    </h3>
                                    <p className="text-gray-600">
                                        Création d'interfaces utilisateurs
                                        modernes, intuitives et esthétiques pour
                                        une expérience utilisateur optimale.
                                    </p>
                                </div>

                                {/* Service 4 */}
                                <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                                    <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                                        <svg
                                            className="w-8 h-8 text-blue-600"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                                            />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                        Cloud & DevOps
                                    </h3>
                                    <p className="text-gray-600">
                                        Déploiement et maintenance
                                        d'applications dans le cloud avec des
                                        pratiques DevOps modernes.
                                    </p>
                                </div>

                                {/* Service 5 */}
                                <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                                    <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                                        <svg
                                            className="w-8 h-8 text-blue-600"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M13 10V3L4 14h7v7l9-11h-7z"
                                            />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                        Marketing Digital
                                    </h3>
                                    <p className="text-gray-600">
                                        Stratégies de marketing digital pour
                                        accroître votre visibilité en ligne et
                                        attirer plus de clients.
                                    </p>
                                </div>

                                {/* Service 6 */}
                                <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                                    <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                                        <svg
                                            className="w-8 h-8 text-blue-600"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                                            />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                        Cybersécurité
                                    </h3>
                                    <p className="text-gray-600">
                                        Protection de vos systèmes et données
                                        contre les menaces informatiques
                                        modernes.
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
                                        Nous sommes une équipe passionnée de
                                        développeurs, designers et experts en
                                        marketing digital qui travaillent
                                        ensemble pour créer des solutions
                                        digitales innovantes et sur mesure.
                                    </p>
                                    <p className="text-lg text-gray-600 mb-6">
                                        Depuis notre création, nous avons
                                        accompagné des dizaines d'entreprises
                                        dans leur transformation digitale et les
                                        avons aidées à atteindre leurs objectifs
                                        commerciaux grâce à des solutions
                                        technologiques adaptées.
                                    </p>
                                    <div className="grid grid-cols-2 gap-6 mt-8">
                                        <div>
                                            <p className="text-4xl font-bold text-blue-600">
                                                10+
                                            </p>
                                            <p className="text-gray-600">
                                                Années d'expérience
                                            </p>
                                        </div>
                                        <div>
                                            <p className="text-4xl font-bold text-blue-600">
                                                250+
                                            </p>
                                            <p className="text-gray-600">
                                                Projets réalisés
                                            </p>
                                        </div>
                                        <div>
                                            <p className="text-4xl font-bold text-blue-600">
                                                50+
                                            </p>
                                            <p className="text-gray-600">
                                                Experts
                                            </p>
                                        </div>
                                        <div>
                                            <p className="text-4xl font-bold text-blue-600">
                                                98%
                                            </p>
                                            <p className="text-gray-600">
                                                Clients satisfaits
                                            </p>
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
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                    Notre Portfolio
                                </h2>
                                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                    Découvrez nos réalisations récentes et les
                                    projets dont nous sommes fiers
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
                                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                            Plateforme E-commerce
                                        </h3>
                                        <p className="text-gray-600 mb-4">
                                            Développement d'une plateforme de
                                            commerce en ligne complète avec
                                            système de paiement sécurisé.
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            <span className="px-3 py-1 bg-blue-100 text-blue-600 text-sm font-medium rounded-full">
                                                Laravel
                                            </span>
                                            <span className="px-3 py-1 bg-blue-100 text-blue-600 text-sm font-medium rounded-full">
                                                Vue.js
                                            </span>
                                            <span className="px-3 py-1 bg-blue-100 text-blue-600 text-sm font-medium rounded-full">
                                                Stripe
                                            </span>
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
                                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                            Application Mobile de Livraison
                                        </h3>
                                        <p className="text-gray-600 mb-4">
                                            Application mobile permettant de
                                            suivre la livraison de colis en
                                            temps réel.
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            <span className="px-3 py-1 bg-blue-100 text-blue-600 text-sm font-medium rounded-full">
                                                React Native
                                            </span>
                                            <span className="px-3 py-1 bg-blue-100 text-blue-600 text-sm font-medium rounded-full">
                                                Node.js
                                            </span>
                                            <span className="px-3 py-1 bg-blue-100 text-blue-600 text-sm font-medium rounded-full">
                                                MongoDB
                                            </span>
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
                                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                            Plateforme SaaS de Gestion
                                        </h3>
                                        <p className="text-gray-600 mb-4">
                                            Solution complète de gestion de
                                            projets et de ressources pour les
                                            PME.
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            <span className="px-3 py-1 bg-blue-100 text-blue-600 text-sm font-medium rounded-full">
                                                Laravel
                                            </span>
                                            <span className="px-3 py-1 bg-blue-100 text-blue-600 text-sm font-medium rounded-full">
                                                React
                                            </span>
                                            <span className="px-3 py-1 bg-blue-100 text-blue-600 text-sm font-medium rounded-full">
                                                MySQL
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="text-center mt-12">
                                <a
                                    href="#contact"
                                    className="px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors inline-block"
                                >
                                    Discuter de votre projet
                                </a>
                            </div>
                        </div>
                    </section>
                    {/* Testimonials Section */}
                    <section id="testimonials" className="py-20">
                        <div className="container mx-auto px-4 md:px-6 lg:px-8">
                            <div className="text-center mb-16">
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                    Ce que disent nos clients
                                </h2>
                                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                    Découvrez les témoignages de nos clients
                                    satisfaits
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
                                            <h4 className="text-lg font-semibold text-gray-900">
                                                Thomas Dubois
                                            </h4>
                                            <p className="text-gray-600">
                                                CEO, Company One
                                            </p>
                                        </div>
                                    </div>
                                    <p className="text-gray-600 italic">
                                        "Travailler avec cette équipe a été une
                                        expérience incroyable. Ils ont su
                                        comprendre nos besoins et délivrer une
                                        solution qui a dépassé nos attentes."
                                    </p>
                                    <div className="flex mt-4">
                                        <svg
                                            className="w-5 h-5 text-yellow-400"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                        </svg>
                                        <svg
                                            className="w-5 h-5 text-yellow-400"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                        </svg>
                                        <svg
                                            className="w-5 h-5 text-yellow-400"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                        </svg>
                                        <svg
                                            className="w-5 h-5 text-yellow-400"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                        </svg>
                                        <svg
                                            className="w-5 h-5 text-yellow-400"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                        </svg>
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
                                            <h4 className="text-lg font-semibold text-gray-900">
                                                Sophie Martin
                                            </h4>
                                            <p className="text-gray-600">
                                                Marketing Director, Company Two
                                            </p>
                                        </div>
                                    </div>
                                    <p className="text-gray-600 italic">
                                        "La réactivité et le professionnalisme
                                        de l'équipe ont été impressionnants.
                                        Notre site e-commerce a vu ses ventes
                                        augmenter de 40% en seulement trois mois
                                        après le lancement."
                                    </p>
                                    <div className="flex mt-4">
                                        <svg
                                            className="w-5 h-5 text-yellow-400"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                        </svg>
                                        <svg
                                            className="w-5 h-5 text-yellow-400"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                        </svg>
                                        <svg
                                            className="w-5 h-5 text-yellow-400"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                        </svg>
                                        <svg
                                            className="w-5 h-5 text-yellow-400"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                        </svg>
                                        <svg
                                            className="w-5 h-5 text-yellow-400"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                        </svg>
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
                                            <h4 className="text-lg font-semibold text-gray-900">
                                                Pierre Lemaire
                                            </h4>
                                            <p className="text-gray-600">
                                                CTO, Company Three
                                            </p>
                                        </div>
                                    </div>
                                    <p className="text-gray-600 italic">
                                        "L'application mobile développée est
                                        devenue un élément essentiel de notre
                                        stratégie. La qualité du code et
                                        l'expérience utilisateur sont
                                        exceptionnelles."
                                    </p>
                                    <div className="flex mt-4">
                                        <svg
                                            className="w-5 h-5 text-yellow-400"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                        </svg>
                                        <svg
                                            className="w-5 h-5 text-yellow-400"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                        </svg>
                                        <svg
                                            className="w-5 h-5 text-yellow-400"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                        </svg>
                                        <svg
                                            className="w-5 h-5 text-yellow-400"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                        </svg>
                                        <svg
                                            className="w-5 h-5 text-yellow-400"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </>
    );
}
