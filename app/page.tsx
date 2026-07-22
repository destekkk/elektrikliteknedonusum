import Image from "next/image";
import { faqItems } from "../data/faq";

export default function HomePage() {
  return (
    <>
      <header className="site-header">
        <div className="container nav">
          <a href="#ust" className="brand">
            <span className="brand-text">
              ElektrikliTekne<span>Dönüşüm</span>
            </span>
          </a>
          <ul className="nav-links">
            <li>
              <a href="#neden">Avantajlar</a>
            </li>
            <li>
              <a href="#aksamlar">Aksamlar</a>
            </li>
            <li>
              <a href="#surec">Süreç</a>
            </li>
            <li>
              <a href="#sss">SSS</a>
            </li>
            <li>
              <a href="#iletisim">İletişim</a>
            </li>
          </ul>
          <a className="nav-cta" href="#iletisim">
            Teklif Alın
          </a>
        </div>
      </header>

      <main id="ust">
        <section className="hero" aria-label="Ana vitrin">
          <Image
            src="/hero-boat.jpg"
            alt="Denizde modern tekne — elektrikli tekne dönüşüm"
            fill
            priority
            className="hero-photo"
            sizes="100vw"
          />
          <div className="hero-scrim" aria-hidden />
          <div className="container hero-content">
            <h1 className="brand-heading">Teknenizi elektriğe dönüştürün</h1>
            <p>
              Sessiz seyir, düşük işletme maliyeti ve güvenilir sistem tasarımı —
              mevcut tekneniz için profesyonel elektrikli motor dönüşümü.
            </p>
            <div className="cta-row">
              <a className="btn-primary" href="#iletisim">
                Keşif randevusu alın
              </a>
              <a className="btn-ghost" href="#surec">
                Süreci inceleyin
              </a>
            </div>
          </div>
          <svg
            className="hero-edge"
            viewBox="0 0 1440 64"
            preserveAspectRatio="none"
            aria-hidden
          >
            <path
              fill="currentColor"
              d="M0,28 C360,64 720,0 1080,36 C1260,52 1380,44 1440,32 L1440,64 L0,64 Z"
            />
          </svg>
        </section>

        <section className="parts-strip" aria-label="Sistem bileşenleri">
          <div className="container parts-strip-grid">
            <figure className="parts-strip-item">
              <Image
                src="/part-motor.jpg"
                alt="Dıştan takma elektrikli motor"
                width={400}
                height={280}
              />
              <figcaption>
                <strong>Dıştan takma motor</strong>
                <span>Şaft tahrikli dıştan takma elektrik motor çözümleri</span>
              </figcaption>
            </figure>
            <figure className="parts-strip-item">
              <Image
                src="/part-inboard-motor.jpg"
                alt="İçten takma elektrik motor"
                width={400}
                height={280}
              />
              <figcaption>
                <strong>İçten takma motor</strong>
                <span>Motor bölmesine entegre içten takma tahrik sistemi</span>
              </figcaption>
            </figure>
            <figure className="parts-strip-item">
              <Image
                src="/part-battery.jpg"
                alt="Tekne batarya sistemi"
                width={400}
                height={280}
              />
              <figcaption>
                <strong>Batarya sistemi</strong>
                <span>Menzil ve güvenlik odaklı enerji depolama mimarisi</span>
              </figcaption>
            </figure>
            <figure className="parts-strip-item">
              <Image
                src="/part-propeller.jpg"
                alt="Tekne pervanesi"
                width={400}
                height={280}
              />
              <figcaption>
                <strong>Tahrik aksamı</strong>
                <span>Pervane ve aktarma hattının elektrikli sisteme uyumu</span>
              </figcaption>
            </figure>
          </div>
        </section>

        <section className="section" id="neden">
          <div className="container">
            <span className="section-label">Avantajlar</span>
            <h2 className="display">Neden elektrikli dönüşüm?</h2>
            <p className="section-lead">
              Dönüşümü teknik ve ekonomik gerekçelerle netleştiriyoruz; her
              teknede ihtiyaca özel sistem seçimi yapıyoruz.
            </p>
            <div className="benefits">
              <article className="benefit">
                <span className="benefit-num">01</span>
                <div>
                  <h3>Sessiz ve konforlu seyir</h3>
                  <p>
                    Motor gürültüsü ve titreşim belirgin şekilde azalır; liman ve
                    açık denizde daha kontrollü bir deneyim sunar.
                  </p>
                </div>
              </article>
              <article className="benefit">
                <span className="benefit-num">02</span>
                <div>
                  <h3>Düşük işletme maliyeti</h3>
                  <p>
                    Yakıt yerine şarj; bakım kalemleri sadeleşir, uzun vadede
                    giderler daha öngörülebilir hale gelir.
                  </p>
                </div>
              </article>
              <article className="benefit">
                <span className="benefit-num">03</span>
                <div>
                  <h3>Anında tork, temiz güç</h3>
                  <p>
                    Elektrikli tahrik ilk andan yüksek çekiş sağlar; egzoz
                    emisyonu ve koku oluşmaz.
                  </p>
                </div>
              </article>
              <article className="benefit">
                <span className="benefit-num">04</span>
                <div>
                  <h3>Tekneye özel sistem</h3>
                  <p>
                    Gövde tipi, kullanım profili ve menzil hedefine göre motor,
                    batarya ve şarj altyapısı birlikte planlanır.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="section parts" id="aksamlar">
          <div className="container">
            <span className="section-label">Aksamlar</span>
            <h2 className="display">Tekne ve sistem bileşenleri</h2>
            <p className="section-lead">
              Dönüşümde motor, enerji depolama ve tahrik aksamları teknenize
              göre seçilir ve güvenli şekilde entegre edilir.
            </p>
          </div>
          <div className="parts-grid">
            <figure className="part-block">
              <Image
                src="/part-motor.jpg"
                alt="Dıştan takma elektrikli motor"
                width={800}
                height={600}
                className="part-image"
              />
              <figcaption>
                <strong>Dıştan takma motor</strong>
                <span>Şaft tahrikli dıştan takma elektrik motor çözümleri</span>
              </figcaption>
            </figure>
            <figure className="part-block">
              <Image
                src="/part-inboard-motor.jpg"
                alt="İçten takma elektrik motor"
                width={800}
                height={600}
                className="part-image"
              />
              <figcaption>
                <strong>İçten takma elektrik motor</strong>
                <span>Motor bölmesine entegre içten takma tahrik sistemi</span>
              </figcaption>
            </figure>
            <figure className="part-block">
              <Image
                src="/part-battery.jpg"
                alt="Tekne batarya sistemi"
                width={800}
                height={600}
                className="part-image"
              />
              <figcaption>
                <strong>Batarya sistemi</strong>
                <span>Menzil ve güvenlik odaklı enerji depolama mimarisi</span>
              </figcaption>
            </figure>
            <figure className="part-block">
              <Image
                src="/part-propeller.jpg"
                alt="Tekne pervanesi"
                width={800}
                height={600}
                className="part-image"
              />
              <figcaption>
                <strong>Tahrik aksamı</strong>
                <span>Pervane ve aktarma hattının elektrikli sisteme uyumu</span>
              </figcaption>
            </figure>
          </div>
        </section>

        <section className="section process" id="surec">
          <div className="container">
            <span className="section-label">Süreç</span>
            <h2 className="display">Dönüşüm süreci</h2>
            <p className="section-lead">
              Keşiften teslimata kadar net adımlar ve onay noktalarıyla
              ilerliyoruz.
            </p>
            <div className="process-steps">
              <article className="step">
                <span className="step-index">Adım 01</span>
                <h3>Keşif ve analiz</h3>
                <p>
                  Tekne özellikleri, mevcut tahrik sistemi ve menzil hedefleri
                  birlikte değerlendirilir.
                </p>
              </article>
              <article className="step">
                <span className="step-index">Adım 02</span>
                <h3>Sistem tasarımı</h3>
                <p>
                  Motor gücü, batarya kapasitesi, şarj çözümü ve güvenlik
                  bileşenleri teknenize özel seçilir.
                </p>
              </article>
              <article className="step">
                <span className="step-index">Adım 03</span>
                <h3>Montaj ve teslim</h3>
                <p>
                  Kurulum, test seyri ve kullanım bilgilendirmesi ile sistem
                  teslim edilir.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="section seo-block" id="hizmetler">
          <div className="container">
            <span className="section-label">Hizmetler</span>
            <h2 className="display">Elektrikli tekne dönüşüm hizmetlerimiz</h2>
            <p className="section-lead">
              Dizel veya benzinli tekne motorunuzu elektriğe çeviriyoruz.
              İstanbul Galata atölyemiz ve marina randevuları ile Türkiye
              genelinde elektrikli tekne motor dönüşümü sunuyoruz.
            </p>
            <div className="seo-grid">
              <article>
                <h3>Elektrikli tekne motor dönüşümü</h3>
                <p>
                  Mevcut teknenize uygun elektrikli tekne motoru seçimi, güç
                  hesabı, montaj ve test seyri. Küçük gezi teknesinden marina
                  kullanımına kadar elektrikli tahrik sistemi kurulumu.
                </p>
              </article>
              <article>
                <h3>İçten takma elektrik motor</h3>
                <p>
                  Motor bölmeli tekneler için içten takma elektrik motor
                  (inboard) çözümleri. Şaft hattı, soğutma ve güvenlik
                  ekipmanları ile komple elektrikli inboard dönüşüm.
                </p>
              </article>
              <article>
                <h3>Dıştan takma elektrik motor</h3>
                <p>
                  Dıştan takma elektrik motor (elektrikli outboard) ile hızlı
                  dönüşüm. Sessiz tekne motoru, anında tork ve kolay bakım
                  avantajı.
                </p>
              </article>
              <article>
                <h3>Tekne batarya ve şarj sistemi</h3>
                <p>
                  Lityum tekne batarya paketi, BMS, şarj ünitesi ve kablolama.
                  Menzil hedefinize göre elektrikli tekne batarya sistemi
                  tasarımı.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="section faq" id="sss">
          <div className="container">
            <span className="section-label">SSS</span>
            <h2 className="display">Sık sorulan sorular</h2>
            <p className="section-lead">
              Elektrikli tekne dönüşümü, motor seçimi, batarya menzili ve fiyat
              hakkında merak edilenler.
            </p>
            <div className="faq-list">
              {faqItems.map((item) => (
                <details key={item.question} className="faq-item">
                  <summary>{item.question}</summary>
                  <p>{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="cta-band">
          <div className="container">
            <h2 className="display">Teklif hazırlayalım</h2>
            <p>
              Marka, boy ve mevcut motor bilgisini paylaşın; size uygun dönüşüm
              önerisini iletelim.
            </p>
            <a className="btn-primary" href="#iletisim">
              İletişime geçin
            </a>
          </div>
        </section>

        <section className="section" id="iletisim">
          <div className="container contact-grid">
            <div>
              <span className="section-label">İletişim</span>
              <h2 className="display">Teklif ve randevu</h2>
              <p className="section-lead">
                Formu doldurun veya doğrudan telefon / e-posta ile ulaşın.
              </p>
              <ul className="contact-list">
                <li>
                  <strong>Telefon</strong>
                  <a href="tel:+905555269770">0555 526 97 70</a>
                </li>
                <li>
                  <strong>E-posta</strong>
                  <a href="mailto:info@elektrikliteknedonusum.com">
                    info@elektrikliteknedonusum.com
                  </a>
                </li>
                <li>
                  <strong>Hizmet alanı</strong>
                  Türkiye — liman ve marina randevusu ile
                </li>
                <li>
                  <strong>Atölye</strong>
                  Galata
                </li>
              </ul>
            </div>

            <form
              className="contact-form"
              action="mailto:sulymanyalcinkaya34@gmail.com"
              method="post"
              encType="text/plain"
            >
              <label>
                Ad Soyad
                <input
                  name="ad"
                  type="text"
                  required
                  placeholder="Adınız"
                  autoComplete="name"
                />
              </label>
              <label>
                Telefon
                <input
                  name="telefon"
                  type="tel"
                  required
                  placeholder="05xx xxx xx xx"
                  autoComplete="tel"
                />
              </label>
              <label>
                E-posta
                <input
                  name="email"
                  type="email"
                  placeholder="ornek@mail.com"
                  autoComplete="email"
                />
              </label>
              <label>
                Tekne tipi / boy
                <input
                  name="tekne"
                  type="text"
                  placeholder="Örn. 7m fiber tekne"
                />
              </label>
              <label>
                Mesajınız
                <textarea
                  name="mesaj"
                  placeholder="Kullanım amacı, mevcut motor vb."
                />
              </label>
              <button className="btn-primary" type="submit">
                Gönder
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <span className="footer-brand">ElektrikliTekneDönüşüm</span>
          <span>© {new Date().getFullYear()} elektrikliteknedonusum.com</span>
        </div>
      </footer>
    </>
  );
}
