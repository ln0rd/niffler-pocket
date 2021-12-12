#!/bin/bash 

current_dir=$(pwd)

niffler_execute=$"${current_dir}/index.js"

shopt -s expand_aliases

PATH="${niffler_execute}"