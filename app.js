const projects = [
  ['AI Crop Recommendation','ML / WEB','Recommends the most suitable crop using soil nutrients, temperature, humidity, rainfall and pH.','Python · scikit-learn · FastAPI','AI-Crop-Recommendation-System-','crop'],
  ['Customer Churn Prediction','DATA SCIENCE','Classification model to identify customers likely to leave, with actionable business insights.','Python · Pandas · scikit-learn','Customer-Churn-Prediction','churn'],
  ['Retail Sales Dashboard','ANALYTICS','Interactive dashboard for sales performance, customer behaviour and profitability.','Power BI · SQL · DAX','Retail-Sales-Analysis-Dashboard','retail'],
  ['Finance Data Analysis','ANALYTICS','Exploratory financial analysis revealing revenue trends and performance indicators.','Python · SQL · Matplotlib','Finance-Data-Analysis','finance'],
  ['Medical Billing System','SYSTEMS','Console system for patient registration, billing, invoices and record management.','C · Data Structures · File Handling','Medical-Billing-System','billing'],
  ['Weather Prediction','MACHINE LEARNING','Weather condition prediction with feature selection and model evaluation.','Python · Pandas · scikit-learn','Weather-Prediction','weather'],
  ['Sentiment Analysis','NLP','Classifies reviews and social posts into positive, negative or neutral sentiment.','Python · NLTK · scikit-learn','Sentiment-Analysis','sentiment'],
  ['ML Inference Service','MLOPS','Production-ready REST API serving validated ML predictions and documentation.','FastAPI · Pydantic · Uvicorn','FastAPI-ML-Inference-Service','api']
];
const projectsGrid = document.querySelector('#projects-grid');
const projectIcons = {crop:'✿',churn:'◔',retail:'▥',finance:'◈',billing:'✚',weather:'☁',sentiment:'☻',api:'⌘'};
function renderProjects(filter = '') {
  const visible = projects.filter(p => p.join(' ').toLowerCase().includes(filter.toLowerCase()));
  projectsGrid.innerHTML = visible.map((p, i) => `<article class="project-card reveal ${i % 3 === 0 ? 'featured' : ''}"><div class="project-visual ${p[5]}"><span>${p[1]}</span><strong class="project-symbol">${projectIcons[p[5]]}</strong><div class="visual-object"><i></i><i></i><i></i></div><b>${String(i+1).padStart(2,'0')}</b></div><div class="project-info"><p>${p[1]}</p><h3>${p[0]}</h3><div><span>${p[3]}</span><a href="https://github.com/sreesuhaas04-droid/${p[4]}" target="_blank" rel="noreferrer" aria-label="View ${p[0]} on GitHub">◒</a></div><small>${p[2]}</small></div></article>`).join('') || '<p class="no-results">No projects found. Try another search.</p>';
  observeReveals();
}
renderProjects();
document.querySelector('#project-search').addEventListener('input', e => renderProjects(e.target.value));

const certificates = [
 ['Python Essentials 1','Cisco Networking Academy','assets/cert-python.jpg'], ['ML Engineering Internship','ScholarX','assets/cert-scholarx.jpg'], ['Data Science Internship','Thiranex','assets/cert-thiranex.jpg'], ['Data Analyst 101','Simplilearn','assets/cert-data.jpg'], ['Machine Learning Using Python','Simplilearn','assets/cert-ml.jpg'], ['Web Development Internship','InternLink','assets/cert-internlink.jpg'], ['TechSprint 2026','Google Developer Group','assets/cert-hackathon.jpg'], ['Google Cloud AI','Google Cloud / Simplilearn','assets/cert-google.jpg']
];
document.querySelector('#cert-gallery').innerHTML = certificates.map((c,i) => `<button class="cert-card reveal" data-image="${c[2]}"><img src="${c[2]}" alt="${c[0]} certificate"/><span>${String(i+1).padStart(2,'0')}</span><div><p>${c[1]}</p><h3>${c[0]}</h3></div></button>`).join('');
const modal = document.querySelector('#cert-modal');
document.querySelector('#cert-gallery').addEventListener('click', e => { const card = e.target.closest('.cert-card'); if(card){ modal.querySelector('img').src = card.dataset.image; modal.showModal(); }});
document.querySelector('.modal-close').onclick = () => modal.close();
modal.addEventListener('click', e => { if(e.target === modal) modal.close(); });

const contributionGrid = document.querySelector('#contribution-grid');
for (let i=0;i<154;i++) { const cell=document.createElement('i'); const roll=(i*17+i*i*5)%13; cell.className=`l${roll>10?4:roll>7?3:roll>4?2:roll>1?1:0}`; contributionGrid.appendChild(cell); }

function observeReveals(){const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in-view');observer.unobserve(e.target)}}),{threshold:.12});document.querySelectorAll('.reveal:not(.in-view)').forEach(el=>observer.observe(el))} observeReveals();
document.querySelector('#theme-toggle').onclick=()=>document.body.classList.toggle('light');
document.querySelector('#menu-toggle').onclick=()=>document.querySelector('#nav-links').classList.toggle('open');
document.querySelectorAll('.nav-links a').forEach(a=>a.onclick=()=>document.querySelector('#nav-links').classList.remove('open'));
const glow=document.querySelector('.cursor-glow'); window.addEventListener('pointermove',e=>{glow.style.transform=`translate(${e.clientX}px,${e.clientY}px)`});
window.addEventListener('scroll',()=>{const y=window.scrollY;document.querySelectorAll('[data-parallax]').forEach(el=>el.style.transform=`translateY(${y*Number(el.dataset.parallax)}px)`);document.documentElement.style.setProperty('--scroll',y)});
document.querySelector('#contact-form').addEventListener('submit', e => { e.preventDefault(); const data=new FormData(e.currentTarget); const subject=encodeURIComponent(`Portfolio enquiry from ${data.get('name')}`); const body=encodeURIComponent(`Name: ${data.get('name')}\nEmail: ${data.get('email')}\n\n${data.get('message')}`); document.querySelector('#form-status').textContent='Opening your email client…'; window.location.href=`mailto:sreesuhaas04@gmail.com?subject=${subject}&body=${body}`; });
