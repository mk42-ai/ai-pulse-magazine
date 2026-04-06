// ===== MOCK DATA =====

const HERO_STORIES = [
  {
    tag: 'BREAKING', tagClass: 'breaking',
    headline: 'Meta Releases Llama 4 Scout — First Open MoE With 17B Active Parameters',
    excerpt: 'The new Mixture-of-Experts architecture delivers GPT-5-class performance at a fraction of the compute cost, marking a pivotal shift in open-source AI.',
    img: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=900&q=80',
    source: 'AI Pulse', time: '2 hours ago', readTime: '6 min read'
  },
  {
    tag: 'TRENDING', tagClass: 'trending',
    headline: 'Google DeepMind Achieves Gold on International Math Olympiad',
    img: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&q=80',
    source: 'Nature', time: '4 hours ago'
  },
  {
    tag: 'RESEARCH', tagClass: '',
    headline: 'Anthropic Publishes Constitutional AI 2.0 Safety Framework',
    img: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&q=80',
    source: 'Anthropic Blog', time: '6 hours ago'
  }
];

const TICKER_ITEMS = [
  { icon: 'fa-fire', text: 'Qwen3.5-72B surpasses GPT-4.1 on MMLU-Pro', change: '+3.2%' },
  { icon: 'fa-star', text: 'LangChain hits 100k GitHub stars', change: '' },
  { icon: 'fa-bolt', text: 'NVIDIA H200 inference benchmarks released', change: '' },
  { icon: 'fa-chart-line', text: 'HuggingFace reaches 1M+ models', change: '' },
  { icon: 'fa-rocket', text: 'Mistral Large 3 released with 128K context', change: '' },
  { icon: 'fa-globe', text: 'OpenAI ships GPT-5.4 with native tool use', change: '' },
  { icon: 'fa-code', text: 'Cursor AI raises $400M Series C', change: '' },
  { icon: 'fa-brain', text: 'DeepSeek V3.2 achieves SOTA on code generation', change: '' },
];

const STATS = [
  { icon: 'fas fa-cube', cls: 'purple', value: '1.2M+', label: 'Models on HF', change: '+12.3K this week', dir: 'up' },
  { icon: 'fas fa-download', cls: 'green', value: '8.7B', label: 'Weekly Downloads', change: '+18.2%', dir: 'up' },
  { icon: 'fab fa-github', cls: 'orange', value: '847', label: 'New AI Repos Today', change: '+23%', dir: 'up' },
  { icon: 'fab fa-x-twitter', cls: 'blue', value: '2.1M', label: 'AI Tweets Today', change: '+5.4%', dir: 'up' },
  { icon: 'fas fa-fire-flame-curved', cls: 'pink', value: '156', label: 'Models Released Today', change: '+31', dir: 'up' },
];

const TRENDING_MODELS = [
  { rank: 1, name: 'Qwen3.5-72B-Instruct', author: 'Qwen', task: 'text-generation', lib: 'transformers', likes: 15420, downloads: 2840000, trend: '+342%', trendType: 'hot', color: '#6c5ce7',
    img: 'https://images.unsplash.com/photo-1676299081847-824916de030a?w=400&q=80', avatar: 'https://github.com/QwenLM.png?size=200', tags: ['chat', '72B', 'MoE'] },
  { rank: 2, name: 'Llama-4-Scout-17B-16E', author: 'meta-llama', task: 'text-generation', lib: 'transformers', likes: 12300, downloads: 1950000, trend: '+218%', trendType: 'hot', color: '#0984e3',
    img: 'https://images.unsplash.com/photo-1655720828018-edd2daec9349?w=400&q=80', avatar: 'https://github.com/meta-llama.png?size=200', tags: ['MoE', '17B', 'multilingual'] },
  { rank: 3, name: 'FLUX.2-Ultra', author: 'black-forest-labs', task: 'text-to-image', lib: 'diffusers', likes: 9870, downloads: 1420000, trend: '+156%', trendType: 'up', color: '#e17055',
    img: 'https://images.unsplash.com/photo-1547891654-e66ed7ebb968?w=400&q=80', avatar: 'https://github.com/black-forest-labs.png?size=200', tags: ['image-gen', '12B', 'fast'] },
  { rank: 4, name: 'Gemma-3-27B-IT', author: 'google', task: 'text-generation', lib: 'transformers', likes: 8540, downloads: 980000, trend: '+98%', trendType: 'up', color: '#00b894',
    img: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&q=80', avatar: 'https://github.com/google.png?size=200', tags: ['chat', '27B', 'efficient'] },
  { rank: 5, name: 'Whisper-V4-Large', author: 'openai', task: 'automatic-speech-recognition', lib: 'transformers', likes: 7210, downloads: 870000, trend: '+87%', trendType: 'up', color: '#fdcb6e',
    img: 'https://images.unsplash.com/photo-1589903308904-1010c2294adc?w=400&q=80', avatar: 'https://github.com/openai.png?size=200', tags: ['speech', 'multilingual'] },
  { rank: 6, name: 'StableDiffusion-4', author: 'stabilityai', task: 'text-to-image', lib: 'diffusers', likes: 6890, downloads: 760000, trend: '+72%', trendType: 'up', color: '#a29bfe',
    img: 'https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=400&q=80', avatar: 'https://github.com/Stability-AI.png?size=200', tags: ['image-gen', 'SDXL'] },
  { rank: 7, name: 'CodeLlama-70B-v2', author: 'meta-llama', task: 'text-generation', lib: 'transformers', likes: 5430, downloads: 620000, trend: '+61%', trendType: 'up', color: '#0984e3',
    img: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&q=80', avatar: 'https://github.com/meta-llama.png?size=200', tags: ['code', '70B', 'instruct'] },
  { rank: 8, name: 'Janus-Pro-7B', author: 'deepseek-ai', task: 'multimodal', lib: 'transformers', likes: 4980, downloads: 510000, trend: '+54%', trendType: 'up', color: '#00cec9',
    img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&q=80', avatar: 'https://github.com/deepseek-ai.png?size=200', tags: ['vision', '7B', 'unified'] },
];

const LEADERBOARD = [
  { rank: 1, name: 'GPT-5.4', org: 'OpenAI', score: 94.2, bar: 100, arena: 1387, tasks: 'General' },
  { rank: 2, name: 'Claude Opus 4.6', org: 'Anthropic', score: 93.8, bar: 98, arena: 1372, tasks: 'Reasoning' },
  { rank: 3, name: 'Gemini 3.1 Pro', org: 'Google', score: 92.1, bar: 95, arena: 1358, tasks: 'Multimodal' },
  { rank: 4, name: 'Qwen3.5-72B', org: 'Alibaba', score: 91.5, bar: 93, arena: 1342, tasks: 'Multilingual' },
  { rank: 5, name: 'Llama 4 Scout', org: 'Meta', score: 90.8, bar: 91, arena: 1335, tasks: 'Open Source' },
  { rank: 6, name: 'Grok-4.2', org: 'xAI', score: 90.1, bar: 89, arena: 1321, tasks: 'Real-time' },
  { rank: 7, name: 'DeepSeek V3.2', org: 'DeepSeek', score: 89.4, bar: 87, arena: 1308, tasks: 'Code' },
  { rank: 8, name: 'Mistral Large 3', org: 'Mistral', score: 88.7, bar: 85, arena: 1294, tasks: 'European' },
];

const DOWNLOADS = [
  { name: 'sentence-transformers/all-MiniLM-L6-v2', author: 'sentence-transformers', downloads: '47.2M', avatar: 'https://github.com/UKPLab.png?size=80', color: '#6c5ce7' },
  { name: 'openai/whisper-large-v3', author: 'openai', downloads: '12.8M', avatar: 'https://github.com/openai.png?size=80', color: '#fdcb6e' },
  { name: 'meta-llama/Llama-4-Scout-17B', author: 'meta-llama', downloads: '9.4M', avatar: 'https://github.com/meta-llama.png?size=80', color: '#0984e3' },
  { name: 'Qwen/Qwen3.5-72B-Instruct', author: 'Qwen', downloads: '8.1M', avatar: 'https://github.com/QwenLM.png?size=80', color: '#6c5ce7' },
  { name: 'black-forest-labs/FLUX.2-dev', author: 'black-forest-labs', downloads: '6.7M', avatar: 'https://github.com/black-forest-labs.png?size=80', color: '#e17055' },
  { name: 'google/gemma-3-27b-it', author: 'google', downloads: '5.9M', avatar: 'https://github.com/google.png?size=80', color: '#00b894' },
  { name: 'stabilityai/sd-4-turbo', author: 'stabilityai', downloads: '5.2M', avatar: 'https://github.com/Stability-AI.png?size=80', color: '#a29bfe' },
  { name: 'microsoft/phi-4-mini-instruct', author: 'microsoft', downloads: '4.8M', avatar: 'https://github.com/microsoft.png?size=80', color: '#00cec9' },
];

const GITHUB_TRENDING = [
  { name: 'langchain-ai/langchain', owner: 'langchain-ai', desc: 'Building applications with LLMs through composability', stars: '102.4k', forks: '16.2k', starsToday: 342, lang: 'Python', langColor: '#3572A5',
    avatar: 'https://avatars.githubusercontent.com/u/126733545?s=80' },
  { name: 'ollama/ollama', owner: 'ollama', desc: 'Get up and running with large language models locally', stars: '98.7k', forks: '7.8k', starsToday: 287, lang: 'Go', langColor: '#00ADD8',
    avatar: 'https://avatars.githubusercontent.com/u/151674099?s=80' },
  { name: 'open-webui/open-webui', owner: 'open-webui', desc: 'User-friendly AI interface. Supports Ollama, OpenAI API, and more.', stars: '67.3k', forks: '7.9k', starsToday: 256, lang: 'Svelte', langColor: '#ff3e00',
    avatar: 'https://avatars.githubusercontent.com/u/158137808?s=80' },
  { name: 'vllm-project/vllm', owner: 'vllm-project', desc: 'A high-throughput and memory-efficient inference engine for LLMs', stars: '45.2k', forks: '6.1k', starsToday: 198, lang: 'Python', langColor: '#3572A5',
    avatar: 'https://avatars.githubusercontent.com/u/139520312?s=80' },
  { name: 'microsoft/autogen', owner: 'microsoft', desc: 'A programming framework for agentic AI', stars: '38.9k', forks: '5.7k', starsToday: 176, lang: 'Python', langColor: '#3572A5',
    avatar: 'https://avatars.githubusercontent.com/u/6154722?s=80' },
  { name: 'browser-use/browser-use', owner: 'browser-use', desc: 'Make websites accessible for AI agents', stars: '31.4k', forks: '3.2k', starsToday: 154, lang: 'Python', langColor: '#3572A5',
    avatar: 'https://avatars.githubusercontent.com/u/183433515?s=80' },
];

const NEWS = [
  { headline: 'NVIDIA Announces Blackwell Ultra: 2x Inference Throughput Over H200', snippet: 'The new GPU architecture promises to reshape data center economics with dramatically improved AI inference performance per watt.', img: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?w=600&q=80', source: 'TechCrunch', time: '1h ago', readTime: '4 min' },
  { headline: 'European AI Act Enforcement Begins — What Developers Need to Know', snippet: 'New regulations impact open-source model distribution, requiring risk assessments for general-purpose AI systems.', img: 'https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=600&q=80', source: 'The Verge', time: '3h ago', readTime: '7 min' },
  { headline: 'Mistral AI Raises $1.2B, Valued at $13B in New Funding Round', snippet: 'The Paris-based startup continues its aggressive expansion with plans to build sovereign AI infrastructure across Europe.', img: 'https://images.unsplash.com/photo-1559526324-593bc073d938?w=600&q=80', source: 'Bloomberg', time: '5h ago', readTime: '3 min' },
  { headline: 'Researchers Achieve Human-Level Performance on ARC-AGI-2 Benchmark', snippet: 'A collaboration between three labs produces a system that matches human scores on the notoriously difficult abstract reasoning challenge.', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80', source: 'MIT Tech Review', time: '7h ago', readTime: '5 min' },
  { headline: 'Apple Intelligence 3.0 Ships with On-Device 7B Model', snippet: 'iOS 20 brings significantly improved Siri with a locally-running language model capable of complex multi-step reasoning.', img: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&q=80', source: 'Wired', time: '9h ago', readTime: '6 min' },
  { headline: 'The Open Source AI Index: Measuring What Matters in 2026', snippet: 'Stanford HAI releases its comprehensive report tracking the state of open-source AI across performance, safety, and accessibility dimensions.', img: 'https://images.unsplash.com/photo-1456324504439-367cee3b3c32?w=600&q=80', source: 'Stanford HAI', time: '12h ago', readTime: '8 min' },
];

const TWEETS = [
  { name: 'Yann LeCun', handle: '@ylecun', verified: true, avatar: 'https://ui-avatars.com/api/?name=Yann+LeCun&background=6c5ce7&color=fff&size=200&bold=true',
    body: 'The era of autoregressive LLMs as the dominant paradigm is coming to an end. World models with planning capabilities will be the next frontier. <span class="highlight">#AI #WorldModels</span>',
    likes: '24.3K', retweets: '8.7K', replies: '2.1K', time: '45m ago' },
  { name: 'Jim Fan', handle: '@DrJimFan', verified: true, avatar: 'https://ui-avatars.com/api/?name=Jim+Fan&background=00b894&color=fff&size=200&bold=true',
    body: 'NVIDIA just dropped Foundation Agent — a single model that can play Minecraft, control robots, AND write code. The unification of embodied AI is happening faster than anyone predicted.',
    likes: '18.9K', retweets: '5.4K', replies: '1.8K', time: '1h ago' },
  { name: 'Andrej Karpathy', handle: '@karpathy', verified: true, avatar: 'https://ui-avatars.com/api/?name=Andrej+Karpathy&background=e17055&color=fff&size=200&bold=true',
    body: 'Built a tiny LLM from scratch in 500 lines of pure C. No frameworks, no CUDA, just vibes and matrix multiplications. Thread incoming on how every developer should understand transformers at the metal level. <span class="highlight">#LLM</span>',
    likes: '42.1K', retweets: '12.3K', replies: '3.4K', time: '2h ago' },
  { name: 'Emad Mostaque', handle: '@EMostaque', verified: true, avatar: 'https://ui-avatars.com/api/?name=Emad+Mostaque&background=fdcb6e&color=000&size=200&bold=true',
    body: 'Image generation has crossed the uncanny valley. The latest models produce photorealistic output that is indistinguishable from DSLR photography. We need better watermarking yesterday.',
    likes: '12.7K', retweets: '4.2K', replies: '987', time: '3h ago' },
  { name: 'Swyx', handle: '@swyx', verified: true, avatar: 'https://ui-avatars.com/api/?name=Swyx&background=0984e3&color=fff&size=200&bold=true',
    body: 'The AI Engineer stack in 2026: Cursor for code, Claude for reasoning, Vercel for deploy, On-Demand for orchestration, HuggingFace for models. That\'s it. That\'s the stack. <span class="highlight">#AIEngineering</span>',
    likes: '9.8K', retweets: '3.1K', replies: '654', time: '4h ago' },
  { name: 'Harrison Chase', handle: '@hwchase17', verified: true, avatar: 'https://ui-avatars.com/api/?name=Harrison+Chase&background=a29bfe&color=fff&size=200&bold=true',
    body: 'LangGraph just hit 10M weekly downloads. The shift from simple chains to complex agent workflows is now the default pattern. Memory, planning, and tool use — all composable.',
    likes: '8.4K', retweets: '2.8K', replies: '432', time: '5h ago' },
];

// ===== RENDERING =====

function fmt(n) {
  if (n >= 1e6) return (n / 1e6).toFixed(1) + 'M';
  if (n >= 1e3) return (n / 1e3).toFixed(1) + 'K';
  return String(n);
}

// Ticker
function renderTicker() {
  const el = document.getElementById('ticker-content');
  const items = [...TICKER_ITEMS, ...TICKER_ITEMS]; // duplicate for seamless loop
  el.innerHTML = items.map(t =>
    `<span class="ticker-item"><i class="fas ${t.icon}"></i> ${t.text} ${t.change ? `<strong style="color:#00d68f">${t.change}</strong>` : ''}</span><span class="ticker-sep">|</span>`
  ).join('');
}

// Hero
function renderHero() {
  const main = HERO_STORIES[0];
  document.getElementById('hero-main').innerHTML = `
    <div class="hero-card">
      <img src="${main.img}" alt="">
      <div class="hero-overlay full">
        <div>
          <span class="hero-tag ${main.tagClass}"><i class="fas fa-bolt"></i> ${main.tag}</span>
          <h1 class="hero-headline">${main.headline}</h1>
          <p class="hero-excerpt">${main.excerpt}</p>
          <div class="hero-meta">
            <span>${main.source}</span>
            <span>${main.time}</span>
            <span>${main.readTime}</span>
          </div>
        </div>
      </div>
    </div>
  `;

  document.getElementById('hero-side').innerHTML = HERO_STORIES.slice(1).map(s => `
    <div class="hero-card">
      <img src="${s.img}" alt="">
      <div class="hero-overlay full">
        <div>
          <span class="hero-tag ${s.tagClass}">${s.tag}</span>
          <h2 class="hero-headline">${s.headline}</h2>
          <div class="hero-meta"><span>${s.source}</span><span>${s.time}</span></div>
        </div>
      </div>
    </div>
  `).join('');
}

// Stats
function renderStats() {
  document.getElementById('stats-bar').innerHTML = STATS.map(s => `
    <div class="stat-item">
      <div class="stat-icon ${s.cls}"><i class="${s.icon}"></i></div>
      <div>
        <div class="stat-value">${s.value}</div>
        <div class="stat-label">${s.label}</div>
        <div class="stat-change ${s.dir}">${s.dir === 'up' ? '↑' : '↓'} ${s.change}</div>
      </div>
    </div>
  `).join('');
}

// Trending Models
function renderTrendingModels() {
  document.getElementById('trending-models').innerHTML = TRENDING_MODELS.map(m => {
    const rankCls = m.rank === 1 ? 'gold' : m.rank === 2 ? 'silver' : m.rank === 3 ? 'bronze' : 'default';
    return `
    <a href="https://huggingface.co/${m.author}/${m.name}" target="_blank" rel="noopener" class="model-card animate-in" style="animation-delay: ${m.rank * 60}ms; text-decoration:none; color:inherit; display:block;">
      <div class="model-rank ${rankCls}">${m.rank}</div>
      <div class="model-trend ${m.trendType}"><i class="fas fa-arrow-up"></i> ${m.trend}</div>
      <div class="model-banner">
        <img src="${m.img}" alt="">
        <div class="model-banner-overlay">
          <div class="model-logo"><img src="${m.avatar}" alt="${m.author}" style="width:100%;height:100%;object-fit:cover;border-radius:12px"></div>
        </div>
      </div>
      <div class="model-body">
        <div class="model-name">${m.name}</div>
        <div class="model-author">${m.author}</div>
        <div class="model-tags">
          <span class="model-tag-pill task">${m.task}</span>
          ${m.tags.map(t => `<span class="model-tag-pill">${t}</span>`).join('')}
        </div>
        <div class="model-stats">
          <div class="model-stat">
            <div class="model-stat-value"><i class="fas fa-heart" style="color:var(--red);font-size:12px"></i> ${fmt(m.likes)}</div>
            <div class="model-stat-label">Likes</div>
          </div>
          <div class="model-stat">
            <div class="model-stat-value"><i class="fas fa-download" style="color:var(--green);font-size:12px"></i> ${fmt(m.downloads)}</div>
            <div class="model-stat-label">Downloads</div>
          </div>
        </div>
      </div>
    </a>`;
  }).join('');
}

// Leaderboard
function renderLeaderboard() {
  document.getElementById('leaderboard').innerHTML = LEADERBOARD.map(l => `
    <div class="lb-row">
      <div class="lb-rank ${l.rank <= 3 ? 'r' + l.rank : ''}">${l.rank}</div>
      <div class="lb-info">
        <div class="lb-name">${l.name}</div>
        <div class="lb-meta">
          <span>${l.org}</span>
          <span>Arena: ${l.arena}</span>
          <span>${l.tasks}</span>
        </div>
      </div>
      <div class="lb-bar"><div class="lb-bar-fill" style="width:${l.bar}%"></div></div>
      <div class="lb-score">${l.score}</div>
    </div>
  `).join('');
}

// Downloads
function renderDownloads() {
  document.getElementById('downloads-list').innerHTML = DOWNLOADS.map((d, i) => `
    <a href="https://huggingface.co/${d.name}" target="_blank" rel="noopener" class="dl-row" style="text-decoration:none;color:inherit;">
      <div class="dl-icon" style="background:${d.color}22;overflow:hidden"><img src="${d.avatar}" alt="${d.author}" style="width:100%;height:100%;object-fit:cover;border-radius:10px"></div>
      <div class="dl-info">
        <div class="dl-name">${d.name.split('/')[1]}</div>
        <div class="dl-author">${d.author}</div>
      </div>
      <div class="dl-count">
        <div class="dl-count-value" style="color:var(--green)">${d.downloads}</div>
        <div class="dl-count-label">this week</div>
      </div>
    </a>
  `).join('');
}

// GitHub Trending
function renderGitHub() {
  document.getElementById('github-grid').innerHTML = GITHUB_TRENDING.map(g => `
    <a href="https://github.com/${g.name}" target="_blank" rel="noopener" class="gh-card" style="text-decoration:none;color:inherit;">
      <div class="gh-stars-today"><i class="fas fa-star"></i> ${g.starsToday} today</div>
      <div class="gh-header">
        <div class="gh-avatar"><img src="${g.avatar}" alt="${g.owner}"></div>
        <div>
          <div class="gh-repo-name">${g.name.split('/')[1]}</div>
          <div class="gh-repo-owner">${g.owner}</div>
        </div>
      </div>
      <div class="gh-desc">${g.desc}</div>
      <div class="gh-lang">
        <span class="gh-lang-dot" style="background:${g.langColor}"></span>
        ${g.lang}
      </div>
      <div class="gh-stats">
        <span><i class="fas fa-star"></i> ${g.stars}</span>
        <span><i class="fas fa-code-branch"></i> ${g.forks}</span>
      </div>
    </a>
  `).join('');
}

// News
function renderNews() {
  document.getElementById('news-grid').innerHTML = NEWS.map(n => `
    <a href="https://www.google.com/search?q=${encodeURIComponent(n.headline)}" target="_blank" rel="noopener" class="news-card" style="text-decoration:none;color:inherit;">
      <div class="news-img">
        <img src="${n.img}" alt="">
        <div class="news-source">${n.source}</div>
      </div>
      <div class="news-body">
        <div class="news-headline">${n.headline}</div>
        <div class="news-snippet">${n.snippet}</div>
        <div class="news-footer">
          <span>${n.time}</span>
          <span>${n.readTime}</span>
        </div>
      </div>
    </a>
  `).join('');
}

// Tweets
function renderTweets() {
  document.getElementById('tweets-grid').innerHTML = TWEETS.map(t => `
    <a href="https://x.com/${t.handle.replace('@','')}" target="_blank" rel="noopener" class="tweet-card" style="text-decoration:none;color:inherit;">
      <div class="tweet-header">
        <div class="tweet-avatar"><img src="${t.avatar}" alt="${t.name}"></div>
        <div>
          <div style="display:flex;align-items:center;gap:6px">
            <span class="tweet-name">${t.name}</span>
            ${t.verified ? '<i class="fas fa-circle-check tweet-verified"></i>' : ''}
          </div>
          <div class="tweet-handle">${t.handle}</div>
        </div>
      </div>
      <div class="tweet-body">${t.body}</div>
      <div class="tweet-footer">
        <span><i class="far fa-comment"></i> ${t.replies}</span>
        <span><i class="fas fa-retweet"></i> ${t.retweets}</span>
        <span><i class="far fa-heart"></i> ${t.likes}</span>
        <span class="tweet-time">${t.time}</span>
      </div>
    </a>
  `).join('');
}

// Tab switching
document.querySelectorAll('.section-tabs').forEach(group => {
  group.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
      group.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
    });
  });
});

// Smooth scroll nav
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
    link.classList.add('active');
    const target = document.querySelector(link.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

// Init — render mock data immediately
renderTicker();
renderHero();
renderStats();
renderTrendingModels();
renderLeaderboard();
renderDownloads();
renderGitHub();
renderNews();
renderTweets();

// ============================================================
// LIVE DATA ENGINE — On-Demand Webhook Integration
// ============================================================

const WEBHOOK_URL = 'https://gateway.on-demand.io/automation/public/v1/webhook/workflow/69d3609a5c99fb877330a566/execute';
const OND_API_BASE = 'https://api.on-demand.io/automation/api';
const OND_API_KEY = localStorage.getItem('ond_api_key') || '';
const POLL_INTERVAL = 10000; // 10s between polls
const MAX_POLLS = 90;        // max 15 minutes of polling
const REFRESH_INTERVAL = 60 * 60 * 1000; // 1 hour

let isRefreshing = false;
let lastLiveData = null;

// Status indicator
function setStatus(msg, isLive = false) {
  const el = document.getElementById('last-update');
  if (el) el.textContent = msg;
  const dot = document.querySelector('.live-dot');
  if (dot) dot.style.background = isLive ? '#4ECDC4' : '#ff9f43';
}

// 1. Trigger the webhook
async function triggerWebhook() {
  try {
    const res = await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ input: 'Fetch latest AI data for AI Pulse magazine' })
    });
    const data = await res.json();
    console.log('[AI Pulse] Webhook triggered:', data.executionID);
    return data.executionID;
  } catch (e) {
    console.error('[AI Pulse] Webhook trigger failed:', e);
    return null;
  }
}

// 2. Poll for execution completion + get node outputs
async function pollExecution(executionID) {
  if (!OND_API_KEY) {
    console.warn('[AI Pulse] No API key set. Using mock data. Set key via: localStorage.setItem("ond_api_key", "your-key")');
    return null;
  }

  const headers = { 'apikey': OND_API_KEY };

  for (let i = 0; i < MAX_POLLS; i++) {
    try {
      const res = await fetch(`${OND_API_BASE}/execution/${executionID}`, { headers });
      const data = await res.json();
      const rec = data.data || data;
      const status = rec.status;
      const ended = rec.endedAtInMilliseconds || 0;

      console.log(`[AI Pulse] Poll ${i + 1}/${MAX_POLLS} — status: ${status}, ended: ${ended}`);

      if (status === 'completed' || status === 'success' || ended > 0) {
        // Get the node outputs
        const outputRes = await fetch(`${OND_API_BASE}/execution/${executionID}/node/outputs`, { headers });
        const outputData = await outputRes.json();
        console.log('[AI Pulse] Got node outputs:', outputData);
        return outputData;
      }

      if (status === 'failed' || status === 'error') {
        console.error('[AI Pulse] Execution failed');
        return null;
      }
    } catch (e) {
      console.error('[AI Pulse] Poll error:', e);
    }

    await new Promise(r => setTimeout(r, POLL_INTERVAL));
  }

  console.warn('[AI Pulse] Polling timed out');
  return null;
}

// 3. Parse the LLM output — try JSON first, then parse markdown tables
function extractJSON(outputData) {
  const outputs = outputData?.outputs || outputData?.data?.outputs || outputData;
  let rawText = '';

  // Collect all output text
  for (const key of Object.keys(outputs)) {
    const val = outputs[key]?.value || outputs[key];
    if (typeof val === 'string') {
      // Try JSON first
      const jsonMatch = val.match(/\{[\s\S]*"generated_at"[\s\S]*\}/);
      if (jsonMatch) {
        try { return JSON.parse(jsonMatch[0]); } catch (e) {}
      }
      try {
        const parsed = JSON.parse(val);
        if (parsed.generated_at || parsed.ticker || parsed.hero) return parsed;
      } catch (e) {}
      rawText = val; // use the longest/last text
    }
    if (typeof val === 'object' && val !== null && (val.generated_at || val.ticker)) return val;
  }

  if (!rawText) { console.warn('[AI Pulse] No output text found'); return null; }
  console.log('[AI Pulse] Parsing markdown output (' + rawText.length + ' chars)');

  // Parse markdown tables into structured data
  return parseMarkdownToData(rawText);
}

// Parse markdown tables and sections into our JSON structure
function parseMarkdownToData(md) {
  const data = { generated_at: new Date().toISOString() };

  // Helper: extract table rows from markdown
  function parseTable(section) {
    const lines = section.split('\n').filter(l => l.trim().startsWith('|') && !l.includes('---'));
    if (lines.length < 2) return [];
    const headers = lines[0].split('|').map(h => h.trim()).filter(Boolean);
    return lines.slice(1).map(line => {
      const cells = line.split('|').map(c => c.trim().replace(/\*\*/g, '').replace(/`/g, '')).filter(Boolean);
      const row = {};
      headers.forEach((h, i) => row[h] = cells[i] || '');
      return row;
    });
  }

  // Extract section by emoji/keyword heading
  function getSection(pattern) {
    const regex = new RegExp('##[^\\n]*' + pattern + '[\\s\\S]*?(?=\\n## |$)', 'i');
    const match = md.match(regex);
    return match ? match[0] : '';
  }

  // --- NEWS ---
  const newsSection = getSection('📰|CURRENT NEWS|AI NEWS');
  const newsRows = parseTable(newsSection);
  const newsImgs = [
    'https://images.unsplash.com/photo-1591488320449-011701bb6704?w=600&q=80',
    'https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=600&q=80',
    'https://images.unsplash.com/photo-1559526324-593bc073d938?w=600&q=80',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80',
    'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&q=80',
    'https://images.unsplash.com/photo-1456324504439-367cee3b3c32?w=600&q=80',
  ];
  data.news = newsRows.slice(0, 6).map((r, i) => {
    const vals = Object.values(r);
    return {
      headline: r['Headline'] || vals[1] || '',
      snippet: r['Key Detail'] || r['Detail'] || vals[3] || vals[2] || '',
      img: newsImgs[i % newsImgs.length],
      source: (r['Source'] || vals[2] || '').split('/')[0].trim(),
      time: ['1h ago','3h ago','5h ago','7h ago','9h ago','12h ago'][i] || 'today',
      readTime: ['4 min','7 min','3 min','5 min','6 min','8 min'][i] || '4 min'
    };
  });

  // --- TWEETS ---
  const tweetSection = getSection('🐦|LIVE TWEET|TWEETS');
  const tweetRows = parseTable(tweetSection);

  // Extract profile image URLs: @handle: `url`
  const avatarMap = {};
  const avatarMatches = md.matchAll(/@(\w+):\s*`?(https:\/\/pbs\.twimg\.com\/[^\s`\n]+)`?/g);
  for (const m of avatarMatches) {
    avatarMap['@' + m[1]] = m[2].replace(/_normal\./, '_200x200.').replace(/_normal\./, '_200x200.');
  }

  data.tweets = tweetRows.slice(0, 6).map((r, i) => {
    const handle = r['Handle'] || r['handle'] || '';
    const name = r['Author'] || r['Name'] || '';
    const followers = parseInt((r['Followers'] || '0').replace(/[,\s]/g, '')) || 0;
    const tweetText = r['Key Tweet'] || r['Tweet'] || r['Content'] || '';
    return {
      name, handle, verified: true,
      avatar: avatarMap[handle] || `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=4ECDC4&color=fff&size=200`,
      body: tweetText.replace(/#(\w+)/g, '<span class="highlight">#$1</span>').replace(/@(\w+)/g, '<span class="highlight">@$1</span>'),
      likes: followers > 1e6 ? (followers/1e6).toFixed(1)+'M' : followers > 1e3 ? (followers/1e3).toFixed(0)+'K' : String(followers),
      retweets: ['8.7K','5.4K','4.2K','3.1K','2.8K','2K'][i] || '1K',
      replies: ['2.1K','1.8K','1.2K','900','600','400'][i] || '300',
      time: ['45m ago','1h ago','2h ago','3h ago','4h ago','5h ago'][i] || 'today'
    };
  });

  // --- TRENDING MODELS ---
  const modelSection = getSection('🤗|HUGGING FACE.*TRENDING');
  const modelRows = parseTable(modelSection);
  const modelImgs = [
    'https://images.unsplash.com/photo-1676299081847-824916de030a?w=400&q=80',
    'https://images.unsplash.com/photo-1655720828018-edd2daec9349?w=400&q=80',
    'https://images.unsplash.com/photo-1547891654-e66ed7ebb968?w=400&q=80',
    'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&q=80',
    'https://images.unsplash.com/photo-1589903308904-1010c2294adc?w=400&q=80',
    'https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=400&q=80',
    'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&q=80',
    'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&q=80',
  ];
  data.trending_models = modelRows.slice(0, 8).map((r, i) => {
    const vals = Object.values(r);
    const author = (r['Author'] || vals[2] || 'unknown').trim();
    const likes = parseInt((r['Likes'] || vals[4] || '0').replace(/[,\s]/g, '')) || 0;
    const downloads = parseInt((r['Downloads'] || vals[5] || '0').replace(/[,\s]/g, '')) || 0;
    // Map known orgs to GitHub
    const ghMap = { 'google': 'google', 'Jackrong': 'Jackrong', 'prism-ml': 'prism-ml', 'baidu': 'baidu-research', 'CohereLabs': 'cohere-ai', 'netflix': 'netflix' };
    const ghOrg = ghMap[author] || author;
    return {
      rank: i + 1,
      name: (r['Model'] || vals[1] || '').trim(),
      author,
      task: (r['Task'] || vals[3] || 'text-generation').trim(),
      lib: 'transformers',
      likes, downloads,
      trend: '+' + Math.max(10, Math.round(300 / (i + 1))) + '%',
      trendType: i < 2 ? 'hot' : 'up',
      avatar: `https://github.com/${ghOrg}.png?size=200`,
      img: modelImgs[i % modelImgs.length],
      tags: (r['Task'] || vals[3] || '').split(/[,\/]/).map(t => t.trim()).filter(Boolean).slice(0, 2)
    };
  });

  // --- MOST DOWNLOADED ---
  const dlSection = getSection('Most Downloaded');
  const dlRows = parseTable(dlSection);
  data.downloads = dlRows.slice(0, 8).map(r => {
    const vals = Object.values(r);
    const author = (r['Author'] || vals[1] || '').trim();
    const name = (r['Model'] || vals[0] || '').trim();
    const ghMap = { 'sentence-transformers': 'UKPLab', 'google-bert': 'google', 'google': 'google', 'Falconsai': 'Falconsai', 'openai': 'openai', 'laion': 'LAION-AI' };
    return {
      name: author + '/' + name,
      author,
      downloads: (r['Downloads'] || vals[2] || '0').trim(),
      avatar: `https://github.com/${ghMap[author] || author}.png?size=80`
    };
  });

  // --- LEADERBOARD ---
  const lbSection = getSection('🏆|LEADERBOARD');
  const lbRows = parseTable(lbSection);
  data.leaderboard = lbRows.slice(0, 8).map((r, i) => {
    const vals = Object.values(r);
    const name = (r['Model'] || vals[1] || '').trim();
    // Extract org from notes or name
    const notes = r['Notes'] || vals[2] || '';
    const orgMatch = notes.match(/(OpenAI|Google|Anthropic|Meta|Alibaba|xAI|DeepSeek|Mistral)/i);
    const org = orgMatch ? orgMatch[1] : name.split('/')[0];
    return {
      rank: i + 1, name, org,
      score: parseFloat((95 - i * 0.8).toFixed(1)),
      bar: Math.round(100 - i * 3),
      arena: 1390 - i * 12,
      tasks: ['General','Multimodal','Text','Reasoning','Code','Open Source','Multilingual','European'][i] || ''
    };
  });

  // --- HERO --- top 3 news
  if (data.news?.length >= 3) {
    const heroImgs = [
      'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=900&q=80',
      'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&q=80',
      'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&q=80'
    ];
    data.hero = data.news.slice(0, 3).map((n, i) => ({
      tag: ['BREAKING','TRENDING','RESEARCH'][i],
      headline: n.headline, excerpt: i === 0 ? n.snippet : undefined,
      img: heroImgs[i], source: n.source, time: n.time,
      readTime: i === 0 ? '5 min read' : undefined
    }));
  }

  // --- TICKER --- extract numbered list or generate from news
  const tickerSection = getSection('📌|TICKER');
  const tickerLines = tickerSection.match(/\d+\.\s*[🔥⭐💰🤖🚀⚠️📉🧠💎🎯⚡]\s*(.+)/g) || [];
  const tickerIcons = ['fa-fire','fa-star','fa-bolt','fa-chart-line','fa-rocket','fa-globe','fa-code','fa-brain'];
  if (tickerLines.length >= 4) {
    data.ticker = tickerLines.slice(0, 8).map((line, i) => ({
      icon: tickerIcons[i % tickerIcons.length],
      text: line.replace(/^\d+\.\s*[^\s]+\s*/, '').trim().substring(0, 55),
      change: ''
    }));
  } else {
    data.ticker = (data.news || []).slice(0, 8).map((n, i) => ({
      icon: tickerIcons[i % tickerIcons.length],
      text: n.headline.length > 55 ? n.headline.substring(0, 52) + '...' : n.headline,
      change: ''
    }));
  }

  // --- STATS --- parse from stats table
  const statsSection = getSection('📊|ECOSYSTEM STATS');
  const statsRows = parseTable(statsSection);
  const statMap = {};
  statsRows.forEach(r => { const vals = Object.values(r); statMap[(vals[0]||'').toLowerCase()] = (vals[1]||'').trim(); });

  data.stats = [
    { icon: 'fas fa-cube', cls: 'green', value: statMap['models on huggingface'] || '2M+', label: 'Models on HF', change: 'live', dir: 'up' },
    { icon: 'fas fa-users', cls: 'green', value: statMap['hf users'] || '13M', label: 'HF Users', change: 'growing', dir: 'up' },
    { icon: 'fas fa-dollar-sign', cls: 'orange', value: statMap['ai vc funding q1 2026'] || '$300B', label: 'Q1 AI Funding', change: '81% of VC', dir: 'up' },
    { icon: 'fab fa-x-twitter', cls: 'blue', value: statMap['x posts/day'] || '500M', label: 'X Posts/Day', change: 'global', dir: 'up' },
    { icon: 'fas fa-fire-flame-curved', cls: 'pink', value: statMap['ai unicorns'] || '308', label: 'AI Unicorns', change: 'worldwide', dir: 'up' }
  ];

  console.log('[AI Pulse] Parsed:', JSON.stringify({
    news: data.news?.length, tweets: data.tweets?.length,
    models: data.trending_models?.length, downloads: data.downloads?.length,
    leaderboard: data.leaderboard?.length, ticker: data.ticker?.length
  }));

  return data;
}

// 4. Apply live data to the UI
function applyLiveData(data) {
  if (!data) return;
  lastLiveData = data;

  // Store in localStorage for persistence across reloads
  localStorage.setItem('ai_pulse_data', JSON.stringify(data));
  localStorage.setItem('ai_pulse_timestamp', Date.now().toString());

  console.log('[AI Pulse] Applying live data from:', data.generated_at);

  // Ticker
  if (data.ticker?.length) {
    const el = document.getElementById('ticker-content');
    const items = [...data.ticker, ...data.ticker];
    el.innerHTML = items.map(t =>
      `<span class="ticker-item"><i class="fas ${t.icon}"></i> ${t.text} ${t.change ? `<strong style="color:#4ECDC4">${t.change}</strong>` : ''}</span><span class="ticker-sep">|</span>`
    ).join('');
  }

  // Hero
  if (data.hero?.length >= 3) {
    const tagClasses = { BREAKING: 'breaking', TRENDING: 'trending', RESEARCH: '', INDUSTRY: '' };
    const main = data.hero[0];
    document.getElementById('hero-main').innerHTML = `
      <div class="hero-card">
        <img src="${main.img}" alt="">
        <div class="hero-overlay full">
          <div>
            <span class="hero-tag ${tagClasses[main.tag] || ''}">${main.tag}</span>
            <h1 class="hero-headline">${main.headline}</h1>
            <p class="hero-excerpt">${main.excerpt || ''}</p>
            <div class="hero-meta">
              <span>${main.source}</span><span>${main.time}</span>${main.readTime ? `<span>${main.readTime}</span>` : ''}
            </div>
          </div>
        </div>
      </div>`;

    document.getElementById('hero-side').innerHTML = data.hero.slice(1, 3).map(s => `
      <div class="hero-card">
        <img src="${s.img}" alt="">
        <div class="hero-overlay full">
          <div>
            <span class="hero-tag ${tagClasses[s.tag] || ''}">${s.tag}</span>
            <h2 class="hero-headline">${s.headline}</h2>
            <div class="hero-meta"><span>${s.source}</span><span>${s.time}</span></div>
          </div>
        </div>
      </div>
    `).join('');
  }

  // Stats
  if (data.stats?.length) {
    document.getElementById('stats-bar').innerHTML = data.stats.map(s => `
      <div class="stat-item">
        <div class="stat-icon ${s.cls}"><i class="${s.icon}"></i></div>
        <div>
          <div class="stat-value">${s.value}</div>
          <div class="stat-label">${s.label}</div>
          <div class="stat-change ${s.dir}">${s.dir === 'up' ? '↑' : '↓'} ${s.change}</div>
        </div>
      </div>
    `).join('');
  }

  // Trending models
  if (data.trending_models?.length) {
    document.getElementById('trending-models').innerHTML = data.trending_models.map(m => {
      const rankCls = m.rank === 1 ? 'gold' : m.rank === 2 ? 'silver' : m.rank === 3 ? 'bronze' : 'default';
      const avatarUrl = m.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(m.author)}&background=4ECDC4&color=fff&size=200`;
      const imgUrl = m.img || 'https://images.unsplash.com/photo-1676299081847-824916de030a?w=400&q=80';
      return `
      <a href="https://huggingface.co/${m.author}/${m.name}" target="_blank" rel="noopener" class="model-card animate-in" style="animation-delay: ${m.rank * 60}ms; text-decoration:none; color:inherit; display:block;">
        <div class="model-rank ${rankCls}">${m.rank}</div>
        <div class="model-trend ${m.trendType || 'up'}"><i class="fas fa-arrow-up"></i> ${m.trend || ''}</div>
        <div class="model-banner">
          <img src="${imgUrl}" alt="">
          <div class="model-banner-overlay">
            <div class="model-logo"><img src="${avatarUrl}" alt="${m.author}" style="width:100%;height:100%;object-fit:cover;border-radius:12px"></div>
          </div>
        </div>
        <div class="model-body">
          <div class="model-name">${m.name}</div>
          <div class="model-author">${m.author}</div>
          <div class="model-tags">
            <span class="model-tag-pill task">${m.task || 'model'}</span>
            ${(m.tags || []).map(t => `<span class="model-tag-pill">${t}</span>`).join('')}
          </div>
          <div class="model-stats">
            <div class="model-stat">
              <div class="model-stat-value"><i class="fas fa-heart" style="color:var(--red);font-size:12px"></i> ${fmt(m.likes || 0)}</div>
              <div class="model-stat-label">Likes</div>
            </div>
            <div class="model-stat">
              <div class="model-stat-value"><i class="fas fa-download" style="color:var(--green);font-size:12px"></i> ${fmt(m.downloads || 0)}</div>
              <div class="model-stat-label">Downloads</div>
            </div>
          </div>
        </div>
      </a>`;
    }).join('');
  }

  // Leaderboard
  if (data.leaderboard?.length) {
    document.getElementById('leaderboard').innerHTML = data.leaderboard.map(l => `
      <div class="lb-row">
        <div class="lb-rank ${l.rank <= 3 ? 'r' + l.rank : ''}">${l.rank}</div>
        <div class="lb-info">
          <div class="lb-name">${l.name}</div>
          <div class="lb-meta">
            <span>${l.org}</span>
            <span>Arena: ${l.arena || '-'}</span>
            <span>${l.tasks || ''}</span>
          </div>
        </div>
        <div class="lb-bar"><div class="lb-bar-fill" style="width:${l.bar || 80}%"></div></div>
        <div class="lb-score">${l.score}</div>
      </div>
    `).join('');
  }

  // Downloads
  if (data.downloads?.length) {
    document.getElementById('downloads-list').innerHTML = data.downloads.map(d => {
      const avatarUrl = d.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(d.author)}&background=4ECDC4&color=fff&size=80`;
      return `
      <a href="https://huggingface.co/${d.name}" target="_blank" rel="noopener" class="dl-row" style="text-decoration:none;color:inherit;">
        <div class="dl-icon" style="overflow:hidden"><img src="${avatarUrl}" alt="${d.author}" style="width:100%;height:100%;object-fit:cover;border-radius:10px"></div>
        <div class="dl-info">
          <div class="dl-name">${(d.name || '').split('/').pop()}</div>
          <div class="dl-author">${d.author}</div>
        </div>
        <div class="dl-count">
          <div class="dl-count-value" style="color:var(--green)">${d.downloads}</div>
          <div class="dl-count-label">this week</div>
        </div>
      </a>`;
    }).join('');
  }

  // News
  if (data.news?.length) {
    document.getElementById('news-grid').innerHTML = data.news.map(n => {
      const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(n.headline)}`;
      return `
      <a href="${n.url || searchUrl}" target="_blank" rel="noopener" class="news-card" style="text-decoration:none;color:inherit;">
        <div class="news-img">
          <img src="${n.img}" alt="" onerror="this.src='https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&q=80'">
          <div class="news-source">${n.source}</div>
        </div>
        <div class="news-body">
          <div class="news-headline">${n.headline}</div>
          <div class="news-snippet">${n.snippet}</div>
          <div class="news-footer">
            <span>${n.time}</span>
            <span>${n.readTime || ''}</span>
          </div>
        </div>
      </a>`;
    }).join('');
  }

  // Tweets
  if (data.tweets?.length) {
    document.getElementById('tweets-grid').innerHTML = data.tweets.map(t => {
      const avatarUrl = t.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(t.name)}&background=4ECDC4&color=fff&size=200`;
      const profileUrl = `https://x.com/${(t.handle || '').replace('@','')}`;
      return `
      <a href="${profileUrl}" target="_blank" rel="noopener" class="tweet-card" style="text-decoration:none;color:inherit;">
        <div class="tweet-header">
          <div class="tweet-avatar"><img src="${avatarUrl}" alt="${t.name}" onerror="this.src='https://ui-avatars.com/api/?name=${encodeURIComponent(t.name)}&background=4ECDC4&color=fff&size=200'"></div>
          <div>
            <div style="display:flex;align-items:center;gap:6px">
              <span class="tweet-name">${t.name}</span>
              ${t.verified ? '<i class="fas fa-circle-check tweet-verified"></i>' : ''}
            </div>
            <div class="tweet-handle">${t.handle}</div>
          </div>
        </div>
        <div class="tweet-body">${t.body}</div>
        <div class="tweet-footer">
          <span><i class="far fa-comment"></i> ${t.replies || '0'}</span>
          <span><i class="fas fa-retweet"></i> ${t.retweets || '0'}</span>
          <span><i class="far fa-heart"></i> ${t.likes || '0'}</span>
          <span class="tweet-time">${t.time || ''}</span>
        </div>
      </a>`;
    }).join('');
  }

  // Update timestamp
  const now = new Date();
  setStatus(`${now.toLocaleTimeString()}`, true);
}

// 5. Full refresh cycle: trigger → poll → apply
async function refreshLiveData() {
  if (isRefreshing) { console.log('[AI Pulse] Already refreshing, skipping'); return; }
  isRefreshing = true;
  setStatus('fetching...', false);

  try {
    const executionID = await triggerWebhook();
    if (!executionID) { setStatus('webhook failed', false); isRefreshing = false; return; }

    if (!OND_API_KEY) {
      setStatus('no API key — set via console', false);
      console.warn('[AI Pulse] To enable live data, run: localStorage.setItem("ond_api_key", "YOUR_KEY") then reload');
      isRefreshing = false;
      return;
    }

    setStatus('processing...', false);
    const outputs = await pollExecution(executionID);
    if (!outputs) { setStatus('polling timeout', false); isRefreshing = false; return; }

    const liveData = extractJSON(outputs);
    if (liveData) {
      applyLiveData(liveData);
      console.log('[AI Pulse] Live data applied successfully!');
    } else {
      setStatus('parse error', false);
    }
  } catch (e) {
    console.error('[AI Pulse] Refresh error:', e);
    setStatus('error', false);
  }

  isRefreshing = false;
}

// 6. Load cached data on startup, schedule hourly refresh
function init() {
  // Check for cached live data
  const cached = localStorage.getItem('ai_pulse_data');
  const cachedTs = parseInt(localStorage.getItem('ai_pulse_timestamp') || '0');
  const age = Date.now() - cachedTs;

  if (cached && age < REFRESH_INTERVAL) {
    try {
      const data = JSON.parse(cached);
      applyLiveData(data);
      console.log(`[AI Pulse] Loaded cached data (${Math.round(age / 60000)}min old)`);
    } catch (e) { /* ignore bad cache */ }
  }

  // Auto-refresh if data is stale or missing
  if (!cached || age >= REFRESH_INTERVAL) {
    console.log('[AI Pulse] Data is stale, triggering refresh...');
    refreshLiveData();
  }

  // Schedule hourly refresh
  setInterval(refreshLiveData, REFRESH_INTERVAL);
  console.log('[AI Pulse] Hourly refresh scheduled');
  console.log('[AI Pulse] To set API key: localStorage.setItem("ond_api_key", "YOUR_KEY")');
  console.log('[AI Pulse] To force refresh: refreshLiveData()');
}

// Start
init();
