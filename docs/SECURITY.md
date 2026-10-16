# Politique de sécurité — Bamorce Écoute

## Règles de développement
- Ne jamais committer de secrets, tokens, clés privées ou données réelles d'utilisateurs.
- Tout rôle privilégié doit être vérifié côté serveur et provenir d'une source de confiance.
- Les témoignages privés et les pièces jointes doivent être privés par défaut.
- Aucun contenu utilisateur ne doit être publié automatiquement.
- Ne pas envoyer les témoignages ou données d'urgence à un fournisseur IA sans analyse contractuelle, minimisation et information adaptée.
- Toute mutation sensible doit être auditée avec l'identité de l'acteur, l'action et l'horodatage, sans recopier inutilement le contenu sensible dans les logs.

## Urgence
La classification automatique est une aide au triage, jamais un diagnostic. Les délais de réponse ne doivent pas être promis avant la mise en place d'une équipe humaine effectivement disponible. En cas de danger immédiat, l'interface doit conseiller de contacter les services d'urgence locaux et ne doit pas laisser croire que Bamorce remplace ces services.

## Incidents
1. Limiter l'accès et contenir l'incident.
2. Préserver les journaux utiles sans exposer davantage les données.
3. Évaluer les catégories de données, les personnes concernées et les risques.
4. Informer le responsable conformité et appliquer les obligations légales applicables.
5. Documenter les mesures correctives et vérifier leur efficacité.

## Pré-production
- Exécuter lint, typecheck, tests et build.
- Vérifier les migrations sur une base jetable.
- Tester les autorisations en accès anonyme et authentifié.
- Vérifier les en-têtes HTTP, les limites de taille, le rate limiting et les fichiers téléversés.
- Effectuer une revue indépendante avant de traiter des témoignages réels.
