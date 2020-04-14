#!/bin/bash

for i in *.jpg; do
    printf "Resize $i\n"
    convert "$i" -resize 50% "$i"
done