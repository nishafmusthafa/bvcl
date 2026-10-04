-- The public read policies on the collections tables run for anon and call
-- public.is_cms_admin(). Without execute rights anon reads fail with
-- "permission denied for function is_cms_admin". The function returns false
-- for anon (no JWT email), so granting execute exposes nothing.
grant execute on function public.is_cms_admin() to anon;
