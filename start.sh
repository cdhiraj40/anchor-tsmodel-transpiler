file=demo.ts

if [ ! -e "$file" ] ; then
    touch "$file"
    echo $file created, now run 'yarn start'.
else
    echo $file already exists, no setup required.
    echo try running 'yarn start'
fi