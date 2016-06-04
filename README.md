# Swisscom data volume calculator

Parses a CSV file from Swisscom's account center.
It outputs the total data volume that was used within the time period.

Because, who want's to use Excel!
Make sure to remove the header (the very first line) from the CSV file before running the script.

To use this script, clone the repo and first run

`npm install`

Then start it by running

`babel-node volume.js ~/path/to/exported/file.csv`
