const https = require('https');

const candidateImages = [
  'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=2000&q=85', // CNC milling
  'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=2000&q=85', // Modern factory floor
  'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=2000&q=85', // Industrial welding
  'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=2000&q=85', // Warehouse logistics
  'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=2000&q=85', // Industrial machinery
  'https://images.unsplash.com/photo-1581092335878-2d9ff86ca2bf?auto=format&fit=crop&w=2000&q=85', // Plant assembly line
  'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=2000&q=85', // Quality inspection engineer
  'https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=2000&q=85', // Forklift in distribution warehouse
  'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=2000&q=85', // Precision fasteners & hardware
  'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=2000&q=85', // Industrial tech / circuitry
  'https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&w=2000&q=85', // Electronics assembly
  'https://images.unsplash.com/photo-1530587191325-3db32d826c18?auto=format&fit=crop&w=2000&q=85', // Wholesale packaging
  'https://images.unsplash.com/photo-1535813547-99c456a41d4a?auto=format&fit=crop&w=2000&q=85', // Raw steel / metallurgy
  'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=2000&q=85', // Testing lab
  'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=2000&q=85', // Construction & structural steel
  'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=2000&q=85', // Industrial engineer with tablet
  'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=2000&q=85', // Shipping / freight containers
  'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?auto=format&fit=crop&w=2000&q=85', // Industrial parts manufacturing
  'https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&fit=crop&w=2000&q=85', // Industrial piping & valves
  'https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=2000&q=85', // Metal structure fabrication
  'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=2000&q=85', // Warehouse racks & pallets
  'https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?auto=format&fit=crop&w=2000&q=85', // Factory exterior & industrial infrastructure
  'https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&w=2000&q=85', // Industrial machinery
  'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=2000&q=85', // Freight shipping containers
];

async function checkUrl(url) {
  return new Promise((resolve) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      const ok = res.statusCode >= 200 && res.statusCode < 400;
      resolve({ url, status: res.statusCode, ok });
    }).on('error', () => {
      resolve({ url, status: 'ERROR', ok: false });
    });
  });
}

(async () => {
  console.log(`Checking ${candidateImages.length} images...`);
  const results = await Promise.all(candidateImages.map(checkUrl));
  let broken = 0;
  for (const r of results) {
    if (r.ok) {
      console.log(`OK [${r.status}]: ${r.url.split('?')[0].split('/').pop()}`);
    } else {
      console.log(`FAIL [${r.status}]: ${r.url}`);
      broken++;
    }
  }
  console.log(`\nScan complete: ${results.length - broken}/${results.length} OK, ${broken} broken.`);
  process.exit(broken > 0 ? 1 : 0);
})();
