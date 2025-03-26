import Link from "next/link";

export const FEATURED_PROJECTS = [
  {
    title: "lodha world towers",
    location: "mumbai",
    area: "worli",
    type: "residential",
    image: "/assets/images/allproject/webp/lodha-world-tower.webp",
    details: {
      image: "/assets/images/allproject/webp/details-hero.webp",
      about: {
        propertyInfo: {
          propertyLogo: "/assets/images/allproject/details/png/lodha-logo.png",
          title:
            "A sculptural statement so powerful, it has transformed Mumbai's skyline forever.",
          details: [
            {
              title:
                "A private world of unimaginable luxury, spanning 17 landscaped acres",
              description:
                "A magnificent 17-acre estate ensconced in the Mumbai Mile, the glittering stretch that comprises some of Mumbai’s finest residences, business spaces and luxury hotels, Lodha World Towers embodies global standards in luxury. The grand landscaped entrance courtyard extends over almost 100,000 sq. ft.",
              image: "/assets/images/allproject/details/webp/acres.webp",
            },
            {
              title:
                "  A private world of unimaginable luxury, spanning 17 landscaped acres",
              description:
                "Armani/ Casa, one of the world's best-known names in interior design; Pei Cobb Freed, world-renowned architects; LERA, globally-acclaimed structural engineers; Ken Smith, internationally awarded landscape designer. Lodha World Towers represents a historic meeting of some of the world’s greatest legends.",
              image: "/assets/images/allproject/details/webp/landmark.webp",
            },
          ],
        },
        lifeStyle: {
          title: "Life at Lodha World Towers",
          description:
            "Lodha World Towers hosts Club W: 5 levels of entertainment, sports, and endless diversions. Each level of Club W is dedicated to a different and wholly immersive experience. Here you will find a top-notch gym to work out in and a spa that will help you unwind. A private theatre for evenings with close friends, and a stately ballroom for grander events. An indoor pool with cabanas made for privacy and leisure, and an outdoor poolside with a separate children’s pool for lively weekends. As varied as these spaces are, they all have that air of ritzy elegance that permeates through Lodha World Towers.",
          prossession: "ready to move in",
          features: [
            {
              image: "/assets/images/allproject/details/png/movie.png",
              title: "Private Theatre",
            },
            {
              image: "/assets/images/allproject/details/png/party.png",
              title: "Grand Ballroom",
            },
            {
              image: "/assets/images/allproject/details/png/left-arrow.png",
              title: "Fitness Centre",
            },
            {
              image: "/assets/images/allproject/details/png/flower.png",
              title: "J Wellness Spa",
            },
            {
              image: "/assets/images/allproject/details/png/racket.png",
              title: "Multipurpose Indoor Court",
            },
            {
              image: "/assets/images/allproject/details/png/run.png",
              title: "Athletics Track",
            },
            {
              image: "/assets/images/allproject/details/png/football.png",
              title: "Kids Playroom",
            },
          ],
          showCase: [
            {
              image: "/assets/images/allproject/details/webp/pool.webp",
              id: 1,
            },
            {
              image: "/assets/images/allproject/details/webp/basketball.webp",
              id: 2,
            },
            {
              image: "/assets/images/allproject/details/webp/ground.webp",
              id: 3,
            },
          ],
          plans: {
            title: "Plans",
            description: "Take a look at our meticulously planned layouts",
            info: [
              {
                title: "3bhk",
                list: [
                  {
                    title: "3 Bed Residence",
                    image: "",
                  },
                  {
                    title: "3 Bed Residence Finished W1",
                    image: "",
                  },
                  {
                    title: "3 Bed Redsidence Finished W2",
                    image: "",
                  },
                ],
              },
            ],
          },
        },
        neighbourhood: {
          title: "Explore the neighbourhood",
          description:
            "A magnificent 17-acre estate ensconced in the Mumbai Mile, the glittering stretch that comprises some of Mumbai’s finest residences, business spaces, and luxury hotels, Lodha World Towers embodies global standards in luxury. The Lodha Place is an elegant boulevard lined with palm trees, boasting some of the finest gourmet restaurants and a secondary route to give you seamless connectivity to the Sea Link, SOBO, and other suburbs.",
          nearestLocations: [
            {
              title: "Bandra-Worli Sea Link",
              image: "/assets/images/allproject/png/road.png",
              durationInMinuets: 20,
            },
            {
              title: "Mumbai International Airport",
              image: "/assets/images/allproject/png/airpoart.png",
              durationInMinuets: 30,
            },
            {
              title: "Peninsula Corporate Park",
              image: "/assets/images/allproject/png/building.png",
              durationInMinuets: 10,
            },
            {
              title: "Palladium & High Street Phoenix",
              image: "/assets/images/allproject/png/shop.png",
              durationInMinuets: 5,
            },
          ],
          note: "All distances stated in minutes are estimated travel time on 2-wheelers during normal traffic.",
        },
        finestDevelopments: {
          title: "Creating the world’s finest developments",
          collection: [
            {
              image: "/assets/images/allproject/details/webp/finest-dev-1.webp",
              title:
                "Recognizing the profound impact of design and service on well-being, we create thoughtful and purposeful living spaces.",
            },
            {
              image: "/assets/images/allproject/details/webp/finest-dev-2.webp",
              title:
                "Committed to surpassing expectations, our carefully crafted events and experiences ensure an enriched and empowered lifestyle.",
            },
            {
              image: "/assets/images/allproject/details/webp/finest-dev-3.webp",
              title:
                "We are creating homes and workspaces for an ever-changing tomorrow, where luxury and sustainability can co-exist in perfect harmony.",
            },
          ],
        },
        plans: {
          title: "Plans",
          description: "Take a look at our meticulously planned layouts",
          info: [
            {
              title: "3BHK",
              id: 1,
              list: [
                {
                  image:
                    "/assets/images/allproject/details/webp/3-bed-residence-img-1.webp",
                  title: "3 Bed Residence",
                },
                {
                  image:
                    "/assets/images/allproject/details/webp/3-bed-residence-img-2.webp",
                  title: "3 Bed Residence Finished W1",
                },
                {
                  image:
                    "/assets/images/allproject/details/webp/3-bed-residence-img-3.webp",
                  title: "3 Bed Redsidence Finished W2",
                },
              ],
            },
            {
              title: "4BHK",
              id: 2,
              list: [
                {
                  image:
                    "/assets/images/allproject/details/webp/4-bed-residence-img-1.webp",
                  title: "4 Bed Residence",
                },
                {
                  image:
                    "/assets/images/allproject/details/webp/4-bed-residence-img-2.webp",
                  title: "4 Bed Residence Finished N1",
                },
                {
                  image:
                    "/assets/images/allproject/details/webp/4-bed-residence-img-3.webp",
                  title: "4 Bed Residence Finished N2",
                },
              ],
            },
            {
              title: "5bhk",
              id: 3,
              list: [
                {
                  image:
                    "/assets/images/allproject/details/webp/4-bed-residence-img-1.webp",
                  title: "5 Bed Residence",
                },
                {
                  image:
                    "/assets/images/allproject/details/webp/4-bed-residence-img-2.webp",
                  title: "5 Bed Residence Finished N1",
                },
                {
                  image:
                    "/assets/images/allproject/details/webp/4-bed-residence-img-3.webp",
                  title: "5 Bed Residence Finished N2",
                },
              ],
            },
          ],
        },
        queries: {
          title: "Most common queries",
          queriesList: [
            {
              title: "Where are Lodha World Towers located?",
              description:
                "Lodha World Towers occupies pride of place on the Mumbai Mile – a glittering stretch where landmark residential and commercial developments rub shoulders with the finest hotels, luxury retail stores, and premium entertainment hubs, bordered by the lush Mahalaxmi Race Course. Lodha World Towers address: Lodha World Towers, Lodha Place, Shankar Rao Naram Path, Worli, Mumbai, Maharashtra 400 013.",
            },
            {
              title:
                "What are the different floor plans and unit plans available at Lodha World Towers?",
              description:
                "Lodha World Towers offers luxury 3, 4 & 5 bed residences in the heart of South Mumbai.",
            },
            {
              title:
                "How well is Lodha World Towers connected to other parts of the city?",
              description:
                "A rare living experience demands the right setting. Lodha World Towers chose the Mumbai mile. The estate offers swift access to prime arterial roads via Lodha Place and a secondary access route gives you access to the Sea Link. This luxury project in Mumbai enjoys seamless connectivity to the city and the suburbs.",
            },
            {
              title:
                "What social and retail infrastructures are present near Lodha World Towers?",
              description:
                "Lodha World Towers occupies pride of place on the Mumbai Mile – a glittering stretch where landmark residential and commercial developments rub shoulders with the finest hotels, luxury retail stores and premium entertainment hubs, bordered by the lush Mahalaxmi Race Course. Bandra-Worli Sea Link ~20 mins Domestic & International Airports ~30 mins Peninsula Corporate Park ~10 mins Palladium & High Street Phoenix ~5 mins",
            },
          ],
          rera: {
            title: "Lodha World Towers RERA",
            description: (
              <>
                <span>
                  Lodha World Towers : The project has been registered via
                  MahaRERA registration numbers: P51900008345, P51900008962 and
                  is available on the website
                  <Link
                    target="_blank"
                    rel="noopener"
                    href="https://maharera.mahaonline.gov.in">
                    https://maharera.mahaonline.gov.in
                  </Link>
                  &nbsp;under registered projects.
                </span>
                <span>
                  RERA is an iconic act that aims to bring transparency and
                  efficiency in the real estate sector, protect consumers, and
                  fast track dispute resolution. It is an act that promotes good
                  governance in the market, which helps customers get more
                  information about projects and reduces the risk associated
                  with the purchase.
                </span>
                <span>
                  The MahaRERA Registration Number is the mark of integrity, and
                  all new Lodha Group projects are RERA compliant; see a list of
                  our RERA projects here.
                </span>
                To find out more about what is RERA,
                <Link target="_blank" rel="noopener" href="/">
                  &nbsp;Click Here.
                </Link>
              </>
            ),
            image: "/assets/images/allproject/details/webp/qr-code.jpg",
          },
        },
      },
      amenities: "",
      location: "",
      plans: "",
      prices: "",
      gallery: "",
      enquire: "",
      chat: "",
    },
  },
  {
    title: "lodha cullinan",
    location: "mumbai",
    area: "andheri",
    type: "residential",
    image: "/assets/images/allproject/webp/lodha-cullinan.webp",
    details: {
      image:
        "/assets/images/allproject/details/webp/cullinan-lodha-detail-main.jpg",
      about: {
        propertyInfo: {
          propertyLogo:
            "/assets/images/allproject/details/png/lodha-cullinan.png",
          title:
            "Presenting an architectural marvel that harks back to the stylish Art Deco period of the 1930s; set like a rare jewel in the upscale neighbourhood of Versova, a gilded tower rises high above the city, taking its rightful place on the Versova skyline, and bringing its denizens a grand new way of living never seen or experienced before.",
          details: [
            {
              title: "An architectural marvel: Standing alone. Standing apart.",
              description:
                "Conceived as a tribute to Bombay's grandiose Art Deco period, Lodha Cullinan embodies the bold, classic architecture style with gilded columns, geometric grills, ornate designs, and curved facades. This iconic tower transports you to a world of timeless elegance.",
              image:
                "/assets/images/allproject/details/webp/cullinan-lodha-detail-1.jpg",
            },
            {
              title: "Bespoke residences. Majestic and palatial.",
              description:
                "At Lodha Cullinan, each residence commands a floor of its own, luxuriating in the expansive embrace of unbridled space. Your bespoke home stands like a blank canvas, inviting you to design every nook and corner in your style and taste.",
              image:
                "/assets/images/allproject/details/webp/cullinan-lodha-detail-2.jpg",
            },
            {
              title: "Lavish terrace like deck.",
              description:
                "At Lodha Cullinan, luxury transcends the indoors where lavish decks behold the majesty of the sea, and the verdant expance of the mangrove reserve, home to exotic species of birds.",
              image:
                "/assets/images/allproject/details/webp/cullinan-lodha-detail-3.jpg",
            },
          ],
        },
        lifeStyle: {
          title: "Life at Lodha World Towers",
          description:
            "Lodha World Towers hosts Club W: 5 levels of entertainment, sports, and endless diversions. Each level of Club W is dedicated to a different and wholly immersive experience. Here you will find a top-notch gym to work out in and a spa that will help you unwind. A private theatre for evenings with close friends, and a stately ballroom for grander events. An indoor pool with cabanas made for privacy and leisure, and an outdoor poolside with a separate children’s pool for lively weekends. As varied as these spaces are, they all have that air of ritzy elegance that permeates through Lodha World Towers.",
          prossession: "ready to move in",
          features: [
            {
              image: "/assets/images/allproject/details/png/movie.png",
              title: "Private Theatre",
            },
            {
              image: "/assets/images/allproject/details/png/party.png",
              title: "Grand Ballroom",
            },
            {
              image: "/assets/images/allproject/details/png/left-arrow.png",
              title: "Fitness Centre",
            },
            {
              image: "/assets/images/allproject/details/png/flower.png",
              title: "J Wellness Spa",
            },
            {
              image: "/assets/images/allproject/details/png/racket.png",
              title: "Multipurpose Indoor Court",
            },
            {
              image: "/assets/images/allproject/details/png/run.png",
              title: "Athletics Track",
            },
            {
              image: "/assets/images/allproject/details/png/football.png",
              title: "Kids Playroom",
            },
          ],
          showCase: [
            {
              image: "/assets/images/allproject/details/webp/pool.webp",
              id: 1,
            },
            {
              image: "/assets/images/allproject/details/webp/basketball.webp",
              id: 2,
            },
            {
              image: "/assets/images/allproject/details/webp/ground.webp",
              id: 3,
            },
          ],
          plans: {
            title: "Plans",
            description: "Take a look at our meticulously planned layouts",
            info: [
              {
                title: "3bhk",
                list: [
                  {
                    title: "3 Bed Residence",
                    image: "/assets/images/allproject/details/webp/pool.webp",
                  },
                  {
                    title: "3 Bed Residence Finished W1",
                    image:
                      "/assets/images/allproject/details/webp/basketball.webp",
                  },
                  {
                    title: "3 Bed Redsidence Finished W2",
                    image: "/assets/images/allproject/details/webp/ground.webp",
                  },
                ],
              },
            ],
          },
        },
        neighbourhood: {
          title: "Explore the neighbourhood",
          description:
            "A magnificent 17-acre estate ensconced in the Mumbai Mile, the glittering stretch that comprises some of Mumbai’s finest residences, business spaces, and luxury hotels, Lodha World Towers embodies global standards in luxury. The Lodha Place is an elegant boulevard lined with palm trees, boasting some of the finest gourmet restaurants and a secondary route to give you seamless connectivity to the Sea Link, SOBO, and other suburbs.",
          nearestLocations: [
            {
              title: "Bandra-Worli Sea Link",
              image: "/assets/images/allproject/png/road.png",
              durationInMinuets: 20,
            },
            {
              title: "Mumbai International Airport",
              image: "/assets/images/allproject/png/airpoart.png",
              durationInMinuets: 30,
            },
            {
              title: "Mumbai International Airport",
              image: "/assets/images/allproject/png/building.png",
              durationInMinuets: 10,
            },
            {
              title: "Palladium & High Street Phoenix",
              image: "/assets/images/allproject/png/shop.png",
              durationInMinuets: 5,
            },
          ],
          note: "All distances stated in minutes are estimated travel time on 2-wheelers during normal traffic.",
        },
        finestDevelopments: {
          title: "Creating the world’s finest developments",
          collection: [
            {
              image: "/assets/images/allproject/details/webp/finest-dev-1.webp",
              title:
                "Recognizing the profound impact of design and service on well-being, we create thoughtful and purposeful living spaces.",
            },
            {
              image: "/assets/images/allproject/details/webp/finest-dev-2.webp",
              title:
                "Committed to surpassing expectations, our carefully crafted events and experiences ensure an enriched and empowered lifestyle.",
            },
            {
              image: "/assets/images/allproject/details/webp/finest-dev-3.webp",
              title:
                "We are creating homes and workspaces for an ever-changing tomorrow, where luxury and sustainability can co-exist in perfect harmony.",
            },
          ],
        },

        queries: {
          title: "Most common queries",
          queriesList: [
            {
              title: "Where are Lodha World Towers located?",
              description:
                "Lodha World Towers occupies pride of place on the Mumbai Mile – a glittering stretch where landmark residential and commercial developments rub shoulders with the finest hotels, luxury retail stores, and premium entertainment hubs, bordered by the lush Mahalaxmi Race Course. Lodha World Towers address: Lodha World Towers, Lodha Place, Shankar Rao Naram Path, Worli, Mumbai, Maharashtra 400 013.",
            },
            {
              title:
                "What are the different floor plans and unit plans available at Lodha World Towers?",
              description:
                "Lodha World Towers offers luxury 3, 4 & 5 bed residences in the heart of South Mumbai.",
            },
            {
              title:
                "How well is Lodha World Towers connected to other parts of the city?",
              description:
                "A rare living experience demands the right setting. Lodha World Towers chose the Mumbai mile. The estate offers swift access to prime arterial roads via Lodha Place and a secondary access route gives you access to the Sea Link. This luxury project in Mumbai enjoys seamless connectivity to the city and the suburbs.",
            },
            {
              title:
                "What social and retail infrastructures are present near Lodha World Towers?",
              description:
                "Lodha World Towers occupies pride of place on the Mumbai Mile – a glittering stretch where landmark residential and commercial developments rub shoulders with the finest hotels, luxury retail stores and premium entertainment hubs, bordered by the lush Mahalaxmi Race Course. Bandra-Worli Sea Link ~20 mins Domestic & International Airports ~30 mins Peninsula Corporate Park ~10 mins Palladium & High Street Phoenix ~5 mins",
            },
          ],
          rera: {
            title: "Lodha World Towers RERA",
            description: (
              <>
                <span>
                  Lodha World Towers : The project has been registered via
                  MahaRERA registration numbers: P51900008345, P51900008962 and
                  is available on the website
                  <Link
                    target="_blank"
                    rel="noopener"
                    href="https://maharera.mahaonline.gov.in">
                    https://maharera.mahaonline.gov.in
                  </Link>
                  &nbsp;under registered projects.
                </span>
                <span>
                  RERA is an iconic act that aims to bring transparency and
                  efficiency in the real estate sector, protect consumers, and
                  fast track dispute resolution. It is an act that promotes good
                  governance in the market, which helps customers get more
                  information about projects and reduces the risk associated
                  with the purchase.
                </span>
                <span>
                  The MahaRERA Registration Number is the mark of integrity, and
                  all new Lodha Group projects are RERA compliant; see a list of
                  our RERA projects here.
                </span>
                To find out more about what is RERA,
                <Link target="_blank" rel="noopener" href="/">
                  &nbsp;Click Here.
                </Link>
              </>
            ),
            image: "/assets/images/allproject/details/webp/qr-code.jpg",
          },
        },
      },
      amenities: "",
      location: "",
      plans: "",
      prices: "",
      gallery: "",
      enquire: "",
      chat: "",
    },
  },
  {
    title: "lodha vero",
    location: "mumbai",
    area: "matuanga",
    type: "residential",
    image: "/assets/images/allproject/webp/lodha-vero.webp",
    details: {
      image:
        "/assets/images/allproject/details/webp/vorero-lodha-detail-main.jpg",
    },
  },
  {
    title: "the reserve by lodha belmondo",
    location: "mumbai-Pune expressway",
    area: "pune",
    type: "residential",
    image: "/assets/images/allproject/webp/lodha-reserve.webp",
    details: {
      image:
        "/assets/images/allproject/details/webp/blemodo-lodha-detail-main.jpg",
    },
  },
  {
    title: "Lodha Sterling ",
    location: "Thane",
    area: "thane",
    type: "residential",
    image: "/assets/images/allproject/webp/lodha-sterling.webp",
    details: {
      image:
        "/assets/images/allproject/details/webp/starling-lodha-detail-main.jpg",
    },
  },
  {
    title: "Lodha Golfview ",
    location: "Palava",
    area: "dombivli",
    type: "residential",
    image: "/assets/images/allproject/webp/lodha-golfview.webp",
    details: {
      image:
        "/assets/images/allproject/details/webp/golfview-lodha-detail-main.jpg",
    },
  },
  {
    title: "Lodha Villa Royale Gold",
    location: "Thane",
    area: "thane",
    type: "residential",
    image: "/assets/images/allproject/webp/lodha-villa-royale.webp",
    details: {
      image:
        "/assets/images/allproject/details/webp/royal-gold-lodha-detail-main.jpg",
    },
  },
  {
    title: "Lodha Azur",
    location: "Bangalore",
    area: "bangalore",
    type: "residential",
    image: "/assets/images/allproject/webp/lodha-azur.webp",
    details: {
      image:
        "/assets/images/allproject/details/webp/azur-lodha-detail-main.jpg",
    },
  },
];
