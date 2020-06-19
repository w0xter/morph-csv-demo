
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
export default  datasets;