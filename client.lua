Citizen.CreateThread(function()
    while true do
        local msec = 200
        local ped = PlayerPedId()
        local isInVehicle = IsPedInAnyVehicle(ped, false)

        if isInVehicle then
            msec = 0
            Citizen.Wait(100)

            local vehicle = GetVehiclePedIsIn(ped, false)
            local fuel = GetVehicleFuelLevel(vehicle)
            local marcha = GetVehicleCurrentGear(vehicle)
            local oil = GetVehicleOilLevel(vehicle)
            local speed = GetEntitySpeed(vehicle) * 3.6

            SendNUIMessage({
                isInVehicle = isInVehicle,
                speed = speed,
                fuel = fuel,
                oil = oil,
                marcha = marcha
            });
        else
            SendNUIMessage({isInVehicle = false});
        end
        Wait(msec)
    end
end)
