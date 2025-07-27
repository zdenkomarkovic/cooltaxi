import Link from "next/link";
import Breadcrumb from "../../../components/shared/breadcrumb/page";

export const metadata = {
  title: "Blog - Cool Taxi Niš | Korisne informacije o taxi prevozu",
  description: "Korisne informacije o taxi prevozu u Nišu, putnički saveti, informacije o aerodromima i turističkim destinacijama. Cool Taxi Niš blog.",
  keywords: "taxi blog niš, putnički saveti niš, taxi informacije, aerodrom niš taxi, turističke destinacije niš",
  openGraph: {
    title: "Blog - Cool Taxi Niš | Korisne informacije o taxi prevozu",
    description: "Korisne informacije o taxi prevozu u Nišu, putnički saveti, informacije o aerodromima i turističkim destinacijama.",
    url: 'https://www.taxinis.rs/blog',
    type: 'website',
  },
};

const blogPosts = [
  {
    id: 1,
    title: "Kako izabrati najbolji taxi u Nišu - Vodič za putnike",
    excerpt: "Saveti za izbor pouzdanog taxi prevoznika u Nišu. Šta treba da obratite pažnju pri naručivanju taxi vožnje.",
    slug: "kako-izabrati-najbolji-taxi-nis",
    date: "2025-01-15",
    readTime: "3 min",
    category: "Saveti"
  },
  {
    id: 2,
    title: "Taxi do Beogradskog aerodroma - Kompletni vodič",
    excerpt: "Kompletni vodič za taxi prevoz od Niša do Beogradskog aerodroma. Cene, vreme putovanja i korisni saveti.",
    slug: "taxi-beogradski-aerodrom",
    date: "2025-01-10",
    readTime: "5 min",
    category: "Aerodromi"
  },
  {
    id: 3,
    title: "Najbolje banje u Srbiji - Taxi prevoz iz Niša",
    excerpt: "Pregled najpopularnijih banja u Srbiji i taxi prevoz iz Niša. Vrnjačka Banja, Sokobanja, Ribarska Banja i više.",
    slug: "najbolje-banje-srbija-taxi",
    date: "2025-01-05",
    readTime: "4 min",
    category: "Destinacije"
  },
  {
    id: 4,
    title: "Ekološki taxi prevoz - Zašto je važan",
    excerpt: "Zašto je važno birati ekološki taxi prevoz. Prednosti hibridnih i električnih vozila za životnu sredinu.",
    slug: "ekoloski-taxi-prevoz",
    date: "2025-01-01",
    readTime: "3 min",
    category: "Ekologija"
  }
];

export default function BlogPage() {
  return (
    <div>
      <Breadcrumb />
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl lg:text-6xl font-bold text-center mb-8">
            Blog - <span className="text-cool-green">Cool Taxi Niš</span>
          </h1>
          
          <p className="text-lg text-gray-600 text-center mb-12">
            Korisne informacije o taxi prevozu, putnički saveti i sve što treba da znate o prevozu u Nišu i okolini.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-cool-green text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {post.category}
                    </span>
                    <span className="text-gray-500 text-sm">
                      {new Date(post.date).toLocaleDateString('sr-RS')} • {post.readTime}
                    </span>
                  </div>
                  
                  <h2 className="text-xl font-bold mb-3 text-gray-900">
                    <Link href={`/blog/${post.slug}`} className="hover:text-cool-green transition-colors">
                      {post.title}
                    </Link>
                  </h2>
                  
                  <p className="text-gray-600 mb-4">
                    {post.excerpt}
                  </p>
                  
                  <Link 
                    href={`/blog/${post.slug}`}
                    className="text-cool-green font-semibold hover:underline"
                  >
                    Pročitaj više →
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/"
              className="bg-cool-green text-white px-8 py-3 rounded-lg hover:bg-green-600 transition-colors font-semibold"
            >
              Nazad na početnu
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 