import { useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import FilterBar, { DateFilter } from '@/components/FilterBar';
import PerformanceCard from '@/components/PerformanceCard';
import PerformanceModal from '@/components/PerformanceModal';
import Footer from '@/components/Footer';
import { performances, Performance, Genre } from '@/data/performances';

export default function Home() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | 'All'>('All');
  const [selectedDate, setSelectedDate] = useState<DateFilter>('all');
  const [selectedEvent, setSelectedEvent] = useState<Performance | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSuggestShow = () => {
    window.open('https://instagram.com/direct/t/jeonghye.choi', '_blank');
  };

  const getFilteredEvents = (): Performance[] => {
    let filtered = performances;

    if (selectedGenre !== 'All') {
      filtered = filtered.filter(event => event.genre === selectedGenre);
    }

    if (selectedDate !== 'all') {
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      let endDate = new Date(today);

      if (selectedDate === 'thisWeek') {
        const daysUntilSunday = 6 - today.getDay();
        endDate.setDate(today.getDate() + daysUntilSunday);
      } else if (selectedDate === 'thisMonth') {
        endDate = new Date(today.getFullYear(), today.getMonth() + 1, 0);
      }

      filtered = filtered.filter(event => {
        const eventStart = new Date(event.startDate);
        eventStart.setHours(0, 0, 0, 0);
        return eventStart <= endDate;
      });
    }

    return filtered.sort(
      (a, b) =>
        new Date(a.startDate).getTime() - new Date(b.startDate).getTime()
    );
  };

  const filteredEvents = getFilteredEvents();

  return (
    <div className="min-h-screen bg-white text-black">
      <Header />

      <main className="pt-0">
        <Hero onSuggestClick={handleSuggestShow} />

        <FilterBar
          selectedGenre={selectedGenre}
          selectedDate={selectedDate}
          onGenreChange={setSelectedGenre}
          onDateChange={setSelectedDate}
        />

        <section className="py-12 md:py-16 border-b border-black">
          <div className="container">
            {filteredEvents.length > 0 ? (
              <div className="grid grid-cols-3 border-r border-b border-black">
                {filteredEvents.map(event => (
                  <PerformanceCard
                    key={event.ticketUrl ?? event.title}
                    event={event}
                    onClick={() => {
                      setSelectedEvent(event);
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

        <Footer onSuggestClick={handleSuggestShow} />
      </main>

      <PerformanceModal
        event={selectedEvent}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
