# Bamorce Écoute

**Slogan :** Parlez. Nous vous écoutons.

Plateforme francophone africaine d’écoute, de soutien communautaire par les pairs, de prévention et d’orientation.  
Priorité absolue : confidentialité, modération humaine, sécurité des personnes vulnérables et dignité.

---

## État du projet

| Élément | Statut |
|---------|--------|
| Cahier des charges | **V4.0** — complet |
| Architecture technique | Documentée |
| Protocole d’urgence | Documenté |
| Plan de monétisation éthique | Documenté |
| Conformité RGPD / protection des données | Documentée |
| Code applicatif | Fondation à venir (Phase 1) |

> **Avertissement important**  
> Bamorce Écoute n’est **pas** un service médical, ni un service d’urgence, ni un cabinet de psychothérapie.  
> En cas de danger immédiat, contactez les secours de votre pays.

---

## Documentation officielle

- [Cahier des Charges V4.0](docs/CAHIER-DES-CHARGES-V4.md)
- [Architecture technique](docs/ARCHITECTURE-TECHNIQUE.md)
- [Protocole de modération](docs/PROTOCOLE-MODERATION.md)
- [Centre Urgence](docs/CENTRE-URGENCE.md)
- [Plan de monétisation éthique](docs/PLAN-MONETISATION-ETHIQUE.md)
- [Protection des données & RGPD](docs/PROTECTION-DONNEES-RGPD.md)
- [Feuille de route](docs/ROADMAP.md)

---

## Principes non négociables

1. Aucun témoignage public sans **validation humaine**.
2. L’aide de base (témoignage, urgence, ressources) reste **toujours gratuite**.
3. Aucune vente de données personnelles.
4. Aucune publicité ciblée sur la souffrance.
5. Séparation stricte entre identité d’authentification et identité publique.
6. Les Listeners et modérateurs sont formés et soumis à une charte stricte.

---

## Stack technique cible (Phase 1)

- **Frontend** : Next.js 15 (App Router) + TypeScript + Tailwind
- **Backend** : NestJS (microservices) ou Next.js API Routes + Prisma
- **Base de données** : PostgreSQL
- **Cache / Files** : Redis
- **Stockage fichiers** : S3-compatible chiffré
- **Live** : LiveKit ou Agora
- **Paiements** : CinetPay + Stripe
- **Hébergement** : Vercel + base managée (Neon / Supabase / Railway)

---

## Contribution & développement

Le développement commence par la **Phase 1 – Fondation sécurisée** (voir `docs/ROADMAP.md`).

Toute contribution doit respecter les principes de sécurité et de confidentialité définis dans la documentation.
