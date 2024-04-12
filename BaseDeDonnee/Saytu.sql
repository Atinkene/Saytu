-- Active: 1712455733471@@192.168.0.10@3306@Saytu
CREATE TABLE Departements(
                id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
                nom VARCHAR(50) NOT NULL,
                CONSTRAINT un_nom UNIQUE(nom)
)ENGINE=NDBCLUSTER;
INSERT INTO Departements (nom) VALUES ('Informatique');

CREATE TABLE Classes(
                id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
                nom VARCHAR(50) NOT NULL,
                departement INT NOT NULL,
                CONSTRAINT un_nom UNIQUE(nom),
                CONSTRAINT fk_departement FOREIGN KEY(departement) REFERENCES Departements(id)
)ENGINE=NDBCLUSTER;
INSERT INTO Classes(nom,departement) VALUES('GLSIB','1');

CREATE TABLE Utilisateurs(
                id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, 
                numero VARCHAR(10) NOT NULL,
                passwd VARCHAR(256) NOT NULL, 
                mail VARCHAR(200) NOT NULL,
                telephone VARCHAR(20) NOT NULL,
                prenom VARCHAR(200) NOT NULL,
                nom VARCHAR(200) NOT NULL,
                classe INT NOT NULL,
                departement INT NOT NULL,
                CONSTRAINT un_numero UNIQUE(numero),
                CONSTRAINT un_mail UNIQUE(mail),
                CONSTRAINT un_telephone UNIQUE(telephone),
                CONSTRAINT fk_classe FOREIGN KEY(classe) REFERENCES Classes(id),
                CONSTRAINT fk_departement_Utilisateurs FOREIGN KEY(departement) REFERENCES Departements(id)
)ENGINE=NDBCLUSTER;

INSERT INTO Utilisateurs(numero, passwd, mail, telephone, prenom, nom, classe,departement) VALUES 
('2021AS3', SHA2('Passer', 256), 'massina1@gmail.com', '2217757530511', 'Massina', 'bassene', 1,1),
('2021BS4', SHA2('Passer', 256), 'alassane1@gmail.com', '2217757530522', 'Alassane', 'SARR', 1,1),
('2021CS5', SHA2('Passer', 256), 'arphan1@gmail.com', '2217757530533', 'Arphan', 'BODIAN', 1,1),
('2021DS6', SHA2('Passer', 256), 'simon1@gmail.com', '2217757530544', 'Simon', 'KAMATE', 1,1),
('2021ES7', SHA2('Passer', 256), 'momar1@gmail.com', '2217757530555', 'Momar', 'DIENG', 1,1);

INSERT INTO Utilisateurs(numero, passwd, mail, telephone, prenom, nom, classe,departement) VALUES 
('2021FS2', SHA2('Passer', 256), 'test@gmail.com', '221775753056', 'Tester', 'Test', 1,1);

drop table Utilisateurs;
drop table Classes;
drop table Departements;
drop table uRoles;
drop table Roles;
drop table EC;
drop table UE;
drop table Evaluations;
drop table Chapitres;
drop table RapportDepDir;
drop table PV;
drop table RapportRespCom;


desc Utilisateurs;
SELECT * FROM Utilisateurs;

CREATE TABLE Roles(
                 id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, 
                 nom VARCHAR(200) NOT NULL,
                 CONSTRAINT un_nom_role UNIQUE(nom)
)ENGINE=NDBCLUSTER;

INSERT INTO Roles(nom) VALUES
                ('admin'),
                ('etudiant'),
                ('enseignant'),
                ('respClasse'),
                ('membreCommissionPeda'),
                ('estDedie'),
                ('respPeda'),
                ('chefDep'),
                ('directeurEtude');


CREATE TABLE uRoles(
                id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, 
                utilisateur INT NOT NULL,
                role INT NOT NULL,
                CONSTRAINT fk_utilisateur_uRole FOREIGN KEY(utilisateur) REFERENCES Utilisateurs(id),
                CONSTRAINT fk_role_uRole FOREIGN KEY(role) REFERENCES Roles(id)
)ENGINE=NDBCLUSTER;
INSERT INTO uRoles(utilisateur,role) VALUES 
                (514,9),
                (515,8),
                (516,7),
                (517,6),
                (518,5);

INSERT INTO uRoles(utilisateur,role) VALUES 
                (517,6);


INSERT INTO UE(nom,classe) VALUES
                ("Formation Humaine 1",2),
                ("Formation Scientifique",2),
                ("Algorithme et Langages Avancés 1",2),
                ("Système et Réseaux 1",2),
                ("Gestion de Données",2),
                ("Ingénierie Logiciel 1",2);

CREATE TABLE UE(
                id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, 
                nom VARCHAR(200) NOT NULL,
                classe INT NOT NULL,
                CONSTRAINT fk_classe_UE FOREIGN KEY(classe) REFERENCES Classes(id)
)ENGINE=NDBCLUSTER;

-- ALTER TABLE UE DROP CONSTRAINT un_nom_UE;
CREATE TABLE EC(
                id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, 
                nom VARCHAR(200) NOT NULL,
                ue INT NOT NULL,
                enseignant INT NOT NULL,                
                CONSTRAINT fk_ue_EC FOREIGN KEY(ue) REFERENCES UE(id),
                CONSTRAINT fk_enseignant_EC FOREIGN KEY(enseignant) REFERENCES Utilisateurs(id)
)ENGINE=NDBCLUSTER;
-- alter table EC DROP CONSTRAINT un_nom_EC;
CREATE TABLE Chapitres(
                id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, 
                nom VARCHAR(100) NOT NULL,
                dateDeb DATE NOT NULL,
                dateFin DATE NOT NULL,
                ec INT NOT NULL,
                CONSTRAINT fk_ec_Chapitres FOREIGN KEY(ec) REFERENCES EC(id)
)ENGINE=NDBCLUSTER;

INSERT INTO EC(nom, ue, enseignant) VALUES
                ("Anglais Technique",513, 1),
                ("Aspects Juridiques et Ethique des TIC",1, 2),
                ("Technique d expression ",513, 3),
                ("Recherche Opérationnelle", 514, 4),
                ("Probabilités et Statistiques", 514, 5);

CREATE TABLE Evaluations(
                id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, 
                avis VARCHAR(1000) NOT NULL,
                etudiant INT NOT NULL,
                ec INT NOT NULL,
                CONSTRAINT fk_ec_Evaluation FOREIGN KEY(ec) REFERENCES EC(id),
                CONSTRAINT fk_etudiant_EC FOREIGN KEY(etudiant) REFERENCES Utilisateurs(id)
)ENGINE=NDBCLUSTER;
INSERT INTO Evaluations(avis,etudiant,ec) VALUES
                ("Rien à signaler", 1, 1),
                ("Rien à signaler1", 1, 2),
                ("Rien à signaler2", 1, 3),
                ("RAS", 2, 1);

CREATE TABLE RapportDepDir(
                id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, 
                avis VARCHAR(1500) NOT NULL,
                de INT NOT NULL,
                cd INT NOT NULL,
                CONSTRAINT fk_de_RapportDepDir FOREIGN KEY(de) REFERENCES Utilisateurs(id),
                CONSTRAINT fk_cd_RapportDepDir FOREIGN KEY(cd) REFERENCES Utilisateurs(id)
)ENGINE=NDBCLUSTER;
INSERT INTO RapportDepDir(avis, de, cd) VALUES
                ("RAS pour les cours",1, 515);
                ("RAS pour les cours",1, 2),
                ("RAS pour les cours",1, 3),
                ("RAS pour les cours",1, 4);

CREATE TABLE PV(
                id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, 
                avis VARCHAR(1500) NOT NULL,
                mc INT NOT NULL,
                cd INT NOT NULL,
                rapportDepDir INT NOT NULL,
                CONSTRAINT fk_mc_PV FOREIGN KEY(mc) REFERENCES Utilisateurs(id),
                CONSTRAINT fk_cd_PV FOREIGN KEY(cd) REFERENCES Utilisateurs(id),
                CONSTRAINT fk_rapportDepDir_PV FOREIGN KEY(rapportDepDir) REFERENCES RapportDepDir(id)
)ENGINE=NDBCLUSTER;
INSERT INTO PV(avis, mc, cd,rapportDepDir) VALUES
                ("RAS obs",2, 515,1);
                ("RAS Obs",2, 2,1),
                ("RAS Obs",2, 3,1),
                ("RAS Obs",2, 4,1);

CREATE TABLE RapportRespCom(
                id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, 
                avis VARCHAR(1500) NOT NULL,
                mc INT NOT NULL,
                rp INT NOT NULL,
                pv INT NOT NULL,
                CONSTRAINT fk_mc_RapportRespCom FOREIGN KEY(mc) REFERENCES Utilisateurs(id),
                CONSTRAINT fk_rp_RapportRespCom FOREIGN KEY(rp) REFERENCES Utilisateurs(id),
                CONSTRAINT fk_pv_RapportRespCom FOREIGN KEY(pv) REFERENCES PV(id)
)ENGINE=NDBCLUSTER;

INSERT INTO RapportRespCom(avis,mc,rp,pv) VALUES
                ("RAS obs",2,516,1);
                ("RAS Obs",2,2,1),
                ("RAS Obs",2,3,1),
                ("RAS Obs",2,4,1);



INSERT INTO Chapitres(nom,dateDeb, dateFin,ec) VALUES 
                ("Chapitre 1 : ", CURRENT_DATE, CURRENT_DATE, 514),
                ("Chapitre 2 : ", CURRENT_DATE, CURRENT_DATE, 514),
                ("Chapitre 1 : ", CURRENT_DATE, CURRENT_DATE, 515),
                ("Chapitre 2 : ", CURRENT_DATE, CURRENT_DATE, 515),
                ("Chapitre 1 : ", CURRENT_DATE, CURRENT_DATE, 518);


SELECT DISTINCT UE.nom AS UE, EC.nom AS EC, Chapitres.nom AS Chapitre, Chapitres.dateDeb AS Debut, Chapitres.dateFin AS Fin
                    FROM Classes
                    JOIN UE ON Classes.id = UE.classe
                    JOIN EC ON UE.id = EC.ue
                    JOIN Chapitres ON EC.id = Chapitres.ec
                    WHERE Classes.nom = 'GLSIA';



SELECT avis  FROM RapportRespCom
                    where rp = 1 ;

SELECT RapportDepDir.avis AS Avis, cd_utilisateur.departement AS Departement, cd_utilisateur.id AS Chef_Depart FROM Utilisateurs JOIN Utilisateurs AS RapportDepDir ON Utilisateurs.cd = cd_utilisateur.id;

 SELECT avis AS Avis, CONCAT(Utilisateurs.prenom,' ',Utilisateurs.nom) AS Chef_Dep
                    FROM RapportDepDir
                    JOIN Utilisateurs ON RapportDepDir.cd = Utilisateurs.id;
                

SELECT avis AS Avis, CONCAT(Utilisateurs.prenom,' ',Utilisateurs.nom) AS Chef_Dep
                    FROM PV
                    JOIN Utilisateurs ON PV.mc = Utilisateurs.id;



 SELECT DISTINCT UE.nom AS UE, EC.nom AS EC, Chapitres.nom AS Chapitre, Chapitres.dateDeb AS Debut, Chapitres.dateFin AS Fin
                    FROM Classes
                    JOIN UE ON Classes.id = UE.classe
                    JOIN EC ON UE.id = EC.ue
                    JOIN Chapitres ON EC.id = Chapitres.ec
                    WHERE Classes.nom = 'GLSIB';