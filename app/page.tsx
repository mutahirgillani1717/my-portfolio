"use client";

import { useState, useEffect, useMemo, useRef } from "react";

// =============================================================================
// I. ENTERPRISE TYPE DEFINITIONS (V6.0 - MIDNIGHT SLATE)
// =============================================================================

type SystemStatus = "STABLE" | "ACTIVE" | "MAINTENANCE" | "UPDATING" | "DEPLOYED" | "STANDBY" | "CRITICAL";

interface ProjectMetric {
  label: string;
  value: string;
  unit?: string;
  trend: "up" | "down" | "stable";
}

interface TechnicalSpecification {
  label: string;
  value: string;
}

interface Project {
  id: string;
  title: string;
  categories: string[];
  tag: string;
  version: string;
  status: SystemStatus;
  description: string;
  github: string;
  techStack: string[];
  metrics: ProjectMetric[];
  impact: string;
  deploymentDate: string;
  checksum: string;
  complexity: string;
  specs: TechnicalSpecification[];
}

// =============================================================================
// II. MASTER REGISTRY (FULL 12-PROJECT DENSITY)
// =============================================================================

const CATEGORIES = ["All", "Artificial Intelligence", "Systems Engineering", "Core CS", "Security"];

const MASTER_REGISTRY: Project[] = [
  {
    id: "XP-ARC-001",
    title: "Archimedes RAG",
    categories: ["Artificial Intelligence", "Security"],
    tag: "Neural Retrieval",
    version: "2.4.0",
    status: "STABLE",
    deploymentDate: "2026-04-12",
    checksum: "88A2-FF12",
    complexity: "O(log n)",
    description: "Industrial-grade offline RAG suite. Engineered with custom cross-encoders for zero-shot domain adaptation. Scales to millions of tokens on localized hardware using quantized weight distribution.",
    github: "https://github.com/mutahirgillani1717/Archimedes-Offline-RAG",
    techStack: ["PyTorch", "LangChain", "ChromaDB", "Llama 3.2", "FastAPI"],
    metrics: [
      { label: "Accuracy", value: "98.2", unit: "%", trend: "up" },
      { label: "Latency", value: "420", unit: "ms", trend: "down" },
      { label: "Context", value: "128", unit: "k", trend: "stable" }
    ],
    specs: [{label: "Quantization", value: "4-bit GGUF"}, {label: "Embeddings", value: "BGE-Large-v1.5"}],
    impact: "Secured enterprise intellectual property by moving LLM inference to air-gapped local clusters."
  },
  {
    id: "XP-TTN-002",
    title: "Titan Vision",
    categories: ["Artificial Intelligence", "Systems Engineering"],
    tag: "Computer Vision",
    version: "1.0.8",
    status: "ACTIVE",
    deploymentDate: "2026-05-01",
    checksum: "BB21-0092",
    complexity: "O(n)",
    description: "Spatial intelligence engine for industrial safety. Custom YOLOv8-seg implementation with real-time geofencing and automated emergency alert bridging.",
    github: "https://github.com/mutahirgillani1717/Titan-Vision-Sentry",
    techStack: ["OpenCV", "YOLOv8", "CUDA", "FastAPI", "TensorRT"],
    metrics: [
      { label: "Precision", value: "0.94", trend: "up" },
      { label: "FPS", value: "60", trend: "stable" },
      { label: "Threshold", value: "0.45", trend: "stable" }
    ],
    specs: [{label: "Hardware", value: "RTX 4090"}, {label: "Frame-Skip", value: "Disabled"}],
    impact: "Reduced workplace injury risk by 70% via real-time mask overlapping detection."
  },
  {
    id: "XP-SPC-003",
    title: "Spectre MLOps",
    categories: ["Systems Engineering", "Artificial Intelligence"],
    tag: "Production Ops",
    version: "4.2.1",
    status: "STABLE",
    deploymentDate: "2026-03-15",
    checksum: "CC44-1182",
    complexity: "O(n)",
    description: "Self-healing ML infrastructure. Automated KS-test drift detection and CI/CD triggers for high-frequency model retraining.",
    github: "https://github.com/mutahirgillani1717/SpectreMLOps",
    techStack: ["Docker", "Kubernetes", "Prometheus", "Grafana", "Python"],
    metrics: [
      { label: "Drift Detect", value: "99.9", unit: "%", trend: "up" },
      { label: "Uptime", value: "100", unit: "%", trend: "stable" },
      { label: "Sync Rate", value: "2", unit: "m", trend: "down" }
    ],
    specs: [{label: "Registry", value: "Harbor"}, {label: "CI/CD", value: "GitHub Actions"}],
    impact: "Sustained model accuracy across 14 consecutive global data-shift events."
  },
  {
    id: "XP-DQN-004",
    title: "Deep-Q Router",
    categories: ["Artificial Intelligence", "Systems Engineering"],
    tag: "Reinforcement",
    version: "0.9.5",
    status: "STABLE",
    deploymentDate: "2026-02-28",
    checksum: "DD55-9921",
    complexity: "O(n²)",
    description: "Neural network for autonomous network routing. Adapts to topology shifts using Deep Q-Learning for minimal packet latency.",
    github: "https://github.com/mutahirgillani1717/Deep-Q-Router",
    techStack: ["PyTorch", "Gymnasium", "NumPy", "C++"],
    metrics: [
      { label: "Opt Gain", value: "22", unit: "%", trend: "up" },
      { label: "Reward", value: "840", trend: "up" },
      { label: "Episodes", value: "10k", trend: "stable" }
    ],
    specs: [{label: "Layers", value: "8-Dense"}, {label: "Optimizer", value: "AdamW"}],
    impact: "Optimized packet routing efficiency by 22% compared to static OSPF protocols."
  },
  {
    id: "XP-VIG-005",
    title: "Vigilant Prime",
    categories: ["Systems Engineering", "Security"],
    tag: "IoT Embedded",
    version: "2.1.0",
    status: "STABLE",
    deploymentDate: "2025-12-20",
    checksum: "EE66-8832",
    complexity: "O(1)",
    description: "Safety-critical IoT firmware for motorcycle safety. Features hardware-level interrupt handling for crash detection and emergency telemetry.",
    github: "https://github.com/mutahirgillani1717/Smart-Helmet-Computer-Vision",
    techStack: ["C++", "Arduino", "MPU-6050", "SIM800L", "FreeRTOS"],
    metrics: [
      { label: "Response", value: "2", unit: "ms", trend: "down" },
      { label: "Stability", value: "99.9", unit: "%", trend: "stable" },
      { label: "Baud", value: "115200", trend: "stable" }
    ],
    specs: [{label: "Protocol", value: "I2C"}, {label: "Sleep", value: "Deep-Sleep Mode"}],
    impact: "Deployed real-time accident reporting system on low-power edge microcontrollers."
  },
  {
    id: "XP-SNT-006",
    title: "Sentinel Shield",
    categories: ["Core CS", "Security"],
    tag: "Sec Algorithms",
    version: "3.0.0",
    status: "ACTIVE",
    deploymentDate: "2026-05-10",
    checksum: "FF77-7741",
    complexity: "O(n)",
    description: "Asynchronous network scanner. High-throughput vulnerability detection built on pure Python socket-level primitives.",
    github: "https://github.com/mutahirgillani1717/SentinelShield",
    techStack: ["Python", "Sockets", "Asyncio", "OSINT"],
    metrics: [
      { label: "Scan Rate", value: "5k", unit: "/m", trend: "up" },
      { label: "Vuln DB", value: "8.2k", trend: "up" },
      { label: "Threads", value: "256", trend: "stable" }
    ],
    specs: [{label: "Socket", value: "Non-blocking"}, {label: "SSL", value: "Supported"}],
    impact: "Identified 42 critical CVE overlaps in zero-trust lab environments."
  },
  {
    id: "XP-NEX-007",
    title: "NeuralNexus",
    categories: ["Artificial Intelligence"],
    tag: "Transformers",
    version: "1.2.0",
    status: "STABLE",
    deploymentDate: "2026-04-30",
    checksum: "AA11-3321",
    complexity: "O(n log n)",
    description: "Multi-modal vector search scaling document intelligence across distributed transformer nodes with semantic clustering.",
    github: "https://github.com/mutahirgillani1717/NeuralNexus",
    techStack: ["HuggingFace", "FAISS", "Redis", "PyTorch"],
    metrics: [
      { label: "Dimensions", value: "1536", trend: "stable" },
      { label: "Nodes", value: "12", trend: "up" },
      { label: "Clusters", value: "256", trend: "up" }
    ],
    specs: [{label: "Distance", value: "Cosine"}, {label: "Similarity", value: "Top-K"}],
    impact: "Enabled cross-modal semantic mapping between unstructured image and text data."
  },
  {
    id: "XP-ALF-008",
    title: "AlphaForecast",
    categories: ["Artificial Intelligence"],
    tag: "Time Series",
    version: "5.0.1",
    status: "STABLE",
    deploymentDate: "2026-03-01",
    checksum: "BB22-4412",
    complexity: "O(n)",
    description: "LSTM-GRU hybrid for financial market forecasting. Advanced feature engineering on high-frequency market tick data.",
    github: "https://github.com/mutahirgillani1717/AlphaForecast",
    techStack: ["PyTorch", "Pandas", "Scikit-Learn", "Matplotlib"],
    metrics: [
      { label: "MAE", value: "0.002", trend: "down" },
      { label: "Tick Rate", value: "10", unit: "ms", trend: "stable" },
      { label: "Horizon", value: "50", trend: "up" }
    ],
    specs: [{label: "Window", value: "Sliding-Window"}, {label: "RNN", value: "GRU-Cell"}],
    impact: "Achieved a 14% improvement in short-term volatility prediction over baseline models."
  },
  {
    id: "XP-GNN-009",
    title: "OptiGraph GNN",
    categories: ["Artificial Intelligence", "Core CS"],
    tag: "Graph Networks",
    version: "2.2.0",
    status: "STABLE",
    deploymentDate: "2026-01-15",
    checksum: "CC33-5562",
    complexity: "O(V+E)",
    description: "Forensic Graph Neural Network detecting financial fraud rings by analyzing network topology.",
    github: "https://github.com/mutahirgillani1717/OptiGraphGNN",
    techStack: ["PyTorch Geometric", "NetworkX", "Neo4j"],
    metrics: [
      { label: "Nodes", value: "1", unit: "M", trend: "up" },
      { label: "Edges", value: "5", unit: "M", trend: "up" },
      { label: "Accuracy", value: "91", unit: "%", trend: "up" }
    ],
    specs: [{label: "Model", value: "GraphSAGE"}, {label: "Pooling", value: "Max-Pool"}],
    impact: "Successfully mapped non-linear fraud rings in multi-million node datasets."
  },
  {
    id: "XP-SEC-010",
    title: "SecureCore OOP",
    categories: ["Core CS", "Security"],
    tag: "Architecture",
    version: "1.0.0",
    status: "STABLE",
    deploymentDate: "2025-11-01",
    checksum: "DD44-6611",
    complexity: "O(1)",
    description: "Memory-safe cryptographic library built on strict SOLID principles. Features dependency injection.",
    github: "https://github.com/mutahirgillani1717/SecureCoreOOP",
    techStack: ["Java", "OOP", "SOLID", "Cryptography"],
    metrics: [
      { label: "Coverage", value: "100", unit: "%", trend: "stable" },
      { label: "Bugs", value: "0", trend: "stable" },
      { label: "Complexity", value: "O(1)", trend: "stable" }
    ],
    specs: [{label: "Enc", value: "AES-256"}, {label: "Pattern", value: "Factory"}],
    impact: "Established a foundational secure architectural pattern for sensitive data handling."
  },
  {
    id: "XP-SNT-011",
    title: "SentimentFlow",
    categories: ["Artificial Intelligence"],
    tag: "NLP Deep Learning",
    version: "4.4.0",
    status: "STABLE",
    deploymentDate: "2026-02-10",
    checksum: "EE55-9900",
    complexity: "O(n)",
    description: "Real-time BERT stream processor for social media auditing. Optimized for sentiment cluster analysis.",
    github: "https://github.com/mutahirgillani1717/SentimentFlow",
    techStack: ["PyTorch", "Kafka", "Streamlit", "Docker"],
    metrics: [
      { label: "Throughput", value: "1k", unit: "/s", trend: "up" },
      { label: "Model", value: "BERT-L", trend: "stable" },
      { label: "Channels", value: "100", trend: "up" }
    ],
    specs: [{label: "Kafka", value: "Producer/Consumer"}, {label: "GPU", value: "CUDA-Enabled"}],
    impact: "Reduced manual sentiment auditing overhead by 85% via automated pipelines."
  },
  {
    id: "XP-VCV-012",
    title: "VisionCV Engine",
    categories: ["Artificial Intelligence", "Systems Engineering"],
    tag: "CV Production",
    version: "3.2.0",
    status: "ACTIVE",
    deploymentDate: "2026-05-13",
    checksum: "FF66-BB22",
    complexity: "O(n)",
    description: "Multi-class industrial segmentation suite. Features pixel-perfect PPE detection.",
    github: "https://github.com/mutahirgillani1717/VisionCV-Industrial-Engine",
    techStack: ["PyTorch", "YOLO-Seg", "OpenCV", "Streamlit"],
    metrics: [
      { label: "IoU", value: "0.89", trend: "up" },
      { label: "Classes", value: "14", trend: "stable" },
      { label: "Res", value: "4k", trend: "stable" }
    ],
    specs: [{label: "Weights", value: "Pre-trained MS-COCO"}, {label: "Export", value: "ONNX"}],
    impact: "Integrated pixel-level safety masking for robotic manufacturing workcells."
  },
];

// =============================================================================
// III. CUSTOM HOOKS (SCROLL ANIMATION ENGINE)
// =============================================================================

function useOnScreen(options: IntersectionObserverInit) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const currentRef = ref.current;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target); 
      }
    }, options);

    if (currentRef) observer.observe(currentRef);
    return () => { if (currentRef) observer.unobserve(currentRef); };
  }, [options]);

  return [ref, isVisible] as const;
}

// =============================================================================
// IV. MIDNIGHT SLATE UI COMPONENTS
// =============================================================================

const StatusPill = ({ status }: { status: SystemStatus }) => {
  const styles: Record<SystemStatus, string> = {
    STABLE: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    ACTIVE: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    CRITICAL: "bg-red-500/10 text-red-400 border-red-500/20 animate-pulse",
    DEPLOYED: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
    MAINTENANCE: "bg-amber-500/10 text-amber-400 border-amber-500/20",
    UPDATING: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    STANDBY: "bg-slate-500/10 text-slate-400 border-slate-500/20"
  };
  return (
    <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border shadow-sm ${styles[status] || styles.STABLE}`}>
      {status}
    </span>
  );
};

const MetricUnit = ({ metric }: { metric: ProjectMetric }) => {
  if (!metric) return null;
  return (
    <div className="flex flex-col gap-1.5 p-4 rounded-xl bg-slate-800/40 border border-slate-700/50 group/metric transition-colors hover:bg-slate-800 hover:border-slate-600">
      <div className="flex items-center justify-between">
        <span className="text-[10px] text-slate-400 uppercase font-semibold tracking-widest">{metric.label}</span>
        <span className={`text-[10px] ${metric.trend === 'up' ? 'text-emerald-400' : metric.trend === 'down' ? 'text-red-400' : 'text-slate-500'}`}>
          {metric.trend === 'up' ? '▲' : metric.trend === 'down' ? '▼' : '●'}
        </span>
      </div>
      <div className="flex items-baseline gap-1 mt-1">
        <span className="text-2xl font-bold text-slate-100 leading-none tracking-tight">{metric.value}</span>
        {metric.unit && <span className="text-xs text-slate-400 font-medium">{metric.unit}</span>}
      </div>
    </div>
  );
};

const ProjectCard = ({ p, index }: { p: Project, index: number }) => {
  const [ref, isVisible] = useOnScreen({ threshold: 0.1, rootMargin: "0px 0px -50px 0px" });
  
  return (
    <div 
      ref={ref}
      className={`
        group flex flex-col bg-slate-900 border border-slate-800 p-8 rounded-[2rem] 
        shadow-lg hover:shadow-2xl hover:shadow-blue-900/10
        hover:-translate-y-1.5 hover:border-slate-700 transition-all duration-500 min-h-[550px]
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
      `}
      style={{ transitionDelay: `${index * 50}ms` }}
    >
      <div className="flex justify-between items-start mb-6">
        <div className="flex flex-col gap-2">
          <span className="text-[10px] font-mono font-medium text-slate-500 uppercase tracking-widest">{p.id}</span>
          <span className="text-xs font-bold text-blue-400 bg-blue-500/10 px-3 py-1.5 rounded-lg inline-block w-max border border-blue-500/10">{p.tag}</span>
        </div>
        <StatusPill status={p.status} />
      </div>

      <h4 className="text-2xl font-bold text-slate-100 mb-4 tracking-tight group-hover:text-blue-400 transition-colors">
        {p.title}
      </h4>
      <p className="text-slate-400 leading-relaxed text-sm mb-8 flex-grow">
        {p.description}
      </p>

      {/* Tech Stack Bubbles */}
      <div className="flex flex-wrap gap-2.5 mb-8">
        {p.techStack.map(tech => (
          <span key={tech} className="text-[11px] font-semibold text-slate-300 bg-slate-800 border border-slate-700 px-3.5 py-1.5 rounded-full transition-colors group-hover:bg-slate-700 group-hover:text-white">
            {tech}
          </span>
        ))}
      </div>

      {/* Metrics Layout */}
      <div className="grid grid-cols-3 gap-3 mb-8">
        {p.metrics.map((m, idx) => <MetricUnit key={idx} metric={m} />)}
      </div>

      <div className="mt-auto pt-6 border-t border-slate-800 flex items-center justify-between">
        <a href={p.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-bold text-slate-300 group-hover:text-blue-400 transition-colors">
          View Protocol
          <svg className="w-4 h-4 translate-x-0 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
        <span className="text-xs font-mono font-bold text-slate-600 group-hover:text-slate-400 transition-colors">{p.complexity}</span>
      </div>
    </div>
  );
};

// =============================================================================
// V. MAIN PAGE NUCLEUS (MIDNIGHT SLATE)
// =============================================================================

export default function Home() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [isMounted, setIsMounted] = useState(false);
  const [heroRef, heroVisible] = useOnScreen({ threshold: 0.1 });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const filteredProjects = useMemo(() => 
    activeFilter === "All" ? MASTER_REGISTRY : MASTER_REGISTRY.filter(p => p.categories.includes(activeFilter))
  , [activeFilter]);

  if (!isMounted) return <div className="bg-[#0B0F19] min-h-screen" />;

  return (
    <main className="min-h-screen bg-[#0B0F19] text-slate-400 font-sans selection:bg-blue-500/30 selection:text-blue-100 overflow-x-hidden antialiased">
      
      {/* 1. SOFT DARK BACKGROUND ENGINE */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Ambient Twilight Glows */}
        <div className="absolute -top-40 -left-40 w-[800px] h-[800px] bg-blue-900/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute top-[30%] -right-60 w-[900px] h-[900px] bg-indigo-900/10 rounded-full blur-[150px]"></div>
        {/* Subtle Slate Grid */}
        <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:32px_32px] opacity-40"></div>
      </div>

      {/* 2. TRANSLUCENT HEADER */}
      <nav className="fixed top-0 w-full z-50 bg-[#0B0F19]/80 backdrop-blur-xl border-b border-slate-800 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <div className="flex items-center gap-3 group cursor-default">
            <div className="h-2.5 w-2.5 rounded-full bg-blue-500 group-hover:scale-125 transition-transform duration-300 shadow-[0_0_8px_#3b82f6]"></div>
            <span className="text-slate-100 font-bold tracking-tight text-lg">Mutahir Hussain</span>
          </div>
          
          <div className="flex items-center gap-8">
            <div className="hidden md:flex gap-8 text-sm font-semibold text-slate-400">
               <a href="#work" className="hover:text-slate-100 transition-colors">Projects</a>
               <a href="#connect" className="hover:text-slate-100 transition-colors">Contact</a>
            </div>
            <div className="h-5 w-px bg-slate-800 hidden md:block"></div>
            <a 
              href="/resume.pdf" 
              className="bg-slate-100 text-slate-900 px-6 py-2.5 rounded-lg font-bold hover:bg-white transition-all shadow-md text-sm flex items-center gap-2"
            >
              Resume
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
            </a>
          </div>
        </div>
      </nav>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-48 pb-32">
        
        {/* 3. HERO SECTION */}
        <section 
          ref={heroRef}
          className={`mb-48 max-w-4xl transition-all duration-1000 ease-out ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-8">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-400 animate-pulse"></span>
            Systems & AI Engineer
          </div>
          
          <h1 className="text-5xl md:text-[5.5rem] font-extrabold text-slate-100 tracking-tight leading-[1.05] mb-8">
            Engineering robust <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Intelligence.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-400 leading-relaxed font-medium max-w-2xl mb-12">
            Final-year Computer Science Scholar at <span className="text-slate-200 font-bold border-b-2 border-slate-700">UET Taxila</span>. 
            I synthesize memory-safe infrastructure with high-performance neural networks.
          </p>

          <div className="flex flex-wrap gap-4">
            <a href="#work" className="px-8 py-4 bg-slate-100 text-slate-900 rounded-xl font-bold hover:bg-white transition-colors shadow-lg flex items-center gap-2">
              Explore Work
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
            </a>
            <a href="#connect" className="px-8 py-4 bg-slate-800 text-slate-200 border border-slate-700 rounded-xl font-bold hover:bg-slate-700 hover:text-white transition-all shadow-sm">
              Get in touch
            </a>
          </div>
        </section>

        {/* 4. DYNAMIC PROJECT GRID */}
        <section id="work" className="mb-48 scroll-mt-32">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-8">
            <div>
               <h2 className="text-3xl md:text-4xl font-extrabold text-slate-100 tracking-tight mb-3">Selected Projects</h2>
               <p className="text-lg text-slate-500 font-medium">Production-ready nodes and academic research.</p>
            </div>
            
            {/* Soft Filter Interface */}
            <div className="flex flex-wrap gap-2 p-1.5 bg-slate-900 border border-slate-800 rounded-2xl shadow-sm">
              {CATEGORIES.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`px-5 py-2.5 text-xs font-bold rounded-xl transition-all duration-300 ${activeFilter === cat ? "bg-slate-700 text-slate-100 shadow-md" : "text-slate-400 hover:text-slate-200 hover:bg-slate-800"}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((p, index) => (
              <ProjectCard key={p.id} p={p} index={index} />
            ))}
          </div>
        </section>

        {/* 5. TWILIGHT CONNECT FOOTER */}
        <section id="connect" className="relative bg-slate-900 border border-slate-800 rounded-[3rem] p-16 md:p-24 shadow-2xl overflow-hidden">
           {/* Decorative Background inside footer */}
           <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-900/20 to-indigo-900/10 rounded-full blur-[80px] -z-10 translate-x-1/3 -translate-y-1/3"></div>
           
           <div className="grid lg:grid-cols-2 gap-16 relative z-10">
              <div>
                 <h2 className="text-4xl md:text-5xl font-extrabold text-slate-100 tracking-tight mb-6">Let's build <br/> something great.</h2>
                 <p className="text-xl text-slate-400 font-medium mb-12 max-w-md">
                   Open to roles in Applied AI, MLOps, and Core Systems Engineering.
                 </p>
                 <a href="mailto:mutahirgillani1717@gmail.com" className="inline-flex items-center gap-3 text-xl md:text-2xl font-bold text-blue-400 hover:text-blue-300 transition-colors border-b-2 border-blue-900 hover:border-blue-400 pb-1">
                   mutahirgillani1717@gmail.com
                   <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7-7m7-7H3" /></svg>
                 </a>
              </div>
              <div className="flex flex-col justify-end lg:items-end space-y-8">
                 <div className="flex flex-col lg:items-end gap-1">
                    <span className="text-sm font-bold text-slate-500 uppercase tracking-widest">Phone</span>
                    <span className="text-xl font-bold text-slate-200">+92 343 5431312</span>
                 </div>
                 <div className="flex flex-col lg:items-end gap-1">
                    <span className="text-sm font-bold text-slate-500 uppercase tracking-widest">Location</span>
                    <span className="text-xl font-bold text-slate-200">Taxila, Punjab, PK</span>
                 </div>
                 <div className="flex flex-col lg:items-end gap-1 mt-4">
                    <span className="text-sm font-bold text-slate-500 uppercase tracking-widest">Status</span>
                    <div className="flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-lg">
                       <div className="h-2 w-2 bg-emerald-400 rounded-full animate-pulse"></div>
                       <span className="text-sm font-bold text-emerald-400">Available for 2026 Roles</span>
                    </div>
                 </div>
              </div>
           </div>
        </section>
      </div>

      <footer className="py-10 text-center border-t border-slate-800/60 bg-slate-900/30 backdrop-blur-sm">
         <p className="text-sm font-medium text-slate-500">
           {">"} {new Date().getFullYear()} Syed Mutahir Hussain. Engineered in React & Tailwind.
         </p>
      </footer>
    </main>
  );
}