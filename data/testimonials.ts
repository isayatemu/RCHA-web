export type Testimonial = {
  name: string;
  location: string;
  date: string;
  language: "sw" | "en";
  message: string;
};

export const testimonials: Testimonial[] = [
  { name: "Asha M.", location: "Muscat, Oman", date: "Jan 2026", language: "sw", message: "Nilipata ushauri wa heshima sana na mpango wa dozi ulioeleweka. Ndani ya wiki chache nilihisi nafuu ya nguvu na usingizi." },
  { name: "Juma K.", location: "Mombasa, Kenya", date: "Dec 2025", language: "sw", message: "Huduma yao ni ya karibu, wanafuatilia baada ya ushauri. Nimeona mabadiliko mazuri kwenye hali yangu ya mwili." },
  { name: "Neema P.", location: "Arusha, Tanzania", date: "Nov 2025", language: "sw", message: "Nimependa uwazi wao kuhusu hospitali na tahadhari. Nilihisi improvement bila kuacha ushauri wa daktari." },
  { name: "Mariam R.", location: "Dar es Salaam, Tanzania", date: "Oct 2025", language: "sw", message: "Wanaeleza hatua kwa hatua. Follow-up yao ilinisaidia kubaki kwenye mpango wangu wa afya." },
  { name: "Yassin B.", location: "Doha, Qatar", date: "Sep 2025", language: "sw", message: "Nimekuwa nikitumia huduma yao kwa miezi kadhaa, naona mwili wangu unaimarika taratibu." },
  { name: "Hadija S.", location: "Kigali, Rwanda", date: "Aug 2025", language: "sw", message: "Nilipenda jinsi walivyoheshimu faragha yangu. Ushauri wa lishe na dozi uliniweka vizuri." },
  { name: "Salum N.", location: "Goma, DRC", date: "Jul 2025", language: "sw", message: "Nilikuwa na wasiwasi mwanzo lakini maelekezo yao yalikuwa clear. Nimehisi nafuu katika ratiba yangu ya kila siku." },
  { name: "Rehema T.", location: "Nairobi, Kenya", date: "Jun 2025", language: "sw", message: "Huduma bora na mawasiliano ya haraka. Nilipewa ushauri wa kweli bila ahadi zisizo halisi." },
  { name: "Omary L.", location: "Dodoma, Tanzania", date: "May 2025", language: "sw", message: "Nilifuata mpango wao pamoja na daktari wangu, nikaanza kuona improvements polepole." },
  { name: "Irene W.", location: "Zanzibar, Tanzania", date: "Apr 2025", language: "sw", message: "Wana utaratibu mzuri na heshima kwa mteja. Nimeridhika na huduma na ufuatiliaji." },
  { name: "David K.", location: "Minneapolis, USA", date: "Feb 2026", language: "en", message: "Professional guidance and realistic expectations. I felt gradual improvement in my daily energy and digestion." },
  { name: "Amina H.", location: "London, UK", date: "Jan 2026", language: "en", message: "What stood out was the follow-up and ethical communication. They encouraged me to keep my clinic appointments." },
  { name: "Peter O.", location: "Berlin, Germany", date: "Dec 2025", language: "en", message: "The consultation was detailed and practical. I noticed positive changes after staying consistent with the plan." },
  { name: "Sophia M.", location: "Toronto, Canada", date: "Nov 2025", language: "en", message: "The service feels personal and trustworthy. Improvement came progressively, not overnight promises." },
  { name: "James A.", location: "Manchester, UK", date: "Oct 2025", language: "en", message: "Clear communication, respectful support, and proper caution around medication interactions." },
  { name: "Nadia R.", location: "Seattle, USA", date: "Sep 2025", language: "en", message: "I appreciated the bilingual support and practical wellness steps. The experience was honest and helpful." },
];
