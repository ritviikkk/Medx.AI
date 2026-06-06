export default function MedxaiLandingPage() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative font-sans">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/20 blur-[120px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/20 blur-[120px] rounded-full animate-pulse"></div>

        {/* Floating Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse"></div>
      </div>

    
   {/* Navbar */}
<nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-black/30 border-b border-white/10 h-10">
 <div className="w-full px-3 py-1 flex justify-between items-center h-10">
    {/* Logo */}
    <h1 className="text-sm font-semibold tracking-wide bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text">
      Medx.AI
    </h1>

    {/* Nav Links */}
    <div className="hidden md:flex gap-3 text-xs text-gray-300 font-medium">
      <a href="#features" className="hover:text-cyan-400 transition">
        Features
      </a>

      <a href="#about" className="hover:text-cyan-400 transition">
        About
      </a>

      <a href="#download" className="hover:text-cyan-400 transition">
        Download
      </a>

      <a href="#contact" className="hover:text-cyan-400 transition">
        Contact
      </a>
    </div>

    {/* Login Button */}
    <button className="px-2 py-0.5 text-xs rounded-md bg-gradient-to-r from-cyan-500 to-purple-600 hover:scale-105 transition-transform shadow-lg shadow-cyan-500/30">
      Login
    </button>

  </div>
</nav>
      {/* Hero Section */}
    <section className="relative z-10 min-h-[80vh] flex items-center justify-center px-6 pt-12">
     <div className="w-full grid md:grid-cols-2 gap-12 items-center px-6">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 backdrop-blur-lg">
              <span className="w-3 h-3 rounded-full bg-green-400 animate-ping"></span>
              <span className="text-sm text-cyan-300">AI Powered Healthcare Platform</span>
            </div>

        <h1 className="text-4xl md:text-6xl font-black leading-tight">
              Future of <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 text-transparent bg-clip-text">
                Smart Healthcare
              </span>
            </h1>

            <p className="text-gray-300 text-lg max-w-xl leading-relaxed">
              Medx.AI helps users track health, get AI based medical insights,
              manage fitness, and connect with smart healthcare technology.
              One platform. One AI. Complete healthcare ecosystem.
            </p>

            <div className="flex flex-wrap gap-5">
              <div className="relative inline-block group">
              <button className="relative px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 font-semibold hover:scale-105 transition-all duration-700 shadow-2xl shadow-cyan-500/40 overflow-hidden z-10">
                <span className="relative z-10">Download App</span>

                <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition duration-700"></div>
              </button>

              {/* Floating Coming Soon Cloud */}
              <div className="absolute -right-72 top-1/2 -translate-y-1/2 opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-[1800ms] pointer-events-none z-30">
                <div className="relative animate-bounce [animation-duration:4s]">
                  <div className="relative px-10 py-7 rounded-[50px] bg-gradient-to-br from-pink-400 via-purple-500 to-cyan-500 shadow-[0_0_60px_rgba(168,85,247,0.7)] border border-white/20 overflow-hidden">

                    <div className="absolute inset-0 bg-white/20 blur-2xl"></div>

                    {/* Mini Floating Stars */}
                    <div className="absolute top-3 left-5 text-yellow-300 animate-pulse text-xl">✨</div>
                    <div className="absolute bottom-4 right-6 text-pink-200 animate-ping text-lg">⭐</div>
                    <div className="absolute top-5 right-10 text-cyan-200 animate-bounce text-sm">💫</div>

                    {/* Cloud Shape */}
                    <div className="absolute -top-8 left-10 w-24 h-24 bg-pink-300/70 rounded-full blur-md"></div>
                    <div className="absolute -top-6 right-10 w-20 h-20 bg-cyan-300/70 rounded-full blur-md"></div>
                    <div className="absolute top-2 left-1/2 -translate-x-1/2 w-28 h-28 bg-purple-300/60 rounded-full blur-md"></div>

                    <div className="relative z-10 text-center">
                      <h2 className="text-4xl font-black tracking-wide text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.9)]">
                        COMING SOON
                      </h2>

                      <div className="mt-4 inline-block px-5 py-2 rounded-full bg-black/30 backdrop-blur-xl border border-white/20">
                        <p className="text-lg font-bold text-yellow-200 tracking-wider animate-pulse">
                          🚀 STAY TUNED 🚀
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

              <button className="px-8 py-4 rounded-2xl border border-white/20 bg-white/5 backdrop-blur-lg hover:bg-white/10 transition">
                Explore Features
              </button>
            </div>

            {/* Stats */}
            {/* Ad Banner Top */}
            <div className="w-full mb-8 rounded-[35px] border border-yellow-400/20 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 backdrop-blur-2xl overflow-hidden relative group hover:scale-[1.02] transition-all duration-700">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition duration-700"></div>

              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between px-8 py-6 gap-4">
                <div>
                  <h3 className="text-2xl font-black text-yellow-300 tracking-wide">
                    📢 YOUR AD HERE
                  </h3>
                  <p className="text-gray-300 mt-2">
                    Place Google Ads / Sponsorship Banner Here
                  </p>
                </div>

                <div className="px-6 py-3 rounded-2xl bg-yellow-400/20 border border-yellow-300/30 text-yellow-200 font-bold animate-pulse">
                  AD SPACE
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-5 pt-8">
              <div className="p-5 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl text-center hover:scale-105 transition-transform">
                <h2 className="text-3xl font-bold text-cyan-400">50K+</h2>
                <p className="text-gray-400 text-sm mt-2">Users</p>
              </div>

              <div className="p-5 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl text-center hover:scale-105 transition-transform">
                <h2 className="text-3xl font-bold text-purple-400">AI</h2>
                <p className="text-gray-400 text-sm mt-2">Powered</p>
              </div>

              <div className="p-5 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl text-center hover:scale-105 transition-transform">
                <h2 className="text-3xl font-bold text-green-400">24/7</h2>
                <p className="text-gray-400 text-sm mt-2">Support</p>
              </div>
            </div>
          </div>

          {/* Right Side 3D UI */}
         <div className="relative flex items-center justify-center md:justify-end">
            <div className="relative w-[350px] h-[650px] rounded-[50px] border border-white/20 bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-2xl shadow-2xl shadow-cyan-500/30 overflow-hidden rotate-6 hover:rotate-0 transition-transform duration-500">

              {/* Top Glow */}
              <div className="absolute top-0 left-0 w-full h-32 bg-cyan-500/20 blur-3xl"></div>

              {/* App UI */}
              <div className="p-6 space-y-6 relative z-10">
                <div className="flex justify-between items-center">
                  <div>
                    <h2 className="text-2xl font-bold">Medx.AI</h2>
                    <p className="text-gray-400 text-sm">Your Health Assistant</p>
                  </div>

                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-500"></div>
                </div>

                <div className="p-5 rounded-3xl bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-white/10 backdrop-blur-lg">
                  <p className="text-gray-300 text-sm">AI Health Score</p>
                  <h1 className="text-5xl font-black mt-3">92%</h1>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-5 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-lg">
                    <p className="text-gray-400 text-sm">Heart Rate</p>
                    <h2 className="text-3xl font-bold mt-2 text-red-400">78</h2>
                  </div>

                  <div className="p-5 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-lg">
                    <p className="text-gray-400 text-sm">Calories</p>
                    <h2 className="text-3xl font-bold mt-2 text-green-400">1320</h2>
                  </div>
                </div>

                <div className="p-5 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-lg space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Sleep Tracking</span>
                    <span className="text-cyan-400">8.2h</span>
                  </div>

                  <div className="w-full h-3 rounded-full bg-white/10 overflow-hidden">
                    <div className="w-[80%] h-full bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full animate-pulse"></div>
                  </div>
                </div>

                <button className="w-full py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-600 font-bold shadow-lg shadow-purple-500/30 hover:scale-105 transition-transform">
                  Start AI Analysis
                </button>
              </div>
            </div>

            {/* Floating Cards */}
            <div className="absolute -left-10 top-20 p-5 rounded-3xl bg-white/10 border border-white/10 backdrop-blur-2xl animate-bounce [animation-duration:3s] shadow-xl shadow-cyan-500/20">
              <p className="text-sm text-gray-300">AI Suggestions</p>
              <h3 className="text-xl font-bold mt-2">Healthy</h3>
            </div>

            <div className="absolute -right-10 bottom-24 p-5 rounded-3xl bg-white/10 border border-white/10 backdrop-blur-2xl animate-pulse shadow-xl shadow-purple-500/20 hover:scale-105 transition-transform duration-500">
              <p className="text-sm text-gray-300">Daily Steps</p>
              <h3 className="text-xl font-bold mt-2">10,240</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="relative z-10 py-28 px-6">
        <div className="w-full text-center">
          <h2 className="text-5xl font-black mb-6">
            Powerful <span className="text-cyan-400">Features</span>
          </h2>

          <p className="text-gray-400 max-w-2xl text-lg">
            Advanced AI healthcare ecosystem with women wellness tracking, AI symptom analysis, emergency alerts, mental wellness monitoring, smart fitness analytics, and futuristic healthcare technology.
          </p>

          <div className="grid md:grid-cols-4 gap-8 mt-20">

            <div className="group p-8 rounded-[35px] bg-white/5 border border-white/10 backdrop-blur-2xl hover:-translate-y-3 transition-all duration-1000 hover:shadow-2xl hover:shadow-cyan-500/20">
              <div className="w-20 h-20 rounded-3xl bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center text-3xl   mb-6 group-hover:rotate-12 transition-transform">
                🧠
              </div>
              <h3 className="text-2xl font-bold mb-4">AI Diagnosis</h3>
              <p className="text-gray-400 leading-relaxed">
                Smart AI powered health analysis system for instant insights.
              </p>
            </div>

            <div className="group p-8 rounded-[35px] bg-white/5 border border-white/10 backdrop-blur-2xl hover:-translate-y-3 transition-all duration-1000 hover:shadow-2xl hover:shadow-purple-500/20">
              <div className="w-20 h-20 rounded-3xl bg-gradient-to-r from-purple-500 to-pink-600 flex items-center justify-center text-3xl   mb-6 group-hover:rotate-12 transition-transform">
                ❤️
              </div>
              <h3 className="text-2xl font-bold mb-4">Health Tracking</h3>
              <p className="text-gray-400 leading-relaxed">
                Monitor sleep, heartbeat, calories, and daily activities.
              </p>
            </div>

            <div className="group p-8 rounded-[35px] bg-white/5 border border-white/10 backdrop-blur-2xl hover:-translate-y-3 transition-all duration-1000 hover:shadow-2xl hover:shadow-green-500/20">
              <div className="w-20 h-20 rounded-3xl bg-gradient-to-r from-green-500 to-emerald-600 flex items-center justify-center text-3xl   mb-6 group-hover:rotate-12 transition-transform">
                📱
              </div>
              <h3 className="text-2xl font-bold mb-4">Mobile App</h3>
              <p className="text-gray-400 leading-relaxed">
                Download the Medx.AI app directly from the website.
              </p>
            </div>
                      <div className="group p-8 rounded-[35px] bg-white/5 border border-pink-500/20 backdrop-blur-2xl hover:-translate-y-3 transition-all duration-1000 hover:shadow-2xl hover:shadow-pink-500/20 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-transparent opacity-0 group-hover:opacity-100 delay-300 transition"></div>
              <div className="w-20 h-20 rounded-3xl bg-gradient-to-r from-pink-500 to-rose-600 flex items-center justify-center text-3xl   mb-6 group-hover:scale-105 transition-transform animate-pulse">
                👩
              </div>
              <h3 className="text-2xl font-bold mb-4 text-pink-300">Women Health AI</h3>
              <p className="text-gray-400 leading-relaxed">
                Smart AI powered women wellness system for period tracking, pregnancy support, hormone balance, and personalized healthcare insights.
              </p>
            </div>
          </div>

          {/* Extra AI Features */}
          {/* Premium AI Beauty & Face Scan Features */}
          <div className="grid md:grid-cols-2 gap-8 mt-14 mb-10">
            <div className="group relative p-10 rounded-[40px] bg-gradient-to-br from-pink-500/10 via-purple-500/10 to-cyan-500/10 border border-pink-400/20 backdrop-blur-3xl overflow-hidden hover:-translate-y-4 transition-all duration-1000 hover:shadow-[0_0_70px_rgba(236,72,153,0.35)]">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-1000 bg-gradient-to-br from-pink-500/10 to-transparent"></div>

              <div className="relative z-10">
                <div className="flex items-center gap-5 mb-8">
                  <div className="w-24 h-24 rounded-[30px] bg-gradient-to-r from-pink-500 to-rose-500 flex items-center justify-center text-5xl shadow-2xl shadow-pink-500/40 animate-pulse">
                    ✨
                  </div>

                  <div>
                    <h3 className="text-3xl font-black text-pink-300">
                      AI Face Scan
                    </h3>
                    <p className="text-pink-100/70 mt-2">
                      Smart Beauty & Face Analysis
                    </p>
                  </div>
                </div>

                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  Advanced AI scans your face shape, detects skin condition, acne, glow level, dark circles, and gives personalized skincare suggestions instantly.
                </p>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-white/10 border border-white/10 backdrop-blur-xl hover:scale-105 transition-transform">
                    💎 Skin Analysis
                  </div>

                  <div className="p-4 rounded-2xl bg-white/10 border border-white/10 backdrop-blur-xl hover:scale-105 transition-transform">
                    🧬 Face Shape Detection
                  </div>

                  <div className="p-4 rounded-2xl bg-white/10 border border-white/10 backdrop-blur-xl hover:scale-105 transition-transform">
                    ✨ Glow Score
                  </div>

                  <div className="p-4 rounded-2xl bg-white/10 border border-white/10 backdrop-blur-xl hover:scale-105 transition-transform">
                    🔍 Acne Detection
                  </div>
                </div>
              </div>
            </div>

            <div className="group relative p-10 rounded-[40px] bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10 border border-cyan-400/20 backdrop-blur-3xl overflow-hidden hover:-translate-y-4 transition-all duration-1000 hover:shadow-[0_0_70px_rgba(34,211,238,0.35)]">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-1000 bg-gradient-to-br from-cyan-500/10 to-transparent"></div>

              <div className="relative z-10">
                <div className="flex items-center gap-5 mb-8">
                  <div className="w-24 h-24 rounded-[30px] bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center text-5xl shadow-2xl shadow-cyan-500/40 animate-bounce [animation-duration:3s]">
                    🛍️
                  </div>

                  <div>
                    <h3 className="text-3xl font-black text-cyan-300">
                      AI Product Suggestions
                    </h3>
                    <p className="text-cyan-100/70 mt-2">
                      Personalized Smart Recommendations
                    </p>
                  </div>
                </div>

                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  Based on your skin type and AI face scan, Medx.AI recommends skincare, beauty, wellness, and healthcare products specially tailored for you.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 rounded-2xl bg-white/10 border border-white/10 backdrop-blur-xl hover:translate-x-3 transition-transform duration-500">
                    <span>🧴 Smart Skincare Products</span>
                    <span className="text-cyan-300">AI Match</span>
                  </div>

                  <div className="flex items-center justify-between p-4 rounded-2xl bg-white/10 border border-white/10 backdrop-blur-xl hover:translate-x-3 transition-transform duration-500">
                    <span>💊 Wellness Recommendations</span>
                    <span className="text-purple-300">Premium</span>
                  </div>

                  <div className="flex items-center justify-between p-4 rounded-2xl bg-white/10 border border-white/10 backdrop-blur-xl hover:translate-x-3 transition-transform duration-500">
                    <span>🌿 Personalized Routine</span>
                    <span className="text-pink-300">Custom AI</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-10">
            <div className="p-8 rounded-[35px] bg-white/5 border border-cyan-500/20 backdrop-blur-2xl hover:-translate-y-3 transition-all duration-1000 hover:shadow-cyan-500/30 hover:shadow-2xl">
              <div className="text-5xl mb-5 animate-bounce [animation-duration:3s]">🧘</div>
              <h3 className="text-2xl font-bold mb-4 text-cyan-300">Mental Wellness</h3>
              <p className="text-gray-400 leading-relaxed">
                AI mood tracking, stress analysis, meditation support, and smart mental health monitoring.
              </p>
            </div>

            <div className="p-8 rounded-[35px] bg-white/5 border border-green-500/20 backdrop-blur-2xl hover:-translate-y-3 transition-all duration-1000 hover:shadow-green-500/30 hover:shadow-2xl">
              <div className="text-5xl mb-5 animate-pulse">🚨</div>
              <h3 className="text-2xl font-bold mb-4 text-green-300">Emergency AI Alerts</h3>
              <p className="text-gray-400 leading-relaxed">
                Instant AI alerts during abnormal health conditions and emergency support system.
              </p>
            </div>

            <div className="p-8 rounded-[35px] bg-white/5 border border-purple-500/20 backdrop-blur-2xl hover:-translate-y-3 transition-all duration-1000 hover:shadow-purple-500/30 hover:shadow-2xl">
              <div className="text-5xl mb-5 animate-spin [animation-duration:5s]">🤖</div>
              <h3 className="text-2xl font-bold mb-4 text-purple-300">AI Assistant</h3>
              <p className="text-gray-400 leading-relaxed">
                Personal healthcare AI assistant for smart recommendations and symptom guidance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AI Orb Section */}
      <section className="relative z-10 py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute left-1/4 top-0 w-[400px] h-[400px] bg-cyan-500/20 rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute right-1/4 bottom-0 w-[400px] h-[400px] bg-purple-500/20 rounded-full blur-[120px] animate-pulse"></div>
        </div>

        <div className="max-w-full   grid md:grid-cols-2 gap-16 items-center relative z-10">
          <div>
            <h2 className="text-5xl md:text-6xl font-black leading-tight mb-8">
              AI That Understands <span className="bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text">Your Health</span>
            </h2>

            <p className="text-gray-300 text-lg leading-relaxed mb-10">
              Medx.AI combines artificial intelligence with healthcare innovation to create a futuristic medical ecosystem for everyone.
            </p>

            <div className="space-y-5">
              <div className="p-5 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl hover:translate-x-4 transition-transform duration-300">
                ⚡ Real Time AI Analysis
              </div>

              <div className="p-5 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl hover:translate-x-4 transition-transform duration-300">
                💖 Women Wellness Tracking
              </div>

              <div className="p-5 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl hover:translate-x-4 transition-transform duration-300">
                🧬 Future Ready Healthcare Ecosystem
              </div>
            </div>
          </div>

          <div className="relative flex items-center justify-center">
            <div className="absolute w-[450px] h-[450px] rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-[100px] animate-pulse"></div>

            <div className="absolute w-[320px] h-[320px] rounded-full border border-white/20 animate-spin [animation-duration:15s]"></div>

            <div className="absolute w-[220px] h-[220px] rounded-full border border-cyan-400/30 animate-spin [animation-duration:8s] reverse"></div>

            <div className="w-[180px] h-[180px] rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 flex items-center justify-center text-6xl font-black shadow-2xl shadow-cyan-500/40 animate-bounce [animation-duration:3s]">
              AI
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="relative z-10 py-28 px-6">
        <div className="max-w-full   rounded-[50px] p-12 border border-white/10 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-3xl text-center shadow-2xl shadow-cyan-500/20">
          <h2 className="text-5xl font-black mb-6">
            Download <span className="text-cyan-400">Medx.AI</span>
          </h2>

          <p className="text-gray-300 text-lg max-w-2xl   leading-relaxed">
            Get the latest AI powered healthcare experience directly on your mobile.
            Add your Play Store app link here.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mt-12">
            <div className="relative inline-block group">
              <button className="relative px-10 py-5 rounded-2xl bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 font-bold text-lg hover:scale-105 hover:-translate-y-2 transition-all duration-1000 shadow-[0_0_40px_rgba(168,85,247,0.6)] overflow-hidden z-10">
                <span className="relative z-10">Download From Play Store</span>

                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition duration-700"></div>
              </button>

              {/* Floating Cloud Popup */}
              <div className="absolute left-1/2 -translate-x-1/2 -top-52 opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-[1800ms] pointer-events-none z-30">
                <div className="relative animate-bounce [animation-duration:4s]">

                  <div className="relative px-10 py-7 rounded-[55px] bg-gradient-to-br from-pink-400 via-purple-500 to-cyan-500 border border-white/20 shadow-[0_0_70px_rgba(168,85,247,0.8)] overflow-hidden">

                    {/* Glow Overlay */}
                    <div className="absolute inset-0 bg-white/20 blur-2xl"></div>

                    {/* Floating Decorative Elements */}
                    <div className="absolute top-3 left-6 text-yellow-300 animate-pulse text-2xl">✨</div>
                    <div className="absolute bottom-5 right-6 text-pink-200 animate-ping text-lg">⭐</div>
                    <div className="absolute top-5 right-10 text-cyan-200 animate-bounce text-lg">💫</div>
                    <div className="absolute bottom-4 left-10 text-white/70 animate-pulse text-lg">☁️</div>

                    {/* Bubble Cloud Shapes */}
                    <div className="absolute -top-10 left-10 w-28 h-28 bg-pink-300/70 rounded-full blur-md"></div>
                    <div className="absolute -top-8 right-10 w-24 h-24 bg-cyan-300/70 rounded-full blur-md"></div>
                    <div className="absolute top-2 left-1/2 -translate-x-1/2 w-32 h-32 bg-purple-300/60 rounded-full blur-md"></div>

                    <div className="relative z-10 text-center">
                      <h2 className="text-4xl font-black tracking-wide text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.9)]">
                        COMING SOON
                      </h2>

                      <div className="mt-4 inline-block px-6 py-2 rounded-full bg-black/30 border border-white/20 backdrop-blur-xl">
                        <p className="text-lg font-black tracking-[3px] text-yellow-200 animate-pulse">
                          🚀 STAY TUNED 🚀
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <button className="px-10 py-5 rounded-2xl border border-white/20 bg-white/5 backdrop-blur-lg hover:bg-white/10 transition text-lg font-semibold">
              Visit Website
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      {/* Bottom Ad Space */}
      <section className="relative z-10 px-6 pb-20">
        <div className="max-w-full   rounded-[40px] border border-cyan-400/20 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 backdrop-blur-2xl overflow-hidden relative group hover:scale-[1.01] transition-all duration-700">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition duration-700"></div>

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between px-10 py-8 gap-5 text-center md:text-left">
            <div>
              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-pink-400 text-transparent bg-clip-text">
                🚀 PREMIUM AD SPACE
              </h2>

              <p className="text-gray-300 mt-3 text-lg">
                Run your future Google Ads, healthcare sponsorships, or affiliate promotions here.
              </p>
            </div>

            <div className="px-8 py-4 rounded-3xl bg-white/10 border border-white/20 backdrop-blur-xl text-cyan-300 font-black tracking-[3px] animate-pulse shadow-xl shadow-cyan-500/20">
              ADS AREA
            </div>
          </div>
        </div>
      </section>

      <footer id="contact" className="relative z-10 py-12 border-t border-white/10 bg-black/30 backdrop-blur-2xl">
        <div className="max-w-full   px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text">
              Medx.AI
            </h2>
            <p className="text-gray-500 mt-2">Next Generation AI Healthcare Platform</p>
          </div>

          <div className="flex gap-6 text-gray-400">
            <a href="#" className="hover:text-cyan-400 transition">Instagram</a>
            <a href="#" className="hover:text-cyan-400 transition">LinkedIn</a>
            <a href="#" className="hover:text-cyan-400 transition">GitHub</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
