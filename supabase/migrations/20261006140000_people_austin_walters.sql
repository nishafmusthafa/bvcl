-- Correct Austin's surname (seeded as "Austin Walter"). The site matches /admin people to
-- the code entries by name, so this also keeps his photo and line fallback working.
update public.people
set name = 'Austin Walters', updated_at = now()
where name = 'Austin Walter';
