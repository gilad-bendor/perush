#!/bin/bash -ue

FS=( $( ls -1 | grep "שמות" | sort -n ) )
I=1
for F in "${FS[@]}" ; do
  if (( I < 10 )) ; then
    I2="0$I"
  else
    I2="$I"
  fi
  N="$( echo "$F" | sed "s/^[0-9][0-9]*/$I2/" )"
  if [[ "$F" != "$N" ]] ; then
    git mv "$F" "$N"
  fi
  I=$(( I + 1 ))
done

echo "=== DONE ==="
( set -x; ls -1 | sort -n )