/** @type {import('next').NextConfig} */

// next.config.mjs
const nextConfig = {
  // ...other configurations

  images: {
    domains: [
      'www.modularkitcheninnoida.com',
      'api.designindianwardrobe.com',
      'images.unsplash.com',
      'www.imagekit.io',
      'ik.imagekit.io',
      'homes.devotionalindia.com',
      'cdn-icons-png.flaticon.com',
      'www.freepik.com',
      'img.freepik.com',
      'hlwebsite.s3.ap-south-1.amazonaws.com',
      'www.designindiankitchen.com',
    ],
  },
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
  async rewrites() {
    return [
      // Modular design ideas
      {
        source: '/modular-interior-design-ideas',
        destination: '/design-ideas',
      },
      {
        source: '/get-free-estimate-by-top-interior-brand-in-delhi-gurgaon-noida-india',
        destination: '/calculator',
      },
      {
        source: '/collaborate-with-architects-interior-designers',
        destination: '/collaborate-us',
      },
      {
        source: '/book-a-interior-design-visit',
        destination: '/contact',
      },
      {
        source: '/refer-and-get-rewards-interior-designers',
        destination: '/refer-and-earn',
      },
      {
        source: '/modular-kitchen-designs',
        destination: '/modular-interiors/kitchen-designs',
      },
      {
        source: '/wardrobe-designs',
        destination: '/modular-interiors/wardrobe',
      },
      {
        source: '/vanity-designs',
        destination: '/modular-interiors/vanities',
      },
      {
        source: '/dressers-designs',
        destination: '/modular-interiors/dressers',
      },
      {
        source: '/homes-by-design-indian-homes',
        destination: '/modular-interiors/our-homes',
      },
      {
        source: '/tv-unit-designs',
        destination: '/modular-interiors/tv-unit-designs',
      },
      {
        source: '/crockery-unit-designs',
        destination: '/modular-interiors/crockery-units',
      },
      {
        source: '/glass-partition-designs',
        destination: '/home-interior-services-india/glass-partition-designs',
      },
      {
        source: '/shoerack-designs',
        destination: '/',
      },
      {
        source: '/mandir-designs',
        destination: '/modular-interiors/mandir',
      },
      {
        source: '/chest-of-drawer-designs',
        destination: '/modular-interiors/chest-of-drawers',
      },
      {
        source: '/bar-unit-designs',
        destination: '/modular-interiors/bar-units',
      },
      {
        source: '/side-table-designs',
        destination: '/modular-interiors/side-tables',
      },
      {
        source: '/foyer-area-designs',
        destination: '/modular-interiors/foyer-cabinets',
      },
      {
        source: '/foldable-beds-designs',
        destination: '/modular-interiors/foldable-beds',
      },
      {
        source: '/home-office-designs',
        destination: '/',
      },
      {
        source: '/architectural-designs-services-india',
        destination: '/home-interior-designs',
      },
      {
        source: '/1bhk-apartment-interior-designs',
        destination: '/home-interior-designs/1bhk-residence-interior-designs',
      },
      {
        source: '/2bhk-apartment-interior-designs',
        destination: '/home-interior-designs/2bhk-residence-interior-designs',
      },
      {
        source: '/3bhk-apartment-interior-designs',
        destination: '/home-interior-designs/3bhk-residence-interior-designs',
      },
      {
        source: '/4bhk-apartment-interior-designs',
        destination: '/home-interior-designs/4bhk-residence-interior-designs',
      },
      {
        source: '/villa-interior-designs',
        destination: '/home-interior-designs/villa',
      },
      {
        source: '/farmhouse-interior-designs',
        destination: '/home-interior-designs/farmhouse-interior-designs',
      },
      {
        source: '/penthouse-interior-designs',
        destination: '/home-interior-designs/penthouse-interior-designs',
      },
      {
        source: '/studio-apartment-interior-designs',
        destination: '/home-interior-designs/studio-apartment-interior-designs',
      },
      {
        source: '/bungalow-interior-designs',
        destination: '/home-interior-designs/bunglow-interior-designs',
      },
      {
        source: '/duplex-interior-designs',
        destination: '/home-interior-designs/duplex-residence-interior-designs',
      },
      {
        source: '/cottage-interior-designs',
        destination: '/home-interior-designs/cottage-interior-designs',
      },
      {
        source: '/complete-end-to-end-interiors',
        destination: '/',
      },
      {
        source: '/wooden-polishing-designs',
        destination: '/home-interior-services-india/wooden-polishing-designs',
      },
      {
        source: '/wooden-flooring-designs-designs',
        destination: '/home-interior-services-india/wooden-flooring-designs',
      },
      {
        source: '/vertical-garden-designs',
        destination: '/home-interior-services-india/vertical-garden-designs',
      },
      {
        source: '/wooden-ceiling-designs-ideas-inspiration',
        destination:
          '/home-interior-services-india/wooden-ceiling-designs-ideas-inspiration',
      },
      {
        source: '/upvc-window-designs',
        destination: '/home-interior-services-india/upvc-window-designs',
      },
      {
        source: '/tiling-design-ideas',
        destination: '/home-interior-services-india/tiling-design-ideas',
      },
      {
        source: '/sofa-designs-ideas',
        destination: '/home-interior-services-india/sofa-designs-ideas',
      },
      {
        source: '/kitchen-lightening-inspiration-ideas-india-designs',
        destination:
          '/home-interior-services-india/kitchen-lightening-inspiration-ideas-india',
      },
      {
        source: '/plumbing-works-interiors',
        destination:
          '/home-interior-services-india/home-plumbing-services-india',
      },
      {
        source: '/glass-partition-designs',
        destination: '/home-interior-services-india/glass-partition-designs',
      },
      {
        source: '/ceiling-designs',
        destination:
          '/home-interior-services-india/ceiling-design-ideas-inspiration-india',
      },
      {
        source: '/wall-panelling-designs',
        destination: '/home-interior-services-india/wall-panelling-designs',
      },
      {
        source: '/exterior-cladding-design-ideas-designs',
        destination:
          '/home-interior-services-india/exterior-cladding-design-ideas',
      },
      {
        source: '/wood-door-designs',
        destination:
          '/home-interior-services-india/door-design-dealers-manufacturers-india',
      },
      {
        source: '/home-electric-works-services-interiors',
        destination:
          '/home-interior-services-india/home-electric-works-services',
      },
      {
        source: '/bed-designs-dealers-manufacturers-india-designs',
        destination:
          '/home-interior-services-india/bed-designs-dealers-manufacturers-india',
      },
      {
        source: '/paint-works-interiors',
        destination:
          '/home-interior-services-india/home-painting-services-delhi-ncr',
      },
      {
        source: '/complete-end-to-end-interior-works',
        destination:
          '/home-interior-services-india/end-to-end-interior-services-delhi-ncr-india',
      },
      {
        source: '/commercial-interior-works-interiors',
        destination:
          '/home-interior-services-india/commercial-interiors-services-delhi-ncr-india',
      },
      {
        source: '/architectural-consultancy',
        destination:
          '/architectural-designs-services-india/architectural-consultancy',
      },
      {
        source: '/top-architects-in-india',
        destination:
          '/architectural-designs-services-india/end-to-end-architectural-services',
      },
      {
        source: '/architectural-brand-in-india',
        destination:
          '/architectural-designs-services-india/architectural-designing-and-planning',
      },
      {
        source: '/commercial-architectural-delhi-ncr',
        destination:
          '/architectural-designs-services-india/commercial-architectural-services',
      },
      {
        source: '/home-renovation-services',
        destination: '/home-renovation-service',
      },
      {
        source: '/interior-renovation-services',
        destination: '/home-renovation-service/interior-design',
      },
      {
        source: '/architectural-renovation-services',
        destination: '/home-renovation-service/architectural-services',
      },
      {
        source: '/electrical-renovation-services',
        destination: '/home-renovation-service/electrical-renovation',
      },
      {
        source: '/plumbing-renovation-services',
        destination: '/home-renovation-service/plumbing-renovation',
      },
    ];
  },
};

export default nextConfig;
