import React from 'react';
import { LineChart as ChartLine, ArrowRight, BarChart3, Cpu, Lock, Users } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-dark">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-dark/80 backdrop-blur-lg border-b border-white/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <ChartLine className="w-8 h-8 text-primary" />
              <span className="text-xl font-bold">LuxTrade</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-300 hover:text-white transition">Products</a>
              <a href="#" className="text-gray-300 hover:text-white transition">Features</a>
              <a href="#" className="text-gray-300 hover:text-white transition">Pricing</a>
              <button className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-full transition">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 hero-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Advanced Trading <span className="gradient-text">Algorithms</span>
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              Elevate your trading with institutional-grade algorithms and advanced technical analysis tools
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full flex items-center justify-center gap-2 transition">
                Start Trading <ArrowRight className="w-5 h-5" />
              </button>
              <button className="w-full sm:w-auto border border-white/20 hover:border-white/40 px-8 py-3 rounded-full transition">
                View Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card-gradient p-8 rounded-2xl border border-white/10">
              <BarChart3 className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-xl font-semibold mb-4">Advanced Analytics</h3>
              <p className="text-gray-400">Real-time market analysis with institutional-grade indicators</p>
            </div>
            <div className="card-gradient p-8 rounded-2xl border border-white/10">
              <Cpu className="w-12 h-12 text-secondary mb-6" />
              <h3 className="text-xl font-semibold mb-4">AI-Powered Signals</h3>
              <p className="text-gray-400">Machine learning algorithms to identify trading opportunities</p>
            </div>
            <div className="card-gradient p-8 rounded-2xl border border-white/10">
              <Lock className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-xl font-semibold mb-4">Secure Trading</h3>
              <p className="text-gray-400">Enterprise-grade security for your trading operations</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold gradient-text mb-2">$2B+</div>
              <div className="text-gray-400">Trading Volume</div>
            </div>
            <div>
              <div className="text-4xl font-bold gradient-text mb-2">50K+</div>
              <div className="text-gray-400">Active Traders</div>
            </div>
            <div>
              <div className="text-4xl font-bold gradient-text mb-2">99.9%</div>
              <div className="text-gray-400">Uptime</div>
            </div>
            <div>
              <div className="text-4xl font-bold gradient-text mb-2">24/7</div>
              <div className="text-gray-400">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="card-gradient rounded-3xl p-12 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to start trading?</h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Join thousands of traders who are already using LuxTrade to elevate their trading strategy
            </p>
            <button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full transition">
              Get Started Now
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <ChartLine className="w-6 h-6 text-primary" />
              <span className="text-lg font-bold">LuxTrade</span>
            </div>
            <div className="flex items-center space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition">Terms</a>
              <a href="#" className="text-gray-400 hover:text-white transition">Privacy</a>
              <a href="#" className="text-gray-400 hover:text-white transition">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;