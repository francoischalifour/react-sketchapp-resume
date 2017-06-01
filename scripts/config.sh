#!/usr/bin/env bash

readonly ROOT_PATH="./config/"

#######################################
# Change the config environment
#
# This function changes environment variables.
# This will eventually be replaced by a Webpack plugin.
# See:
# https://github.com/skpm/skpm/blob/master/lib/utils/webpackConfig.js
# Issues related:
# https://github.com/airbnb/react-sketchapp/issues/63#issuecomment-299040900
#
# This is the worst hack I've ever done in my life. Please forgive me.
# This function is hopefully temporary.
#
# Arguments:
#   key: the config to change
#   value: the value of the config
# Returns:
#   None
#######################################
change_conf() {
  local key="$1"
  local value="$2"

  echo "export default '${value}'" > "${ROOT_PATH}.config.${key}.js"
}

change_conf $1 $2

exit 0
