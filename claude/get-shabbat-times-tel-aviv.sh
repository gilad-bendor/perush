#!/usr/bin/env bash
# Shabbat enter/exit times in UTC (Tel-Aviv - geonameid=293397).
set -o pipefail
curl -fsS "https://www.hebcal.com/shabbat?cfg=json&geonameid=293397&M=on" | jq -r '
  .items[] | select(.category == "candles" or .category == "havdalah")
  | .date as $d   # e.g. "2026-10-30T16:32:00+02:00"
  | (if .category == "candles" then "Enter" else "Exit " end) + " " +
    (($d[:19] + "Z" | fromdate) - ($d[19:20] + "1" | tonumber) * (($d[20:22] | tonumber) * 3600 + ($d[23:25] | tonumber) * 60)
     | strftime("%Y-%m-%d %H:%M UTC"))'