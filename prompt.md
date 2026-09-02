Act as a senior frontend engineer and UI/UX designer. Build a modern, high-performance, single-page CV/Portfolio website tailored for a Junior SOC Analyst / Defensive Security professional.

### Design System & Theme:
- **Aesthetic:** Modern cybersecurity / Blue Team terminal vibe (dark theme by default: slate/zinc background `#0a0e17`, clean cyber accents like emerald green `#10b981` or cyan `#06b6d4`, high contrast, clean typography with `Inter` for body and `JetBrains Mono` for code/terminal badges).
- **Layout:** Responsive, clean spacing, glassmorphism cards, interactive hover effects, and mobile-friendly navigation.
- **Components:** Clean navbar with smooth-scrolling anchors, hero banner, interactive terminal/skills matrix, project cards, education timeline, and contact footer.

---

### Website Sections & Content:

1. **Header / Navbar:**
   - Brand: `FC / security-analyst`
   - Navigation Links: About, Skills, Labs & Projects, Education, Contact.
   - Quick Action: "Download Resume (PDF)" button with download icon.

2. **Hero Section:**
   - **Name:** Facundo Cáceres
   - **Headline / Tagline:** Junior SOC Analyst | Blue Team & Threat Detection | Computer Engineering Student @ UNLaM
   - **Short Pitch:** "Deconstructing attack vectors, analyzing network traffic, and building resilient detection workflows to mitigate threats before they escalate."
   - **Badges / Social Links:** LinkedIn, GitHub, Hack The Box, Email (using Lucide icons).
   - **Interactive Terminal Widget (Hero Right/Bottom):** A mock terminal window showing a simulated command:
     `$ soc-agent status --profile facundo` -> outputs current focus, top tools (Wireshark, Nmap, Splunk/Wazuh, Python), and status: "Open to Junior SOC Roles".

3. **About Me:**
   - Concise summary highlighting 4th-year Computer Engineering studies at Universidad Nacional de La Matanza (UNLaM).
   - Focus on defensive operations, alert triage, incident response methodology (MITRE ATT&CK / OWASP), and continuous practice on Hack The Box.

4. **Technical Arsenal (Categorized Grid):**
   - **SOC & Incident Response:** Alert Triage, Windows Event Logs, Linux Syslog, MITRE ATT&CK, OWASP Top 10.
   - **Network Forensics & Analysis:** Wireshark, PCAP dissection, TCP/IP, DNS, HTTP/S, Nmap, tcpdump.
   - **Systems & Infrastructure:** Linux CLI (Debian/Kali/Ubuntu), Windows Server & Active Directory fundamentals.
   - **Scripting & Development:** Python (automation/log parsing), Bash, Java, C, SQL Server.

5. **Labs & Featured Projects:**
   - **Hack The Box - Machine Writeups & Labs:** Identification and mitigation of OS command injection, SQLi, and Linux/Windows privilege escalation vectors.
   - **Network Traffic & Protocol Analysis Lab:** Capturing, inspecting, and documenting malicious network patterns and port scans using Wireshark.
   - **Secure Systems & Database Development:** Modular applications built in Java/C with defensive input handling and relational database management in SQL Server.
   *(Each card must include tech badges, a brief description of the defensive takeaway, and GitHub/write-up buttons).*

6. **Education & Certifications:**
   - **B.S. in Computer Engineering** | Universidad Nacional de La Matanza (UNLaM) | *2023 – Present (4th Year)*
   - Focus areas: Distributed Systems, Operating Systems, Computer Networks, Database Architecture.

7. **Contact / Footer:**
   - Direct mailto link, LinkedIn, GitHub, and Hack The Box profiles.
   - Clean copyright footer with current year and terminal status indicator: `● SOC Monitored & Protected`.

---

### Technical Requirements:
- Use clean semantic HTML5, modern CSS (Tailwind CSS preferred), and lightweight vanilla JS / React.
- Include subtle animations on scroll (fade-in, glowing borders on hover).
- Ensure fast load times and clean accessibility (ARIA labels, semantic headings).
