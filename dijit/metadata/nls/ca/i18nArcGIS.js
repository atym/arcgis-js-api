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

define({documentTypes:{arcgis:{caption:"Metadades de l’ArcGIS",editorCaption:"Metadades",description:""}},emptyOption:"Buit",conditionals:{ISO19139A1_ROW4:"Si el nivell de la jerarquia de metadades és Conjunt de dades, és necessari un quadre de delimitació geogràfica o una descripció geogràfica.",ISO19139A1_ROW6:"És necessari un identificador o el nom del conjunt de dades.",ISO19139A1_ROW7:"Si se selecciona Altres restriccions, el valor Altres restriccions serà necessari.",ISO19139A1_ROW9:"Si l’àmbit no és un conjunt de dades ni una sèrie, serà necessària la descripció del nivell.",ISO19139A1_ROW10_11_12:"Si l’àmbit és un conjunt de dades o una sèrie, serà necessària una sentència, un pas de procés o un origen de dades.",ISO19139A1_ROW15:"Si se selecciona Disponibilitat del punt de control, serà necessària la descripció del punt de control.",ISO19139A1_ROW18:"Si la distribució està documentada, serà necessari el format, o bé el distribuïdor o format.",INSPIRE_AccessLimitation:" És necessari com a mínim un codi de restricció d’accés legal o un codi de classificació de seguretat. (INSPIRE)",INSPIRE_UseLimitation:" És necessària com a mínim una limitació d’ús. (INSPIRE)",INSPIRE_ConformanceResult:"Per a un informe de coherència de domini, és necessari un resultat de conformitat. (INSPIRE)",INSPIRE_DomainConsistency:"És necessari un informe de coherència de domini. (INSPIRE)",INSPIRE_LineageStatement:"Si l’àmbit és un conjunt de dades o una sèrie, és necessària una declaració de llinatge. (INSPIRE).",FGDC_DescIfTemporal:"És necessària una descripció per a una extensió temporal. (FGDC)",FGDC_Keywords:"És necessari un tema, una etiqueta o una paraula clau de tema. (FGDC)",FGDC_Reports:"Són necessaris els informes d’omissió de completesa i coherència conceptual. (FGDC)",FGDC_Temporal:"És necessària com a mínim una extensió temporal. (FGDC)",NAP_Contact:"Són necessaris una adreça o un punt de lliurament, un número de telèfon o de veu, o bé un recurs en línia o una URL. (NAP)",GEN_BoundingBox:"És necessari com a mínim un quadre de delimitació geogràfica.",GEN_ReportResult:"És necessari un resultat de conformitat o quantitatiu.",minLessThanMax:"El valor mínim ha de ser menor que el valor màxim."},hints:{integerGreaterThanZero:"(introduïu un enter > 0)",integerGreaterThanOne:"(introduïu un enter > 1)",integer0To100:"(introduïu un enter de 0 a 100)",maxScale:"(introduïu un enter > 0; per exemple, 50.000)",minScale:"(introduïu un enter > 0; per exemple, 150.000.000)",number0To100:"(introduïu un nombre de 0 a 100)",number0To360:"(introduïu un nombre de 0 a 360)",number90To90:"(introduïu un nombre de –90 a 90)",listOfDoubles:"(introduïu una llista de nombres i utilitzeu un espai per separar-los)"},htmlEditor:{button:"Edita..."},sections:{overview:"Descripció general",esri:"Esri",resource:"Recurs",reference:"Referència",content:"Contingut",distribution:"Distribució",quality:"Qualitat",eainfo:"Camps",representation:"Representació",metadata:"Metadades"},metadataStyle:{caption:"Estil de metadades de l’ArcGIS",changeButton:"Canvia...",dialogTitle:"Seleccioneu un estil de metadades",updating:"S’està actualitzant el document...","Item Description":"Descripció de l’element","FGDC CSDGM Metadata":"Metadades CSDGM del FGDC","ISO 19139 Metadata Implementation Specification":"Especificació de la implementació de metadades segons l’ISO 19139","ISO 19139 Metadata Implementation Specification GML3.2":"Especificació GML3.2 de la implementació de metadades segons l’ISO 19139","INSPIRE Metadata Directive":"Directiva de metadades de l’INSPIRE","North American Profile of ISO19115 2003":"Perfil nord-americà de l’ISO19115 2003"},aggrInfo:{caption:"Informació agregada",datasetHint:"És necessari un identificador o el nom del conjunt de dades.",aggrDSIdent:"Identificador del conjunt de dades",aggrDSName:"Nom del conjunt de dades"},appSchInfo:{caption:"Esquema de l’aplicació",asName:"Nom de l’esquema",asSchLang:"Llenguatge de l’esquema",asCstLang:"Llenguatge de la restricció",asAscii:"ASCII",asGraFile:"Fitxer de gràfics",asGraFile_src:"Origen del fitxer de gràfics",asSwDevFile:"Fitxer de desenvolupament de programari",asSwDevFile_src:"Origen del fitxer de desenvolupament de programari",asSwDevFiFt:"Format del fitxer de desenvolupament de programari"},citation:{caption:"Citació",section:{titlesAndDates:"Títols i dates",links:"Adreces URL",identifiers:"Identificadors",presentation:"Formulari",other:"Altres",edition:"Edició",series:"Sèrie"},conditionalDate:{caption:"Data de citació",msg:"És necessària la data de creació, de publicació o de revisió.",msg_nap:"És necessària una data de citació."},resTitle:"Títol",resAltTitle:"Títol alternatiu",collTitle:"Títol col·lectiu",date:{createDate:"Data de creació",pubDate:"Data de publicació",reviseDate:"Data de revisió",notavailDate:"Data no disponible",inforceDate:"Data en vigor",adoptDate:"Data d’adopció",deprecDate:"Data de desestimació",supersDate:"Data de substitució"},isbn:"ISBN",issn:"ISSN",citId:{caption:"Identificador",identCode:"Codi",identAuth:"Citació d’autoritat"},resEd:"Edició",resEdDate:"Data d’edició",datasetSeries:{seriesName:"Nom",issId:"Problema",artPage:"Pàgina"},otherCitDet:"Altres detalls",contactCaption:"Contacte de citació"},cntAddress:{caption:"Adreça",delPoint:"Punt de lliurament",city:"Ciutat",adminArea:"Àrea administrativa",postCode:"Codi postal",country:"País",eMailAdd:"Correu electrònic",addressType:{caption:"Tipus d’adreça",postal:"Postal",physical:"Física",both:"Totes dues"}},cntOnlineRes:{caption:"Recurs en línia",linkage:"URL",protocol:"Protocol",appProfile:"Perfil d’aplicació",orName:"Nom",orDesc:"Descripció"},cntPhone:{caption:"Telèfon",voiceNum:"Veu",faxNum:"Fax",tddtty:"TDD o TTY?"},codeRef:{caption:"Identificador",identCode:"Codi",idCodeSpace:"Espai del codi",idVersion:"Versió",identAuth:"Citació d’autoritat"},constraints:{caption:"Restriccions",useLimit:"Limitació d’ús",general:{caption:"General"},legal:{caption:"Avís legal",accessConsts:"Restriccions d’accés",useConsts:"Restriccions d’ús",othConsts:"Altres restriccions"},security:{caption:"Seguretat",classSys:"Sistema de classificació",userNote:"Nota de l’usuari",handDesc:"Descripció del tractament"}},contInfo:{caption:"Informació del contingut",section:{CovDesc:"Descripció de la cobertura",ImgDesc:"Descripció de la imatge",FetCatDesc:"Catàleg d’entitats"},attDesc:"Descripció de l’atribut",covDim:{caption:"Interval o banda",seqID:"Identificador de seqüència",seqIDType:"Tipus d’identificador de seqüència",dimDescrp:"Descriptor"},RangeDim:{caption:"Dimensió de l’interval"},Band:{caption:"Banda",minVal:"Valor mínim",maxVal:"Valor màxim",valUnit:"Unitats del valor",pkResp:"Resposta màxima",bitsPerVal:"Bits per valor",toneGrad:"Gradació de tons",sclFac:"Factor d’escala",offset:"Desplaçament"},CovDesc:{caption:"Descripció de la cobertura",section:{description:"Descripció",rangesAndBands:"Intervals i bandes"}},ImgDesc:{caption:"Descripció de la imatge",section:{description:"Descripció",rangesAndBands:"Intervals i bandes"},illElevAng:"Angle d’elevació de la il·luminació",illAziAng:"Angle azimutal d’il·luminació",cloudCovPer:"Percentatge de cobertura de núvols",cmpGenQuan:"Qualitat de compressió",trianInd:"Indicador de triangulació?",radCalDatAv:"Disponibilitat de dades de calibratge radiomètric?",camCalInAv:"Disponibilitat d’informació de calibratge de càmera?",filmDistInAv:"Disponibilitat d’informació de distorsió de pel·lícula?",lensDistInAv:"Disponibilitat d’informació de distorsió de lent?",imagQuCode:"Codi de qualitat",prcTypCde:"Codi del nivell de processament"},FetCatDesc:{caption:"Catàleg d’entitats",section:{description:"Descripció",featureTypes:"Tipus d’entitat",citation:"Citació"},compCode:"Compleix amb l’ISO 19110?",incWithDS:"Included With Dataset?",catCitation:"Citació del catàleg d’entitats",catFetTyps:{caption:"Tipus d’entitat",genericName:"Nom",codeSpace:"Espai del codi"}}},contact:{caption:"Contacte",section:{name:"Nom del contacte",info:"Informació de contacte",hoursAndInstructions:"Horari i instruccions"},conditionalName:{caption:"Nom del contacte",msg:"És necessari el nom individual, el de l’organització o el del càrrec.",msg_fgdc:"És necessari el nom individual o el de l’organització."},rpIndName:"Nom individual",rpOrgName:"Nom de l’organització",rpPosName:"Nom del càrrec",rpCntInfo:"Informació de contacte",cntHours:"Hores de servei",cntInstr:"Instruccions de contacte"},distInfo:{caption:"Informació de distribució",section:{format:"Format",distributor:"Distribuïdor",transfer:"Opcions de transferència"},distFormat:{caption:"Format de distribució",formatName:"Nom del format",formatVer:"Versió del format",formatAmdNum:"Número de correcció",formatSpec:"Especificació",fileDecmTech:"Tècnica de descompressió",formatInfo:"Contingut de la informació"},distributor:{caption:"Distribuïdor"},distTranOps:{caption:"Opcions de transferència digital",section:{unitsAndSize:"Unitats"},unitsODist:"Unitats de distribució",transSize:"Mida de la transferència",offLineMed:{caption:"Mitjà sense connexió",medDensity:"Densitat",medDenUnits:"Unitats de densitat",medVol:"Volums",medNote:"Nota del mitjà"}},distorOrdPrc:{caption:"Procés de classificació",resFees:"Quotes",planAvDtTm:"Data de disponibilitat",planAvTmPd:{caption:"Període de la data de disponibilitat",tmBegin:"Data i hora d’inici",tmEnd:"Data i hora de finalització"},ordInstr:"Instruccions de classificació",ordTurn:"Gir"}},dqInfo:{caption:"Qualitat de les dades",section:{scope:"Àmbit",report:"Informe",lineage:"Llinatge"},dqScope:{section:{level:"Nivell",extent:"Extensió"},scpLvl:"Nivell de l’àmbit",scpLvlDesc:"Descripció del nivell",scpExt:"Extensió de l’àmbit"},report:{section:{measure:"Mesura",evaluation:"Avaluació",result:"Resultat",conformance:"Conformitat"},measDesc:"Descripció de la mesura",measName:"Nom de la mesura",measDateTm:"Data de la mesura",measId:"Identificador de la mesura",evalMethDesc:"Mètode d’avaluació",evalProc:"Citació del procediment",ConResult:{caption:"Resultat de conformitat",conExpl:"Explicació",conSpec:"Especificació",conPass:{caption:"Grau",_1:"Conforme",_0:"No conforme"}},QuanResult:{caption:"Resultat quantitatiu",quanVal:"Valor",quanValType:"Tipus de valor",quanValUnit:"Unitats del valor",errStat:"Estadística d’errors"}},dataLineage:{section:{statement:"Sentència",dataSource:"Origen de dades",prcStep:"Pas del procés"},statement:"Declaració de llinatge",dataSource:{caption:"Origen de dades",section:{description:"Descripció",srcRefSys:"Sistema de referència",srcExt:"Extensió",srcCitatn:"Citació"},srcDesc:"Descripció de l’origen",srcScale:{rfDenom:"Denominador d’escala"},srcRefSys:"Sistema de referència d’origen",srcExt:"Extensió de l’origen",srcCitatn:"Citació d’origen"},prcStep:{caption:"Pas del procés",section:{description:"Descripció",stepProc:"Processador",stepSrc:"Origen de dades"},stepDesc:"Descripció del procés",stepRat:"Raonament",stepDateTm:"Data del pas del procés",stepProc:"Processador",stepSrc:"Origen de dades"}}},eainfo:{caption:"Informació de l’entitat i l’atribut",section:{detailed:"Detalls",overview:"Descripció general"},detailed:{caption:"Detalls de l’entitat i l’atribut",section:{enttyp:"Entitat",attr:"Atributs"},enttyp:{caption:"Tipus d’entitat",enttypl:"Etiqueta",enttypt:"Objecte",enttypc:"Recompte",enttypd:"Definició",enttypds:"Origen de la definició"},attr:{caption:"Atribut",section:{description:"Descripció",value:"Valor",domain:"Domini"},attrlabl:"Etiqueta",attalias:"Àlies",attrdef:"Definició",attrdefs:"Origen de la definició",attrtype:"Tipus",attwidth:"Amplada",atprecis:"Precisió",attscale:"Escala",atindex:"Indexat",attrvai:{attrva:"Explicació del valor",attrvae:"Precisió del valor"},attrmfrq:"Freqüència de mesura del valor",begdatea:"Data d’inici dels valors",enddatea:"Data de finalització dels valors",attrdomv:{caption:"Domini",edom:{caption:"Enumerat",edomv:"Valor",edomvd:"Definició",edomvds:"Origen de la definició"},rdom:{caption:"Interval",rdommin:"Valor mínim",rdommax:"Valor màxim",rdommean:"Mitjana",rdomstdv:"Desviació estàndard",attrunit:"Unitats",attrmres:"Resolució de la mesura"},codesetd:{caption:"Conjunt de codis",codesetn:"Nom",codesets:"Origen"},udom:{caption:"No representable"}}}},overview:{caption:"Descripció general",eaover:"Resum",eadetcit:"Citació"}},extent:{caption:"Extensió",section:{description:"Descripció",geographic:"Geogràfic",temporal:"Temporal",vertical:"Vertical"},exDesc:"Descripció de l’extensió",geoEle:{caption:"Extensió geogràfica",GeoBndBox:{caption:"Quadre de delimitació",esriExtentType:"Es pot cercar l’extensió?",exTypeCode:"L’extensió conté el recurs?",westBL:"Longitud de delimitació cap a l’oest",eastBL:"Longitud de delimitació cap a l’est",southBL:"Latitud de delimitació cap al sud",northBL:"Latitud de delimitació cap al nord"},GeoDesc:{caption:"Descripció geogràfica",exTypeCode:"La descripció conté el recurs?",identCode:"Codi"}},tempEle:{caption:"Extensió temporal",TM_Period:"Període de temps",TM_Instant:"Instant de temps",tmPosition:"Data",tmBegin:"Data d’inici",tmEnd:"Data de finalització"},vertEle:{caption:"Extensió vertical",vertMinVal:"Valor mínim",vertMaxVal:"Valor màxim"}},graphOver:{caption:"Examina el gràfic",bgFileName:"Examina la URL del gràfic",bgFileDesc:"Examina la descripció del gràfic",bgFileType:"Examina el tipus de fitxer del gràfic"},keywords:{caption:"Paraules clau",section:{topicCategory:"Tema",searchKeys:"Etiquetes",themeKeys:"Tema",placeKeys:"Lloc",tempKeys:"Temporal",discKeys:"Disciplina",stratKeys:"Estrat",productKeys:"Producte",subTopicCatKeys:"Subtema",otherKeys:"Altres"},delimited:"Paraules clau",searchKeys:"Etiquetes",themeKeys:"Paraules clau del tema",placeKeys:"Paraules clau del lloc",tempKeys:"Paraules clau temporals",discKeys:"Paraules clau de la disciplina",stratKeys:"Paraules clau de l’estrat",productKeys:"Paraules clau del producte",subTopicCatKeys:"Paraules clau del subtema",otherKeys:"Altres paraules clau",thesaName:"Citació del diccionari",thesaLang:"Idioma del diccionari"},locales:{caption:"Configuracions regionals",locale:"Configuració regional",resTitle:"Títol",idAbs:"Resum"},maintenance:{caption:"Manteniment",section:{frequency:"Freqüència",scope:"Àmbit",note:"Nota"},usrDefFreq:"Freqüència personalitzada",dateNext:"Propera actualització",maintScp:"Àmbit de l’actualització",upScpDesc:{caption:"Descripció de l’àmbit",attribSet:"Atributs",attribIntSet:"Instàncies d’atributs",featSet:"Entitats",featIntSet:"Instàncies d’entitats",datasetSet:"Conjunt de dades",other:"Altres instàncies"},maintNote:"Nota sobre el manteniment",maintCont:"Contacte de manteniment"},metadata:{section:{profile:"Perfil",details:"Àmbit"},mdFileID:"Identificador de fitxer",mdParentID:"Identificador principal",datasetURI:"URI del conjunt de dades",dataSetFn:"Funció del conjunt de dades",mdDateSt:"Data de les metadades",mdLang:"Llenguatge de les metadades",mdChar:"Conjunt de caràcters",mdHrLv:"Nivell jeràrquic",mdHrLvName:"Nom del nivell jeràrquic",mdContact:"Contacte de les metadades",mdMaint:"Manteniment de les metadades",mdConst:"Restriccions de les metadades"},porCatInfo:{caption:"Citació de la representació"},refSysInfo:{caption:"Referència espacial"},resource:{section:{citation:"Citació",details:"Detalls",description:"Descripció",keywords:"Paraules clau",status:"Estat",resolution:"Resolució",representation:"Representació",browse:"Examina el gràfic",format:"Format",usage:"Ús",aggregateInfo:"Agregació",additional:"Addicional"},idAbs:"Descripció (resum)",idPurp:"Resum (propòsit)",suppInfo:"Informació complementària",idCredit:"Crèdits",envirDesc:"Entorn de processament",dataLang:"Llenguatge del recurs",dataExt:"Extensió del recurs",idPoC:"Punt de contacte",resMaint:"Manteniment del recurs",resConst:"Restriccions del recurs",dsFormat:"Format del recurs",dataScale:{caption:"Escala de les dades",equScale:"Resolució de l’escala",scaleDist:"Resolució de la distància",scaleDist_value:"Distància"},idSpecUse:{caption:"Ús del recurs",specUsage:"Ús específic",usageDate:"Data d’ús",usrDetLim:"Limitacions",usrCntInfo:"Contacte d’ús"}},service:{caption:"Servei",svType:"Tipus de servei",svType_Name:"Nom",svAccProps:"Propietats d’accés",svCouplRes:{caption:"Recurs acoblat",svOpName:"Nom de l’operació",svResCitId:"Identificador del recurs"},svCoupleType:"Tipus d’acoblament"},scaleRange:{caption:"Interval d’escala",maxScale:"Escala màxima",minScale:"Escala mínima"},spatRepInfo:{caption:"Representació espacial",section:{dimension:"Dimensió",parameters:"Paràmetres"},numDims:"Nombre de dimensions",tranParaAv:"Disponibilitat de paràmetre de transformació?",axisDimension:{caption:"Dimensió",dimSize:"Mida",dimResol:{caption:"Resolució",_value:"Valor de resolució",uom:"Unitats de resolució"}},VectSpatRep:{caption:"Vector",geometObjs:"Objectes geomètrics",geoObjCnt:"Recompte d’objectes"},GridSpatRep:{caption:"Quadrícula"},Georect:{caption:"Rectificat geogràficament",section:{centerPoint:"Punt central",cornerPts:"Punts de cantonada"},chkPtAv:"Disponibilitat de punt de control?",chkPtDesc:"Descripció del punt de control",ptInPixel:"Punt en un píxel",transDimDesc:"Descripció de la dimensió de transformació",transDimMap:"Assignació de la dimensió de transformació",cornerPts:{caption:"Punt de cantonada",pos:"Posició",gmlDesc:"Descripció",gmlDescRef:"Referència",gmlIdent:"Identificador",codeSpace:"Espai de codi de l’identificador"}},Georef:{caption:"Es pot referenciar geogràficament",ctrlPtAv:"Disponibilitat de punt de control?",orieParaAv:"Disponibilitat de paràmetre d’orientació?",orieParaDs:"Descripció del paràmetre d’orientació",georefPars:"Paràmetres referenciats geogràficament",paraCit:"Citació de paràmetres"},Indref:{caption:"Indirecte"}},booleanOptions:{_false:"No",_true:"Sí"},codelist:{CountryCode:"País",LanguageCode:"Idioma",MonetaryUnits:"Unitats monetàries",MonetaryUnits_empty:"Sense moneda universal",PresentationForm:"Formulari de presentació de dades geoespacials de l’FGDC",CI_PresentationFormCode:"Formulari de presentació",CI_RoleCode:"Rol",CI_OnLineFunctionCode:"Funció",IMS_ContentType:"Tipus de contingut",DQ_ElementDimension:"Dimensió",DQ_ElementType:"Tipus d’informe",DQ_EvaluationMethodTypeCode:"Tipus d’avaluació",DS_AssociationTypeCode:"Tipus d’associació",DS_InitiativeTypeCode:"Tipus d’iniciativa",LI_SourceType:"Tipus d’origen",MD_CellGeometryCode:"Geometria de cel·la",MD_CharacterSetCode:"Conjunt de caràcters",MD_ClassificationCode:"Classificació",MD_CoverageContentTypeCode:"Tipus de contingut",MD_DimensionNameTypeCode:"Tipus de dimensió",MD_GeometricObjectTypeCode:"Tipus d’objecte geomètric",MD_ImagingConditionCode:"Condició de la imatge",MD_MaintenanceFrequenceCode:"Freqüència d’actualització",MD_MediumFormatCode:"Codi de format",MD_MediumNameCode:"Nom del mitjà",MD_PixelOrientationCode:"Orientació dels píxels",MD_ProgressCode:"Estat",MD_RestrictionCode:"Codi de restricció",MD_ScopeCode:"Àmbit",MD_SpatialRepresentationTypeCode:"Tipus de representació espacial",MD_TopicCategoryCode:"Categoria del tema",MD_TopologyLevelCode:"Nivell de topologia",RS_Dimension:"Dimensió",SV_CouplingType:"Tipus d’acoblament",UCUM:"Unitats",UCUM_Length:"Unitats de distància"}});