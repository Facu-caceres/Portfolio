/**
 * Facundo Caceres Olguin - Junior SOC Analyst Portfolio
 * Interactive Terminal, Filtering, Modals, Audio Synthesizer & i18n Language Switcher (EN / es-AR)
 */

document.addEventListener('DOMContentLoaded', () => {
  initLanguage();
  initTerminal();
  initSkillFilters();
  initProjectModals();
  initResumeModal();
  initContactInteractions();
  initScrollSpy();
  initAudioFeedback();
  initMobileMenu();
  initLiveClock();
});

/* ==========================================================================
   1. LIVE CLOCK & SOC STATUS
   ========================================================================== */
function initLiveClock() {
  const clockElem = document.getElementById('live-clock');
  if (!clockElem) return;

  function updateClock() {
    const now = new Date();
    const utcHours = String(now.getUTCHours()).padStart(2, '0');
    const utcMinutes = String(now.getUTCMinutes()).padStart(2, '0');
    const utcSeconds = String(now.getUTCSeconds()).padStart(2, '0');
    clockElem.textContent = `${utcHours}:${utcMinutes}:${utcSeconds} UTC`;
  }
  updateClock();
  setInterval(updateClock, 1000);
}

/* ==========================================================================
   2. I18N LANGUAGE SWITCHER (English / Argentine Spanish es-AR)
   ========================================================================== */
let currentLang = 'en';

const translations = {
  en: {
    // Navigation
    nav_about: "About",
    nav_skills: "Skills",
    nav_projects: "Labs & Projects",
    nav_education: "Education",
    nav_contact: "Contact",
    nav_resume: "Resume (PDF)",

    // Hero Section
    hero_badge: "BLUE TEAM READINESS: TIER 1 SOC | REMOTE / HYBRID / ON-SITE",
    hero_name_prefix: "Facundo",
    hero_name_suffix: "Caceres Olguin",
    hero_tagline_role: "Junior SOC Analyst",
    hero_tagline_focus: "Blue Team & Threat Detection",
    hero_tagline_edu: "Computer Eng. @ UNLaM",
    hero_pitch: "\"Deconstructing attack vectors, analyzing network traffic, and building resilient detection workflows to mitigate threats before they escalate.\"",
    hero_stat_acad_label: "Academic Standing",
    hero_stat_acad_val: "Entering 4th Yr",
    hero_stat_acad_sub: "UNLaM Engineering",
    hero_stat_roles_label: "Target Roles",
    hero_stat_roles_val: "Junior SOC / T1",
    hero_stat_roles_sub: "Cyber Security Support",
    hero_stat_invest_label: "Forensics & Triage",
    hero_stat_invest_val: "PCAP & Logs",
    hero_stat_invest_sub: "Wireshark / Syslog",
    hero_cta_projects: "Explore Labs & Writeups",
    hero_cta_contact: "Initiate Contact",
    hero_channels_label: "Defensive Channels:",
    hero_copy_email: "Copy Email",

    // Terminal
    terminal_title: "bash - soc-agent@security-workstation:~",
    terminal_cmd_status: "status",
    terminal_cmd_tools: "tools",
    terminal_cmd_labs: "labs",
    terminal_cmd_mitre: "mitre",
    terminal_cmd_triage: "triage",
    terminal_cmd_clear: "clear",
    terminal_chip_label: "QUICK:",
    terminal_input_placeholder: "Type a command (e.g. 'help', 'triage', 'tools')...",
    terminal_initial_badge: "TIER 1 SOC READY",
    terminal_initial_roles: "Target Roles: Junior SOC Analyst | SOC Tier 1 | Cyber Support",
    terminal_initial_edu: "Education: Computer Engineering (Entering 4th Year @ UNLaM)",
    terminal_initial_focus: "Core Focus: Blue Team Operations, Alert Triage, Threat Detection",
    terminal_initial_forensics: "Forensics & Logs: Windows Event Logs, Linux Syslog, Wireshark, tcpdump",
    terminal_initial_stack: "Tools & Stack: Nmap, Burp Suite, Metasploit, Sysinternals, Python, Go, Bash",
    terminal_initial_location: "Location: Buenos Aires, Argentina (Remote / Hybrid / On-site)",
    terminal_initial_status: "STATUS: \"Open to Junior SOC Roles & Defensive Security Opportunities\"",
    terminal_hint: "Type <span class=\"text-cyan-400 font-mono\">help</span> or click command chips below to inspect triage data.",

    // About Section
    about_heading: "About Me",
    about_subheading: "Defensive Mindset, Engineering Rigor & Incident Triage",
    about_card_title: "Computer Engineering Student with a Focus on Defensive Operations",
    about_p1: "I am a Computer Engineering student currently <strong class=\"text-white font-semibold\">entering my 4th year</strong> at the <span class=\"text-emerald-400 font-medium\">Universidad Nacional de La Matanza (UNLaM)</span>, integrating deep academic foundations in operating systems, computer networking, distributed systems, and advanced algorithms with hands-on defensive security engineering.",
    about_p2: "My primary technical drive is in <strong class=\"text-white font-semibold\">Blue Team operations, alert triage, and incident handling</strong>: investigating anomalous telemetry, correlating security events across Windows (Security Event Logs) and Linux (Syslog/auditd) environments, and dissecting network traffic with Wireshark and tcpdump to uncover stealthy attack vectors.",
    about_p3: "Through continuous practice on <strong class=\"text-emerald-400\">Hack The Box</strong> and custom laboratory environments, I analyze adversary tactics mapped directly against the <strong class=\"text-cyan-400\">MITRE ATT&CK</strong> matrix and <strong class=\"text-cyan-400\">OWASP Top 10</strong>. This offensive deconstruction directly informs how I build actionable detection rules, harden infrastructure, and minimize response times.",
    about_pillar1_title: "DEFENSIVE METHODOLOGY",
    about_pillar1_desc: "Rigorous alert triage, separating false positives from genuine compromise, and adhering to standard Incident Response lifecycles (NIST / SANS).",
    about_pillar2_title: "SYSTEMS & NETWORKING DEPTH",
    about_pillar2_desc: "In-depth grasp of TCP/IP protocol handshakes, DNS anomalies, Linux CLI internals, and Active Directory authentication fundamentals.",
    about_lifecycle_title: "DEFENSIVE LIFECYCLE",
    about_step1_title: "Telemetry & Ingestion",
    about_step1_desc: "Syslog, WinEvent (4624/4625/4688/7045), PCAP feeds, NetFlow streams.",
    about_step2_title: "Triage & Normalization",
    about_step2_desc: "Filter false positives, assess event velocity, prioritize incident severity.",
    about_step3_title: "PCAP & Artifact Forensics",
    about_step3_desc: "Wireshark stream reassembly, payload decoding, Sysinternals process inspection.",
    about_step4_title: "Containment & Remediation",
    about_step4_desc: "Host isolation, ticket documentation, credential revocation, firewall filtering.",
    about_assurance: "Ready to deliver Tier 1 triage velocity & thorough documentation from Day 1.",

    // Skills Section
    skills_heading: "Technical Arsenal",
    skills_subheading: "Defensive Operations, Analysis & Forensics, Security Tools & Scripting",
    skills_search_placeholder: "Search skill or tool...",
    skills_filter_all: "All",
    skills_filter_soc: "SOC & IR",
    skills_filter_network: "Network",
    skills_filter_systems: "Tools & AD",
    skills_filter_scripting: "Scripting",

    skills_c1_title: "Blue Team Operations & Triage",
    skills_c1_sub: "Alert Triage, Incident Handling & Threat Detection",
    skills_c1_li1: "<strong class=\"text-white font-medium\">Alert Triage & Incident Handling:</strong> Processing security telemetry, separating benign activity from malicious indicators, and escalating actionable incident tickets.",
    skills_c1_li2: "<strong class=\"text-white font-medium\">Windows Event Logs:</strong> Investigation of Security Event IDs: 4624 (Successful Logon), 4625 (Failed Logon), 4688 (Process Creation), 7045 (Service Installation), 1102 (Log Cleared).",
    skills_c1_li3: "<strong class=\"text-white font-medium\">Linux Syslog & auditd:</strong> Tracking authentication anomalies in <code class=\"text-cyan-300 font-mono\">/var/log/auth.log</code>, monitoring sudo usage, and inspecting execve syscalls.",
    skills_c1_li4: "<strong class=\"text-white font-medium\">MITRE ATT&CK Mapping:</strong> Correlating observed indicators across Initial Access, Execution, Persistence, Privilege Escalation, and Exfiltration.",
    skills_c1_li5: "<strong class=\"text-white font-medium\">OWASP Top 10:</strong> Deconstructing and remediating Injection (SQLi/OS Command Injection), Broken Access Control, and Server-Side Request Forgery.",

    skills_c2_title: "Network Forensics & Analysis",
    skills_c2_sub: "Packet Dissection, Protocol Inspection & Scan Detection",
    skills_c2_li1: "<strong class=\"text-white font-medium\">Wireshark & PCAP Dissection:</strong> Following TCP streams, inspecting packet headers, analyzing retransmissions, and reconstructing cleartext transmissions.",
    skills_c2_li2: "<strong class=\"text-white font-medium\">tcpdump CLI & BPF:</strong> Crafting targeted Berkeley Packet Filters on command line to isolate suspicious host IPs, unusual ports, and anomalous protocols.",
    skills_c2_li3: "<strong class=\"text-white font-medium\">Protocol Deep Inspection:</strong> TCP 3-way handshake analysis, UDP traffic patterns, DNS queries (detecting high-entropy tunneling), and HTTP/HTTPS headers.",
    skills_c2_li4: "<strong class=\"text-white font-medium\">Malicious Scans & Cleartext:</strong> Distinguishing half-open TCP SYN scans from Connect scans and locating exposed credentials traversing unencrypted channels.",

    skills_c3_title: "Security Tools & Systems",
    skills_c3_sub: "Tooling, Process Inspection & Directory Services",
    skills_c3_li1: "<strong class=\"text-white font-medium\">Nmap:</strong> Service enumeration, version detection, NSE scripting, and analyzing scanner traffic signatures.",
    skills_c3_li2: "<strong class=\"text-white font-medium\">Burp Suite & Metasploit:</strong> Intercepting web application traffic, identifying vulnerable endpoints, and analyzing exploit payloads to formulate defenses.",
    skills_c3_li3: "<strong class=\"text-white font-medium\">Sysinternals Suite:</strong> Process Explorer and Process Monitor (Procmon) for investigating spawned processes, handles, and DLL injections.",
    skills_c3_li4: "<strong class=\"text-white font-medium\">Linux CLI & Active Directory:</strong> Fluent terminal administration in Debian, Kali, and Ubuntu; understanding AD Domain Services, Kerberos tickets, and LDAP.",

    skills_c4_title: "Scripting & Languages",
    skills_c4_sub: "Automation, Log Parsing & Secure Systems Programming",
    skills_c4_li1: "<strong class=\"text-white font-medium\">Python & Go:</strong> Writing automated log parsers, extracting IOCs using regular expressions, socket communication, and high-concurrency tooling.",
    skills_c4_li2: "<strong class=\"text-white font-medium\">Bash Scripting:</strong> Command-line pipelines leveraging grep, awk, sed, sort, and uniq for rapid triage on live incident endpoints.",
    skills_c4_li3: "<strong class=\"text-white font-medium\">Java & C:</strong> Secure application engineering, memory allocation safety, defensive boundary validation, and POSIX system call understanding.",
    skills_c4_li4: "<strong class=\"text-white font-medium\">SQL (SQL Server):</strong> Relational schema design, administration, data integrity constraints, and defensive parameterized queries to prevent SQL injection.",

    // Projects Section
    projects_heading: "Labs & Featured Projects",
    projects_subheading: "Practical Attack Path Analysis, Protocol Forensics & Defensive Software",
    projects_takeaway_label: "Defensive Takeaway:",
    projects_p1_title: "Hack The Box Practice & Threat Analysis",
    projects_p1_desc: "Analyzing attack paths, exploiting web vulnerabilities (SQLi, OS Command Injection), privilege escalation in Linux/Windows, and creating actionable defensive mitigation documentation.",
    projects_p1_takeaway: "Formulated auditd rules for spawned interactive shells, enforced least privilege across sudoers, and mapped Snort/Suricata rules to block injection payloads.",
    projects_p1_btn: "View Defensive Playbook",

    projects_p2_title: "Network Traffic & Protocol Analysis",
    projects_p2_desc: "Deep packet inspection with Wireshark and tcpdump, analyzing protocol handshakes across TCP/IP, DNS, and HTTP/HTTPS, identifying malicious port scans and cleartext transmissions.",
    projects_p2_takeaway: "Identified half-open TCP SYN scans vs full Connect scans, extracted cleartext credentials, and established BPF packet filters for incident investigations.",
    projects_p2_btn: "View Traffic Filters",

    projects_p3_title: "Defensive Software & Database Engineering",
    projects_p3_desc: "Secure programming in Java and C, database modeling and administration using SQL Server with strict emphasis on data integrity, ACID principles, and input sanitization.",
    projects_p3_takeaway: "Eliminated SQL injection vectors with parameterized prepared statements, prevented memory buffer overflows in C, and enforced role-based database constraints.",
    projects_p3_btn: "View Architecture Specs",

    projects_bonus_badge: "BONUS DEFENSIVE TOOLING",
    projects_bonus_title: "Automated Brute-Force & Anomaly Detection Pipeline",
    projects_bonus_desc: "Custom log-parser parsing multi-gigabyte auth.log files and Windows Security events, detecting brute-force threshold breaches, and producing formatted incident triage dossiers with external IP threat enrichment.",
    projects_bonus_btn: "View Script & Docs",

    // Education Section
    education_heading: "Education & Certifications",
    education_subheading: "Academic Credentials at UNLaM & Active Security Certifications Track",
    education_deg_level: "BACHELOR OF SCIENCE",
    education_deg_title: "Computer Engineering (Ingeniería en Informática)",
    education_inst: "Universidad Nacional de La Matanza (UNLaM)",
    education_standing: "Entering 4th Year",
    education_period: "2023 – Present",
    education_desc: "The Computer Engineering curriculum at UNLaM delivers an in-depth foundation in hardware-software interfaces, systems programming, and high-performance network engineering—providing direct analytical leverage for investigating sophisticated cyber threats.",
    education_coursework_title: "Relevant Coursework:",
    education_cw1_title: "Computer Networks",
    education_cw1_desc: "OSI & TCP/IP stack, routing protocols, packet routing, socket programming.",
    education_cw2_title: "Operating Systems",
    education_cw2_desc: "Process scheduling, IPC, memory management, file systems, Linux kernel primitives.",
    education_cw3_title: "Distributed Systems",
    education_cw3_desc: "Consensus algorithms, fault tolerance, network synchronization, high-availability.",
    education_cw4_title: "Database Architecture",
    education_cw4_desc: "Relational schema design, SQL Server administration, ACID transactions, data security.",
    education_cw5_title: "Advanced Algorithms & Data Structures",
    education_cw5_desc: "Algorithmic complexity, tree/graph traversal, state machines, and high-efficiency computation.",

    education_certs_title: "Certifications & Milestones",
    education_cert1_title: "Hack The Box Labs & CTFs",
    education_cert1_desc: "Active hands-on machines, web vulnerability exploitation, privilege escalation, and mitigation documentation.",
    education_cert1_status: "ACTIVE",
    education_cert2_title: "CompTIA Security+",
    education_cert2_desc: "Core threat landscape, IAM, security architecture, cryptography, and risk assessment.",
    education_cert2_status: "PREPARATION",
    education_cert3_title: "Blue Team Level 1 (BTL1)",
    education_cert3_desc: "Practical incident response, network traffic analysis, digital forensics, and SIEM alert handling.",
    education_cert3_status: "TARGET",
    education_cert_badge: "HTB Profile Badge:",
    education_cert_link: "View Verified Profile",

    // Contact Section
    contact_heading: "Contact & Secure Channels",
    contact_subheading: "Let's discuss Junior SOC Analyst, SOC Tier 1, or Cyber Security Support roles",
    contact_status_badge: "CHANNELS OPEN & MONITORED",
    contact_title: "Let's Connect",
    contact_desc: "I am actively seeking Junior SOC Analyst, SOC Tier 1, or Cybersecurity Support Specialist opportunities where I can leverage my telemetry analysis, PCAP forensics, and computer engineering background.",
    contact_email_label: "Direct Email",
    contact_location_label: "Location",
    contact_location_val: "Buenos Aires, Argentina",
    contact_avail_label: "Availability",
    contact_avail_val: "Remote / Hybrid / On-site",
    contact_clock_label: "SOC Live Clock:",
    contact_profiles_label: "Verified Profiles:",
    contact_send_email: "Send Email",
    contact_copy_email: "Copy Email",

    // Footer
    footer_status: "● SOC Monitored & Protected",
    footer_substatus: "Blue Team Active",
    footer_copyright: "© 2026 Facundo Caceres Olguin. All rights reserved.",
    footer_tagline: "Built with modern semantic web standards & cyber aesthetics.",

    // Modals
    modal_playbook_badge: "DEFENSIVE PLAYBOOK",
    modal_mapping_title: "ATT&CK / Threat Mapping:",
    modal_takeaways_title: "Incident Detection Key Takeaways:",
    modal_hardening_title: "Defensive Hardening & Mitigation:",
    modal_impl_title: "Signature / Rule Implementation:",
    modal_close_btn: "Close Playbook",

    resume_badge: "OFFICIAL CV",
    resume_sub: "Junior SOC Analyst Profile",
    resume_print_btn: "Print / Save as PDF",
    resume_copy_btn: "Copy Text",
    resume_toast_copied: "✓ Executive CV copied to clipboard",
    email_toast_copied: "✓ Email copied:"
  },

  es: {
    // Navigation
    nav_about: "Sobre Mí",
    nav_skills: "Arsenal",
    nav_projects: "Labs y Proyectos",
    nav_education: "Educación",
    nav_contact: "Contacto",
    nav_resume: "CV (PDF)",

    // Hero Section
    hero_badge: "PREPARACIÓN BLUE TEAM: SOC TIER 1 | REMOTO / HÍBRIDO / PRESENCIAL",
    hero_name_prefix: "Facundo",
    hero_name_suffix: "Caceres Olguin",
    hero_tagline_role: "Analista SOC Junior",
    hero_tagline_focus: "Blue Team y Detección de Amenazas",
    hero_tagline_edu: "Ing. en Informática @ UNLaM",
    hero_pitch: "\"Desconstruyendo vectores de ataque, analizando tráfico de red y construyendo flujos de detección resilientes para mitigar amenazas antes de su escalada.\"",
    hero_stat_acad_label: "Nivel Académico",
    hero_stat_acad_val: "Ingresando a 4° Año",
    hero_stat_acad_sub: "Ingeniería en UNLaM",
    hero_stat_roles_label: "Roles Objetivo",
    hero_stat_roles_val: "SOC Junior / Tier 1",
    hero_stat_roles_sub: "Soporte en Ciberseguridad",
    hero_stat_invest_label: "Forense y Triage",
    hero_stat_invest_val: "PCAPs y Logs",
    hero_stat_invest_sub: "Wireshark / Syslog",
    hero_cta_projects: "Explorar Labs y Writeups",
    hero_cta_contact: "Iniciar Contacto",
    hero_channels_label: "Canales Defensivos:",
    hero_copy_email: "Copiar Email",

    // Terminal
    terminal_title: "bash - soc-agent@security-workstation:~",
    terminal_cmd_status: "status",
    terminal_cmd_tools: "herramientas",
    terminal_cmd_labs: "labs",
    terminal_cmd_mitre: "mitre",
    terminal_cmd_triage: "triage",
    terminal_cmd_clear: "limpiar",
    terminal_chip_label: "COMANDOS:",
    terminal_input_placeholder: "Escribe un comando (ej. 'help', 'triage', 'tools')...",
    terminal_initial_badge: "LISTO PARA SOC TIER 1",
    terminal_initial_roles: "Roles Objetivo: Analista SOC Junior | SOC Tier 1 | Soporte Cyber",
    terminal_initial_edu: "Educación: Ingeniería en Informática (Ingresando a 4° Año @ UNLaM)",
    terminal_initial_focus: "Foco Principal: Operaciones Blue Team, Triage de Alertas, Detección de Amenazas",
    terminal_initial_forensics: "Forense y Logs: Windows Event Logs, Linux Syslog, Wireshark, tcpdump",
    terminal_initial_stack: "Herramientas: Nmap, Burp Suite, Metasploit, Sysinternals, Python, Go, Bash",
    terminal_initial_location: "Ubicación: Buenos Aires, Argentina (Remoto / Híbrido / Presencial)",
    terminal_initial_status: "ESTADO: \"Disponible para Roles de Analista SOC Junior y Oportunidades en Seguridad Defensiva\"",
    terminal_hint: "Escribe <span class=\"text-cyan-400 font-mono\">help</span> o haz clic en los comandos abajo para ver datos de triage.",

    // About Section
    about_heading: "Sobre Mí",
    about_subheading: "Mentalidad Defensiva, Rigor de Ingeniería y Triage de Incidentes",
    about_card_title: "Estudiante de Ingeniería en Informática enfocado en Operaciones Defensivas",
    about_p1: "Soy estudiante de Ingeniería en Informática actualmente <strong class=\"text-white font-semibold\">ingresando a mi 4° año</strong> en la <span class=\"text-emerald-400 font-medium\">Universidad Nacional de La Matanza (UNLaM)</span>, integrando sólidas bases académicas en sistemas operativos, redes de datos, sistemas distribuidos y algoritmos avanzados con práctica intensiva en ciberseguridad defensiva.",
    about_p2: "Mi principal enfoque técnico está en <strong class=\"text-white font-semibold\">operaciones de Blue Team, triage de alertas y gestión de incidentes</strong>: investigando telemetría anómala, correlacionando eventos de seguridad en entornos Windows (Security Event Logs) y Linux (Syslog/auditd), y disecando tráfico de red con Wireshark y tcpdump para detectar vectores de ataque sigilosos.",
    about_p3: "A través de la práctica continua en <strong class=\"text-emerald-400\">Hack The Box</strong> y laboratorios propios, analizo tácticas adversarias mapeadas directamente contra la matriz <strong class=\"text-cyan-400\">MITRE ATT&CK</strong> y el <strong class=\"text-cyan-400\">OWASP Top 10</strong>. Esta deconstrucción ofensiva guía directamente cómo diseño reglas de detección accionables, fortalezco infraestructuras y optimizo los tiempos de respuesta.",
    about_pillar1_title: "METODOLOGÍA DEFENSIVA",
    about_pillar1_desc: "Triage riguroso de alertas, discriminación de falsos positivos y seguimiento estricto del ciclo de vida de Respuesta a Incidentes (NIST / SANS).",
    about_pillar2_title: "PROFUNDIDAD EN SISTEMAS Y REDES",
    about_pillar2_desc: "Dominio profundo de handshakes TCP/IP, anomalías en DNS, CLI e internos de Linux, y fundamentos de autenticación en Active Directory.",
    about_lifecycle_title: "CICLO DE VIDA DEFENSIVO",
    about_step1_title: "Telemetría e Ingesta",
    about_step1_desc: "Syslog, WinEvent (4624/4625/4688/7045), capturas PCAP y flujos NetFlow.",
    about_step2_title: "Triage y Normalización",
    about_step2_desc: "Filtrado de falsos positivos, evaluación de velocidad de eventos y severidad.",
    about_step3_title: "Forense de PCAP y Artefactos",
    about_step3_desc: "Reensamblado de flujos en Wireshark, decodificación de payloads e inspección con Sysinternals.",
    about_step4_title: "Contención y Remediación",
    about_step4_desc: "Aislamiento de hosts, documentación de tickets, revocación de credenciales y reglas de firewall.",
    about_assurance: "Listo para aportar velocidad en triage Tier 1 y documentación rigurosa desde el primer día.",

    // Skills Section
    skills_heading: "Arsenal Técnico",
    skills_subheading: "Operaciones Defensivas, Análisis Forense, Herramientas de Seguridad y Scripting",
    skills_search_placeholder: "Buscar habilidad o herramienta...",
    skills_filter_all: "Todos",
    skills_filter_soc: "SOC & IR",
    skills_filter_network: "Redes",
    skills_filter_systems: "Herramientas y AD",
    skills_filter_scripting: "Scripting",

    skills_c1_title: "Operaciones Blue Team y Triage",
    skills_c1_sub: "Triage de Alertas, Gestión de Incidentes y Detección de Amenazas",
    skills_c1_li1: "<strong class=\"text-white font-medium\">Triage de Alertas y Respuesta:</strong> Procesamiento de telemetría, diferenciación de falsos positivos vs actividad maliciosa y escalamiento de incidentes.",
    skills_c1_li2: "<strong class=\"text-white font-medium\">Windows Event Logs:</strong> Dominio de IDs de Seguridad: 4624 (Logon Exitoso), 4625 (Falla de Logon), 4688 (Creación de Proceso), 7045 (Instalación de Servicio), 1102 (Log Limpiado).",
    skills_c1_li3: "<strong class=\"text-white font-medium\">Linux Syslog y auditd:</strong> Rastreo de anomalías en <code class=\"text-cyan-300 font-mono\">/var/log/auth.log</code>, monitoreo de sudo y análisis de llamadas al sistema execve.",
    skills_c1_li4: "<strong class=\"text-white font-medium\">Mapeo MITRE ATT&CK:</strong> Correlación de indicadores en Acceso Inicial, Ejecución, Persistencia, Escalación de Privilegios y Exfiltración.",
    skills_c1_li5: "<strong class=\"text-white font-medium\">OWASP Top 10:</strong> Análisis y remediación de Inyecciones (SQLi/OS Command Injection), Control de Acceso Roto y SSRF.",

    skills_c2_title: "Análisis y Forense de Redes",
    skills_c2_sub: "Disección de Paquetes, Inspección de Protocolos y Detección de Escaneos",
    skills_c2_li1: "<strong class=\"text-white font-medium\">Wireshark y Disección PCAP:</strong> Seguimiento de flujos TCP, inspección de encabezados, análisis de retransmisiones y reconstrucción de transmisiones en texto plano.",
    skills_c2_li2: "<strong class=\"text-white font-medium\">tcpdump CLI y BPF:</strong> Filtros Berkeley Packet Filters específicos por consola para aislar IPs sospechosas, puertos inusuales y protocolos anómalos.",
    skills_c2_li3: "<strong class=\"text-white font-medium\">Inspección Profunda de Protocolos:</strong> Handshakes TCP de 3 vías, patrones UDP, consultas DNS (detección de túneles por entropía) y cabeceras HTTP/HTTPS.",
    skills_c2_li4: "<strong class=\"text-white font-medium\">Escaneos Maliciosos y Texto Plano:</strong> Distinción entre escaneos TCP SYN (half-open) y Connect, e identificación de credenciales expuestas en canales inseguros.",

    skills_c3_title: "Herramientas de Seguridad y Sistemas",
    skills_c3_sub: "Herramientas, Inspección de Procesos y Servicios de Directorio",
    skills_c3_li1: "<strong class=\"text-white font-medium\">Nmap:</strong> Enumeración de servicios, detección de versiones, scripts NSE y análisis de firmas de tráfico de escáner.",
    skills_c3_li2: "<strong class=\"text-white font-medium\">Burp Suite y Metasploit:</strong> Interceptación de tráfico web, identificación de endpoints vulnerables y análisis de exploits para formular defensas.",
    skills_c3_li3: "<strong class=\"text-white font-medium\">Suite Sysinternals:</strong> Process Explorer y Process Monitor (Procmon) para investigar procesos generados, handles e inyecciones de DLLs.",
    skills_c3_li4: "<strong class=\"text-white font-medium\">Linux CLI y Active Directory:</strong> Administración fluida de terminal en Debian, Kali y Ubuntu; comprensión de AD DS, tickets Kerberos y LDAP.",

    skills_c4_title: "Scripting y Lenguajes",
    skills_c4_sub: "Automatización, Parseo de Logs y Programación Segura de Sistemas",
    skills_c4_li1: "<strong class=\"text-white font-medium\">Python y Go:</strong> Creación de parsers automáticos de logs, extracción de IOCs con expresiones regulares, sockets y herramientas de alta concurrencia.",
    skills_c4_li2: "<strong class=\"text-white font-medium\">Scripting en Bash:</strong> Pipelines en consola usando grep, awk, sed, sort y uniq para triage rápido en incidentes sobre servidores en vivo.",
    skills_c4_li3: "<strong class=\"text-white font-medium\">Java y C:</strong> Desarrollo de software seguro, gestión rigurosa de memoria, validación de límites y llamadas al sistema POSIX.",
    skills_c4_li4: "<strong class=\"text-white font-medium\">SQL (SQL Server):</strong> Modelado relacional, administración, integridad referencial y consultas parametrizadas para erradicar la inyección SQL.",

    // Projects Section
    projects_heading: "Labs y Proyectos Destacados",
    projects_subheading: "Análisis Práctico de Vectores de Ataque, Forense de Protocolos y Software Defensivo",
    projects_takeaway_label: "Conclusión Defensiva:",
    projects_p1_title: "Práctica en Hack The Box y Análisis de Amenazas",
    projects_p1_desc: "Análisis de vectores de ataque, explotación de vulnerabilidades web (SQLi, OS Command Injection), escalación de privilegios en Linux/Windows y redacción de playbooks de mitigación defensiva.",
    projects_p1_takeaway: "Formulación de reglas auditd para shells interactivas, principio de menor privilegio en sudoers y firmas Snort/Suricata para bloquear inyecciones.",
    projects_p1_btn: "Ver Playbook Defensivo",

    projects_p2_title: "Análisis de Tráfico de Red y Protocolos",
    projects_p2_desc: "Inspección profunda de paquetes con Wireshark y tcpdump, analizando handshakes en TCP/IP, DNS y HTTP/HTTPS, e identificando escaneos maliciosos y transmisiones en texto plano.",
    projects_p2_takeaway: "Diferenciación de escaneos TCP SYN vs Connect, extracción de credenciales en texto plano y formulación de filtros BPF para investigaciones de incidentes.",
    projects_p2_btn: "Ver Filtros de Tráfico",

    projects_p3_title: "Ingeniería de Software Defensivo y Bases de Datos",
    projects_p3_desc: "Programación segura en Java y C, modelado y administración de bases de datos en SQL Server con estricto énfasis en integridad de datos, principios ACID y sanitización de entradas.",
    projects_p3_takeaway: "Eliminación completa de inyecciones SQL mediante consultas parametrizadas, control de desbordamientos de búfer en C y restricciones basadas en roles.",
    projects_p3_btn: "Ver Arquitectura y Specs",

    projects_bonus_badge: "HERRAMIENTA DEFENSIVA ADICIONAL",
    projects_bonus_title: "Pipeline Automatizado de Detección de Fuerza Bruta y Anomalías",
    projects_bonus_desc: "Parser personalizado para procesar archivos auth.log y eventos Windows Security de varios gigabytes, detectando umbrales de fuerza bruta y generando dossiers de triage enriquecidos con threat intelligence.",
    projects_bonus_btn: "Ver Script y Documentación",

    // Education Section
    education_heading: "Educación y Certificaciones",
    education_subheading: "Credenciales Académicas en UNLaM y Trayectoria de Certificaciones",
    education_deg_level: "CARRERA DE GRADO",
    education_deg_title: "Ingeniería en Informática",
    education_inst: "Universidad Nacional de La Matanza (UNLaM)",
    education_standing: "Ingresando a 4° Año",
    education_period: "2023 – Presente",
    education_desc: "El plan de estudios de Ingeniería en Informática de UNLaM brinda bases profundas en interfaces hardware-software, programación de sistemas e ingeniería de redes de alto rendimiento, aportando rigor analítico directo para la investigación de ciberamenazas complejas.",
    education_coursework_title: "Materias Relevantes:",
    education_cw1_title: "Redes de Información",
    education_cw1_desc: "Pila OSI y TCP/IP, protocolos de enrutamiento, encaminamiento de paquetes, programación de sockets.",
    education_cw2_title: "Sistemas Operativos",
    education_cw2_desc: "Planificación de procesos, IPC, gestión de memoria, sistemas de archivos, primitivas del kernel Linux.",
    education_cw3_title: "Sistemas Distribuidos",
    education_cw3_desc: "Algoritmos de consenso, tolerancia a fallas, sincronización de red, arquitecturas de alta disponibilidad.",
    education_cw4_title: "Arquitectura de Bases de Datos",
    education_cw4_desc: "Diseño de esquemas relacionales, administración de SQL Server, transacciones ACID, seguridad de datos.",
    education_cw5_title: "Algoritmos y Estructuras de Datos Avanzadas",
    education_cw5_desc: "Complejidad algorítmica, recorrido de árboles/grafos, autómatas y computación de alta eficiencia.",

    education_certs_title: "Certificaciones e Hitos",
    education_cert1_title: "Hack The Box Labs y CTFs",
    education_cert1_desc: "Máquinas activas, explotación de vulnerabilidades web, escalación de privilegios y documentación de mitigaciones.",
    education_cert1_status: "ACTIVO",
    education_cert2_title: "CompTIA Security+",
    education_cert2_desc: "Panorama global de amenazas, IAM, arquitectura de seguridad, criptografía y gestión de riesgos.",
    education_cert2_status: "PREPARACIÓN",
    education_cert3_title: "Blue Team Level 1 (BTL1)",
    education_cert3_desc: "Respuesta práctica a incidentes, análisis de tráfico de red, forense digital y triage de alertas en SIEM.",
    education_cert3_status: "OBJETIVO",
    education_cert_badge: "Badge de Perfil HTB:",
    education_cert_link: "Ver Perfil Verificado",

    // Contact Section
    contact_heading: "Contacto y Canales Directos",
    contact_subheading: "Conversemos sobre roles de Analista SOC Junior, SOC Tier 1 o Soporte de Ciberseguridad",
    contact_status_badge: "CANALES ABIERTOS Y MONITOREADOS",
    contact_title: "Conectemos",
    contact_desc: "Estoy en búsqueda activa de oportunidades como Analista SOC Junior, SOC Tier 1 o Especialista de Soporte en Ciberseguridad, donde pueda aportar mi análisis de telemetría, forense de PCAPs y bases de ingeniería informática.",
    contact_email_label: "Correo Directo",
    contact_location_label: "Ubicación",
    contact_location_val: "Buenos Aires, Argentina",
    contact_avail_label: "Disponibilidad",
    contact_avail_val: "Remoto / Híbrido / Presencial",
    contact_clock_label: "Reloj SOC en Vivo:",
    contact_profiles_label: "Perfiles Verificados:",
    contact_send_email: "Enviar Correo",
    contact_copy_email: "Copiar Correo",

    // Footer
    footer_status: "● SOC Monitoreado y Protegido",
    footer_substatus: "Blue Team Activo",
    footer_copyright: "© 2026 Facundo Caceres Olguin. Todos los derechos reservados.",
    footer_tagline: "Desarrollado con estándares web semánticos modernos y estética cyber.",

    // Modals
    modal_playbook_badge: "PLAYBOOK DEFENSIVO",
    modal_mapping_title: "Mapeo de Amenazas / ATT&CK:",
    modal_takeaways_title: "Conclusiones Clave de Detección:",
    modal_hardening_title: "Hardening Defensivo y Mitigación:",
    modal_impl_title: "Implementación de Regla / Firma:",
    modal_close_btn: "Cerrar Playbook",

    resume_badge: "CV OFICIAL",
    resume_sub: "Perfil Analista SOC Junior",
    resume_print_btn: "Imprimir / Guardar en PDF",
    resume_copy_btn: "Copiar Texto",
    resume_toast_copied: "✓ CV Ejecutivo copiado al portapapeles",
    email_toast_copied: "✓ Correo copiado:"
  }
};

function initLanguage() {
  const savedLang = localStorage.getItem('portfolio_lang') || 'en';
  setLanguage(savedLang);

  const desktopBtn = document.getElementById('lang-toggle-btn');
  const mobileBtn = document.getElementById('mobile-lang-toggle-btn');

  function toggleLang() {
    const nextLang = currentLang === 'en' ? 'es' : 'en';
    setLanguage(nextLang);
    const toastMsg = nextLang === 'es' ? 'Idioma cambiado a Español (es-AR)' : 'Language switched to English (US)';
    showToast(toastMsg);
    if (window.cyberAudio) window.cyberAudio.beep(980, 0.06);
  }

  if (desktopBtn) desktopBtn.addEventListener('click', toggleLang);
  if (mobileBtn) mobileBtn.addEventListener('click', toggleLang);
}

function setLanguage(lang) {
  if (!translations[lang]) lang = 'en';
  currentLang = lang;
  localStorage.setItem('portfolio_lang', lang);

  // Update HTML lang attribute
  document.documentElement.lang = lang === 'es' ? 'es-AR' : 'en';

  // Update Toggle Button Display
  const flagText = lang === 'en' ? '🇺🇸' : '🇦🇷';
  const labelText = lang === 'en' ? 'EN' : 'ES';

  const flagElem = document.getElementById('lang-flag');
  const labelElem = document.getElementById('lang-label');
  if (flagElem) flagElem.textContent = flagText;
  if (labelElem) labelElem.textContent = labelText;

  const mFlagElem = document.getElementById('mobile-lang-flag');
  const mLabelElem = document.getElementById('mobile-lang-label');
  if (mFlagElem) mFlagElem.textContent = flagText;
  if (mLabelElem) mLabelElem.textContent = labelText;

  // Translate all DOM elements with data-i18n
  document.querySelectorAll('[data-i18n]').forEach(elem => {
    const key = elem.getAttribute('data-i18n');
    if (translations[lang][key]) {
      elem.innerHTML = translations[lang][key];
    }
  });

  // Translate all input placeholders with data-i18n-placeholder
  document.querySelectorAll('[data-i18n-placeholder]').forEach(elem => {
    const key = elem.getAttribute('data-i18n-placeholder');
    if (translations[lang][key]) {
      elem.setAttribute('placeholder', translations[lang][key]);
    }
  });
}

/* ==========================================================================
   3. INTERACTIVE TERMINAL WIDGET
   ========================================================================== */
function initTerminal() {
  const terminalBody = document.getElementById('terminal-body');
  const terminalInput = document.getElementById('terminal-input');
  const terminalForm = document.getElementById('terminal-form');
  const commandChips = document.querySelectorAll('[data-terminal-cmd]');

  if (!terminalBody || !terminalInput) return;

  const playBeep = () => window.cyberAudio && window.cyberAudio.beep();

  const commandResponses = {
    en: {
      help: () => `
<div class="text-emerald-400 font-bold mb-1 font-mono">AVAILABLE DEFENSIVE COMMANDS:</div>
<div class="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 text-xs text-slate-300 font-mono">
  <div><span class="text-cyan-400 font-mono">status</span>      - Show operational status & focus</div>
  <div><span class="text-cyan-400 font-mono">tools</span>       - Display SOC defensive arsenal</div>
  <div><span class="text-cyan-400 font-mono">labs</span>        - List featured security projects</div>
  <div><span class="text-cyan-400 font-mono">education</span>   - View academic background @ UNLaM</div>
  <div><span class="text-cyan-400 font-mono">mitre</span>       - Defensive ATT&CK mapping overview</div>
  <div><span class="text-cyan-400 font-mono">triage</span>      - Run interactive alert triage sim</div>
  <div><span class="text-cyan-400 font-mono">contact</span>     - Display verified reach-out channels</div>
  <div><span class="text-cyan-400 font-mono">whoami</span>      - Display current session profile</div>
  <div><span class="text-cyan-400 font-mono">clear</span>       - Clear terminal buffer</div>
</div>`,

      status: () => `
<div class="p-3 border border-emerald-500/30 bg-emerald-950/20 rounded-lg text-xs space-y-1.5 font-mono">
  <div class="flex items-center justify-between text-emerald-400 font-bold">
    <span>[PROFILE: FACUNDO CACERES OLGUIN]</span>
    <span class="px-1.5 py-0.5 bg-emerald-500/20 rounded border border-emerald-400/40 text-[10px]">TIER 1 SOC READY</span>
  </div>
  <div class="text-slate-300"><span class="text-cyan-400">Target Roles:</span> Junior SOC Analyst | SOC Tier 1 | Cyber Support Specialist</div>
  <div class="text-slate-300"><span class="text-cyan-400">Education:</span> Computer Engineering (Entering 4th Year @ UNLaM)</div>
  <div class="text-slate-300"><span class="text-cyan-400">Core Focus:</span> Blue Team Operations, Alert Triage, Threat Detection</div>
  <div class="text-slate-300"><span class="text-cyan-400">Analysis & Forensics:</span> Windows Event Logs, Linux Syslog, Wireshark, tcpdump, PCAP inspection</div>
  <div class="text-slate-300"><span class="text-cyan-400">Availability:</span> Remote / Hybrid / On-site (Buenos Aires)</div>
  <div class="text-emerald-400 font-semibold pt-1 border-t border-emerald-500/20 flex items-center gap-2">
    <span class="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
    <span>STATUS: Open to Junior SOC Roles & Defensive Security Opportunities</span>
  </div>
</div>`,

      tools: () => `
<div class="text-xs space-y-2 font-mono">
  <div class="text-cyan-400 font-bold">[TECHNICAL ARSENAL]</div>
  <div><span class="text-emerald-400 font-semibold">Core Focus:</span> Blue Team Operations, Alert Triage, Incident Handling, Threat Detection.</div>
  <div><span class="text-emerald-400 font-semibold">Analysis & Forensics:</span> Windows Event Logs (4624/4625/4688/7045), Linux Syslog, MITRE ATT&CK, OWASP Top 10, Wireshark, tcpdump, PCAP inspection.</div>
  <div><span class="text-emerald-400 font-semibold">Security Tools:</span> Nmap, Burp Suite, Metasploit, Sysinternals, Linux CLI, Active Directory fundamentals.</div>
  <div><span class="text-emerald-400 font-semibold">Scripting & Languages:</span> Python, Go, Bash, Java, C, SQL (SQL Server).</div>
</div>`,

      labs: () => `
<div class="text-xs space-y-2 font-mono">
  <div class="text-cyan-400 font-bold">[FEATURED LABS & PROJECTS]</div>
  <div class="border-l-2 border-emerald-500/50 pl-2">
    <div class="text-slate-200 font-semibold">1. Hack The Box Practice & Threat Analysis</div>
    <div class="text-slate-400 text-[11px]">Analyzing attack paths, exploiting web vulnerabilities (SQLi, OS Command Injection), privilege escalation in Linux/Windows, and creating mitigation documentation.</div>
  </div>
  <div class="border-l-2 border-cyan-500/50 pl-2">
    <div class="text-slate-200 font-semibold">2. Network Traffic & Protocol Analysis</div>
    <div class="text-slate-400 text-[11px]">Deep packet inspection with Wireshark, analyzing protocol handshakes (TCP/IP, DNS, HTTP/HTTPS), identifying malicious scans and cleartext transmissions.</div>
  </div>
  <div class="border-l-2 border-blue-500/50 pl-2">
    <div class="text-slate-200 font-semibold">3. Defensive Software & Database Engineering</div>
    <div class="text-slate-400 text-[11px]">Secure programming in Java and C, database modeling and administration using SQL Server with emphasis on data integrity and input sanitization.</div>
  </div>
</div>`,

      education: () => `
<div class="text-xs space-y-1.5 font-mono">
  <div class="text-cyan-400 font-bold">[ACADEMIC CREDENTIALS]</div>
  <div class="text-slate-200"><span class="text-emerald-400">Degree:</span> B.S. in Computer Engineering (Ingeniería en Informática)</div>
  <div class="text-slate-200"><span class="text-emerald-400">Institution:</span> Universidad Nacional de La Matanza (UNLaM)</div>
  <div class="text-slate-200"><span class="text-emerald-400">Period:</span> 2023 – Present (Currently entering 4th year)</div>
  <div class="text-slate-300 text-[11px] mt-1"><span class="text-slate-400">Relevant Coursework:</span> Computer Networks, Operating Systems, Distributed Systems, Database Architecture, Advanced Algorithms.</div>
</div>`,

      mitre: () => `
<div class="text-xs space-y-2 font-mono">
  <div class="text-cyan-400 font-bold">[MITRE ATT&CK DEFENSIVE MAPPING]</div>
  <div class="grid grid-cols-1 gap-1 text-[11px]">
    <div class="text-slate-300"><span class="text-amber-400 font-semibold">[T1059] Command & Scripting:</span> Monitored via Windows Event ID 4688 (Process Creation with Command Line) & Sysmon Event 1.</div>
    <div class="text-slate-300"><span class="text-amber-400 font-semibold">[T1078] Valid Accounts (Brute Force):</span> Detected via Event ID 4625 (Logon Failures threshold) & Linux auth.log inspection.</div>
    <div class="text-slate-300"><span class="text-amber-400 font-semibold">[T1071] Application Layer Protocol:</span> Analyzed via Wireshark HTTP/HTTPS & DNS payload inspection, detecting tunneling patterns.</div>
    <div class="text-slate-300"><span class="text-amber-400 font-semibold">[T1190] Exploit Public-Facing App:</span> WAF telemetry, OWASP Top 10 input validation, and defensive parameterization.</div>
  </div>
</div>`,

      triage: () => `
<div class="p-3 border border-cyan-500/40 bg-cyan-950/20 rounded-lg text-xs space-y-2 font-mono">
  <div class="text-cyan-400 font-bold flex items-center gap-2">
    <span class="inline-block w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
    SIMULATED ALERT TRIAGE: #SEC-ALERT-8921
  </div>
  <div class="text-slate-300"><span class="text-amber-400 font-semibold">Event:</span> Multiple Event ID 4625 (Failed Logon) followed by 4624 (Type 10 - RemoteInteractive)</div>
  <div class="text-slate-300"><span class="text-slate-400">Source IP:</span> 192.168.1.145 -> Target: Domain Controller DC-01</div>
  <div class="text-slate-300"><span class="text-slate-400">Analyst Verdict:</span> High-confidence RDP Brute Force with successful authentication.</div>
  <div class="text-emerald-400 font-semibold">SOC Action: 1) Isolate host 192.168.1.145, 2) Revoke compromised user Kerberos TGT, 3) Check Event 4688 for spawned cmd/powershell.</div>
</div>`,

      contact: () => `
<div class="text-xs space-y-1.5 font-mono">
  <div class="text-cyan-400 font-bold">[VERIFIED CONTACT CHANNELS]</div>
  <div><span class="text-slate-400">Email:</span> <a href="mailto:caceresolguinfacundo@gmail.com" class="text-emerald-400 hover:underline">caceresolguinfacundo@gmail.com</a></div>
  <div><span class="text-slate-400">LinkedIn:</span> <a href="https://www.linkedin.com/in/facundo-caceres-olguin" target="_blank" rel="noopener noreferrer" class="text-cyan-400 hover:underline">linkedin.com/in/facundo-caceres-olguin</a></div>
  <div><span class="text-slate-400">GitHub:</span> <a href="https://github.com/Facu-caceres" target="_blank" rel="noopener noreferrer" class="text-cyan-400 hover:underline">github.com/Facu-caceres</a></div>
  <div><span class="text-slate-400">Hack The Box:</span> <a href="https://profile.hackthebox.com/profile/019d080d-7bf2-7187-b518-4b18c3298acb?utm_medium=copy_url" target="_blank" rel="noopener noreferrer" class="text-emerald-400 hover:underline">HTB Profile Verified</a></div>
  <div><span class="text-slate-400">Location:</span> Buenos Aires, Argentina (Remote / Hybrid / On-site)</div>
</div>`,

      whoami: () => `
<div class="text-xs text-slate-300 font-mono">
  <span class="text-emerald-400">facundo@unlam-soc</span>: uid=1001(facundo) gid=1001(blue-team) groups=1001(analysts),10(threat-hunters)
  <br>Permissions: READ-WRITE [Telemetry, PCAP Dissection, Alert Triage, Detection Playbooks]
</div>`,

      clear: () => null
    },

    es: {
      help: () => `
<div class="text-emerald-400 font-bold mb-1 font-mono">COMANDOS DEFENSIVOS DISPONIBLES:</div>
<div class="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 text-xs text-slate-300 font-mono">
  <div><span class="text-cyan-400 font-mono">status</span>      - Ver estado operativo y perfil</div>
  <div><span class="text-cyan-400 font-mono">tools</span>       - Ver arsenal defensivo SOC</div>
  <div><span class="text-cyan-400 font-mono">labs</span>        - Listar labs y proyectos destacados</div>
  <div><span class="text-cyan-400 font-mono">education</span>   - Ver formación académica en UNLaM</div>
  <div><span class="text-cyan-400 font-mono">mitre</span>       - Resumen de mapeo MITRE ATT&CK</div>
  <div><span class="text-cyan-400 font-mono">triage</span>      - Simulación interactiva de triage</div>
  <div><span class="text-cyan-400 font-mono">contact</span>     - Canales de contacto verificados</div>
  <div><span class="text-cyan-400 font-mono">whoami</span>      - Perfil de la sesión actual</div>
  <div><span class="text-cyan-400 font-mono">clear</span>       - Limpiar terminal</div>
</div>`,

      status: () => `
<div class="p-3 border border-emerald-500/30 bg-emerald-950/20 rounded-lg text-xs space-y-1.5 font-mono">
  <div class="flex items-center justify-between text-emerald-400 font-bold">
    <span>[PERFIL: FACUNDO CACERES OLGUIN]</span>
    <span class="px-1.5 py-0.5 bg-emerald-500/20 rounded border border-emerald-400/40 text-[10px]">LISTO PARA SOC TIER 1</span>
  </div>
  <div class="text-slate-300"><span class="text-cyan-400">Roles Objetivo:</span> Analista SOC Junior | SOC Tier 1 | Soporte en Ciberseguridad</div>
  <div class="text-slate-300"><span class="text-cyan-400">Educación:</span> Ingeniería en Informática (Ingresando a 4° Año @ UNLaM)</div>
  <div class="text-slate-300"><span class="text-cyan-400">Foco Principal:</span> Operaciones Blue Team, Triage de Alertas, Detección de Amenazas</div>
  <div class="text-slate-300"><span class="text-cyan-400">Análisis y Forense:</span> Windows Event Logs, Linux Syslog, Wireshark, tcpdump, inspección PCAP</div>
  <div class="text-slate-300"><span class="text-cyan-400">Disponibilidad:</span> Remoto / Híbrido / Presencial (Buenos Aires)</div>
  <div class="text-emerald-400 font-semibold pt-1 border-t border-emerald-500/20 flex items-center gap-2">
    <span class="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
    <span>ESTADO: Disponible para Roles de Analista SOC Junior y Oportunidades en Seguridad Defensiva</span>
  </div>
</div>`,

      tools: () => `
<div class="text-xs space-y-2 font-mono">
  <div class="text-cyan-400 font-bold">[ARSENAL TÉCNICO]</div>
  <div><span class="text-emerald-400 font-semibold">Foco Principal:</span> Operaciones Blue Team, Triage de Alertas, Gestión de Incidentes, Detección de Amenazas.</div>
  <div><span class="text-emerald-400 font-semibold">Análisis y Forense:</span> Windows Event Logs (4624/4625/4688/7045), Linux Syslog, MITRE ATT&CK, OWASP Top 10, Wireshark, tcpdump, PCAP.</div>
  <div><span class="text-emerald-400 font-semibold">Herramientas de Seguridad:</span> Nmap, Burp Suite, Metasploit, Sysinternals, Linux CLI, fundamentos de Active Directory.</div>
  <div><span class="text-emerald-400 font-semibold">Scripting y Lenguajes:</span> Python, Go, Bash, Java, C, SQL (SQL Server).</div>
</div>`,

      labs: () => `
<div class="text-xs space-y-2 font-mono">
  <div class="text-cyan-400 font-bold">[LABS Y PROYECTOS DESTACADOS]</div>
  <div class="border-l-2 border-emerald-500/50 pl-2">
    <div class="text-slate-200 font-semibold">1. Práctica en Hack The Box y Análisis de Amenazas</div>
    <div class="text-slate-400 text-[11px]">Análisis de vectores de ataque, explotación web (SQLi, OS Command Injection), escalación de privilegios en Linux/Windows y documentación de mitigaciones.</div>
  </div>
  <div class="border-l-2 border-cyan-500/50 pl-2">
    <div class="text-slate-200 font-semibold">2. Análisis de Tráfico de Red y Protocolos</div>
    <div class="text-slate-400 text-[11px]">Inspección profunda de paquetes con Wireshark, análisis de handshakes (TCP/IP, DNS, HTTP/HTTPS), escaneos maliciosos y texto plano.</div>
  </div>
  <div class="border-l-2 border-blue-500/50 pl-2">
    <div class="text-slate-200 font-semibold">3. Ingeniería de Software Defensivo y Bases de Datos</div>
    <div class="text-slate-400 text-[11px]">Programación segura en Java y C, administración en SQL Server con integridad transaccional y consultas parametrizadas.</div>
  </div>
</div>`,

      education: () => `
<div class="text-xs space-y-1.5 font-mono">
  <div class="text-cyan-400 font-bold">[CREDENCIALES ACADÉMICAS]</div>
  <div class="text-slate-200"><span class="text-emerald-400">Título:</span> Ingeniería en Informática (Carrera de Grado)</div>
  <div class="text-slate-200"><span class="text-emerald-400">Institución:</span> Universidad Nacional de La Matanza (UNLaM)</div>
  <div class="text-slate-200"><span class="text-emerald-400">Período:</span> 2023 – Presente (Ingresando a 4° Año)</div>
  <div class="text-slate-300 text-[11px] mt-1"><span class="text-slate-400">Materias Relevantes:</span> Redes de Información, Sistemas Operativos, Sistemas Distribuidos, Arquitectura de Bases de Datos, Algoritmos Avanzados.</div>
</div>`,

      mitre: () => `
<div class="text-xs space-y-2 font-mono">
  <div class="text-cyan-400 font-bold">[MAPEO DEFENSIVO MITRE ATT&CK]</div>
  <div class="grid grid-cols-1 gap-1 text-[11px]">
    <div class="text-slate-300"><span class="text-amber-400 font-semibold">[T1059] Command & Scripting:</span> Monitoreado vía Windows Event ID 4688 (Creación de Procesos con Command Line) y Sysmon Event 1.</div>
    <div class="text-slate-300"><span class="text-amber-400 font-semibold">[T1078] Valid Accounts (Fuerza Bruta):</span> Detectado vía Event ID 4625 (umbral de fallos de logon) y logs auth.log en Linux.</div>
    <div class="text-slate-300"><span class="text-amber-400 font-semibold">[T1071] Application Layer Protocol:</span> Inspección de cargas HTTP/HTTPS y DNS en Wireshark, identificando túneles anómalos.</div>
    <div class="text-slate-300"><span class="text-amber-400 font-semibold">[T1190] Exploit Public-Facing App:</span> Telemetría de WAF, sanitización OWASP Top 10 y parametrización de consultas SQL.</div>
  </div>
</div>`,

      triage: () => `
<div class="p-3 border border-cyan-500/40 bg-cyan-950/20 rounded-lg text-xs space-y-2 font-mono">
  <div class="text-cyan-400 font-bold flex items-center gap-2">
    <span class="inline-block w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
    TRIAGE DE ALERTA SIMULADA: #SEC-ALERT-8921
  </div>
  <div class="text-slate-300"><span class="text-amber-400 font-semibold">Evento:</span> Múltiples Event ID 4625 (Logon Fallido) seguidos de 4624 (Tipo 10 - RemoteInteractive)</div>
  <div class="text-slate-300"><span class="text-slate-400">IP Origen:</span> 192.168.1.145 -> Destino: Controlador de Dominio DC-01</div>
  <div class="text-slate-300"><span class="text-slate-400">Veredicto del Analista:</span> Fuerza Bruta RDP de alta confianza con autenticación exitosa.</div>
  <div class="text-emerald-400 font-semibold">Acción SOC: 1) Aislar host 192.168.1.145, 2) Revocar TGT Kerberos del usuario comprometido, 3) Revisar Event 4688 por cmd/powershell generados.</div>
</div>`,

      contact: () => `
<div class="text-xs space-y-1.5 font-mono">
  <div class="text-cyan-400 font-bold">[CANALES DE CONTACTO VERIFICADOS]</div>
  <div><span class="text-slate-400">Email:</span> <a href="mailto:caceresolguinfacundo@gmail.com" class="text-emerald-400 hover:underline">caceresolguinfacundo@gmail.com</a></div>
  <div><span class="text-slate-400">LinkedIn:</span> <a href="https://www.linkedin.com/in/facundo-caceres-olguin" target="_blank" rel="noopener noreferrer" class="text-cyan-400 hover:underline">linkedin.com/in/facundo-caceres-olguin</a></div>
  <div><span class="text-slate-400">GitHub:</span> <a href="https://github.com/Facu-caceres" target="_blank" rel="noopener noreferrer" class="text-cyan-400 hover:underline">github.com/Facu-caceres</a></div>
  <div><span class="text-slate-400">Hack The Box:</span> <a href="https://profile.hackthebox.com/profile/019d080d-7bf2-7187-b518-4b18c3298acb?utm_medium=copy_url" target="_blank" rel="noopener noreferrer" class="text-emerald-400 hover:underline">Perfil HTB Verificado</a></div>
  <div><span class="text-slate-400">Ubicación:</span> Buenos Aires, Argentina (Remoto / Híbrido / Presencial)</div>
</div>`,

      whoami: () => `
<div class="text-xs text-slate-300 font-mono">
  <span class="text-emerald-400">facundo@unlam-soc</span>: uid=1001(facundo) gid=1001(blue-team) grupos=1001(analistas),10(threat-hunters)
  <br>Permisos: LECTURA-ESCRITURA [Telemetría, Disección PCAP, Triage de Alertas, Playbooks]
</div>`,

      clear: () => null
    }
  };

  function executeCommand(rawCmd) {
    const cmd = rawCmd.trim().toLowerCase();
    if (!cmd) return;

    playBeep();

    if (cmd === 'clear' || cmd === 'limpiar') {
      terminalBody.innerHTML = '';
      return;
    }

    const userLine = document.createElement('div');
    userLine.className = 'flex items-center gap-2 text-xs font-mono text-slate-300';
    userLine.innerHTML = `
      <span class="text-emerald-400">soc-agent@unlam-soc:~$</span>
      <span class="text-white font-semibold">${escapeHTML(rawCmd)}</span>
    `;
    terminalBody.appendChild(userLine);

    const outputElem = document.createElement('div');
    outputElem.className = 'text-xs text-slate-300 font-mono my-2';

    // Normalize command synonyms for both languages
    let normalizedCmd = cmd;
    if (cmd === 'herramientas') normalizedCmd = 'tools';
    if (cmd === 'educacion' || cmd === 'educación') normalizedCmd = 'education';
    if (cmd === 'contacto') normalizedCmd = 'contact';
    if (cmd === 'ayuda') normalizedCmd = 'help';

    const langResponses = commandResponses[currentLang] || commandResponses.en;

    if (langResponses[normalizedCmd]) {
      outputElem.innerHTML = langResponses[normalizedCmd]();
    } else {
      const errorMsg = currentLang === 'es' ?
        `<div class="text-red-400 font-mono">Comando no reconocido: '${escapeHTML(cmd)}'.</div>
         <div class="text-slate-400 text-[11px] mt-0.5 font-mono">Escribe <span class="text-cyan-400 underline cursor-pointer" onclick="document.getElementById('terminal-input').value='help';document.getElementById('terminal-form').dispatchEvent(new Event('submit'))">help</span> para ver los comandos disponibles.</div>` :
        `<div class="text-red-400 font-mono">Command not recognized: '${escapeHTML(cmd)}'.</div>
         <div class="text-slate-400 text-[11px] mt-0.5 font-mono">Type <span class="text-cyan-400 underline cursor-pointer" onclick="document.getElementById('terminal-input').value='help';document.getElementById('terminal-form').dispatchEvent(new Event('submit'))">help</span> to view available commands.</div>`;
      outputElem.innerHTML = errorMsg;
    }

    terminalBody.appendChild(outputElem);
    terminalBody.scrollTop = terminalBody.scrollHeight;
  }

  terminalForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const cmd = terminalInput.value;
    terminalInput.value = '';
    executeCommand(cmd);
  });

  commandChips.forEach(chip => {
    chip.addEventListener('click', () => {
      const cmd = chip.getAttribute('data-terminal-cmd');
      if (cmd) {
        terminalInput.value = cmd;
        executeCommand(cmd);
      }
    });
  });
}

/* ==========================================================================
   4. SKILLS CATEGORY FILTERING & SEARCH
   ========================================================================== */
function initSkillFilters() {
  const filterBtns = document.querySelectorAll('[data-skill-filter]');
  const skillCards = document.querySelectorAll('[data-skill-category]');
  const skillSearchInput = document.getElementById('skill-search');

  let currentCategory = 'all';
  let searchQuery = '';

  function filterCards() {
    skillCards.forEach(card => {
      const category = card.getAttribute('data-skill-category');
      const text = card.textContent.toLowerCase();

      const matchesCategory = (currentCategory === 'all' || category === currentCategory);
      const matchesSearch = (!searchQuery || text.includes(searchQuery));

      if (matchesCategory && matchesSearch) {
        card.classList.remove('hidden');
        card.classList.add('flex');
      } else {
        card.classList.add('hidden');
        card.classList.remove('flex');
      }
    });
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => {
        b.classList.remove('bg-emerald-500/20', 'text-emerald-300', 'border-emerald-500/40');
        b.classList.add('bg-slate-900/60', 'text-slate-400', 'border-slate-800');
      });
      btn.classList.add('bg-emerald-500/20', 'text-emerald-300', 'border-emerald-500/40');
      btn.classList.remove('bg-slate-900/60', 'text-slate-400', 'border-slate-800');

      currentCategory = btn.getAttribute('data-skill-filter');
      filterCards();
    });
  });

  if (skillSearchInput) {
    skillSearchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.trim().toLowerCase();
      filterCards();
    });
  }
}

/* ==========================================================================
   5. LABS & PROJECTS DETAILS MODAL
   ========================================================================== */
const projectData = {
  en: {
    htb: {
      title: "Hack The Box Practice & Threat Analysis",
      badge: "ATTACK PATH DECONSTRUCTION & MITIGATION",
      description: "Hands-on machine exploitation and threat analysis focusing on deconstructing attack paths, identifying web vulnerabilities (SQL Injection, OS Command Injection), privilege escalation vectors in Linux and Windows, and drafting actionable defensive mitigation playbooks.",
      tactics: ["MITRE ATT&CK T1059 (Command Execution)", "MITRE ATT&CK T1068 (Privilege Escalation)", "OWASP A03:2021 (Injection)"],
      detectionTakeaways: [
        "Monitored abnormal bash/sh spawning under web server users (e.g. www-data) via auditd execve logging.",
        "Identified unquoted service paths and misconfigured sudoer permissions (sudo -l) allowing privilege escalation.",
        "Mapped exploitation signatures to Snort/Suricata rules to alert on shell metacharacters in HTTP POST bodies."
      ],
      defensiveHardening: [
        "Strict parameterization on all database and shell execution wrappers.",
        "Least privilege principle: Restricting sudoers entries and applying capability dropping in Linux systemd units.",
        "Application Whitelisting / AppArmor profile enforcement on web server daemons."
      ],
      codeSnippet: `# Example auditd rule to monitor command execution by web daemon
-a always,exit -F arch=b64 -S execve -F euid=33 -k web_exec_triage
# Suricata signature for command injection detection
alert http any any -> $HTTP_SERVERS any (msg:"DEFENSE: Potential OS Command Injection"; content:";|20|cat /etc/passwd"; nocase; sid:1000021; rev:1;)`
    },
    network: {
      title: "Network Traffic & Protocol Analysis",
      badge: "DEEP PACKET INSPECTION & FORENSICS",
      description: "Deep packet inspection lab with Wireshark and tcpdump, analyzing protocol handshakes across TCP/IP, DNS, and HTTP/HTTPS, identifying malicious port scans (SYN vs Connect), rogue traffic patterns, and cleartext transmissions.",
      tactics: ["MITRE ATT&CK T1046 (Network Service Discovery)", "MITRE ATT&CK T1071.004 (DNS Exfiltration)", "Cleartext Protocol Exposure"],
      detectionTakeaways: [
        "Differentiated between stealth TCP SYN scans (half-open, no ACK) and full TCP Connect scans via TCP flag filtering in Wireshark (`tcp.flags.syn == 1 and tcp.flags.ack == 0`).",
        "Identified anomalous high-entropy DNS subdomains and abnormal query volumes characteristic of TXT-record tunneling.",
        "Extracted cleartext credentials traversing unencrypted legacy protocols (HTTP, FTP, Telnet)."
      ],
      defensiveHardening: [
        "Deployment of Zeek/Suricata for continuous baseline anomaly detection.",
        "Enforcing DNS Sinkholing and internal DNS resolvers with response policy zones (RPZ).",
        "Network micro-segmentation with 802.1Q VLANs and strict egress firewall filtering."
      ],
      codeSnippet: `# Wireshark Display Filters for Triage
# 1. Detect anomalous DNS TXT queries often used in exfiltration:
dns.qry.type == 16 and dns.qry.name.len > 45

# 2. Identify potential TCP SYN Port Scans:
tcp.flags.syn == 1 and tcp.flags.ack == 0 and tcp.window_size <= 1024`
    },
    secureapp: {
      title: "Defensive Software & Database Engineering",
      badge: "SECURE PROGRAMMING & DATABASE INTEGRITY",
      description: "Engineered modular software systems in Java and C with strict defensive input validation, memory safety checks, error-boundary logging, and relational database modeling and administration using SQL Server with emphasis on data integrity.",
      tactics: ["OWASP A01:2021 (Broken Access Control)", "OWASP A03:2021 (Injection)", "CWE-119 (Memory Buffer Overrun Defense)"],
      detectionTakeaways: [
        "Eliminated SQL Injection vectors completely by replacing dynamic string concatenations with parameterized PreparedStatements and stored procedures.",
        "Analyzed SQL Server audit logs and Profiler traces to detect unauthorized administrative table scans.",
        "Enforced boundary checks in C string manipulations to prevent stack-based buffer overflows."
      ],
      defensiveHardening: [
        "T-SQL Role-based Access Control (RBAC) with read-only database roles for standard services.",
        "Input sanitization at the presentation boundary before processing.",
        "Encrypted connection strings and TLS 1.3 enforcement on SQL Server listeners."
      ],
      codeSnippet: `// Java PreparedStatement eliminating SQL Injection:
String query = "SELECT id, username, role FROM soc_analysts WHERE email = ? AND status = ?";
try (PreparedStatement pstmt = conn.prepareStatement(query)) {
    pstmt.setString(1, sanitizedEmail);
    pstmt.setString(2, "ACTIVE");
    ResultSet rs = pstmt.executeQuery();
    // Safe defensive execution
}`
    },
    logparser: {
      title: "SOC Triage & Log Analysis Scripting Suite",
      badge: "AUTOMATION & THREAT INTELLIGENCE ENRICHMENT",
      description: "Custom Python, Go, and Bash automation toolkit designed to parse heterogeneous log streams (Linux auth.log, Apache access logs, Windows Security event XML exports), calculate failed login velocity, extract suspicious IOCs, and generate triage reports.",
      tactics: ["MITRE ATT&CK T1110 (Brute Force Detection)", "Incident Response Automation"],
      detectionTakeaways: [
        "Parses multi-gigabyte log archives using streaming generators and regex to identify brute force thresholds within rolling 5-minute windows.",
        "Automatically enriches extracted external IPs against threat feeds (AbuseIPDB, VirusTotal API).",
        "Outputs standardized incident triage summaries in structured JSON and markdown."
      ],
      defensiveHardening: [
        "Reduces Tier 1 alert triage fatigue by 60% through automated deduplication and noise filtering.",
        "Instant export of malicious IP blocks directly to Linux iptables or AWS Security Group format."
      ],
      codeSnippet: `import re
from collections import defaultdict
FAILED_REGEX = re.compile(r'Failed password for (?:invalid user )?(\\S+) from (\\d+\\.\\d+\\.\\d+\\.\\d+)')
threshold = 5

def triage_ssh_logs(logfile_path):
    failed_attempts = defaultdict(int)
    with open(logfile_path, 'r', errors='ignore') as f:
        for line in f:
            match = FAILED_REGEX.search(line)
            if match:
                user, ip = match.groups()
                failed_attempts[ip] += 1
    return {ip: count for ip, count in failed_attempts.items() if count >= threshold}`
    }
  },

  es: {
    htb: {
      title: "Práctica en Hack The Box y Análisis de Amenazas",
      badge: "DECONSTRUCCIÓN DE VECTORES Y MITIGACIÓN",
      description: "Explotación práctica de máquinas y análisis de amenazas enfocado en deconstruir vectores de ataque, identificar vulnerabilidades web (Inyección SQL, Inyección de Comandos OS), escalación de privilegios en Linux y Windows, y redacción de playbooks de mitigación defensiva.",
      tactics: ["MITRE ATT&CK T1059 (Ejecución de Comandos)", "MITRE ATT&CK T1068 (Escalación de Privilegios)", "OWASP A03:2021 (Inyección)"],
      detectionTakeaways: [
        "Monitoreo de generación anómala de shells bash/sh bajo usuarios web (ej. www-data) mediante auditoría execve en auditd.",
        "Identificación de rutas de servicios sin comillas y permisos erróneos en sudoers (sudo -l) que permiten elevar privilegios.",
        "Mapeo de firmas de explotación a reglas Snort/Suricata para alertar sobre metacaracteres de shell en peticiones HTTP POST."
      ],
      defensiveHardening: [
        "Parametrización estricta en todas las consultas a bases de datos y llamadas a shell.",
        "Principio de menor privilegio: restricción de entradas en sudoers y aplicación de perfiles AppArmor.",
        "Listas blancas de aplicaciones y bloqueo de ejecución en directorios temporales."
      ],
      codeSnippet: `# Regla de auditd para monitorear ejecuciones del demonio web
-a always,exit -F arch=b64 -S execve -F euid=33 -k web_exec_triage
# Firma de Suricata para detección de command injection
alert http any any -> $HTTP_SERVERS any (msg:"DEFENSE: Potential OS Command Injection"; content:";|20|cat /etc/passwd"; nocase; sid:1000021; rev:1;)`
    },
    network: {
      title: "Análisis de Tráfico de Red y Protocolos",
      badge: "INSPECCIÓN PROFUNDA DE PAQUETES Y FORENSE",
      description: "Laboratorio de inspección profunda de paquetes con Wireshark y tcpdump, analizando handshakes en TCP/IP, DNS y HTTP/HTTPS, e identificando escaneos maliciosos (SYN vs Connect), tráfico anómalo y credenciales en texto plano.",
      tactics: ["MITRE ATT&CK T1046 (Descubrimiento de Servicios de Red)", "MITRE ATT&CK T1071.004 (Exfiltración DNS)", "Exposición de Protocolos en Texto Plano"],
      detectionTakeaways: [
        "Diferenciación entre escaneos sigilosos TCP SYN (half-open) y escaneos completos TCP Connect mediante banderas TCP en Wireshark (`tcp.flags.syn == 1 and tcp.flags.ack == 0`).",
        "Identificación de subdominios DNS anómalos de alta entropía y volúmenes sospechosos característicos de túneles TXT.",
        "Extracción de credenciales transmitidas en texto plano sobre protocolos heredados sin cifrado (HTTP, FTP, Telnet)."
      ],
      defensiveHardening: [
        "Despliegue de Zeek/Suricata para detección continua de anomalías de línea base.",
        "Implementación de DNS Sinkholing y resolutores internos con zonas RPZ.",
        "Microsegmentación de red mediante VLANs 802.1Q y filtrado estricto de firewall de egreso."
      ],
      codeSnippet: `# Filtros de visualización de Wireshark para Triage
# 1. Detectar consultas DNS TXT anómalas usadas en exfiltración:
dns.qry.type == 16 and dns.qry.name.len > 45

# 2. Identificar posibles escaneos de puertos TCP SYN:
tcp.flags.syn == 1 and tcp.flags.ack == 0 and tcp.window_size <= 1024`
    },
    secureapp: {
      title: "Ingeniería de Software Defensivo y Bases de Datos",
      badge: "PROGRAMACIÓN SEGURA E INTEGRIDAD DE BASES DE DATOS",
      description: "Ingeniería de software modular en Java y C con estricta validación defensiva de entradas, comprobación de límites de memoria, manejo de errores en capas y administración relacional en SQL Server con foco en integridad transaccional.",
      tactics: ["OWASP A01:2021 (Control de Acceso Roto)", "OWASP A03:2021 (Inyección)", "CWE-119 (Defensa contra Desbordamientos de Búfer)"],
      detectionTakeaways: [
        "Erradicación de vectores de inyección SQL reemplazando concatenaciones dinámicas por PreparedStatements parametrizados y procedimientos almacenados.",
        "Análisis de logs de auditoría en SQL Server para detectar escaneos no autorizados a tablas administrativas.",
        "Aplicación de comprobaciones de límites en manipulaciones de cadenas en C para prevenir desbordamientos de pila."
      ],
      defensiveHardening: [
        "Control de acceso basado en roles (RBAC) en T-SQL con permisos de sólo lectura para servicios estándar.",
        "Sanitización rigurosa de entradas en la capa de presentación antes del procesamiento.",
        "Cadenas de conexión cifradas y forzamiento de TLS 1.3 en los listeners de base de datos."
      ],
      codeSnippet: `// PreparedStatement en Java eliminando Inyección SQL:
String query = "SELECT id, username, role FROM soc_analysts WHERE email = ? AND status = ?";
try (PreparedStatement pstmt = conn.prepareStatement(query)) {
    pstmt.setString(1, sanitizedEmail);
    pstmt.setString(2, "ACTIVE");
    ResultSet rs = pstmt.executeQuery();
    // Ejecución segura y defensiva
}`
    },
    logparser: {
      title: "Suite de Scripts para Triage de Logs en SOC",
      badge: "AUTOMATIZACIÓN Y ENRIQUECIMIENTO CON THREAT INTEL",
      description: "Kit de herramientas de automatización en Python, Go y Bash para procesar flujos de logs heterogéneos (auth.log en Linux, access logs en Apache, eventos de seguridad XML en Windows), calcular la velocidad de inicios de sesión fallidos, extraer IOCs y emitir reportes de triage.",
      tactics: ["MITRE ATT&CK T1110 (Detección de Fuerza Bruta)", "Automatización de Respuesta a Incidentes"],
      detectionTakeaways: [
        "Parseo de archivos de logs de varios gigabytes con generadores streaming y regex para identificar umbrales de fuerza bruta en ventanas de 5 minutos.",
        "Enriquecimiento automático de IPs externas contra feeds de inteligencia (AbuseIPDB, VirusTotal API).",
        "Generación de reportes de triage de incidentes en formatos estructurados JSON y markdown."
      ],
      defensiveHardening: [
        "Reducción de fatiga por alertas en Tier 1 en un 60% mediante deduplicación y filtrado de ruido.",
        "Exportación instantánea de bloques de IPs maliciosas a formato iptables o Security Groups de AWS."
      ],
      codeSnippet: `import re
from collections import defaultdict
FAILED_REGEX = re.compile(r'Failed password for (?:invalid user )?(\\S+) from (\\d+\\.\\d+\\.\\d+\\.\\d+)')
threshold = 5

def triage_ssh_logs(logfile_path):
    failed_attempts = defaultdict(int)
    with open(logfile_path, 'r', errors='ignore') as f:
        for line in f:
            match = FAILED_REGEX.search(line)
            if match:
                user, ip = match.groups()
                failed_attempts[ip] += 1
    return {ip: count for ip, count in failed_attempts.items() if count >= threshold}`
    }
  }
};

function initProjectModals() {
  const modal = document.getElementById('project-modal');
  const modalClose = document.getElementById('project-modal-close');
  const modalBackdrop = document.getElementById('project-modal-backdrop');
  const detailButtons = document.querySelectorAll('[data-project-id]');

  if (!modal) return;

  function openProjectModal(id) {
    const langData = projectData[currentLang] || projectData.en;
    const data = langData[id];
    if (!data) return;

    document.getElementById('modal-title').textContent = data.title;
    document.getElementById('modal-badge').textContent = data.badge;
    document.getElementById('modal-desc').textContent = data.description;

    const tacticsContainer = document.getElementById('modal-tactics');
    tacticsContainer.innerHTML = data.tactics.map(t =>
      `<span class="px-2.5 py-1 text-[11px] font-mono rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-300">${t}</span>`
    ).join('');

    const takeawaysContainer = document.getElementById('modal-takeaways');
    takeawaysContainer.innerHTML = data.detectionTakeaways.map(t =>
      `<li class="flex items-start gap-2"><span class="text-emerald-400 font-bold">›</span><span>${t}</span></li>`
    ).join('');

    const hardeningContainer = document.getElementById('modal-hardening');
    hardeningContainer.innerHTML = data.defensiveHardening.map(h =>
      `<li class="flex items-start gap-2"><span class="text-cyan-400 font-bold">›</span><span>${h}</span></li>`
    ).join('');

    document.getElementById('modal-snippet').textContent = data.codeSnippet;

    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.classList.add('overflow-hidden');
  }

  function closeProjectModal() {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.classList.remove('overflow-hidden');
  }

  detailButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-project-id');
      openProjectModal(id);
    });
  });

  if (modalClose) modalClose.addEventListener('click', closeProjectModal);
  if (modalBackdrop) modalBackdrop.addEventListener('click', closeProjectModal);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      closeProjectModal();
    }
  });
}

/* ==========================================================================
   6. RESUME (PDF / PRINT) MODAL
   ========================================================================== */
function initResumeModal() {
  const resumeModal = document.getElementById('resume-modal');
  const resumeOpenBtns = document.querySelectorAll('[data-action="open-resume"]');
  const resumeClose = document.getElementById('resume-modal-close');
  const resumeBackdrop = document.getElementById('resume-modal-backdrop');
  const printBtn = document.getElementById('print-resume-btn');
  const copyResumeBtn = document.getElementById('copy-resume-btn');

  if (!resumeModal) return;

  function openResume() {
    resumeModal.classList.remove('hidden');
    resumeModal.classList.add('flex');
    document.body.classList.add('overflow-hidden');
  }

  function closeResume() {
    resumeModal.classList.add('hidden');
    resumeModal.classList.remove('flex');
    document.body.classList.remove('overflow-hidden');
  }

  resumeOpenBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openResume();
    });
  });

  if (resumeClose) resumeClose.addEventListener('click', closeResume);
  if (resumeBackdrop) resumeBackdrop.addEventListener('click', closeResume);

  if (printBtn) {
    printBtn.addEventListener('click', () => {
      window.print();
    });
  }

  if (copyResumeBtn) {
    copyResumeBtn.addEventListener('click', () => {
      const cvText = currentLang === 'es' ?
`FACUNDO CACERES OLGUIN - ANALISTA SOC JUNIOR
Buenos Aires, Argentina (Remoto / Híbrido / Presencial)
Email: caceresolguinfacundo@gmail.com
LinkedIn: https://www.linkedin.com/in/facundo-caceres-olguin
GitHub: https://github.com/Facu-caceres
Hack The Box: https://profile.hackthebox.com/profile/019d080d-7bf2-7187-b518-4b18c3298acb?utm_medium=copy_url

RESUMEN PROFESIONAL:
Estudiante de Ingeniería en Informática en la Universidad Nacional de La Matanza (UNLaM) ingresando a 4° año, especializado en ciberseguridad defensiva, operaciones SOC Tier 1, triage de alertas, gestión de incidentes y detección de amenazas. Experiencia práctica en análisis forense de redes con Wireshark y tcpdump, Windows Event Logs (4624, 4625, 4688, 7045), Linux Syslog y automatización en Python, Go y Bash. Práctica activa en Hack The Box mapeada a MITRE ATT&CK y OWASP Top 10.

HABILIDADES TÉCNICAS:
- Foco Principal: Operaciones Blue Team, Triage de Alertas, Gestión de Incidentes, Detección de Amenazas.
- Análisis y Forense: Windows Event Logs, Linux Syslog, MITRE ATT&CK, OWASP Top 10, Wireshark, tcpdump, inspección PCAP.
- Herramientas de Seguridad: Nmap, Burp Suite, Metasploit, Sysinternals, Linux CLI, Active Directory.
- Scripting y Lenguajes: Python, Go, Bash, Java, C, SQL (SQL Server).

EDUCACIÓN:
Ingeniería en Informática | Universidad Nacional de La Matanza (UNLaM) | 2023 – Presente (Ingresando a 4° Año)
Materias Relevantes: Redes de Información, Sistemas Operativos, Sistemas Distribuidos, Arquitectura de Bases de Datos, Algoritmos Avanzados.

CERTIFICACIONES E HITOS:
- Activo: Laboratorios Prácticos y CTFs en Hack The Box
- En Preparación / Objetivo: CompTIA Security+ / BTL1 (Blue Team Level 1)` :
`FACUNDO CACERES OLGUIN - JUNIOR SOC ANALYST
Buenos Aires, Argentina (Remote / Hybrid / On-site)
Email: caceresolguinfacundo@gmail.com
LinkedIn: https://www.linkedin.com/in/facundo-caceres-olguin
GitHub: https://github.com/Facu-caceres
Hack The Box: https://profile.hackthebox.com/profile/019d080d-7bf2-7187-b518-4b18c3298acb?utm_medium=copy_url

PROFESSIONAL SUMMARY:
Computer Engineering student at Universidad Nacional de La Matanza (UNLaM) entering 4th year, specializing in defensive cybersecurity, Tier 1 SOC operations, alert triage, incident handling, and threat detection. Practical experience in network forensics with Wireshark and tcpdump, Windows Event Logs (4624, 4625, 4688, 7045), Linux Syslog, and automated scripting in Python, Go, and Bash. Active hands-on practice on Hack The Box machines mapped to MITRE ATT&CK and OWASP Top 10 frameworks.

CORE TECHNICAL SKILLS:
- Core Focus: Blue Team Operations, Alert Triage, Incident Handling, Threat Detection
- Analysis & Forensics: Windows Event Logs, Linux Syslog, MITRE ATT&CK, OWASP Top 10, Wireshark, tcpdump, PCAP inspection
- Security Tools: Nmap, Burp Suite, Metasploit, Sysinternals, Linux CLI, Active Directory fundamentals
- Scripting & Languages: Python, Go, Bash, Java, C, SQL (SQL Server)

EDUCATION:
B.S. in Computer Engineering (Ingeniería en Informática)
Universidad Nacional de La Matanza (UNLaM) | 2023 – Present (Currently entering 4th year)
Relevant Coursework: Computer Networks, Operating Systems, Distributed Systems, Database Architecture, Advanced Algorithms.

CERTIFICATIONS & MILESTONES:
- Active: Hack The Box Hands-on Labs & CTF Challenges
- Target / In Progress: CompTIA Security+ / BTL1 (Blue Team Level 1) preparation`;

      navigator.clipboard.writeText(cvText).then(() => {
        showToast(translations[currentLang].resume_toast_copied);
      }).catch(() => {
        showToast('Error copying to clipboard');
      });
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !resumeModal.classList.contains('hidden')) {
      closeResume();
    }
  });
}

/* ==========================================================================
   7. CONTACT INTERACTIONS (Direct Copy & Mailto)
   ========================================================================= */
function initContactInteractions() {
  const copyEmailBtns = document.querySelectorAll('[data-copy-email]');

  copyEmailBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const email = btn.getAttribute('data-copy-email') || 'caceresolguinfacundo@gmail.com';
      navigator.clipboard.writeText(email).then(() => {
        const prefix = translations[currentLang].email_toast_copied || '✓ Email copied:';
        showToast(`${prefix} ${email}`);
      }).catch(() => {
        showToast('Error copying email');
      });
    });
  });
}

/* ==========================================================================
   8. TOAST NOTIFICATION UTILITY
   ========================================================================== */
function showToast(message) {
  let toast = document.getElementById('cyber-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'cyber-toast';
    toast.className = 'fixed bottom-6 right-6 z-50 px-4 py-3 bg-slate-900 border border-emerald-500/50 text-emerald-300 text-xs font-mono rounded-lg shadow-xl shadow-emerald-950/40 flex items-center gap-2 transform translate-y-20 opacity-0 transition-all duration-300';
    document.body.appendChild(toast);
  }

  toast.innerHTML = `<span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span><span>${message}</span>`;
  toast.classList.remove('translate-y-20', 'opacity-0');
  toast.classList.add('translate-y-0', 'opacity-100');

  setTimeout(() => {
    toast.classList.remove('translate-y-0', 'opacity-100');
    toast.classList.add('translate-y-20', 'opacity-0');
  }, 3500);
}

/* ==========================================================================
   9. SCROLLSPY & SMOOTH NAVIGATION
   ========================================================================== */
function initScrollSpy() {
  const navLinks = document.querySelectorAll('nav a[href^="#"]');
  const sections = document.querySelectorAll('section[id]');

  function onScroll() {
    let scrollY = window.pageYOffset;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          if (link.getAttribute('href') === '#' + sectionId) {
            link.classList.add('text-emerald-400', 'border-emerald-500/40');
            link.classList.remove('text-slate-400');
          } else {
            link.classList.remove('text-emerald-400', 'border-emerald-500/40');
            link.classList.add('text-slate-400');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });
}

/* ==========================================================================
   10. OPTIONAL CYBER AUDIO SYNTHESIZER (Web Audio API)
   ========================================================================== */
function initAudioFeedback() {
  let audioCtx = null;
  let isMuted = true;

  const toggleBtn = document.getElementById('audio-toggle-btn');
  const toggleIcon = document.getElementById('audio-toggle-icon');

  function getAudioCtx() {
    if (!audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) audioCtx = new AudioContext();
    }
    if (audioCtx && audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
    return audioCtx;
  }

  window.cyberAudio = {
    beep: (freq = 880, duration = 0.05) => {
      if (isMuted) return;
      try {
        const ctx = getAudioCtx();
        if (!ctx) return;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.value = freq;
        gain.gain.setValueAtTime(0.04, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + duration);
      } catch (err) {
        // Silently catch audio restrictions
      }
    }
  };

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      isMuted = !isMuted;
      if (!isMuted) {
        getAudioCtx();
        window.cyberAudio.beep(1200, 0.08);
        toggleIcon.innerHTML = `
          <svg class="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
          </svg>`;
        showToast(currentLang === 'es' ? 'Sonido: Activado' : 'Cyber SFX: Enabled');
      } else {
        toggleIcon.innerHTML = `
          <svg class="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
          </svg>`;
        showToast(currentLang === 'es' ? 'Sonido: Silenciado' : 'Cyber SFX: Muted');
      }
    });
  }
}

/* ==========================================================================
   11. MOBILE MENU TOGGLE
   ========================================================================== */
function initMobileMenu() {
  const toggleBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  if (!toggleBtn || !mobileMenu) return;

  function toggle() {
    const isExpanded = toggleBtn.getAttribute('aria-expanded') === 'true';
    toggleBtn.setAttribute('aria-expanded', !isExpanded);
    mobileMenu.classList.toggle('hidden');
  }

  toggleBtn.addEventListener('click', toggle);

  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
      toggleBtn.setAttribute('aria-expanded', 'false');
    });
  });
}

function escapeHTML(str) {
  return str.replace(/[&<>'"]/g,
    tag => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      "'": '&#39;',
      '"': '&quot;'
    }[tag] || tag)
  );
}
