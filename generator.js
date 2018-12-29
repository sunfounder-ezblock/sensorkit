/*
 * var text_name = block.getFieldValue('NAME');
 * var number_name = block.getFieldValue('NAME');
 * var angle_name = block.getFieldValue('NAME');
 * var dropdown_name = block.getFieldValue('NAME');
 * var checkbox_name = block.getFieldValue('NAME') == 'TRUE';
 * var colour_name = block.getFieldValue('NAME');
 * var variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('NAME'), Blockly.Variables.NAME_TYPE);
 * var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
 * var statement_name = Blockly.Python.statementToCode(block, 'statement');
 *
 * For statement: return code
 * For output: return [code, Blockly.Python.ORDER_ATOMIC];
 */

'use strict';

goog.provide('Blockly.Python.sensorkit');

goog.require('Blockly.Python');

Blockly.Python['sensorkit_get_value'] = function (block) {
    var pin = Blockly.Python.valueToCode(block, 'SIG', Blockly.Python.ORDER_ATOMIC);

    if (pin.startsWith('"D')) {
        var getValue = '.value';
    } else if (pin.startsWith('"A')) {
        var getValue = '.read';
    }

    var code = '';
    code += 'Pin(' + pin + ')' + getValue + '()';
    return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['sensorkit_led_set_value'] = function (block) {
    //digital pin number
    var pin = Blockly.Python.valueToCode(block, 'pin', Blockly.Python.ORDER_ATOMIC);
    var value = Blockly.Python.valueToCode(block, 'value', Blockly.Python.ORDER_ATOMIC);

    var code = '';
    code += pin + '.value(' + value + ')\n';
    //code += GPio17.value(1)
    return code;
};

Blockly.Python['sensorkit_pin_switch'] = function (block) {
    //digital pin number
    var pin_switch = block.getFieldValue('pin_switch');

    var code = '';
    code += pin_switch;
    return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['sensorkit_pin_colour'] = function (block) {
    //digital pin number
    var colour = block.getFieldValue('colour');

    var code = '';
    code += colour;
    return [code, Blockly.Python.ORDER_ATOMIC];
};

// Blockly.Python['sensorkit_pin_dual_color_led'] = function(block) { //digital pin number
//     var dual_color = block.getFieldValue('dounle_led');

//     var code = '';
//     code += dual_color;
//     return [code, Blockly.Python.ORDER_ATOMIC];
// };

Blockly.Python['sensorkit_active_buzzer_set_value'] = function (block) {
    //digital pin number
    var SIG = Blockly.Python.valueToCode(block, 'SIG', Blockly.Python.ORDER_ATOMIC);
    var value = Blockly.Python.valueToCode(block, 'value', Blockly.Python.ORDER_ATOMIC);

    var code = '';
    code += SIG + '.value(' + value + ')\n';
    return code;
};

Blockly.Python['sensorkit_passive_buzzer_set_value'] = function (block) {
    //digital pin number
    var SIG = Blockly.Python.valueToCode(block, 'SIG', Blockly.Python.ORDER_ATOMIC);
    var value = Blockly.Python.valueToCode(block, 'value', Blockly.Python.ORDER_ATOMIC);

    var code = '';
    code += SIG + '.value(' + value + ')\n';
    return code;
};

Blockly.Python['sensorkit_rgb_set_value'] = function (block) {
    //digital pin number
    var pin_r = Blockly.Python.valueToCode(block, 'R', Blockly.Python.ORDER_ATOMIC);
    var pin_g = Blockly.Python.valueToCode(block, 'G', Blockly.Python.ORDER_ATOMIC);
    var pin_b = Blockly.Python.valueToCode(block, 'B', Blockly.Python.ORDER_ATOMIC);
    var color = Blockly.Python.valueToCode(block, 'color', Blockly.Python.ORDER_ATOMIC);
    color = color.replace('#', '').replace("'", '').replace("'", '');
    // split to Int
    var value_r = parseInt(color.slice(0,2), 16);
    var value_g = parseInt(color.slice(2,4), 16);
    var value_b = parseInt(color.slice(4,6), 16);
    // map from 255 to 4095
    value_r = Math.round(value_r/255 * 4095);
    value_g = Math.round(value_g/255 * 4095);
    value_b = Math.round(value_b/255 * 4095);
    // Reverse value
    value_r = 4095 - value_r;
    value_g = 4095 - value_g;
    value_b = 4095 - value_b;


    var code = '';
    code += 'PWM(' + pin_r + ').pulse_width('+ value_r +')\n';
    code += 'PWM(' + pin_g + ').pulse_width('+ value_g +')\n';
    code += 'PWM(' + pin_b + ').pulse_width('+ value_b +')\n';
    return code;
};

Blockly.Python['sensorkit_autoflash_set_value'] = function (block) {
    //digital pin number
    var R = Blockly.Python.valueToCode(block, 'R', Blockly.Python.ORDER_ATOMIC);
    var value = Blockly.Python.valueToCode(block, 'value', Blockly.Python.ORDER_ATOMIC);

    var code = '';
    code += R + '.value(' + value + ')\n';
    return code;
};

Blockly.Python['sensorkit_relay_set_value'] = function (block) {
    //digital pin number
    var SIG = Blockly.Python.valueToCode(block, 'SIG', Blockly.Python.ORDER_ATOMIC);
    var value = Blockly.Python.valueToCode(block, 'value', Blockly.Python.ORDER_ATOMIC);

    var code = '';
    code += SIG + '.value(' + value + ')\n';
    return code;
};

Blockly.Python['sensorkit_laser_set_value'] = function (block) {
    //digital pin number
    var SIG = Blockly.Python.valueToCode(block, 'SIG', Blockly.Python.ORDER_ATOMIC);
    var value = Blockly.Python.valueToCode(block, 'value', Blockly.Python.ORDER_ATOMIC);

    if (value == "0") {
        value = '1';
    } else {
        value = '0';
    }
    var code = '';
    code += SIG + '.value(' + value + ')\n';
    return code;
};

Blockly.Python['sensorkit_dual_color_led_set_value'] = function (block) {
    //digital pin number
    var pin_r = Blockly.Python.valueToCode(block, 'R', Blockly.Python.ORDER_ATOMIC);
    var pin_g = Blockly.Python.valueToCode(block, 'G', Blockly.Python.ORDER_ATOMIC);
    var color = Blockly.Python.valueToCode(block, 'color', Blockly.Python.ORDER_ATOMIC);
    var value = Blockly.Python.valueToCode(block, 'value', Blockly.Python.ORDER_ATOMIC);

    if (SIG.startsWith('Pin')) {
        var getValue = "value";
    } else if (SIG.startsWith('ADC')) {
        var getValue = "read";
    }

    var code = '';
    code += 'DualColorLED(' + pin_r + ', ' + pin_g + ').' + color + 'value(' + value + ')\n';

    return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['sensorkit_button_get_value'] = Blockly.Python['sensorkit_get_value'];
Blockly.Python['sensorkit_potentiometer_get_value'] = Blockly.Python['sensorkit_get_value'];
Blockly.Python['sensorkit_sound_get_value'] = Blockly.Python['sensorkit_get_value'];
Blockly.Python['sensorkit_tiltswitch_get_value'] = Blockly.Python['sensorkit_get_value'];
Blockly.Python['sensorkit_reedswitch_get_value'] = Blockly.Python['sensorkit_get_value'];
Blockly.Python['sensorkit_photointerrupter_get_value'] = Blockly.Python['sensorkit_get_value'];
Blockly.Python['sensorkit_raindetection_get_value'] = Blockly.Python['sensorkit_get_value'];
Blockly.Python['sensorkit_temperature_get_value'] = Blockly.Python['sensorkit_get_value'];
Blockly.Python['sensorkit_photoresistor_get_value'] = Blockly.Python['sensorkit_get_value'];
Blockly.Python['sensorkit_irobstacle_get_value'] = Blockly.Python['sensorkit_get_value'];
Blockly.Python['sensorkit_photoresistor_get_value'] = Blockly.Python['sensorkit_get_value'];

Blockly.Python['sensorkit_analoghallswitch_get_value'] = Blockly.Python['adGetValue'];

Blockly.Python['sensorkit_flame_get_value'] = function (block) {
    var SIGSIG = Blockly.Python.valueToCode(block, 'SIGSIG', Blockly.Python.ORDER_ATOMIC);
};


Blockly.Python['sensorkit_touchswitch_get_value'] = function (block) {
    var SIG = Blockly.Python.valueToCode(block, 'SIG', Blockly.Python.ORDER_ATOMIC);

    var code = '';
    var code = SIG + '.value()';
    return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['sensorkit_ds18b20_get_value'] = function (block) {
    var SIG = Blockly.Python.valueToCode(block, 'SIG', Blockly.Python.ORDER_ATOMIC);

    var code = '';
    var code = SIG + '.value()';
    return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['sensorkit_rotary_encoder_get_value'] = function (block) {
    var SIG = Blockly.Python.valueToCode(block, 'SIG', Blockly.Python.ORDER_ATOMIC);

    var code = '';
    var code = SIG + '.value()';
    return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['sensorkit_tracking_get_value'] = function (block) {
    var pin = Blockly.Python.valueToCode(block, 'pin', Blockly.Python.ORDER_ATOMIC);

    var code = '';
    var code = pin + '.value()';
    return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['sensorkit_ultrasonic_get_value'] = function (block) {
    var pin_trig = Blockly.Python.valueToCode(block, 'Trig', Blockly.Python.ORDER_ATOMIC);
    var pin_echo = Blockly.Python.valueToCode(block, 'Echo', Blockly.Python.ORDER_ATOMIC);

    Blockly.Python.definitions_['import_modules_ultrasonicranging'] = 'from modules import Ultrasonicranging';
    var code = '';
    var code = 'Ultrasonicranging(' + pin_trig + ',' + pin_echo + ').value()\n';
    return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['sensorkit_flame_get_value'] = function (block) {
    var DO = Blockly.Python.valueToCode(block, 'DO', Blockly.Python.ORDER_ATOMIC);
    var AO = Blockly.Python.valueToCode(block, 'AO', Blockly.Python.ORDER_ATOMIC);

    var code = '';
    var code = 'FlameSensor(' + DO + ',' + AO + ').DO.value()\n';
    return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['sensorkit_gassensor_get_value'] = function (block) {
    var DO = Blockly.Python.valueToCode(block, 'DO', Blockly.Python.ORDER_ATOMIC);
    var AO = Blockly.Python.valueToCode(block, 'AO', Blockly.Python.ORDER_ATOMIC);

    Blockly.Python.definitions_['import_modules_gassensor'] = 'from modules import Gassensor';

    var code = '';
    var code = 'Gassensor(' + DO + ',' + AO + ').DO.value()\n';
    return [code, Blockly.Python.ORDER_NONE];
};


Blockly.Python['sensorkit_hallswitch_get_value'] = function (block) {
    var SIG = Blockly.Python.valueToCode(block, 'SIG', Blockly.Python.ORDER_ATOMIC);
};

Blockly.Python['sensorkit_analogtemperature_get_value'] = function (block) {
    var DO = Blockly.Python.valueToCode(block, 'DO', Blockly.Python.ORDER_ATOMIC);
    var AO = Blockly.Python.valueToCode(block, 'AO', Blockly.Python.ORDER_ATOMIC);

    Blockly.Python.definitions_['import_modules_analogtemperature'] = 'from modules import AnalogTemperature';

    var code = '';
    var code = 'AnalogTemperature(' + DO + ',' + AO + ').DO.value()\n';
    return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['sensorkit_thermistor_get_value'] = function (block) {
    var SIG = Blockly.Python.valueToCode(block, 'SIG', Blockly.Python.ORDER_ATOMIC);

    Blockly.Python.definitions_['import_modules_dht11'] = 'from modules importh DHT11';

    var code = '';
    var code = '"humidity: %s %%,  Temperature: %s C°" % DHT11(' + SIG + ').read()\n';
    return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['sensorkit_joystick_get_value'] = function (block) {
    var X = Blockly.Python.valueToCode(block, 'X', Blockly.Python.ORDER_ATOMIC);
    var Y = Blockly.Python.valueToCode(block, 'Y', Blockly.Python.ORDER_ATOMIC);
    var BT = Blockly.Python.valueToCode(block, 'BT', Blockly.Python.ORDER_ATOMIC);
};

Blockly.Python['sensorkit_pin_switch'] = function (block) {
    //digital pin number
    var pin_switch = block.getFieldValue('pin_switch');

    var code = '';
    code += pin_switch;
    return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['sensorkit_dht11_get_value'] = function (block) {
    var SIG = Blockly.Python.valueToCode(block, 'SIG', Blockly.Python.ORDER_ATOMIC);

    Blockly.Python.definitions_['import_modules_rgbled'] = 'from modules import RGBLED';

    var code = '';
    code += 'RGBLED(' + pin_r + ', ' + pin_g + ', ' + pin_b + ').value(' + color + ')\n';
    return code;
};

Blockly.Python['sensorkit_dual_color_led_set_value'] = function (block) {
    //digital pin number
    var pin_r = Blockly.Python.valueToCode(block, 'R', Blockly.Python.ORDER_ATOMIC);
    var pin_g = Blockly.Python.valueToCode(block, 'G', Blockly.Python.ORDER_ATOMIC);
    var color = Blockly.Python.valueToCode(block, 'color', Blockly.Python.ORDER_ATOMIC);
    var value = Blockly.Python.valueToCode(block, 'value', Blockly.Python.ORDER_ATOMIC);

    Blockly.Python.definitions_['import_modules_DualColorLED'] = 'from modules import DualColorLED';

    var code = '';
    code += 'DualColorLED(' + pin_r + ', ' + pin_g + ').' + color + '.value(' + value + ')\n';

    return [code, Blockly.Python.ORDER_ATOMIC];
};