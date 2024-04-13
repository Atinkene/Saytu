<h1>Mise en place de la base de données Mysql avec un cluster de trois machines</h1>
<p>Nous créons d'abord un réseau Docker interne que les conteneurs utiliseront pour communiquer. Ensuite, nous commençons le nœud de gestion et enfin le nœud de serveur MySQL</p>

![Capture d’écran du 2024-04-06 04-50-13](https://github.com/Atinkene/Saytu/assets/121758831/dee56ee4-fe69-4f6b-8493-a4b81e412e3a)

<p>Le serveur sera initialisé avec un mot de passe randomisé qui devra être changé, donc allez-y chercher à partir du journal, puis connectez-vous et changez le mot de passe. Si vous obtenez une erreur disant «ERROR 2002 (HY000): Impossible de se connecter au serveur MySQL local via socket», alors le serveur n'a pas encore fini d'initialiser.</p>
<p>docker logs mysql1 2>&1 | grep PASSWORD<br>
docker exec -it mysql1 mysql -uroot -p<br>
ALTER USER 'root'@'localhost' IDENTIFIED BY 'MyNewPass';</p>
<p>Pour contourner ce probème, on a préféré créer un utilisateur à qui on attribuera tous les privilèges sur la base de donnée</p>

![Capture d’écran du 2024-04-06 05-48-25](https://github.com/Atinkene/Saytu/assets/121758831/045914ff-bcb3-4337-9667-14e591e91ace)

<p>Par la suite, on procède à la création de la base de donnée Saytu</p>

![Capture d’écran du 2024-04-07 02-32-20](https://github.com/Atinkene/Saytu/assets/121758831/6ee706b3-4dce-44ff-b196-024629c3682e)

<p>Enfin,on démarre un conteneur avec un client de gestion interactif pour vérifier que le cluster est en place et on exécute la commande SHOW pour imprimer l'état du cluster. Vous devriez voir ce qui suit :</p>

![Capture d’écran du 2024-04-06 04-51-10](https://github.com/Atinkene/Saytu/assets/121758831/32d4d961-3d97-4ff7-8f10-fba8c21803b8)
