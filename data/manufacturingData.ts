export interface Product {
  id: string;
  name: string;
  partNumber: string;
  category: 'components' | 'metals' | 'packaging' | 'electrical' | 'hardware' | 'machinery' | 'raw-materials' | 'custom';
  categoryLabel: string;
  shortDesc: string;
  fullDesc: string;
  specifications: {
    material: string;
    tolerance: string;
    standards: string;
    surfaceFinish: string;
    operatingTemp?: string;
    loadCapacity?: string;
  };
  moq: string;
  leadTime: string;
  packagingUnit: string;
  image: string;
  compliance: string[];
}

export interface IndustrySector {
  id: string;
  name: string;
  tagline: string;
  description: string;
  keyProductsSupplied: string[];
  operationalBenefits: string[];
  image: string;
}

export interface ManufacturingPillar {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  capacityMetric: string;
  machineryEmployed: string[];
  image: string;
}

export interface QualityStep {
  step: string;
  name: string;
  stage: string;
  description: string;
  instrumentsUsed: string;
  benchmarkStandard: string;
}

export interface FacilityInfrastructure {
  id: string;
  name: string;
  category: string;
  floorArea: string;
  specifications: string[];
  description: string;
  image: string;
}

export interface TechnicalDocument {
  id: string;
  title: string;
  docCode: string;
  category: 'catalogue' | 'tds' | 'quality' | 'wholesale';
  categoryLabel: string;
  fileFormat: string;
  fileSize: string;
  pages: number;
  description: string;
}

export interface NavigationTile {
  num: string;
  sysCode: string;
  title: string;
  path: string;
  desc: string;
  iconName: string;
}

// =========================================================================
// 1. PRODUCT CATALOGUE (Comprehensive 10 B2B Industrial Products)
// =========================================================================
export const productsData: Product[] = [
  {
    id: 'cnc-precision-flange',
    name: 'Heavy-Duty Forged Steel Weld-Neck Pipe Flange',
    partNumber: 'MRD-FLG-304-DN150',
    category: 'components',
    categoryLabel: 'Industrial Components',
    shortDesc: 'Forged high-pressure carbon and stainless steel flanges engineered for petrochemical, steam, and hydraulic pipeline manifolds.',
    fullDesc: 'Manufactured through closed-die precision forging and CNC multi-axis turning. Meets ASME B16.5 and EN 1092-1 pressure ratings from Class 150 up to Class 2500 with certified ultrasonic defect analysis.',
    specifications: {
      material: 'ASTM A105 Carbon Steel / ASTM A182 F316L Stainless',
      tolerance: '±0.05 mm (ISO 2768-m)',
      standards: 'ASME B16.5, DIN 2633, EN 1092-1',
      surfaceFinish: 'Serrated Spiral 125-250 Ra',
      operatingTemp: '-29°C to 425°C',
      loadCapacity: 'Rating Class 150 – 2500 PSI'
    },
    moq: '50 Units (Bulk Crate Packing)',
    leadTime: '10–14 Business Days',
    packagingUnit: 'Heat-Treated Wooden Pallet (ISPM-15 Certified)',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=85',
    compliance: ['ISO 9001:2015 Spec', 'Mill Test Certificate EN 10204 3.1', 'NACE MR0175']
  },
  {
    id: 'structural-steel-h-beam',
    name: 'Hot-Rolled Structural Steel Universal Beams & Columns',
    partNumber: 'MRD-BEAM-UB-305',
    category: 'metals',
    categoryLabel: 'Metal Products & Building Materials',
    shortDesc: 'High-yield structural steel I and H-beams for commercial infrastructure, industrial sheds, and heavy crane gantries.',
    fullDesc: 'Manufactured under continuous rolling mill conditions with precise cross-sectional dimensional uniformity. Grade S355JR and ASTM A572 Grade 50 certified for high tensile strength and seismic resilience.',
    specifications: {
      material: 'Structural Steel S275JR / S355JR / ASTM A572 Gr. 50',
      tolerance: 'EN 10034 / ASTM A6',
      standards: 'EN 10025-2 / IS 2062 Grade E350',
      surfaceFinish: 'Shot-Blasted SA 2.5 + Red Oxide Primer',
      loadCapacity: 'Yield Strength 355 MPa Minimum'
    },
    moq: '10 Metric Tonnes (Bundled in Strapped Packs)',
    leadTime: '7–12 Business Days',
    packagingUnit: 'Steel Strapped Bundles with Lifting Slings',
    image: 'https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=1200&q=85',
    compliance: ['CE Certified EN 10025', 'NDT Ultrasonic Tested', 'MTC 3.1 Attached']
  },
  {
    id: 'corrugated-heavy-packaging',
    name: 'Industrial Triple-Wall Heavy-Duty Export Shipping Boxes',
    partNumber: 'MRD-PKG-TW-1200',
    category: 'packaging',
    categoryLabel: 'Packaging Materials',
    shortDesc: 'Engineered multi-layer corrugated containers with exceptional stacking strength and humidity-barrier treatment.',
    fullDesc: 'Custom fabricated for machinery export, automotive components, and heavy chemical barrels. Features 1100 GSM Virgin Kraft linerboard with water-resistant resin adhesive and internal timber battens.',
    specifications: {
      material: 'AAA Flute Triple-Wall Virgin Kraft Liner (1100 GSM)',
      tolerance: '±1.5 mm die-cut accuracy',
      standards: 'FEFCO 0201 / TAPPI T-810 Bursting Standards',
      surfaceFinish: 'Moisture-Resistant Hydrophobic Coating',
      loadCapacity: 'Stacking Strength up to 1,200 kg'
    },
    moq: '500 Units (Flat-Packed on Pallets)',
    leadTime: '5–7 Business Days',
    packagingUnit: 'Shrink-Wrapped Bundles of 25 Units',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=85',
    compliance: ['FSC Certified Woodfiber', 'RoHS / REACH Compliant', 'ISTA 3A Drop Tested']
  },
  {
    id: 'modular-busway-switchgear',
    name: 'Compact Copper Conductor Industrial Busduct Power Busway',
    partNumber: 'MRD-ELE-BUS-2500A',
    category: 'electrical',
    categoryLabel: 'Electrical Products',
    shortDesc: 'Sandwich-type low-impedance electrical busway system for factory power distribution, data centers, and heavy processing plants.',
    fullDesc: '99.99% ETP electrolytic grade copper conductors insulated with Class F epoxy film. Encased in extruded aluminum alloy housing that provides superior heat dissipation and natural earth return.',
    specifications: {
      material: 'Electrolytic Copper (99.99% IACS) + Al Extrusion Housing',
      tolerance: 'IEC 61439-6 Compliant',
      standards: 'IEC 61439-1 & 6, UL 857, NEMA BU-1',
      surfaceFinish: 'Electro-Tin / Silver Plated Joint Connections',
      operatingTemp: '-15°C to 55°C Ambient',
      loadCapacity: 'Current Rating 630A to 5000A (IP55/IP66)'
    },
    moq: '1 Complete Feeder Run / Minimum 30 Meters',
    leadTime: '15–20 Business Days',
    packagingUnit: 'Custom Crating with Humidity Desiccants',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=85',
    compliance: ['CPRI Type-Tested', 'IP66 Ingress Protection', 'ASTA Certified']
  },
  {
    id: 'high-tensile-fasteners',
    name: 'Grade 8.8 & 10.9 Structural Hex Bolts with Nuts & Washers',
    partNumber: 'MRD-FST-88-M24',
    category: 'hardware',
    categoryLabel: 'Hardware & Fittings',
    shortDesc: 'Cold-forged high-strength structural bolts for steel bridges, plant machinery, and tower foundation assemblies.',
    fullDesc: 'Manufactured through multi-station high-speed cold headers followed by continuous quench-and-temper heat treatment. Available with hot-dip galvanized or Geomet zinc-flake anti-corrosion finishes exceeding 1,000 salt-spray hours.',
    specifications: {
      material: 'Alloy Steel 40Cr / 42CrMo Quenched & Tempered',
      tolerance: 'ISO 965-2 Class 6g/6H',
      standards: 'DIN 931 / ISO 4014 / ASTM A325',
      surfaceFinish: 'Hot-Dip Galvanized (HDG) / Zinc-Flake Dacromet',
      loadCapacity: 'Tensile Strength 800–1040 MPa'
    },
    moq: '1,000 Pieces (Packaged in 25 kg Canvas Polybags)',
    leadTime: '3–5 Business Days',
    packagingUnit: '25 kg Bags on Euro Pallets (1 MT / Pallet)',
    image: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=1200&q=85',
    compliance: ['EN 14399 Structural Bolting', 'Proof Load Tested', 'Salt Spray 1000h ASTM B117']
  },
  {
    id: 'industrial-planetary-gearbox',
    name: 'High-Torque Inline Planetary Gearbox & Speed Reducer',
    partNumber: 'MRD-MCH-PLN-950',
    category: 'machinery',
    categoryLabel: 'Machinery & Equipment',
    shortDesc: 'Rigid cast-iron industrial reducers designed for continuous duty in conveyor drives, bucket elevators, and bulk agitators.',
    fullDesc: 'Carburized and ground alloy steel gears (DIN Class 6 accuracy) offering over 96% mechanical efficiency per reduction stage. Equipped with synthetic lubricant and Viton lip seals for zero maintenance in dusty environments.',
    specifications: {
      material: 'Spheroidal Graphite Iron GGG40 Housing + 18CrNiMo7-6 Gears',
      tolerance: 'Gear Tooth Quality Class DIN 6',
      standards: 'AGMA 6013 / ISO 6336 Calculation Standards',
      surfaceFinish: 'Industrial Epoxy Polyurethane 240 Micron',
      operatingTemp: '-20°C to 80°C',
      loadCapacity: 'Nominal Torque Rating 1,500 Nm to 45,000 Nm'
    },
    moq: '2 Units (Custom Ratio Configuration Available)',
    leadTime: '18–24 Business Days',
    packagingUnit: 'Reinforced Plywood Box with Anti-Corrosion Wrap',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=85',
    compliance: ['ISO 6336 Gear Fatigue Certified', '100% Run-Tested on Load Rig']
  },
  {
    id: 'cold-rolled-steel-coils',
    name: 'Prime Cold-Rolled Full-Hard & Annealed Steel Coils',
    partNumber: 'MRD-RAW-CRC-1250',
    category: 'raw-materials',
    categoryLabel: 'Raw Materials & Metallurgy',
    shortDesc: 'Uniform gauge carbon steel coils for stamping, automotive pressings, electrical enclosures, and tube fabrication.',
    fullDesc: 'Continuous pickled and cold-reduced coils with tight thickness tolerances and superior drawing capability. Available with light electrostatic oiling or chemical passivation to prevent transit oxidation.',
    specifications: {
      material: 'CRCA Steel SPCC / DC01 / SAE 1008',
      tolerance: 'Thickness ±0.02 mm (EN 10131)',
      standards: 'JIS G3141, EN 10130, ASTM A1008',
      surfaceFinish: 'Bright Matte / Light Oiled 0.5–1.0 g/m²',
      loadCapacity: 'Yield Strength 140–280 MPa'
    },
    moq: '20 Metric Tonnes (Standard Mill Coil Size)',
    leadTime: '10–15 Business Days',
    packagingUnit: 'Eye-to-Sky Metal Wrapped Coil on Wooden Skid',
    image: 'https://images.unsplash.com/photo-1535813547-99c456a41d4a?auto=format&fit=crop&w=1200&q=85',
    compliance: ['Mill Test Certificate 3.1', 'Spark Emission Spectrometry Verified']
  },
  {
    id: 'custom-injection-molded-parts',
    name: 'Precision Engineered Polymer & Polycarbonate Housings',
    partNumber: 'MRD-CST-PLM-800',
    category: 'custom',
    categoryLabel: 'Custom-Manufactured Products',
    shortDesc: 'Custom OEM thermoplastic housings, connector seals, and structural brackets engineered to client CAD/CAM tooling.',
    fullDesc: 'Produced on 250T to 1200T high-speed servo-electric injection molding presses. We accommodate glass-filled nylon (PA66-GF30), flame-retardant ABS (UL94-V0), and UV-stabilized polycarbonate for harsh environments.',
    specifications: {
      material: 'Nylon PA66-GF30 / Polycarbonate / Flame-Retardant ABS',
      tolerance: '±0.03 mm (DIN 16901-110)',
      standards: 'UL94-V0 Flame Retardancy, ISO 20457',
      surfaceFinish: 'SPI-A2 High Polish / Mold-Tech VDI Texture',
      operatingTemp: '-40°C to 135°C',
      loadCapacity: 'Impact Resistance IZOD 12 kJ/m²'
    },
    moq: '2,500 Units (Following Mold Qualification)',
    leadTime: '14–21 Business Days',
    packagingUnit: 'Layer-Separated Anti-Static Bulk Cartons',
    image: 'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?auto=format&fit=crop&w=1200&q=85',
    compliance: ['PPAP Level 3 Documented', 'Automotive IATF 16949 Standards']
  },
  {
    id: 'cast-steel-industrial-valves',
    name: 'Class 300 Cast Steel Flanged Ball Valve with Actuator Flange',
    partNumber: 'MRD-VLV-BL-300-DN80',
    category: 'components',
    categoryLabel: 'Industrial Components',
    shortDesc: 'Two-piece full-bore cast carbon steel ball valves for steam, condensate, cooling water, and fuel oil management.',
    fullDesc: 'Equipped with blowout-proof stems, firesafe graphite packing, and ISO 5211 top mounting pads for direct pneumatic or electric actuation. Hydrostatically pressure tested to API 598 standards.',
    specifications: {
      material: 'ASTM A216 WCB Cast Carbon Steel + SS316 Ball & Stem',
      tolerance: 'API 6D / ASME B16.34',
      standards: 'API 6D, API 607 (Fire-Safe), BS 5351',
      surfaceFinish: 'High-Temperature Silicone Aluminum Enamel',
      operatingTemp: '-20°C to 200°C',
      loadCapacity: 'Working Pressure 51.7 Bar @ 38°C (Class 300)'
    },
    moq: '25 Units (Supplied with Hand Lever / Actuator Mount)',
    leadTime: '10–14 Business Days',
    packagingUnit: 'Individual Foam Padding in Plywood Export Crates',
    image: 'https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&fit=crop&w=1200&q=85',
    compliance: ['API 598 Hydrostatic Certified', 'PED 2014/68/EU Module H']
  },
  {
    id: 'heavy-duty-storage-racks',
    name: 'Selective Heavy-Duty Pallet Racking Beams & Upright Frames',
    partNumber: 'MRD-WHS-RCK-3500',
    category: 'packaging',
    categoryLabel: 'Wholesale & Logistics Supplies',
    shortDesc: 'Certified high-load warehouse storage racking frames and box beams for fork-truck distribution facilities.',
    fullDesc: 'Cold-formed from high-yield structural coil with 75mm beam adjustment pitch. Tested according to EN 15512 and FEM 10.2.02 storage equipment codes with certified beam deflection limits of L/200 under full load.',
    specifications: {
      material: 'High-Strength Cold-Formed Steel S355MC',
      tolerance: 'EN 15512 Tolerance Classes',
      standards: 'SEMA Codes, FEM 10.2.02, EN 15620',
      surfaceFinish: 'Electrostatic Polyester Powder Coated (RAL 5010 / 2004)',
      loadCapacity: 'Frame Capacity up to 18,000 kg / Beam Pair up to 3,500 kg'
    },
    moq: '5 Bays / 50 Running Meters',
    leadTime: '12–16 Business Days',
    packagingUnit: 'Strapped Bundle Packs with Floor Anchor Fasteners',
    image: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=1200&q=85',
    compliance: ['EN 15512 Structural Verification', 'TUV Nord Type Approved']
  }
];

// =========================================================================
// 2. INDUSTRIES SERVED (10 B2B Sectors)
// =========================================================================
export const industriesData: IndustrySector[] = [
  {
    id: 'construction-infra',
    name: 'Construction & Civil Infrastructure',
    tagline: 'Structural Steel, Heavy Fasteners & Foundation Systems',
    description: 'Providing structural universal columns, Grade 8.8 bolting kits, conduit busways, and custom steel plates to tier-1 civil contractors building bridges, industrial parks, and high-rise commercial structures.',
    keyProductsSupplied: ['Hot-Rolled H-Beams', 'Structural Hex Fasteners', 'Pre-Cast Anchor Plates', 'Grounding Busbars'],
    operationalBenefits: ['Mill Test Certificates on Every Heat Lot', 'Bulk Staged Deliveries to Active Construction Sites', 'Custom Pre-Cut Tolerances for Faster Assembly'],
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=85'
  },
  {
    id: 'automotive-heavy-vehicles',
    name: 'Automotive & Commercial Vehicles',
    tagline: 'High-Precision CNC Components & Molded Enclosures',
    description: 'Supplying precision turned bushings, cold-forged drivetrain hardware, stamping coils, and glass-filled polymer brackets directly to tier-1 automotive component vendors and commercial vehicle assembly plants.',
    keyProductsSupplied: ['Forged Engine Flanges', 'Drivetrain Fasteners', 'Injection-Molded Housings', 'Cold-Rolled Coil Strips'],
    operationalBenefits: ['Zero-Defect PPAP Documentation', 'Just-In-Time (JIT) Kanban Delivery Protocols', 'Full Traceability from Ingot to Finished Part'],
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=85'
  },
  {
    id: 'electrical-power-distribution',
    name: 'Electrical & Power Infrastructure',
    tagline: 'Copper Busducts, Switchgear Enclosures & Terminals',
    description: 'Engineering low-impedance sandwich busway trunks, silver-plated electrical connectors, and IP66 rated junction housings for regional electrical utilities, data centers, and heavy processing facilities.',
    keyProductsSupplied: ['Modular Copper Busways', 'Distribution Switchgear', 'Insulated Busbars', 'High-Temp Cable Trays'],
    operationalBenefits: ['ASTA and CPRI Short-Circuit Tested', 'High Thermal Dissipation Aluminum Housings', 'Custom Feeder Routing Layouts Pre-Engineered'],
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=85'
  },
  {
    id: 'packaging-wholesale-logistics',
    name: 'Packaging, Freight & Logistics',
    tagline: 'Triple-Wall Export Crates & Automated Pallet Racks',
    description: 'Supplying national third-party logistics (3PL) warehouses, e-commerce fulfillment hubs, and heavy equipment freight forwarders with heavy-duty corrugated cartons, racking beams, and cargo strapping hardware.',
    keyProductsSupplied: ['Triple-Wall Export Boxes', 'Selective Pallet Racking', 'Polymer Packaging Straps', 'Heavy Storage Bins'],
    operationalBenefits: ['Bulk Volume Factory Wholesale Rebates', 'Pre-Tested Compression Stacking up to 1,200 kg', 'Flat-Packed Modular Transit Efficiency'],
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=85'
  },
  {
    id: 'industrial-machinery-oem',
    name: 'Industrial Machinery & Equipment OEMs',
    tagline: 'Planetary Reducers, Valves & Custom Machined Blocks',
    description: 'Partnering with capital equipment manufacturers to supply high-torque gearboxes, hydraulic cast valves, precision ground gears, and heavy fabricated sub-bases for production machinery.',
    keyProductsSupplied: ['Inline Planetary Reducers', 'Flanged Cast Ball Valves', 'Custom CNC Manifolds', 'Machined Cast Iron Housings'],
    operationalBenefits: ['100% Load-Bench Run Testing', 'Tailored Gear Ratios and Mounting Dimensions', 'Consignment Inventory Agreements Available'],
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=85'
  },
  {
    id: 'retail-hardware-distribution',
    name: 'Retail Hardware & Trade Distribution',
    tagline: 'Packaged Bulk Fasteners, Fittings & Tooling Hardware',
    description: 'Providing industrial supply distributors and regional hardware chains with pre-packaged retail-ready fastener assortments, brass fittings, and pipe connectors in barcode-labeled wholesale cartons.',
    keyProductsSupplied: ['Packaged Bolt & Nut Sets', 'Galvanized Pipe Fittings', 'Industrial Valves & Cocks', 'Corrugated Shipping Packs'],
    operationalBenefits: ['Retail-Ready EAN/UPC Barcoding', 'Steady Supply Buffer & Guaranteed Restocking', 'Credit Line Support for Qualified Wholesalers'],
    image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1200&q=85'
  },
  {
    id: 'food-processing-fmcg',
    name: 'Food Processing & Clean Manufacturing',
    tagline: 'Sanitary Grade Valves, Stainless Tanks & Bulk Packaging',
    description: 'Manufacturing electro-polished 316L stainless steel pipe spools, sanitary butterfly valves, clean storage vessels, and food-contact certified outer corrugated cartons for dairy, beverage, and confectionery processors.',
    keyProductsSupplied: ['SS316 Sanitary Pipe Spools', 'Triclamp Valve Manifolds', 'Food-Grade Export Boxes', 'Stainless Support Frames'],
    operationalBenefits: ['FDA and 3A Sanitary Finish Standards', 'Surface Roughness Ra < 0.4 µm Electro-Polished', 'CIP / SIP Cleaning Compatibility'],
    image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1200&q=85'
  },
  {
    id: 'furniture-commercial-interiors',
    name: 'Furniture, Joinery & Hardware',
    tagline: 'Precision Metal Brackets, Tubing & Stamped Hardware',
    description: 'Fabricating laser-cut steel architectural frames, powder-coated furniture brackets, and precision hardware slides for commercial office furniture manufacturers and modular architectural fitters.',
    keyProductsSupplied: ['Cold-Rolled Rectangular Tubes', 'Architectural Steel Brackets', 'Drawer Slides & Hinges', 'Custom Threaded Inserts'],
    operationalBenefits: ['Consistent Tight Radius Bending', 'Architectural Grade TGIC Powder Finishes', 'Custom Color Matching to Project Specifications'],
    image: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=1200&q=85'
  },
  {
    id: 'textiles-garment-manufacturing',
    name: 'Textiles & Industrial Garments',
    tagline: 'Fabrication Rollers, Steam Valves & Conveyor Racks',
    description: 'Supplying heavy textile processing mills with dynamic balanced stainless rollers, steam control valves, motorized fabric roll conveyors, and high-capacity storage racks.',
    keyProductsSupplied: ['Precision SS Drying Cylinders', 'Pneumatic Steam Valves', 'Roll Storage A-Frames', 'Industrial Packaging Bags'],
    operationalBenefits: ['Dynamic Balancing to ISO 1940 Grade 2.5', 'Corrosion-Resistant Coatings for Dyeing Vats', 'High Cycle Reliability Under Continuous Heat'],
    image: 'https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&w=1200&q=85'
  },
  {
    id: 'institutional-procurement',
    name: 'Institutional & Government Procurement',
    tagline: 'Certified Industrial Supplies, Steel & Electrical Runs',
    description: 'Servicing municipal utilities, public transport authorities, and state-backed defense contractors requiring strict adherence to national procurement tenders, testing protocols, and compliance certifications.',
    keyProductsSupplied: ['High-Tonnage Structural Beams', 'Substation Busways', 'Heavy Security Hardware', 'Specification Fasteners'],
    operationalBenefits: ['Full Third-Party Inspection (TPI) Support (TUV/Bureau Veritas)', 'Rigorous Audit-Ready Documentation Sets', 'Bonded Warehouse and Staged Tender Deliveries'],
    image: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=1200&q=85'
  }
];

// =========================================================================
// 3. MANUFACTURING PILLARS & CAPABILITIES
// =========================================================================
export const manufacturingCapabilities: ManufacturingPillar[] = [
  {
    id: 'cnc-machining',
    title: 'CNC Multi-Axis Precision Machining',
    subtitle: 'Micro-Tolerance Milling & Turning Cells',
    description: 'Equipped with 3-axis, 4-axis, and 5-axis DMG MORI and Mazak machining centers capable of handling titanium, duplex stainless, forging blanks, and exotic nickel alloys with tolerances down to ±0.005 mm.',
    capacityMetric: '45,000 Machining Hours / Month',
    machineryEmployed: ['5-Axis High-Speed VMC Centers', 'Twin-Spindle CNC Lathes with Live Tooling', 'Coordinate Measuring Machines (Zeiss CMM)', 'Automated Robotic Part Feeders'],
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=85'
  },
  {
    id: 'metal-fabrication',
    title: 'Automated Metal Fabrication & Welding',
    subtitle: 'Robotic Fiber Lasers & Heavy Bending Presses',
    description: 'Operating 15 kW Trumpf fiber laser cutters, 600-ton hydraulic CNC press brakes, and automated robotic MIG/TIG welding cells capable of processing up to 32 mm heavy steel plate with zero distortion.',
    capacityMetric: '2,500 Metric Tonnes / Month',
    machineryEmployed: ['15 kW Trumpf Fiber Lasers', '600-Ton CNC Synchronized Press Brakes', 'KUKA Robotic 6-Axis Welding Bays', 'Shot-Blasting & Automated Primer Paint Line'],
    image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=1200&q=85'
  },
  {
    id: 'polymer-injection',
    title: 'Precision Polymer Injection Molding',
    subtitle: 'High-Tonnage Servo-Electric Presses',
    description: 'Clean industrial injection facility featuring 250T to 1200T Engel and Haitian all-electric presses, equipped with automated desiccant dryers, hot-runner control, and automated sprue pickers.',
    capacityMetric: '1.2 Million Molded Parts / Month',
    machineryEmployed: ['1200T Servo-Electric Injection Presses', 'Multi-Cavity Hot-Runner Tooling Bays', 'Automated Material Vacuum Conveyors', 'Ultrasonic Plastic Welding Cells'],
    image: 'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?auto=format&fit=crop&w=1200&q=85'
  },
  {
    id: 'busway-electrical',
    title: 'Electrical Busway & Power Fabrication',
    subtitle: 'Electrolytic Copper Extrusion & Epoxy Insulation',
    description: 'Dedicated automated production lines for electrolytic copper sandwich busway systems, featuring automated electrostatic fluid-bed epoxy coating, silver electroplating, and helium leak testing.',
    capacityMetric: '12,000 Meters Busduct / Month',
    machineryEmployed: ['Automated Copper Slitting & Straightening Line', 'Electrostatic Fluid-Bed Insulation Line', 'Automated Silver Electroplating Tanks', '50 kA Short-Circuit Simulation Rig'],
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=85'
  },
  {
    id: 'bulk-packaging-conversion',
    title: 'Heavy Packaging & Corrugated Conversion',
    subtitle: 'Triple-Wall High-Strength Fluting Lines',
    description: 'High-speed corrugating corrugator line producing high-burst AAA-flute sheets, automated rotary die-cutters, and multi-color flexographic printing machines for export machinery boxes.',
    capacityMetric: '8,000 Metric Tonnes Board / Month',
    machineryEmployed: ['2.5m Wide High-Speed Corrugator Line', '4-Color High-Definition Flexo Die Cutters', 'Heavy-Duty Stitching & Hot-Melt Gluers', 'Automated Strapping & Palletizing Cells'],
    image: 'https://images.unsplash.com/photo-1530587191325-3db32d826c18?auto=format&fit=crop&w=1200&q=85'
  },
  {
    id: 'tooling-prototyping',
    title: 'Engineering Tooling & Rapid Prototyping',
    subtitle: 'CAD/CAM Design, Mold Making & FEA Simulation',
    description: 'Our in-house toolroom designs and fabricates progressive stamping dies, injection molds, and custom machining fixtures with integrated Finite Element Analysis (FEA) and mold-flow optimization.',
    capacityMetric: '35 New Toolsets / Month',
    machineryEmployed: ['Charmilles Wire-Cut & Sinker EDM Machines', 'High-Speed Graphite CNC Milling Centers', 'SolidWorks & MasterCAM Enterprise Stations', '3D Industrial Optical Scanners'],
    image: 'https://images.unsplash.com/photo-1581092335878-2d9ff86ca2bf?auto=format&fit=crop&w=1200&q=85'
  }
];

// =========================================================================
// 4. MANUFACTURING WORKFLOW (7 Mandatory Stages)
// =========================================================================
export const manufacturingWorkflow = [
  {
    step: '01',
    title: 'Requirement Understanding & Engineering Review',
    desc: 'Deep evaluation of customer technical drawings, tolerances, alloy grades, annual volume forecasts, and regulatory certification requirements by our application engineering team.'
  },
  {
    step: '02',
    title: 'Material Sourcing & Metallurgy Verification',
    desc: 'Procurement from audited primary steel mills and polymer synthesizers with optical emission spectrometry, tensile validation, and raw material heat traceability.'
  },
  {
    step: '03',
    title: 'Production Planning & CAM Simulation',
    desc: 'Finite element simulation, NC tool-path optimization, tooling fabrication, and ERP-driven scheduling across our specialized manufacturing workcenters.'
  },
  {
    step: '04',
    title: 'High-Precision Manufacturing & Assembly',
    desc: 'Execution through multi-axis CNC machining, automated fiber laser cutting, robotic welding, and automated component integration under continuous statistical process control (SPC).'
  },
  {
    step: '05',
    title: 'Multi-Stage Quality Inspection',
    desc: 'Rigorous physical and non-destructive testing including 3D Zeiss CMM verification, surface roughness Ra checks, ultrasonic flaw detection, and hydrostatic pressure testing.'
  },
  {
    step: '06',
    title: 'Protective Packaging & Labeling',
    desc: 'Vapor corrosion inhibitor (VCI) preservation, moisture-proof barrier bagging, ISPM-15 heat-treated pallet crating, and GS1-compliant wholesale barcode labelling.'
  },
  {
    step: '07',
    title: 'Logistics Coordination & Dispatch',
    desc: 'Automated loading dock stuffing, intermodal rail and ocean container coordination, real-time GPS freight tracking, and digital dispatch documentation delivery.'
  }
];

// =========================================================================
// 5. QUALITY ASSURANCE INSPECTION STAGES
// =========================================================================
export const qualityStages: QualityStep[] = [
  {
    step: 'STAGE 1',
    name: 'Raw Material Chemical & Tensile Inspection',
    stage: 'Incoming Ingot / Sheet / Resin Receipt',
    description: 'Spark optical emission spectrometry confirms elemental alloy composition (Carbon, Chromium, Nickel, Molybdenum). Tensile testing rigs verify yield strength and elongation percentages against ASTM/EN specifications.',
    instrumentsUsed: 'Spectro Analytical Spark Spectrometer & 100-Ton Universal Tensile Tester',
    benchmarkStandard: 'ASTM A105 / ASTM A572 / EN 10025-2'
  },
  {
    step: 'STAGE 2',
    name: 'In-Process 3D Coordinate Metrology (CMM)',
    stage: 'CNC Machining & Forming Workcenter',
    description: 'Automated touch-probe and optical laser CMM scans measure critical bore concentricity, thread pitch, perpendicularity, and true position against CAD models in temperature-controlled 20°C inspection rooms.',
    instrumentsUsed: 'Zeiss Contura 3D Bridge CMM & Mitutoyo Digital Profile Projectors',
    benchmarkStandard: 'ISO 1101 Geometric Dimensioning & Tolerancing (GD&T)'
  },
  {
    step: 'STAGE 3',
    name: 'Non-Destructive Testing (NDT)',
    stage: 'Post-Welding & Structural Assembly',
    description: 'Level II certified NDT inspectors conduct 100% magnetic particle inspection on forged components and ultrasonic weld thickness checks to detect sub-surface fissures, inclusions, and fusion voids.',
    instrumentsUsed: 'Olympus Epoch 650 Ultrasonic Flaw Detector & Magnavis Wet MPI Benches',
    benchmarkStandard: 'ASME Section V Article 4 / EN ISO 17640'
  },
  {
    step: 'STAGE 4',
    name: 'Hydrostatic Pressure & Dynamic Torque Testing',
    stage: 'Valve, Manifold & Drive Mechanism Sub-assembly',
    description: 'Cast valves and pressure components are subjected to water pressures up to 1.5x working rating with zero seat leakage tolerance. Planetary drive gearboxes are run on calibrated dynamometer test benches.',
    instrumentsUsed: 'Hydra-Cell Automated Test Rig with Digital Data Logger (up to 700 Bar)',
    benchmarkStandard: 'API 598 / ISO 5208 Pressure Testing Standards'
  },
  {
    step: 'STAGE 5',
    name: 'Final Pre-Dispatch Audit & Documentation (MTC)',
    stage: 'Final Packaging & Shipping Bay',
    description: 'Independent quality assurance review of dimensional certificates, surface coating thickness (elcometer), packing integrity, and compilation of the Mill Test Certificate EN 10204 Type 3.1 package.',
    instrumentsUsed: 'Elcometer 456 Coating Gauge & Barcode Verification Imagers',
    benchmarkStandard: 'EN 10204 Type 3.1 & ISO 9001:2015 Audit Protocol'
  }
];

// =========================================================================
// 6. FACTORY INFRASTRUCTURE
// =========================================================================
export const infrastructureFacilities: FacilityInfrastructure[] = [
  {
    id: 'heavy-machining-bay',
    name: 'Precision Heavy Machining & Turning Complex',
    category: 'Production Facility',
    floorArea: '48,000 Sq. Ft.',
    specifications: [
      '24 Multi-Axis CNC Turning and Milling Centers',
      'Dual 25-Ton Overhead Bridge Cranes (Demag)',
      'Underground Chip Briquetting & Coolant Recycling System',
      'Vibration-Isolated Foundation Slabs for Ultra-Precision'
    ],
    description: 'Our primary machining hub designed for continuous multi-shift production of heavy flanges, planetary drive cases, valve bodies, and custom tooling blocks with real-time SCADA telemetry.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=85'
  },
  {
    id: 'laser-fabrication-bay',
    name: 'Automated Structural Fabrication & Laser Cutting Plant',
    category: 'Fabrication Plant',
    floorArea: '55,000 Sq. Ft.',
    specifications: [
      'Trumpf 15 kW TruLaser Fiber Systems with Automated Sheet Towers',
      '600-Ton 6-Meter CNC Tandem Press Brakes',
      'Automated Gantry Plasma Beveling for Plate Prep',
      '6 KUKA Robotic MIG Welding Cells with Rotary Positioners'
    ],
    description: 'High-speed automated sheet metal and structural beam processing center delivering laser cutting, robotic welding, and automated shot blasting with zero manual bottleneck.',
    image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=1200&q=85'
  },
  {
    id: 'cleanroom-testing-metrology',
    name: 'Metrology Lab & Non-Destructive Testing Facility',
    category: 'Quality Assurance',
    floorArea: '8,500 Sq. Ft.',
    specifications: [
      'Temperature & Humidity Controlled (20°C ± 0.5°C, 45% RH)',
      'Zeiss Contura Bridge CMM with Optical Active Sensor',
      'Spectro Optical Emission Chemical Spectrometer',
      'Darkroom Fluorescent Penetrant & Magnetic Particle Benches'
    ],
    description: 'A certified metrological sanctuary where raw materials, in-process machined components, and finished assemblies undergo thorough geometric and metallurgical verification.',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=85'
  },
  {
    id: 'central-distribution-warehouse',
    name: 'High-Bay Automated Logistics & Pallet Distribution Hub',
    category: 'Logistics & Warehousing',
    floorArea: '65,000 Sq. Ft.',
    specifications: [
      '12,000 Heavy Pallet Storage Positions (14-Meter Clear Height)',
      'Automated Very Narrow Aisle (VNA) Wire-Guided Turret Trucks',
      '8 Hydraulic Dock Levelers with Weather Seal Shelters',
      'Integrated WMS with RF Barcode Scanning & Live ERP Inventory'
    ],
    description: 'Enables high-throughput bulk order consolidation, container stuffing, and staged distributor dispatch with 24-hour turnaround capability on stock industrial SKUs.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=85'
  }
];

// =========================================================================
// 7. TECHNICAL DOWNLOADS & SPECIFICATION DOCUMENTS
// =========================================================================
export const technicalDocuments: TechnicalDocument[] = [
  {
    id: 'doc-master-catalogue',
    title: 'MERIDIAN Master Product & Supply Catalogue (2026 Edition)',
    docCode: 'MRD-CAT-2026-EN',
    category: 'catalogue',
    categoryLabel: 'Product Catalogues',
    fileFormat: 'PDF Document',
    fileSize: '14.8 MB',
    pages: 128,
    description: 'Complete technical reference guide covering industrial components, structural metals, power busways, fasteners, and wholesale supply specifications.'
  },
  {
    id: 'doc-tds-flanges',
    title: 'Forged Steel Weld-Neck & Slip-On Flanges – Technical Data Sheet (TDS)',
    docCode: 'TDS-FLG-ASME-B165',
    category: 'tds',
    categoryLabel: 'Technical Data Sheets',
    fileFormat: 'PDF Specification',
    fileSize: '3.4 MB',
    pages: 18,
    description: 'Dimensional tables, bolt hole circles, pressure-temperature ratings, and chemical composition thresholds for ASME Class 150 to 2500 flanges.'
  },
  {
    id: 'doc-tds-fasteners',
    title: 'High-Tensile Structural Fastener Mechanical Property & Torque Matrix',
    docCode: 'TDS-FST-88-109',
    category: 'tds',
    categoryLabel: 'Technical Data Sheets',
    fileFormat: 'PDF Reference Chart',
    fileSize: '2.1 MB',
    pages: 8,
    description: 'Recommended tightening torques, proof load values, tensile stress areas, and corrosion resistance performance across HDG and Geomet coatings.'
  },
  {
    id: 'doc-tds-busway',
    title: 'Compact Copper Power Busduct System Engineering & Installation Manual',
    docCode: 'ENG-BUS-61439',
    category: 'tds',
    categoryLabel: 'Technical Data Sheets',
    fileFormat: 'PDF Manual',
    fileSize: '6.7 MB',
    pages: 42,
    description: 'Short-circuit withstand ratings, voltage drop calculation formulas, support hanger spacing rules, and joint torque verification procedures.'
  },
  {
    id: 'doc-qa-manual',
    title: 'MERIDIAN Quality Management Manual & Sample Mill Test Certificate (MTC)',
    docCode: 'QMS-MTC-EN10204',
    category: 'quality',
    categoryLabel: 'Quality & Compliance',
    fileFormat: 'PDF + Sample MTC',
    fileSize: '4.2 MB',
    pages: 24,
    description: 'Detailed inspection plan, NDT testing qualification parameters, and illustrated template of an audited EN 10204 Type 3.1 inspection certificate.'
  },
  {
    id: 'doc-wholesale-guidelines',
    title: 'B2B Wholesale Procurement, Tiered Pricing & Export Logistics Terms',
    docCode: 'WHL-B2B-TERMS-26',
    category: 'wholesale',
    categoryLabel: 'Wholesale & Supply Guidelines',
    fileFormat: 'PDF Guide',
    fileSize: '2.9 MB',
    pages: 16,
    description: 'Minimum order quantities (MOQ), palletization standards, container loading volumes, Incoterms (FOB/CIF/DDP), and distributor credit agreements.'
  },
  {
    id: 'doc-corrugated-strength',
    title: 'Triple-Wall Corrugated Packaging Bursting & Stacking Strength Standards',
    docCode: 'TDS-PKG-TW-TAPPI',
    category: 'tds',
    categoryLabel: 'Technical Data Sheets',
    fileFormat: 'PDF Technical Sheet',
    fileSize: '2.5 MB',
    pages: 12,
    description: 'Edge crush test (ECT) values, Mullen bursting test metrics, and stacking safety factors under extreme maritime shipping humidity.'
  },
  {
    id: 'doc-machinery-gearbox',
    title: 'Planetary Gearbox Service Factor & Thermal Rating Calculation Guide',
    docCode: 'ENG-GBX-ISO6336',
    category: 'tds',
    categoryLabel: 'Technical Data Sheets',
    fileFormat: 'PDF Technical Guide',
    fileSize: '4.8 MB',
    pages: 32,
    description: 'Radial and axial shaft load capacities, lubrication viscosity selection charts, and thermal power limits for continuous heavy industrial duty.'
  }
];

// =========================================================================
// 8. THE INDUSTRIAL COMMAND CONSOLE NAVIGATION (11 Dedicated Modular Tiles)
// =========================================================================
export const commandConsoleTiles: NavigationTile[] = [
  { num: '01', sysCode: 'SYS-01', title: 'Home', path: '/', desc: 'Industrial Portal & Corporate Overview', iconName: 'Factory' },
  { num: '02', sysCode: 'SYS-02', title: 'About Us', path: '/about', desc: 'Company Heritage, Leadership & Values', iconName: 'Building2' },
  { num: '03', sysCode: 'SYS-03', title: 'Manufacturing', path: '/manufacturing', desc: 'Advanced Machining & Fabrication Capabilities', iconName: 'Cpu' },
  { num: '04', sysCode: 'SYS-04', title: 'Products', path: '/products', desc: 'Comprehensive B2B Industrial Catalogue', iconName: 'Boxes' },
  { num: '05', sysCode: 'SYS-05', title: 'Industries We Serve', path: '/industries', desc: 'Civil, Automotive, Electrical & OEM Applications', iconName: 'Layers' },
  { num: '06', sysCode: 'SYS-06', title: 'Wholesale & Distribution', path: '/wholesale', desc: 'Bulk Supply Programs & Distributor Partnerships', iconName: 'Truck' },
  { num: '07', sysCode: 'SYS-07', title: 'Quality Control', path: '/quality', desc: 'CMM Metrology, NDT Testing & MTC Documentation', iconName: 'ShieldCheck' },
  { num: '08', sysCode: 'SYS-08', title: 'Infrastructure', path: '/infrastructure', desc: '180,000 Sq. Ft. Plant, Bays & High-Bay Warehousing', iconName: 'Warehouse' },
  { num: '09', sysCode: 'SYS-09', title: 'Resources', path: '/resources', desc: 'Technical Data Sheets, Manuals & Catalogues', iconName: 'FileText' },
  { num: '10', sysCode: 'SYS-10', title: 'Request a Quote', path: '/quote', desc: 'Enterprise RFQ & Bulk Pricing System', iconName: 'Calculator' },
  { num: '11', sysCode: 'SYS-11', title: 'Contact Us', path: '/contact', desc: 'Factory Desk, Helplines & WhatsApp Concierge', iconName: 'Phone' },
];

// =========================================================================
// 9. ILLUSTRATIVE BUSINESS METRICS (Clearly Marked as Demonstration Figures)
// =========================================================================
export const businessMetrics = [
  { value: '180,000', unit: 'Sq. Ft.', label: 'Active Manufacturing Floor', desc: 'Automated CNC, laser cutting, and clean assembly bays.' },
  { value: '25,000+', unit: 'Tons / Year', label: 'Annual Finished Output', desc: 'Fabricated structural steel, components, and packaging.' },
  { value: '1,450+', unit: 'B2B Clients', label: 'Commercial & OEM Buyers', desc: 'Distributors, contractors, and industrial plants served.' },
  { value: '99.82%', unit: 'On-Time', label: 'Dispatched Precision Rate', desc: 'Supported by automated warehouse logistics & freight fleet.' },
];
