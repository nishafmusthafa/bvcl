-- Case studies, October 2026: archive the first three seeded projects (kept, not
-- deleted, so they can be restored from /admin) and add the current ones.
-- Outcomes stay empty until there are real figures; the site hides empty fields.

update public.work
set status = 'archived', updated_at = now()
where name in ('Souq Al Samak', 'KLUCK', 'Norwood survey') and status <> 'archived';

insert into public.work (name, client, category, headline, challenge, what_we_did, outcome, image_url, image_alt, sort_order)
select v.* from (values
  ('Khaleej Mandi House', 'Restaurant', 'AI Receptionist deployment', 'Every call answered, even in the dinner rush',
   'Calls for bookings and orders came in when the team was busiest or already closed, and too many went unanswered.',
   'Deployed Dialgen.AI, our AI receptionist, to answer every call, handle the common questions and take bookings, with each call logged for the team.',
   null, '/work/khaleej-mandi.webp', 'A Khaleej Mandi chef serving a whole roast chicken on mandi rice', 10),
  ('1 Key Solution', 'Marketing and branding', 'Lead conversion implementation', 'Every enquiry answered and followed up',
   'Enquiries from the website and messages waited for a reply while the team was busy, and some went cold before anyone got back to them.',
   'Implemented PROXe, our AI lead-conversion system: instant replies across the website and messaging, qualification, then a booking or a hand-off to the team.',
   null, '/unsplash/marketing-Rmjq07KI.webp', 'A branded shop window display', 20),
  ('Arabian Grill', 'Restaurant', 'ERP system & digital marketing', 'One system behind the counter, and marketing that fills the tables',
   'Orders, stock and accounts sat in separate tools that never agreed, and there was no clear line from marketing spend to sales.',
   'Set up Faircodeme ERPNext so orders, stock and accounts live in one place, and ran the digital marketing: social content, ads and local SEO tied to real enquiries.',
   null, '/unsplash/arabian-grill-0gSpvtwd.webp', 'Kofta kebab skewers on flatbread with hummus and grilled vegetables', 30)
) v(name, client, category, headline, challenge, what_we_did, outcome, image_url, image_alt, sort_order)
where not exists (select 1 from public.work w where w.name = v.name);
