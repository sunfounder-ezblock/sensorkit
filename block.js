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

Blockly.Constants.SensorKit.PIN_SWITCH = [
    ["on", "1"],
    ["off", "0"]
];

Blockly.Constants.SensorKit.PIN_DOUBLE_LED = [
    ["red", "Red"],
    ["green", "Green"]
];

Blockly.Constants.SensorKit.AD = [
    ["analog", "AO"],
    ["digital", "DO"]
];


Blockly.Constants.SensorKit.DIGITAL_PINS = [
    ["D0", '"D0"'],
    ["D1", '"D1"'],
    ["D2", '"D2"'],
    ["D3", '"D3"'],
    ["D4", '"D4"'],
    ["D5", '"D5"'],
    ["D6", '"D6"'],
    ["D7", '"D7"'],
    ["D8", '"D8"'],
    ["D9", '"D9"'],
];

Blockly.Constants.SensorKit.ANALOG_PINS = [
    ["A0", '"A0"'],
    ["A1", '"A1"'],
    ["A2", '"A2"'],
    ["A3", '"A3"'],
    ["A4", '"A4"'],
    ["A5", '"A5"'],
    ["A6", '"A6"'],
    ["A7", '"A7"'],
];

Blockly.Constants.SensorKit.PWM_PINS = [
    ["P0", '"P0"'],
    ["P1", '"P1"'],
    ["P2", '"P2"'],
    ["P3", '"P3"'],
    ["P4", '"P4"'],
    ["P5", '"P5"'],
    ["P6", '"P6"'],
    ["P7", '"P7"'],
];


Blockly.Constants.SensorKit.Note = [
    ["Low C", "LC"],
    ["Low C#", "LC#"],
    ["Low D", "LD"],
    ["Low D#", "LD#"],
    ["Low E", "LE"],
    ["Low E#", "LE#"],
    ["Low F", "LF"],
    ["Low G", "LG"],
    ["Low G#", "LG#"],
    ["Low A", "LA"],
    ["Low A#", "LA#"],
    ["Low B", "LB"],

    ["Middle C", "MC"],
    ["Middle C#", "MC#"],
    ["Middle D", "MD"],
    ["Middle D#", "MD#"],
    ["Middle E", "ME"],
    ["Middle E#", "ME#"],
    ["Middle F", "MF"],
    ["Middle G", "MG"],
    ["Middle G#", "MG#"],
    ["Middle A", "MA"],
    ["Middle A#", "MA#"],
    ["Middle B", "MB"],

    ["High C", "HC"],
    ["High C#", "HC#"],
    ["High D", "HD"],
    ["High D#", "HD#"],
    ["High E", "HE"],
    ["High E#", "HE#"],
    ["High F", "HF"],
    ["High G", "HG"],
    ["High G#", "HG#"],
    ["High A", "HA"],
    ["High A#", "HA#"],
    ["High B", "HB"],
]

Blockly.Blocks['sensorkit_digital_pin'] = {
    init: function() {
        this.appendDummyInput()
            // .appendField(Blockly.Msg.RASPBERRYPI_DIGITAL_PIN_TITLE)
            .appendField(new Blockly.FieldDropdown(Blockly.Constants.SensorKit.DIGITAL_PINS), "pin");
        this.setInputsInline(true);
        this.setOutput(true, "Digital_Pin");
        this.setColour(Blockly.Constants.SensorKit.RGB);
        this.setTooltip(Blockly.Msg.RASPBERRYPI_DIGITAL_PIN_TOOLTIP);
        this.setHelpUrl('');
    }
};

Blockly.Blocks['sensorkit_analog_pin'] = {
    init: function() {
        this.appendDummyInput()
            // .appendField(Blockly.Msg.RASPBERRYPI_ANALOG_PIN_TITLE)
            .appendField(new Blockly.FieldDropdown(Blockly.Constants.SensorKit.ANALOG_PINS), "pin");
        this.setInputsInline(true);
        this.setOutput(true, "Analog_Pin");
        this.setColour(Blockly.Constants.SensorKit.RGB);
        this.setTooltip(Blockly.Msg.RASPBERRYPI_ANALOG_PIN_TOOLTIP);
        this.setHelpUrl('');
    }
};

Blockly.Blocks['sensorkit_pwm_pin'] = {
    init: function() {
        this.appendDummyInput()
            // .appendField(Blockly.Msg.RASPBERRYPI_PWM_PIN_TITLE)
            .appendField(new Blockly.FieldDropdown(Blockly.Constants.SensorKit.PWM_PINS), "pin");
        this.setInputsInline(true);
        this.setOutput(true, "PWM_Pin");
        this.setColour(Blockly.Constants.SensorKit.RGB);
        this.setTooltip(Blockly.Msg.RASPBERRYPI_PWM_PIN_TOOLTIP);
        this.setHelpUrl('');
    }
};


Blockly.Blocks['sensorkit_note'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown(Blockly.Constants.SensorKit.Note), "NAME");
        this.setOutput(true, "sensorkit_Note");
        this.setColour(Blockly.Constants.Jelly.RGB);
        this.setTooltip(Blockly.Msg['JELLY_NOTE_TOOLTIP']);
        this.setHelpUrl('');
    }
};




Blockly.Blocks.sensorkit_set_value = function(_type, module) {
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

Blockly.Blocks.sensorkit_get_value = function(_type, module) {
    return {
        init: function init() {
            this.appendValueInput("SIG").setCheck(_type + '_Pin').appendField(Blockly.Msg['SENSORKIT_' + module + '_GET_VALUE_TITLE1']);
            this.appendDummyInput().appendField(Blockly.Msg['SENSORKIT_' + module + '_GET_VALUE_TITLE2']);
            this.setInputsInline(true);
            this.setOutput(true, null);
            this.setColour(Blockly.Constants.SensorKit.RGB);
            this.setTooltip(Blockly.Msg['SENSORKIT_' + module + '_GET_VALUE_TOOLTIP']);
            this.setHelpUrl('');
        }
    };
};

Blockly.Blocks.sensorkit_digital_set_value = function(module) {
    return Blockly.Blocks.sensorkit_set_value('Digital', module);
};

Blockly.Blocks.sensorkit_pwm_set_value = function(module) {
    return Blockly.Blocks.sensorkit_set_value('PWM', module);
};

Blockly.Blocks.sensorkit_digital_get_value = function(module) {
    return Blockly.Blocks.sensorkit_get_value('Digital', module);
};

Blockly.Blocks.sensorkit_analog_get_value = function(module) {
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
    init: function() {
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

// Blockly.Blocks['sensorkit_active_buzzer_set_value'] = Blockly.Blocks.sensorkit_digital_set_value('ACTIVE_BUZZER');
// Blockly.Blocks['sensorkit_passive_buzzer_set_value'] = Blockly.Blocks.sensorkit_digital_set_value('PASSIVE_BUZZER');
Blockly.Blocks['sensorkit_autoflash_set_value'] = Blockly.Blocks.sensorkit_digital_set_value('AUTOFLASH');
Blockly.Blocks['sensorkit_relay_set_value'] = Blockly.Blocks.sensorkit_digital_set_value('RELAY');
Blockly.Blocks['sensorkit_laser_set_value'] = Blockly.Blocks.sensorkit_digital_set_value('LASER');

Blockly.Blocks['sensorkit_button_get_value'] = Blockly.Blocks.sensorkit_digital_get_value('BUTTON');
Blockly.Blocks['sensorkit_tiltswitch_get_value'] = Blockly.Blocks.sensorkit_digital_get_value('TILTSWITCH');
Blockly.Blocks['sensorkit_vibrationswitch_get_value'] = Blockly.Blocks.sensorkit_digital_get_value('VIBRATIONSWITCH');
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
// Blockly.Blocks['sensorkit_ds18b20_get_value'] = Blockly.Blocks.sensorkit_analog_get_value('DS18B20');
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






// sensor 2


Blockly.Blocks['sensorkit_led_module_set_value'] = Blockly.Blocks.sensorkit_digital_set_value('LED_MODULE');


// Blockly.Blocks['sensorkit_passive_buzzer_set_value'] = Blockly.Blocks.sensorkit_digital_set_value('PASSIVE_BUZZER');


Blockly.Blocks['sensorkit_servo_set_value'] = {
    init: function init() {
        this.appendValueInput("pin")
            .setCheck()
            .appendField(Blockly.Msg.SENSORKIT_SERVO_SET_VALUE_TITLE1);
        this.appendValueInput("angle")
            .setCheck(null)
            .appendField(Blockly.Msg.SENSORKIT_SERVO_SET_VALUE_TITLE2);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(Blockly.Constants.SensorKit.RGB);
        this.setTooltip(Blockly.Msg.SENSORKIT_SERVO_SET_VALUE_TOOLTIP);
        this.setHelpUrl('');
    }
};



Blockly.Blocks['sensorkit_moisture_sensor_get_value'] = {
    init: function init() {
        this.appendValueInput("pin")
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


Blockly.Blocks['sensorkit_joy_stick_get_value'] = {
    init: function init() {
        this.appendValueInput("pin")
            .setCheck("Analog_Pin")
            .appendField(Blockly.Msg.SENSORKIT_JOY_STICK_GET_VALUE_TITLE1);
        this.appendDummyInput()
            .appendField(Blockly.Msg.SENSORKIT_JOY_STICK_GET_VALUE_TITLE2);
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour(Blockly.Constants.SensorKit.RGB);
        this.setTooltip(Blockly.Msg.SENSORKIT_JOY_STICK_GET_VALUE_TOOLTIP);
        this.setHelpUrl('');
    }
};


Blockly.Blocks['sensorkit_joy_stick_get_status'] = {
    init: function init() {
        this.appendValueInput("X")
            .setAlign(Blockly.ALIGN_RIGHT)
            .setCheck("Analog_Pin")
            .appendField(Blockly.Msg.SENSORKIT_JOY_STICK_GET_STATUS_TITLE1);
        this.appendValueInput("Y")
            .setAlign(Blockly.ALIGN_RIGHT)
            .setCheck("Analog_Pin")
            .appendField(Blockly.Msg.SENSORKIT_JOY_STICK_GET_STATUS_TITLE2);
        this.appendValueInput("BT")
            .setAlign(Blockly.ALIGN_RIGHT)
            .setCheck("Analog_Pin")
            .appendField(Blockly.Msg.SENSORKIT_JOY_STICK_GET_STATUS_TITLE3);
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour(Blockly.Constants.SensorKit.RGB);
        this.setTooltip(Blockly.Msg.SENSORKIT_JOY_STICK_GET_STATUS_TOOLTIP);
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



Blockly.Blocks['sensorkit_adxl345_get_value'] = {
    init: function init() {
        this.appendValueInput("pin")
            .setCheck("Digital_Pin")
            .appendField(Blockly.Msg.SENSORKIT_ADXL345_GET_VALUE_TITLE1);
        this.appendDummyInput()
            .appendField(Blockly.Msg.SENSORKIT_ADXL345_GET_VALUE_TITLE2);
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour(Blockly.Constants.SensorKit.RGB);
        this.setTooltip(Blockly.Msg.SENSORKIT_ADXL345_GET_VALUE_TOOLTIP);
        this.setHelpUrl('');
    }
};



Blockly.Blocks['sensorkit_passive_buzzer_set_value'] = {
    init: function init() {
        this.appendValueInput("pin")
            .setAlign(Blockly.ALIGN_RIGHT)
            .setCheck("PWM_Pin")
            .appendField(Blockly.Msg.SENSORKIT_PASSIVE_BUZZER_SET_STATUS_TITLE1);
        this.appendValueInput("note")
            .setAlign(Blockly.ALIGN_RIGHT)
            .setCheck()
            .appendField(Blockly.Msg.SENSORKIT_PASSIVE_BUZZER_SET_STATUS_TITLE2);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(Blockly.Constants.SensorKit.RGB);
        this.setTooltip(Blockly.Msg.SENSORKIT_PASSIVE_BUZZER_SET_STATUS_TOOLTIP);
        this.setHelpUrl('');
    }
};



Blockly.Blocks['sensorkit_ds18b20_get_value'] = {
    init: function init() {
        this.appendDummyInput()
            .appendField(Blockly.Msg.SENSORKIT_DS18B20_GET_VALUE_TITLE1);
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour(Blockly.Constants.SensorKit.RGB);
        this.setTooltip(Blockly.Msg.SENSORKIT_DS18B20_GET_VALUE_TOOLTIP);
        this.setHelpUrl('');
    }
};