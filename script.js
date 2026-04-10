// Array containing dynamic configurations for each of the 8 cards
const projects = [
  {
    id: "korvix-1",
    title: "Korvix CRM 2.0",
    tag: "MEAN",
    tagClass: "tag-mean",
    bgImage: "assests/korvix-crm/korvix-crm-dashboard.png",
    liveUrl: "https://korvix-crm-2-0.vercel.app",
    repoUrl: "https://github.com/syedusamaali-dev/Korvix-CRM-2.0",
    summary: "Enterprise CRM with KPI dashboards, customers, companies, contacts, leads, deals, tasks, calendar, reports, and real-time notifications.",
    description: "<strong>Korvix CRM 2.0</strong> is a high-performance, full-stack Customer Relationship Management system designed to simplify lead pipelines, customer lifecycle operations, and corporate communications. Built using Angular 17+ on the frontend and a Node.js/Express REST API on the backend with MongoDB, it features real-time WebSocket updates, multi-tenant workspace routing, modular 3-layer architecture, robust Zod validation, and secure HTTP-Only JWT authentication."
  },
  {
    id: "korvix-2",
    title: "Korvix CRM 2.0 (Instance 2)",
    tag: "MEAN",
    tagClass: "tag-mean",
    bgImage: "assests/korvix-crm/korvix-crm-dashboard.png",
    liveUrl: "https://korvix-crm-2-0.vercel.app",
    repoUrl: "https://github.com/syedusamaali-dev/Korvix-CRM-2.0",
    summary: "Enterprise CRM with KPI dashboards, customers, companies, contacts, leads, deals, tasks, calendar, reports, and real-time notifications.",
    description: "<strong>Korvix CRM 2.0</strong> is a high-performance, full-stack Customer Relationship Management system designed to simplify lead pipelines, customer lifecycle operations, and corporate communications."
  },
  {
    id: "korvix-3",
    title: "Korvix CRM 2.0 (Instance 3)",
    tag: "MEAN",
    tagClass: "tag-mean",
    bgImage: "assests/korvix-crm/korvix-crm-dashboard.png",
    liveUrl: "https://korvix-crm-2-0.vercel.app",
    repoUrl: "https://github.com/syedusamaali-dev/Korvix-CRM-2.0",
    summary: "Enterprise CRM with KPI dashboards, customers, companies, contacts, leads, deals, tasks, calendar, reports, and real-time notifications.",
    description: "<strong>Korvix CRM 2.0</strong> is a high-performance, full-stack Customer Relationship Management system designed to simplify lead pipelines, customer lifecycle operations, and corporate communications."
  },
  {
    id: "korvix-4",
    title: "Korvix CRM 2.0 (Instance 4)",
    tag: "MEAN",
    tagClass: "tag-mean",
    bgImage: "assests/korvix-crm/korvix-crm-dashboard.png",
    liveUrl: "https://korvix-crm-2-0.vercel.app",
    repoUrl: "https://github.com/syedusamaali-dev/Korvix-CRM-2.0",
    summary: "Enterprise CRM with KPI dashboards, customers, companies, contacts, leads, deals, tasks, calendar, reports, and real-time notifications.",
    description: "<strong>Korvix CRM 2.0</strong> is a high-performance, full-stack Customer Relationship Management system designed to simplify lead pipelines, customer lifecycle operations, and corporate communications."
  },
  {
    id: "korvix-5",
    title: "Korvix CRM 2.0 (Instance 5)",
    tag: "MEAN",
    tagClass: "tag-mean",
    bgImage: "assests/korvix-crm/korvix-crm-dashboard.png",
    liveUrl: "https://korvix-crm-2-0.vercel.app",
    repoUrl: "https://github.com/syedusamaali-dev/Korvix-CRM-2.0",
    summary: "Enterprise CRM with KPI dashboards, customers, companies, contacts, leads, deals, tasks, calendar, reports, and real-time notifications.",
    description: "<strong>Korvix CRM 2.0</strong> is a high-performance, full-stack Customer Relationship Management system designed to simplify lead pipelines, customer lifecycle operations, and corporate communications."
  },
  {
    id: "korvix-6",
    title: "Korvix CRM 2.0 (Instance 6)",
    tag: "MEAN",
    tagClass: "tag-mean",
    bgImage: "assests/korvix-crm/korvix-crm-dashboard.png",
    liveUrl: "https://korvix-crm-2-0.vercel.app",
    repoUrl: "https://github.com/syedusamaali-dev/Korvix-CRM-2.0",
    summary: "Enterprise CRM with KPI dashboards, customers, companies, contacts, leads, deals, tasks, calendar, reports, and real-time notifications.",
    description: "<strong>Korvix CRM 2.0</strong> is a high-performance, full-stack Customer Relationship Management system designed to simplify lead pipelines, customer lifecycle operations, and corporate communications."
  },
  {
    id: "korvix-7",
    title: "Korvix CRM 2.0 (Instance 7)",
    tag: "MEAN",
    tagClass: "tag-mean",
    bgImage: "assests/korvix-crm/korvix-crm-dashboard.png",
    liveUrl: "https://korvix-crm-2-0.vercel.app",
    repoUrl: "https://github.com/syedusamaali-dev/Korvix-CRM-2.0",
    summary: "Enterprise CRM with KPI dashboards, customers, companies, contacts, leads, deals, tasks, calendar, reports, and real-time notifications.",
    description: "<strong>Korvix CRM 2.0</strong> is a high-performance, full-stack Customer Relationship Management system designed to simplify lead pipelines, customer lifecycle operations, and corporate communications."
  },
  {
    id: "korvix-8",
    title: "Korvix CRM 2.0 (Instance 8)",
    tag: "MEAN",
    tagClass: "tag-mean",
    bgImage: "assests/korvix-crm/korvix-crm-dashboard.png",
    liveUrl: "https://korvix-crm-2-0.vercel.app",
    repoUrl: "https://github.com/syedusamaali-dev/Korvix-CRM-2.0",
    summary: "Enterprise CRM with KPI dashboards, customers, companies, contacts, leads, deals, tasks, calendar, reports, and real-time notifications.",
    description: "<strong>Korvix CRM 2.0</strong> is a high-performance, full-stack Customer Relationship Management system designed to simplify lead pipelines, customer lifecycle operations, and corporate communications."
  }
];

// Initialize and render 8 project cards
document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("projectsGrid");
  if (!grid) return;

  grid.innerHTML = projects.map(proj => `
    <div class="project-card" onclick="openProjectModal('${proj.id}')">
      <img class="card-bg-anim" src="${proj.bgImage}" alt="${proj.title} preview">
      <div class="card-content">
        <span class="tag ${proj.tagClass}">${proj.tag}</span>
        <h1>${proj.title}</h1>
        <div class="modal-action-links-main">
          <a href="${proj.liveUrl}" target="_blank" rel="noopener noreferrer" class="primary-link-btn btn-live" onclick="event.stopPropagation();">🌐 Open Live Website</a>
        </div>
        <p>${proj.summary}</p>
        <div class="card-links">
          <a href="${proj.repoUrl}" target="_blank" rel="noopener noreferrer" class="action-btn btn-github" onclick="event.stopPropagation();">🐙 GitHub Repo</a>
          <a href="https://www.linkedin.com/in/syedusamaali-dev/" target="_blank" class="action-btn btn-linkedin" onclick="event.stopPropagation();">💼 LinkedIn</a>
          <a href="https://wa.me/923327969441" target="_blank" class="action-btn btn-whatsapp" onclick="event.stopPropagation();">💬 WhatsApp</a>
        </div>
      </div>
    </div>
  `).join("");
});

function openModal(type) {
  const modal = document.getElementById('infoModal');
  const container = document.getElementById('modalContainer');
  const body = document.getElementById('modalBody');

  container.className = 'modal-content';

  if (type === 'about') {
    body.innerHTML = `
      <div style="display: flex; align-items: center; gap: 0.6rem; margin-bottom: 0.8rem;">
        <span style="font-size: 1.8rem;">🚀</span>
        <h2 style="color: var(--accent); font-size: 1.75rem;">About Me</h2>
      </div>

      <p style="color: var(--text-main); font-size: 1.05rem; line-height: 1.65;">
        Full-Stack Engineer with <strong>5+ years of experience</strong> architecting high-performance web applications across healthcare, banking, and e-commerce platforms. Specializing in <strong>Angular, React, and Node.js</strong>, I build scalable SPAs, real-time analytics dashboards, and seamlessly integrate AI-driven workflows into production environments.
      </p>

      <div class="modal-badges">
        <span class="badge-item">⚡ Angular / NgRx</span>
        <span class="badge-item">⚛️ React / Redux</span>
        <span class="badge-item">🟢 Node.js / Express</span>
        <span class="badge-item">🤖 AI Integration</span>
        <span class="badge-item">📊 WebSockets</span>
      </div>

      <div class="modal-highlights">
        <div class="highlight-box">
          <span>Experience</span>
          <p>5+ Years Industry Experience</p>
        </div>
        <div class="highlight-box">
          <span>Domains</span>
          <p>Fintech, Healthcare & AI Solutions</p>
        </div>
      </div>
    `;
  } else if (type === 'contact') {
    body.innerHTML = `
      <div style="display: flex; align-items: center; gap: 0.6rem; margin-bottom: 0.8rem;">
        <span style="font-size: 1.8rem;">📩</span>
        <h2 style="color: var(--accent); font-size: 1.75rem;">Let's Connect</h2>
      </div>

      <p style="color: var(--text-main); font-size: 1.05rem; line-height: 1.65;">
        Have a project in mind, looking for architectural collaboration, or want to discuss full-stack & AI solutions? Reach out directly via any of the channels below.
      </p>

      <div class="modal-badges">
        <a href="https://wa.me/923327969441" target="_blank" class="badge-item">💬 WhatsApp Chat</a>
        <a href="https://github.com/syedusamaali-dev" target="_blank" class="badge-item">🐙 GitHub Profile</a>
        <a href="https://www.linkedin.com/in/syedusamaali-dev/" target="_blank" class="badge-item">💼 LinkedIn Network</a>
        <a href="https://portfolio-syedusamaali-dev.vercel.app/" target="_blank" class="badge-item">🌐 Live Portfolio</a>
      </div>

      <div class="modal-highlights">
        <div class="highlight-box">
          <span>Phone / WhatsApp</span>
          <a href="tel:+923327969441">+92 332 7969441</a>
        </div>
        <div class="highlight-box">
          <span>Live Portfolio</span>
          <a href="https://portfolio-syedusamaali-dev.vercel.app/" target="_blank">syedusamaali-dev.vercel.app</a>
        </div>
        <div class="highlight-box">
          <span>GitHub Repository</span>
          <a href="https://github.com/syedusamaali-dev" target="_blank">github.com/syedusamaali-dev</a>
        </div>
        <div class="highlight-box">
          <span>LinkedIn Profile</span>
          <a href="https://www.linkedin.com/in/syedusamaali-dev/" target="_blank">linkedin.com/in/syedusamaali-dev</a>
        </div>
      </div>
    `;
  }
  modal.style.display = 'flex';
}

function openProjectModal(projectId) {
  const modal = document.getElementById('infoModal');
  const container = document.getElementById('modalContainer');
  const body = document.getElementById('modalBody');

  const proj = projects.find(p => p.id === projectId);
  if (!proj) return;

  container.className = 'modal-content project-modal-content';

  body.innerHTML = `
    <div class="project-modal-scroll">
      <div class="project-modal-subhead">Project Description</div>
      <h2 class="project-modal-heading">${proj.title}</h2>

      <p class="project-modal-description">
        ${proj.description}
      </p>

      <div class="tech-section-title">⚡ Tech Stack & Tools</div>
      <div class="technology-grid">
        <span class="technology-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" alt="Angular"> Angular 17+</span>
        <span class="technology-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js"> Node.js</span>
        <span class="technology-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" style="filter: invert(1);" alt="Express"> Express.js</span>
        <span class="technology-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB"> MongoDB</span>
        <span class="technology-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg" style="filter: invert(1);" alt="Socket.io"> Socket.io</span>
        <span class="technology-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rxjs/rxjs-original.svg" alt="RxJS"> RxJS</span>
        <span class="technology-item"><img src="https://jwt.io/img/pic_logo.svg" alt="JWT"> JWT Auth</span>
        <span class="technology-item"><img src="https://raw.githubusercontent.com/colinhacks/zod/main/logo.svg" alt="Zod"> Zod Schema</span>
      </div>

      <div class="modal-action-links">
        <a href="${proj.liveUrl}" target="_blank" rel="noopener noreferrer" class="primary-link-btn btn-live">🌐 Open Live Website</a>
        <a href="${proj.repoUrl}" target="_blank" rel="noopener noreferrer" class="primary-link-btn btn-repo">🐙 View GitHub Repository</a>
      </div>

      <div class="gallery-title">📸 Application Flow & Interface Screenshots (10 Views)</div>
      <div class="screenshot-gallery">
        <figure class="screenshot-card">
          <img src="assests/korvix-crm/korvix-crm-dashboard.png" alt="Login Page">
          <figcaption>01. Data Analytic Chart — Dashboard View</figcaption>
        </figure>
        <figure class="screenshot-card">
          <img src="assests/korvix-crm/korvix-crm-Notification implementation Socketio.PNG" alt="Signup Page">
          <figcaption>02. Socket.IO — Notification Implementation</figcaption>
        </figure>
        <figure class="screenshot-card">
          <img src="assests/korvix-crm/korvix-crm-customers.png" alt="Companies Module">
          <figcaption>03. Customer — Corporate Workspace Customers</figcaption>
        </figure>
        <figure class="screenshot-card">
          <img src="assests/korvix-crm/korvix-crm-companies.png" alt="Contacts View">
          <figcaption>04. Companies — Align Association List</figcaption>
        </figure>
        <figure class="screenshot-card">
          <img src="assests/korvix-crm/korvix-crm-contacts.png" alt="Leads Module">
          <figcaption>05. Contacts — Individual Stakeholders Directory</figcaption>
        </figure>
        <figure class="screenshot-card">
          <img src="assests/korvix-crm/korvix-crm-leads.png" alt="Deals Kanban">
          <figcaption>06. Leads — Pipeline Tracker & Qualification</figcaption>
        </figure>
        <figure class="screenshot-card">
          <img src="assests/korvix-crm/korvix-crm-deals.png" alt="Tasks Management">
          <figcaption>07. Deals — Kanban Stage Board & Revenue Funnel</figcaption>
        </figure>
        <figure class="screenshot-card">
          <img src="assests/korvix-crm/korvix-crm-tasks.png" alt="Calendar View">
          <figcaption>08. Tasks — Operation Workflows & Priority Tracker</figcaption>
        </figure>
        <figure class="screenshot-card">
          <img src="assests/korvix-crm/korvix-crm-calendar.png" alt="Reports & Analytics">
          <figcaption>09. Calendar — Meeting Schedules & Event Sync</figcaption>
        </figure>
        <figure class="screenshot-card">
          <img src="assests/korvix-crm/korvix-crm-reports.png" alt="Reports & Analytics">
          <figcaption>10. Reports — Executive Analytics & Export Suite</figcaption>
        </figure>
      </div>
    </div>
  `;

  modal.style.display = 'flex';
}

function closeModal() {
  document.getElementById('infoModal').style.display = 'none';
}

window.onclick = function(event) {
  const modal = document.getElementById('infoModal');
  if (event.target === modal) {
    modal.style.display = 'none';
  }
};