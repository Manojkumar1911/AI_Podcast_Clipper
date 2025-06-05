import { Check, Zap } from "lucide-react";
import { Button } from "~/components/ui/button";

const plans = [
  {
    name: "Starter",
    price: "$19",
    credits: "50 credits",
    description: "Perfect for trying out viral content creation",
    features: [
      "50 AI-generated clips",
      "Basic transcription",
      "Standard quality exports",
      "Email support",
      "TikTok & YouTube formats"
    ],
    popular: false,
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    name: "Creator",
    price: "$49",
    credits: "150 credits",
    description: "For content creators scaling their reach",
    features: [
      "150 AI-generated clips",
      "Premium transcription",
      "4K quality exports",
      "Priority support",
      "All platform formats",
      "Custom branding",
      "Advanced AI detection"
    ],
    popular: true,
    gradient: "from-purple-500 to-pink-500"
  },
  {
    name: "Studio",
    price: "$99",
    credits: "400 credits",
    description: "For agencies and professional creators",
    features: [
      "400 AI-generated clips",
      "Enterprise transcription",
      "8K quality exports",
      "24/7 priority support",
      "White-label solution",
      "API access",
      "Bulk processing",
      "Custom AI training"
    ],
    popular: false,
    gradient: "from-indigo-500 to-purple-500"
  }
];

export const Pricing = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/20"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Simple Credit Pricing
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Pay only for what you use. Each credit generates one viral-ready clip.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative group ${plan.popular ? 'md:scale-105' : ''}`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                  <div className={`bg-gradient-to-r ${plan.gradient} text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2`}>
                    <Zap className="w-4 h-4" />
                    Most Popular
                  </div>
                </div>
              )}

              {/* Card */}
              <div className={`relative p-8 bg-gray-800/50 border-2 ${plan.popular ? 'border-purple-500/50' : 'border-gray-700/50'} rounded-3xl backdrop-blur-sm transition-all duration-500 hover:scale-105 group-hover:bg-gray-800/70`}>
                {/* Background Glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${plan.gradient} rounded-3xl blur opacity-0 group-hover:opacity-10 transition-opacity duration-500 -z-10`}></div>

                {/* Header */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-5xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-2">/ month</span>
                  </div>
                  <div className={`inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r ${plan.gradient} text-white text-sm font-medium`}>
                    {plan.credits}
                  </div>
                  <p className="text-gray-400 mt-4 text-sm">{plan.description}</p>
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className={`w-5 h-5 rounded-full bg-gradient-to-r ${plan.gradient} flex items-center justify-center flex-shrink-0`}>
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button 
                  className={`w-full py-4 rounded-xl font-semibold text-white transition-all duration-300 transform hover:scale-105 ${
                    plan.popular 
                      ? `bg-gradient-to-r ${plan.gradient} hover:shadow-lg hover:shadow-purple-500/25` 
                      : 'bg-gray-700 hover:bg-gray-600 border border-gray-600'
                  }`}
                >
                  Get Started
                  {plan.popular && <Zap className="w-4 h-4 ml-2" />}
                </Button>

                {/* Stripe Icon */}
                <div className="flex items-center justify-center mt-4 gap-2 text-gray-500 text-xs">
                  <div className="w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded"></div>
                  <span>Powered by Stripe</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-400 mb-4">Need more credits? Contact us for enterprise pricing.</p>
          <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800">
            Contact Sales
          </Button>
        </div>
      </div>
    </section>
  );
};
