/*
  Input:
    .appendDummyInput
    .appendStatementInput
    .appendValueInput
 
  Field:
    .appendField(Blockly.Msg.MODULE_BLOCKNAME_TITLE1)
    .appendField(new Blockly.FieldTextInput("DEFAULT"), "NAME")
    .appendField(new Blockly.FieldNumber(DEFAULT, MIN, MAX), "NAME")
    .appendField(new Blockly.FieldAngle(90), "NAME")
    .appendField(new Blockly.FieldDropdown(Blockly.Constants.MODULE.XXX), "NAME")
    .appendField(new Blockly.FieldCheckbox("TRUE"), "NAME");
    .appendField(new Blockly.FieldColour("#ff0000"), "NAME");
    .appendField(new Blockly.FieldVariable("item"), "NAME");
    .appendField(new Blockly.FieldImage("https://www.gstatic.com/codesite/ph/images/star_on.gif", 15, 15, "*"));
 
  Type:
    .setCheck(null)
    .setCheck("Boolean")
    .setCheck("Number")
    .setCheck("String")
    .setCheck("Array")
    .setCheck("CUSTOM")
    .setCheck(["Boolean", "Number"])
 
  this.setInputsInline(false);
  this.setOutput(true, TYPE);
  this.setPreviousStatement(true, TYPE);
  this.setNextStatement(true, TYPE);
  this.setColour(Blockly.Constants.MODULE.RGB);
  this.setTooltip(Blockly.Msg.MODULE_BLOCKNAME_TOOLTIP);
  this.setHelpUrl('');
 */

'use strict';

goog.provide('Blockly.Blocks.sensorkit'); // Deprecated
goog.provide('Blockly.Constants.SensorKit');

goog.require('Blockly.Blocks');
goog.require('Blockly.Msg');

Blockly.Constants.SensorKit.RGB = '#58ce6a';
Blockly.Blocks.sensorkit.RGB = Blockly.Constants.SensorKit.RGB;


Blockly.Blocks.sensorkit_set_value = function(module) {
    return {
        init: function init() {
            this.appendValueInput("SIG")
                .setCheck('Digital_Pin', 'PWM_Pin')
                .appendField(Blockly.Msg['SENSORKIT_' + module + '_SET_VALUE_TITLE1']);
            this.appendValueInput("value").setCheck(null).appendField(Blockly.Msg['SENSORKIT_' + module + '_SET_VALUE_TITLE2']);
            this.setInputsInline(true);
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(Blockly.Constants.SensorKit.RGB);
            this.setTooltip(Blockly.Msg['SENSORKIT_' + module + '_SET_VALUE_TOOLTIP']);
            this.setHelpUrl('');
        }
    };
};

Blockly.Blocks.sensorkit_get_value = function(_type, module) {
    return {
        init: function init() {
            this.appendValueInput("SIG")
                .setCheck(_type + '_Pin')
                .appendField(Blockly.Msg['SENSORKIT_' + module + '_GET_VALUE_TITLE1']);
            this.appendDummyInput()
                .appendField(Blockly.Msg['SENSORKIT_' + module + '_GET_VALUE_TITLE2']);
            this.setInputsInline(true);
            this.setOutput(true, null);
            this.setColour(Blockly.Constants.SensorKit.RGB);
            this.setTooltip(Blockly.Msg['SENSORKIT_' + module + '_GET_VALUE_TOOLTIP']);
            this.setHelpUrl('');
        }
    };
};

Blockly.Blocks.sensorkit_digital_set_value = function(module) {
    return Blockly.Blocks.sensorkit_set_value(module);
};

Blockly.Blocks.sensorkit_pwm_set_value = function(module) {
    return Blockly.Blocks.sensorkit_set_value(module);
};

Blockly.Blocks.sensorkit_digital_get_value = function(module) {
    return Blockly.Blocks.sensorkit_get_value('Digital', module);
};

Blockly.Blocks.sensorkit_analog_get_value = function(module) {
    return Blockly.Blocks.sensorkit_get_value('Analog', module);
};


// Blockly.Blocks['sensorkit_led_module_set_value'] = Blockly.Blocks.sensorkit_digital_set_value('LED_MODULE');

Blockly.Blocks['sensorkit_led_module_set_value'] = {
    init: function init() {
        this.appendValueInput("SIG")
            .setCheck("Digital_Pin")
            .appendField(Blockly.Msg.SENSORKIT_LED_MODULE_SET_VALUE_TITLE1);
        this.appendValueInput("value")
            .setCheck("Number")
            .appendField(Blockly.Msg.SENSORKIT_LED_MODULE_SET_VALUE_TITLE2);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(Blockly.Constants.SensorKit.RGB);
        this.setTooltip(Blockly.Msg.SENSORKIT_LED_MODULE_SET_VALUE_TOOLTIP);
        this.setHelpUrl('');
    }
};

Blockly.Blocks['sensorkit_rgb_set_value'] = {
    init: function() {
        this.appendValueInput("R")
            .setCheck("PWM_Pin", "Digital_Pin")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.SENSORKIT_RGB_SET_VALUE_TITLE1);
        this.appendValueInput("G")
            .setCheck("PWM_Pin", "Digital_Pin")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.SENSORKIT_RGB_SET_VALUE_TITLE2);
        this.appendValueInput("B")
            .setCheck("PWM_Pin", "Digital_Pin")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.SENSORKIT_RGB_SET_VALUE_TITLE3);
        this.appendValueInput("color")
            .setCheck(null)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.SENSORKIT_RGB_SET_VALUE_TITLE4);
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(Blockly.Constants.SensorKit.RGB);
        this.setTooltip(Blockly.Msg.SENSORKIT_RGB_SET_VALUE_TOOLTIP);
        this.setHelpUrl('');
    }
};

Blockly.Blocks['sensorkit_button_get_value'] = Blockly.Blocks.sensorkit_digital_get_value('BUTTON');

Blockly.Blocks['sensorkit_tiltswitch_get_value'] = Blockly.Blocks.sensorkit_digital_get_value('TILTSWITCH');

Blockly.Blocks['sensorkit_vibrationswitch_get_value'] = Blockly.Blocks.sensorkit_digital_get_value('VIBRATIONSWITCH');

Blockly.Blocks['sensorkit_buzzer_set_value'] = {
    init: function init() {
        this.appendValueInput("SIG")
            .setAlign(Blockly.ALIGN_RIGHT)
            .setCheck("PWM_Pin")
            .appendField(Blockly.Msg.SENSORKIT_BUZZER_SET_STATUS_TITLE1);
        this.appendValueInput("note")
            .setAlign(Blockly.ALIGN_RIGHT)
            .setCheck("Number")
            .appendField(Blockly.Msg.SENSORKIT_BUZZER_SET_STATUS_TITLE2);
        this.appendValueInput("beat")
            .setAlign(Blockly.ALIGN_RIGHT)
            .setCheck("Number")
            .appendField(Blockly.Msg.SENSORKIT_BUZZER_SET_STATUS_TITLE3);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(Blockly.Constants.SensorKit.RGB);
        this.setTooltip(Blockly.Msg.SENSORKIT_BUZZER_SET_STATUS_TOOLTIP);
        this.setHelpUrl('');
    }
};

Blockly.Blocks['sensorkit_joystick_get_value'] = {
    init: function init() {
        this.appendValueInput("X")
            .setAlign(Blockly.ALIGN_RIGHT)
            .setCheck("Analog_Pin")
            .appendField(Blockly.Msg.SENSORKIT_JOYSTICK_GET_STATUS_TITLE1);
        this.appendValueInput("Y")
            .setAlign(Blockly.ALIGN_RIGHT)
            .setCheck("Analog_Pin")
            .appendField(Blockly.Msg.SENSORKIT_JOYSTICK_GET_STATUS_TITLE2);
        this.appendValueInput("Btn")
            .setAlign(Blockly.ALIGN_RIGHT)
            .setCheck("Digital_Pin")
            .appendField(Blockly.Msg.SENSORKIT_JOYSTICK_GET_STATUS_TITLE3);
        this.appendDummyInput()
            .appendField(Blockly.Msg.SENSORKIT_JOYSTICK_GET_VALUE_TITLE2);
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour(Blockly.Constants.SensorKit.RGB);
        this.setTooltip(Blockly.Msg.SENSORKIT_JOYSTICK_GET_VALUE_TOOLTIP);
        this.setHelpUrl('');
    }
};

Blockly.Blocks['sensorkit_joystick_get_status'] = {
    init: function init() {
        this.appendValueInput("X")
            .setAlign(Blockly.ALIGN_RIGHT)
            .setCheck("Analog_Pin")
            .appendField(Blockly.Msg.SENSORKIT_JOYSTICK_GET_STATUS_TITLE1);
        this.appendValueInput("Y")
            .setAlign(Blockly.ALIGN_RIGHT)
            .setCheck("Analog_Pin")
            .appendField(Blockly.Msg.SENSORKIT_JOYSTICK_GET_STATUS_TITLE2);
        this.appendValueInput("Btn")
            .setAlign(Blockly.ALIGN_RIGHT)
            .setCheck("Digital_Pin")
            .appendField(Blockly.Msg.SENSORKIT_JOYSTICK_GET_STATUS_TITLE3);
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour(Blockly.Constants.SensorKit.RGB);
        this.setTooltip(Blockly.Msg.SENSORKIT_JOYSTICK_GET_STATUS_TOOLTIP);
        this.setHelpUrl('');
    }
};

Blockly.Blocks['sensorkit_potentiometer_get_value'] = Blockly.Blocks.sensorkit_analog_get_value('POTENTIOMETER');

Blockly.Blocks['sensorkit_soundsensor_get_value'] = Blockly.Blocks.sensorkit_analog_get_value('SOUNDSENSOR');

Blockly.Blocks['sensorkit_photoresistor_get_value'] = Blockly.Blocks.sensorkit_analog_get_value('PHOTORESISTOR');

Blockly.Blocks['sensorkit_touchswitch_get_value'] = Blockly.Blocks.sensorkit_digital_get_value('TOUCHSWITCH');


Blockly.Blocks['sensorkit_ultrasonic_get_value'] = {
    init: function init() {
        this.appendDummyInput().appendField(Blockly.Msg.SENSORKIT_ULTRASONIC_GET_VALUE_TITLE1);
        this.appendValueInput("Trig")
            .setCheck("Digital_Pin")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.SENSORKIT_ULTRASONIC_GET_VALUE_TITLE2);
        this.appendValueInput("Echo")
            .setCheck("Digital_Pin")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.SENSORKIT_ULTRASONIC_GET_VALUE_TITLE3);
        this.setInputsInline(false);
        this.setOutput(true, null);
        this.setColour(Blockly.Constants.SensorKit.RGB);
        this.setTooltip(Blockly.Msg.SENSORKIT_ULTRASONIC_VALUE_TOOLTIP);
        this.setHelpUrl('');
    }
};

Blockly.Blocks['sensorkit_ds18b20_get_value'] = {
    init: function init() {
        this.appendValueInput("SIG")
            .setCheck("Digital_Pin")
            .appendField(Blockly.Msg.SENSORKIT_DS18B20_GET_VALUE_TITLE1);
        this.appendDummyInput()
            .appendField(Blockly.Msg.SENSORKIT_DS18B20_GET_VALUE_TITLE2);
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour(Blockly.Constants.SensorKit.RGB);
        this.setTooltip(Blockly.Msg.SENSORKIT_DS18B20_GET_VALUE_TOOLTIP);
        this.setHelpUrl('');
    }
};

Blockly.Blocks['sensorkit_servo_set_angle'] = {
    init: function init() {
        this.appendValueInput("SIG")
            .setCheck("PWM_Pin")
            .appendField(Blockly.Msg.SENSORKIT_SERVO_SET_ANGLE_TITLE1);
        this.appendValueInput("angle")
            .setCheck(null)
            .appendField(Blockly.Msg.SENSORKIT_SERVO_SET_ANGLE_TITLE2);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(Blockly.Constants.SensorKit.RGB);
        this.setTooltip(Blockly.Msg.SENSORKIT_SERVO_SET_ANGLE_TOOLTIP);
        this.setHelpUrl('');
    }
};

Blockly.Blocks['sensorkit_moisture_sensor_get_value'] = {
    init: function init() {
        this.appendValueInput("SIG")
            .setCheck("Analog_Pin")
            .appendField(Blockly.Msg.SENSORKIT_MOISTURE_SENSOR_GET_VALUE_TITLE1);
        this.appendDummyInput()
            .appendField(Blockly.Msg.SENSORKIT_MOISTURE_SENSOR_GET_VALUE_TITLE2);
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour(Blockly.Constants.SensorKit.RGB);
        this.setTooltip(Blockly.Msg.SENSORKIT_MOISTURE_SENSOR_GET_VALUE_TOOLTIP);
        this.setHelpUrl('');
    }
};

Blockly.Blocks['sensorkit_adxl345_get_value'] = {
    init: function init() {
        this.appendDummyInput()
            .appendField(Blockly.Msg.SENSORKIT_ADXL345_GET_VALUE_TITLE1);
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour(Blockly.Constants.SensorKit.RGB);
        this.setTooltip(Blockly.Msg.SENSORKIT_ADXL345_GET_VALUE_TOOLTIP);
        this.setHelpUrl('');
    }
};

// Blockly.Blocks['sensorkit_adxl345_get_value'] = {
//     init: function init() {
//         this.appendValueInput("pin")
//             .setCheck("Digital_Pin")
//             .appendField(Blockly.Msg.SENSORKIT_ADXL345_GET_VALUE_TITLE1);
//         this.appendDummyInput()
//             .appendField(Blockly.Msg.SENSORKIT_ADXL345_GET_VALUE_TITLE2);
//         this.setInputsInline(true);
//         this.setOutput(true, null);
//         this.setColour(Blockly.Constants.SensorKit.RGB);
//         this.setTooltip(Blockly.Msg.SENSORKIT_ADXL345_GET_VALUE_TOOLTIP);
//         this.setHelpUrl('');
//     }
// };