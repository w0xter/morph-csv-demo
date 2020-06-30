path="/home/w0xter/Desktop/oeg/morph-csv/results/gtfs"

for i in $(seq 1 18)
do
	mkdir query${i}
	cp ${path}/query${i}.* $(pwd)/query${i}/
done
