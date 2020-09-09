import json
import os
import csv
import re
def transformDIR(path):
    files = os.listdir(path)
    for f in files:
        transformCSV(path + f)

def transformCSV(file):
    csvfile = open(file).readlines()
    result = {'data':[]}
    columns = csvfile[0].strip().replace('"', '').split(",")
    print(columns)
    print("***********************COLUMNS*******************")
    for i,l in enumerate(csvfile):
        if(i != 0):
            aux = {}
            line = l.strip().replace('"', '').split(",")
            for j,col in enumerate(columns):
                aux[col] = line[j]
            result['data'].append(aux)

    #print(result)
    output = open(file.replace('.csv', '.json'), 'w')
    output.write(json.dumps(result, indent=2))
    output.close()

def main():
    path = "./bio2rdf/query2/results/"
    transformDIR(path)
    '''

    datasets = {
        'bio2rdf':10,
        'gtfs':18,
        'bsbm':10
    }
    for dataset in datasets.keys():
        for i in range(1,datasets[dataset]):
            path = './' + dataset + '/query' + str(i) + '/results/'
            transformDIR(path)
    '''
if __name__ == '__main__':
    main()
