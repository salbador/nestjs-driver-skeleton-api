#!/usr/bin/env bash
#!/bin/bash
#
DEBUG_VERB_READING_LOGIC=$DEBUG || 0
LIGHTPINK="\033[1;204m"
YELLOW_OVER_DARKBLUE="\033[38;5;220m\033[48;5;20m"
RESET="\033[0m"
        function kill() {
            echo -e " ☠ ${LIGHTPINK} KILL EXECUTION SIGNAL SEND ${RESET}"
            echo -e " ☠ ${YELLOW_OVER_DARKBLUE}  ${*} ${RESET}"
            exit 69;
        }

function generate_routes(){
    local _routes 

    _routes="
checkPreloadings
getUserDataByDriverPin
getVehiclesAtLocation    
getWeight
initiateWeiging
checkDriver
checkVehicles
checkDriverLoadingADR
checkVehicleLoadingADR
checkTransportAvailability
checkAdditionalInformation
checkCompartmentPositions
checkPerloadings
convertToUom
getTerminalShifts
getVehicleInfo
getAuthIdProfile
getAuthPositions
getAdditionalInfoTermplates
getCheckinHeaders
getCheckin
getAdditionalTerminalServices
getPrintableDocuments
cancelCheckin
setCheckin
setCheckinStatus
setAdditionalTerminalServices
printDocuments
recalculateCompartmentPositions
"
    local _one
    while read -r _one; do
    {
      if [ -n "${_one}" ] ; then    # if not empty
      {
          nest g mo "${_one}" 
          nest g co "${_one}" 
          nest g s "${_one}" 
      }  
      fi
    }  
    done <<< "${_routes}"

} # end generate_routes

generate_routes 

