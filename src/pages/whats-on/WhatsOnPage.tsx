import type { ReactNode } from 'react';
import PerformanceCard from '@/components/PerformanceCard';
import Footer from '@/components/Footer';
import FilterBar from '@/components/FilterBar';
import { useFilteredPerformances } from '@/pages/whats-on/useFilteredPerformances';
import EditorialPageLayout from '@/components/EditorialPageLayout';

type WhatsOnPageProps = {
  navigation: ReactNode;
};

export default function WhatsOnPage({ navigation }: WhatsOnPageProps) {
  const {
    filteredPerformances,
    selectedGenres,
    selectedDatePreset,
    onGenresChange,
    onDatePresetChange,
    onClearGenre,
    onClearDatePreset,
  } = useFilteredPerformances();

  return (
    <EditorialPageLayout title="WHAT IS ON" navigation={navigation}>
      <p role="status" className="mb-6 text-center text-sm text-muted">
        {selectedGenres.length || selectedDatePreset
          ? 'Filtered Performances'
          : 'All Performances'}{' '}
        ({filteredPerformances.length})
      </p>
      <FilterBar
        selectedGenres={selectedGenres}
        selectedDatePreset={selectedDatePreset}
        onGenresChange={onGenresChange}
        onDatePresetChange={onDatePresetChange}
        onClearGenre={onClearGenre}
        onClearDatePreset={onClearDatePreset}
      />
      <section className="mx-auto mt-10 w-full pb-10 md:mt-16 md:pb-16 lg:max-w-[52rem]">
        {filteredPerformances.length > 0 ? (
          <div className="grid grid-cols-1 gap-y-8 sm:grid-cols-2 sm:gap-x-4 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-10">
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
      </section>
      <Footer />
    </EditorialPageLayout>
  );
}
