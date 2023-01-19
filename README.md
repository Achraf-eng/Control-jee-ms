# Control-jee-ms
Créer une application basée sur une architecture micro-service qui permet de gérer les factures contenant des produits et appartenant à un client.
Micro-service customer-service qui permet de gérer les client
<img width="960" alt="6" src="https://user-images.githubusercontent.com/81491934/212895037-913aeffd-849b-4976-afe8-eb342ba524c1.PNG">

Micro-service inventory-service qui permet de gérer les produits
<img width="960" alt="7" src="https://user-images.githubusercontent.com/81491934/212895056-4568ebb0-0aed-4010-9c99-ee9c0b40dcf0.PNG">

Gateway Spring cloud Gateway avec une Configuration statique du système de routage
Annuaire Eureka Discrovery Service
Configuration dynamique des routes de la gateway
Service de facturation Billing-Service en utilisant Open Feign
<img width="960" alt="8" src="https://user-images.githubusercontent.com/81491934/212895099-13caa83b-be4f-4a64-9553-a58745d63885.PNG">

Client Web Angular (Clients, Produits, Factures)
<img width="960" alt="1" src="https://user-images.githubusercontent.com/81491934/212895156-8239cce9-0146-4d78-8790-ee3f32fa0eed.PNG">
<img width="960" alt="3" src="https://user-images.githubusercontent.com/81491934/212895175-76eee770-2413-48c0-a1a1-1cbbd44297bd.PNG">
<img width="960" alt="4" src="https://user-images.githubusercontent.com/81491934/212895189-c6b570b8-3608-4127-b621-4a23b61e354e.PNG">
<img width="960" alt="5" src="https://user-images.githubusercontent.com/81491934/212895202-395eb468-7f64-4f55-a03b-30a387eb9064.PNG">

Déployer le serveur keycloak :
- Créer un Realm

![210277987-63bb8810-0d17-4075-b1d0-a2db3a4e4a3c](https://user-images.githubusercontent.com/81491934/212897997-f40cef8f-5a2c-4918-afdb-b98d02170374.png)

- Créer un client à sécuriser

![image](https://user-images.githubusercontent.com/81491934/213467316-5ebb06a7-0057-436f-b34f-c008ec8f9785.png)


- Créer des utilisateurs

![image](https://user-images.githubusercontent.com/81491934/213467569-e7df7ef4-e97d-4a8f-b72a-e308dbac6746.png)

- Créer des rôles

![image](https://user-images.githubusercontent.com/81491934/213467769-83bc0b3e-f8dc-4067-898a-918c0ceddbc8.png)

- Affecter les rôles aux utilisateurs

![image](https://user-images.githubusercontent.com/81491934/213468588-c8942025-b68b-4c31-809f-245d1f62e614.png)

![image](https://user-images.githubusercontent.com/81491934/213468739-6e60dbda-f6a4-4640-a038-9aa58313e81f.png)

- Tester les différents modes d'authentification avec Postman en montrant les contenus de Access-Token, Refresh Token
  Sécuriser les micro-services et le frontend angular en déployant les adaptateurs Keycloak
  
  1.1
  
![image](https://user-images.githubusercontent.com/81491934/213473754-f9141b53-cf10-4c5b-821b-7de93e739396.png)

![image](https://user-images.githubusercontent.com/81491934/213473969-375fd026-e116-45da-9332-0ef135fcbd14.png)

  <img width="960" alt="2" src="https://user-images.githubusercontent.com/81491934/212895250-c840b2b0-919a-4a16-861f-0a02c69abb4f.PNG">
