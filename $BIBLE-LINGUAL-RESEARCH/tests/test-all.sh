#!/bin/bash -eu

function test() {
  echo
  echo "==============================    $1    =============================="
  echo
  ( set -x ; ./$1 )
  echo
}
test bible_cooccurrences.test.js
test bible_find_parallels.test.js
test bible_get_structure.test.js
test bible_get_verses.test.js
test bible_morphology.test.js
test bible_root_family.test.js
test bible_search.test.js
test bible_semantic_field.test.js
test bible_strong_info.test.js
test bible_word_frequency.test.js

echo "=== ALL TESTS DONE ==="
