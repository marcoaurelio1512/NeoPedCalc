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

-- Integração com prontuário (MV, Tasy...): auditoria das aberturas.
-- NÃO há dado clínico identificável: paciente, atendimento e jti são HMAC
-- (chave EHR_SESSION_SECRET). O unique em jti_ref impede reutilizar um link
-- mesmo com várias instâncias do servidor.
create table if not exists public.ehr_launch_audit (
  id bigint generated always as identity primary key,
  created_at timestamptz not null default now(),
  issuer text not null,
  patient_ref text not null,
  encounter_ref text,
  jti_ref text not null unique
);
create index if not exists ehr_launch_audit_issuer_created_idx on public.ehr_launch_audit (issuer, created_at desc);
alter table public.ehr_launch_audit enable row level security;
revoke all on public.ehr_launch_audit from anon, authenticated;
grant select, insert on public.ehr_launch_audit to service_role;
