#!/bin/sh
set -e

CONFIG_DIR=/usr/share/nginx/html/config
DEFAULT_FILE="$CONFIG_DIR/runtime.configuration.json"

if [ -n "$RUNTIME_CONFIG_ENV" ]; then
  VARIANT_FILE="$CONFIG_DIR/${RUNTIME_CONFIG_ENV}.runtime.configuration.json"
  if [ -f "$VARIANT_FILE" ]; then
    cp "$VARIANT_FILE" "$DEFAULT_FILE"
    echo "runtime-config: applied variant '$RUNTIME_CONFIG_ENV' -> $(basename "$VARIANT_FILE")"
  else
    echo "runtime-config: WARNING - RUNTIME_CONFIG_ENV='$RUNTIME_CONFIG_ENV' set but $VARIANT_FILE not found; leaving default file as-is" >&2
  fi
else
  echo "runtime-config: RUNTIME_CONFIG_ENV not set; using default runtime.configuration.json as shipped"
fi

exec nginx -g 'daemon off;'
