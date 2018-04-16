#!/bin/sh

if [ "$EUID" -ne 0 ]
then 
	echo "Please run as root"
	exit
fi

cp server/lyt.py /bin/lyt
chmod +x /bin/lyt
