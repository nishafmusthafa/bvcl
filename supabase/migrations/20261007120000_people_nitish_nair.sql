-- Add Nitish Nair to the advisory board (Growth), straight after Bridgeway Investments.
-- /admin reorders in steps of 10, so +5 lands between neighbours. Safe to run twice.
insert into public.people (name, role, bio, team, sort_order)
select 'Nitish Nair', 'Growth', null, 'advisor',
  coalesce((select sort_order from public.people where name = 'Bridgeway Investments' limit 1), 40) + 5
where not exists (select 1 from public.people where name = 'Nitish Nair');
