-- Bamorce Écoute V4.0 — initial PostgreSQL schema
-- Apply only to a dedicated Bamorce Écoute database, never to the existing Bamorce real-estate project.
begin;

create extension if not exists pgcrypto;

create type public.account_role as enum (
  'user','listener','corrector','moderator','emergency_manager',
  'live_manager','community_manager','analyst','compliance_manager',
  'finance_manager','super_admin'
);

create type public.testimony_status as enum ('draft','submitted','in_review','changes_requested','approved','rejected','published','hidden','closed');
create type public.privacy_level as enum ('anonymous','pseudonym','private');
create type public.risk_level as enum ('yellow','orange','red','unassessed');

create table public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  pseudonym text not null unique check (char_length(pseudonym) between 2 and 40),
  role public.account_role not null default 'user',
  country_code char(2),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.testimonies (
  id uuid primary key default gen_random_uuid(),
  public_reference text unique,
  author_id uuid references auth.users(id) on delete set null,
  guest_secret_hash text,
  title text check (title is null or char_length(title) <= 180),
  body text check (body is null or char_length(body) <= 30000),
  privacy public.privacy_level not null default 'private',
  status public.testimony_status not null default 'submitted',
  help_types text[] not null default '{}',
  category_keys text[] not null default '{}',
  risk public.risk_level not null default 'unassessed',
  comments_enabled boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  published_at timestamptz,
  constraint testimony_has_content check (coalesce(char_length(body),0) > 0 or title is not null)
);

create table public.testimony_attachments (
  id uuid primary key default gen_random_uuid(),
  testimony_id uuid not null references public.testimonies(id) on delete cascade,
  storage_key text not null unique,
  media_type text not null check (media_type in ('audio','image','document')),
  mime_type text not null,
  byte_size bigint not null check (byte_size > 0 and byte_size <= 26214400),
  duration_seconds integer check (duration_seconds is null or duration_seconds between 1 and 600),
  created_at timestamptz not null default now()
);

create table public.moderation_actions (
  id uuid primary key default gen_random_uuid(),
  testimony_id uuid not null references public.testimonies(id) on delete cascade,
  actor_id uuid not null references auth.users(id),
  action text not null check (action in ('review','request_changes','approve','reject','publish','hide','restore')),
  reason_code text not null,
  private_note text,
  created_at timestamptz not null default now()
);

create table public.urgency_cases (
  id uuid primary key default gen_random_uuid(),
  testimony_id uuid references public.testimonies(id) on delete set null,
  risk public.risk_level not null check (risk in ('yellow','orange','red')),
  status text not null default 'open' check (status in ('open','assigned','in_progress','referred','closed')),
  assigned_to uuid references auth.users(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  closed_at timestamptz
);

create table public.audit_events (
  id bigint generated always as identity primary key,
  actor_id uuid references auth.users(id) on delete set null,
  action text not null,
  entity_type text not null,
  entity_id uuid,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

alter table public.profiles enable row level security;
alter table public.testimonies enable row level security;
alter table public.testimony_attachments enable row level security;
alter table public.moderation_actions enable row level security;
alter table public.urgency_cases enable row level security;
alter table public.audit_events enable row level security;

-- Minimum exposure at foundation stage: no client table access until narrowly scoped policies are reviewed.
revoke all on public.profiles, public.testimonies, public.testimony_attachments,
  public.moderation_actions, public.urgency_cases, public.audit_events from anon, authenticated;

commit;
