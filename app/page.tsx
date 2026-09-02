'use client';

import { Hero } from '@/src/components/Hero';
import { HomepageBanners } from '@/src/components/HomepageBanners';
import { CategorySection } from '@/src/components/CategorySection';
import { BestsellersSection } from '@/src/components/BestsellersSection';
import { BrandStorySection } from '@/src/components/BrandStorySection';
import { WhyDadiSection } from '@/src/components/WhyDadiSection';
import { IndianMealExperience } from '@/src/components/IndianMealExperience';
import { CustomerReviews } from '@/src/components/CustomerReviews';
import { TrustStatsStrip } from '@/src/components/TrustStatsStrip';
import { SpecialOfferBanner } from '@/src/components/SpecialOfferBanner';
import { FaqSection } from '@/src/components/FaqSection';

export default function HomePage() {
  return (
    <>
      {/* <Hero /> */}
      <HomepageBanners />

      <CategorySection />
      {/* <BestsellersSection /> */}
      <BrandStorySection />
      <WhyDadiSection />
      <IndianMealExperience />
      <CustomerReviews />
      <TrustStatsStrip />
      <SpecialOfferBanner />
      <div id="faq-section">
        <FaqSection />
      </div>
    </>
  );
}
