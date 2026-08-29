namespace TGC.RegardedStonks.Infrastructure.Seeding;

internal sealed record SeedCompany(string Name, string ShortName, string Description, float Price, int AvailableStocks);

/// <summary>
/// One-time seed source for TemplateStockCompany rows. Only consulted at startup to fill in
/// whatever is missing from the database - the database, not this list, is the source of truth
/// going forward (future edits happen via the admin view, not by editing this file).
/// </summary>
internal static class TemplateStockCompanySeedData
{
	internal static IReadOnlyList<SeedCompany> Companies { get; } = new[]
	{
		// Consumer tech / smart devices
		new SeedCompany("Orchard Technologies", "ORCT", "Designs consumer smart-home devices and the software platform that ties them together. Known for tightly integrated hardware/software and a subscription-based automation service, unlike competitors who sell hardware alone.", 182.50f, 500_000),
		new SeedCompany("Pixelforge Devices", "PXFG", "Makes budget-friendly smartphones and tablets for emerging markets. Uses a modular, repairable design that undercuts premium rivals selling sealed, non-repairable units.", 34.20f, 2_100_000),
		new SeedCompany("Cortex Wearables", "CTXW", "Produces health-tracking rings and bands built around clinical-grade sensors. Sells directly to hospitals for patient monitoring as well as consumers, unlike purely fitness-focused competitors.", 96.75f, 650_000),
		new SeedCompany("Lumina Displays", "LUMD", "Manufactures OLED and micro-LED display panels supplied to other electronics makers. A pure-play component supplier rather than a seller of finished consumer products.", 58.40f, 1_400_000),
		new SeedCompany("Nimbus Cloudworks", "NMBC", "Provides enterprise cloud storage and collaboration software. Differentiated by hybrid on-premises deployment options that larger cloud-only rivals don't offer.", 210.15f, 380_000),

		// EV / automotive
		new SeedCompany("Voltarc Motors", "VLTC", "Manufactures electric commercial vans and delivery trucks for last-mile logistics fleets. Focuses exclusively on commercial buyers, with a battery-swap network instead of fixed charging stations.", 64.10f, 1_200_000),
		new SeedCompany("Solstice Auto", "SLST", "Builds affordable electric sedans aimed at first-time EV buyers. Uses a simplified single-motor platform to undercut premium competitors on price.", 22.90f, 3_000_000),
		new SeedCompany("Ferrocraft Industries", "FRCI", "Produces internal-combustion pickup trucks and heavy-duty vehicles for industrial and agricultural buyers. Targets customers who need diesel range and towing capacity over EV convenience.", 88.60f, 900_000),
		new SeedCompany("Aeris Cycles", "ARSC", "Makes electric bicycles and micromobility scooters for urban commuters. Runs a citywide rental-fleet subscription business alongside direct retail sales.", 15.30f, 1_800_000),
		new SeedCompany("Titanwheel Corp", "TTWL", "Builds heavy machinery and off-road construction vehicles for mining and infrastructure projects. Serves industrial job sites rather than consumer roads.", 145.80f, 420_000),

		// Retail / e-commerce
		new SeedCompany("Meridian Marketplace", "MRDM", "Runs an online marketplace connecting small independent sellers to shoppers. Charges a smaller commission than larger platforms to attract niche merchants.", 71.25f, 1_600_000),
		new SeedCompany("Cobblestone Retail", "CBST", "Operates discount department stores in suburban and rural areas underserved by big-box chains. Uses a no-frills warehouse-style layout to keep prices low.", 28.45f, 2_400_000),
		new SeedCompany("Velvet Grove Boutiques", "VGRB", "Curates an online boutique for handmade and artisan goods. Emphasizes small-batch production over mass retail scale.", 19.60f, 750_000),
		new SeedCompany("Harborline Wholesale", "HRLW", "Distributes bulk goods to independent grocery stores. Differentiated by same-day regional delivery instead of relying on national warehousing.", 52.90f, 1_050_000),
		new SeedCompany("Everstock Supply", "EVRS", "Delivers household essentials like cleaning and paper goods on subscription. Competes on recurring auto-replenishment rather than one-off purchases.", 41.15f, 1_300_000),

		// Banking / financial services
		new SeedCompany("Northbridge Financial", "NBFC", "Runs a regional retail bank focused on small-business lending. Offers manual underwriting with local loan officers, unlike national banks' automated processes.", 91.75f, 800_000),
		new SeedCompany("Ashford Capital Group", "ASHC", "Provides wealth management and private banking for high-net-worth clients. Keeps research in-house rather than relying on outsourced advisory firms.", 315.40f, 220_000),
		new SeedCompany("Cavendish Trust Bank", "CVDT", "Specializes in trust and estate planning services. Focused on multi-generational wealth transfer rather than everyday consumer banking.", 128.20f, 340_000),
		new SeedCompany("Ridgeline Credit Union", "RDGC", "A member-owned credit union offering below-market auto and personal loans. Distinguished by profit-sharing dividends returned to its members.", 46.55f, 980_000),
		new SeedCompany("Sablecross Investments", "SBCX", "Provides index-fund and ETF products known for ultra-low expense ratios. Competes purely on cost rather than active fund management.", 67.80f, 1_150_000),

		// Energy / oil & renewables
		new SeedCompany("Ferncliff Energy", "FRCE", "Explores and drills for oil and gas in mature onshore fields. Avoids the higher cost and risk of deepwater offshore projects favored by larger rivals.", 58.90f, 1_700_000),
		new SeedCompany("Solvane Power", "SLVP", "Develops and operates utility-scale solar farms. Sells power via long-term contracts rather than offering residential rooftop installations.", 33.10f, 2_200_000),
		new SeedCompany("Windforge Renewables", "WNFR", "Manufactures and installs offshore wind turbines. Focuses on turbine hardware rather than operating the wind farms itself.", 74.65f, 1_050_000),
		new SeedCompany("Cinderpeak Coal", "CNDP", "Mines and processes coal for industrial and steelmaking clients. A legacy fuel supplier serving a shrinking but still-active industrial niche.", 12.40f, 3_500_000),
		new SeedCompany("Tidalrun Hydro", "TDRH", "Builds small-scale hydroelectric and tidal energy systems for coastal municipalities. Targets distributed micro-grids rather than large dam projects.", 45.20f, 1_400_000),

		// Pharma / healthcare
		new SeedCompany("Brightfield Pharmaceuticals", "BRFP", "Manufactures generic drugs that replicate medications coming off patent. Competes on volume and price rather than developing new compounds.", 39.75f, 2_600_000),
		new SeedCompany("Halcyon Biotech", "HLCB", "Researches early-stage gene therapies. Higher risk and reward than established pharma peers, with no approved products yet but several late-stage trials underway.", 84.30f, 600_000),
		new SeedCompany("Ironwood Medical Devices", "IRWD", "Builds surgical robotics and diagnostic imaging equipment for hospitals. A hardware and equipment maker rather than a drugmaker.", 198.60f, 340_000),
		new SeedCompany("Sagebrush Wellness", "SGBW", "Sells over-the-counter supplements and wellness products direct to consumers online. Bypasses traditional pharmacy retail channels entirely.", 24.10f, 1_900_000),
		new SeedCompany("Meadowlark Clinics", "MDLC", "Operates a chain of urgent-care clinics. A healthcare services provider rather than a drug or device manufacturer.", 61.85f, 1_050_000),

		// Food & beverage
		new SeedCompany("Copperkettle Beverages", "CPKB", "Produces craft soda and sparkling drinks using regional bottling plants instead of one centralized facility. Emphasizes local sourcing over national scale.", 27.35f, 1_750_000),
		new SeedCompany("Wheatfield Foods", "WHTF", "Makes packaged grain-based snacks and cereals. Positioned as the value/budget tier compared to premium organic competitors.", 18.90f, 2_900_000),
		new SeedCompany("Glacier Dairy Co-op", "GLDC", "A farmer-owned dairy cooperative producing milk and cheese. Profits are distributed back to member farms rather than outside shareholders.", 33.55f, 1_200_000),
		new SeedCompany("Emberlight Coffee Roasters", "EMBC", "Roasts specialty coffee and runs a café chain sourcing direct-trade beans. Competes on origin traceability rather than big-chain scale.", 56.20f, 980_000),
		new SeedCompany("Saltmarsh Seafood", "SLTM", "Runs sustainable aquaculture and seafood processing operations. Certified low-impact farming is its main differentiator versus wild-catch competitors.", 41.90f, 1_050_000),

		// Airlines / travel
		new SeedCompany("Skyharbor Airlines", "SKYH", "A regional short-haul carrier connecting smaller cities larger airlines have dropped. Uses smaller aircraft suited to lower-volume routes.", 29.80f, 2_050_000),
		new SeedCompany("Continental Voyage Air", "CVAR", "A long-haul international carrier positioned around premium cabin experience. Competes on comfort rather than budget fares.", 112.40f, 780_000),
		new SeedCompany("Budgetwing Airways", "BDGW", "An ultra-low-cost carrier charging a la carte for every add-on. Undercuts rivals purely on base fare.", 14.25f, 3_100_000),
		new SeedCompany("Harborcrest Cruises", "HBCC", "A mid-size cruise line focused on themed voyages like culinary and adventure travel. Avoids mega-ship mass tourism in favor of niche itineraries.", 68.75f, 950_000),
		new SeedCompany("Windrose Travel Group", "WNDT", "Runs an online travel booking and vacation package aggregator. A booking/services platform rather than an operator of planes or ships.", 51.60f, 1_150_000),

		// Telecom
		new SeedCompany("Copperline Communications", "CPLC", "Provides rural broadband and fiber infrastructure. Fills coverage gaps that national carriers find unprofitable to serve.", 37.45f, 1_900_000),
		new SeedCompany("Zenith Mobile Networks", "ZNTM", "Runs a nationwide prepaid wireless carrier. Competes on no-contract flexibility rather than bundled device financing.", 45.90f, 1_650_000),
		new SeedCompany("Farsight Satellite Communications", "FRST", "Provides satellite internet for remote and maritime locations. An alternative to ground-based fiber and cellular networks.", 89.30f, 700_000),
		new SeedCompany("Ashgrove Telecom Holdings", "ASGT", "Supplies legacy landline and enterprise VoIP services to business customers. A wireline specialist among mostly-wireless competitors.", 22.65f, 2_300_000),
		new SeedCompany("Beaconwave Networks", "BCNW", "Builds and leases cell tower infrastructure to other carriers. An infrastructure landlord rather than a subscriber-facing carrier.", 103.20f, 620_000),

		// Media / entertainment / streaming
		new SeedCompany("Silverscreen Studios", "SLVS", "A film and television production studio licensing content to multiple platforms. Doesn't operate its own streaming service, unlike vertically integrated rivals.", 47.80f, 1_400_000),
		new SeedCompany("Driftwave Streaming", "DRFW", "Runs an ad-supported free streaming service. Monetizes through advertising instead of subscription fees like most competitors.", 19.35f, 2_700_000),
		new SeedCompany("Cascade Publishing House", "CSDP", "A print and digital book publisher specializing in independent authors. Runs a low-barrier self-publishing imprint alongside traditional titles.", 26.70f, 1_550_000),
		new SeedCompany("Ironclad Esports", "IRNE", "Owns professional esports teams and organizes tournaments. Monetizes through sponsorships and broadcast rights rather than direct-to-consumer content.", 15.95f, 1_900_000),
		new SeedCompany("Marigold Animation Studio", "MRGA", "Produces family animated feature films and licensed merchandise. Built around a recurring merchandising and licensing revenue stream.", 63.40f, 900_000),

		// Real estate
		new SeedCompany("Brightgate Properties", "BRGP", "A commercial office REIT concentrated in secondary, mid-size cities. Avoids the expensive downtown cores of major metros that larger REITs chase.", 34.60f, 1_850_000),
		new SeedCompany("Fallowfield Residential Trust", "FLFR", "Builds and manages affordable workforce housing developments. A value-tier residential REIT distinct from luxury apartment operators.", 21.25f, 2_400_000),
		new SeedCompany("Cliffside Resort Holdings", "CLFS", "Owns and operates vacation resort properties. A hospitality-focused real estate operator rather than an office or residential landlord.", 58.90f, 980_000),
		new SeedCompany("Pinevale Industrial REIT", "PNVL", "Owns warehouse and logistics distribution centers leased to e-commerce fulfillment operators. Benefits directly from online retail growth.", 72.15f, 1_100_000),
		new SeedCompany("Thistledown Realty Group", "THSD", "Runs a residential brokerage and property management franchise network. An agent-services business rather than a property owner.", 16.80f, 1_950_000),

		// Mining / materials
		new SeedCompany("Graniteshore Resources", "GRNS", "Quarries iron ore and industrial-grade stone supplying steelmakers and construction firms.", 42.30f, 1_600_000),
		new SeedCompany("Emeraldvein Mining", "EMVM", "Extracts precious metals like gold and silver. A higher-margin but more price-volatile niche than bulk industrial minerals.", 96.50f, 720_000),
		new SeedCompany("Copperfield Extraction Co", "CPFX", "Mines copper feeding electronics and EV supply chains. Benefits directly from growing electrification demand.", 55.75f, 1_350_000),
		new SeedCompany("Duskstone Aggregates", "DSKA", "Produces sand, gravel, and cement aggregate for regional construction projects. A lower-margin, high-volume bulk materials business.", 24.90f, 2_050_000),
		new SeedCompany("Lodestar Rare Earths", "LDSR", "Processes rare-earth elements used in magnets and electronics. A specialty, strategic-materials niche with limited global competitors.", 118.60f, 480_000),

		// Aerospace / defense
		new SeedCompany("Falconridge Aerospace", "FLCA", "Manufactures commercial aircraft components like avionics and landing gear. Supplies multiple airframe makers rather than building whole planes.", 137.90f, 560_000),
		new SeedCompany("Ironhawk Defense Systems", "IRHD", "Builds military drones and unmanned systems. Focused on defense contracts rather than commercial aviation.", 89.45f, 700_000),
		new SeedCompany("Orbital Frontier Systems", "ORFS", "Provides satellite launch services using small-payload rockets. Competes on lower-cost, frequent launches versus heavy-lift providers.", 62.30f, 850_000),
		new SeedCompany("Vanguard Shipyards", "VNGS", "Builds and maintains naval vessels for government fleets. A shipbuilding specialist distinct from commercial shipping lines.", 104.75f, 610_000),
		new SeedCompany("Stratoline Avionics", "STRA", "Makes flight navigation and cockpit instrumentation systems. A systems supplier rather than an airframe or engine manufacturer.", 76.20f, 790_000),

		// Apparel / fashion
		new SeedCompany("Hearthwool Apparel", "HRTW", "Makes sustainably-sourced wool outdoor clothing. Differentiated by traceable-farm sourcing versus fast-fashion competitors.", 31.40f, 1_700_000),
		new SeedCompany("Cobalt Street Apparel", "CBLS", "Produces fast-turnaround, trend-driven streetwear. Restocks new designs weekly rather than following seasonal collections.", 22.55f, 2_100_000),
		new SeedCompany("Willowmere Textiles", "WLMT", "Manufactures bulk textiles and fabric supplied to other apparel brands. A materials supplier rather than a consumer-facing label.", 27.85f, 1_450_000),
		new SeedCompany("Aldergate Luxury Goods", "ALDG", "Crafts high-end leather goods and accessories. A premium/luxury-tier player competing on craftsmanship and exclusivity.", 245.60f, 260_000),
		new SeedCompany("Briarcliff Footwear", "BRCF", "Sells performance athletic shoes with a direct-to-consumer resole and recycling subscription. Unlike traditional retail-only competitors, it keeps customers past the first sale.", 38.70f, 1_550_000),

		// Gaming
		new SeedCompany("Pixellake Interactive", "PXLK", "A mobile free-to-play game studio monetizing through in-app purchases. Targets casual mobile audiences.", 29.15f, 2_300_000),
		new SeedCompany("Ironvale Game Studios", "IRVG", "Publishes premium, single-purchase console and PC titles with no microtransactions. Competes on traditional up-front game sales.", 54.80f, 1_150_000),
		new SeedCompany("Nightspire Entertainment", "NGTS", "Runs live-service multiplayer games with ongoing seasonal content subscriptions. A recurring-revenue model versus one-time purchases.", 71.35f, 950_000),
		new SeedCompany("Copperhelm Arcade Co", "CPHA", "Operates physical arcades and family entertainment centers. A location-based gaming business rather than a digital software publisher.", 17.60f, 1_800_000),
		new SeedCompany("Driftpeak VR Labs", "DRVR", "Builds virtual reality hardware and immersive experience software. Bets on VR/AR adoption ahead of mainstream competitors.", 43.90f, 1_250_000),

		// Fintech / payments
		new SeedCompany("Swiftledger Payments", "SWFL", "Processes merchant payments for small businesses. Undercuts larger processors with flat-rate, no-contract pricing.", 66.40f, 1_300_000),
		new SeedCompany("Coinbridge Digital Assets", "CNBR", "Runs a cryptocurrency exchange and custody platform. Serves retail crypto traders rather than traditional banking customers.", 38.25f, 2_050_000),
		new SeedCompany("Ledgerstone Analytics", "LDGS", "Sells B2B fraud-detection and risk-scoring software to banks. A software and data vendor rather than a consumer-facing payments company.", 92.70f, 640_000),
		new SeedCompany("Fernbank Micro-lending", "FRBM", "Offers short-term microloans to underbanked consumers. A specialty lender filling a niche traditional banks avoid.", 14.85f, 2_600_000),
		new SeedCompany("Quillmark Insurtech", "QLMK", "Sells on-demand short-term insurance policies through an app, like single-trip travel cover. An insurance-adjacent fintech rather than a full insurer.", 25.30f, 1_700_000),

		// Agriculture
		new SeedCompany("Sunfield Grain Co-op", "SNFG", "A grain farming cooperative supplying wheat and corn to food manufacturers. Member-owned, like a dairy co-op but for crops.", 21.60f, 2_400_000),
		new SeedCompany("Greenrow Hydroponics", "GRNH", "Runs indoor vertical-farming operations growing produce year-round near cities. Reduces transport distance versus traditional farms.", 47.95f, 1_150_000),
		new SeedCompany("Oakhollow Livestock", "OKHL", "Raises cattle and processes beef. A traditional livestock operation distinct from crop-focused agribusiness peers.", 33.20f, 1_650_000),
		new SeedCompany("Thistlefarm Organics", "THSF", "Grows and distributes certified organic produce. Commands premium pricing versus conventional agriculture.", 40.10f, 1_050_000),
		new SeedCompany("Brackenfield Agrotech", "BRKF", "Makes agricultural drones and precision-farming sensor equipment. A technology supplier to farms rather than a farm operator itself.", 58.55f, 890_000),

		// Insurance
		new SeedCompany("Harborlight Insurance Group", "HBLI", "Underwrites homeowners and property insurance in coastal, flood-prone regions. A specialty-risk insurer where major national insurers won't underwrite.", 49.80f, 1_250_000),
		new SeedCompany("Steadfast Life Assurance", "STDL", "Sells traditional life insurance and annuities. A conservative, long-duration insurer versus faster-growing insurtech rivals.", 87.40f, 700_000),
		new SeedCompany("Kestrel Auto Insurance", "KSTA", "Prices usage-based auto insurance from telematics driving data. Undercuts flat-rate competitors for safe drivers.", 32.65f, 1_600_000),
		new SeedCompany("Millbrook Reinsurance", "MLBR", "Reinsures risk for smaller insurance carriers. A behind-the-scenes wholesale insurer rather than a consumer-facing brand.", 156.90f, 380_000),
		new SeedCompany("Fenwick Health Cover", "FNWH", "Sells supplemental health insurance for gig and self-employed workers. Fills a gap left by employer-sponsored plans.", 28.40f, 1_450_000),

		// Logistics / shipping
		new SeedCompany("Portside Container Lines", "PTSD", "Operates transoceanic container shipping routes. A heavy-freight ocean carrier serving global trade lanes.", 44.75f, 1_700_000),
		new SeedCompany("Railcrest Freight", "RLCF", "Runs long-haul rail freight for bulk industrial goods. A lower-cost alternative to trucking for cross-country transport.", 63.20f, 1_050_000),
		new SeedCompany("Fleetwing Trucking", "FLTW", "Provides regional trucking and last-mile ground delivery. Faster but higher-cost than rail for shorter distances.", 26.90f, 1_900_000),
		new SeedCompany("Anchorpoint Warehousing", "ANCW", "Offers third-party warehousing and order-fulfillment services for online retailers. A storage and fulfillment specialist rather than a carrier.", 35.55f, 1_350_000),
		new SeedCompany("Skybound Air Cargo", "SKBC", "Runs dedicated air freight for time-sensitive and perishable goods. The fastest, but most expensive, shipping tier versus sea/rail/truck peers.", 71.10f, 890_000),

		// Semiconductors
		new SeedCompany("Quartzcore Semiconductor", "QRTZ", "Designs general-purpose CPUs for data centers. Competes on raw compute performance for cloud providers.", 245.30f, 480_000),
		new SeedCompany("Brightlattice Chips", "BRLC", "Makes low-power microcontrollers for IoT and embedded devices. Optimized for battery life over raw performance.", 68.90f, 1_150_000),
		new SeedCompany("Siliconvale Foundries", "SLCV", "Runs contract chip manufacturing for other companies' designs. A pure foundry rather than a company with its own chip product line.", 189.45f, 560_000),
		new SeedCompany("Ferroelectric Devices Inc", "FRDI", "Produces specialty non-volatile memory chips for industrial and automotive applications. A memory-niche player versus general-purpose chipmakers.", 52.80f, 1_050_000),
		new SeedCompany("Neuroflux AI Chips", "NRFX", "Designs dedicated AI and machine-learning accelerator chips. Rides the AI compute demand wave versus general CPU/GPU makers.", 312.60f, 340_000)
	};
}
