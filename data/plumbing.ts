import type { PlumbingConfig } from "@/types/plumbing";

/**
 * SINGLE SOURCE OF TRUTH for the entire site.
 * The client (or a developer) edits ONLY this file to:
 *  - Swap phone numbers, license keys, insurance values
 *  - Add or remove coverage areas and zip codes
 *  - Adjust baseline service pricing and response time targets
 *
 * No contact number, license number, or baseline price lives
 * anywhere in /app, /components, or /sections.
 */
export const plumbingConfig: PlumbingConfig = {
  brand: {
    legalName: "Apex Plumbing & Drain LLC",
    displayName: "Apex Plumbing & Drain",
    tagline: "Master plumbers. Background-checked. No mess left behind.",
    foundedYear: 2008,
    stateLicenseKey: "M-41892",
    stateLicenseLabel: "Master Plumber License",
    insuredValue: "$2,000,000",
    insuredCarrier: "Hartford Commercial Casualty",
    headquarters: {
      street: "418 Industrial Loop, Suite C",
      city: "Austin",
      state: "TX",
      zip: "78745"
    },
    hoursLine: "Dispatch Open 24 Hours · Office Mon–Fri 7a–6p"
  },
  emergency: {
    livePhoneDisplay: "(512) 555-0117",
    livePhoneHref: "tel:+00000000000",
    smsNumberDisplay: "Text 70717",
    smsNumberHref: "sms:+00000000000",
    dispatchEmail: "zerotheorem01@gmail.com",
    averageResponseMinutes: 45,
    crewsOnShift: 8,
    crewsAvailable: 3,
    dispatchAreaLabel: "Greater Austin Metro",
    status: "operational",
    statusNote: "Live dispatch active — 3 crews available in your area right now."
  },
  coverage: [
    {
      name: "Downtown Austin",
      type: "neighborhood",
      zips: [
        "78701",
        "78703"
      ],
      averageArrivalMinutes: 35
    },
    {
      name: "South Congress",
      type: "neighborhood",
      zips: [
        "78704"
      ],
      averageArrivalMinutes: 30
    },
    {
      name: "East Austin",
      type: "neighborhood",
      zips: [
        "78702",
        "78721"
      ],
      averageArrivalMinutes: 40
    },
    {
      name: "Round Rock",
      type: "city",
      zips: [
        "78664",
        "78665"
      ],
      averageArrivalMinutes: 55
    },
    {
      name: "Pflugerville",
      type: "city",
      zips: [
        "78660"
      ],
      averageArrivalMinutes: 50
    },
    {
      name: "Cedar Park",
      type: "city",
      zips: [
        "78613"
      ],
      averageArrivalMinutes: 60
    },
    {
      name: "Bee Cave",
      type: "city",
      zips: [
        "78738"
      ],
      averageArrivalMinutes: 55
    },
    {
      name: "Manor",
      type: "city",
      zips: [
        "78653"
      ],
      averageArrivalMinutes: 65
    }
  ],
  services: [
    {
      id: "clogged-drain",
      category: "Drain & Sewer",
      name: "Clogged Drain Clearing",
      description: "Power auger or hydro-jet clearing of a single fixture or mainline blockage. Includes camera verification when needed.",
      startingPrice: 149,
      endingPrice: 485,
      priceUnit: "per visit",
      averageDurationMinutes: 60,
      urgency: "priority",
      signs: [
        "Standing water in sink or tub",
        "Gurgling from drains",
        "Sewer smell in bathroom"
      ],
      warrantyMonths: 12,
      iconHint: "wrench"
    },
    {
      id: "leaking-pipe",
      category: "Leak Repair",
      name: "Leaking or Burst Pipe Repair",
      description: "Locate the leak, isolate the line, and repair or replace the failed section. Includes moisture check at the repair site.",
      startingPrice: 195,
      endingPrice: 690,
      priceUnit: "per repair",
      averageDurationMinutes: 90,
      urgency: "emergency",
      signs: [
        "Visible drip or spray",
        "Ceiling stain spreading",
        "Sudden drop in water pressure"
      ],
      warrantyMonths: 24,
      iconHint: "droplet"
    },
    {
      id: "water-heater",
      category: "Water Heaters",
      name: "Water Heater Fault & Replacement",
      description: "Diagnose tank, gas, or electric water heater failures. Same-day repair on most models; full replacement quotes upfront.",
      startingPrice: 189,
      endingPrice: 1850,
      priceUnit: "per job",
      averageDurationMinutes: 120,
      urgency: "priority",
      signs: [
        "No hot water",
        "Pilot light out",
        "Rumbling tank",
        "Water pooling under unit"
      ],
      warrantyMonths: 36,
      iconHint: "flame"
    },
    {
      id: "sewer-backup",
      category: "Sewer & Mainline",
      name: "Sewer Line Backup & Cleaning",
      description: "Mainline auger, hydro-jet, or sectional replacement. Includes a post-cleaning camera inspection on request.",
      startingPrice: 325,
      endingPrice: 1450,
      priceUnit: "per job",
      averageDurationMinutes: 150,
      urgency: "emergency",
      signs: [
        "Multiple fixtures backing up",
        "Waste in tub when washer runs",
        "Foul odor outside"
      ],
      warrantyMonths: 24,
      iconHint: "alert-triangle"
    },
    {
      id: "toilet-replace",
      category: "Fixture Install",
      name: "Toilet, Faucet & Fixture Install",
      description: "Customer-supplied or supplied-by-us installs. Wax ring, supply line, and haul-away included.",
      startingPrice: 220,
      endingPrice: 540,
      priceUnit: "per fixture",
      averageDurationMinutes: 90,
      urgency: "routine",
      signs: [
        "Constantly running toilet",
        "Wobbling base",
        "Cracked tank or bowl"
      ],
      warrantyMonths: 12,
      iconHint: "wrench"
    },
    {
      id: "gas-line",
      category: "Gas & Specialty",
      name: "Gas Line Repair & Appliance Hookup",
      description: "Licensed gas work for ranges, dryers, water heaters, and outdoor kitchens. Pressure-tested on completion.",
      startingPrice: 245,
      endingPrice: 980,
      priceUnit: "per job",
      averageDurationMinutes: 120,
      urgency: "priority",
      signs: [
        "Smell of gas near an appliance",
        "Pilot won't stay lit",
        "Yellow burner flame"
      ],
      warrantyMonths: 24,
      iconHint: "flame"
    },
    {
      id: "repipe-reroute",
      category: "Repipe & Re-route",
      name: "Whole-Home Repipe & Re-routing",
      description: "PEX or copper repipe with wall patching, permits pulled, and final inspection scheduled with your city.",
      startingPrice: 4800,
      endingPrice: 14250,
      priceUnit: "per project",
      averageDurationMinutes: 7200,
      urgency: "routine",
      signs: [
        "Recurring pinhole leaks",
        "Discolored water",
        "Galvanized pipes over 40 years old"
      ],
      warrantyMonths: 120,
      iconHint: "shield-check"
    },
    {
      id: "water-quality",
      category: "Water Quality",
      name: "Water Filtration & Softener Install",
      description: "Whole-home carbon, reverse osmosis, or softener systems sized to your actual usage. Includes 12-month tune-up.",
      startingPrice: 695,
      endingPrice: 2890,
      priceUnit: "per system",
      averageDurationMinutes: 240,
      urgency: "routine",
      signs: [
        "Hard water spots on glass",
        "Chlorine taste",
        "Dry skin after showers"
      ],
      warrantyMonths: 60,
      iconHint: "droplet"
    }
  ],
  trust: {
    certifiedTechs: 22,
    yearsInBusiness: 17,
    jobsCompleted: "38,400+",
    googleRating: 4.9,
    googleReviewCount: 2147,
    bbbAccredited: true,
    bbbGrade: "A+",
    awards: [
      {
        title: "Best of Austin — Plumbing",
        issuer: "Austin Chronicle",
        year: 2024
      },
      {
        title: "Top Rated Local Plumber",
        issuer: "TopRated Local",
        year: 2023
      },
      {
        title: "Torch Award for Ethics",
        issuer: "BBB Central Texas",
        year: 2022
      }
    ]
  },
  guarantees: [
    {
      id: "no-mess",
      title: "The No-Mess Pledge",
      description: "Boot covers on the moment we step inside. Drop cloths and corner guards laid before a single tool comes out. If we leave a mess, the service is on us — no debate.",
      metric: "100%",
      metricLabel: "Job-site cleanliness, audited"
    },
    {
      id: "upfront-pricing",
      title: "Upfront Flat Pricing",
      description: "Every job is quoted in writing before work starts. No hourly surprises, no surprise add-ons, no fuel surcharges at the door.",
      metric: "$0",
      metricLabel: "Hidden fees, ever"
    },
    {
      id: "background-checks",
      title: "Background-Checked Technicians",
      description: "Every tech on our payroll passes a national criminal background check, drug screening, and 5-year driving record review before their first service call.",
      metric: "22 / 22",
      metricLabel: "Techs currently certified"
    },
    {
      id: "warranty",
      title: "Written Warranty on Every Repair",
      description: "Repairs carry a minimum 12-month parts and labor warranty. Repipes carry 10 years. The certificate lives in your customer portal, not on a Post-it.",
      metric: "12 – 120",
      metricLabel: "Months of coverage, minimum"
    }
  ],
  reviews: [
    {
      id: "r1",
      author: "M. Hernandez",
      neighborhood: "South Congress",
      rating: 5,
      date: "2 days ago",
      body: "Slab leak discovered at 9pm on a Sunday. Apex had a real human on the phone in two rings and a tech at my door in 38 minutes. The repair was clean, the wall was patched, and the price matched the quote.",
      serviceTag: "Slab Leak Repair",
      highlight: "Tech on site in 38 min"
    },
    {
      id: "r2",
      author: "D. Patel",
      neighborhood: "Round Rock",
      rating: 5,
      date: "1 week ago",
      body: "Replaced both our water heater and the ancient pressure regulator. They sent Marcus's photo and a live ETA by text. He wore boot covers, used a mat, and wiped down the closet before he left.",
      serviceTag: "Water Heater Replacement",
      highlight: "Same-day install"
    },
    {
      id: "r3",
      author: "A. Brennan",
      neighborhood: "East Austin",
      rating: 5,
      date: "3 weeks ago",
      body: "Mainline backed up into the downstairs shower. They hydro-jetted it, ran a camera, and showed me the clean pipe on the iPad. Upfront price was the actual price.",
      serviceTag: "Sewer Mainline Cleaning",
      highlight: "Camera-verified clean"
    },
    {
      id: "r4",
      author: "R. Okafor",
      neighborhood: "Cedar Park",
      rating: 5,
      date: "1 month ago",
      body: "Booked a quote for a gas line to a new range. Inspector passed the work first time. The crew was punctual, polite, and treated my kitchen like it was theirs.",
      serviceTag: "Gas Line Run",
      highlight: "Passed inspection first try"
    },
    {
      id: "r5",
      author: "L. Tanaka",
      neighborhood: "Downtown Austin",
      rating: 5,
      date: "1 month ago",
      body: "I called three companies. Apex was the only one who answered with a real dispatcher. They walked me through shutting off the angle stop before the tech arrived. Lifesavers.",
      serviceTag: "Emergency Leak Isolation",
      highlight: "Live dispatcher, no phone tree"
    },
    {
      id: "r6",
      author: "K. Whitfield",
      neighborhood: "Pflugerville",
      rating: 5,
      date: "2 months ago",
      body: "Whole-home PEX repipe on a 1972 house. Two days start to finish, walls patched, and a ten-year warranty in writing. Worth every dollar.",
      serviceTag: "Whole-Home Repipe",
      highlight: "2-day repipe, 10-yr warranty"
    }
  ],
  faqs: [
    {
      id: "dispatch-fee",
      category: "Pricing",
      question: "Is there a dispatch or trip fee?",
      answer: "Yes — a flat $49 diagnostic fee covers the trip and a written assessment. The fee is waived in full when you authorize the repair on the same visit and the repair exceeds $200."
    },
    {
      id: "emergency-upcharge",
      category: "Pricing",
      question: "Do you charge extra for nights, weekends, or holidays?",
      answer: "We add a transparent $79 emergency response premium for calls between 9pm and 7am and on three named holidays. There are no after-hours multipliers — labor and parts are quoted at the same rate, 24/7."
    },
    {
      id: "financing",
      category: "Pricing",
      question: "Do you offer financing on larger jobs?",
      answer: "Repipes, water heater replacements, and sewer line work over $1,000 are eligible for 6, 12, or 24-month same-as-cash financing through Synchrony. Approval takes about 90 seconds in your phone, with a soft credit pull."
    },
    {
      id: "before-arrival",
      category: "Service",
      question: "What should I do before the technician arrives?",
      answer: "If you can, locate the main water shutoff (often where the meter enters the house) and turn it clockwise until it stops. Move pets to a closed room, and clear a path to the problem area. Our dispatcher will text you a photo of your tech and a live ETA — no app required."
    },
    {
      id: "warranty",
      category: "Service",
      question: "What does the warranty actually cover?",
      answer: "All parts and labor on the work performed, for the warranty period listed on your invoice. Manufacturer defects on supplied equipment are covered by the manufacturer and coordinated by us at no charge."
    },
    {
      id: "license-insurance",
      category: "Trust",
      question: "Can I see your license and insurance before booking?",
      answer: "Absolutely. Our master plumber license number is shown on every estimate and on this site, and we carry $2M in general liability plus workers compensation. Certificates are emailed on request before we arrive."
    }
  ]
};
