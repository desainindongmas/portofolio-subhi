"""Generate concise bilingual CVs from owner-confirmed facts only."""
from pathlib import Path
import json
from xml.sax.saxutils import escape
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, KeepTogether
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
root=Path(__file__).resolve().parents[1]
s=(root/'dist/portfolio-data.js').read_text(); d=json.loads(s[len('const portfolioData='):].strip().removesuffix(';'))
fonts=Path('/usr/share/fonts/truetype/dejavu')
pdfmetrics.registerFont(TTFont('CV',str(fonts/'DejaVuSans.ttf')))
pdfmetrics.registerFont(TTFont('CVBold',str(fonts/'DejaVuSans-Bold.ttf')))
pdfmetrics.registerFontFamily('CV',normal='CV',bold='CVBold',italic='CV',boldItalic='CVBold')
navy=colors.HexColor('#17323c');muted=colors.HexColor('#52676e');teal=colors.HexColor('#326c70')
for en in [False,True]:
 language='en' if en else 'id'
 out=root/f'dist/downloads/muhammad-subhi-cv-{language}.pdf'
 style={
 'name':ParagraphStyle('name',fontName='CVBold',fontSize=23,leading=27,textColor=navy,spaceAfter=7),
 'role':ParagraphStyle('role',fontName='CV',fontSize=9.1,leading=14,textColor=teal,spaceAfter=9),
 'contact':ParagraphStyle('contact',fontName='CV',fontSize=8,leading=12,textColor=muted,spaceAfter=9),
 'heading':ParagraphStyle('heading',fontName='CVBold',fontSize=9.5,leading=14,textColor=teal,spaceBefore=10,spaceAfter=5),
 'body':ParagraphStyle('body',fontName='CV',fontSize=8.3,leading=12,textColor=navy,spaceAfter=5),
 'title':ParagraphStyle('title',fontName='CVBold',fontSize=8.8,leading=13,textColor=navy,spaceAfter=2),
 'small':ParagraphStyle('small',fontName='CV',fontSize=7.6,leading=10.5,textColor=muted,spaceAfter=6),
 }
 flow=[]
 def P(t,k='body'):return Paragraph(t,style[k])
 def add(t,k='body'):flow.append(P(t,k))
 def choose(a,b):return b if en else a
 add('Muhammad Subhi','name')
 add(escape(d['profile']['headline']),'role')
 add('Bogor, Indonesia | +62 859 5283 9393 | muhammadsubhi@desainindongmas.my.id<br/>'
     '<link href="https://desainindongmas.my.id">desainindongmas.my.id</link> | '
     '<link href="https://www.linkedin.com/in/muhammad-subhi-7b8b7a111/">LinkedIn: Muhammad Subhi</link>','contact')
 add(choose('PROFIL','PROFILE'),'heading')
 add(escape(choose(d['profile']['bio'],"I combine marketing, team leadership, business strategy, design and technology to build digital solutions. Through desainindongmas, I plan branding, websites, apps and content from requirements to publication. I direct AI to accelerate delivery while retaining strategy, review and quality control.")))
 add(choose('PENGALAMAN','EXPERIENCE'),'heading')
 month_names={False:['','Januari','Februari','Maret','April','Mei','Juni','Juli','Agustus','September','Oktober','November','Desember'],True:['','January','February','March','April','May','June','July','August','September','October','November','December']}
 def date_label(value):
  if not value:return ''
  parts=value.split('-')
  if len(parts)==1:return parts[0]
  return month_names[en][int(parts[1])]+' '+parts[0]
 en_roles={'Founder / Pengelola':'Founder / Operator','Associate Agency Director (AAD) · Sales & Team Leadership':'Associate Agency Director (AAD) · Sales & Team Leadership','Associate Agency Manager (AAM) / Junior Leader':'Associate Agency Manager (AAM) / Junior Leader','Agent / Marketing':'Insurance Sales Agent / Marketing','Tenaga Pengajar':'Tutor'}
 en_scope={
  'desainindongmas':'Brand strategy, websites, AI-assisted business applications, and social content from requirements and design through testing and publication.',
  'Associate Agency Director (AAD) · Sales & Team Leadership':'Leading and coaching the sales team, supporting qualified lead development, offers, closing, client relationships, and personal sales activities.',
  'Associate Agency Manager (AAM) / Junior Leader':'Developing and supporting agents while handling prospects, clients and personal sales production.',
  'Agent / Marketing':'Prospecting, marketing, understanding client needs, and building customer relationships.'
 }
 roles=[]
 for e in d['experience']:
  role=en_roles.get(e['role'],e['role']) if en else e['role']
  period=date_label(e['from'])+' - '+(choose('sekarang','present') if e.get('current') else date_label(e.get('to','')))
  scope=en_scope.get(e['role'],en_scope.get(e['company'],e.get('scope',''))) if en else e.get('scope','')
  roles.append((escape(e['company']),escape(role),escape(period),escape(scope)))
 for company,role,period,scope in roles:
  items=[P(company+' | '+role,'title'),P(period,'small')]
  if scope:items.append(P(scope))
  flow.append(KeepTogether(items))
 add(choose('KARYA PILIHAN','SELECTED WORK'),'heading')
 works=[
 ('desainindongmas','https://desainindongmas.my.id',choose('Ekosistem website studio, layanan, SaaS, dan kemitraan. Menyesuaikan komunikasi lintas segmen dalam satu identitas brand. Website dirilis.','A studio ecosystem connecting services, SaaS and partnerships. Adapting communication across audiences within one brand identity. Website released.')),
 ('KabarKelas','https://kabarkelas.desainindongmas.my.id',choose('Perencanaan, blueprint, desain, engine, database, integrasi, dan deployment demo. Progres 75% per Oktober 2026; demo tersedia; target rilis November 2026.','Requirements, blueprints, design, engines, database, integrations and demo deployment. 75% as of October 2026; demo available; target release November 2026.')),
 ('LBH Dakwah &amp; Pendidikan','https://lbhdp.my.id',choose('Website, panel admin, Instagram dan Facebook; brand guideline, kalender, desain, caption, serta publikasi. Penugasan berjalan: Oktober 2026 - Maret 2027.','Website, admin panel, Instagram and Facebook; brand guidelines, calendar, design, captions and publishing. Ongoing engagement: October 2026 - March 2027.'))]
 for name,link,desc in works:
  flow.append(KeepTogether([P(name,'title'),P(desc),P(f'<link href="{link}">{link.replace("https://","")}</link>','small')]))
 add(choose('KEMAMPUAN &amp; TOOLS','CAPABILITIES &amp; TOOLS'),'heading')
 add(choose('Brand dan konten: guideline, pilar, kalender konten, desain, caption, publikasi dan pengelolaan akun. Produk digital: kebutuhan, spesifikasi, blueprint, desain antarmuka, serta pengembangan dan deployment berbantuan AI.','Brand and content: guidelines, pillars, calendars, design, captions, publishing and account management. Digital products: requirements, specifications, blueprints, interfaces, and AI-assisted development and deployment.'))
 add('Canva, CapCut, Photoshop, Lightroom | ChatGPT, Codex, Claude, Gemini, Google Flow<br/>GitHub, Supabase, Netlify, Vercel, Cloudflare, Firebase<br/>Instagram, TikTok, Facebook, WhatsApp Business, Meta Business Suite, Meta Ads','small')
 add(choose('PENDIDIKAN &amp; PELATIHAN','EDUCATION &amp; TRAINING'),'heading')
 add(choose('UIN Syarif Hidayatullah | S1 Perbankan Syariah | Lulus 2018','UIN Syarif Hidayatullah | Bachelor’s degree, Islamic Banking | Graduated 2018'))
 add(choose('Pelatihan terkait: Digital Marketing (RevoU), Social Media Management, Optimasi Instagram dengan Insight, Produksi Konten Media Sosial dengan AI, serta Konsep Pemrograman (Digital Talent Scholarship / Komdigi). Daftar lengkap tersedia di portofolio.','Relevant training: Digital Marketing (RevoU), Social Media Management, Instagram Insights Optimization, AI-assisted Social Media Content Production, and Programming Concepts (Digital Talent Scholarship / Komdigi). Full training list available in the portfolio.'),'small')
 def footer(canvas,doc):
  canvas.setFont('CV',7);canvas.setFillColor(muted);canvas.drawString(42,25,choose('CV ringkas | Diperbarui 12 November 2026','Concise CV | Updated 12 November 2026'));canvas.drawRightString(553,25,str(doc.page))
 doc=SimpleDocTemplate(str(out),pagesize=(595.28,841.89),rightMargin=42,leftMargin=42,topMargin=31,bottomMargin=38,title='Muhammad Subhi - Professional CV',author='Muhammad Subhi')
 doc.build(flow,onFirstPage=footer,onLaterPages=footer)
 print(out)
