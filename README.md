# Control-jee-ms
Créer une application basée sur une architecture micro-service qui permet de gérer les factures contenant des produits et appartenant à un client.
Micro-service customer-service qui permet de gérer les client
Micro-service inventory-service qui permet de gérer les produits
Gateway Spring cloud Gateway avec une Configuration statique du système de routage
Annuaire Eureka Discrovery Service
Configuration dynamique des routes de la gateway
Service de facturation Billing-Service en utilisant Open Feign
Client Web Angular (Clients, Produits, Factures)
Déployer le serveur keycloak :
- Créer un Realm
- Créer un client à sécuriser
- Créer des utilisateurs
- Créer des rôles
- Affecter les rôles aux utilisateurs
- Tester les différents modes d'authentification avec Postman en montrant les contenus de Access-Token, Refresh Token
  Sécuriser les micro-services et le frontend angular en déployant les adaptateurs Keycloak