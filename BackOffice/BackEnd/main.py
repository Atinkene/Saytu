import sys
import os
import mysql.connector
import hashlib
from PyQt5.QtWidgets import QApplication, QMainWindow, QPushButton, QVBoxLayout, QWidget, QMessageBox, QLabel, QTableWidget, QTableWidgetItem
from PyQt5.uic import loadUi

script_dir = os.path.dirname(os.path.abspath(__file__))

connexion_ui = os.path.join(script_dir, "../FrontEnd/connexion.ui")
interface_ui = os.path.join(script_dir, "../FrontEnd/interface.ui") 

class InterfaceUtilisateur(QMainWindow): 
    def __init__(self, roles, utilisateur, classes):
        super().__init__() 
        self.setWindowTitle("Interface Utilisateur")
        self.utilisateur = utilisateur 
        self.classes = classes  # Ajoutez l'attribut pour stocker les classes
        loadUi(interface_ui, self) 
        # Charger l'interface utilisateur depuis le fichier interface.ui
        print(roles)
 
        # Créer un layout vertical pour organiser les boutons de fonctionnalités
        layout = QVBoxLayout() 

        self.button0 = QPushButton("Dashboard")
        self.button0.setStyleSheet("font-size: 16px; background-color: rgb(0, 80, 78); height: 15px; color: white; ")
        layout.addWidget(self.button0) 
        self.button0.clicked.connect(self.afficherPageDashbord)

        # Ajouter des boutons dynamiquement en fonction des rôles récupérés
        for role in roles: 
            if role == "respPeda":
                self.button00 = QPushButton("Mes rapports")
                self.button00.setStyleSheet("font-size: 16px; background-color: rgb(0, 80, 78); height: 15px; color: white; ")
                layout.addWidget(self.button00) 
                self.button00.clicked.connect(lambda _, user=utilisateur: self.affichePageRapportRespCom(user))
 
                self.button1 = QPushButton("Cahier de texte")
                self.button1.setStyleSheet("font-size: 16px; background-color: rgb(0, 80, 78); height: 15px; color: white; ")
                layout.addWidget(self.button1)  
                self.button1.clicked.connect(lambda checked, classe=classes: self.afficherPageClasse(classe))
 
                self.button2 = QPushButton("Evaluations")
                self.button2.setStyleSheet("font-size: 16px; background-color: rgb(0, 80, 78); height: 15px; color: white; ")
                layout.addWidget(self.button2)
                self.button2.clicked.connect(self.affichePageEval)

            elif role == "membreCommissionPeda":
                self.button3 = QPushButton("Rapports")
                self.button3.setStyleSheet("font-size: 16px; background-color: rgb(0, 80, 78); height: 15px; color: white; ")
                layout.addWidget(self.button3)
                self.button3.clicked.connect(lambda checked, user=utilisateur: self.affichePageRapportComResp(user))

                self.button4 = QPushButton("Recommandations")
                self.button4.setStyleSheet("font-size: 16px; background-color: rgb(0, 80, 78); height: 15px; color: white; ")
                layout.addWidget(self.button4)
                self.button4.clicked.connect(self.afficherPageDashbord)

            elif role == "estDedie":
                self.button5 = QPushButton("PV")
                self.button5.setStyleSheet("font-size: 16px; background-color: rgb(0, 80, 78); height: 15px; color: white; ")
                layout.addWidget(self.button5)
                self.button5.clicked.connect(lambda checked, user=utilisateur: self.affichePagePVComDep(user))

            elif role == "directeurEtude":
                self.button6 = QPushButton("Rapports") 
                self.button6.setStyleSheet("font-size: 16px; background-color: rgb(0, 80, 78); height: 15px; color: white; ")
                layout.addWidget(self.button6)
                self.button6.clicked.connect(lambda checked, user=utilisateur: self.affichePageRapportDepDir(user))
 
            elif role == "chefDep":  
                
                self.button7 = QPushButton("Cahier de texte")
                self.button7.setStyleSheet("font-size: 16px; background-color: rgb(0, 80, 78); height: 15px; color: white; ")
                layout.addWidget(self.button7)
                self.button7.clicked.connect(lambda checked, classe=classes: self.afficherPageClasse(classe))

                self.button8 = QPushButton("PV reçus")
                self.button8.setStyleSheet("font-size: 16px; background-color: rgb(0, 80, 78); height: 15px; color: white; ")
                layout.addWidget(self.button8)
                self.button8.clicked.connect(lambda checked, user=utilisateur: self.affichePagePV(user))
 
                self.button9 = QPushButton("PV envoyés")
                self.button9.setStyleSheet("font-size: 16px; background-color: rgb(0, 80, 78); height: 15px; color: white; ")
                layout.addWidget(self.button9)
                self.button9.clicked.connect(lambda checked, user=utilisateur: self.affichePagePVCD(user))
  
                self.button10 = QPushButton("Evaluations")
                self.button10.setStyleSheet("font-size: 16px; background-color: rgb(0, 80, 78); height: 15px; color: white; ")
                layout.addWidget(self.button10)
                self.button10.clicked.connect(self.affichePageEval)
            
            elif role == "etudiant":
              # Ajouter les actions spécifiques pour le rôle d'étudiant ici
                pass 

            elif role == "enseignant":
              # Ajouter les actions spécifiques pour le rôle d'étudiant ici
                pass 

            elif role == "admin":
              # Ajouter les actions spécifiques pour le rôle d'étudiant ici
                pass 

            elif role == "respClasse":
              # Ajouter les actions spécifiques pour le rôle d'étudiant ici
                pass 

        # Trouver le conteneur dans l'interface où vous souhaitez ajouter les boutons
        self.user = self.findChild(QLabel, "user")
        self.user.setText(f"Bienvenue {self.utilisateur[5]} {self.utilisateur[6]}!")
        self.user.setStyleSheet("font-weight : bold; color: rgb(0, 80, 78); font-size: 28px")
        self.user.adjustSize()
        sidebar = self.findChild(QWidget, "sidebar")
        sidebar.setLayout(layout)

    def afficherPageDashbord(self):
        self.stackedWidget.setCurrentIndex(0)

    
    def information(self,aclass): 
        info=[]
        print(aclass)
        try:
            connection = mysql.connector.connect(
                host="192.168.0.10",
                user="massina",
                password="Passer",
                database="Saytu"
            )

            if connection.is_connected():
                cursor = connection.cursor()

                # Requête pour récupérer les rôles associés à l'utilisateur
                query = """
                    SELECT DISTINCT UE.nom AS UE, EC.nom AS EC, Chapitres.nom AS Chapitre, Chapitres.dateDeb AS Debut, Chapitres.dateFin AS Fin
                    FROM Classes
                    JOIN UE ON Classes.id = UE.classe
                    JOIN EC ON UE.id = EC.ue
                    JOIN Chapitres ON EC.id = Chapitres.ec
                    WHERE Classes.nom = %s; 
                """
                cursor.execute(query,(aclass,))
                rows = cursor.fetchall()
            
                # Ajouter toutes les lignes de résultats à la liste info
                for row in rows:
                    info.append(row)
                
                cursor.close()
                connection.close()
        except mysql.connector.Error as error:
            QMessageBox.critical(self, "Erreur", f"Erreur lors de la récupération des informations : {str(error)}")

        return info
    
    def cahiertext(self,aclass):
        info=self.information(aclass)
        print(info)
        self.stackedWidget.setCurrentIndex(2)
        # Création d'un QTableWidget avec le nombre de lignes et de colonnes correspondant aux résultats
        table = QTableWidget(len(info), len(info[0]))  # len(info) donne le nombre de lignes, len(info[0]) le nombre de colonnes
        table.setHorizontalHeaderLabels(["UE", "EC", "Chapitres", "Début", "Fin"])
        layout = QVBoxLayout()
        layout.addWidget(table)

        # Remplissage du tableau avec les données
        for i, row in enumerate(info):
            for j, col in enumerate(row):
                item = QTableWidgetItem(str(col))
                table.setItem(i, j, item)

        # Réglages facultatifs pour le style
        table.horizontalHeader().setStretchLastSection(True)  # Étirer la dernière colonne pour remplir l'espace restant
        table.verticalHeader().setVisible(False)  # Masquer les en-têtes de ligne

        # Insérer le tableau dans votre widget existant
        existing_widget_layout = self.findChild(QWidget, "classeContainer_3")
        existing_widget_layout.setLayout(layout)

    def afficherPageClasse(self, classe):
        # Afficher les classes dans la vue
        self.stackedWidget.setCurrentIndex(1)
        layout = QVBoxLayout()
        
        # Créer un layout pour les boutons
        layout = QVBoxLayout()
        print(classe)
        # Ajouter les boutons représentant les classes
        for aclass in classe:
            button = QPushButton(aclass, self)
            button.setStyleSheet("font-size: 16px; background-color: rgb(0, 80, 78); height: 15px; color: white; ")
            button.clicked.connect(lambda _, aclass=aclass: self.cahiertext(aclass))
            layout.addWidget(button)
 
        # Récupérer le widget préparé pour contenir les classes
        classeContainer = self.findChild(QWidget, "classeContainer")
        classeContainer.setLayout(layout)

    def eval(self): 
        avis=[]
        try:
            connection = mysql.connector.connect(
                host="192.168.0.10",
                user="massina",
                password="Passer",
                database="Saytu"
            )

            if connection.is_connected():
                cursor = connection.cursor()

                # Requête pour récupérer les rôles associés à l'utilisateur
                query = """
                    SELECT DISTINCT Classes.nom AS Classe, UE.nom AS UE, EC.nom AS EC,  Evaluations.avis AS Avis
                    FROM Classes
                    JOIN UE ON Classes.id = UE.classe
                    JOIN EC ON UE.id = EC.ue
                    LEFT JOIN Evaluations ON EC.id = Evaluations.ec;
                """
                cursor.execute(query,)
                rows = cursor.fetchall()
            
                # Ajouter toutes les lignes de résultats à la liste info
                for row in rows:
                    avis.append(row)
                
                cursor.close()
                connection.close()
        except mysql.connector.Error as error:
            QMessageBox.critical(self, "Erreur", f"Erreur lors de la récupération des informations : {str(error)}")

        return avis
    
    def affichePageEval(self):
        info=self.eval()
        print(info)
        self.stackedWidget.setCurrentIndex(3)
        # Création d'un QTableWidget avec le nombre de lignes et de colonnes correspondant aux résultats
        table = QTableWidget(len(info), len(info[0]))  # len(info) donne le nombre de lignes, len(info[0]) le nombre de colonnes
        table.setHorizontalHeaderLabels(["Classe","UE", "EC", "Avis"])
        layout = QVBoxLayout()
        layout.addWidget(table)

        # Remplissage du tableau avec les données
        for i, row in enumerate(info):
            for j, col in enumerate(row):
                item = QTableWidgetItem(str(col))
                table.setItem(i, j, item)

        # Réglages facultatifs pour le style
        table.horizontalHeader().setStretchLastSection(True)  # Étirer la dernière colonne pour remplir l'espace restant
        table.verticalHeader().setVisible(False)  # Masquer les en-têtes de ligne

        # Insérer le tableau dans votre widget existant
        existing_widget_layout = self.findChild(QWidget, "classeContainer_4")
        existing_widget_layout.setLayout(layout)

    def RapportRespCom(self,user): 
        rapport=[]
        try:
            connection = mysql.connector.connect(
                host="192.168.0.10",
                user="massina",
                password="Passer",
                database="Saytu"
            )

            if connection.is_connected():
                cursor = connection.cursor()

                # Requête pour récupérer les rôles associés à l'utilisateur
                query = """
                    SELECT avis  FROM RapportRespCom
                    where rp = %s ;
                """
                cursor.execute(query,(user[0],))
                rows = cursor.fetchall()
            
                # Ajouter toutes les lignes de résultats à la liste info
                for row in rows:
                    rapport.append(row)
                
                cursor.close()
                connection.close()
        except mysql.connector.Error as error:
            QMessageBox.critical(self, "Erreur", f"Erreur lors de la récupération des informations : {str(error)}")

        return rapport
    
    def affichePageRapportRespCom(self,user):
        rapport=self.RapportRespCom(user)
        print(rapport)
        self.stackedWidget.setCurrentIndex(4)
        # Création d'un QTableWidget avec le nombre de lignes et de colonnes correspondant aux résultats
        table = QTableWidget(len(rapport), len(rapport[0]))  # len(info) donne le nombre de lignes, len(info[0]) le nombre de colonnes
        table.setHorizontalHeaderLabels(["Mes rapports"])
        layout = QVBoxLayout()
        layout.addWidget(table)
        
        button = QPushButton("Nouveau rapport")
        button.setStyleSheet("background-color: rgb(0, 80, 78); color: rgb(255, 255, 255); font-weight: bold;")
        layout.addWidget(button)
        button.clicked.connect(lambda checked, user=user: self.ecrireRapport(user))
 
        # Remplissage du tableau avec les données
        for i, row in enumerate(rapport):
            for j, col in enumerate(row):
                item = QTableWidgetItem(str(col))
                table.setItem(i, j, item)

        # Réglages facultatifs pour le style
        table.horizontalHeader().setStretchLastSection(True)  # Étirer la dernière colonne pour remplir l'espace restant
        table.verticalHeader().setVisible(False)  # Masquer les en-têtes de ligne

        # Insérer le tableau dans votre widget existant
        widget_layout = self.findChild(QWidget, "classeContainer_5")
        widget_layout.setLayout(layout)
        
    def afficherPage(self):
        self.stackedWidget.setCurrentIndex(2)

    def ecrireRapport(self, user):
        self.stackedWidget.setCurrentIndex(5)
        self.validerRappContaint.clicked.connect(lambda checked, user=user: self.envoyeRapport(user))
        # QMessageBox.information(self, "Envoi du rapport", "Confirmez-vous envoi?")
        
    
    def envoyeRapport(self, user):
        rapport = self.textEdit.toPlainText()
        print(rapport)
        print(user)
        try:
            connection = mysql.connector.connect(
                host="192.168.0.10",
                user="massina",
                password="Passer",
                database="Saytu"
            )

            if connection.is_connected(): 
                cursor = connection.cursor()

                # Exécuter une requête pour vérifier les informations d'authentification
                query = "INSERT INTO RapportRespCom(id,avis,mc,rp,pv) VALUES(0,%s,2,%s,1)"
                cursor.execute(query, (rapport, user[0],))
                connection.commit()
                cursor.close()
                connection.close()   
                # QMessageBox.information(self, "Envoi réussie", "Envoi effectué avec succès")
        except mysql.connector.Error as error:
            # Gérer les erreurs de connexion à la base de données
            QMessageBox.critical(self, "Erreur de connexion", f"Erreur : {str(error)}")

    def RapportDepDir(self,user): 
        rapport=[]
        try:
            connection = mysql.connector.connect(
                host="192.168.0.10",
                user="massina",
                password="Passer",
                database="Saytu"
            )

            if connection.is_connected():
                cursor = connection.cursor()

                # Requête pour récupérer les rôles associés à l'utilisateur
                query = """
                    SELECT avis AS Avis, CONCAT(Utilisateurs.prenom,' ',Utilisateurs.nom) AS Chef_Dep
                    FROM RapportDepDir
                    JOIN Utilisateurs ON RapportDepDir.cd = Utilisateurs.id;
                """
                cursor.execute(query,)
                rows = cursor.fetchall()
            
                # Ajouter toutes les lignes de résultats à la liste info
                for row in rows:
                    rapport.append(row)
                
                cursor.close()
                connection.close()
        except mysql.connector.Error as error:
            QMessageBox.critical(self, "Erreur", f"Erreur lors de la récupération des informations : {str(error)}")

        return rapport
    
    def affichePageRapportDepDir(self,user):
        rapport=self.RapportDepDir(user)
        print(rapport)
        self.stackedWidget.setCurrentIndex(6)
        # Création d'un QTableWidget avec le nombre de lignes et de colonnes correspondant aux résultats
        table = QTableWidget(len(rapport), len(rapport[0]))  # len(info) donne le nombre de lignes, len(info[0]) le nombre de colonnes
        table.setHorizontalHeaderLabels(["Avis","Chef de départemet"])
        layout = QVBoxLayout()
        layout.addWidget(table)
        
        # Remplissage du tableau avec les données
        for i, row in enumerate(rapport):
            for j, col in enumerate(row):
                item = QTableWidgetItem(str(col))
                table.setItem(i, j, item)

        # Réglages facultatifs pour le style 
        table.horizontalHeader().setStretchLastSection(True)  # Étirer la dernière colonne pour remplir l'espace restant
        table.verticalHeader().setVisible(False)  # Masquer les en-têtes de ligne

        # Insérer le tableau dans votre widget existant
        widgetlayout = self.findChild(QWidget, "classeContainer_6")
        widgetlayout.setLayout(layout)
            
        
    
    def PV(self,user): 
        pv=[]
        try:
            connection = mysql.connector.connect(
                host="192.168.0.10",
                user="massina",
                password="Passer",
                database="Saytu"
            )

            if connection.is_connected():
                cursor = connection.cursor()

                # Requête pour récupérer les rôles associés à l'utilisateur
                query = """
                    SELECT avis AS Avis, CONCAT(Utilisateurs.prenom,' ',Utilisateurs.nom) AS Chef_Dep
                    FROM PV
                    JOIN Utilisateurs ON PV.mc = Utilisateurs.id;
                """ 
                cursor.execute(query,)
                rows = cursor.fetchall()
            
                # Ajouter toutes les lignes de résultats à la liste info
                for row in rows:
                    pv.append(row)
                
                cursor.close()
                connection.close()
        except mysql.connector.Error as error:
            QMessageBox.critical(self, "Erreur", f"Erreur lors de la récupération des informations : {str(error)}")

        return pv
    
    def affichePagePV(self,user):
        pv=self.PV(user)
        print(pv)
        self.stackedWidget.setCurrentIndex(7)
        # Création d'un QTableWidget avec le nombre de lignes et de colonnes correspondant aux résultats
        table = QTableWidget(len(pv), len(pv[0]))  # len(info) donne le nombre de lignes, len(info[0]) le nombre de colonnes
        table.setHorizontalHeaderLabels(["Avis","Membre com. péda."])
        layout = QVBoxLayout()
        layout.addWidget(table)
        
        # Remplissage du tableau avec les données
        for i, row in enumerate(pv):
            for j, col in enumerate(row):
                item = QTableWidgetItem(str(col))
                table.setItem(i, j, item)

        # Réglages facultatifs pour le style 
        table.horizontalHeader().setStretchLastSection(True)  # Étirer la dernière colonne pour remplir l'espace restant
        table.verticalHeader().setVisible(False)  # Masquer les en-têtes de ligne

        # Insérer le tableau dans votre widget existant
        widgetl = self.findChild(QWidget, "classeContainer_7")
        widgetl.setLayout(layout)
        
        
        
        
    def RapportCdDir(self,user): 
        rapport=[]
        try:
            connection = mysql.connector.connect(
                host="192.168.0.10",
                user="massina",
                password="Passer",
                database="Saytu"
            )

            if connection.is_connected():
                cursor = connection.cursor()

                # Requête pour récupérer les rôles associés à l'utilisateur
                query = """
                    SELECT avis  FROM RapportDepDir
                    where cd = %s ;
                """
                cursor.execute(query,(user[0],))
                rows = cursor.fetchall()
            
                # Ajouter toutes les lignes de résultats à la liste info
                for row in rows:
                    rapport.append(row)
                
                cursor.close()
                connection.close()
        except mysql.connector.Error as error:
            QMessageBox.critical(self, "Erreur", f"Erreur lors de la récupération des informations : {str(error)}")

        return rapport
    
    def affichePagePVCD(self,user):
        rapport=self.RapportCdDir(user)
        print(rapport)
        self.stackedWidget.setCurrentIndex(8)
        # Création d'un QTableWidget avec le nombre de lignes et de colonnes correspondant aux résultats
        table = QTableWidget(len(rapport), len(rapport[0]))  # len(info) donne le nombre de lignes, len(info[0]) le nombre de colonnes
        table.setHorizontalHeaderLabels(["Mes rapports"])
        layout = QVBoxLayout() 
        layout.addWidget(table)
        
        button = QPushButton("Nouveau rapport")
        button.setStyleSheet("background-color: rgb(0, 80, 78); color: rgb(255, 255, 255); font-weight: bold;")
        layout.addWidget(button)
        button.clicked.connect(lambda checked, user=user: self.ecrireRapportDepDir(user))

        # Remplissage du tableau avec les données
        for i, row in enumerate(rapport):
            for j, col in enumerate(row):
                item = QTableWidgetItem(str(col))
                table.setItem(i, j, item)

        # Réglages facultatifs pour le style
        table.horizontalHeader().setStretchLastSection(True)  # Étirer la dernière colonne pour remplir l'espace restant
        table.verticalHeader().setVisible(False)  # Masquer les en-têtes de ligne

        # Insérer le tableau dans votre widget existant
        widget_layout = self.findChild(QWidget, "classeContainer_8")
        widget_layout.setLayout(layout)
        
        
    def ecrireRapportDepDir(self, user):
        self.stackedWidget.setCurrentIndex(9)
        self.validerRappContaint_2.clicked.connect(lambda checked, user=user: self.envoyePV(user))
        # QMessageBox.information(self, "Envoi du rapport", "Confirmez-vous envoi?")
        
    
    def envoyePV(self, user):
        rapport = self.textEditRap_2.toPlainText()
        print(rapport)
        print(user)
        try:
            connection = mysql.connector.connect(
                host="192.168.0.10",
                user="massina",
                password="Passer",
                database="Saytu"
            )
 
            if connection.is_connected(): 
                cursor = connection.cursor()

                # Exécuter une requête pour vérifier les informations d'authentification
                query = "INSERT INTO RapportDepDir(id,avis,de,cd) VALUES(0,%s,1,%s)"
                cursor.execute(query, (rapport, user[0],))
                connection.commit()
                cursor.close()
                connection.close()   
                # QMessageBox.information(self, "Envoi réussie", "Envoi effectué avec succès")
        except mysql.connector.Error as error:
            # Gérer les erreurs de connexion à la base de données
            QMessageBox.critical(self, "Erreur de connexion", f"Erreur : {str(error)}")

    def RapportComResp(self,user): 
        rapport=[]
        try:
            connection = mysql.connector.connect(
                host="192.168.0.10",
                user="massina",
                password="Passer",
                database="Saytu"
            )

            if connection.is_connected():
                cursor = connection.cursor()

                # Requête pour récupérer les rôles associés à l'utilisateur
                query = """
                    SELECT avis  FROM RapportRespCom;
                """
                cursor.execute(query,)
                rows = cursor.fetchall()
            
                # Ajouter toutes les lignes de résultats à la liste info
                for row in rows:
                    rapport.append(row)
                
                cursor.close()
                connection.close()
        except mysql.connector.Error as error:
            QMessageBox.critical(self, "Erreur", f"Erreur lors de la récupération des informations : {str(error)}")

        return rapport
    
    def affichePageRapportComResp(self,user):
        rapport=self.RapportComResp(user)
        print(rapport)
        self.stackedWidget.setCurrentIndex(10)
        # Création d'un QTableWidget avec le nombre de lignes et de colonnes correspondant aux résultats
        table = QTableWidget(len(rapport), len(rapport[0]))  # len(info) donne le nombre de lignes, len(info[0]) le nombre de colonnes
        table.setHorizontalHeaderLabels(["Rapports des responsables pédagogiques"])
        layout = QVBoxLayout()
        layout.addWidget(table)
        
    
        # Remplissage du tableau avec les données
        for i, row in enumerate(rapport):
            for j, col in enumerate(row):
                item = QTableWidgetItem(str(col))
                table.setItem(i, j, item)

        # Réglages facultatifs pour le style
        table.horizontalHeader().setStretchLastSection(True)  # Étirer la dernière colonne pour remplir l'espace restant
        table.verticalHeader().setVisible(False)  # Masquer les en-têtes de ligne

        # Insérer le tableau dans votre widget existant
        widgetayout = self.findChild(QWidget, "classeContainer_10")
        widgetayout.setLayout(layout) 
        
         
    def PVComDep(self,user): 
        rapport=[]
        try:
            connection = mysql.connector.connect(
                host="192.168.0.10",
                user="massina",
                password="Passer",
                database="Saytu" 
            )

            if connection.is_connected():
                cursor = connection.cursor()

                # Requête pour récupérer les rôles associés à l'utilisateur
                query = """
                    SELECT avis  FROM PV;
                """
                    # where mc = %s ;
                cursor.execute(query,)
                rows = cursor.fetchall()
            
                # Ajouter toutes les lignes de résultats à la liste info
                for row in rows:
                    rapport.append(row)
                
                cursor.close()
                connection.close()
        except mysql.connector.Error as error:
            QMessageBox.critical(self, "Erreur", f"Erreur lors de la récupération des informations : {str(error)}")

        return rapport
    
    def affichePagePVComDep(self,user):
        rapport=self.PVComDep(user)
        print(rapport)
        self.stackedWidget.setCurrentIndex(11)
        # Création d'un QTableWidget avec le nombre de lignes et de colonnes correspondant aux résultats
        table = QTableWidget(len(rapport), len(rapport[0]))  # len(info) donne le nombre de lignes, len(info[0]) le nombre de colonnes
        table.setHorizontalHeaderLabels(["Mes PVs"])
        layout = QVBoxLayout()
        layout.addWidget(table)
        
        button = QPushButton("Nouveau PV")
        button.setStyleSheet("background-color: rgb(0, 80, 78); color: rgb(255, 255, 255); font-weight: bold;")
        layout.addWidget(button)
        button.clicked.connect(lambda checked, user=user: self.ecrirePVComDep(user))

        # Remplissage du tableau avec les données
        for i, row in enumerate(rapport):
            for j, col in enumerate(row):
                item = QTableWidgetItem(str(col))
                table.setItem(i, j, item)

        # Réglages facultatifs pour le style
        table.horizontalHeader().setStretchLastSection(True)  # Étirer la dernière colonne pour remplir l'espace restant
        table.verticalHeader().setVisible(False)  # Masquer les en-têtes de ligne

        # Insérer le tableau dans votre widget existant
        widgeayout = self.findChild(QWidget, "classeContainer_21")
        widgeayout.setLayout(layout)
        
        
    def ecrirePVComDep(self, user):
        self.stackedWidget.setCurrentIndex(12)
        self.validerRappContaint_5.clicked.connect(lambda checked, user=user: self.envoyePVComDep(user))
        # QMessageBox.information(self, "Envoi du rapport", "Confirmez-vous envoi?")
        
    
    def envoyePVComDep(self, user):
        rapport = self.textEditRap_5.toPlainText()
        print(rapport)
        print(user)
        try:
            connection = mysql.connector.connect(
                host="192.168.0.10",
                user="massina",
                password="Passer",
                database="Saytu"
            )
 
            if connection.is_connected(): 
                cursor = connection.cursor()

                # Exécuter une requête pour vérifier les informations d'authentification
                query = "INSERT INTO PV(id,avis,mc,cd,rapportDepDir) VALUES(0,%s,2,1,1)"
                cursor.execute(query, (rapport,user[0]))
                connection.commit()
                cursor.close()
                connection.close()   
                # QMessageBox.information(self, "Envoi réussie", "Envoi effectué avec succès")
        except mysql.connector.Error as error:
            # Gérer les erreurs de connexion à la base de données
            QMessageBox.critical(self, "Erreur de connexion", f"Erreur : {str(error)}")

        
class Saytu(QMainWindow):
    def __init__(self):  
        super(Saytu, self).__init__()
        loadUi(connexion_ui, self)
        self.setWindowTitle("Saytu")
        # Connecter le bouton de connexion à la fonction d'authentification
        self.loginButton.clicked.connect(self.authentifier)

    def authentifier(self):
        # Récupérer les informations saisies par l'utilisateur
        username = self.login.text().strip()
        password = hashlib.sha256(self.passwd.text().strip().encode()).hexdigest()

        # Connexion à la base de données MySQL
        try:
            connection = mysql.connector.connect(
                host="192.168.0.10",
                user="massina",
                password="Passer",
                database="Saytu"
            )

            if connection.is_connected():
                cursor = connection.cursor()

                # Exécuter une requête pour vérifier les informations d'authentification
                query = "SELECT * FROM Utilisateurs WHERE numero = %s AND passwd = %s"
                cursor.execute(query, (username, password))
                utilisateur = cursor.fetchone()

                cursor.close()
                connection.close()

                if utilisateur:
                    # Authentification réussie
                    QMessageBox.information(self, "Authentification réussie", f"Bienvenue, {utilisateur[5]} {utilisateur[6]}!")
                    self.afficher_interface(utilisateur)  # Afficher l'interface avec l'ID de l'utilisateur
                else:
                    # Nom d'utilisateur ou mot de passe incorrect
                    QMessageBox.warning(self, "Authentification échouée", "Nom d'utilisateur ou mot de passe incorrect.")

        except mysql.connector.Error as error:
            # Gérer les erreurs de connexion à la base de données
            QMessageBox.critical(self, "Erreur de connexion", f"Erreur : {str(error)}")

    def recuperer_roles(self, user_id):
        # Récupérer les rôles associés à l'utilisateur depuis la base de données
        roles = []
        try:
            connection = mysql.connector.connect(
                host="192.168.0.10",
                user="massina",
                password="Passer",
                database="Saytu"
            )

            if connection.is_connected():
                cursor = connection.cursor()  

                # Requête pour récupérer les rôles associés à l'utilisateur
                query = """
                    SELECT r.nom
                    FROM Roles r
                    JOIN uRoles ur ON r.id = ur.role
                    WHERE ur.utilisateur = %s
                """  
                cursor.execute(query, (user_id,)) 
                rows = cursor.fetchall()
                roles = [row[0] for row in rows]

                cursor.close()
                connection.close()

        except mysql.connector.Error as error:
            QMessageBox.critical(self, "Erreur", f"Erreur lors de la récupération des rôles : {str(error)}")
 
        return roles
 
    def afficher_interface(self, utilisateur):
        print(utilisateur)
        self.setWindowTitle("Saytu")
        
        # Récupérer les rôles de l'utilisateur
        roles = self.recuperer_roles(utilisateur[0])
 
        # Récupérer les classes de l'utilisateur
        classes = self.getClass(utilisateur)

        # Créer et afficher l'interface utilisateur avec les boutons dynamiques
        self.hide()  # Cacher la fenêtre de connexion
        interface = InterfaceUtilisateur(roles, utilisateur, classes)
        interface.show()

    def getClass(self, user):
        # Récupérer les classes pour l'utilisateur spécifié
        classes = []
        try:
            connection = mysql.connector.connect(
                host="192.168.0.10",
                user="massina",
                password="Passer",
                database="Saytu"
            )

            if connection.is_connected():
                cursor = connection.cursor()

                # Exécuter une requête pour récupérer les classes de l'utilisateur
                query = "SELECT nom FROM Classes WHERE departement = %s"
                cursor.execute(query, (user[7],))
                classes = [row[0] for row in cursor.fetchall()]

                cursor.close()
                connection.close()

        except mysql.connector.Error as error:
            QMessageBox.critical(self, "Erreur", f"Erreur lors de la récupération des classes : {str(error)}")
        return classes

if __name__ == "__main__":
    app = QApplication(sys.argv)
    login_window = Saytu()
    login_window.show()
    sys.exit(app.exec_())

