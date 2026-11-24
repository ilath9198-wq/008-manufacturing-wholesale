# Project History – 008 Manufacturing & Wholesale Demo Website

**Project Collection:** Industry-Specific Website Demonstrations  
**Project Name:** 008 Manufacturing & Wholesale Demo Website  
**Project Folder:** `008 Manufacturing and Wholesale`  
**GitHub Repository:** [https://github.com/ilath9198-wq/008-manufacturing-wholesale.git](https://github.com/ilath9198-wq/008-manufacturing-wholesale.git)  
**Production Live URL:** [https://008-manufacturing-wholesale.vercel.app](https://008-manufacturing-wholesale.vercel.app)  
**Demo Brand:** MERIDIAN Manufacturing & Supply Co.  
**Tagline:** Built with Precision. Delivered with Confidence.  
**Category:** Manufacturing, Industrial Supply and Wholesale Distribution

---

## 1. Executive Summary & Brand Direction

**MERIDIAN Manufacturing & Supply Co.** is an enterprise multi-page B2B website demonstration tailored for high-capacity manufacturers, wholesale distributors, and industrial suppliers. The platform demonstrates how modern manufacturing operations can present their automated production workcenters, technical product catalogues, quality metrology workflows, bulk wholesale agreements, and RFQ requisition systems.

### Visual Identity & Palette
- **Deep Navy & Graphite:** `#0B1220`, `#11151A`, `#161C24` (Industrial weight, engineering reliability)
- **Industrial Steel Slate:** `#334155`, `#475569`, `#94A3B8` (Structural precision, textbook GD&T clarity)
- **High-Contrast Copper & Amber Accents:** `#EA580C`, `#F97316`, `#F59E0B` (Heat treatment, telemetry signals, unmissable CTAs)
- **Clean Off-White:** `#F8FAFC`, `#FFFFFF` (High contrast, clean specification presentation)

---

## 2. Standing Chat Rules Compliance

1. **Strictly ZERO `.html` Extensions:**
   - No `.html` anywhere in project directories, filenames, routing, or internal hyperlinks. Built with clean Next.js 14 App Router directory routes (`/`, `/about`, `/manufacturing`, `/products`, `/industries`, `/wholesale`, `/quality`, `/infrastructure`, `/resources`, `/quote`, `/contact`).
2. **Mandatory Atmospheric Photographic Hero Sections:**
   - Every single page features an authentic, high-resolution industrial photograph (CNC milling, robotic welding, heavy machinery, automated pallet warehousing).
   - Multi-layered deep graphite-to-navy gradient scrims (`from-graphite-950/95 via-graphite-900/85 to-graphite-950/75`).
   - Crisp white drop-shadowed typography for maximum readability across all screen sizes.
3. **Solid High-Contrast Visible CTA Buttons:**
   - Addressed button visibility requirements. Every hero button uses solid, opaque colors (vibrant `copper-600` and solid dark `graphite-900` with crisp text and borders) ensuring complete visibility on desktop and mobile.
4. **Unique Industrial Command Console Navigation:**
   - Replaces generic menus with a floating mechanical command console.
   - Features 11 modular numbered tiles (`01` to `11` with `SYS-01` to `SYS-11`), industrial icons, telemetric status bars, and highlighted "Request Bulk Quotation" quick-action card.

---

## 3. Dedicated 11 Pages & Route Architecture

| Route | Page Name | Primary Features |
|---|---|---|
| `/` | **Home** | Industrial hero *"Manufacturing Excellence. Supply You Can Depend On."*, 4 business capacity metrics, company intro, featured products, capabilities preview, industries served, and wholesale CTA. |
| `/about` | **About Us** | 30-year heritage story, vision & mission, 4 industrial philosophy pillars, executive leadership profiles, and in-line metrology showcase. |
| `/manufacturing` | **Manufacturing** | 6 integrated production workcenters, CNC machinery specs, and the mandatory 7-stage manufacturing process workflow. |
| `/products` | **Products** | 10 B2B industrial products across 8 categories, live keyword search, category filter pills, sorting options, and technical detail modal. |
| `/industries` | **Industries We Serve** | 10 commercial sectors (Construction, Automotive, Electrical, Retail, Packaging, Furniture, Textiles, Food Processing, OEMs, Institutional), key supplied products, and operational benefits. |
| `/wholesale` | **Wholesale & Distribution** | Bulk product availability, distributor partnership benefits, factory credit lines, and on-page dealership application form with code generator (`MER-DIS-2026-XXXX`). |
| `/quality` | **Quality Control** | 5-stage comprehensive quality protocol (Spectrometry, 3D CMM, NDT, Hydrostatic, MTC audit), and an audited Mill Test Certificate (EN 10204 3.1) simulation. |
| `/infrastructure` | **Infrastructure** | 180,000 sq. ft. campus showcase, 4 specialized infrastructure facilities (Heavy Machining, Laser Fabrication, Metrology Lab, Automated High-Bay Warehouse). |
| `/resources` | **Resources** | 8 downloadable technical documents & data sheets (TDS), live search, category filters, simulated download triggers, and FAQ accordion. |
| `/quote` | **Request a Quote** | Enterprise B2B requisition form collecting company, contact, volume, units, delivery location, CAD file upload, and ticket generator (`MER-RFQ-2026-XXXX`). |
| `/contact` | **Contact Us** | Plant location address, direct phone/email channels, operating hours, interactive inquiry form with ticket generator (`MER-ENQ-2026-XXXX`), and WhatsApp link. |

---

## 4. Interactive Components & Modals

1. **`IndustrialCommandConsole.tsx`**:
   - Distinctive floating command console panel with dark graphite background and metallic borders.
   - Displays 11 modular numbered tiles, active route indicators, plant telemetry status, and quick RFQ trigger.
2. **`RfqModal.tsx`**:
   - Universal enterprise B2B quotation requisition modal accessible from any page with voucher code generation (`MER-RFQ-2026-XXXX`).
3. **`ProductDetailModal.tsx`**:
   - Technical inspection modal for any clicked product displaying material specs, tolerances, standards, compliance, MOQ, and instant quote triggers.
4. **`RfqContext.tsx`**:
   - Global React state management providing seamless modal triggers across all 11 routes.

---

## 5. Pre-Verified Industrial Photography Assets (23 Verified HTTP 200 OK)

All photography was verified via automated HTTP requests (`verify-industrial-images.js`):
- `photo-1581091226825-a6a2a5aee158`: Modern automated factory floor & assembly line (Home & Infrastructure)
- `photo-1581092160607-ee22621dd758`: CNC multi-axis precision machining (About Us & Products)
- `photo-1504328345606-18bbc8c9d7d1`: Heavy structural steel welding & robotic fabrication (Manufacturing & Home)
- `photo-1586528116311-ad8dd3c8310d`: Automated high-bay pallet warehouse & logistics (Wholesale)
- `photo-1563986768609-322da13575f3`: High-torque industrial planetary machinery gearboxes (Quote)
- `photo-1581092580497-e0d23cbdf1dc`: Senior quality engineer reviewing dimensional tolerances (Quality & About)
- `photo-1553413077-190dd305871c`: Forklift loading industrial hardware crates (Wholesale)
- `photo-1581092795360-fd1ca04f0952`: Precision structural bolts & high-tensile hardware (Products)
- `photo-1518770660439-4636190af475`: Electrical busways & low-impedance power distribution (Products)
- `photo-1581092162384-8987c1d64718`: Cleanroom electronics assembly (Manufacturing)
- `photo-1530587191325-3db32d826c18`: Triple-wall corrugated heavy packaging (Products)
- `photo-1535813547-99c456a41d4a`: Cold-rolled steel coils & metallurgical raw materials (Products)
- `photo-1582719478250-c89cae4dc85b`: Cleanroom metrology laboratory & testing suite (Quality)
- `photo-1504307651254-35680f356dfd`: Commercial construction & structural steel framing (Industries)
- `photo-1581092918056-0c4c3acd3789`: Industrial engineer with tablet reviewing specifications (Resources)
- `photo-1494412574643-ff11b0a5c1c3`: Ocean freight container shipping & dispatch port (Contact Us)
- `photo-1565043589221-1a6fd9ae45c7`: High-density polymer injection molding components (Products)
- `photo-1581092334651-ddf26d9a09d0`: Cast carbon steel industrial ball & gate valves (Products)
- `photo-1513828583688-c52646db42da`: Structural steel universal columns & beams (Products)
- `photo-1587293852726-70cdb56c2866`: Heavy pallet storage racks & warehouse frames (Products)
- `photo-1516937941344-00b4e0337589`: Industrial heavy manufacturing machinery (Manufacturing)
- `photo-1578575437130-527eed3abbec`: Freight shipping containers & logistics terminal (Wholesale)
