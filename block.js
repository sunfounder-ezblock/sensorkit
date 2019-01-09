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

Blockly.Constants.SensorKit.PIN_SWITCH = [["on", "1"], ["off", "0"]];

Blockly.Constants.SensorKit.PIN_DOUBLE_LED = [["red", "Red"], ["green", "Green"]];

Blockly.Constants.SensorKit.AD = [["analog", "AO"], ["digital", "DO"]];
Blockly.Blocks.sensorkit_set_value = function (_type, module) {
    return {
        init: function init() {
            this.appendValueInput("SIG").setCheck(_type + '_Pin').appendField(Blockly.Msg['SENSORKIT_' + module + '_SET_VALUE_TITLE1']);
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

Blockly.Blocks.sensorkit_get_value = function (_type, module) {
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

Blockly.Blocks.sensorkit_digital_set_value = function (module) {
    return Blockly.Blocks.sensorkit_set_value('Digital', module);
};

Blockly.Blocks.sensorkit_pwm_set_value = function (module) {
    return Blockly.Blocks.sensorkit_set_value('PWM', module);
};

Blockly.Blocks.sensorkit_digital_get_value = function (module) {
    return Blockly.Blocks.sensorkit_get_value('Digital', module);
};

Blockly.Blocks.sensorkit_analog_get_value = function (module) {
    return Blockly.Blocks.sensorkit_get_value('Analog', module);
};

Blockly.Blocks['sensorkit_pin_switch'] = {
    init: function init() {
        this.appendDummyInput().appendField(new Blockly.FieldDropdown(Blockly.Constants.SensorKit.PIN_SWITCH), "pin_switch");
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour(Blockly.Constants.SensorKit.RGB);
        this.setTooltip(Blockly.Msg.SENSORKIT_PIN_SWITCH_TOOLTIP);
        this.setHelpUrl('');
    }
};

Blockly.Blocks['sensorkit_rgb_set_value'] = {
    init: function () {
        this.appendValueInput("R")
            .setCheck("PWM_Pin", "Digital_Pin", "Analog_Pin")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.SENSORKIT_RGB_SET_VALUE_TITLE1);
        this.appendValueInput("G")
            .setCheck("PWM_Pin", "Digital_Pin", "Analog_Pin")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.SENSORKIT_RGB_SET_VALUE_TITLE2);
        this.appendValueInput("B")
            .setCheck("PWM_Pin", "Digital_Pin", "Analog_Pin")
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

Blockly.Blocks['sensorkit_active_buzzer_set_value'] = Blockly.Blocks.sensorkit_digital_set_value('ACTIVE_BUZZER');
Blockly.Blocks['sensorkit_passive_buzzer_set_value'] = Blockly.Blocks.sensorkit_digital_set_value('PASSIVE_BUZZER');
Blockly.Blocks['sensorkit_autoflash_set_value'] = Blockly.Blocks.sensorkit_digital_set_value('AUTOFLASH');
Blockly.Blocks['sensorkit_relay_set_value'] = Blockly.Blocks.sensorkit_digital_set_value('RELAY');
Blockly.Blocks['sensorkit_laser_set_value'] = Blockly.Blocks.sensorkit_digital_set_value('LASER');

Blockly.Blocks['sensorkit_button_get_value'] = Blockly.Blocks.sensorkit_digital_get_value('BUTTON');
Blockly.Blocks['sensorkit_tiltswitch_get_value'] = Blockly.Blocks.sensorkit_digital_get_value('TILTSWITCH');
Blockly.Blocks['sensorkit_reedswitch_get_value'] = Blockly.Blocks.sensorkit_digital_get_value('REEDSWITCH');
Blockly.Blocks['sensorkit_photointerrupter_get_value'] = Blockly.Blocks.sensorkit_digital_get_value('PHOTOINTERRUPTER');
Blockly.Blocks['sensorkit_touchswitch_get_value'] = Blockly.Blocks.sensorkit_digital_get_value('TOUCHSWITCH');
Blockly.Blocks['sensorkit_tracking_get_value'] = Blockly.Blocks.sensorkit_digital_get_value('TRACKING');
Blockly.Blocks['sensorkit_hallswitch_get_value'] = Blockly.Blocks.sensorkit_digital_get_value('HALLSWITCH');
Blockly.Blocks['sensorkit_irobstacle_get_value'] = Blockly.Blocks.sensorkit_digital_get_value('IROBSTACLE');

Blockly.Blocks['sensorkit_potentiometer_get_value'] = Blockly.Blocks.sensorkit_analog_get_value('POTENTIOMETER');
Blockly.Blocks['sensorkit_sound_get_value'] = Blockly.Blocks.sensorkit_analog_get_value('SOUND');
Blockly.Blocks['sensorkit_raindetection_get_value'] = Blockly.Blocks.sensorkit_analog_get_value('RAINDETECTION');
Blockly.Blocks['sensorkit_temperature_get_value'] = Blockly.Blocks.sensorkit_analog_get_value('TEMPERATURE');
Blockly.Blocks['sensorkit_photoresistor_get_value'] = Blockly.Blocks.sensorkit_analog_get_value('PHOTORESISTOR');
Blockly.Blocks['sensorkit_ds18b20_get_value'] = Blockly.Blocks.sensorkit_analog_get_value('DS18B20');
Blockly.Blocks['sensorkit_thermistor_get_value'] = Blockly.Blocks.sensorkit_analog_get_value('THERMISTOR');

Blockly.Blocks['sensorkit_dual_color_led_set_value'] = {
    init: function init() {
        this.appendValueInput("R").setCheck("Digital_Pin").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.SENSORKIT_DUAL_COLOR_SET_VALUE_TITLE1);
        this.appendValueInput("G").setCheck("Digital_Pin").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.SENSORKIT_DUAL_COLOR_SET_VALUE_TITLE2);
        this.appendValueInput("value").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.SENSORKIT_DUAL_COLOR_SET_VALUE_TITLE3).appendField(new Blockly.FieldDropdown(Blockly.Constants.SensorKit.PIN_DOUBLE_LED), "dounle_led").setCheck(null).appendField(Blockly.Msg.SENSORKIT_DUAL_COLOR_SET_VALUE_TITLE4);
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(Blockly.Constants.SensorKit.RGB);
        this.setTooltip(Blockly.Msg.SENSORKIT_DUAL_COLOR_SET_VALUE_TOOLTIP);
    }
};

Blockly.Blocks['sensorkit_ultrasonic_get_value'] = {
    init: function init() {
        this.appendDummyInput().appendField(Blockly.Msg.SENSORKIT_ULTRASONIC_GET_VALUE_TITLE1);
        this.appendValueInput("Trig").setCheck("Digital_Pin").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.SENSORKIT_ULTRASONIC_GET_VALUE_TITLE2);
        this.appendValueInput("Echo").setCheck("Digital_Pin").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.SENSORKIT_ULTRASONIC_GET_VALUE_TITLE3);
        this.setInputsInline(false);
        this.setOutput(true, null);
        this.setColour(Blockly.Constants.SensorKit.RGB);
        this.setTooltip(Blockly.Msg.SENSORKIT_ULTRASONIC_VALUE_TOOLTIP);
        this.setHelpUrl('');
    }
};

Blockly.Blocks['sensorkit_dual_color_led_set_value'] = {
    init: function init() {
        this.appendValueInput("R").setCheck("Digital_Pin").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.SENSORKIT_DUAL_COLOR_SET_VALUE_TITLE1);
        this.appendValueInput("G").setCheck("Digital_Pin").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.SENSORKIT_DUAL_COLOR_SET_VALUE_TITLE2);
        this.appendValueInput("value").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.SENSORKIT_DUAL_COLOR_SET_VALUE_TITLE3).appendField(new Blockly.FieldDropdown(Blockly.Constants.SensorKit.PIN_DOUBLE_LED), "dounle_led").setCheck(null).appendField(Blockly.Msg.SENSORKIT_DUAL_COLOR_SET_VALUE_TITLE4);
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(Blockly.Constants.SensorKit.RGB);
        this.setTooltip(Blockly.Msg.SENSORKIT_DUAL_COLOR_SET_VALUE_TOOLTIP);
    }
};

Blockly.Blocks['sensorkit_flame_get_value'] = {
    init: function init() {
        this.appendDummyInput().appendField(Blockly.Msg.SENSORKIT_FLAME_GET_VALUE_TITLE1);
        this.appendValueInput("pin_DO").setCheck("Digital_Pin").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.SENSORKIT_FLAME_GET_VALUE_TITLE2);
        this.appendValueInput("pin_AO").setCheck("Analog_Pin").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.SENSORKIT_FLAME_GET_VALUE_TITLE3);
        this.setInputsInline(false);
        this.setOutput(true, null);
        this.setColour(Blockly.Constants.SensorKit.RGB);
        this.setTooltip(Blockly.Msg.SENSORKIT_FLAME_VALUE_TOOLTIP);
        this.setHelpUrl('');
    }
};

Blockly.Blocks['sensorkit_gassensor_get_value'] = {
    init: function init() {
        this.appendDummyInput().appendField(Blockly.Msg.SENSORKIT_GASSENSOR_GET_VALUE_TITLE1);
        this.appendValueInput("DO").setCheck("Digital_Pin").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.SENSORKIT_GASSENSOR_GET_VALUE_TITLE2);
        this.appendValueInput("AO").setCheck("Analog_Pin").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.SENSORKIT_GASSENSOR_GET_VALUE_TITLE3);
        this.setInputsInline(false);
        this.setOutput(true, null);
        this.setColour(Blockly.Constants.SensorKit.RGB);
        this.setTooltip(Blockly.Msg.SENSORKIT_GASSENSOR_VALUE_TOOLTIP);
        this.setHelpUrl('');
    }
};

Blockly.Blocks['sensorkit_analoghallswitch_get_value'] = {
    init: function init() {
        this.appendValueInput("DO").setCheck("Digital_Pin").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.SENSORKIT_ANALOGHALLSWITCH_GET_VALUE_TITLE1);
        this.appendValueInput("AO").setCheck("Analog_Pin").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.SENSORKIT_ANALOGHALLSWITCH_GET_VALUE_TITLE2).appendField(new Blockly.FieldDropdown(Blockly.Constants.SensorKit.AD), "ad").appendField(Blockly.Msg.SENSORKIT_ANALOGHALLSWITCH_GET_VALUE_TITLE3);
        this.setInputsInline(false);
        this.setOutput(true, null);
        this.setColour(Blockly.Constants.SensorKit.RGB);
        this.setTooltip(Blockly.Msg.SENSORKIT_ANALOGHALLSWITCH_VALUE_TOOLTIP);
        this.setHelpUrl('');
    }
};

Blockly.Blocks['sensorkit_analogtemperature_get_value'] = {
    init: function init() {
        this.appendDummyInput().appendField(Blockly.Msg.SENSORKIT_ANALOGTEMPERATURE_GET_VALUE_TITLE1);
        this.appendValueInput("DO")
            .setCheck("Digital_Pin")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.SENSORKIT_ANALOGTEMPERATURE_GET_VALUE_TITLE2);
        this.appendValueInput("AO").setCheck("Analog_Pin").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.SENSORKIT_ANALOGTEMPERATURE_GET_VALUE_TITLE3);
        this.setInputsInline(false);
        this.setOutput(true, null);
        this.setColour(Blockly.Constants.SensorKit.RGB);
        this.setTooltip(Blockly.Msg.SENSORKIT_ANALOGTEMPERATURE_VALUE_TOOLTIP);
        this.setHelpUrl('');
    }
};

Blockly.Blocks['sensorkit_dht11_get_value'] = {
    init: function init() {
        this.appendValueInput("SIG").setCheck("Digital_Pin").appendField(Blockly.Msg.SENSORKIT_DHT11_GET_VALUE_TITLE1);
        this.appendDummyInput().appendField(Blockly.Msg.SENSORKIT_DHT11_GET_VALUE_TITLE2);
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour(Blockly.Constants.SensorKit.RGB);
        this.setTooltip(Blockly.Msg.SENSORKIT_DHT11_GET_VALUE_TOOLTIP);
        this.setHelpUrl('');
    }
};