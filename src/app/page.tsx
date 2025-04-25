'use client'

import Image from 'next/image'
import Link from 'next/link'
import {
  CodeBracketIcon,
  RocketLaunchIcon,
  CpuChipIcon,
  BookOpenIcon,
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
} from '@heroicons/react/24/outline'
import PricingCard from './components/PricingCard'
import FaqItem from './components/FaqItem'
import TestimonialCard from './components/TestimonialCard'
import FeatureCard from './components/FeatureCard'
import { motion } from 'framer-motion'
import {
  RocketIcon,
  LightningBoltIcon,
  CodeIcon,
  EnvelopeClosedIcon,
  CreditCardIcon,
  PersonIcon,
  FileTextIcon,
  MixIcon,
  CheckIcon,
  GitHubLogoIcon,
} from '@radix-ui/react-icons'

const features = [
  {
    icon: <CodeBracketIcon className="w-6 h-6" />,
    title: 'Production-Ready Code',
    description: 'Get started with professionally written, well-structured code that scales.',
  },
  {
    icon: <RocketLaunchIcon className="w-6 h-6" />,
    title: 'Quick Deployment',
    description: 'Deploy your application with one click to your favorite cloud platform.',
  },
  {
    icon: <CpuChipIcon className="w-6 h-6" />,
    title: 'AI Integration',
    description: 'Built-in AI capabilities to supercharge your application features.',
  },
]

const pricingPlans = [
  {
    title: 'Starter',
    price: '99',
    description: 'Perfect for side projects and small startups',
    features: [
      'Up to 5 team members',
      'Basic analytics',
      'Community support',
      '5GB storage',
      'API access',
    ],
    buttonText: 'Get Started',
    priceId: 'price_1QTPalGI6vk81n8V8PtyW1ow'
  },
  {
    title: 'Pro',
    price: '249',
    description: 'Best for growing businesses',
    features: [
      'Unlimited team members',
      'Advanced analytics',
      'Priority support',
      '50GB storage',
      'API access',
      'Custom integrations',
    ],
    buttonText: 'Start Free Trial',
    popular: true,
    priceId: 'price_1QTPbgGI6vk81n8VgYFOi983'
  },
  {
    title: 'Enterprise',
    price: '999',
    description: 'For large scale applications',
    features: [
      'Unlimited everything',
      'White-label options',
      '24/7 phone support',
      '500GB storage',
      'API access',
      'Custom development',
    ],
    buttonText: 'Contact Sales',
    priceId: 'price_1QTPcUGI6vk81n8V9567pzL9'
  },
]

const faqs = [
  {
    question: 'What is included in the starter package?',
    answer: 'The starter package includes all essential features to get your project up and running, including basic analytics, community support, and API access.',
  },
  {
    question: 'Can I upgrade my plan later?',
    answer: 'Yes, you can upgrade your plan at any time. Your new features will be available immediately after upgrading.',
  },
  {
    question: 'Do you offer custom development?',
    answer: 'Yes, our enterprise plan includes custom development options to meet your specific needs.',
  },
]

const testimonials = [
  {
    content: "This toolkit saved us months of development time. We launched our MVP in just 2 weeks!",
    author: {
      name: "Sarah Chen",
      avatar: "/avatars/placeholder.svg",
      title: "CTO at TechStart"
    },
    stats: [
      { label: "Time Saved", value: "3 months" },
      { label: "ROI", value: "300%" }
    ]
  },
  {
    content: "The code quality is exceptional. It's like having a senior developer on the team.",
    author: {
      name: "Mike Johnson",
      avatar: "/avatars/placeholder.svg",
      title: "Lead Developer"
    }
  },
  {
    content: "Best investment we made for our startup. The support is amazing too!",
    author: {
      name: "Lisa Park",
      avatar: "/avatars/placeholder.svg",
      title: "Founder at AppLabs"
    }
  }
]

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0F172A] to-[#1E293B]">
      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="fixed top-0 w-full z-50 bg-white/5 backdrop-blur-lg border-b border-white/10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex items-center"
            >
              <Link href="/" className="text-xl font-bold bg-gradient-to-r from-[#60A5FA] to-[#A78BFA] bg-clip-text text-transparent">
                Startup
              </Link>
            </motion.div>
            <div className="hidden md:flex items-center space-x-8">
              {['Features', 'Pricing', 'Docs', 'Blog'].map((item) => (
                <motion.div
                  key={item}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link href={\`/\${item.toLowerCase()}\`} className="text-sm text-white/80 hover:text-white transition-colors">
                    {item}
                  </Link>
                </motion.div>
              ))}
            </div>
            <div className="flex items-center space-x-4">
              <motion.div whileHover={{ scale: 1.1 }}>
                <Link 
                  href="https://github.com/zainulabedeen123/best-saas-kit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  <GitHubLogoIcon className="w-5 h-5" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }}>
                <Link 
                  href="/auth" 
                  className="text-sm text-white/80 hover:text-white transition-colors"
                >
                  Sign in
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }}>
                <Link
                  href="/auth?view=sign-up"
                  className="bg-gradient-to-r from-[#60A5FA] to-[#A78BFA] text-white text-sm px-4 py-2 rounded-lg hover:opacity-90 transition-opacity"
                >
                  Get Started
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-white/80 mb-6"
              >
                <LightningBoltIcon className="w-4 h-4 mr-2 text-[#60A5FA]" /> 
                Ship faster with our SaaS Kit
              </motion.div>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl sm:text-6xl font-bold text-white leading-[1.1] tracking-tight mb-6"
              >
                Ship your startup<br />
                <span className="bg-gradient-to-r from-[#60A5FA] to-[#A78BFA] bg-clip-text text-transparent">
                  in days, not weeks
                </span>
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-lg text-white/70 mb-8 leading-relaxed"
              >
                The fastest way to build and deploy your startup with production-ready code
              </motion.p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/auth?view=sign-up"
                  className="inline-flex justify-center items-center px-6 py-3 rounded-lg bg-gradient-to-r from-[#60A5FA] to-[#A78BFA] text-white font-medium hover:opacity-90 transition-opacity"
                >
                  Get Started
                </Link>
                <Link
                  href="https://github.com/zainulabedeen123/best-saas-kit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex justify-center items-center px-6 py-3 rounded-lg border border-white/10 text-white font-medium hover:bg-white/5 transition-colors"
                >
                  <GitHubLogoIcon className="w-5 h-5 mr-2" />
                  Github Repo
                </Link>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, type: "spring" }}
              className="relative h-[400px] lg:h-[500px]"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#60A5FA]/20 to-[#A78BFA]/20 rounded-2xl -rotate-6 transform-gpu"></div>
              <Image
                src="/Saas-Header.png"
                alt="SaaS Platform Preview"
                fill
                className="object-contain rounded-xl"
                priority
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-16">
            {/* Launch Time */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-[#60A5FA] text-sm font-mono flex items-center gap-2"
            >
              <CodeIcon className="w-4 h-4" />
              const launch_time = "01:19 AM";
            </motion.div>

            {/* Heading */}
            <div>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-5xl font-bold mb-6 bg-gradient-to-r from-[#60A5FA] via-[#A78BFA] to-[#60A5FA] bg-clip-text text-transparent"
              >
                Supercharge your app instantly,<br />
                launch faster, make $
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lg text-white/60 max-w-3xl"
              >
                Login users, process payments and send emails at lightspeed. Spend your time building 
                your startup, not integrating APIs. ShipFast provides you with the boilerplate code you 
                need to launch, FAST.
              </motion.p>
            </div>

            {/* Feature Icons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8"
            >
              {[
                { icon: <EnvelopeClosedIcon className="w-6 h-6" />, label: "Emails" },
                { icon: <CreditCardIcon className="w-6 h-6" />, label: "Payments" },
                { icon: <PersonIcon className="w-6 h-6" />, label: "Login" },
                { icon: <FileTextIcon className="w-6 h-6" />, label: "Database" },
                { icon: <MixIcon className="w-6 h-6" />, label: "SEO" },
                { icon: <RocketIcon className="w-6 h-6" />, label: "Style" },
                { icon: "⋯", label: "More", highlight: true }
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex flex-col items-center space-y-2"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br from-[#60A5FA]/10 to-[#A78BFA]/10 border border-white/5 flex items-center justify-center backdrop-blur-sm ${item.highlight ? 'text-[#60A5FA]' : 'text-white/80'}`}>
                    {item.icon}
                  </div>
                  <span className={`text-sm ${item.highlight ? 'text-[#60A5FA]' : 'text-white/60'}`}>
                    {item.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* Feature List */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="space-y-4 text-lg"
            >
              {[
                "Tips to write copy that sells",
                "Discord community to stay accountable",
                "Crisp customer support (auto show/hide, variables...)",
                "Collect emails for a waitlist if your product isn't ready",
                "Prompts to generate terms & privacy policy with ChatGPT",
                "Copy paste code templates",
                "Dead simple tutorials"
              ].map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center space-x-3"
                >
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-[#60A5FA]/20 to-[#A78BFA]/20 flex items-center justify-center">
                    <CheckIcon className="w-4 h-4 text-[#60A5FA]" />
                  </div>
                  <span className="text-white/80">{feature}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Time Saved */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-[#60A5FA] text-lg flex items-center gap-2"
            >
              <RocketIcon className="w-5 h-5" />
              Time saved: ∞ hours
            </motion.div>
          </div>
        </div>
      </section>

      {/* Time Breakdown Section */}
      <section className="py-20 px-4">
        <div className="max-w-2xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-[#1A1A2E] to-[#1E293B] rounded-3xl p-10 text-center border border-white/5 backdrop-blur-sm"
          >
            <div className="space-y-3">
              {[
                { time: "4 hrs", task: "to set up emails" },
                { time: "6 hrs", task: "designing a landing page" },
                { time: "4 hrs", task: "to handle Stripe webhooks" },
                { time: "2 hrs", task: "for SEO tags" },
                { time: "1 hr", task: "applying for Google Oauth" },
                { time: "3 hrs", task: "for DNS records" },
                { time: "2 hrs", task: "for protected API routes" },
                { time: "∞ hrs", task: "overthinking..." }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <div className="flex items-center justify-center space-x-2">
                    <span className="text-[#60A5FA] font-medium">{index === 0 ? '' : '+ '}{item.time}</span>
                    <span className="text-white/60">{item.task}</span>
                  </div>
                </motion.div>
              ))}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="pt-3 flex items-center justify-center gap-2"
              >
                <span className="text-[#60A5FA] font-medium">= 22+ hours</span>
                <span className="text-white/60">of headaches</span>
                <span className="text-2xl">🌧️</span>
              </motion.div>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="text-center mt-8"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-[#60A5FA]/10 to-[#A78BFA]/10 border border-white/5 backdrop-blur-sm">
              <div className="flex -space-x-3 mr-3">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: i * 0.1 + 1.2 }}
                    className="w-8 h-8 rounded-full border-2 border-[#1A1A2E] bg-gradient-to-br from-[#60A5FA] to-[#A78BFA]"
                    style={{ transform: `translateX(${i * -4}px)` }}
                  />
                ))}
              </div>
              <span className="text-white/60 text-sm">There's an easier way</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 bg-white/[0.02] border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Save hours of repetitive code,<br />ship fast, get profitable
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <PricingCard key={index} {...plan} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Get in Touch
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              Have questions about our product? Need help getting started? We're here to help.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Contact Information</h3>
                <p className="text-white/60 mb-6">
                  Fill out the form and we'll get back to you within 24 hours.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-white/5 rounded-lg">
                    <EnvelopeIcon className="w-6 h-6 text-[#FFBE1A]" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Email</h4>
                    <a href="mailto:contact@example.com" className="text-white/60 hover:text-[#FFBE1A]">
                      contact@example.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-white/5 rounded-lg">
                    <PhoneIcon className="w-6 h-6 text-[#FFBE1A]" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Phone</h4>
                    <a href="tel:+1234567890" className="text-white/60 hover:text-[#FFBE1A]">
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-white/5 rounded-lg">
                    <MapPinIcon className="w-6 h-6 text-[#FFBE1A]" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Office</h4>
                    <p className="text-white/60">
                      123 Innovation Street<br />
                      San Francisco, CA 94107
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-8">
                <h4 className="text-white font-medium mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  <a href="#" className="p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                    <svg className="w-5 h-5 text-[#FFBE1A]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a href="#" className="p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                    <svg className="w-5 h-5 text-[#FFBE1A]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </a>
                  <a href="#" className="p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                    <svg className="w-5 h-5 text-[#FFBE1A]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.223-.548.223l.188-2.85 5.18-4.68c.223-.204-.054-.31-.346-.106l-6.4 4.02-2.76-.92c-.6-.183-.612-.6.125-.89l10.782-4.156c.5-.183.94.114.78.89z"/>
                    </svg>
                  </a>
                  <a href="#" className="p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                    <svg className="w-5 h-5 text-[#FFBE1A]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white/[0.02] rounded-2xl p-8 border border-white/5">
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="first_name" className="block text-sm font-medium text-white mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="first_name"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFBE1A]/50 focus:border-[#FFBE1A] text-white placeholder-white/40"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label htmlFor="last_name" className="block text-sm font-medium text-white mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="last_name"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFBE1A]/50 focus:border-[#FFBE1A] text-white placeholder-white/40"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFBE1A]/50 focus:border-[#FFBE1A] text-white placeholder-white/40"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-white mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFBE1A]/50 focus:border-[#FFBE1A] text-white placeholder-white/40"
                    placeholder="How can we help?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFBE1A]/50 focus:border-[#FFBE1A] text-white placeholder-white/40"
                    placeholder="Your message..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-[#FFBE1A] text-black font-medium rounded-lg hover:bg-[#FFBE1A]/90 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <FaqItem key={index} {...faq} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-4">
              5000+ makers built AI tools,<br />
              SaaS, and more
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Testimonial 1 */}
            <div className="bg-[#111111] rounded-xl p-6 border border-white/5">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-medium">
                  SC
                </div>
                <div>
                  <h3 className="text-white font-medium">Sarah Chen</h3>
                  <p className="text-sm text-white/60">CTO at TechStart</p>
                </div>
              </div>
              <p className="text-white/80 mb-6">
                This toolkit saved us months of development time. We launched our MVP in just 2 weeks!
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-2xl font-bold text-white">3 months</div>
                  <div className="text-sm text-white/60">Time Saved</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#4ADE80]">300%</div>
                  <div className="text-sm text-white/60">ROI</div>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-[#111111] rounded-xl p-6 border border-white/5">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-medium">
                  MJ
                </div>
                <div>
                  <h3 className="text-white font-medium">Mike Johnson</h3>
                  <p className="text-sm text-white/60">Lead Developer</p>
                </div>
              </div>
              <p className="text-white/80 mb-6">
                The code quality is exceptional. It's like having a senior developer on the team.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-2xl font-bold text-white">50+</div>
                  <div className="text-sm text-white/60">Components</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#4ADE80]">100%</div>
                  <div className="text-sm text-white/60">TypeScript</div>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-[#111111] rounded-xl p-6 border border-white/5">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-white font-medium">
                  LP
                </div>
                <div>
                  <h3 className="text-white font-medium">Lisa Park</h3>
                  <p className="text-sm text-white/60">Founder at AppLabs</p>
                </div>
              </div>
              <p className="text-white/80 mb-6">
                Best investment we made for our startup. The support is amazing too!
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-2xl font-bold text-white">24/7</div>
                  <div className="text-sm text-white/60">Support</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#4ADE80]">95%</div>
                  <div className="text-sm text-white/60">Satisfaction</div>
                </div>
              </div>
            </div>
          </div>

          {/* Social Proof */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center bg-white/5 px-4 py-2 rounded-full">
              <div className="flex -space-x-2 mr-3">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-[#111111] bg-gradient-to-br from-purple-500 to-pink-500"
                    style={{ transform: `translateX(${i * -4}px)` }}
                  />
                ))}
              </div>
              <div className="text-white/60 text-sm">
                Join <span className="text-white font-medium">5,000+</span> makers
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-4 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold text-white mb-4">Product</h3>
              <ul className="space-y-2">
                <li><Link href="/features" className="text-white/70 hover:text-white">Features</Link></li>
                <li><Link href="/pricing" className="text-white/70 hover:text-white">Pricing</Link></li>
                <li><Link href="/docs" className="text-white/70 hover:text-white">Documentation</Link></li>
                <li><Link href="/changelog" className="text-white/70 hover:text-white">Changelog</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">Company</h3>
              <ul className="space-y-2">
                <li><Link href="/about" className="text-white/70 hover:text-white">About</Link></li>
                <li><Link href="/blog" className="text-white/70 hover:text-white">Blog</Link></li>
                <li><Link href="/careers" className="text-white/70 hover:text-white">Careers</Link></li>
                <li><Link href="/contact" className="text-white/70 hover:text-white">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><Link href="/community" className="text-white/70 hover:text-white">Community</Link></li>
                <li><Link href="/help" className="text-white/70 hover:text-white">Help Center</Link></li>
                <li><Link href="/status" className="text-white/70 hover:text-white">Status</Link></li>
                <li><Link href="/terms" className="text-white/70 hover:text-white">Terms of Service</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">Connect</h3>
              <ul className="space-y-2">
                <li><Link href="https://twitter.com" className="text-white/70 hover:text-white">Twitter</Link></li>
                <li><Link href="https://github.com/zainulabedeen123/best-saas-kit" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white">GitHub</Link></li>
                <li><Link href="https://discord.com" className="text-white/70 hover:text-white">Discord</Link></li>
                <li><Link href="/newsletter" className="text-white/70 hover:text-white">Newsletter</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
