import { useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import FilterBar from '@/components/FilterBar';
import PerformanceCard from '@/components/PerformanceCard';
import PerformanceModal from '@/components/PerformanceModal';
import Footer from '@/components/Footer';
import { useFilteredPerformances } from '@/hooks/useFilteredPerformances';
import { Performance } from '@/types/performance';

export default function Home() {
  const {
    filteredPerformances,
    selectedGenre,
    selectedDate,
    setSelectedGenre,
    setSelectedDate,
  } = useFilteredPerformances();
  const [selectedPerformance, setSelectedPerformance] =
    useState<Performance | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-black">
      <Header />
      <main className="pt-0">
        <Hero />
        <FilterBar
          selectedGenre={selectedGenre}
          selectedDate={selectedDate}
          onGenreChange={setSelectedGenre}
          onDateChange={setSelectedDate}
        />
        <section className="py-12 md:py-16 border-b border-black">
          <div className="container">
            {filteredPerformances.length > 0 ? (
              <div className="grid grid-cols-3 border-r border-b border-black">
                {filteredPerformances.map(performance => (
                  <PerformanceCard
                    key={performance.ticketUrl ?? performance.title}
                    performance={performance}
                    onClick={() => {
                      setSelectedPerformance(performance);
                      setIsModalOpen(true);
                    }}
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
      <PerformanceModal
        performance={selectedPerformance}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
