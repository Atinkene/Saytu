# -*- coding: utf-8 -*-

################################################################################
## Form generated from reading UI file 'accueiljueouW.ui'
##
## Created by: Qt User Interface Compiler version 5.15.2
##
## WARNING! All changes made in this file will be lost when recompiling UI file!
################################################################################

from PySide2.QtCore import * # type: ignore
from PySide2.QtGui import * # type: ignore
from PySide2.QtWidgets import * # type: ignore

import acceui_rc

class Ui_MainWindow(object):
    def setupUi(self, MainWindow):
        if not MainWindow.objectName():
            MainWindow.setObjectName(u"MainWindow")
        MainWindow.setEnabled(True)
        MainWindow.resize(638, 369)
        MainWindow.setMinimumSize(QSize(638, 369))
        MainWindow.setMaximumSize(QSize(638, 369))
        MainWindow.setStyleSheet(u"background-color: rgb(255, 255, 255);")
        self.centralwidget = QWidget(MainWindow)
        self.centralwidget.setObjectName(u"centralwidget")
        self.header = QFrame(self.centralwidget)
        self.header.setObjectName(u"header")
        self.header.setGeometry(QRect(10, 0, 601, 71))
        sizePolicy = QSizePolicy(QSizePolicy.Expanding, QSizePolicy.Preferred)
        sizePolicy.setHorizontalStretch(0)
        sizePolicy.setVerticalStretch(0)
        sizePolicy.setHeightForWidth(self.header.sizePolicy().hasHeightForWidth())
        self.header.setSizePolicy(sizePolicy)
        self.header.setFrameShape(QFrame.StyledPanel)
        self.header.setFrameShadow(QFrame.Raised)
        self.frame_4 = QFrame(self.header)
        self.frame_4.setObjectName(u"frame_4")
        self.frame_4.setGeometry(QRect(10, 10, 181, 51))
        self.frame_4.setStyleSheet(u"background-color: rgb(85, 170, 255);\n"
"")
        self.frame_4.setFrameShape(QFrame.StyledPanel)
        self.frame_4.setFrameShadow(QFrame.Raised)
        self.pushButton_5 = QPushButton(self.frame_4)
        self.pushButton_5.setObjectName(u"pushButton_5")
        self.pushButton_5.setGeometry(QRect(70, 10, 75, 23))
        font = QFont()
        font.setBold(True)
        font.setItalic(False)
        font.setWeight(75)
        self.pushButton_5.setFont(font)
        self.pushButton_5.setStyleSheet(u"	color:white;\n"
"")
        self.pushButton_5.setCheckable(True)
        self.label_2 = QLabel(self.frame_4)
        self.label_2.setObjectName(u"label_2")
        self.label_2.setGeometry(QRect(20, 10, 30, 30))
        self.label_2.setMinimumSize(QSize(30, 30))
        self.label_2.setMaximumSize(QSize(30, 30))
        self.label_2.setPixmap(QPixmap(u":/acceuil/1.jpg"))
        self.label_2.setScaledContents(True)
        self.nom_application = QFrame(self.header)
        self.nom_application.setObjectName(u"nom_application")
        self.nom_application.setGeometry(QRect(210, 10, 381, 51))
        font1 = QFont()
        font1.setBold(True)
        font1.setItalic(True)
        font1.setWeight(75)
        font1.setStrikeOut(False)
        self.nom_application.setFont(font1)
        self.nom_application.setStyleSheet(u"background-color: rgb(85, 170, 255);\n"
"")
        self.nom_application.setFrameShape(QFrame.StyledPanel)
        self.nom_application.setFrameShadow(QFrame.Raised)
        self.label = QLabel(self.nom_application)
        self.label.setObjectName(u"label")
        self.label.setGeometry(QRect(50, 19, 281, 21))
        font2 = QFont()
        font2.setPointSize(10)
        self.label.setFont(font2)
        self.corp_app = QFrame(self.centralwidget)
        self.corp_app.setObjectName(u"corp_app")
        self.corp_app.setGeometry(QRect(10, 70, 601, 291))
        sizePolicy1 = QSizePolicy(QSizePolicy.Preferred, QSizePolicy.Preferred)
        sizePolicy1.setHorizontalStretch(0)
        sizePolicy1.setVerticalStretch(0)
        sizePolicy1.setHeightForWidth(self.corp_app.sizePolicy().hasHeightForWidth())
        self.corp_app.setSizePolicy(sizePolicy1)
        self.corp_app.setFrameShape(QFrame.StyledPanel)
        self.corp_app.setFrameShadow(QFrame.Raised)
        self.frame_acteur = QFrame(self.corp_app)
        self.frame_acteur.setObjectName(u"frame_acteur")
        self.frame_acteur.setGeometry(QRect(10, 10, 161, 281))
        self.frame_acteur.setStyleSheet(u"background-color: rgb(85, 170, 255);\n"
"\n"
"")
        self.frame_acteur.setFrameShape(QFrame.StyledPanel)
        self.frame_acteur.setFrameShadow(QFrame.Raised)
        self.acteur = QFrame(self.frame_acteur)
        self.acteur.setObjectName(u"acteur")
        self.acteur.setGeometry(QRect(0, 0, 150, 161))
        self.acteur.setStyleSheet(u"QPushButton{\n"
"	color:white;\n"
"}\n"
"")
        self.acteur.setFrameShape(QFrame.StyledPanel)
        self.acteur.setFrameShadow(QFrame.Raised)
        self.verticalLayout_2 = QVBoxLayout(self.acteur)
        self.verticalLayout_2.setObjectName(u"verticalLayout_2")
        self.C_Depart = QPushButton(self.acteur)
        self.C_Depart.setObjectName(u"C_Depart")
        self.C_Depart.setCheckable(True)
        self.C_Depart.setAutoExclusive(True)

        self.verticalLayout_2.addWidget(self.C_Depart)

        self.R_peda = QPushButton(self.acteur)
        self.R_peda.setObjectName(u"R_peda")
        self.R_peda.setCheckable(True)
        self.R_peda.setAutoExclusive(True)

        self.verticalLayout_2.addWidget(self.R_peda)

        self.R_Classe = QPushButton(self.acteur)
        self.R_Classe.setObjectName(u"R_Classe")
        self.R_Classe.setCheckable(True)
        self.R_Classe.setAutoExclusive(True)

        self.verticalLayout_2.addWidget(self.R_Classe)

        self.D_Etude = QPushButton(self.acteur)
        self.D_Etude.setObjectName(u"D_Etude")
        self.D_Etude.setStyleSheet(u"")
        self.D_Etude.setCheckable(True)
        self.D_Etude.setAutoExclusive(True)

        self.verticalLayout_2.addWidget(self.D_Etude)

        self.use_case = QFrame(self.corp_app)
        self.use_case.setObjectName(u"use_case")
        self.use_case.setGeometry(QRect(180, 10, 421, 271))
        self.use_case.setFrameShape(QFrame.StyledPanel)
        self.use_case.setFrameShadow(QFrame.Raised)
        self.tache = QFrame(self.use_case)
        self.tache.setObjectName(u"tache")
        self.tache.setGeometry(QRect(10, 10, 111, 201))
        self.tache.setStyleSheet(u"background-color: rgb(85, 170, 255);\n"
"color:white;\n"
"")
        self.tache.setFrameShape(QFrame.StyledPanel)
        self.tache.setFrameShadow(QFrame.Raised)
        self.pushButton_10 = QPushButton(self.tache)
        self.pushButton_10.setObjectName(u"pushButton_10")
        self.pushButton_10.setGeometry(QRect(20, 20, 75, 23))
        self.pushButton_10.setCheckable(True)
        self.pushButton_10.setAutoExclusive(True)
        self.pushButton_11 = QPushButton(self.tache)
        self.pushButton_11.setObjectName(u"pushButton_11")
        self.pushButton_11.setGeometry(QRect(20, 60, 75, 23))
        self.pushButton_11.setCheckable(True)
        self.pushButton_11.setAutoExclusive(True)
        self.pushButton_12 = QPushButton(self.tache)
        self.pushButton_12.setObjectName(u"pushButton_12")
        self.pushButton_12.setGeometry(QRect(20, 110, 75, 23))
        self.pushButton_12.setCheckable(True)
        self.pushButton_12.setAutoExclusive(True)
        self.pushButton_13 = QPushButton(self.tache)
        self.pushButton_13.setObjectName(u"pushButton_13")
        self.pushButton_13.setGeometry(QRect(20, 150, 75, 23))
        self.pushButton_13.setCheckable(True)
        self.pushButton_13.setAutoExclusive(True)
        self.pushButton_9 = QPushButton(self.tache)
        self.pushButton_9.setObjectName(u"pushButton_9")
        self.pushButton_9.setGeometry(QRect(20, 150, 75, 23))
        self.pushButton_9.setCheckable(True)
        self.pushButton_9.setAutoExclusive(True)
        self.pushButton_6 = QPushButton(self.tache)
        self.pushButton_6.setObjectName(u"pushButton_6")
        self.pushButton_6.setGeometry(QRect(20, 20, 75, 23))
        self.pushButton_6.setCheckable(True)
        self.pushButton_6.setAutoExclusive(True)
        self.pushButton_8 = QPushButton(self.tache)
        self.pushButton_8.setObjectName(u"pushButton_8")
        self.pushButton_8.setGeometry(QRect(20, 110, 75, 23))
        self.pushButton_8.setCheckable(True)
        self.pushButton_8.setAutoExclusive(True)
        self.pushButton_7 = QPushButton(self.tache)
        self.pushButton_7.setObjectName(u"pushButton_7")
        self.pushButton_7.setGeometry(QRect(20, 60, 75, 23))
        self.pushButton_7.setCheckable(True)
        self.pushButton_7.setAutoExclusive(True)
        self.pushButton_17 = QPushButton(self.tache)
        self.pushButton_17.setObjectName(u"pushButton_17")
        self.pushButton_17.setEnabled(True)
        self.pushButton_17.setGeometry(QRect(20, 150, 75, 23))
        self.pushButton_17.setStyleSheet(u"setvisible=false;")
        self.pushButton_17.setCheckable(True)
        self.pushButton_17.setAutoExclusive(True)
        self.pushButton_14 = QPushButton(self.tache)
        self.pushButton_14.setObjectName(u"pushButton_14")
        self.pushButton_14.setEnabled(True)
        self.pushButton_14.setGeometry(QRect(20, 20, 75, 23))
        self.pushButton_14.setAcceptDrops(False)
        self.pushButton_14.setAutoFillBackground(False)
        self.pushButton_14.setStyleSheet(u"Visible:false;")
        self.pushButton_14.setCheckable(True)
        self.pushButton_14.setAutoExclusive(True)
        self.pushButton_16 = QPushButton(self.tache)
        self.pushButton_16.setObjectName(u"pushButton_16")
        self.pushButton_16.setEnabled(True)
        self.pushButton_16.setGeometry(QRect(20, 60, 75, 23))
        self.pushButton_16.setCheckable(True)
        self.pushButton_16.setAutoExclusive(True)
        self.pushButton_15 = QPushButton(self.tache)
        self.pushButton_15.setObjectName(u"pushButton_15")
        self.pushButton_15.setEnabled(True)
        self.pushButton_15.setGeometry(QRect(20, 110, 75, 23))
        self.pushButton_15.setStyleSheet(u"")
        self.pushButton_15.setCheckable(True)
        self.pushButton_15.setAutoExclusive(True)
        self.pushButton_4 = QPushButton(self.tache)
        self.pushButton_4.setObjectName(u"pushButton_4")
        self.pushButton_4.setGeometry(QRect(20, 150, 75, 23))
        self.pushButton_4.setCheckable(True)
        self.pushButton_4.setAutoExclusive(True)
        self.pushButton_3 = QPushButton(self.tache)
        self.pushButton_3.setObjectName(u"pushButton_3")
        self.pushButton_3.setGeometry(QRect(20, 110, 75, 23))
        self.pushButton_3.setCheckable(True)
        self.pushButton_3.setAutoExclusive(True)
        self.pushButton = QPushButton(self.tache)
        self.pushButton.setObjectName(u"pushButton")
        self.pushButton.setGeometry(QRect(20, 20, 75, 23))
        self.pushButton.setCheckable(True)
        self.pushButton.setAutoExclusive(True)
        self.pushButton_2 = QPushButton(self.tache)
        self.pushButton_2.setObjectName(u"pushButton_2")
        self.pushButton_2.setGeometry(QRect(20, 60, 75, 23))
        self.pushButton_2.setCheckable(True)
        self.pushButton_2.setAutoExclusive(True)
        self.frame = QFrame(self.use_case)
        self.frame.setObjectName(u"frame")
        self.frame.setGeometry(QRect(129, 9, 281, 251))
        self.frame.setFrameShape(QFrame.StyledPanel)
        self.frame.setFrameShadow(QFrame.Raised)
        MainWindow.setCentralWidget(self.centralwidget)

        self.retranslateUi(MainWindow)
        self.pushButton_5.toggled.connect(self.acteur.setVisible)
        self.C_Depart.toggled.connect(self.pushButton.setVisible)
        self.C_Depart.toggled.connect(self.pushButton_2.setVisible)
        self.C_Depart.toggled.connect(self.pushButton_3.setVisible)
        self.C_Depart.toggled.connect(self.pushButton_4.setVisible)
        self.R_peda.toggled.connect(self.pushButton_6.setVisible)
        self.R_peda.toggled.connect(self.pushButton_7.setVisible)
        self.R_peda.toggled.connect(self.pushButton_8.setVisible)
        self.R_peda.toggled.connect(self.pushButton_9.setVisible)
        self.R_Classe.toggled.connect(self.pushButton_14.setVisible)
        self.R_Classe.toggled.connect(self.pushButton_15.setVisible)
        self.R_Classe.toggled.connect(self.pushButton_17.setVisible)
        self.R_Classe.toggled.connect(self.pushButton_16.setVisible)
        self.D_Etude.toggled.connect(self.pushButton_10.setVisible)
        self.D_Etude.toggled.connect(self.pushButton_11.setVisible)
        self.D_Etude.toggled.connect(self.pushButton_12.setVisible)
        self.D_Etude.toggled.connect(self.pushButton_13.setVisible)
        self.pushButton_5.toggled.connect(self.tache.setVisible)
        self.pushButton_14.toggled.connect(self.frame.setVisible)
        self.pushButton_16.toggled.connect(self.frame.setVisible)
        self.pushButton_15.toggled.connect(self.frame.setVisible)
        self.pushButton_17.toggled.connect(self.frame.setVisible)

        QMetaObject.connectSlotsByName(MainWindow)
    # setupUi

    def retranslateUi(self, MainWindow):
        MainWindow.setWindowTitle(QCoreApplication.translate("MainWindow", u"MainWindow", None))
        self.pushButton_5.setText(QCoreApplication.translate("MainWindow", u"MENU", None))
        self.label_2.setText("")
        self.label.setText(QCoreApplication.translate("MainWindow", u"APPLICATION DE GESTION DES EFFECTIVITES", None))
        self.C_Depart.setText(QCoreApplication.translate("MainWindow", u"chef Departement", None))
        self.R_peda.setText(QCoreApplication.translate("MainWindow", u"R. Pedagogique", None))
        self.R_Classe.setText(QCoreApplication.translate("MainWindow", u"R. classe", None))
        self.D_Etude.setText(QCoreApplication.translate("MainWindow", u"D. Etude", None))
        self.pushButton_10.setText(QCoreApplication.translate("MainWindow", u"D_E1", None))
        self.pushButton_11.setText(QCoreApplication.translate("MainWindow", u"D_E2", None))
        self.pushButton_12.setText(QCoreApplication.translate("MainWindow", u"D_E3", None))
        self.pushButton_13.setText(QCoreApplication.translate("MainWindow", u"D_E4", None))
        self.pushButton_9.setText(QCoreApplication.translate("MainWindow", u"R_P4", None))
        self.pushButton_6.setText(QCoreApplication.translate("MainWindow", u"R_P1", None))
        self.pushButton_8.setText(QCoreApplication.translate("MainWindow", u"R_P3", None))
        self.pushButton_7.setText(QCoreApplication.translate("MainWindow", u"R_P2", None))
        self.pushButton_17.setText(QCoreApplication.translate("MainWindow", u"R_C4", None))
        self.pushButton_14.setText(QCoreApplication.translate("MainWindow", u"R_C1", None))
        self.pushButton_16.setText(QCoreApplication.translate("MainWindow", u"R_C2", None))
        self.pushButton_15.setText(QCoreApplication.translate("MainWindow", u"R_C3", None))
        self.pushButton_4.setText(QCoreApplication.translate("MainWindow", u"C_D4", None))
        self.pushButton_3.setText(QCoreApplication.translate("MainWindow", u"C_D3", None))
        self.pushButton.setText(QCoreApplication.translate("MainWindow", u"c_d1", None))
        self.pushButton_2.setText(QCoreApplication.translate("MainWindow", u"c_d2", None))
    # retranslateUi

