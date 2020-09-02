path="/home/w0xter/Desktop/oeg/morph-csv-demo/data/bio2rdf"

for i in $(seq 1 10)
do
	mkdir query${i}
    for j in $(ls ./bio2rdf.${i}.*)
    do
        cp $j $(pwd)/query${i}/$(echo $j | sed 's/bio2rdf\./query/')
    done
done
