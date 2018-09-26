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

define({documentTypes:{data:{caption:"ISO 19115 (Dados)",description:""},service:{caption:"ISO 19119 (Serviço)",description:""},gmi:{caption:"ISO 19115-2 (Imagens e Dados em Grade)",description:""}},general:{reference:"Referência"},sections:{metadata:"Metadados",identification:"Identificação",distribution:"Distribuição",quality:"Qualidade",acquisition:"Aquisição"},metadataSection:{identifier:"Identificador",contact:"Contacto",date:"Data",standard:"Padrão",reference:"Referência"},identificationSection:{citation:"Citação",description:"Descrição",contact:"Contacto",thumbnail:"Imagem Miniatura",keywords:"Palavras Chave",constraints:"Restrições",resource:"Recurso",resourceTab:{representation:"Representação",language:"Idioma",classification:"Classificação",extent:"Estender"},serviceResourceTab:{serviceType:"Tipo de Serviço",extent:"Estender",couplingType:"Tipo de Acoplamento",operation:"Operação",operatesOn:"Opera sobre"}},distributionSection:{},qualitySection:{scope:"Âmbito",conformance:"Conformidade",lineage:"Linhagem"},acquisitionSection:{requirement:"Exigência",objective:"Objectivo",instrument:"Instrumento",plan:"Plano",operation:"Operação",platform:"Plataforma:",environment:"Ambiente"},AbstractMD_Identification:{sAbstract:"Abstracto",purpose:"Finalidade",credit:"Créditos",pointOfContact:"Ponto de Contacto",resourceMaintenance:"Manutenção",graphicOverview:"Vista Global de Gráfico",descriptiveKeywords:"Colecção de palavra chave",resourceConstraints:"Restrições"},CI_Address:{deliveryPoint:"Ponto de Entrega",city:"Cidade",administrativeArea:"Área Administrativa",postalCode:"Código Postal",country:"País",electronicMailAddress:"Endereço de Correio Electrónico"},CI_Citation:{title:"Título",alternateTitle:"Título Alternativo",identifier:"Identificador Único de Recurso",resource:{title:"Título de Recurso",date:"Dados de Recurso"},specification:{title:"Especificação de Título",date:"Especificação de Data"}},CI_Contact:{phone:"Telefone",address:"Endereço",onlineResource:"Recurso Online",hoursOfService:"Horas de Serviço",contactInstructions:"Instruções de Contacto"},CI_Date:{date:"Data",dateType:"Tipo de Dados"},CI_DateTypeCode:{caption:"Tipo de Dados",creation:"Data de Criação",publication:"Data de Publicação",revision:"Data de Revisão"},CI_OnLineFunctionCode:{caption:"Função",download:"Descarregar",information:"Informação",offlineAccess:"Acesso Offline",order:"Ordem",search:"Pesquisar"},CI_OnlineResource:{caption:"Recurso Online",linkage:"URL",protocol:"Protocolo",applicationProfile:"Perfil de Aplicação",name:"Nome",description:"Descrição",sFunction:"Função"},CI_ResponsibleParty:{caption:"Ponto de Contacto",individualName:"Nome Individual",organisationName:"Nome de Organização",positionName:"Nome de Posição",contactInfo:"Informação de Contacto",role:"Papel"},CI_RoleCode:{caption:"Papel",resourceProvider:"Fornecedor de Recurso",custodian:"Zelador",owner:"Proprietário",user:"Utilizador",distributor:"Distribuidor",originator:"Autor",pointOfContact:"Ponto de Contacto",principalInvestigator:"Investigador Principal",processor:"Processador",publisher:"Publicador",author:"Autor"},CI_Telephone:{voice:"Voz",facsimile:"Fax"},DCPList:{caption:"DCP",XML:"XML",CORBA:"CORBA",JAVA:"JAVA",COM:"COM",SQL:"SQL",WebServices:"Serviços Web"},DQ_ConformanceResult:{caption:"Resultado de Conformidade",explanation:"Explicação",degree:{caption:"Grau",validationPerformed:"Validação Interpretada",conformant:"Conformidade",nonConformant:"Não Conformidade"}},DQ_DataQuality:{report:"Relatório"},DQ_Scope:{level:"Scope (informação de qualidade aplicada a)",levelDescription:"Descrição de Nível"},EX_Extent:{caption:"Estender",description:"Descrição",geographicElement:"Extensão Espacial",temporalElement:"Extensão Temporal",verticalElement:"Extensão Vertical"},EX_GeographicBoundingBox:{westBoundLongitude:"Longitude Delimitação Oeste",eastBoundLongitude:"Longitude Delimitação Este",southBoundLatitude:"Longitude Delimitação Sul",northBoundLatitude:"Longitude Delimitação Norte"},EX_GeographicDescription:{caption:"Descrição Geográfica"},EX_TemporalExtent:{TimePeriod:{beginPosition:"Data de Começo",endPosition:"Data de Fim"}},EX_VerticalExtent:{minimumValue:"Valor Mínimo",maximumValue:"Valor Máximo",verticalCRS:"CRS Vertical"},Length:{caption:"Comprimento",uom:"Unidades de Medida",km:"Quilômetros",m:"Metros",mi:"Milhas",ft:"Pés"},LI_Lineage:{statement:"Declaração de Linhagem"},MD_BrowseGraphic:{fileName:"Navegar URL de Gráfico",fileDescription:"Navegar Captura de Gráfico",fileType:"Navegar Tipo de Gráfico"},MD_ClassificationCode:{unclassified:"Não Classificado",restricted:"Restrito",confidential:"Confidencial",secret:"Secreto",topSecret:"Ultra Secreto"},MD_Constraints:{caption:"Restrições de uso",useLimitation:"Limitação de Uso"},MD_DataIdentification:{spatialRepresentationType:"Tipo de Representação Espacial",spatialResolution:"Resolução Espacial",language:"Linguagem de Recurso",supplementalInformation:"Suplementar"},MD_DigitalTransferOptions:{onLine:"Online"},MD_Distribution:{distributionFormat:"Formato de Distribuição",transferOptions:"Opções de Transferência"},MD_Format:{name:"Nome de Formato",version:"Versão de Formato"},MD_Identifier:{caption:"URI",identifierCaption:"Identificador",code:"Código"},MD_Keywords:{delimitedCaption:"Palavras Chave",thesaurusName:"Léxico Associado"},MD_KeywordTypeCode:{caption:"Palavra Passe",discipline:"Disciplina",place:"Local",stratum:"Estrato",temporal:"Temporal",theme:"Tema"},MD_LegalConstraints:{caption:"Restrições Legais",accessConstraints:"Restrições de Acesso",useConstraints:"Utilize restrições",otherConstraints:"Outras Restrições"},MD_MaintenanceFrequencyCode:{caption:"Frequência",continual:"Contínuo",daily:"Diariamente",weekly:"Semanalmente",fortnightly:"Quinzenal",monthly:"Mensalmente",quarterly:"Trimestral",biannually:"Bianualmente",annually:"Anualmente",asNeeded:"Conforme Necessário",irregular:"Irregular",notPlanned:"Não Planeado",unknown:"Desconhecido"},MD_Metadata:{caption:"Metadados",fileIdentifier:"Identificador de Ficheiro",language:"Linguagem Metadados",hierarchyLevel:"Nível Hierárquico",hierarchyLevelName:"Nome de Nível Hierárquico",contact:"Contacto Metadados",dateStamp:"Data Metadados",metadataStandardName:"Nome Standard Metadados",metadataStandardVersion:"Versão Standard Metadados",referenceSystemInfo:"Sistema de Referência",identificationInfo:"Identificação",distributionInfo:"Distribuição",dataQualityInfo:"Qualidade"},MD_ProgressCode:{caption:"Código de Progresso",completed:"Concluído",historicalArchive:"Arquivo Histórico",obsolete:"Obsoleto",onGoing:"Em Curso",planned:"Planeado",required:"Exigido",underDevelopment:"Em Desenvolvimento"},MD_RepresentativeFraction:{denominator:"Denominador"},MD_Resolution:{equivalentScale:"Escala Equivalente",distance:"Distância"},MD_RestrictionCode:{copyright:"Direitos de autor",patent:"Patente",patentPending:"Patente Pendente",trademark:"Marca Registada",license:"Licença",intellectualPropertyRights:"Direitos de Propriedade Intelectual",restricted:"Restrito",otherRestrictions:"Outras Restrições"},MD_ScopeCode:{attribute:"Atributo",attributeType:"Tipo de Atributo",collectionHardware:"Colecção de Hardware",collectionSession:"Sessão de Recolha",dataset:"Conjunto de Dados",series:"Séries",nonGeographicDataset:"Conjunto de dados não geográficos",dimensionGroup:"Grupo Dimensão",feature:"Elemento",featureType:"Tipo de elemento",propertyType:"Tipo de Propriedade",fieldSession:"Sessão campo",software:"Software",service:"Serviço",model:"Modelo",tile:"Mosaico"},MD_ScopeDescription:{attributes:"Atributos",features:"Utilidades",featureInstances:"Instancias de Elemento",attributeInstances:"Instâncias de Atributo",dataset:"Conjunto de Dados",other:"Outro"},MD_SecurityConstraints:{caption:"Restrições de Segurança",classification:"Classificação",userNote:"Nota de Utilizador",classificationSystem:"Sistema de Classificação",handlingDescription:"Descrição Manipulação"},MD_SpatialRepresentationTypeCode:{caption:"Tipo de Representação Espacial",vector:"Vector",grid:"Grelha",textTable:"Tabela de Texto",tin:"TIN",stereoModel:"Modelo Stereo",video:"Vídeo"},MD_TopicCategoryCode:{caption:"Categoria de Tópico",boundaries:"Limites Administrativos e Políticos",farming:"Agricultura e Pecuária",climatologyMeteorologyAtmosphere:"Atmosfera e Clima",biota:"Biologia e Ecologia",economy:"Negócios e Economia",planningCadastre:"Cadastral",society:"Cultural, Sociedade e Demografia",elevation:"Elevação e Produtos Derivados",environment:"Ambiente e Conservação",structure:"Instalações e Estruturas",geoscientificInformation:"Geológicos e Geofísicos",health:"Saúde Humana e Doenças",imageryBaseMapsEarthCover:"Imagens e Mapas Base",inlandWaters:"Recursos Hídricos Internos",location:"Locais e Redes Geodésicas",intelligenceMilitary:"Militar",oceans:"Oceanos e Estuários",transportation:"Redes de Transporte",utilitiesCommunication:"Utilitários e Comunicação"},MI_ContextCode:{caption:"Contexto",acquisition:"Aquisição",pass:"Passe",wayPoint:"Waypoint"},MI_EnvironmentalRecord:{caption:"Condições Ambientais",averageAirTemperature:"Temperatura Média do Ar",maxRelativeHumidity:"Humidade Relativa Máxima",maxAltitude:"Altitude Máxima",meterologicalConditions:"Condições Meteorológicas"},MI_Event:{identifier:"Identificador de Evento",time:"Tempo",expectedObjectiveReference:"Objectivo Esperado (Identificador de Objectivo)",relatedSensorReference:"Sensor Relacionado (Identificador de Instrumento)",relatedPassReference:"Passe relacionado (Identificador de Passe de Plataforma)"},MI_GeometryTypeCode:{point:"Ponto",linear:"Linear",areal:"Areal",strip:"Strip"},MI_Instrument:{citation:"Instrumento de Citação",identifier:"Instrumento Identificador",sType:"Tipo de Instrumento",description:"Instrumento de Descrição",mountedOn:"Montado Em",mountedOnPlatformReference:"Montado em (Identificador de Plataforma)"},MI_Metadata:{acquisitionInformation:"Aquisição"},MI_Objective:{caption:"Objectivo",identifier:"Identificador de Objectivo",priority:"Prioridade do Alvo",sFunction:"Função do Objectivo",extent:"Estender",pass:"Plataforma de Passagem",sensingInstrumentReference:"Instrumento de Percepção (Identificador de Instrumento)",objectiveOccurrence:"Eventos",sections:{identification:"Identificação",extent:"Estender",pass:"Passe",sensingInstrument:"Instrumento de Percepção",objectiveOccurrence:"Eventos"}},MI_ObjectiveTypeCode:{caption:"Tipo (Técnica de Colecção para Objectivo)",instantaneousCollection:"Colecção Instantânea",persistentView:"Vista Persistente",survey:"Consulta"},MI_Operation:{caption:"Operação",description:"Operação Descrição",citation:"Operação Citação",identifier:"Operação Identificador",status:"Operação Status",objectiveReference:"Objectivo Relativo (Identificador de Objectivo)",planReference:"Plano Relativo (Identificador de Plano)",significantEventReference:"Evento Relativo (Identificador de Evento)",platformReference:"Plataforma Relativa (Identificador de Plataforma)",sections:{identification:"Identificação",related:"Relacionado"}},MI_OperationTypeCode:{caption:"Tipo de Operação",real:"Real",simulated:"Simulado",synthesized:"Sintetizado"},MI_Plan:{sType:"Amostra Geometria de Recolha de Dados",status:"Status do Plano",citation:"Citação de Autoridade Solicitando Colecção",satisfiedRequirementReference:"Requisito Satisfeito (Identificador de Exigência)",operationReference:"Operação Relacionada (Identificador de Operação)"},MI_Platform:{citation:"Plataforma de Citação",identifier:"Plataforma de Identificador",description:"Descrição da Plataforma de Apoio do Instrumento",sponsor:"Organização de Patrocinador para Plataforma",instrument:"Instrumento(s) montado na plataforma",instrumentReference:"Instrumento Identificador",sections:{identification:"Identificação",sponsor:"Patrocinador",instruments:"Instrumentos"}},MI_PlatformPass:{identifier:"Identificador de Passe de Plataforma",extent:"Extensão de Passe de Plataforma",relatedEventReference:"Evento Relacionado (Identificador de Evento)"},MI_PriorityCode:{critical:"Crítica",highImportance:"Alta Importância",mediumImportance:"Importância Média",lowImportance:"Baixa Importância"},MI_RequestedDate:{requestedDateOfCollection:"Solicitados Dados de Recolha",latestAcceptableDate:"Últimos Dados Aceitáveis"},MI_Requirement:{caption:"Exigência",citation:"Citação para Requisição de Material de Orientação",identifier:"Identificador de Requisito",requestor:"Solicitador de Requisito",recipient:"Recipiente de resultados de Requisito",priority:"Prioridade de Requisito",requestedDate:"Data Requerida",expiryDate:"Data Validade",satisifiedPlanReference:"Plano Satisfeito (Identificador de Plano)",sections:{identification:"Identificação",requestor:"Solicitador",recipient:"Recipiente",priorityAndDates:"Prioridade e Datas",satisifiedPlan:"Plano Satisfeito"}},MI_SequenceCode:{caption:"Sequência",start:"Iniciar",end:"Terminar",instantaneous:"Instantâneo"},MI_TriggerCode:{caption:"Gatilho",automatic:"Automático",manual:"Manual",preProgrammed:"Pré-programado"},ObjectReference:{uuidref:"Referência da UUID",xlinkref:"Referência da URL"},RS_Identifier:{caption:"ID Mais Espaço de Código",code:"Código",codeSpace:"Espaço de Código"},SV_CouplingType:{loose:"Solto",mixed:"Misto",tight:"Justo"},SV_OperationMetadata:{operationName:"Nome de Operação",DCP:"DCP",connectPoint:"Ponto de Conexão"},SV_ServiceIdentification:{serviceType:"Tipo de Serviço",couplingType:"Tipo de Acoplamento",containsOperations:"Operação de Metadados",operatesOn:"Opera sobre"},TM_Primitive:{indeterminatePosition:"Posição Indeterminada",indeterminates:{before:"Antes",after:"Após",now:"Agora",unknown:"Desconhecido"}},gemet:{concept:{gemetConceptKeyword:"Conceito de Palavra Chave GEMET",tool:"Procurar...",dialogTitle:"GEMET - Conceito de Palavra Chave",searchLabel:"Pesquisar:",searchTip:"Procura GEMET"},theme:{tool:"Procurar...",dialogTitle:"GEMET - Dados de Tema Inspirado"},ioerror:"Houve um erro a comunicar com o serviço GEMET: {url}",searching:"Procurar GEMET...",noMatch:"Não foram encontrados resultados correspondentes",languages:{bg:"Búlgaro",cs:"Checo",da:"Dinamarquês",nl:"Holandês",en:"Inglês",et:"Estónio",fi:"Finlandês",fr:"Francês",de:"Alemão",el:"Grego",hu:"Húngaro",ga:"Gaélico (irlandês)",it:"Italiano",lv:"Letão",lt:"Lituano",mt:"Maltês",pl:"Polaco",pt:"Português",ro:"Romeno",sk:"Eslovaco",sl:"Esloveno",es:"Espanhol",sv:"Sueco"}}});