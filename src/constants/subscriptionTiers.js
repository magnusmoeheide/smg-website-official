export const tiers = [
    {
        slug: 'teacher',
        id: 'teacher_plan',
        href: '#',
        // Discounted display price (VAT included for teacher)
        price: { yearly: 'NOK 199' },
        // Original list price for discount presentation
        originalPrice: { yearly: 'NOK 299' },
        lookupKey: { yearly: 'teacher_plan' },
        mostPopular: true,
    },
    {
        slug: 'schoolS',
        id: 'school_plan_s',
        href: '#',
        // Display price (excl. VAT) with discount applied
        price: { yearly: 'NOK 999' },
        originalPrice: { yearly: 'NOK 1499' },
        lookupKey: { yearly: 'school_plan_s' },
        mostPopular: false,
    },
    {
        slug: 'schoolM',
        id: 'school_plan_m',
        href: '#',
        price: { yearly: 'NOK 1499' },
        originalPrice: { yearly: 'NOK 1999' },
        lookupKey: { yearly: 'school_plan_m' },
        mostPopular: false,
    },
    {
        slug: 'schoolL',
        id: 'school_plan_l',
        href: '#',
        price: { yearly: 'NOK 1999' },
        originalPrice: { yearly: 'NOK 2499' },
        lookupKey: { yearly: 'school_plan_l' },
        mostPopular: false,
    },
]
