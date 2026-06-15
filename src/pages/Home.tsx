import Header from '@/components/Header';
import Hero from '@/components/Hero';
import FilterBar from '@/components/FilterBar';
import PerformanceCard from '@/components/PerformanceCard';
import Footer from '@/components/Footer';
import { useFilteredPerformances } from '@/hooks/useFilteredPerformances';

export default function Home() {
  const {
    filteredPerformances,
    selectedGenre,
    selectedDate,
    setSelectedGenre,
    setSelectedDate,
  } = useFilteredPerformances();

  return (
    <div className="min-h-screen bg-white text-black">
      <Header />
      <main className="pt-8">
        <Hero />
        <FilterBar
          selectedGenre={selectedGenre}
          selectedDate={selectedDate}
          onGenreChange={setSelectedGenre}
          onDateChange={setSelectedDate}
        />
        <section className="pb-10 md:pb-16">
          <div className="container">
            {filteredPerformances.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-black">
                {filteredPerformances.map(performance => (
                  <PerformanceCard
                    key={performance.ticketUrl ?? performance.title}
                    performance={performance}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-lg text-gray-600">
                  No performances found for the selected filters.
                </p>
              </div>
            )}
          </div>
        </section>
        <Footer />
      </main>
    </div>
  );
}
