#!/bin/bash

# Array of servers
servers=("http://localhost:3010" "http://localhost:3020")

# Array of log levels
log_levels=("error" "warn" "debug" "info" "verbose")

# Loop through each server and log level to send requests
for server in "${servers[@]}"; do
  for level in "${log_levels[@]}"; do
    url="$server/$level"
    echo "Sending request to $url"
    curl -X GET "$url"
    echo -e "\n"  # New line for readability in output
  done
done

echo "Log test requests completed."
