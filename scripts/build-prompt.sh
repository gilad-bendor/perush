#!/bin/bash -eu
set -o pipefail
cd "$( dirname "$( dirname "$( realpath "$0" )" )" )" || exit 1

OUTPUT_FILE="_scratch_prompt.rtl.md"

# Read perush file paths from stdin.
echo "Paste the path of all relevant perush files, one per line, followed by Ctrl-D:" 1>&2
IFS=$'\n' read -r -d '' -a PERUSH_PATHS <<< "$( cat )"$'\0' || true
echo 1>&2

{
  # Add the file CLAUDE.md - up to (and excluding) the section "## חיפוש קבצי פירוש רלבנטיים".
  grep -v "פירוש/הקדמה-לפירוש.rtl.md" CLAUDE.md |
  gawk '
    /^# / {
      main_section = $0;
      print "main_section=\"" main_section "\"" > "/dev/stderr"
    }
    (main_section != "# קבצי הפירוש") {
      print;
    }
  '


  # Add all the perush files specified by the user.
  for PERUSH_PATH in "פירוש/הקדמה-לפירוש.rtl.md" "${PERUSH_PATHS[@]}" ; do
    if [[ -f "$PERUSH_PATH" ]]; then
      echo "Adding file:  \"$PERUSH_PATH\"" 1>&2
      PERUSH_FILENAME="$( basename "$PERUSH_PATH" )"

      if [[ "$PERUSH_PATH" == "פירוש/הקדמה-לפירוש.rtl.md" ]] ; then
        PERUSH_FILE_NICKNAME='"הקדמה לפירוש"'
      else
        PERUSH_FILE_NICKNAME="$( gawk '
                match($0, /^[0-9]+-(בראשית|שמות|ויקרא|במדבר|דברים)-([א-ת][א-ת]?)_([א-ת][א-ת]?)-([א-ת][א-ת]?)_([א-ת][א-ת]?)-(.*)\.rtl\.md$/, m) {
                  gsub(/[-_]/, " ", m[6]);
                  print m[1] " פרק " m[2] " פסוק " m[3] " עד פרק " m[4] " פסוק " m[5] ": \"" m[6] "\"";
                  next;
                }
                {
                  print "ERROR: Invalid perush-file name: \"" $0 "\"" > "/dev/stderr"
                  exit(1);
                }
            ' <<< "$PERUSH_FILENAME" )"
      fi

      echo
      echo "=== התחלת מקטע: $PERUSH_FILE_NICKNAME ==="

      # Add the file content, trimming multiple blank lines to a single blank line, and making sure it has a leading and terminating empty-line.
      {
        echo
        cat "$PERUSH_PATH"
        echo
      } |
      gawk '
        BEGIN {
          blank_line_count = 0;
        }
        {
          if ( $0 ~ /^[[:space:]]*$/ ) {
            if ( blank_line_count == 0 ) {
              print "";
            }
            blank_line_count++;
          } else {
            blank_line_count = 0;
            print $0;
          }
        }
      '
      echo "=== סיום מקטע: $PERUSH_FILE_NICKNAME ==="
      echo
    else
      echo "Ignoring non-file:  \"$PERUSH_PATH\"" 1>&2
    fi
  done

  # Add various suggested excerpts that the user may find useful.
  echo "
      Cut & Edit:

      אני רוצה להתמקד בקובץ הפרוש X.rtl.md
      קיים בבקשה דיון עומק יצירתי
      תנסה לעזור לי באופן יצירתי וחופשי
      אל תהסס להציע הצעות מוזרות: זהו סיעור מוחות - אולי כיוון שתתחיל יהווה בסיס לרעיונות אחרים
      תרגיש חפשי לדבר את התהליך המחשבתי שלך
  "
} > "$OUTPUT_FILE"
echo 1>&2
echo "Wrote prompt to $OUTPUT_FILE" 1>&2