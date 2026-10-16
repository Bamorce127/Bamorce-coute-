# Architecture Technique — Bamorce Écoute V4.0

## 1. Vue d’ensemble

```text
Utilisateurs (Web / Mobile)
          ↓
     CDN + WAF
          ↓
     API Gateway
          ↓
   Microservices Bamorce
          ↓
Bases de données + Cache + Stockage chiffré + Files d’attente
          ↓
Services externes (Paiement, Live, Email, Transcription, IA)
```

## 2. Microservices

| Service | Rôle principal |
|---------|----------------|
| **Auth Service** | Inscription, connexion, sessions, récupération de compte, 2FA |
| **User Service** | Profils, préférences, blocages, confidentialité |
| **Testimony Service** | Création, stockage, publication, suppression des témoignages |
| **Moderation Service** | Files de modération, décisions, sanctions, audit |
| **Risk Service** | Détection de crise, classification Rouge/Orange/Jaune |
| **Community Service** | Commentaires, réactions, signalements |
| **Group Service** | Groupes de soutien, membres, règles |
| **Listener Service** | Mise en relation, sessions d’écoute, évaluation |
| **Wellness Service** | Journal, humeur, objectifs, exercices |
| **Live Service** | Diffusion, chat, demandes de parole, replays |
| **Payment Service** | Dons, cadeaux, abonnements, reçus |
| **Notification Service** | Notifications internes, emails, préférences |
| **Admin Service** | Rôles, statistiques, paramètres |
| **Analytics Service** | KPI, impact, rapports anonymisés |

## 3. Stack recommandée

| Couche | Technologie |
|--------|-------------|
| Mobile | Flutter (Android prioritaire, iOS Phase 3) |
| Web | Next.js 15 (App Router) + TypeScript + Tailwind |
| API / Backend | NestJS (recommandé) ou Next.js API Routes + Prisma |
| Base relationnelle | PostgreSQL |
| Cache | Redis |
| Recherche | Meilisearch |
| Stockage fichiers | S3-compatible (chiffré au repos) |
| Temps réel | WebSockets (Socket.io ou natif) |
| Live | LiveKit (open-source) ou Agora / AWS IVS |
| Transcription | Whisper (self-host ou API) |
| IA de détection | Classification + règles métier (pas de diagnostic) |
| Files d’attente | Redis Queue / BullMQ ou RabbitMQ |
| Monitoring | Sentry + Grafana + Prometheus |
| Hébergement | Vercel (front) + Railway / Neon / Supabase / Scaleway |

## 4. Modèle de données simplifié

```text
User
- id, email, pseudo, password_hash, country, status, created_at

Testimony
- id, public_reference, author_type, author_id (nullable),
  anonymous_code, title, content_text, audio_url,
  status, privacy_level, categories[], help_type,
  risk_level, created_at

ModerationAction
- id, testimony_id, moderator_id, action, reason, created_at

Comment
- id, testimony_id, user_id (nullable), content, status, created_at

Reaction
- id, testimony_id, user_id (nullable), reaction_type

LiveSession
- id, title, status, host_id, started_at, ended_at, viewer_count

Payment
- id, user_id (nullable), amount, currency, provider, status, purpose, receipt_url

UrgencyCase
- id, testimony_id, risk_level, status, assigned_to, actions_log, created_at

ListenerSession
- id, user_id, listener_id, subject, status, started_at, ended_at
```

## 5. Sécurité applicative

- HTTPS obligatoire partout
- Chiffrement au repos et en transit
- Hachage des mots de passe (Argon2 ou bcrypt)
- JWT courte durée + refresh token sécurisé (HttpOnly)
- 2FA obligatoire pour tous les rôles admin
- Rate limiting (connexion, envoi de témoignages, commentaires)
- Protection XSS, CSRF, injection SQL
- Analyse antivirus des fichiers uploadés
- Suppression automatique des métadonnées EXIF
- Cloisonnement strict des accès par rôle
- Journal d’audit complet sur les actions sensibles
- Sauvegardes chiffrées quotidiennes
- Plan de reprise après sinistre (RTO / RPO définis)

## 6. Séparation des identités

- Identité d’authentification (email + hash) séparée de l’identité publique (pseudo ou Anonyme #XXXX)
- Les témoignages anonymes ne sont jamais reliés publiquement à un compte
- Les accès aux dossiers privés et d’urgence sont tracés

## 7. Environnements

`LOCAL` · `DEV` · `STAGING` · `SANDBOX` · `PRODUCTION`

Séparation stricte des bases, secrets, providers et webhooks.
