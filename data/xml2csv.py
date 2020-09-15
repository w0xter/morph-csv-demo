import xmltodict
import sys
import json
def readxml(path):
    xml = xmltodict.parse(open(path, encoding='utf-8').read())
    print(xml['sparql']['head']['variable'])
    f = open(path.replace('.xml', '.json'), 'w')
    f.write(json.dumps(xml, indent=2))
def main():
    path = sys.argv[1]
    print(path)
    readxml(path)
    jsontocsv(path)
def jsontocsv(path):
    data = json.loads(open(path.replace('.xml', '.json')).read())
    f = open(path.replace('.xml','.csv'), 'a')
    columns = {name['@name']:'' for name in data['sparql']['head']['variable']}
    line = ''.join('"' + val + '",' for val in columns.keys())[:-1] + '\n'
    f.write(line)
    for result in data['sparql']['results']['result']:
        for col in result['binding']:
            columns[col['@name']] = col[list(col.keys())[1]]
        print(columns)
        line = ''.join('"' + columns[val] + '",' for val in columns.keys())[:-1] + '\n'
        f.write(line)
        columns = {name['@name']:'' for name in data['sparql']['head']['variable']}
    f.close()



main()
