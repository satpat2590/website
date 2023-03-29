#!/bin/bash

# Check if search pattern is provided
if [ -z "$1" ]; then
  echo "Please provide a search pattern"
  exit 1
fi

# Create file for storing results
output_file=~/\"$1\".txt
touch "$output_file"

# Perform search and save results to file if any
echo "Searching for '$1'..."
results=$(find / -name "*$1*" 2>/dev/null)
if [ -n "$results" ]; then
  echo "$results" > "$output_file"
  echo "Results saved to $output_file"
else
  echo "Not found..."
  # Delete the empty file
  rm "$output_file"
  exit 1
fi

