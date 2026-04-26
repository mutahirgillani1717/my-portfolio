"use client";

import { useState } from "react";

export default function Home() {
  const [activeFilter, setActiveFilter] = useState("All");

  const categories = ["All", "Artificial Intelligence", "Systems Engineering", "Core CS"];

  const projects = [
    { id: "XP-01", title: "Archimedes RAG", categories: ["Artificial Intelligence"], tag: "AI / VECTOR_MATH", desc: "Hybrid retrieval engine with custom re-rankers for zero-shot domain adaptation. Optimizing LLM accuracy on massive datasets." },
    { id: "XP-02", title: "Titan Vision", categories: ["Artificial Intelligence", "Systems Engineering"], tag: "DL / CUDA", desc: "Computer Vision pipeline for high-speed object tracking. Custom YOLOv10 optimization for real-time edge hardware." },
    { id: "XP-03", title: "Spectre MLOps", categories: ["Systems Engineering", "Artificial Intelligence"], tag: "OPS / INFRA", desc: "Production-grade model observability. Automated drift detection and retraining triggers for large-scale AI deployments." },
    { id: "XP-04", title: "Deep-Q Router", categories: ["Artificial Intelligence"], tag: "RL / OPTIMIZATION", desc: "Reinforcement Learning for autonomous logistics. Pathfinding optimization using Deep-Q Networks and Markov decision logic." },
    { id: "XP-05", title: "Vigilant Prime", categories: ["Systems Engineering"], tag: "IOT / EMBEDDED", desc: "Safety-critical firmware for motorcycles. On-device accident detection utilizing quantized neural networks." },
    { id: "XP-06", title: "Sentinel Shield", categories: ["Core CS"], tag: "SEC / ALGORITHMS", desc: "Algorithmic network vulnerability mapper. Custom scanning kernels for real-time threat correlation." },
    { id: "XP-07", title: "NeuralNexus", categories: ["Artificial Intelligence"], tag: "NLP / TRANSFORMERS", desc: "Multi-modal embedding engine scaling document intelligence across distributed transformer nodes." },
    { id: "XP-08", title: "AlphaForecast", categories: ["Artificial Intelligence"], tag: "ML / DATA_SCIENCE", desc: "LSTM-GRU hybrid for financial time-series prediction. Advanced feature engineering on high-frequency market data." },
    { id: "XP-09", title: "OptiGraph GNN", categories: ["Artificial Intelligence", "Core CS"], tag: "AI / GRAPH_NETS", desc: "Relational data modeling via Graph Neural Networks. Optimized subgraph sampling for fraud graph analysis." },
    { id: "XP-10", title: "SecureCore OOP", categories: ["Core CS"], tag: "CS / ARCHITECTURE", desc: "High-integrity cryptographic library built on strict SOLID principles, ensuring memory-safe data protection modules." },
    { id: "XP-11", title: "SentimentFlow", categories: ["Artificial Intelligence"], tag: "NLP / DL", desc: "Real-time BERT-based sentiment stream processor. Optimized for high-throughput social media auditing." },
    { id: "XP-12", title: "VisionCV Engine", categories: ["Artificial Intelligence"], tag: "CV / PRODUCTION", desc: "Industrial object tracking system scaled for 4k/60fps streams. Multi-class segmentation for industrial safety compliance." },
  ];

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(p => p.categories.includes(activeFilter));

  return (
    <main className="min-h-screen bg-[#F4F7F9] text-slate-600 font-sans antialiased selection:bg-blue-200 selection:text-blue-900">
      
      {/* 1. HEADER */}
      <nav className="fixed top-0 w-full z-50 bg-[#F4F7F9]/80 backdrop-blur-md border-b border-slate-200/60 shadow-sm">
        <div className="max-w-[1400px] mx-auto px-8 py-5 flex justify-between items-center text-xs tracking-widest uppercase font-medium">
          <div className="flex gap-8 items-center">
            <span className="text-slate-800 font-black tracking-tight text-lg normal-case">
              Syed Mutahir Hussain
            </span>
            <span className="hidden md:flex items-center gap-2 text-blue-700 bg-blue-100/50 px-3 py-1 rounded-full border border-blue-200/50">
              <span className="h-2 w-2 bg-blue-500 rounded-full animate-pulse"></span> 
              Available for Roles
            </span>
          </div>
          <div className="flex gap-6 items-center text-slate-500">
            <a href="mailto:mutahirgillani1717@gmail.com" className="hover:text-blue-600 transition-colors lowercase font-mono text-[11px]">
              mutahirgillani1717@gmail.com
            </a>
            <span className="text-slate-700 font-semibold bg-white/60 px-3 py-1 rounded-md border border-slate-200 shadow-sm">
              +92 343 5431312
            </span>
          </div>
        </div>
      </nav>

      <div className="max-w-[1400px] mx-auto px-8 pt-40 pb-20">
        
        {/* 2. HERO & PILLARS */}
        <section className="mb-32 grid lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-7">
            <h2 className="text-blue-600 text-sm font-bold uppercase tracking-widest mb-6">Software & AI Engineer</h2>
            <h1 className="text-slate-800 text-5xl md:text-7xl font-black tracking-tighter leading-[1.05] mb-8">
              Engineering robust intelligence for modern systems.
            </h1>
            <p className="text-xl md:text-2xl text-slate-500 font-light leading-relaxed mb-10">
              I am a Final-year Computer Science student at <span className="text-slate-700 font-medium">UET Taxila</span>, specializing at the intersection of Applied AI and Core Software Architecture. I build scalable, algorithmically efficient solutions rooted in a strong theoretical foundation.
            </p>
            <div className="flex gap-4">
              <a href="#projects" className="bg-slate-800 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-600 transition-all shadow-md text-center">
                View My Work
              </a>
              <a href="#contact" className="bg-white text-slate-700 px-8 py-4 rounded-lg font-bold border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all shadow-sm text-center">
                Contact Me
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 bg-white rounded-2xl p-8 border border-slate-200 shadow-sm flex flex-col gap-8">
            <div>
              <h3 className="text-[11px] font-black uppercase tracking-[0.2em] text-blue-600 mb-5 flex items-center gap-3">
                <span className="w-1.5 h-4 rounded-full bg-blue-500"></span>
                Foundation Pillars
              </h3>
              <ul className="space-y-2">
                {[
                  { label: 'Data Structures & Algorithms', value: 'Expert' },
                  { label: 'Object-Oriented Design', value: 'Expert' },
                  { label: 'Systems Software', value: 'Intermediate' },
                  { label: 'Database Optimization', value: 'Expert' },
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center justify-between p-3 rounded-lg hover:bg-slate-50 border border-transparent hover:border-slate-100 transition-colors">
                    <span className="text-sm font-semibold text-slate-700">{item.label}</span>
                    <span className={`text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 rounded-md ${item.value === 'Expert' ? 'bg-blue-50 text-blue-600 border border-blue-100' : 'bg-slate-100 text-slate-500 border border-slate-200'}`}>
                      {item.value}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-[11px] font-black uppercase tracking-[0.2em] text-blue-600 mb-5 flex items-center gap-3">
                <span className="w-1.5 h-4 rounded-full bg-blue-500"></span>
                Intelligence Pillars
              </h3>
              <ul className="space-y-2">
                {[
                  { label: 'Deep Learning (PyTorch)', value: 'Expert' },
                  { label: 'RAG & Vector Ops (Pinecone)', value: 'Expert' },
                  { label: 'Computer Vision (YOLO)', value: 'Intermediate' },
                  { label: 'Statistical ML (XGBoost)', value: 'Expert' },
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center justify-between p-3 rounded-lg hover:bg-slate-50 border border-transparent hover:border-slate-100 transition-colors">
                    <span className="text-sm font-semibold text-slate-700">{item.label}</span>
                    <span className={`text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 rounded-md ${item.value === 'Expert' ? 'bg-blue-50 text-blue-600 border border-blue-100' : 'bg-slate-100 text-slate-500 border border-slate-200'}`}>
                      {item.value}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 3. PROFESSIONAL EXPERIENCE */}
        <section className="mb-32">
          <div className="mb-12">
            <h3 className="text-slate-800 text-3xl font-black tracking-tight mb-2">Professional Experience</h3>
            <p className="text-slate-500">Practical engineering roles and consulting work.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Experience Card 1 */}
            <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm border-l-4 border-l-blue-600">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h4 className="text-slate-800 text-xl font-bold tracking-tight">Freelance Data Science & AI Consultant</h4>
                  <p className="text-blue-600 text-sm font-semibold">Independent</p>
                </div>
                <span className="text-xs font-mono text-slate-400 bg-slate-50 px-3 py-1 rounded-md border border-slate-100">2023 – Present</span>
              </div>
              <ul className="space-y-3 text-sm text-slate-500 leading-relaxed list-disc list-outside ml-4">
                <li>Architect and deploy end-to-end Machine Learning pipelines and Generative AI solutions for diverse international clients.</li>
                <li>Develop automated Natural Language Processing workflows for large-scale data extraction and sentiment analysis.</li>
                <li>Provide technical consulting on model selection, hyperparameter tuning, and deployment architectures.</li>
              </ul>
            </div>

            {/* Experience Card 2 */}
            <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm border-l-4 border-l-slate-300 hover:border-l-blue-400 transition-colors">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h4 className="text-slate-800 text-xl font-bold tracking-tight">Cinematic Animator Intern</h4>
                  <p className="text-slate-600 text-sm font-semibold">Unity Development</p>
                </div>
                <span className="text-xs font-mono text-slate-400 bg-slate-50 px-3 py-1 rounded-md border border-slate-100">2024</span>
              </div>
              <ul className="space-y-3 text-sm text-slate-500 leading-relaxed list-disc list-outside ml-4">
                <li>Engineered custom animation states and programmatic scene transitions within the Unity Engine.</li>
                <li>Optimized rendering pipelines, maximizing framerates and ensuring stable performance across diverse hardware constraints.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 4. INTERACTIVE PORTFOLIO (PROJECTS) */}
        <section id="projects" className="mb-32">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <h3 className="text-slate-800 text-3xl font-black tracking-tight mb-2">Engineering Portfolio</h3>
              <p className="text-slate-500">Explore my selected projects across different disciplines.</p>
            </div>
            <div className="flex flex-wrap gap-2 mt-6 md:mt-0">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${activeFilter === category ? "bg-blue-600 text-white shadow-md border-transparent" : "bg-white text-slate-500 border border-slate-200 hover:border-slate-300 hover:text-slate-700"}`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((p) => (
              <div key={p.id} className="bg-white p-8 rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 group flex flex-col justify-between min-h-[280px]">
                <div>
                  <div className="text-xs font-mono text-blue-600 font-bold mb-4">{p.tag}</div>
                  <h4 className="text-slate-800 text-xl font-bold mb-3 tracking-tight group-hover:text-blue-600 transition-colors">{p.title}</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">{p.desc}</p>
                </div>
                <div className="mt-8 pt-4 border-t border-slate-100 flex justify-between items-center">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{p.id}</span>
                  <a href="#" className="text-blue-600 text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity hover:underline">View Source &rarr;</a>
                </div>
              </div>
            ))}
          </div>
          {filteredProjects.length === 0 && (
            <div className="text-center py-20 text-slate-400 font-medium">No projects found in this category.</div>
          )}
        </section>

        {/* 5. EDUCATION & ACCESS PROTOCOL */}
        <section id="contact" className="grid lg:grid-cols-12 gap-12 border-t border-slate-200 pt-20">
          
          {/* Education Breakdown */}
          <div className="lg:col-span-8">
            <h3 className="text-slate-800 text-3xl font-black tracking-tight mb-8">Academic Credentials</h3>
            <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm">
              <div className="flex justify-between items-end mb-6 border-b border-slate-100 pb-6">
                <div>
                  <h4 className="text-2xl font-bold text-slate-800 tracking-tight">University of Engineering and Technology (UET), Taxila</h4>
                  <p className="text-blue-600 font-semibold mt-1">Bachelor of Science in Computer Science</p>
                </div>
                <div className="text-right">
                  <div className="text-xs font-mono text-slate-500 uppercase tracking-widest bg-slate-50 px-3 py-1 rounded-md border border-slate-100 mb-1">Class of 2026</div>
                  <div className="text-sm font-semibold text-slate-700">8th Semester</div>
                </div>
              </div>
              <div>
                <p className="text-sm font-bold text-slate-700 mb-3 uppercase tracking-wider">Core Coursework</p>
                <div className="flex flex-wrap gap-2">
                  {["Advanced Data Structures & Algorithms", "Object-Oriented Programming", "Theory of Automata", "Computer Architecture", "Operating Systems", "Digital Logic Design", "Artificial Intelligence", "Information Security"].map((course, i) => (
                    <span key={i} className="text-xs text-slate-600 bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-md">{course}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact & Resume Download */}
          <div className="lg:col-span-4 space-y-6">
            <h3 className="text-slate-800 text-3xl font-black tracking-tight mb-8">Connect</h3>
            <div className="bg-white rounded-xl p-8 border border-slate-200 shadow-sm">
              <div className="text-xs font-mono uppercase space-y-5 mb-8">
                <div className="flex justify-between border-b border-slate-100 pb-2">
                  <span className="text-slate-500">Identity</span> 
                  <span className="text-slate-800 font-black tracking-tighter uppercase text-right leading-none">Syed Mutahir Hussain</span>
                </div>
                <div className="flex justify-between border-b border-slate-100 pb-2 overflow-hidden">
                  <span className="text-slate-500">Email</span> 
                  <a href="mailto:mutahirgillani1717@gmail.com" className="text-blue-600 font-bold lowercase truncate ml-2 hover:underline">mutahirgillani1717@gmail.com</a>
                </div>
                <div className="flex justify-between border-b border-slate-100 pb-2">
                  <span className="text-slate-500">Phone</span> 
                  <span className="text-slate-800 font-bold tracking-widest">+92 343 5431312</span>
                </div>
                <div className="flex justify-between border-b border-slate-100 pb-2">
                  <span className="text-slate-500">Location</span> 
                  <span className="text-slate-800 font-bold tracking-widest">Taxila, PK</span>
                </div>
              </div>
              <a 
                href="/Syed_Mutahir_Hussain_Resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block w-full py-4 bg-blue-600 text-white font-black text-[11px] tracking-widest hover:bg-slate-900 transition-all shadow-md uppercase text-center rounded-lg"
              >
                Download PDF Resume
              </a>
            </div>
          </div>
        </section>

      </div>

      {/* 6. FOOTER */}
      <footer className="border-t border-slate-200 bg-white py-12 mt-20">
        <div className="max-w-[1400px] mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-slate-800 font-bold tracking-tight">Syed Mutahir Hussain</div>
          <div className="text-slate-500 text-sm">
            BSc Computer Science • UET Taxila • &copy; 2026
          </div>
        </div>
      </footer>
    </main>
  );
}