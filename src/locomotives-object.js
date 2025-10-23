//this locomotive array is an array of arrays by decade.
//locomotive_decades[0] is the 1960s
//locomotive_decades[1] is the 1970s
//locomotive_decades[2] is the 1980s
//locomotive_decades[3] is the 1990s
//locomotive_decades[4] is the 2000s
//locomotive_decades[5] is the 2010s
//locomotive_decades[6] is the 2020s
//locomotive_decades[7] is my AI developed designs

export const locomotive_decades = [
  // 1940s
  [
    {
      model: "EMD-E7",
      year: 1945,
      maker: "EMD",
      service: "Streamliner passenger fleets (ATSF, PRR, NYC, etc.)",
      links: ["https://youtu.be/yrpXc-lo0Uw?si=uAs03Ix361LZn37g"],
      sites: ["https://en.wikipedia.org/wiki/EMD_E7"],
      origins:
        "Introduced in 1945, the E7 was one of EMD’s most successful early passenger cab units, designed for postwar streamliner service.",
      serviceLife:
        "Operated on premier passenger trains across the U.S. in the 1940s–1960s, later cascaded to commuter service.",
      transitionEra:
        "By the 1970s most were retired or supplanted by newer passenger units.",
      whatsNext: "Some preserved in museums; most scrapped.",
      byTheNumbers: "428 built (1945–1949).",
      imgLink: "/emd_e7.jpg",
    },
    {
      model: "EMD-F7",
      year: 1949,
      maker: "EMD",
      service: "Freight and passenger/commuter (nationwide)",
      links: [
        "https://youtu.be/hCJD-DmK70w?si=Q-EoAcPHjCEoGcxB",
        "https://youtu.be/XdxX4iX0TvI?si=DpeR_3jYgD1snhp_",
      ],
      sites: ["https://en.wikipedia.org/wiki/EMD_F7"],
      origins:
        "The F7 became one of the most iconic freight/passenger locomotives in North America, evolving from earlier F units.",
      serviceLife:
        "Extensively used in freight and passenger service from the 1950s–1980s, including MBTA commuter operations (later rebuilt as FP10s).",
      transitionEra:
        "Phased out of front-line service by the 1970s, many rebuilt or cascaded.",
      whatsNext: "Some preserved; others rebuilt for extended commuter use.",
      byTheNumbers: "2,366 cab units + 1,483 boosters built.",
      imgLink: "/emd_f7.jpg",
    },
    {
      model: "EMD-GP7",
      year: 1949,
      maker: "EMD",
      service: "Freight and passenger/commuter",
      links: ["https://youtu.be/qQJzcX1fg1s?si=wKtqzfxuDLpxOBKl"],
      sites: ["https://en.wikipedia.org/wiki/EMD_GP7"],
      origins:
        "One of EMD’s first road switchers, the GP7 was versatile for freight and passenger use when steam-generator equipped.",
      serviceLife:
        "Boston & Maine and other railroads used them in commuter service during the 1950s–1960s.",
      transitionEra:
        "Passenger use declined in the 1970s as F units and newer power took over.",
      whatsNext: "Many preserved or rebuilt.",
      byTheNumbers: "2,729 built (1949–1954).",
      imgLink: "/emd_gp7.jpg",
    },

    ,
  ],

  // 1950s
  [
    {
      model: "ALCO-RS-3",
      year: 1950,
      maker: "ALCO",
      service: "Freight and passenger/commuter",
      links: ["https://youtu.be/fbebYvJwmxg?si=XpoKVkbc1YFcqYlW"],
      sites: ["https://en.wikipedia.org/wiki/ALCO_RS-3"],
      origins:
        "The RS-3 was ALCO’s most popular road switcher, competing directly with the GP7 and often passenger-equipped.",
      serviceLife:
        "Boston & Maine and New Haven used RS-3s for commuter runs; some units inherited by MBTA in the 1960s.",
      transitionEra: "Retired from passenger duty by the 1970s.",
      whatsNext: "Several preserved at museums.",
      byTheNumbers: "1,418 built (1950–1956).",
      imgLink: "/alco_rs3.jpg",
    },
    {
      model: "Fairbanks-Morse-H16-44",
      year: 1950,
      maker: "Fairbanks-Morse",
      service: "Freight and limited passenger/commuter",
      links: ["https://youtu.be/AZfcQhFTmf4?si=6EFWrI9MQK9zZ7EW"],
      sites: ["https://en.wikipedia.org/wiki/Fairbanks-Morse_H-16-44"],
      origins:
        "FM’s 1,600-hp road switcher; some units were steam-generator equipped for commuter service.",
      serviceLife:
        "Boston & Maine used some H16-44s in commuter service; most retired by the 1970s.",
      transitionEra: "Passenger use ended as EMD units proved more reliable.",
      whatsNext: "Few preserved; most scrapped.",
      byTheNumbers: "299 built (1950–1963).",
      imgLink: "/fm_h16-44.jpeg",
    },
    {
      model: "EMD-GP9",
      year: 1954,
      maker: "EMD",
      service: "Freight and passenger/commuter (B&M, NYC, MBTA)",
      links: ["https://youtu.be/HxfmC42Rg1s?si=Nn_N6rzCIvgHIKHa"],
      sites: ["https://en.wikipedia.org/wiki/EMD_GP9"],
      origins:
        "Follow-up to the GP7, offering 1,750 hp and updated systems. Many were passenger-equipped with steam generators.",
      serviceLife:
        "Boston & Maine and New Haven used GP9s in commuter service; MBTA inherited some in the 1970s.",
      transitionEra: "Gradually displaced by F40PHs in the 1980s.",
      whatsNext: "Many preserved or rebuilt.",
      byTheNumbers: "4,092 built (1954–1963).",
      imgLink: "/emd_gp9.jpeg",
    },
    {
      model: "EMD-FL9",
      year: 1956,
      maker: "EMD",
      service: "New Haven, Penn Central, Metro-North, MBTA",
      links: ["https://youtu.be/VT5J4QcE2ZE?si=lDv7Jhw3qsh8fJXu"],
      sites: ["https://en.wikipedia.org/wiki/EMD_FL9"],
      origins:
        "Dual-mode locomotive capable of running on diesel or third-rail electric power, designed for service into New York’s Grand Central Terminal.",
      serviceLife:
        "Mainstay of New Haven and later Metro-North commuter services from the 1950s–2000s; also briefly used by MBTA.",
      transitionEra: "Gradually retired as new dual-modes and diesels arrived.",
      whatsNext: "Several preserved; many scrapped.",
      byTheNumbers: "60 built (1956–1960).",
      imgLink: "/emd_fl9.jpg",
    },
  ],

  // 1960s
  [
    {
      model: "EMD-SDP40",
      year: 1966,
      maker: "EMD",
      service: "Great Northern, later Amtrak",
      links: ["https://youtu.be/o-JiNTw-MjU?si=9Gxv6eGvZ0O5FvVb"],
      sites: ["https://en.wikipedia.org/wiki/EMD_SDP40"],
      origins:
        "Passenger variant of the SD40 with a steam generator, intended for long-distance service.",
      serviceLife:
        "Used by Great Northern and then Amtrak in the 1970s before reassignment.",
      transitionEra: "Passenger use ended by the late 1970s.",
      whatsNext: "Some rebuilt for freight service; others preserved.",
      byTheNumbers: "20 built (1966).",
      imgLink: "/emd_sdp40.jpg",
    },
    {
      model: "EMD-GP40TC",
      year: 1966,
      maker: "EMD (for GO Transit)",
      service: "GO Transit, later Amtrak",
      links: [
        "https://youtu.be/l5c-bpu-Av8?si=l3x-He9MtgL0uRIY",
        "https://youtu.be/hosejOr0CDA?si=xi5_84b4fsad1yzJ",
        "https://youtu.be/_qHxmAOyYQk?si=6lyFDUOpZMz43xlm",
        "https://youtu.be/ASYZRfw2aec?si=v5OqHIduqrEeyOJk",
      ],
      sites: ["https://en.wikipedia.org/wiki/EMD_GP40TC"],
      origins:
        "Passenger variant of the GP40 with extended frame and HEP gear, built for Toronto’s GO Transit startup.",
      serviceLife:
        "Served GO Transit until the 1980s, then sold to Amtrak for work train and support service.",
      transitionEra: "Cascaded to secondary duties by the 2000s.",
      whatsNext: "Several preserved.",
      byTheNumbers: "8 built (1966–68).",
      imgLink: "/emd_gp40tc.jpg",
    },
    {
      model: "U30CG",
      year: 1967,
      maker: "GE",
      service: "ATSF",
      links: [
        "https://youtu.be/0gLnSU6sLes?si=pG6a7KI0JQjaz4Br",
        "https://www.youtube.com/watch?v=b2_mShUZ7No",
      ],
      sites: ["https://en.wikipedia.org/wiki/GE_U30CG"],
      origins:
        "GE built the U30CG as a passenger variant of its U30C freight unit, delivered to the Santa Fe in 1967. It had steam generators for passenger service but was quickly bumped to freight duties after reliability issues.",
      serviceLife:
        "ATSF ran them briefly in passenger service before reassigning them to freight. By the mid-1970s, most were retired or scrapped.",
      transitionEra:
        "A transitional experiment — these locomotives didn’t influence later designs but marked GE’s attempt to enter the passenger market.",
      whatsNext: "All units scrapped; no survivors.",
      byTheNumbers: "6 units built in 1967.",
      imgLink: "/u30cg.jpeg",
    },
  ],

  // 1970s
  [
    {
      model: "GE-P30CH",
      year: 1975,
      maker: "GE",
      service: "Amtrak",
      links: ["https://youtu.be/zLwM-CREqFY?si=BR5NowtgV2_GuFNW"],
      sites: ["https://en.wikipedia.org/wiki/GE_P30CH"],
      origins:
        "Dubbed 'Pooches,' these were GE’s passenger derivative of the U30C, delivered to Amtrak with steam generators.",
      serviceLife:
        "Operated in Amtrak service throughout the late 1970s but plagued by reliability issues, often substituted by EMD units.",
      transitionEra:
        "Retired early in the 1980s as Amtrak standardized on the F40PH.",
      whatsNext: "No survivors; scrapped by mid-1990s.",
      byTheNumbers: "25 units built 1975–76.",
      imgLink: "/p30ch.jpg",
    },
    {
      model: "EMD-SDP40F",
      year: 1973,
      maker: "EMD",
      service: "Amtrak",
      links: [
        "https://www.youtube.com/watch?v=K75TM2JKxdc&t=299s",
        "https://youtu.be/5KIyCikrmPY?si=l75JilD7T7rz38tw",
        "https://youtu.be/9CanoytG9kU?si=yjvOj_hDDBWKVisf",
      ],
      sites: ["https://en.wikipedia.org/wiki/EMD_SDP40F"],
      origins:
        "First new passenger locomotives built for Amtrak, based on the SD40-2 frame with steam generators.",
      serviceLife:
        "Delivered 1973–1974, plagued by derailment issues and gradually replaced by F40PHs.",
      transitionEra: "Most retired or rebuilt by early 1980s.",
      whatsNext: "A handful rebuilt as freight units; others scrapped.",
      byTheNumbers: "150 built (1973–1974).",
      imgLink: "/emd_sdp40f.jpg",
    },
    {
      model: "EMD-F40PH",
      year: 1976,
      maker: "EMD",
      service: "Amtrak, MBTA, commuter agencies",
      links: [
        "https://youtu.be/NBPals_6tcA?si=CLkeocrOMIskufRa",
        "https://youtu.be/PeGnZss2rYI?si=8kbwUjPQIDf67r0g",
        "https://youtu.be/xKPG5fO0T30?si=WFMjEoeNXNrXACYC",
        "https://youtu.be/FGYsuSkaVYs?si=3ISWji0C5aNNp1AV",
        "https://youtu.be/co7zZF4Ku6o?si=LEEexPqcDF8svoHT",
        "https://youtu.be/s4ZH-RLizM0?si=Ow17vq2hkQR-AOTT",
        "https://youtu.be/fgfsGb6vuA4?si=dU_H-YkYzlox59Yt",
      ],
      sites: ["https://en.wikipedia.org/wiki/EMD_F40PH"],
      origins:
        "Developed for Amtrak as a standardized HEP passenger locomotive; quickly became a commuter favorite.",
      serviceLife:
        "Backbone of U.S. intercity and commuter fleets from the late 1970s–2000s.",
      transitionEra:
        "Replaced by newer power; many cascaded to secondary service.",
      whatsNext: "Dozens preserved, many rebuilt for extended use.",
      byTheNumbers: "475 built (1976–1992).",
      imgLink: "/f40ph.jpg",
    },
    {
      model: "EMD-FP10",
      year: 1978,
      maker: "Morrison-Knudsen (rebuilt from F7/F9s)",
      service: "MBTA",
      links: [
        "https://youtu.be/W1wYp4kakJE?si=7oCpJxlckDnJUPAn",
        "https://youtu.be/-KO2eSTcIxk?si=pqzVYIa1qAFZ2lSh",
      ],
      sites: ["https://en.wikipedia.org/wiki/EMD_FP10"],
      origins:
        "Rebuilt F-units upgraded with HEP and modernized systems for MBTA commuter service.",
      serviceLife: "MBTA’s main fleet until displaced by F40PHs in the 1980s.",
      transitionEra: "Retired in the 1990s.",
      whatsNext: "Several preserved in museums and tourist lines.",
      byTheNumbers: "20 rebuilt for MBTA.",
      imgLink: "/emd_fp10.jpeg",
    },
  ],

  // 1980s
  [
    {
      model: "EMD-AEM-7",
      year: 1980,
      maker: "EMD/ASEA",
      service: "Amtrak",
      links: [
        "https://youtu.be/7hU9lZ424FY?si=Byt7hb0Ydfx11Vlu",
        "https://youtu.be/ghy8yxgvljY?si=uVcIB7UmCmMbc0dX",
      ],
      sites: ["https://en.wikipedia.org/wiki/EMD_AEM-7"],
      origins:
        "Derived from the Swedish Rc4 electric, the AEM-7 became the workhorse electric for Amtrak on the Northeast Corridor.",
      serviceLife:
        "Entered service in 1980; their high acceleration and efficiency earned the nickname 'toasters.' Operated until mid-2010s.",
      transitionEra: "Replaced by Siemens ACS-64 starting in 2014.",
      whatsNext: "All retired by 2016; several preserved in museums.",
      byTheNumbers: "54 units built 1978–88.",
      imgLink: "/aem7.jpg",
    },
    {
      model: "EMD-F59PH",
      year: 1988,
      maker: "EMD",
      service: "GO Transit, later Metrolink, NCDOT, TRE, Metra",
      links: [
        "https://youtu.be/A1nD8ON9DWw?si=vwgPVW8vnwwxJKtG",
        "https://youtu.be/StO561jhxrU?si=Tyy0JhrxVxs6U9s6",
        "https://youtu.be/Rd0LtDsg3OU?si=lhhu8RTuFQTaAlek",
        "https://youtu.be/MftTEHQk2TQ?si=0nAeSkL52MFDCRW2",
        "https://youtu.be/CFDRGWyrOqQ?si=95SibvoDzvoFRZYr",
        "https://youtu.be/9D2vOcewGgk?si=EOQEuk43YzwvEZXc",
        "https://youtu.be/BrLVaTnxk-w?si=MvbCA-a9Dfrru8O3",
        "https://youtu.be/aKEDZ6q_fyE?si=A09g374xxwZo-8iE",
      ],
      sites: ["https://en.wikipedia.org/wiki/EMD_F59PH"],
      origins:
        "Passenger-optimized variant of the GP59 with a 12-710 prime mover and separate HEP generator, designed for commuter agencies.",
      serviceLife:
        "Proliferated across commuter agencies in the 1990s–2010s, including GO Transit and Metrolink. Many later sold to secondary agencies.",
      transitionEra:
        "Tier 4 emissions rules and new locomotives (Chargers, F125s) began replacing them in the 2010s.",
      whatsNext:
        "Migrating to second-tier duties, work trains, resale/rebuild, or preservation.",
      byTheNumbers: "72 F59PH built (1988–1994), plus 83 F59PHI (1994–2001).",
      imgLink: "/f59ph.jpg",
    },
    {
      model: "GE-E60",
      year: 1983,
      maker: "GE Transportation",
      service: "Amtrak",
      links: ["https://youtu.be/8cFZRwSxrJs?si=9h7C71QR7FRxJf_d"],
      sites: ["https://en.wikipedia.org/wiki/GE_E60"],
      origins:
        "Electric passenger locomotive derived from GE’s freight design, intended for high-speed NEC use.",
      serviceLife:
        "Used on Amtrak’s Northeast Corridor until reliability issues limited careers.",
      transitionEra: "Retired by late 1980s.",
      whatsNext: "Most scrapped, few preserved.",
      byTheNumbers: "26 passenger units built.",
      imgLink: "/ge_e60.jpg",
    },
    {
      model: "LRC",
      year: 1981,
      maker: "Bombardier / MLW",
      service: "VIA Rail (Canada)",
      links: ["https://youtu.be/9Da28enkJAU?si=0Rypyu36Ab8IAMbJ"],
      sites: [
        // you can add YouTube or other media links if you have them
        "https://en.wikipedia.org/wiki/LRC_(train)",
      ],
      origins:
        "The LRC (Light, Rapid, Comfortable) was developed in the late 1970s by MLW, Alcan, and Dofasco (later Bombardier) as a lightweight, tilting, diesel-electric locomotive + coach set for intercity service in Canada. It aimed to provide higher speed and better passenger comfort on existing tracks. :contentReference[oaicite:1]{index=1}",
      serviceLife:
        "(1981–2001) The LRC entered service in 1981 in the Quebec-Windsor corridor, used by VIA Rail. While the coach cars continued in use longer, the locomotives were gradually retired, with the last units withdrawn in 2001. :contentReference[oaicite:2]{index=2}",
      transitionEra:
        "(1990s–early 2000s) The LRC locos saw declining reliability and increasing maintenance costs. Newer equipment (e.g. P42DC, etc.) replaced them for power, while the LRC coaches survived longer, often being hauled by other locos. :contentReference[oaicite:3]{index=3}",
      whatsNext:
        "Preservation of a few units; no plans to revive the LRC locomotives. VIA’s newer trainsets are replacing the corridor fleet, and the tilt‐mechanism increasingly disabled in coaches. :contentReference[oaicite:4]{index=4}",
      byTheNumbers:
        "31 locomotives built (21 LRC-2 + 10 LRC-3) between 1980-84; plus dozens of coaches. :contentReference[oaicite:5]{index=5}",
      imgLink: "/lrc.jpg",
    },
  ],

  // 1990s
  [
    {
      model: "GE-Dash-8-32BWH",
      year: 1991,
      maker: "GE",
      service: "Amtrak",
      links: [
        "https://youtu.be/2Bc6HAHW4GY?si=JBxEZheuSyPZrQuj",
        "https://youtu.be/UfL5gFpLMNs?si=f5o4pHnsOHQ0wHzQ",
        "https://youtu.be/V6zX4Y0t_Bs?si=6N3_O0KaNW0cyFNh",
        "https://youtu.be/YUtI1KUDvYY?si=2e-NK8WxDbTb6gEp",
      ],
      sites: ["https://en.wikipedia.org/wiki/GE_Dash_8_Series"],
      origins:
        "Passenger version of the Dash 8 freight design, built with HEP and geared for 100mph service.",
      serviceLife:
        "Used mainly on long-distance Amtrak trains in the 1990s, later relegated to switching and backup duty.",
      transitionEra:
        "Phased out as Genesis P40/P42DC took over mainline duties.",
      whatsNext: "A few remain in switching service; most retired.",
      byTheNumbers: "20 units built 1991–92.",
      imgLink: "/dash8bwh.jpg",
    },
    {
      model: "GE-P42DC-Genesis",
      year: 1993,
      maker: "GE",
      service: "Amtrak",
      links: [
        "https://youtu.be/OB6gS__a6gI?si=yRCoFdBceiAOgK2N",
        "https://youtu.be/s790hvoMbtM?si=hX5LX11MgIwtvqZQ",
        "https://youtu.be/xf-HlAZbAgY?si=xAvNaHh5jaAl8ftI",
        "https://youtu.be/FIIi77sBgds?si=ktQ1KoV2PI5s9cBR",
      ],
      sites: ["https://en.wikipedia.org/wiki/GE_Genesis"],
      origins:
        "Second-generation Genesis locomotive, more powerful and efficient than the P40. Streamlined for corridor and long-distance trains.",
      serviceLife:
        "Became Amtrak’s standard diesel from the late 1990s onward; also used by VIA Rail.",
      transitionEra:
        "Still in widespread service, though Chargers are displacing them.",
      whatsNext:
        "Gradual retirement as ALC-42s replace them in long-distance service.",
      byTheNumbers: "321 units built 1996–2001.",
      imgLink: "/p42.jpg",
    },
    {
      model: "F59PHI",
      year: 1994,
      maker: "EMD",
      service: "Amtrak California",
      links: [
        "https://youtu.be/aKEDZ6q_fyE?si=X5dvdp6xYq80hCXf",
        "https://youtu.be/MftTEHQk2TQ?si=G1keKInxY4_9nZTL",
        "https://youtu.be/XO1fz32q3YU?si=rzZidG4bMNkpzz7F",
        "https://youtu.be/Q813fMmF3Mc?si=bHu-4JJSwLZY5Xds",
        "https://youtu.be/FifRPr-QxsY?si=jn0H6BITdGkQd1rG",
      ],
      sites: ["https://en.wikipedia.org/wiki/EMD_F59PHI"],
      origins:
        "Introduced in 1994, the F59PHI was a streamlined, fully enclosed evolution of the F59PH designed for state-supported corridor and commuter services. Amtrak California was the launch customer, deploying the units on the San Joaquin and Capitol Corridor. Operators like Amtrak Cascades, West Coast Express, Metrolink, and Sound Transit also acquired them.",
      serviceLife:
        "(1994–2010s) The F59PHI became a common sight across the U.S. West Coast and some Canadian commuter networks. Its reliability and aerodynamic styling made it distinctive, but like the F59PH, Tier-4 regulations and fleet renewal efforts eventually reduced its numbers.",
      transitionEra:
        "(2010s–2020s) Large operators replaced the type with Siemens SC-44/SCB-40 Chargers or other Tier-4 power. Amtrak sold its 21 units to Metra in 2018, while others shifted to smaller commuter agencies, secondary duties, or were retired outright.",
      whatsNext:
        "Future service for F59PHIs lies mostly in second-tier roles, rebuilds, or resale to commuter agencies like Metra. The overall trend is retirement as new Tier-4 fleets dominate, but a handful will continue in active commuter assignments.",
      byTheNumbers:
        "83 F59PHI units built (1994–2001). Key operators included Amtrak California, Amtrak Cascades, West Coast Express, Metrolink, Sounder, and Trinity Railway Express.",
      imgLink: "/f59phi.jpg",
    },
    {
      model: "EMD-DE30AC/DM30AC",
      year: 1997,
      maker: "EMD",
      service: "LIRR",
      links: [
        "https://youtu.be/yzQXjRZzbOM?si=glYdfZkce4rQe8rs",
        "https://youtu.be/K2PLgORSW0o?si=N1zaT7CLVCzZuqEU",
        "https://youtu.be/AdJd-QCBQwU?si=-_aEY6UWUm_sGicz",
        "https://youtu.be/z8W6ds6G8BE?si=v6f7qSeqT0idSkaf",
      ],
      sites: ["https://en.wikipedia.org/wiki/EMD_DE30AC_and_DM30AC"],
      origins:
        "Dual-mode diesel/electric locomotives built for Long Island Rail Road, capable of Penn Station access.",
      serviceLife:
        "In service since late 1990s, unique to LIRR with a mixed reliability record.",
      transitionEra:
        "Still operating into 2020s but aging; replacement discussions ongoing.",
      whatsNext: "Future replacements likely from Siemens or Alstom.",
      byTheNumbers: "46 units (23 DE30AC + 23 DM30AC).",
      imgLink: "/de30ac.jpeg",
    },
    {
      model: "EMD-GP40MC",
      year: 1997,
      maker: "EMD (rebuilt by Morrison-Knudsen)",
      service: "MBTA",
      links: ["https://youtu.be/iYsfRH6c514?si=Ay6I7yTJFrhupNXZ"],
      sites: ["https://en.wikipedia.org/wiki/EMD_GP40MC"],
      origins:
        "Rebuilt GP40 freight units modified with HEP and cabs for MBTA commuter use.",
      serviceLife:
        "Main fleet through late 1990s–2000s, but plagued by reliability issues.",
      transitionEra: "Largely sidelined by 2010s.",
      whatsNext: "Some stored or lightly used; others may be rebuilt.",
      byTheNumbers: "25 rebuilt for MBTA.",
      imgLink: "/emd_gp40mc.jpg",
    },

    {
      model: "Talgo-VI",
      year: 1998,
      maker: "Talgo (Spain/US assembly)",
      service: "Amtrak Cascades",
      links: [
        "https://youtu.be/SVKqbsYbGEU?si=WMwPWACRtTuoc5Gp",
        "https://youtu.be/NwwdYkTWl8A?si=xgjPyJsAu0fjV91B",
      ],
      sites: ["https://en.wikipedia.org/wiki/Talgo_(train)#Series_VI"],
      origins:
        "Lightweight articulated tilting trainsets introduced for Amtrak Cascades service in the late 1990s.",
      serviceLife: "Operated Portland–Seattle–Vancouver until 2020.",
      transitionEra:
        "Retired after NTSB crashworthiness findings following a derailment.",
      whatsNext: "Most scrapped, a few preserved.",
      byTheNumbers: "4 trainsets built.",
      imgLink: "/talgo_vi.jpg",
    },
  ],

  // 2000s
  [
    {
      model: "Bombardier-HHP-8",
      year: 2001,
      maker: "Bombardier / Alstom",
      service: "Amtrak, MARC",
      links: [
        "https://youtu.be/D3wPb4f5M2U?si=V3bIDikJ_pnqQAmQ",
        "https://youtu.be/crFAjw6KAqs?si=YBlwhWbz9oJWq_Uq",
      ],
      sites: ["https://en.wikipedia.org/wiki/HHP-8"],
      origins:
        "Electric passenger locomotive based on Acela technology, built for Amtrak and MARC.",
      serviceLife: "Entered service 2000 but plagued with reliability issues.",
      transitionEra: "Amtrak retired all by 2014, MARC by 2015.",
      whatsNext: "Most scrapped, a few preserved.",
      byTheNumbers: "15 built.",
      imgLink: "/hhp8.jpg",
    },
    {
      model: "Acela-Express",
      year: 2000,
      maker: "Bombardier / Alstom",
      service: "Amtrak",
      links: ["https://youtu.be/SVcRmo3lisg?si=zujS3DWi7Z4Bd9ih"],
      sites: ["https://en.wikipedia.org/wiki/Acela"],
      origins: "High-speed tilting trainsets designed for Amtrak’s NEC.",
      serviceLife: "Flagship NEC service from 2000–2024 (in transition).",
      transitionEra: "Being replaced by Avelia Liberty.",
      whatsNext: "Retirement once Liberty enters full service.",
      byTheNumbers: "20 trainsets built.",
      imgLink: "/acela_express.jpeg",
    },
    {
      model: "MP36ph-3c",
      year: "2003",
      maker: "MotivePower (MPI)",
      service: "Caltrain",
      links: [
        "https://youtu.be/hCyYW3k2zqA?si=SPoUpdE0QpVJ7fl9",
        "https://youtu.be/IqL6pkgBoHY?si=I7HAtDvvIVPKjpDt",
        "https://youtu.be/JMtLV-q6V0M?si=0rlo2qL_MmobN1YH",
        "https://youtu.be/EkjYCmI_1ls?si=-m9m0g7EVgO7p-BA",
        "https://youtu.be/sUSNlrkFFO8?si=39orYyyazIWCd0tk",
      ],
      sites: ["https://en.wikipedia.org/wiki/MPI_MPXpress"],
      origins:
        "MPI developed the MP36PH-3C in the early 2000s to provide a modern, EPA-compliant passenger locomotive for U.S. commuter agencies. Using a 16-645F3B prime mover with microprocessor controls and separate HEP engine, it was designed to meet contemporary reliability and emissions needs. Caltrain was the launch customer, followed by Metra, VRE, and others.",
      serviceLife:
        "(2000s–2020s) The MP36 quickly spread across commuter agencies looking to replace aging F40PH and F59 fleets. Notable users include Caltrain, Metra, VRE, UTA FrontRunner, and Sounder. Its combination of modern electronics and proven EMD core design made it a dependable workhorse.",
      transitionEra:
        "(2010s–2020s) Some agencies began phasing out MP36s earlier than expected due to Tier-4 compliance pushes or electrification plans (e.g., Caltrain). Others, like Metra, are investing in rebuilds to extend service life. The platform was also adapted into MPI’s MP40PH-3C for higher power and Canadian service.",
      whatsNext:
        "Expect MP36 fleets to remain in service at many agencies through the 2030s, especially where rebuild programs are active. However, Siemens Chargers and other Tier-4 options are beginning to displace them at agencies pursuing emissions upgrades.",
      byTheNumbers:
        "65 MP36PH-3C units built between 2001 and 2011, plus additional MP40PH-3C derivatives for GO Transit and others.",
      imgLink: "/mpxseries.jpg",
    },
  ],

  // 2010s
  [
    {
      model: "Brookville-BL36PH",
      year: 2011,
      maker: "Brookville",
      service: "FEC/All Aboard Florida",
      links: ["https://youtu.be/PKYHHwxRwp8?si=cybexyxyL9Vvs86U"],
      sites: ["https://en.wikipedia.org/wiki/Brookville_BL36PH"],
      origins:
        "Brookville’s entry into passenger market, Tier 3-compliant, sold to Tri-Rail and FEC/All Aboard Florida.",
      serviceLife: "Mixed reviews, limited adoption outside Florida.",
      transitionEra: "Still in service; niche presence.",
      whatsNext: "Likely overshadowed by Siemens Chargers.",
      byTheNumbers: "17 units built.",
      imgLink: "/bl36ph.jpg",
    },
    {
      model: "MPI-HSP46",
      year: 2014,
      maker: "MotivePower / GE",
      service: "MBTA",
      links: ["https://youtu.be/vKfNhiMjneQ?si=jfbeOrh5_eJLHj5x"],
      sites: ["https://en.wikipedia.org/wiki/MBTA_HSP46"],
      origins:
        "Tier 3 commuter locomotive with GEVO prime mover, ordered for MBTA.",
      serviceLife: "Backbone of MBTA fleet since mid-2010s.",
      transitionEra: "Still active.",
      whatsNext: "Expected service into 2030s.",
      byTheNumbers: "40 units delivered.",
      imgLink: "/mpi_hsp46.jpeg",
    },
    {
      model: "Siemens-ACS-64",
      year: 2014,
      maker: "Siemens",
      service: "Amtrak, SEPTA",
      links: ["https://youtu.be/q9NokKI3wCo?si=r2Z7EIrIF3S3Te0l"],
      sites: ["https://en.wikipedia.org/wiki/Siemens_ACS-64"],
      origins:
        "Electric passenger locomotive replacing Amtrak’s AEM-7s and HHP-8s.",
      serviceLife: "Standard NEC passenger locomotive since 2014.",
      transitionEra: "Still active, reliable NEC fleet.",
      whatsNext: "Continued service into 2030s.",
      byTheNumbers: "70 built for Amtrak, 15 for SEPTA.",
      imgLink: "/acs64.jpeg",
    },
    {
      model: "ALP-45DP",
      year: 2011,
      maker: "Bombardier / Alstom",
      service: "NJ Transit, Exo",
      links: [
        "https://youtu.be/NWq55UKMlRg?si=NehvV-S4CRC5WPWc",
        "https://youtu.be/z7morELE5Vg?si=cOR6TxqvupZjJh1j",
      ],
      sites: ["https://en.wikipedia.org/wiki/ALP-45DP"],
      origins:
        "Dual-mode locomotive allowing seamless operation between diesel and electrified territory.",
      serviceLife: "Entered NJT and AMT (Exo) service in 2011.",
      transitionEra: "Still active, though heavy and complex.",
      whatsNext: "Expected to remain in service through the 2030s.",
      byTheNumbers: "65 units built.",
      imgLink: "/alp45dp.jpg",
    },
    {
      model: "Nippon-Sharyo-DMU",
      year: 2016,
      maker: "Nippon Sharyo",
      service: "SMART, TEXRail, Union Pearson Express",
      links: ["https://youtu.be/uhD5vjoVg7A?si=nU80YdoWSIU31xib"],
      sites: ["https://en.wikipedia.org/wiki/Nippon_Sharyo_DMU"],
      origins:
        "Diesel multiple unit built to FRA standards for U.S. commuter/regional rail.",
      serviceLife:
        "Operated in California and Texas until early retirements due to design issues for the latter.",
      transitionEra: "Retired 2018–2022.",
      whatsNext:
        "Texas replaced them with Stadler DMUs. They are  still operating in Montreal and with SMART ",
      byTheNumbers: "17 built.",
      imgLink: "/nippon_sharyo_dmu.jpg",
    },
    {
      model: "Siemens-SC-44-Charger",
      year: 2016,
      maker: "Siemens",
      service: "State Corridors",
      links: [
        "https://youtu.be/cDF3qJHeDMA?si=fR1bncfsOhHsgRmw",
        "https://youtu.be/s2mKMDE0XHE?si=LZ6QyAm2UL1gDpic",
        "https://youtu.be/dnHnNeq14-c?si=EVkydWq95oOH7yNi",
      ],
      sites: ["https://en.wikipedia.org/wiki/Siemens_Charger"],
      origins:
        "Tier 4 diesel-electric built for state-supported Amtrak services. Derived from Siemens’ European designs.",
      serviceLife:
        "Adopted by Illinois, Washington, California, and Midwest corridors.",
      transitionEra: "Now the standard state-supported locomotive.",
      whatsNext: "Will remain in corridor use for decades.",
      byTheNumbers: "89 SC-44 units built (2016–2019).",
      imgLink: "/sc44.jpg",
    },
    {
      model: "EMD-F125",
      year: "2015–2019",
      maker: "Progress Rail (EMD)",
      service: "Metrolink (Los Angeles)",
      links: [
        "https://youtu.be/VGsHblJMcb0?si=Mjdwr07WFxzmB9QL",
        "https://youtu.be/Lofk2QvEfzw?si=u2EsjdC15ZOl9-go",
        "https://youtu.be/dnHnNeq14-c?si=EVkydWq95oOH7yNi",
        "https://youtu.be/krNVma8Jbhc?si=RkUUbDRwvNb1WBDz",
      ],
      sites: ["https://en.wikipedia.org/wiki/EMD_F125"],
      origins:
        "Designed as a Tier-4 compliant successor to the F59/F40 family, featuring a Caterpillar C175-20 prime mover (4,700 hp) and streamlined body. Metrolink was the launch and only buyer.",
      serviceLife:
        "(2016–present) All delivered to Metrolink. Some teething problems at entry, but now standard fleet power.",
      transitionEra:
        "(2020s) Still in early career. No further sales, with Siemens Chargers dominating the market instead.",
      whatsNext:
        "Expected to serve Metrolink for decades. Potential for resale or rebuild, though lack of broader adoption limits aftermarket future.",
      byTheNumbers:
        "40 units built for Metrolink between 2015–2019. No other customers.",
      imgLink: "/f125.jpg",
    },
    {
      model: "Stadler-KISS-EMU",
      year: 2019,
      maker: "Stadler Rail",
      service: "Caltrain",
      links: [
        "https://youtu.be/6n-N_SWKF6Q?si=5zmzs9cxWq3xQr1g",
        "https://youtu.be/M5i6RhbH0FQ?si=LLFju3cWUP-5e_Qn",
      ],
      sites: ["https://en.wikipedia.org/wiki/Stadler_KISS"],
      origins: "Electric multiple unit ordered for Caltrain electrification.",
      serviceLife: "Entered testing in late 2010s, entering service 2020s.",
      transitionEra: "New backbone of Caltrain service.",
      whatsNext: "Active service into 2040s.",
      byTheNumbers: "19 trainsets ordered.",
      imgLink: "/stadler_kiss.jpeg",
    },
  ],

  // 2020s
  [
    {
      model: "Siemens-ALC-42-Charger",
      year: 2021,
      maker: "Siemens",
      service: "Amtrak",
      links: ["https://youtu.be/s2mKMDE0XHE?si=LZ6QyAm2UL1gDpic"],
      sites: ["https://en.wikipedia.org/wiki/Siemens_Charger"],
      origins:
        "Long-distance variant of the Charger, built for Amtrak’s national network.",
      serviceLife:
        "Entering service on Amtrak’s LD routes, gradually replacing P42DCs.",
      transitionEra: "Active rollout across national system.",
      whatsNext: "Backbone of Amtrak LD diesel fleet.",
      byTheNumbers: "125 units ordered.",
      imgLink: "/alc42.jpeg",
    },
    ,
    {
      model: "EM-SD70MACH",
      year: 2021,
      maker: "Progress Rail (rebuilt from EMD SD70MAC)",
      service: "Metra (Chicago)",
      links: [
        "https://youtu.be/dWm9kUhy5no?si=ZNaQWISlhGEjxQUN",
        "https://youtu.be/dWm9kUhy5no?si=CSqThXs0CPDQq984",
        "https://youtu.be/lZ8f4C8BAjs?si=ewL2UyfsFEhABH-S",
        "https://youtu.be/SKlSDhgPyeA?si=XhwvAu9qzis5qTvO",
      ],
      sites: [
        "https://www.trains.com/trn/news-reviews/news-wire/metra-unveils-sd70mach-locomotive/",
        "https://en.wikipedia.org/wiki/EMD_SD70_series",
      ],
      origins:
        "The SD70MACH is a commuter locomotive rebuilt by Progress Rail from secondhand EMD SD70MAC freight units. Ordered by Metra in 2019 and delivered beginning in 2021, the rebuilds feature head-end power (HEP), updated electronics, and modifications for passenger service. They replace older F40PH and MP36 units while reusing durable SD70MAC frames and prime movers.",
      serviceLife:
        "Entered service with Metra in 2021. Expected to provide long-term reliability while lowering acquisition costs compared to buying new locomotives. They serve across Metra’s diesel-operated commuter rail network.",
      transitionEra:
        "(2020s) Represents a shift toward large-scale rebuilds of freight power for passenger use, balancing budget and emissions standards. They are Tier-3+ compliant and extend the usefulness of the SD70 platform in a passenger role.",
      whatsNext:
        "Metra plans to operate SD70MACH units for decades, potentially rebuilding more freight locomotives into commuter service rather than relying solely on new Tier-4 purchases.",
      byTheNumbers:
        "Metra ordered 15 SD70MAC rebuilds into SD70MACHs beginning in 2019, with deliveries starting in 2021.",
      imgLink: "/sd70mach_metra.jpeg",
    },
    {
      model: "Amtrak-Avelia-Liberty",
      year: 2021,
      maker: "Alstom",
      service: "Amtrak (NEC)",
      links: ["https://youtu.be/WH-3FsmU6KQ?si=xrDP_fBo_q0Aq21i"],
      sites: ["https://en.wikipedia.org/wiki/Amtrak_Avelia_Liberty"],
      origins:
        "Next-generation high-speed trainset for Amtrak’s NEC, designed to replace the Acela Express.",
      serviceLife: "Delivered 2021+, entering service mid-2020s.",
      transitionEra: "Beginning revenue service, will replace Acela Express.",
      whatsNext: "Expected to dominate NEC high-speed service through 2050s.",
      byTheNumbers: "28 trainsets ordered.",
      imgLink: "/avelia_liberty.jpg",
    },
    {
      model: "Talgo-Series-8",
      year: 2013,
      maker: "Talgo",
      service: "Amtrak Cascades, Wisconsin DOT (cancelled order)",
      links: ["https://youtu.be/xCfIfFWhXJA?si=5FtRLox9LSqUHHhA"],
      sites: ["https://en.wikipedia.org/wiki/Talgo_(train)#Series_8"],
      origins: "Updated Talgo tilting trainsets built for U.S. use.",
      serviceLife: "Used in Amtrak Cascades service until retired after 2020.",
      transitionEra: "Withdrawn after crashworthiness concerns.",
      whatsNext: "Some stored, others scrapped.",
      byTheNumbers: "2 trainsets built.",
      imgLink: "/talgo_series8.jpg",
    },
  ],

  [
    {
      model: "F59PHI-Metrolink-Cabcar",
      year: "proposed",
      description:
        "This locomotive is a merger of an F59phi locomotive and a Hyundai rotem cab car",
      errors: "a light has been placed betweenn the triclops window",
      links: [
        "https://youtu.be/XO1fz32q3YU?si=1G_wV1_qYX3N8b8j",
        "https://youtu.be/03MIu4He8_U?si=gmYLm2xY4lloxb_O",
      ],
      imgLink: "/F59PHIMetrolinkCabcar.png",
    },

    {
      model: "F59PH-NCDOT-Cabcar",
      year: "proposed",
      error: "the window should be a 3 piece set instead of 2 pieces",
      description:
        "This locomotive is a merger of an F59ph locomotive and a Hyundai rotem cab car",
      links: [
        "https://youtu.be/XO1fz32q3YU?si=1G_wV1_qYX3N8b8j",
        "https://youtu.be/03MIu4He8_U?si=gmYLm2xY4lloxb_O",
      ],
      imgLink: "/ncdotf59phcabcar.png",
    },
    {
      model: "F40PH-GOTransit-Cabcar",
      year: "proposed",
      description:
        "This locomotive is a merger of an F40ph locomotive and a Bombardier cab car",
      error: "No errors in design here. Proportions seem reasonable",
      links: [
        "https://youtu.be/XO1fz32q3YU?si=1G_wV1_qYX3N8b8j",
        "https://youtu.be/03MIu4He8_U?si=gmYLm2xY4lloxb_O",
      ],
      imgLink: "/GOTransitf40phcabcar.png",
    },

    {
      model: "F40PH-Peach-Flavored-Livery",
      year: "proposed",
      description:
        "This locomotive is a design that I developed for a potential commuter rail service",
      errors: "this doesnt look quite exactly like an f40ph",
      links: [
        "https://youtu.be/XO1fz32q3YU?si=1G_wV1_qYX3N8b8j",
        "https://youtu.be/03MIu4He8_U?si=gmYLm2xY4lloxb_O",
      ],
      imgLink: "/Peachliveryf40.png",
    },
    {
      model: "NCDOT-F40PH-Cabcar",
      year: "proposed",
      description:
        "This cabcar is a multilevel with the nose of an f40ph locomotive",
      errors:
        "I attempted to have this cabcar have high level and low level boarding options but the former isnt visible",
      links: [
        "https://youtu.be/XO1fz32q3YU?si=1G_wV1_qYX3N8b8j",
        "https://youtu.be/03MIu4He8_U?si=gmYLm2xY4lloxb_O",
      ],
      imgLink: "/NCDOTf40cabcar.png",
    },
    {
      model: "VRE-MPX-Cabcar-Cabcar",
      year: "proposed",
      description:
        "This cabcar is a gallery car with the nose of an MP36 locomotive",
      errors: "Doors arent visible for this cabcar",
      links: [
        "https://youtu.be/XO1fz32q3YU?si=1G_wV1_qYX3N8b8j",
        "https://youtu.be/03MIu4He8_U?si=gmYLm2xY4lloxb_O",
      ],
      imgLink: "/VREmpxcabcar.png",
    },
    {
      model: "Rail-Runner-F59PHI-cabcar",
      year: "proposed",
      description:
        "This cabcar has the body of a Bombardier car with an attempt at having the nose of an f59phi",
      errors: "Nose looks more like an MP36",
      links: [
        "https://youtu.be/XO1fz32q3YU?si=1G_wV1_qYX3N8b8j",
        "https://youtu.be/03MIu4He8_U?si=gmYLm2xY4lloxb_O",
      ],
      imgLink: "/RailRunnerf59phicabcar.png",
    },
    {
      model: "Tri-Rail-Brookville-Cabcar",
      year: "proposed",
      description:
        "This cabcar is a hyundair rotem car with the nose of an BL36 Brookville locomotive",
      errors: "Model nose resembles more of an f59phi",
      links: [
        "https://youtu.be/XO1fz32q3YU?si=1G_wV1_qYX3N8b8j",
        "https://youtu.be/03MIu4He8_U?si=gmYLm2xY4lloxb_O",
      ],
      imgLink: "/TriRailBrookvillecabcar.png",
    },
    {
      model: "Sounder-MPX-Cabcar",
      year: "proposed",
      description:
        "This cabcar is a Bombardier car with the nose of an MP36 locomotive",
      errors: "Doors arent visible for this cabcar",
      links: [
        "https://youtu.be/XO1fz32q3YU?si=1G_wV1_qYX3N8b8j",
        "https://youtu.be/03MIu4He8_U?si=gmYLm2xY4lloxb_O",
      ],
      imgLink: "/Soundermpxcabcar.png",
    },
    {
      model: "Sounder-f59phi-Cabcar",
      year: "proposed",
      description:
        "This cabcar is a Bombardier car with the nose of an f59phi locomotive",
      errors:
        "Cab should have 3 windows rather than just 2 and the carbody seems like its too long",
      links: [
        "https://youtu.be/XO1fz32q3YU?si=1G_wV1_qYX3N8b8j",
        "https://youtu.be/03MIu4He8_U?si=gmYLm2xY4lloxb_O",
      ],
      imgLink: "/Sounderf59phicabcar.png",
    },
    {
      model: "TREF40PHCabcar",
      year: "proposed",
      description:
        "This cabcar is a Bombardier car with the nose of an f40 locomotive",
      errors: "car seems well proportioned",
      links: [
        "https://youtu.be/XO1fz32q3YU?si=1G_wV1_qYX3N8b8j",
        "https://youtu.be/03MIu4He8_U?si=gmYLm2xY4lloxb_O",
      ],
      imgLink: "/TREf40cabcar.png",
    },
    {
      model: "VIA-Rail-Genesis-Engine-Cabcar",
      year: "proposed",
      description:
        "This cabcar is a Bombardier car with the nose of an GE Genesis Engine locomotive",
      errors: "Doors arent visible for this cabcar",
      links: [
        "https://youtu.be/XO1fz32q3YU?si=1G_wV1_qYX3N8b8j",
        "https://youtu.be/03MIu4He8_U?si=gmYLm2xY4lloxb_O",
      ],
      imgLink: "/VIAGenesiscabcar.png",
    },
    {
      model: "NJ-Transit-Cabcar",
      year: "proposed",
      description:
        "This cabcar is a multileve car with the nose of a gp40 locomotive",
      errors: "car seems well proportioned",
      links: [
        "https://youtu.be/XO1fz32q3YU?si=1G_wV1_qYX3N8b8j",
        "https://youtu.be/03MIu4He8_U?si=gmYLm2xY4lloxb_O",
      ],
      imgLink: "/NJTransitgp40cabcar.png",
    },
    {
      model: "MARC-F40-Cabcar",
      year: "proposed",
      description:
        "This cabcar is a Bombardier car with the nose of an GE Genesis Engine locomotive",
      errors: "Doors arent visible for this cabcar",
      links: [
        "https://youtu.be/XO1fz32q3YU?si=1G_wV1_qYX3N8b8j",
        "https://youtu.be/03MIu4He8_U?si=gmYLm2xY4lloxb_O",
      ],
      imgLink: "/MARCf40phcabcar.png",
    },
  ],
];

export const explanation = [
  "In the 1940s, U.S. passenger rail saw an enormous wartime surge as trains carried unprecedented numbers of civilians and troops, but the period also planted seeds of decline as the uncomfortable wartime experience and new transportation alternatives began to erode future ridership.",
  "In the 1950s, passenger rail in the United States entered a steep decline as automobiles, highways, and commercial aviation rapidly stole travelers, leading to falling ridership and significant reductions in passenger train service.",
  "In the 1960s, Passenger rail in the US and Canada experienced major decline as automobiles and airlines took market share. The remaining passenger trains were increasingly aged, with older rollingstock still in wide use. Railroads began retiring steam locomotives and dieselization was completed, but little new passenger equipment was invested in. In Canada, CN completed dieselization and experimented with new technologies like the Turbo train late in the decade.",
  "In the 1970s,The decade saw the creation of Amtrak (1971) in the US and the Rail Passenger Service Act, relieving freight railroads of passenger service responsibilities and consolidating leftover equipment. New purchases like Amtrak's Amfleet cars and double-deck Superliners improved some routes. In Canada, declining passenger use led to government intervention and VIA Rail was formed in 1978, inheriting a patchwork fleet of aged rollingstock. Efforts began to modernize equipment, but finances were tight.",
  "In the 1980s, Amtrak began to invest in modern passenger cars and rebuilt older equipment, notably expanding use of the Superliner fleet for western trains. Technological improvements were slow and underfunded, but the appearance of European-style cab cars and head-end power helped. VIA Rail in Canada retired troubled Turbo trains and introduced Bombardier LRC sets, continuing to update commuter and corridor fleets.",
  "Throughout the 1990s, Amtrak purchased new rollingstock for faster, more comfortable service, notable for introducing the GE Genesis locomotives and expanding usage of refurbished Amfleet cars. Commuter rail renaissance began in many US cities, with new bi-level and single-level cars and some new lines. In Canada, VIA Rail continued updating its fleet with newer cars and locomotives for intercity and corridor service.",
  "During the 2000s, Passenger rail in North America saw renewed federal investment. Amtrak received updated rollingstock, new locomotive orders, and both US and Canadian commuter rail agencies purchased modern push-pull sets and improved accessibility. VIA Rail replaced aging LRC and Heritage cars with newer equipment, and American commuter operators like Caltrain and Metrolink expanded their fleets.",
  "In the 2010s, Focus shifted to energy efficiency and Tier-4 emissions compliance, with agencies ordering new, cleaner diesel locomotives like the Siemens Charger and EMD F125. Amtrak expanded and refreshed corridor fleets. Canadian and US operators adopted more modern cars for regional and urban transit, enhancing accessibility, reliability, and passenger comfort.",
  "The 2020s has seen Passenger rail is undergoing a fleet transformation, replacing legacy equipment with new, energy-efficient locomotives and passenger cars. Battery, hybrid, and fully electric rollingstock are entering service for urban and commuter agencies. Both Amtrak and VIA Rail have ordered state-of-the-art equipment to replace last-century cars, focusing on speed, comfort, and sustainability.",
  "These are train design proposals that I have developed using ChatGPT, namely for incorporating locomotive designs onto existing cabcars. I was inspired by the Airo trainset by Siemens which utilizes the Siemens Charger locomotive nose for its cabcar. I also have included a peach flavored livery for a potential Metro Atlanta Commuter Rail service in these designs. The locomotive noses are designed to provide  additional safety features.",
];
