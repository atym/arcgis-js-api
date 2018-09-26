// COPYRIGHT © 201 Esri
//
// All rights reserved under the copyright laws of the United States
// and applicable international laws, treaties, and conventions.
//
// This material is licensed for use under the Esri Master License
// Agreement (MLA), and is bound by the terms of that agreement.
// You may redistribute and use this code without modification,
// provided you adhere to the terms of the MLA and include this
// copyright notice.
//
// See use restrictions at http://www.esri.com/legal/pdfs/mla_e204_e300/english
//
// For additional information, contact:
// Environmental Systems Research Institute, Inc.
// Attn: Contracts and Legal Services Department
// 380 New York Street
// Redlands, California, USA 92373
// USA
//
// email: contracts@esri.com
//
// See http://js.arcgis.com/3.26/esri/copyright.txt for details.

define({documentTypes:{data:{caption:"INSPIRE (Données)",description:""},service:{caption:"INSPIRE (Service)",description:""}},dataThemeKeywords:{caption:"Thème des données Inspire"},inspireServiceType:{discovery:"Services de découverte",view:"Service d'affichage",download:"Service de téléchargement",transformation:"Service de transformation",invoke:"Service d'invocation",other:"Autre service"},keywordSections:{dataTheme:"Thème des données Inspire",serviceCategory:"Catégorie de service ISO 19119",gemetConcept:"Concept GEMET",otherKeywords:"Autres mots-clés"},LanguageCode:{bul:"Bulgare",cze:"Tchèque",dan:"Danois",dut:"Néerlandais",eng:"Anglais",est:"Estonien",fin:"Finlandais",fre:"Français",ger:"Allemand",gre:"Grec",hun:"Hongrois",gle:"Gaélique (Irlandais)",ita:"Italien",lav:"Letton",lit:"Lituanien",mlt:"Maltais",pol:"Polonais",por:"Portugais",rum:"Roumain",slo:"Slovaque",slv:"Slovène",spa:"Espagnol",swe:"Suédois",chi:"Chinois",kor:"Coréen",nor:"Norvégien",rus:"Russe",tur:"Turc"},otherConstraints:{noLimitations:"Aucune limite",confidentialityOfProceedings:"La confidentialité des poursuites des autorités publiques...",internationalRelations:"Relations internationales, sécurité publique ou défense nationale",courseOfJustice:"Le cours de la justice, la possibilité pour toute personne de recevoir un procès équitable...",confidentialityOfCommercial:"La confidentialité des informations commerciales ou industrielles...",intellectualProperty:"Droits de propriété intellectuelle",confidentialityOfPersonalData:"La confidentialité des données personnelles et/ou des fichiers...",interestsOrProtection:"Les intérêts ou la protection de toute personne ayant fourni les informations...",protectionOfEnvironment:"La protection de l'environnement auquel ces informations ont trait...",freeText:"Texte libre"},serviceType:{humanInteractionService:"100 Services d'interaction humaine géographique",humanCatalogueViewer:"101 Visionneuse de catalogue",humanGeographicViewer:"102 Visionneuse géographique",humanGeographicSpreadsheetViewer:"103 Visionneuse de feuille de calcul géographique",humanServiceEditor:"104 Editeur de services",humanChainDefinitionEditor:"105 Editeur de définitions de chaînes",humanWorkflowEnactmentManager:"106 Gestionnaire de promulgation de workflow",humanGeographicFeatureEditor:"107 Editeur d'entités géographiques",humanGeographicSymbolEditor:"108 Editeur de symboles géographiques ",humanFeatureGeneralizationEditor:"109 Editeur de généralisation d'entités",humanGeographicDataStructureViewer:"110 Visionneuse de structure de données géographiques",infoManagementService:"200 Service de gestion des informations/modèles géographiques",infoFeatureAccessService:"201 Service d'accès aux entités",infoMapAccessService:"202 Service d'accès aux cartes",infoCoverageAccessService:"203 Service d'accès aux couvertures",infoSensorDescriptionService:"204 Service de description des capteurs",infoProductAccessService:"205 Service d'accès aux produits",infoFeatureTypeService:"206 Service de type d'entités",infoCatalogueService:"207 Service de catalogue",infoRegistryService:"208 Service de registre",infoGazetteerService:"209 Service de répertoire géographique",infoOrderHandlingService:"210 Service de gestion des ordres",infoStandingOrderService:"211 Service d'ordre constant",taskManagementService:"300 Services de gestion des tâches/workflow géographiques",chainDefinitionService:"301 Service de définition de chaîne",workflowEnactmentService:"302 Service de promulgation de workflow",subscriptionService:"303 Service d'abonnement",spatialProcessingService:"400 Services de traitement géographique - spatial",spatialCoordinateConversionService:"401 Service de conversion de coordonnée",spatialCoordinateTransformationService:"402 Service de transformation de coordonnées",spatialCoverageVectorConversionService:"403 Service de conversion de couverture/vecteur",spatialImageCoordinateConversionService:"404 Service de conversion de coordonnée d'image",spatialRectificationService:"405 Service de rectification",spatialOrthorectificationService:"406 Service d'orthorectification",spatialSensorGeometryModelAdjustmentService:"407 Service d'ajustement de modèle géométrique de capteur",spatialImageGeometryModelConversionService:"408 Service de conversion de modèle géométrique d'image",spatialSubsettingService:"409 Service de réduction",spatialSamplingService:"410 Service d'échantillonnage",spatialTilingChangeService:"411 Service de modification de tuilage",spatialDimensionMeasurementService:"412 Service de mesure des dimensions",spatialFeatureManipulationService:"413 Services de manipulation d'entités",spatialFeatureMatchingService:"414 Service d'appariement d'entités",spatialFeatureGeneralizationService:"415 Service de généralisation d'entités",spatialRouteDeterminationService:"416 Service de détermination d'itinéraire",spatialPositioningService:"417 Service de positionnement",spatialProximityAnalysisService:"418 Service d'analyse de proximité",thematicProcessingService:"500 Services de traitement géographique - thématique",thematicGoparameterCalculationService:"501 Service de calcul des paramètres géographiques",thematicClassificationService:"502 Service de classification thématique",thematicFeatureGeneralizationService:"503 Service de généralisation d'entités",thematicSubsettingService:"504 Service de réduction",thematicSpatialCountingService:"505 Service de comptabilisation spatiale",thematicChangeDetectionService:"506 Service de détection de changement",thematicGeographicInformationExtractionService:"507 Services d'extraction d'informations géographiques",thematicImageProcessingService:"508 Service de traitement d'images",thematicReducedResolutionGenerationService:"509 Service de génération de résolution réduite",thematicImageManipulationService:"510 Services de manipulation d'images",thematicImageUnderstandingService:"511 Services de compréhension d'images",thematicImageSynthesisService:"512 Services de synthèse d'images",thematicMultibandImageManipulationService:"513 Manipulation d'images à plusieurs canaux",thematicObjectDetectionService:"514 Service de détection d'objets",thematicGeoparsingService:"515 Service d'analyse géographique",thematicGeocodingService:"516 Service de géocodage",temporalProcessingService:"600 Services de traitement géographique - temporel",temporalReferenceSystemTransformationService:"601 Service de transformation des systèmes de référence temporelles",temporalSubsettingService:"602 Service de réduction",temporalSamplingService:"603 Service d'échantillonnage",temporalProximityAnalysisService:"604 Service d'analyse de proximité temporelle",metadataProcessingService:"700 Services de traitement géographique - métadonnées",metadataStatisticalCalculationService:"701 Service de calcul statistique",metadataGeographicAnnotationService:"702 Services d'annotation géographique",comService:"800 Services de communication géographique",comEncodingService:"801 Service de codage",comTransferService:"802 Service de transfert",comGeographicCompressionService:"803 Service de compression géographique",comGeographicFormatConversionService:"804 Service de conversion de format géographique",comMessagingService:"805 Service de messagerie",comRemoteFileAndExecutableManagement:"806 Gestion des fichiers distants et exécutables"},useLimitation:{noCondition:"Aucune condition ne s'applique",unknownCondition:"Conditions inconnues",freeText:"Texte libre"}});