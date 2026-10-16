# Architecture technique — Bamorce Écoute V4

## Phase P0
- Frontend web : Next.js App Router + React + TypeScript strict.
- UI : composants accessibles, responsive et mobile-first.
- PostgreSQL : base dédiée au produit Bamorce Écoute, migrations versionnées dans `supabase/migrations`.
- Authentification : à implémenter dans une phase dédiée; les rôles ne seront jamais acceptés depuis les formulaires ou paramètres clients.
- Fichiers : stockage privé avec chemins opaques, contrôle MIME réel, limite de taille, analyse antivirus et liens temporaires.
- CI : typecheck, lint, tests unitaires et build sur les PR.
- Hébergement envisagé : Vercel pour Next.js; base PostgreSQL dédiée via Supabase ou un PostgreSQL managé.

## Modules planifiés
1. Authentification et profils
2. Témoignages et pièces jointes
3. Modération humaine
4. Centre Urgence et ressources locales
5. Commentaires, réactions et signalements
6. Notifications
7. Écoute individuelle et groupes de soutien
8. Lives
9. Paiements, dons et cadeaux
10. Administration, conformité et statistiques agrégées

## Séparation des données
Les identifiants de compte, contenus privés, actions de modération, dossiers de risque, journaux d'audit et paiements doivent être séparés logiquement et protégés par des permissions minimales. Les analystes ne doivent accéder qu'à des données agrégées. Les contenus de santé et d'urgence ne doivent jamais servir au ciblage publicitaire.

## Environnements
- local : données fictives uniquement
- preview : données de test uniquement
- production : secrets gérés par l'hébergeur, accès restreints et sauvegardes testées

Ne pas connecter cette migration au projet Supabase existant de Bamorce Immobilier. Créer et valider un projet de base de données dédié à Bamorce Écoute avant toute application de migration.
