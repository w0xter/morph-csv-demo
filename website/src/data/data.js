
let datasets = {}
const fillData = () => {
    const result = {"gtfs":[], "bsbm":[], "bio2rdf":[]}
    for(let i = 0; i < 10; i++){
        for(let key of Object.keys(result)){
            result[key].push("Query " + i)
        }
    }
    datasets =  result;
} 
fillData()
const data = {
    gtfs:{
        url:'https://raw.githubusercontent.com/oeg-dataintegration/morph-csv-demo/master/data/gtfs/',
        queries:{
            1:{
                title:'',
                sparql:"PREFIX d4covid:<https://w3id.org/def/DRUGS4COVID19#>\nPREFIX dc: <http://purl.org/dc/elements/1.1/>\nPREFIX rdf:<http://www.w3.org/1999/02/22-rdf-syntax-ns#>\nPREFIX skos:<http://www.w3.org/2004/02/skos/core#>\nPREFIX rdfs:<http://www.w3.org/2000/01/rdf-schema#>\nSELECT  DISTINCT ?section ?titleDisease ?paperTitle ?completePaper ?labelATCLevel5\n{\n{?paragraph a d4covid:Paragraph .\n?paragraph d4covid:section ?section .\n?paper d4covid:contains ?paragraph .\n?paper dc:title ?paperTitle .\n?paper rdfs:seeAlso ?completePaper .\n?paper d4covid:mentions ?activeSubstance .\n?activeSubstance skos:notation 'L03AX'^^xsd:string .\n?paragraph d4covid:mentions ?disease .\n?disease a d4covid:Disease .\n?disease d4covid:MESHCode 'C000657245' .\n?disease dc:title ?titleDisease .   }\nUNION\n{\n?paragraph a d4covid:Paragraph .\n?paragraph d4covid:section ?section .\n?paper d4covid:contains ?paragraph .\n?paper dc:title ?paperTitle .\n?paper rdfs:seeAlso ?completePaper .\n?paper d4covid:mentions ?L5LevelSubstance .\n?activeSubstance skos:notation 'L03AX'^^xsd:string .\n?L5LevelSubstance  rdfs:subClassOf ?activeSubstance .\n?L5LevelSubstance skos:prefLabel ?labelATCLevel5 .\n?paragraph d4covid:mentions ?disease .\n?disease a d4covid:Disease .\n?disease d4covid:MESHCode 'C000657245' .\n?disease dc:title ?titleDisease . }\n}",
                description:''
            },
            2:{
                title:'',
                sparql:"PREFIX d4covid:<https://w3id.org/def/DRUGS4COVID19#>\nPREFIX dc: <http://purl.org/dc/elements/1.1/>\nPREFIX rdf:<http://www.w3.org/1999/02/22-rdf-syntax-ns#>\nPREFIX skos:<http://www.w3.org/2004/02/skos/core#>\nPREFIX rdfs:<http://www.w3.org/2000/01/rdf-schema#>\nSELECT  DISTINCT ?section ?titleDisease ?paperTitle ?completePaper ?labelATCLevel5\n{\n{?paragraph a d4covid:Paragraph .\n?paragraph d4covid:section ?section .\n?paper d4covid:contains ?paragraph .\n?paper dc:title ?paperTitle .\n?paper rdfs:seeAlso ?completePaper .\n?paper d4covid:mentions ?activeSubstance .\n?activeSubstance skos:notation 'L03AX'^^xsd:string .\n?paragraph d4covid:mentions ?disease .\n?disease a d4covid:Disease .\n?disease d4covid:MESHCode 'C000657245' .\n?disease dc:title ?titleDisease .   }\nUNION\n{\n?paragraph a d4covid:Paragraph .\n?paragraph d4covid:section ?section .\n?paper d4covid:contains ?paragraph .\n?paper dc:title ?paperTitle .\n?paper rdfs:seeAlso ?completePaper .\n?paper d4covid:mentions ?L5LevelSubstance .\n?activeSubstance skos:notation 'L03AX'^^xsd:string .\n?L5LevelSubstance  rdfs:subClassOf ?activeSubstance .\n?L5LevelSubstance skos:prefLabel ?labelATCLevel5 .\n?paragraph d4covid:mentions ?disease .\n?disease a d4covid:Disease .\n?disease d4covid:MESHCode 'C000657245' .\n?disease dc:title ?titleDisease . }\n}",
                description:''
            },
            3:{
                title:'',
                sparql:"PREFIX d4covid:<https://w3id.org/def/DRUGS4COVID19#>\nPREFIX dc: <http://purl.org/dc/elements/1.1/>\nPREFIX rdf:<http://www.w3.org/1999/02/22-rdf-syntax-ns#>\nPREFIX skos:<http://www.w3.org/2004/02/skos/core#>\nPREFIX rdfs:<http://www.w3.org/2000/01/rdf-schema#>\nSELECT  DISTINCT ?section ?titleDisease ?paperTitle ?completePaper ?labelATCLevel5\n{\n{?paragraph a d4covid:Paragraph .\n?paragraph d4covid:section ?section .\n?paper d4covid:contains ?paragraph .\n?paper dc:title ?paperTitle .\n?paper rdfs:seeAlso ?completePaper .\n?paper d4covid:mentions ?activeSubstance .\n?activeSubstance skos:notation 'L03AX'^^xsd:string .\n?paragraph d4covid:mentions ?disease .\n?disease a d4covid:Disease .\n?disease d4covid:MESHCode 'C000657245' .\n?disease dc:title ?titleDisease .   }\nUNION\n{\n?paragraph a d4covid:Paragraph .\n?paragraph d4covid:section ?section .\n?paper d4covid:contains ?paragraph .\n?paper dc:title ?paperTitle .\n?paper rdfs:seeAlso ?completePaper .\n?paper d4covid:mentions ?L5LevelSubstance .\n?activeSubstance skos:notation 'L03AX'^^xsd:string .\n?L5LevelSubstance  rdfs:subClassOf ?activeSubstance .\n?L5LevelSubstance skos:prefLabel ?labelATCLevel5 .\n?paragraph d4covid:mentions ?disease .\n?disease a d4covid:Disease .\n?disease d4covid:MESHCode 'C000657245' .\n?disease dc:title ?titleDisease . }\n}",
                description:''
            },
            4:{
                title:'',
                sparql:"PREFIX d4covid:<https://w3id.org/def/DRUGS4COVID19#>\nPREFIX dc: <http://purl.org/dc/elements/1.1/>\nPREFIX rdf:<http://www.w3.org/1999/02/22-rdf-syntax-ns#>\nPREFIX skos:<http://www.w3.org/2004/02/skos/core#>\nPREFIX rdfs:<http://www.w3.org/2000/01/rdf-schema#>\nSELECT  DISTINCT ?section ?titleDisease ?paperTitle ?completePaper ?labelATCLevel5\n{\n{?paragraph a d4covid:Paragraph .\n?paragraph d4covid:section ?section .\n?paper d4covid:contains ?paragraph .\n?paper dc:title ?paperTitle .\n?paper rdfs:seeAlso ?completePaper .\n?paper d4covid:mentions ?activeSubstance .\n?activeSubstance skos:notation 'L03AX'^^xsd:string .\n?paragraph d4covid:mentions ?disease .\n?disease a d4covid:Disease .\n?disease d4covid:MESHCode 'C000657245' .\n?disease dc:title ?titleDisease .   }\nUNION\n{\n?paragraph a d4covid:Paragraph .\n?paragraph d4covid:section ?section .\n?paper d4covid:contains ?paragraph .\n?paper dc:title ?paperTitle .\n?paper rdfs:seeAlso ?completePaper .\n?paper d4covid:mentions ?L5LevelSubstance .\n?activeSubstance skos:notation 'L03AX'^^xsd:string .\n?L5LevelSubstance  rdfs:subClassOf ?activeSubstance .\n?L5LevelSubstance skos:prefLabel ?labelATCLevel5 .\n?paragraph d4covid:mentions ?disease .\n?disease a d4covid:Disease .\n?disease d4covid:MESHCode 'C000657245' .\n?disease dc:title ?titleDisease . }\n}",
                description:''
            },
            5:{
                title:'',
                sparql:"PREFIX d4covid:<https://w3id.org/def/DRUGS4COVID19#>\nPREFIX dc: <http://purl.org/dc/elements/1.1/>\nPREFIX rdf:<http://www.w3.org/1999/02/22-rdf-syntax-ns#>\nPREFIX skos:<http://www.w3.org/2004/02/skos/core#>\nPREFIX rdfs:<http://www.w3.org/2000/01/rdf-schema#>\nSELECT  DISTINCT ?section ?titleDisease ?paperTitle ?completePaper ?labelATCLevel5\n{\n{?paragraph a d4covid:Paragraph .\n?paragraph d4covid:section ?section .\n?paper d4covid:contains ?paragraph .\n?paper dc:title ?paperTitle .\n?paper rdfs:seeAlso ?completePaper .\n?paper d4covid:mentions ?activeSubstance .\n?activeSubstance skos:notation 'L03AX'^^xsd:string .\n?paragraph d4covid:mentions ?disease .\n?disease a d4covid:Disease .\n?disease d4covid:MESHCode 'C000657245' .\n?disease dc:title ?titleDisease .   }\nUNION\n{\n?paragraph a d4covid:Paragraph .\n?paragraph d4covid:section ?section .\n?paper d4covid:contains ?paragraph .\n?paper dc:title ?paperTitle .\n?paper rdfs:seeAlso ?completePaper .\n?paper d4covid:mentions ?L5LevelSubstance .\n?activeSubstance skos:notation 'L03AX'^^xsd:string .\n?L5LevelSubstance  rdfs:subClassOf ?activeSubstance .\n?L5LevelSubstance skos:prefLabel ?labelATCLevel5 .\n?paragraph d4covid:mentions ?disease .\n?disease a d4covid:Disease .\n?disease d4covid:MESHCode 'C000657245' .\n?disease dc:title ?titleDisease . }\n}",
                description:''
            },
            6:{
                title:'',
                sparql:"PREFIX d4covid:<https://w3id.org/def/DRUGS4COVID19#>\nPREFIX dc: <http://purl.org/dc/elements/1.1/>\nPREFIX rdf:<http://www.w3.org/1999/02/22-rdf-syntax-ns#>\nPREFIX skos:<http://www.w3.org/2004/02/skos/core#>\nPREFIX rdfs:<http://www.w3.org/2000/01/rdf-schema#>\nSELECT  DISTINCT ?section ?titleDisease ?paperTitle ?completePaper ?labelATCLevel5\n{\n{?paragraph a d4covid:Paragraph .\n?paragraph d4covid:section ?section .\n?paper d4covid:contains ?paragraph .\n?paper dc:title ?paperTitle .\n?paper rdfs:seeAlso ?completePaper .\n?paper d4covid:mentions ?activeSubstance .\n?activeSubstance skos:notation 'L03AX'^^xsd:string .\n?paragraph d4covid:mentions ?disease .\n?disease a d4covid:Disease .\n?disease d4covid:MESHCode 'C000657245' .\n?disease dc:title ?titleDisease .   }\nUNION\n{\n?paragraph a d4covid:Paragraph .\n?paragraph d4covid:section ?section .\n?paper d4covid:contains ?paragraph .\n?paper dc:title ?paperTitle .\n?paper rdfs:seeAlso ?completePaper .\n?paper d4covid:mentions ?L5LevelSubstance .\n?activeSubstance skos:notation 'L03AX'^^xsd:string .\n?L5LevelSubstance  rdfs:subClassOf ?activeSubstance .\n?L5LevelSubstance skos:prefLabel ?labelATCLevel5 .\n?paragraph d4covid:mentions ?disease .\n?disease a d4covid:Disease .\n?disease d4covid:MESHCode 'C000657245' .\n?disease dc:title ?titleDisease . }\n}",
                description:''
            },
            7:{
                title:'',
                sparql:"PREFIX d4covid:<https://w3id.org/def/DRUGS4COVID19#>\nPREFIX dc: <http://purl.org/dc/elements/1.1/>\nPREFIX rdf:<http://www.w3.org/1999/02/22-rdf-syntax-ns#>\nPREFIX skos:<http://www.w3.org/2004/02/skos/core#>\nPREFIX rdfs:<http://www.w3.org/2000/01/rdf-schema#>\nSELECT  DISTINCT ?section ?titleDisease ?paperTitle ?completePaper ?labelATCLevel5\n{\n{?paragraph a d4covid:Paragraph .\n?paragraph d4covid:section ?section .\n?paper d4covid:contains ?paragraph .\n?paper dc:title ?paperTitle .\n?paper rdfs:seeAlso ?completePaper .\n?paper d4covid:mentions ?activeSubstance .\n?activeSubstance skos:notation 'L03AX'^^xsd:string .\n?paragraph d4covid:mentions ?disease .\n?disease a d4covid:Disease .\n?disease d4covid:MESHCode 'C000657245' .\n?disease dc:title ?titleDisease .   }\nUNION\n{\n?paragraph a d4covid:Paragraph .\n?paragraph d4covid:section ?section .\n?paper d4covid:contains ?paragraph .\n?paper dc:title ?paperTitle .\n?paper rdfs:seeAlso ?completePaper .\n?paper d4covid:mentions ?L5LevelSubstance .\n?activeSubstance skos:notation 'L03AX'^^xsd:string .\n?L5LevelSubstance  rdfs:subClassOf ?activeSubstance .\n?L5LevelSubstance skos:prefLabel ?labelATCLevel5 .\n?paragraph d4covid:mentions ?disease .\n?disease a d4covid:Disease .\n?disease d4covid:MESHCode 'C000657245' .\n?disease dc:title ?titleDisease . }\n}",
                description:''
            },
            8:{
                title:'',
                sparql:"PREFIX d4covid:<https://w3id.org/def/DRUGS4COVID19#>\nPREFIX dc: <http://purl.org/dc/elements/1.1/>\nPREFIX rdf:<http://www.w3.org/1999/02/22-rdf-syntax-ns#>\nPREFIX skos:<http://www.w3.org/2004/02/skos/core#>\nPREFIX rdfs:<http://www.w3.org/2000/01/rdf-schema#>\nSELECT  DISTINCT ?section ?titleDisease ?paperTitle ?completePaper ?labelATCLevel5\n{\n{?paragraph a d4covid:Paragraph .\n?paragraph d4covid:section ?section .\n?paper d4covid:contains ?paragraph .\n?paper dc:title ?paperTitle .\n?paper rdfs:seeAlso ?completePaper .\n?paper d4covid:mentions ?activeSubstance .\n?activeSubstance skos:notation 'L03AX'^^xsd:string .\n?paragraph d4covid:mentions ?disease .\n?disease a d4covid:Disease .\n?disease d4covid:MESHCode 'C000657245' .\n?disease dc:title ?titleDisease .   }\nUNION\n{\n?paragraph a d4covid:Paragraph .\n?paragraph d4covid:section ?section .\n?paper d4covid:contains ?paragraph .\n?paper dc:title ?paperTitle .\n?paper rdfs:seeAlso ?completePaper .\n?paper d4covid:mentions ?L5LevelSubstance .\n?activeSubstance skos:notation 'L03AX'^^xsd:string .\n?L5LevelSubstance  rdfs:subClassOf ?activeSubstance .\n?L5LevelSubstance skos:prefLabel ?labelATCLevel5 .\n?paragraph d4covid:mentions ?disease .\n?disease a d4covid:Disease .\n?disease d4covid:MESHCode 'C000657245' .\n?disease dc:title ?titleDisease . }\n}",
                description:''
            },
            9:{
                title:'',
                sparql:"PREFIX d4covid:<https://w3id.org/def/DRUGS4COVID19#>\nPREFIX dc: <http://purl.org/dc/elements/1.1/>\nPREFIX rdf:<http://www.w3.org/1999/02/22-rdf-syntax-ns#>\nPREFIX skos:<http://www.w3.org/2004/02/skos/core#>\nPREFIX rdfs:<http://www.w3.org/2000/01/rdf-schema#>\nSELECT  DISTINCT ?section ?titleDisease ?paperTitle ?completePaper ?labelATCLevel5\n{\n{?paragraph a d4covid:Paragraph .\n?paragraph d4covid:section ?section .\n?paper d4covid:contains ?paragraph .\n?paper dc:title ?paperTitle .\n?paper rdfs:seeAlso ?completePaper .\n?paper d4covid:mentions ?activeSubstance .\n?activeSubstance skos:notation 'L03AX'^^xsd:string .\n?paragraph d4covid:mentions ?disease .\n?disease a d4covid:Disease .\n?disease d4covid:MESHCode 'C000657245' .\n?disease dc:title ?titleDisease .   }\nUNION\n{\n?paragraph a d4covid:Paragraph .\n?paragraph d4covid:section ?section .\n?paper d4covid:contains ?paragraph .\n?paper dc:title ?paperTitle .\n?paper rdfs:seeAlso ?completePaper .\n?paper d4covid:mentions ?L5LevelSubstance .\n?activeSubstance skos:notation 'L03AX'^^xsd:string .\n?L5LevelSubstance  rdfs:subClassOf ?activeSubstance .\n?L5LevelSubstance skos:prefLabel ?labelATCLevel5 .\n?paragraph d4covid:mentions ?disease .\n?disease a d4covid:Disease .\n?disease d4covid:MESHCode 'C000657245' .\n?disease dc:title ?titleDisease . }\n}",
                description:''
            },
            10:{
                title:'',
                sparql:"PREFIX d4covid:<https://w3id.org/def/DRUGS4COVID19#>\nPREFIX dc: <http://purl.org/dc/elements/1.1/>\nPREFIX rdf:<http://www.w3.org/1999/02/22-rdf-syntax-ns#>\nPREFIX skos:<http://www.w3.org/2004/02/skos/core#>\nPREFIX rdfs:<http://www.w3.org/2000/01/rdf-schema#>\nSELECT  DISTINCT ?section ?titleDisease ?paperTitle ?completePaper ?labelATCLevel5\n{\n{?paragraph a d4covid:Paragraph .\n?paragraph d4covid:section ?section .\n?paper d4covid:contains ?paragraph .\n?paper dc:title ?paperTitle .\n?paper rdfs:seeAlso ?completePaper .\n?paper d4covid:mentions ?activeSubstance .\n?activeSubstance skos:notation 'L03AX'^^xsd:string .\n?paragraph d4covid:mentions ?disease .\n?disease a d4covid:Disease .\n?disease d4covid:MESHCode 'C000657245' .\n?disease dc:title ?titleDisease .   }\nUNION\n{\n?paragraph a d4covid:Paragraph .\n?paragraph d4covid:section ?section .\n?paper d4covid:contains ?paragraph .\n?paper dc:title ?paperTitle .\n?paper rdfs:seeAlso ?completePaper .\n?paper d4covid:mentions ?L5LevelSubstance .\n?activeSubstance skos:notation 'L03AX'^^xsd:string .\n?L5LevelSubstance  rdfs:subClassOf ?activeSubstance .\n?L5LevelSubstance skos:prefLabel ?labelATCLevel5 .\n?paragraph d4covid:mentions ?disease .\n?disease a d4covid:Disease .\n?disease d4covid:MESHCode 'C000657245' .\n?disease dc:title ?titleDisease . }\n}",
                description:''
            },
            11:{
                title:'',
                sparql:"PREFIX d4covid:<https://w3id.org/def/DRUGS4COVID19#>\nPREFIX dc: <http://purl.org/dc/elements/1.1/>\nPREFIX rdf:<http://www.w3.org/1999/02/22-rdf-syntax-ns#>\nPREFIX skos:<http://www.w3.org/2004/02/skos/core#>\nPREFIX rdfs:<http://www.w3.org/2000/01/rdf-schema#>\nSELECT  DISTINCT ?section ?titleDisease ?paperTitle ?completePaper ?labelATCLevel5\n{\n{?paragraph a d4covid:Paragraph .\n?paragraph d4covid:section ?section .\n?paper d4covid:contains ?paragraph .\n?paper dc:title ?paperTitle .\n?paper rdfs:seeAlso ?completePaper .\n?paper d4covid:mentions ?activeSubstance .\n?activeSubstance skos:notation 'L03AX'^^xsd:string .\n?paragraph d4covid:mentions ?disease .\n?disease a d4covid:Disease .\n?disease d4covid:MESHCode 'C000657245' .\n?disease dc:title ?titleDisease .   }\nUNION\n{\n?paragraph a d4covid:Paragraph .\n?paragraph d4covid:section ?section .\n?paper d4covid:contains ?paragraph .\n?paper dc:title ?paperTitle .\n?paper rdfs:seeAlso ?completePaper .\n?paper d4covid:mentions ?L5LevelSubstance .\n?activeSubstance skos:notation 'L03AX'^^xsd:string .\n?L5LevelSubstance  rdfs:subClassOf ?activeSubstance .\n?L5LevelSubstance skos:prefLabel ?labelATCLevel5 .\n?paragraph d4covid:mentions ?disease .\n?disease a d4covid:Disease .\n?disease d4covid:MESHCode 'C000657245' .\n?disease dc:title ?titleDisease . }\n}",
                description:''
            },
            12:{
                title:'',
                sparql:"PREFIX d4covid:<https://w3id.org/def/DRUGS4COVID19#>\nPREFIX dc: <http://purl.org/dc/elements/1.1/>\nPREFIX rdf:<http://www.w3.org/1999/02/22-rdf-syntax-ns#>\nPREFIX skos:<http://www.w3.org/2004/02/skos/core#>\nPREFIX rdfs:<http://www.w3.org/2000/01/rdf-schema#>\nSELECT  DISTINCT ?section ?titleDisease ?paperTitle ?completePaper ?labelATCLevel5\n{\n{?paragraph a d4covid:Paragraph .\n?paragraph d4covid:section ?section .\n?paper d4covid:contains ?paragraph .\n?paper dc:title ?paperTitle .\n?paper rdfs:seeAlso ?completePaper .\n?paper d4covid:mentions ?activeSubstance .\n?activeSubstance skos:notation 'L03AX'^^xsd:string .\n?paragraph d4covid:mentions ?disease .\n?disease a d4covid:Disease .\n?disease d4covid:MESHCode 'C000657245' .\n?disease dc:title ?titleDisease .   }\nUNION\n{\n?paragraph a d4covid:Paragraph .\n?paragraph d4covid:section ?section .\n?paper d4covid:contains ?paragraph .\n?paper dc:title ?paperTitle .\n?paper rdfs:seeAlso ?completePaper .\n?paper d4covid:mentions ?L5LevelSubstance .\n?activeSubstance skos:notation 'L03AX'^^xsd:string .\n?L5LevelSubstance  rdfs:subClassOf ?activeSubstance .\n?L5LevelSubstance skos:prefLabel ?labelATCLevel5 .\n?paragraph d4covid:mentions ?disease .\n?disease a d4covid:Disease .\n?disease d4covid:MESHCode 'C000657245' .\n?disease dc:title ?titleDisease . }\n}",
                description:''
            },
            13:{
                title:'',
                sparql:"PREFIX d4covid:<https://w3id.org/def/DRUGS4COVID19#>\nPREFIX dc: <http://purl.org/dc/elements/1.1/>\nPREFIX rdf:<http://www.w3.org/1999/02/22-rdf-syntax-ns#>\nPREFIX skos:<http://www.w3.org/2004/02/skos/core#>\nPREFIX rdfs:<http://www.w3.org/2000/01/rdf-schema#>\nSELECT  DISTINCT ?section ?titleDisease ?paperTitle ?completePaper ?labelATCLevel5\n{\n{?paragraph a d4covid:Paragraph .\n?paragraph d4covid:section ?section .\n?paper d4covid:contains ?paragraph .\n?paper dc:title ?paperTitle .\n?paper rdfs:seeAlso ?completePaper .\n?paper d4covid:mentions ?activeSubstance .\n?activeSubstance skos:notation 'L03AX'^^xsd:string .\n?paragraph d4covid:mentions ?disease .\n?disease a d4covid:Disease .\n?disease d4covid:MESHCode 'C000657245' .\n?disease dc:title ?titleDisease .   }\nUNION\n{\n?paragraph a d4covid:Paragraph .\n?paragraph d4covid:section ?section .\n?paper d4covid:contains ?paragraph .\n?paper dc:title ?paperTitle .\n?paper rdfs:seeAlso ?completePaper .\n?paper d4covid:mentions ?L5LevelSubstance .\n?activeSubstance skos:notation 'L03AX'^^xsd:string .\n?L5LevelSubstance  rdfs:subClassOf ?activeSubstance .\n?L5LevelSubstance skos:prefLabel ?labelATCLevel5 .\n?paragraph d4covid:mentions ?disease .\n?disease a d4covid:Disease .\n?disease d4covid:MESHCode 'C000657245' .\n?disease dc:title ?titleDisease . }\n}",
                description:''
            },
            14:{
                title:'',
                sparql:"PREFIX d4covid:<https://w3id.org/def/DRUGS4COVID19#>\nPREFIX dc: <http://purl.org/dc/elements/1.1/>\nPREFIX rdf:<http://www.w3.org/1999/02/22-rdf-syntax-ns#>\nPREFIX skos:<http://www.w3.org/2004/02/skos/core#>\nPREFIX rdfs:<http://www.w3.org/2000/01/rdf-schema#>\nSELECT  DISTINCT ?section ?titleDisease ?paperTitle ?completePaper ?labelATCLevel5\n{\n{?paragraph a d4covid:Paragraph .\n?paragraph d4covid:section ?section .\n?paper d4covid:contains ?paragraph .\n?paper dc:title ?paperTitle .\n?paper rdfs:seeAlso ?completePaper .\n?paper d4covid:mentions ?activeSubstance .\n?activeSubstance skos:notation 'L03AX'^^xsd:string .\n?paragraph d4covid:mentions ?disease .\n?disease a d4covid:Disease .\n?disease d4covid:MESHCode 'C000657245' .\n?disease dc:title ?titleDisease .   }\nUNION\n{\n?paragraph a d4covid:Paragraph .\n?paragraph d4covid:section ?section .\n?paper d4covid:contains ?paragraph .\n?paper dc:title ?paperTitle .\n?paper rdfs:seeAlso ?completePaper .\n?paper d4covid:mentions ?L5LevelSubstance .\n?activeSubstance skos:notation 'L03AX'^^xsd:string .\n?L5LevelSubstance  rdfs:subClassOf ?activeSubstance .\n?L5LevelSubstance skos:prefLabel ?labelATCLevel5 .\n?paragraph d4covid:mentions ?disease .\n?disease a d4covid:Disease .\n?disease d4covid:MESHCode 'C000657245' .\n?disease dc:title ?titleDisease . }\n}",
                description:''
            },
            15:{
                title:'',
                sparql:"PREFIX d4covid:<https://w3id.org/def/DRUGS4COVID19#>\nPREFIX dc: <http://purl.org/dc/elements/1.1/>\nPREFIX rdf:<http://www.w3.org/1999/02/22-rdf-syntax-ns#>\nPREFIX skos:<http://www.w3.org/2004/02/skos/core#>\nPREFIX rdfs:<http://www.w3.org/2000/01/rdf-schema#>\nSELECT  DISTINCT ?section ?titleDisease ?paperTitle ?completePaper ?labelATCLevel5\n{\n{?paragraph a d4covid:Paragraph .\n?paragraph d4covid:section ?section .\n?paper d4covid:contains ?paragraph .\n?paper dc:title ?paperTitle .\n?paper rdfs:seeAlso ?completePaper .\n?paper d4covid:mentions ?activeSubstance .\n?activeSubstance skos:notation 'L03AX'^^xsd:string .\n?paragraph d4covid:mentions ?disease .\n?disease a d4covid:Disease .\n?disease d4covid:MESHCode 'C000657245' .\n?disease dc:title ?titleDisease .   }\nUNION\n{\n?paragraph a d4covid:Paragraph .\n?paragraph d4covid:section ?section .\n?paper d4covid:contains ?paragraph .\n?paper dc:title ?paperTitle .\n?paper rdfs:seeAlso ?completePaper .\n?paper d4covid:mentions ?L5LevelSubstance .\n?activeSubstance skos:notation 'L03AX'^^xsd:string .\n?L5LevelSubstance  rdfs:subClassOf ?activeSubstance .\n?L5LevelSubstance skos:prefLabel ?labelATCLevel5 .\n?paragraph d4covid:mentions ?disease .\n?disease a d4covid:Disease .\n?disease d4covid:MESHCode 'C000657245' .\n?disease dc:title ?titleDisease . }\n}",
                description:''
            },
            16:{
                title:'',
                sparql:"PREFIX d4covid:<https://w3id.org/def/DRUGS4COVID19#>\nPREFIX dc: <http://purl.org/dc/elements/1.1/>\nPREFIX rdf:<http://www.w3.org/1999/02/22-rdf-syntax-ns#>\nPREFIX skos:<http://www.w3.org/2004/02/skos/core#>\nPREFIX rdfs:<http://www.w3.org/2000/01/rdf-schema#>\nSELECT  DISTINCT ?section ?titleDisease ?paperTitle ?completePaper ?labelATCLevel5\n{\n{?paragraph a d4covid:Paragraph .\n?paragraph d4covid:section ?section .\n?paper d4covid:contains ?paragraph .\n?paper dc:title ?paperTitle .\n?paper rdfs:seeAlso ?completePaper .\n?paper d4covid:mentions ?activeSubstance .\n?activeSubstance skos:notation 'L03AX'^^xsd:string .\n?paragraph d4covid:mentions ?disease .\n?disease a d4covid:Disease .\n?disease d4covid:MESHCode 'C000657245' .\n?disease dc:title ?titleDisease .   }\nUNION\n{\n?paragraph a d4covid:Paragraph .\n?paragraph d4covid:section ?section .\n?paper d4covid:contains ?paragraph .\n?paper dc:title ?paperTitle .\n?paper rdfs:seeAlso ?completePaper .\n?paper d4covid:mentions ?L5LevelSubstance .\n?activeSubstance skos:notation 'L03AX'^^xsd:string .\n?L5LevelSubstance  rdfs:subClassOf ?activeSubstance .\n?L5LevelSubstance skos:prefLabel ?labelATCLevel5 .\n?paragraph d4covid:mentions ?disease .\n?disease a d4covid:Disease .\n?disease d4covid:MESHCode 'C000657245' .\n?disease dc:title ?titleDisease . }\n}",
                description:''
            },
            17:{
                title:'',
                sparql:"PREFIX d4covid:<https://w3id.org/def/DRUGS4COVID19#>\nPREFIX dc: <http://purl.org/dc/elements/1.1/>\nPREFIX rdf:<http://www.w3.org/1999/02/22-rdf-syntax-ns#>\nPREFIX skos:<http://www.w3.org/2004/02/skos/core#>\nPREFIX rdfs:<http://www.w3.org/2000/01/rdf-schema#>\nSELECT  DISTINCT ?section ?titleDisease ?paperTitle ?completePaper ?labelATCLevel5\n{\n{?paragraph a d4covid:Paragraph .\n?paragraph d4covid:section ?section .\n?paper d4covid:contains ?paragraph .\n?paper dc:title ?paperTitle .\n?paper rdfs:seeAlso ?completePaper .\n?paper d4covid:mentions ?activeSubstance .\n?activeSubstance skos:notation 'L03AX'^^xsd:string .\n?paragraph d4covid:mentions ?disease .\n?disease a d4covid:Disease .\n?disease d4covid:MESHCode 'C000657245' .\n?disease dc:title ?titleDisease .   }\nUNION\n{\n?paragraph a d4covid:Paragraph .\n?paragraph d4covid:section ?section .\n?paper d4covid:contains ?paragraph .\n?paper dc:title ?paperTitle .\n?paper rdfs:seeAlso ?completePaper .\n?paper d4covid:mentions ?L5LevelSubstance .\n?activeSubstance skos:notation 'L03AX'^^xsd:string .\n?L5LevelSubstance  rdfs:subClassOf ?activeSubstance .\n?L5LevelSubstance skos:prefLabel ?labelATCLevel5 .\n?paragraph d4covid:mentions ?disease .\n?disease a d4covid:Disease .\n?disease d4covid:MESHCode 'C000657245' .\n?disease dc:title ?titleDisease . }\n}",
                description:''
            },
            18:{
                title:'',
                sparql:"PREFIX d4covid:<https://w3id.org/def/DRUGS4COVID19#>\nPREFIX dc: <http://purl.org/dc/elements/1.1/>\nPREFIX rdf:<http://www.w3.org/1999/02/22-rdf-syntax-ns#>\nPREFIX skos:<http://www.w3.org/2004/02/skos/core#>\nPREFIX rdfs:<http://www.w3.org/2000/01/rdf-schema#>\nSELECT  DISTINCT ?section ?titleDisease ?paperTitle ?completePaper ?labelATCLevel5\n{\n{?paragraph a d4covid:Paragraph .\n?paragraph d4covid:section ?section .\n?paper d4covid:contains ?paragraph .\n?paper dc:title ?paperTitle .\n?paper rdfs:seeAlso ?completePaper .\n?paper d4covid:mentions ?activeSubstance .\n?activeSubstance skos:notation 'L03AX'^^xsd:string .\n?paragraph d4covid:mentions ?disease .\n?disease a d4covid:Disease .\n?disease d4covid:MESHCode 'C000657245' .\n?disease dc:title ?titleDisease .   }\nUNION\n{\n?paragraph a d4covid:Paragraph .\n?paragraph d4covid:section ?section .\n?paper d4covid:contains ?paragraph .\n?paper dc:title ?paperTitle .\n?paper rdfs:seeAlso ?completePaper .\n?paper d4covid:mentions ?L5LevelSubstance .\n?activeSubstance skos:notation 'L03AX'^^xsd:string .\n?L5LevelSubstance  rdfs:subClassOf ?activeSubstance .\n?L5LevelSubstance skos:prefLabel ?labelATCLevel5 .\n?paragraph d4covid:mentions ?disease .\n?disease a d4covid:Disease .\n?disease d4covid:MESHCode 'C000657245' .\n?disease dc:title ?titleDisease . }\n}",
                description:''
            },            

        }
    }
}
export {data};