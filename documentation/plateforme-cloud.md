# Plateformes cloud

## Choix des plateformes

Pour tous les choix des services cloud, les critères suivant ont été pris en considération.

- Les plateformes doivent être gratuites.
- Le plan gratuit doit être utilisable sans avoir à enregistrer une carte de crédit.

De plus, pour le cadre du module, j'ai décidé d'exclure les services connus comme AWS, Google Cloud ou Azure.

Ces conditions ne reflètent pas donc celle que j'aurais si je voulais réellement déployer une application et a un focus plutôt sur l'éducation.

### L’hébergement du code source

Pour l'hébergement du code source, il n'y a pas de critère supplémentaire. Les choix ont été les suivants :

- Red Hat OpenShift

Red Hat OpenShift est un PaaS offrant une multitude d'outils.

Le tier gratuit (developer sandbox) est accessible pendant 30 jours, mais peut-être relancer à n'importe quel moment.

Pour la performance, ils offrent 12 pods qui peuvent être lancer simultanément, qui se supprime après quelques heures.

### La base de données

Pour la base de données, puisque l'application a été développée pour fonctionner avec MySql, il faut un fournisseur supportant MySql.

Bien qu'OpenShift supporte ça, le but étant de découvrir de différents outils, un autre service a été choisi.

- Ocean Digital

Le plan gratuit offre 200 $ pour les 60 premiers jours.

Pour manager et déployer la base de données, aiven a été utilisé pour faciliter le déroulement.

Avec aiven, le plan offre :

- 1 CPU
- 1 GB RAM
- 5 GB stockage
- 1 node

### Le stockage des images

Pour le stockage de fichier, pour l'application, je voulais avoir un file picker qui était inclus avec le service.

- FileStack
  - 1 GB Bandwidth
  - 500 uploads
  - 1'000 transformations
  - 1 GB stockage
