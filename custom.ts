namespace LampControl {
    enum LampState {
        Off = 0,
        On = 1
    }

    let lamp: LampState = LampState.Off; // Initial state is Off

    // Function to update the lamp state and control the physical lamp
    export function updateLampState(newState: LampState): void {
        lamp = newState;
        pins.digitalWritePin(DigitalPin.P8, newState);
    }

    // Function to turn on the lamp
    export function turnOnLamp(): void {
        updateLampState(LampState.On);
    }

    // Function to turn off the lamp
    export function turnOffLamp(): void {
        updateLampState(LampState.Off);
    }
}

// When Touch pad is touched
input.onPinPressed(TouchPin.P0, function () {
    // Call the function to turn on the lamp
    LampControl.turnOnLamp();
});

// When Touch pad is released
input.onPinReleased(TouchPin.P0, function () {
    // Call the function to turn off the lamp
    LampControl.turnOffLamp();
});
