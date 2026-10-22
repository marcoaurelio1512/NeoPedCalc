-- Execute no SQL Editor do seu projeto Supabase.
-- Apenas o servidor, com service_role, pode acessar este vínculo de cobrança.
create table if not exists public.billing_accounts (
  user_id uuid primary key references auth.users(id) on delete cascade,
  stripe_customer_id text not null unique,
  created_at timestamptz not null default now()
);
alter table public.billing_accounts enable row level security;
revoke all on public.billing_accounts from anon, authenticated;
grant select, insert, update, delete on public.billing_accounts to service_role;
