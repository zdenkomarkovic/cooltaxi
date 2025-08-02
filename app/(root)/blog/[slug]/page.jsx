import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const blogPosts = [
  {
    slug: "kako-izabrati-najbolji-taxi-nis",
    title: "Kako izabrati najbolji taxi u Nišu - Vodič za putnike",
    excerpt: "Saveti za izbor pouzdanog taxi prevoznika u Nišu. Šta treba da obratite pažnju pri naručivanju taxi vožnje.",
    content: `
      <p>Kada vam je potreban <strong>taxi u Nišu</strong>, važno je da znate kako da izaberete najbolju opciju. <strong>Cool Taxi Niš</strong> je <strong>prvi taxi</strong> koji stiže na poziv i garantuje kvalitetnu uslugu.</p>
      
      <h2>Šta treba da obratite pažnju pri izboru taxi prevoznika?</h2>
      
      <h3>1. Licenca i registracija</h3>
      <p>Uvek proverite da li taxi prevoznik ima validnu licencu. <strong>Cool Taxi Niš</strong> je potpuno legalno registrovan i svi naši vozači imaju potrebne dozvole.</p>
      
      <h3>2. Cene i transparentnost</h3>
      <p>Transparentne cene su ključne. <strong>Cool Taxi Niš</strong> ima jasan cenovnik bez skrivenih troškova.</p>
      
      <h3>3. Vozila i komfor</h3>
      <p>Naša flota se sastoji od hibridnih i električnih vozila novije proizvodnje. <strong>Cool Taxi Niš</strong> garantuje udobnu i sigurnu vožnju.</p>
      
      <h3>4. Dostupnost 24/7</h3>
      <p>Bez obzira na doba dana, <strong>Cool Taxi Niš</strong> je uvek dostupan. Pozovite nas na 19711 ili 065/97 197 11.</p>
      
      <h2>Zašto izabrati Cool Taxi Niš?</h2>
      <ul>
        <li><strong>Prvi taxi</strong> koji stiže na poziv</li>
        <li>Licencirani i iskusni vozači</li>
        <li>Hibridna i električna vozila</li>
        <li>Transparentne <strong>taxi cene</strong></li>
        <li>Dostupnost 24/7</li>
        <li>Besplatan prtljag</li>
      </ul>
      
      <p>Kada vam je potreban <strong>taksi Niš</strong>, <strong>Cool Taxi Niš</strong> je vaš pouzdan partner. Naša misija je da pružimo najbolji <strong>taxi prevoz u Nišu</strong> uz vrhunsku uslugu i sigurnost.</p>
    `,
    date: "2025-01-15",
    readTime: "3 min",
    category: "Saveti",
    image: "/cool_logo.png"
  },
  {
    slug: "taxi-beogradski-aerodrom",
    title: "Taxi do Beogradskog aerodroma - Kompletni vodič",
    excerpt: "Kompletni vodič za taxi prevoz od Niša do Beogradskog aerodroma. Cene, vreme putovanja i korisni saveti.",
    content: `
      <p>Planirate putovanje i treba vam <strong>taxi do Beogradskog aerodroma</strong>? <strong>Cool Taxi Niš</strong> nudi pouzdan i udoban prevoz do svih aerodroma u regionu.</p>
      
      <h2>Taxi prevoz od Niša do Beogradskog aerodroma</h2>
      
      <h3>Cena vožnje</h3>
      <p><strong>Cool Taxi Niš</strong> nudi konkurentnu cenu za prevoz od Niša do Beogradskog aerodroma. Ova cena uključuje sve troškove bez dodatnih naplata.</p>
      
      <h3>Vreme putovanja</h3>
      <p>Putovanje od Niša do Beogradskog aerodroma traje približno 2-2.5 sata, zavisno od saobraćajnih uslova. Naši iskusni vozači poznaju najbolje rute.</p>
      
      <h3>Rezervacija unapred</h3>
      <p>Za <strong>taxi do aerodroma</strong> preporučujemo rezervaciju unapred, posebno za rane jutarnje letove. <strong>Cool Taxi Niš</strong> garantuje tačnost i pouzdanost.</p>
      
      <h2>Prednosti Cool Taxi Niš za aerodromski prevoz</h2>
      <ul>
        <li>Hibridna vozila za udobnu vožnju</li>
        <li>Besplatan prtljag</li>
        <li>GPS praćenje putovanja</li>
        <li>Profesionalni vozači</li>
        <li>Fiksna cena bez skrivenih troškova</li>
      </ul>
      
      <h3>Kontakt za rezervaciju</h3>
      <p>Pozovite <strong>Cool Taxi Niš</strong> na:</p>
      <ul>
        <li>19711</li>
        <li>065/97 197 11</li>
        <li>069/197 11 11</li>
        <li>060/32 197 11</li>
      </ul>
      
      <p><strong>Cool Taxi Niš</strong> je vaš pouzdan partner za <strong>taxi prevoz do aerodroma</strong>. Naša misija je da vaše putovanje bude udobno, sigurno i bez stresa.</p>
    `,
    date: "2025-01-10",
    readTime: "5 min",
    category: "Aerodromi",
    image: "/cool_logo.png"
  },
  {
    slug: "najbolje-banje-srbija-taxi",
    title: "Najbolje banje u Srbiji - Taxi prevoz iz Niša",
    excerpt: "Pregled najpopularnijih banja u Srbiji i taxi prevoz iz Niša. Vrnjačka Banja, Sokobanja, Ribarska Banja i više.",
    content: `
      <p>Tražite <strong>taxi do banja</strong> iz Niša? <strong>Cool Taxi Niš</strong> nudi pouzdan prevoz do svih banja u Srbiji. Naša hibridna vozila će vas odvesti udobno i ekološki odgovorno.</p>
      
      <h2>Najpopularnije banje u Srbiji - Taxi prevoz iz Niša</h2>
      
      <h3>Vrnjačka Banja</h3>
      <p><strong>Taxi do Vrnjačke Banje</strong> iz Niša. Vrnjačka Banja je najstarija i najpoznatija banja u Srbiji, idealna za oporavak i relaksaciju.</p>
      
      <h3>Sokobanja</h3>
      <p><strong>Taxi do Sokobanje</strong> iz Niša. Sokobanja je poznata po lekovitim izvorima i prelepom okruženju.</p>
      
      <h3>Ribarska Banja</h3>
      <p><strong>Taxi do Ribarske Banje</strong> iz Niša. Ova banja je idealna za porodične odmore i lečenje.</p>
      
      <h3>Prolom Banja</h3>
      <p><strong>Taxi do Prolom Banje</strong> iz Niša. Prolom Banja je poznata po lekovitim vodama i čistom vazduhu.</p>
      
      <h2>Prednosti taxi prevoznika do banja</h2>
      <ul>
        <li>Direktan prevoz od kuće do banje</li>
        <li>Udobna hibridna vozila</li>
        <li>Besplatan prtljag</li>
        <li>Fiksne cene bez skrivenih troškova</li>
        <li>Profesionalni vozači</li>
      </ul>
      
      <h3>Rezervacija taxi prevoznika do banja</h3>
      <p>Za <strong>taxi prevoz do banja</strong> preporučujemo rezervaciju unapred. <strong>Cool Taxi Niš</strong> garantuje tačnost i pouzdanost.</p>
      
      <p>Kontaktirajte <strong>Cool Taxi Niš</strong> za <strong>taxi do banja</strong>:</p>
      <ul>
        <li>19711</li>
        <li>065/97 197 11</li>
        <li>069/197 11 11</li>
      </ul>
      
      <p><strong>Cool Taxi Niš</strong> je vaš pouzdan partner za <strong>taxi prevoz do banja</strong> u Srbiji. Naša misija je da vaše putovanje bude udobno i prijatno.</p>
    `,
    date: "2025-01-05",
    readTime: "4 min",
    category: "Destinacije",
    image: "/cool_logo.png"
  },
  {
    slug: "ekoloski-taxi-prevoz",
    title: "Ekološki taxi prevoz - Zašto je važan",
    excerpt: "Zašto je važno birati ekološki taxi prevoz. Prednosti hibridnih i električnih vozila za životnu sredinu.",
    content: `
      <p>U današnje vreme, <strong>ekološki taxi prevoz</strong> postaje sve važniji. <strong>Cool Taxi Niš</strong> je pionir u uvođenju hibridnih i električnih vozila u Nišu.</p>
      
      <h2>Zašto je ekološki taxi prevoz važan?</h2>
      
      <h3>Zaštita životne sredine</h3>
      <p>Hibridna i električna vozila smanjuju emisiju štetnih gasova. <strong>Cool Taxi Niš</strong> aktivno doprinosi čistijem vazduhu u Nišu.</p>
      
      <h3>Ušteda energije</h3>
      <p>Naša hibridna vozila troše manje goriva, što znači manju potrošnju resursa i niže troškove.</p>
      
      <h3>Tišina i komfor</h3>
      <p>Električna vozila su tiša od konvencionalnih, što omogućava prijatniju vožnju kroz grad.</p>
      
      <h2>Prednosti hibridnih vozila Cool Taxi Niš</h2>
      <ul>
        <li>Smanjena emisija CO2</li>
        <li>Niži troškovi održavanja</li>
        <li>Tiša vožnja</li>
        <li>Bolja efikasnost goriva</li>
        <li>Moderan dizajn</li>
      </ul>
      
      <h3>Naša posvećenost ekologiji</h3>
      <p><strong>Cool Taxi Niš</strong> je prva taxi firma u Nišu koja je uvela hibridna vozila. Naša misija je da budemo ekološki odgovorni i da doprinosimo boljem kvalitetu života.</p>
      
      <h2>Kako možete doprineti?</h2>
      <p>Biranjem <strong>Cool Taxi Niš</strong> za vaše vožnje, aktivno doprinosite zaštiti životne sredine. Naša hibridna vozila su dostupna 24/7.</p>
      
      <h3>Kontakt za ekološki taxi prevoz</h3>
      <p>Pozovite <strong>Cool Taxi Niš</strong> za <strong>ekološki taxi prevoz</strong>:</p>
      <ul>
        <li>19711</li>
        <li>065/97 197 11</li>
        <li>069/197 11 11</li>
      </ul>
      
      <p><strong>Cool Taxi Niš</strong> - vaš partner za <strong>ekološki taxi prevoz</strong> u Nišu. Zajedno čuvamo našu planetu!</p>
    `,
    date: "2025-01-01",
    readTime: "3 min",
    category: "Ekologija",
    image: "/cool_logo.png"
  }
];

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    return {
      title: "Blog post nije pronađen | Cool Taxi Niš",
    };
  }

  return {
    title: `${post.title} | Cool Taxi Niš Blog`,
    description: post.excerpt,
    keywords: `cool taxi niš, taxi niš, taksi niš, prvi taxi, prvi taksi, taxi prevoz niš, taxi cene niš, taxi aerodrom niš, taxi banje niš, ekološki taxi niš, blog taxi niš, putnički saveti niš`,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://www.taxinis.rs/blog/${post.slug}`,
      type: 'article',
      publishedTime: post.date,
      authors: ['Cool Taxi Niš'],
      images: [
        {
          url: `https://www.taxinis.rs${post.image}`,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
  };
}

export default function BlogPostPage({ params }) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3);

  return (
    <div className="container mx-auto px-4 py-24">
      <div className="max-w-4xl mx-auto">
        <nav className="mb-8">
          <Link href="/blog" className="text-cool-green hover:underline">
            ← Nazad na blog
          </Link>
        </nav>

        <article>
          <header className="mb-8">
            <div className="mb-4">
              <span className="bg-cool-green text-white px-3 py-1 rounded-full text-sm font-semibold">
                {post.category}
              </span>
              <span className="text-gray-500 text-sm ml-4">
                {new Date(post.date).toLocaleDateString('sr-RS')} • {post.readTime}
              </span>
            </div>
            
            <h1 className="text-3xl lg:text-5xl font-bold mb-4 text-gray-900">
              {post.title}
            </h1>
            
            <p className="text-xl text-gray-600 mb-6">
              {post.excerpt}
            </p>
          </header>

          <div className="prose prose-lg max-w-none mb-12">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>

          <div className="border-t pt-8">
            <h3 className="text-2xl font-bold mb-6">Srodni članci</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.slug}
                  href={`/blog/${relatedPost.slug}`}
                  className="block bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <div className="p-6">
                    <span className="bg-cool-green text-white px-2 py-1 rounded text-xs font-semibold">
                      {relatedPost.category}
                    </span>
                    <h4 className="text-lg font-semibold mt-2 mb-2 text-gray-900">
                      {relatedPost.title}
                    </h4>
                    <p className="text-gray-600 text-sm mb-3">
                      {relatedPost.excerpt}
                    </p>
                    <span className="text-cool-green text-sm font-semibold">
                      Pročitaj više →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </article>
      </div>
    </div>
  );
} 