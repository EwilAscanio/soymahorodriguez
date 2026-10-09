const fs = require('fs');
const p = 'components/Footer.jsx';
let s = fs.readFileSync(p, 'utf8');

s = s.replace('{new Date().getFullYear()}', '{year}');

if (!s.includes('useState')) {
  s = s.replace("'use client';", "'use client';\nimport { useEffect, useState } from 'react';");
}

if (!s.includes('const [year')) {
  s = s.replace(
    'export default function Footer() {',
    "export default function Footer() { const [year, setYear] = useState(''); useEffect(() => { setYear(new Date().getFullYear()); }, []);"
  );
}

fs.writeFileSync(p, s);
console.log('footer fixed');
