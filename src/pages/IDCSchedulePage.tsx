import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarDays, MapPin, Clock, Award } from "lucide-react";

const scheduleItems = [
  {
    title: "IDC Lembongan: PADI Instructor + EFRI",
    dates: "03/08/2026 - 23/08/2026",
    location: "Nusa Lembongan, Indonesia",
    price: "35m IDR",
    highlight: null,
  },
  {
    title: "IDC Lembongan: PADI Instructor + EFRI + MSDT Prep",
    dates: "03/08/2026 - 29/09/2026",
    location: "Nusa Lembongan, Indonesia",
    price: "42m IDR",
    highlight: {
      original: "44,500,000 IDR",
      savings: "2,500,000 IDR",
    },
  },
  {
    title: "IDC Lembongan: PADI Instructor + EFRI",
    dates: "24/09/2026 - 14/10/2026",
    location: "Nusa Lembongan, Indonesia",
    price: "35m IDR",
    highlight: null,
  },
  {
    title: "IDC Lembongan: PADI Instructor + EFRI + MSDT Prep",
    dates: "24/09/2026 - 20/10/2026",
    location: "Nusa Lembongan, Indonesia",
    price: "42m IDR",
    highlight: {
      original: "44,500,000 IDR",
      savings: "2,500,000 IDR",
    },
  },
  {
    title: "IDC Lembongan: PADI Instructor + EFRI",
    dates: "26/11/2026 - 16/12/2026",
    location: "Nusa Lembongan, Indonesia",
    price: "35m IDR",
    highlight: null,
  },
  {
    title: "IDC Lembongan: PADI Instructor + EFRI + MSDT Prep",
    dates: "26/11/2026 - 22/12/2026",
    location: "Nusa Lembongan, Indonesia",
    price: "42m IDR",
    highlight: {
      original: "44,500,000 IDR",
      savings: "2,500,000 IDR",
    },
  },
];

const IDCSchedulePage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <section className="relative overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('https://dive-careers.com/images/ports/instructor/idc-gili-air.jpg')" }}
          />
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative container mx-auto px-4 py-28 text-center text-white">
            <div className="max-w-3xl mx-auto">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm uppercase tracking-[0.3em] text-white/90">
                <CalendarDays className="w-4 h-4" /> IDC Schedule
              </span>
              <h1 className="mt-8 text-5xl md:text-6xl font-heading font-bold tracking-tight">
                Upcoming PADI IDC Dates in Bali
              </h1>
              <p className="mt-6 text-lg md:text-xl text-white/80">
                Browse our confirmed course start dates for Nusa Lembongan. These programs include Instructor Development, Emergency First Response Instructor, and MSDT preparation options.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button size="lg" className="bg-primary text-white hover:bg-primary/90">
                  Contact Bas to Reserve
                </Button>
                <Button size="lg" variant="outline" className="border-white/40 text-white hover:bg-white/10">
                  Learn About IDC Training
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-background py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <p className="text-primary uppercase tracking-[0.2em] text-sm font-medium mb-4">
                Nusa Lembongan Dates
              </p>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground">
                IDC Schedule 2026
              </h2>
              <p className="mt-4 text-muted-foreground text-lg">
                Choose the program that suits your timeline and career goals, then reach out to confirm availability and booking details.
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              {scheduleItems.map((item) => (
                <Card key={item.dates} className="border border-border/80 shadow-card hover:shadow-ocean transition-all duration-300">
                  <CardHeader className="space-y-4 p-6">
                    <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                      <span className="inline-flex items-center gap-2 rounded-full bg-primary/5 px-3 py-1 text-primary">
                        <Clock className="w-4 h-4" /> {item.dates}
                      </span>
                      <span className="inline-flex items-center gap-2 rounded-full bg-secondary/5 px-3 py-1 text-secondary">
                        <MapPin className="w-4 h-4" /> {item.location}
                      </span>
                    </div>
                    <CardTitle className="text-2xl font-semibold text-foreground">
                      {item.title}
                    </CardTitle>
                    <div className="flex flex-wrap gap-2 text-sm text-foreground/80">
                      <span className="rounded-full bg-slate-100 px-3 py-1 text-slate-700">Instructor + EFRI</span>
                      {item.highlight && <span className="rounded-full bg-slate-100 px-3 py-1 text-slate-700">MSDT Prep</span>}
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6 p-6">
                    <div className="rounded-2xl bg-primary/5 p-4">
                      <p className="text-lg font-semibold text-foreground">Price</p>
                      <p className="mt-1 text-2xl font-bold text-primary">{item.price}</p>
                      {item.highlight ? (
                        <p className="mt-2 text-sm text-muted-foreground">
                          usually <span className="line-through">{item.highlight.original}</span> — save <span className="font-semibold text-foreground">{item.highlight.savings}</span>
                        </p>
                      ) : null}
                    </div>

                    <div className="space-y-3 text-sm text-muted-foreground">
                      <p>Includes instructor development training, EFR instructor certification, pool sessions, open water training, teaching practice, and career guidance.</p>
                      <p>All courses are delivered from Nusa Lembongan with easy Bali access, comfortable classrooms, and professional support from our IDC team.</p>
                      <p className="text-foreground font-medium">Contact us now to secure your spot.</p>
                    </div>
                    <Button className="w-full bg-primary text-white hover:bg-primary/90">Book This Course</Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-16 grid gap-6 lg:grid-cols-3">
              <div className="rounded-3xl border border-border/70 bg-card p-6 shadow-card">
                <div className="inline-flex items-center justify-center rounded-full bg-primary/10 text-primary w-12 h-12 mb-4">
                  <Award className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">IDC + EFRI</h3>
                <p className="text-sm text-muted-foreground">Get your PADI Instructor certification plus Emergency First Response Instructor rating in one streamlined program.</p>
              </div>
              <div className="rounded-3xl border border-border/70 bg-card p-6 shadow-card">
                <div className="inline-flex items-center justify-center rounded-full bg-primary/10 text-primary w-12 h-12 mb-4">
                  <Award className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">MSDT Prep</h3>
                <p className="text-sm text-muted-foreground">Extend your instructor qualifications with Master Scuba Diver Trainer preparation to support specialty instructor ratings.</p>
              </div>
              <div className="rounded-3xl border border-border/70 bg-card p-6 shadow-card">
                <div className="inline-flex items-center justify-center rounded-full bg-primary/10 text-primary w-12 h-12 mb-4">
                  <Award className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Bali Access</h3>
                <p className="text-sm text-muted-foreground">Easy boat transfers from Bali, modern island facilities, and a vibrant dive community make Nusa Lembongan an ideal IDC location.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default IDCSchedulePage;
