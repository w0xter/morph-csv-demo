path="/home/w0xter/Desktop/oeg/morph-csv-demo/data/bsbm"

for i in $(seq 1 10)
do
	mkdir query${i}
    for j in $(ls ./bsbm.${i}.*)
    do
        cp $j $(pwd)/query${i}/$(echo $j | sed 's/bsbm\./query/')
    done
done
