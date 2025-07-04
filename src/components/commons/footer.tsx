import { Github, Linkedin, Twitter, Youtube } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-white dark:bg-black border-t border-black/10 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo and Description */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-black dark:text-white">CRMFlow</h2>
            </div>
            <p className="text-black/70 dark:text-white/70 text-sm leading-relaxed max-w-xs">
              We're bringing the personal touch back to customer interactions at scale
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-black/50 hover:text-black dark:text-white/50 dark:hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="text-black/50 hover:text-black dark:text-white/50 dark:hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="text-black/50 hover:text-black dark:text-white/50 dark:hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="text-black/50 hover:text-black dark:text-white/50 dark:hover:text-white transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div className="space-y-6">
            <h3 className="text-sm font-medium text-black/90 dark:text-white/90 uppercase tracking-wide">
              Product
            </h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-sm text-black/70 hover:text-black dark:text-white/70 dark:hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-black/70 hover:text-black dark:text-white/70 dark:hover:text-white transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-black/70 hover:text-black dark:text-white/70 dark:hover:text-white transition-colors">
                  Integrations
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-black/70 hover:text-black dark:text-white/70 dark:hover:text-white transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-black/70 hover:text-black dark:text-white/70 dark:hover:text-white transition-colors">
                  API
                </a>
              </li>
            </ul>
          </div>

          {/* Resources Links */}
          <div className="space-y-6">
            <h3 className="text-sm font-medium text-black/90 dark:text-white/90 uppercase tracking-wide">
              Resources
            </h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-sm text-black/70 hover:text-black dark:text-white/70 dark:hover:text-white transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-black/70 hover:text-black dark:text-white/70 dark:hover:text-white transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-black/70 hover:text-black dark:text-white/70 dark:hover:text-white transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-black/70 hover:text-black dark:text-white/70 dark:hover:text-white transition-colors">
                  Community ↗
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-black/70 hover:text-black dark:text-white/70 dark:hover:text-white transition-colors">
                  Support
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-black/70 hover:text-black dark:text-white/70 dark:hover:text-white transition-colors">
                  Status
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div className="space-y-6">
            <h3 className="text-sm font-medium text-black/90 dark:text-white/90 uppercase tracking-wide">
              Legal
            </h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-sm text-black/70 hover:text-black dark:text-white/70 dark:hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-black/70 hover:text-black dark:text-white/70 dark:hover:text-white transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-black/70 hover:text-black dark:text-white/70 dark:hover:text-white transition-colors">
                  Cookie Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-black/70 hover:text-black dark:text-white/70 dark:hover:text-white transition-colors">
                  GDPR
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-black/10 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center">
            <div className="text-xs text-black/60 dark:text-white/60">
              © 2025 CRMFlow Inc
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
