for i in "bsbm" "gtfs"
do
    for j in $(ls ./${i}/sparqlresults/*.xml)
    do
        python3 xml2csv.py $j
    done
done

