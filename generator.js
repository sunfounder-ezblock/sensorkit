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


Blockly.Python['sensorkit_led_module_set_value'] = function(block) {
    var pin = Blockly.Python.valueToCode(block, 'SIG', Blockly.Python.ORDER_ATOMIC);
    var value = Blockly.Python.valueToCode(block, 'value', Blockly.Python.ORDER_ATOMIC);

    Blockly.Python.definitions_['import_sensorkit'] = 'from sensorkit import *';
    var code = '';
    code += 'LEDModule_set_value(' + pin + ', ' + value + ')\n';
    return code;
};

Blockly.Python['sensorkit_rgb_set_value'] = function(block) {
    var pin_r = Blockly.Python.valueToCode(block, 'R', Blockly.Python.ORDER_ATOMIC);
    var pin_g = Blockly.Python.valueToCode(block, 'G', Blockly.Python.ORDER_ATOMIC);
    var pin_b = Blockly.Python.valueToCode(block, 'B', Blockly.Python.ORDER_ATOMIC);
    var color = Blockly.Python.valueToCode(block, 'color', Blockly.Python.ORDER_ATOMIC);

    Blockly.Python.definitions_['import_sensorkit'] = 'from sensorkit import *';
    var code = '';
    code += 'RGBLED_set_value(' + pin_r + ', ' + pin_g + ', ' + pin_b + ', ' + color + ')\n';
    return code;
};

Blockly.Python['sensorkit_button_get_value'] = function(block) {
    var pin = Blockly.Python.valueToCode(block, 'SIG', Blockly.Python.ORDER_ATOMIC);
    Blockly.Python.definitions_['import_sensorkit'] = 'from sensorkit import *';

    var code = '';
    code += 'Button_get_value(' + pin + ')';
    return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['sensorkit_tiltswitch_get_value'] = function(block) {
    var pin = Blockly.Python.valueToCode(block, 'SIG', Blockly.Python.ORDER_ATOMIC);
    Blockly.Python.definitions_['import_sensorkit'] = 'from sensorkit import *';

    var code = '';
    code += 'TiltSwitch_get_value(' + pin + ')';
    return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['sensorkit_vibrationswitch_get_value'] = function(block) {
    var pin = Blockly.Python.valueToCode(block, 'SIG', Blockly.Python.ORDER_ATOMIC);
    Blockly.Python.definitions_['import_sensorkit'] = 'from sensorkit import *';

    var code = '';
    code += 'VibrationSwitch_get_value(' + pin + ')';
    return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['sensorkit_buzzer_set_value'] = function(block) {
    //digital pin number
    var SIG = Blockly.Python.valueToCode(block, 'SIG', Blockly.Python.ORDER_ATOMIC);
    var note = Blockly.Python.valueToCode(block, 'note', Blockly.Python.ORDER_ATOMIC);
    var beat = Blockly.Python.valueToCode(block, 'beat', Blockly.Python.ORDER_ATOMIC);

    Blockly.Python.definitions_['import_sensorkit'] = 'from sensorkit import *';

    var code = '';
    code += 'Buzzer_play(' + SIG + ', ' + note + ', ' + beat + ')\n';
    return code;
};

Blockly.Python['sensorkit_joystick_get_value'] = function(block) {
    var Xpin = Blockly.Python.valueToCode(block, 'X', Blockly.Python.ORDER_ATOMIC);
    var Ypin = Blockly.Python.valueToCode(block, 'Y', Blockly.Python.ORDER_ATOMIC);
    var BTnpin = Blockly.Python.valueToCode(block, 'Btn', Blockly.Python.ORDER_ATOMIC);
    Blockly.Python.definitions_['import_sensorkit'] = 'from sensorkit import *';

    var code = '';
    code += 'Joystick_get_value(' + Xpin + ', ' + Ypin + ', ' + BTnpin + ')';
    return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['sensorkit_joystick_get_status'] = function(block) {
    var Xpin = Blockly.Python.valueToCode(block, 'X', Blockly.Python.ORDER_ATOMIC);
    var Ypin = Blockly.Python.valueToCode(block, 'Y', Blockly.Python.ORDER_ATOMIC);
    var BTnpin = Blockly.Python.valueToCode(block, 'Btn', Blockly.Python.ORDER_ATOMIC);
    Blockly.Python.definitions_['import_sensorkit'] = 'from sensorkit import *';

    var code = '';
    code += 'Joystick_get_status(' + Xpin + ', ' + Ypin + ', ' + BTnpin + ')';
    return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['sensorkit_potentiometer_get_value'] = function(block) {
    var pin = Blockly.Python.valueToCode(block, 'SIG', Blockly.Python.ORDER_ATOMIC);
    Blockly.Python.definitions_['import_sensorkit'] = 'from sensorkit import *';

    var code = '';
    code += 'Potentiometer_get_value(' + pin + ')';
    return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['sensorkit_soundsensor_get_value'] = function(block) {
    var pin = Blockly.Python.valueToCode(block, 'SIG', Blockly.Python.ORDER_ATOMIC);
    Blockly.Python.definitions_['import_sensorkit'] = 'from sensorkit import *';

    var code = '';
    code += 'SoundSensor_get_value(' + pin + ')';
    return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['sensorkit_photoresistor_get_value'] = function(block) {
    var pin = Blockly.Python.valueToCode(block, 'SIG', Blockly.Python.ORDER_ATOMIC);
    Blockly.Python.definitions_['import_sensorkit'] = 'from sensorkit import *';

    var code = '';
    code += 'Photoresistor_get_value(' + pin + ')';
    return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['sensorkit_touchswitch_get_value'] = function(block) {
    var pin = Blockly.Python.valueToCode(block, 'SIG', Blockly.Python.ORDER_ATOMIC);
    Blockly.Python.definitions_['import_sensorkit'] = 'from sensorkit import *';

    var code = '';
    code += 'TouchSwitch_get_value(' + pin + ')';
    return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['sensorkit_ultrasonic_get_value'] = function(block) {
    var pin_trig = Blockly.Python.valueToCode(block, 'Trig', Blockly.Python.ORDER_ATOMIC);
    var pin_echo = Blockly.Python.valueToCode(block, 'Echo', Blockly.Python.ORDER_ATOMIC);

    Blockly.Python.definitions_['import_sensorkit'] = 'from sensorkit import *';
    var code = '';
    var code = 'UltrasonicSensor_get_value(' + pin_trig + ', ' + pin_echo + ')';
    return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['sensorkit_ds18b20_get_value'] = function(block) {
    var pin = Blockly.Python.valueToCode(block, 'SIG', Blockly.Python.ORDER_ATOMIC);
    Blockly.Python.definitions_['import_sensorkit'] = 'from sensorkit import *';

    var code = '';
    code += 'DS18B20_get_value(' + pin + ')';
    return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['sensorkit_servo_set_angle'] = function(block) {
    var pin = Blockly.Python.valueToCode(block, 'SIG', Blockly.Python.ORDER_ATOMIC);
    var angle = Blockly.Python.valueToCode(block, 'angle', Blockly.Python.ORDER_ATOMIC);
    Blockly.Python.definitions_['import_sensorkit'] = 'from sensorkit import *';

    var code = '';
    code += 'Servo_set_value(' + pin + ', ' + angle + ')\n';
    return code;
};

Blockly.Python['sensorkit_moisture_sensor_get_value'] = function(block) {
    var pin = Blockly.Python.valueToCode(block, 'SIG', Blockly.Python.ORDER_ATOMIC);
    Blockly.Python.definitions_['import_sensorkit'] = 'from sensorkit import *';

    var code = '';
    code += 'MoistureSensor_get_value(' + pin + ')';
    return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['sensorkit_adxl345_get_value'] = function(block) {
    Blockly.Python.definitions_['import_sensorkit'] = 'from sensorkit import *';

    var code = '';
    code += 'ADXL345_get_value()';
    return [code, Blockly.Python.ORDER_ATOMIC];
};