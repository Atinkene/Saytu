-- Table Avis
CREATE TABLE Avis (
    idAvis INT NOT NULL AUTO_INCREMENT,
    contenu TEXT,
    date DATETIME DEFAULT CURRENT_TIMESTAMP,
    class VARCHAR(255),
    PRIMARY KEY (idAvis)
);

INSERT INTO Avis (contenu, date, class) VALUES
('Ceci est un avis', '2024-04-04 17:34:35', 'GLSI-B'),
('Ceci est un avis', '2024-04-04 17:35:03', 'GLSI-B'),
('Ceci est un troiseme avis', '2024-04-04 17:36:06', 'GLSI-B'),
('Ceci est un troiseme avis Loren Ipdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd', '2024-04-08 15:46:42', 'GLSI-B'),
('Ceci est un troiseme avis Loren Ipdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd', '2024-04-08 15:54:32', 'GLSI-AA'),
('hello', '2024-04-08 18:51:54', 'GLSI-A'),
('vvvvv', '2024-04-08 18:53:30', 'GLSI-C'),
('sadddd', '2024-04-08 18:57:34', 'bbb'),
('Gb', '2024-04-08 20:21:00', 'q'),
('Ceci est un troiseme avis Loren Ipdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd', '2024-04-08 21:07:13', 'GLSI-AA'),
('fuck', '2024-04-08 21:09:32', 'se'),
('wiwiwiwiw', '2024-04-10 21:25:05', 'GLSI-B'),
('arphan Bodian', '2024-04-10 23:58:58', 'GLSI-B'),
('bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb', '2024-04-11 15:20:11', 'GLSI-A'),
('Ceci est un troiseme avis Loren Ipdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd', '2024-04-11 15:45:44', 'GLSI-AA');

-- Table Planning
CREATE TABLE Planning (
    id INT NOT NULL AUTO_INCREMENT,
    nomCours VARCHAR(100),
    salle VARCHAR(50),
    prof VARCHAR(100),
    statusCours VARCHAR(50),
    class VARCHAR(50),
    jour VARCHAR(20),
    heure VARCHAR(20),
    PRIMARY KEY (id)
);

INSERT INTO Planning (nomCours, salle, prof, statusCours, class, jour, heure) VALUES
('Technologie de Securite', 'Salle 202', 'Dr Doudou Fall', 'YES', 'GLSI-B', 'Lundi', '08H-10H'),
('Dev Web Dinamique', 'Salle 202', 'Dr Fatou Ngom', 'NO', 'GLSI-B', 'Lundi', '14H30-16H30'),
('BDD Nouvelle Generation', 'Salle 202', 'Pr M. Lamine Ba', 'NO', 'GLSI-B', 'Mardi', '08H-10H'),
('Veille technologiqueTD', 'Salle 202', 'Dr Doudou Fall', 'YES', 'GLSI-B', 'Mardi', '14H30-16H30'),
('Gestion de projet et travail cooperatif', 'Salle 202', 'M. Diahme', 'YES', 'GLSI-B', 'Mardi', '16H30-18H30'),
('Dev Mobile Avance', 'Salle 202', 'M. Amadou Ndiaye', 'YES', 'GLSI-B', 'Mercredi', '10H-12H'),
('Dev Mobile Avance', 'Salle 202', 'M. Amadou Ndiaye', 'YES', 'GLSI-B', 'Jeudi', '08H-10H'),
('Gestion de projet et travail cooperatif', 'Salle 202', 'M. Diahame', 'YES', 'GLSI-B', 'Jeudi', '14H30-16H30'),
('Ingenieurie des processus logiciels', 'Salle 202', 'M. Bassirou Toure', 'YES', 'GLSI-B', 'Jeudi', '16H30-18H30'),
('Patrons de conception et tests logiciels', 'Salle 202', 'Dr Mohamed Diop', 'NO', 'GLSI-B', 'Vendredi', '08H-10H'),
('Admin Reseaux Local', 'Salle 202', 'Dr Ibrahima Ngom', 'YES', 'GLSI-B', 'Vendredi', '10H-12H'),
('Veille technologique', 'Salle 202', 'Dr Doudou Fall', 'NO', 'GLSI-B', 'Vendredi', '14H30-16H30'),
('Ingenieurie des processus logiciels', 'Salle 202', 'Dr Bassirou Toure', 'NO', 'GLSI-B', 'Vendredi', '16H30-18H30');

-- Table Pv
CREATE TABLE Pv (
    idPv INT NOT NULL AUTO_INCREMENT,
    contenu TEXT,
    date DATETIME DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (idPv)
);

INSERT INTO Pv (contenu, date) VALUES
('Contenu du PV 11111111 ici', '2024-04-06 13:50:37'),
('Contenu du PV 11111111 ici', '2024-04-06 13:51:59'),
('Contenu du PV 11111111 ici', '2024-04-06 13:52:41'),
('Contenu du PV 11111111 ici', '2024-04-06 13:53:46'),
('Contenu du PV 11111111 ici', '2024-04-06 13:54:12'),
('Contenu du PV 11111111 ici', '2024-04-06 13:54:40'),
('Contenu du PV 2222 ici', '2024-04-06 13:59:36'),
('Contenu du PV 333 ici', '2024-04-06 14:33:21'),
('Contenu du PV ici', '2024-04-06 14:45:50'),
('Contenu du PV ici', '2024-04-06 14:52:18'),
('hello', '2024-04-06 15:19:48'),
('hello', '2024-04-06 15:22:19'),
('hello', '2024-04-06 15:24:34'),
('hello', '2024-04-06 15:25:31'),
('helloooooooooooooooooo', '2024-04-06 20:27:15'),
('fuckDaShit', '2024-04-08 22:49:29'),
('hellllllllllllllllllllllllllllllllo', '2024-04-11 00:08:51'),
('mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm', '2024-04-11 15:35:32'),
('helloooooooooooooooooo', '2024-04-11 15:46:08');


-- Table Rapport
CREATE TABLE Rapport (
    idRapport INT NOT NULL AUTO_INCREMENT,
    contenu TEXT,
    date DATETIME DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (idRapport)
);

INSERT INTO Rapport (contenu, date) VALUES
('helloooooooooooo MDFK', '2024-04-06 20:50:38'),
('helloooo MDFK 2', '2024-04-06 20:50:58'),
('helloooo MDFK 3', '2024-04-06 20:58:50'),
('helloooo MDFK 444', '2024-04-06 21:05:52'),
('dooooooooo', '2024-04-08 23:29:47'),
('helllllllllllllllllllllllllllllllllllllo', '2024-04-11 00:08:03'),
('helllllllllllllllllllllllllllllllllllllo', '2024-04-11 00:08:05'),
('bbbbbbbbbbbbbbbbbbbbb', '2024-04-11 15:32:42'),
('helloooo MDFK 444', '2024-04-11 15:47:23');


-- Table User
CREATE TABLE User (
    email VARCHAR(255) NOT NULL PRIMARY KEY,
    nom VARCHAR(100),
    prenom VARCHAR(100),
    password VARCHAR(50),
    status VARCHAR(50),
    class VARCHAR(50)
);

INSERT INTO User (email, nom, prenom, password, status, class) VALUES
('111@esp.sn', 'sarr', 'latyr', 'passer123', 'resp_class', 'GLSI-B'),
('222@esp.sn', 'sarr', 'latyr', 'passer123', 'dir-etude', NULL),
('333@esp.sn', 'momar', 'dieng', 'passer123', 'resp_pedagogique', NULL),
('444@esp.sn', 'massina', 'Bassene', 'passer123', 'equipe_pedagogique', NULL),
('555@esp.sn', 'Arphan', 'Bodian', 'passer123', 'chef_departement', NULL),
('bbb@esp.sn', 'sarr', 'latyr', 'passer123', 'coord_pedagogique', NULL),
('email@example.com', 'Doe', 'John', 'motdepasse123', 'actif', 'A');



