import sys
import os
import mysql.connector # type: ignore
import hashlib
from PyQt5.QtWidgets import QApplication, QMainWindow, QPushButton, QVBoxLayout, QWidget, QMessageBox, QLabel # type: ignore
from PyQt5.uic import loadUi # type: ignore

# Obtenir le chemin absolu du répertoire contenant le script Python
script_dir = os.path.dirname(os.path.abspath(__file__))

# Spécifier le chemin relatif du fichier connexion.ui
connexion_ui = os.path.join(script_dir, "../FrontEnd/connexion.ui")
interface_ui = os.path.join(script_dir, "../FrontEnd/interface.ui")

class InterfaceUtilisateur(QMainWindow): 
    def __init__(self, roles, utilisateur):
        super().__init__()
        self.setWindowTitle("Interface Utilisateur")
        self.utilisateur = utilisateur 
        # Charger l'interface utilisateur depuis le fichier interface.ui
        loadUi(interface_ui, self) 

        # Créer un layout vertical pour organiser les boutons de fonctionnalités
        layout = QVBoxLayout() 
        print(utilisateur)

        self.button0 = QPushButton("Dashboard")
        self.button0.setStyleSheet("font-size: 16px; background-color: rgb(0, 80, 78); color: white; ")
        layout.addWidget(self.button0) 
        self.button0.clicked.connect(self.afficherPageDashbord)

        # Ajouter des boutons dynamiquement en fonction des rôles récupérés
        for role in roles:
            print(role)
            if role=="respPeda":
                self.button1 = QPushButton("Cahier de texte")
                self.button1.setStyleSheet("font-size: 16px; background-color: rgb(0, 80, 78); color: white; ")
                layout.addWidget(self.button1) 
                self.button1.clicked.connect(self.afficherPageDashbord)

                self.button2 = QPushButton("Evaluations")
                self.button2.setStyleSheet("font-size: 16px; background-color: rgb(0, 80, 78); color: white; ")
                layout.addWidget(self.button2)
                self.button2.clicked.connect(lambda checked, role=role: self.afficherPageDashbord)

            elif role=="membreCommissionPeda":
                self.button3 = QPushButton("Rapports")
                self.button3.setStyleSheet("font-size: 16px; background-color: rgb(0, 80, 78); color: white; ")
                layout.addWidget(self.button3)
                self.button3.clicked.connect(lambda checked, role=role: self.afficherPageDashbord)


                self.button4 = QPushButton("Recommandations")
                self.button4.setStyleSheet("font-size: 16px; background-color: rgb(0, 80, 78); color: white; ")
                layout.addWidget(self.button4)
                self.button4.clicked.connect(lambda checked, role=role: self.afficherPageDashbord)

                
            elif role=="estDedie":
                self.button5 = QPushButton("PV")
                self.button5.setStyleSheet("font-size: 16px; background-color: rgb(0, 80, 78); color: white; ")
                layout.addWidget(self.button5)
                self.button5.clicked.connect(lambda checked, role=role: self.afficherPageDashbord)


            elif role=="directeurEtude":
                self.button6 = QPushButton("Rapports")
                self.button6.setStyleSheet("font-size: 16px; background-color: rgb(0, 80, 78); color: white; ")
                layout.addWidget(self.button6)
                self.button6.clicked.connect(lambda checked, role=role: self.afficherPageDashbord)


            elif role=="chefDep":
                self.button7 = QPushButton("Cahier de texte")
                self.button7.setStyleSheet("font-size: 16px; background-color: rgb(0, 80, 78); color: white; ")
                layout.addWidget(self.button7)
                self.button7.clicked.connect(self.afficherPageClasse)

                self.button8 = QPushButton("PV reçus")
                self.button8.setStyleSheet("font-size: 16px; background-color: rgb(0, 80, 78); color: white; ")
                layout.addWidget(self.button8)
                self.button8.clicked.connect(self.afficherPage)

                self.button9 = QPushButton("PV envoyés")
                self.button9.setStyleSheet("font-size: 16px; background-color: rgb(0, 80, 78); color: white; ")
                layout.addWidget(self.button9)
                self.button9.clicked.connect(lambda checked, role=role: self.afficherPageDashbord)

                self.button10 = QPushButton("Evaluations")
                self.button10.setStyleSheet("font-size: 16px; background-color: rgb(0, 80, 78); color: white; ")
                layout.addWidget(self.button10)
                self.button10.clicked.connect(lambda checked, role=role: self.afficherPageDashbord)

                # Connecter le signal clicked du bouton à une fonction de traitement

            # Trouver le conteneur dans l'interface où vous souhaitez ajouter les boutons
            self.user = self.findChild(QLabel, "user")
            self.user.setText(f"Bienvenue {self.utilisateur[1]} {self.utilisateur[2]}!")
            self.user.setStyleSheet("font-weight : bold; color: rgb(0, 80, 78); font-size: 28px")
            self.user.adjustSize()
            sidebar = self.findChild(QWidget, "sidebar")
            sidebar.setLayout(layout)

    def afficherPageDashbord(self,utilisateur):
        self.stackedWidget.setCurrentIndex(0)

    def afficherPageClasse(self):
        self.stackedWidget.setCurrentIndex(1)
    def afficherPage(self):
        self.stackedWidget.setCurrentIndex(2)
        
    

class MainWindow(QMainWindow):
    def __init__(self):
        super(MainWindow, self).__init__()
        loadUi(connexion_ui, self)

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
                query = "SELECT id, prenom, nom FROM Utilisateurs WHERE numero = %s AND passwd = %s"
                cursor.execute(query, (username, password))
                utilisateur = cursor.fetchone()

                cursor.close()
                connection.close()

                if utilisateur:
                    # Authentification réussie
                    QMessageBox.information(self, "Authentification réussie", f"Bienvenue, {utilisateur[1]} {utilisateur[2]}!")
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
        # Récupérer les rôles de l'utilisateur
        roles = self.recuperer_roles(utilisateur[0])

        # Créer et afficher l'interface utilisateur avec les boutons dynamiques
        self.hide()  # Cacher la fenêtre de connexion
        print(utilisateur)
        interface = InterfaceUtilisateur(roles,utilisateur)
        interface.show()

if __name__ == "__main__":
    app = QApplication(sys.argv)
    login_window = MainWindow()
    login_window.show()
    sys.exit(app.exec_())

