#!/bin/bash

# Karma custom browser script for running IE7-10
#
# Requirements:
#
# 1. VirtualBox (https://www.virtualbox.org/wiki/Downloads)
# 2. IE VMs (http://www.modern.ie/en-us/virtualization-tools)
# 3. Add/Remove VMs as necessary

start_vms() {
    echo "Starting VMs..."
    VBoxManage startvm 'IE7 - Vista' --type headless
    VBoxManage startvm 'IE8 - Win7' --type headless
    VBoxManage startvm 'IE9 - Win7' --type headless
    VBoxManage startvm 'IE10 - Win8' --type headless

    return $?
}

stop_vms() {
    echo "\Stopping VMs..."
    VBoxManage controlvm 'IE7 - Vista' poweroff
    VBoxManage controlvm 'IE8 - Win7' poweroff
    VBoxManage controlvm 'IE9 - Win7' poweroff
    VBoxManage controlvm 'IE10 - Win8' poweroff

    exit $?
}

# Powerdow VMs upon Ctrl-C or equivalent
trap stop_vms INT TERM KILL EXIT

# Start VMs & wait for trap
start_vms
while true; do read x; done
