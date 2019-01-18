'use strict';

var SensorKit = {
    'name': 'Sensor Kit',
    'id': 'sensorkit',
    'modules': {
        "led-module": {
            'id': 0,
            'name': 'LED Module',
            'blocks': [
                '<block type="sensorkit_led_module_set_value"> ' +
                '  <value name="value"> ' +
                '    <shadow type="math_number"> ' +
                '    </shadow> ' +
                '  </value> ' +
                '</block> '
            ],
            'img': 'led-module.png',
            'simulator': {
                "type": "digitalOutput",
                "onHigh": "dual-color-led_on.png",
                "onLow": "dual-color-led_off.png"
            },
            'pins': {
                "SIG": {
                    'id': 0,
                    'name': 'SIG',
                    'x': 0.3,
                    'y': 1,
                    'isSource': true,
                    'property': ['din'],
                    'type': 'digital',
                },
                "VCC": {
                    'id': 1,
                    'name': 'VCC',
                    'x': 0.5,
                    'y': 1,
                    'isSource': true,
                    'property': ['3V3'],
                    'type': 'power',
                },
                "GND": {
                    'id': 2,
                    'name': 'GND',
                    'x': 0.7,
                    'y': 1,
                    'isSource': true,
                    'property': ['GND'],
                    'type': 'ground',
                }
            }
        },
        "rgb-led": {
            'id': 1,
            'name': 'RGB LED',
            'blocks': ['<block type="sensorkit_rgb_set_value"> ' +
                '<value name="color"> ' +
                '<shadow type="colour_picker"> ' +
                '   <field name="COLOUR">#ff0000</field> ' +
                '</shadow> ' +
                '</value> ' +
                '</block>'
            ],
            'img': 'rgb-led.png',
            "simulator": {
                "type": "ModuleRGB",
                "R": 'R',
                "G": "G",
                "B": "B",
                "initValue": 0
            },
            'pins': {
                'VCC': {
                    'id': 0,
                    'name': 'VCC',
                    'x': 0.2,
                    'y': 1,
                    'isSource': true,
                    'property': ['3V3'],
                    'type': 'power',
                },
                'R': {
                    'id': 1,
                    'name': 'R',
                    'x': 0.4,
                    'y': 1,
                    'isSource': true,
                    'property': ['pwm'],
                    'type': 'pwm',
                },
                'G': {
                    'id': 2,
                    'name': 'G',
                    'x': 0.6,
                    'y': 1,
                    'isSource': true,
                    'property': ['pwm'],
                    'type': 'pwm',
                },
                'B': {
                    'id': 3,
                    'name': 'B',
                    'x': 0.8,
                    'y': 1,
                    'isSource': true,
                    'property': ['pwm'],
                    'type': 'pwm',
                }
            }
        },
        "button": {
            'id': 5,
            'name': 'Button',
            'blocks': ['<block type="sensorkit_button_get_value"></block> '],
            'img': 'button.png',
            'simulator': {
                "type": "digitalInput",
                "mode": 'toggle',
                "initValue": 0,
                "pin": "SIG",

            },
            'pins': {
                'SIG': {
                    'id': 0,
                    'name': 'SIG',
                    'x': 0.3,
                    'y': 1,
                    'isSource': true,
                    'property': ['din'],
                    'type': 'digital'
                },
                'VCC': {
                    'id': 1,
                    'name': 'VCC',
                    'x': 0.5,
                    'y': 1,
                    'isSource': true,
                    'property': ['3V3'],
                    'type': 'power'
                },
                'GND': {
                    'id': 2,
                    'name': 'GND',
                    'x': 0.7,
                    'y': 1,
                    'isSource': true,
                    'property': ['GND'],
                    'type': 'ground'
                }
            }
        },
        "tilt-switch": {
            'id': 6,
            'name': 'Tilt Switch',
            'blocks': ['<block type="sensorkit_tiltswitch_get_value"> </block> '],
            'img': 'tilt-switch.png',
            'simulator': {
                "type": "digitalInput",
                "pin": 'SIG',
                "mode": 'click',
                "initValue": 0
            },
            'pins': {
                'SIG': {
                    'id': 0,
                    'name': 'SIG',
                    'x': 0.3,
                    'y': 1,
                    'isSource': true,
                    'property': ['din'],
                    'type': 'digital',
                },
                'VCC': {
                    'id': 1,
                    'name': 'VCC',
                    'x': 0.5,
                    'y': 1,
                    'isSource': true,
                    'property': ['3V3'],
                    'type': 'power',

                },
                'GND': {
                    'id': 2,
                    'name': 'GND',
                    'x': 0.7,
                    'y': 1,
                    'isSource': true,
                    'property': ['GND'],
                    'type': 'ground',
                }
            }
        },
        "vibration-switch": {
            'id': 7,
            'name': 'Vibration Switch',
            'blocks': ['<block type="sensorkit_vibrationswitch_get_value"> </block> '],
            'img': 'vibration-switch.png',
            'pins': [{
                'id': 0,
                'name': 'SIG',
                'x': 0.3,
                'y': 1,
                'isSource': true,
                'property': ['din'],
                'type': 'digital'
            }, {
                'id': 1,
                'name': 'VCC',
                'x': 0.5,
                'y': 1,
                'isSource': true,
                'property': ['3V3'],
                'type': 'power'
            }, {
                'id': 2,
                'name': 'GND',
                'x': 0.7,
                'y': 1,
                'isSource': true,
                'property': ['GND'],
                'type': 'ground'
            }]
        },
        "buzzer": {
            'id': 10,
            'name': 'Buzzer',
            'blocks': [
                '<block type="sensorkit_buzzer_set_value">' +
                '<value name="note"> ' +
                '<shadow type="music_notes"> ' +
                '</shadow> ' +
                '</value> ' +
                '<value name="beat"> ' +
                '<shadow type="music_beat"> ' +
                '</shadow> ' +
                '</value> ' +
                '</block>'
            ],
            'img': 'buzzer.png',
            'pins': [{
                'id': 0,
                'name': 'SIG',
                'x': 0.3,
                'y': 1,
                'isSource': true,
                'property': ['pwm'],
                'type': 'pwm'
            }, {
                'id': 1,
                'name': 'VCC',
                'x': 0.5,
                'y': 1,
                'isSource': true,
                'property': ['3V3'],
                'type': 'power'
            }, {
                'id': 2,
                'name': 'GND',
                'x': 0.7,
                'y': 1,
                'isSource': true,
                'property': ['GND'],
                'type': 'ground'
            }]
        },
        "joystick": {
            'id': 14,
            'name': 'Joystick',
            'blocks': ['<block type="sensorkit_joystick_get_status"> </block>', '<block type="sensorkit_joystick_get_value"> </block>'],
            'img': 'joystick.png',
            'pins': [{
                    'id': 0,
                    'name': 'Y',
                    'x': 0.1,
                    'y': 1,
                    'isSource': true,
                    'property': ['ain'],
                    'type': 'analog',
                }, {
                    'id': 1,
                    'name': 'X',
                    'x': 0.3,
                    'y': 1,
                    'isSource': true,
                    'property': ['ain'],
                    'type': 'analog',
                },

                {
                    'id': 2,
                    'name': 'Btn',
                    'x': 0.5,
                    'y': 1,
                    'isSource': true,
                    'property': ['din'],
                    'type': 'digital',
                }, {
                    'id': 3,
                    'name': 'VCC',
                    'x': 0.7,
                    'y': 1,
                    'isSource': true,
                    'property': ['3V3'],
                    'type': 'power',
                },
                {
                    'id': 4,
                    'name': 'GND',
                    'x': 0.9,
                    'y': 1,
                    'isSource': true,
                    'property': ['GND'],
                    'type': 'ground',
                }
            ]
        },
        "potentiometer": {
            'id': 15,
            'name': 'Potentiometer',
            'blocks': ['<block type="sensorkit_potentiometer_get_value"> </block> '],
            'img': 'potentiometer.png',
            'simulator': {
                "type": "ValueInput",
                "pin": "SIG",
                "mode": "slider",
                "initValue": 0
            },
            'pins': [{
                'id': 0,
                'name': 'SIG',
                'x': 0.3,
                'y': 1,
                'isSource': true,
                'property': ['ain'],
                'type': 'analog'
            }, {
                'id': 1,
                'name': 'VCC',
                'x': 0.5,
                'y': 1,
                'isSource': true,
                'property': ['3V3'],
                'type': 'power'
            }, {
                'id': 2,
                'name': 'GND',
                'x': 0.7,
                'y': 1,
                'isSource': true,
                'property': ['GND'],
                'type': 'ground'
            }]
        },
        "sound-sensor": {
            'id': 20,
            'name': 'Sound Sensor',
            'blocks': ['<block type="sensorkit_soundsensor_get_value"> </block> '],
            'img': 'sound-sensor.png',
            'simulator': {
                "type": "ValueInput",
                "pin": "SIG",
                "mode": "slider",
                "initValue": 0
            },
            'pins': [{
                'id': 0,
                'name': 'SIG',
                'x': 0.3,
                'y': 1,
                'isSource': true,
                'property': ['ain'],
                'type': 'analog'
            }, {
                'id': 1,
                'name': 'VCC',
                'x': 0.5,
                'y': 1,
                'isSource': true,
                'property': ['3V3'],
                'type': 'power'
            }, {
                'id': 2,
                'name': 'GND',
                'x': 0.7,
                'y': 1,
                'isSource': true,
                'property': ['GND'],
                'type': 'ground'
            }]
        },
        "photoresistor": {
            'id': 21,
            'name': 'Photoresistor',
            'blocks': ['<block type="sensorkit_photoresistor_get_value"></block> '],
            'img': 'photoresistor.png',
            'simulator': {
                "type": "ValueInput",
                "pin": "SIG",
                "mode": "slider",
                "initValue": 0
            },
            'pins': {
                'SIG': {
                    'id': 0,
                    'name': 'SIG',
                    'x': 0.3,
                    'y': 1,
                    'isSource': true,
                    'property': ['ain'],
                    'type': 'analog',
                },
                'VCC': {
                    'id': 1,
                    'name': 'VCC',
                    'x': 0.5,
                    'y': 1,
                    'isSource': true,
                    'property': ['3V3'],
                    'type': 'power',

                },
                'GND': {
                    'id': 2,
                    'name': 'GND',
                    'x': 0.7,
                    'y': 1,
                    'isSource': true,
                    'property': ['GND'],
                    'type': 'ground',
                }
            }
        },
        "touch-switch": {
            'id': 25,
            'name': 'Touch Switch',
            'blocks': ['<block type="sensorkit_touchswitch_get_value"></block> '],
            'img': 'touch-switch.png',
            'simulator': {
                "type": "digitalInput",
                "pin": 'SIG',
                "mode": 'click',
                "initValue": 0
            },
            'pins': [{
                'id': 0,
                'name': 'SIG',
                'x': 0.3,
                'y': 1,
                'isSource': true,
                'property': ['din'],
                'type': 'digital'
            }, {
                'id': 1,
                'name': 'VCC',
                'x': 0.5,
                'y': 1,
                'isSource': true,
                'property': ['3V3'],
                'type': 'power'
            }, {
                'id': 2,
                'name': 'GND',
                'x': 0.7,
                'y': 1,
                'isSource': true,
                'property': ['GND'],
                'type': 'ground'
            }]
        },
        "ultrasonic-ranging-module": {
            'id': 26,
            'name': 'Ultrasonic Ranging Module',
            'blocks': ['<block type="sensorkit_ultrasonic_get_value"></block> '],
            'img': 'ultrasonic-ranging-module.png',
            'pins': [{
                'id': 0,
                'name': 'Trig',
                'x': 0.2,
                'y': 1,
                'isSource': true,
                'property': ['din'],
                'type': 'digital'
            }, {
                'id': 1,
                'name': 'Echo',
                'x': 0.4,
                'y': 1,
                'isSource': true,
                'property': ['din'],
                'type': 'digital'
            }, {
                'id': 2,
                'name': 'VCC',
                'x': 0.6,
                'y': 1,
                'isSource': true,
                'property': ['3V3'],
                'type': 'power'
            }, {
                'id': 3,
                'name': 'GND',
                'x': 0.8,
                'y': 1,
                'isSource': true,
                'property': ['GND'],
                'type': 'ground'
            }]
        },
        "ds18b20": {
            'id': 27,
            'name': 'DS18B20',
            'blocks': ['<block type="sensorkit_ds18b20_get_value"></block> '],
            'img': 'ds18b20.png',
            'pins': [{
                'id': 0,
                'name': 'SIG',
                'x': 0.3,
                'y': 1,
                'isSource': true,
                'property': ['1wire'],
                'type': 'digital'
            }, {
                'id': 1,
                'name': 'VCC',
                'x': 0.5,
                'y': 1,
                'isSource': true,
                'property': ['5V'],
                'type': 'power'
            }, {
                'id': 2,
                'name': 'GND',
                'x': 0.7,
                'y': 1,
                'isSource': true,
                'property': ['GND'],
                'type': 'ground'
            }]
        },
        "servo": {
            'id': 33,
            'name': 'Servo',
            'blocks': [
                '<block type="sensorkit_servo_set_angle"> ' +
                '<value name="angle"> ' +
                '   <shadow type="math_number"> ' +
                '   </shadow> ' +
                '</value> ' +
                '</block> '
            ],
            'img': 'servo-sensor.png',
            'pins': [{
                'id': 0,
                'name': 'SIG',
                'x': 0.3,
                'y': 1,
                'isSource': true,
                'property': ['pwm'],
                'type': 'pwm'
            }, {
                'id': 1,
                'name': 'VCC',
                'x': 0.5,
                'y': 1,
                'isSource': true,
                'property': ['5V'],
                'type': 'power'
            }, {
                'id': 2,
                'name': 'GND',
                'x': 0.7,
                'y': 1,
                'isSource': true,
                'property': ['GND'],
                'type': 'ground'
            }]
        },
        "moisture-sensor": {
            'id': 34,
            'name': 'Moisture Sensor',
            'blocks': ['<block type="sensorkit_moisture_sensor_get_value"> </block>'],
            'img': 'moisture-sensor.png',
            'pins': [{
                'id': 0,
                'name': 'SIG',
                'x': 0.3,
                'y': 1,
                'isSource': true,
                'property': ['din'],
                'type': 'analog'
            }, {
                'id': 1,
                'name': 'VCC',
                'x': 0.5,
                'y': 1,
                'isSource': true,
                'property': ['3V3'],
                'type': 'power'
            }, {
                'id': 2,
                'name': 'GND',
                'x': 0.7,
                'y': 1,
                'isSource': true,
                'property': ['GND'],
                'type': 'ground'
            }]
        },
        "adxl345": {
            'id': 34,
            'name': 'ADXL345',
            'blocks': ['<block type="sensorkit_adxl345_get_value"> </block> '],
            'img': 'adxl345.png',
            'pins': [{
                'id': 0,
                'name': 'GND',
                'x': 0.15,
                'y': 1,
                'isSource': true,
                'property': ['GND'],
                'type': 'ground'
            }, {
                'id': 1,
                'name': '3V3',
                'x': 0.3,
                'y': 1,
                'isSource': true,
                'property': ['3V3'],
                'type': 'power'
            }, {
                'id': 2,
                'name': 'SCL',
                'x': 0.45,
                'y': 1,
                'isSource': true,
                'property': ['SCL'],
                'type': 'com'
            }, {
                'id': 3,
                'name': 'SDA',
                'x': 0.6,
                'y': 1,
                'isSource': true,
                'property': ['SDA'],
                'type': 'com'
            }, {
                'id': 4,
                'name': 'CS',
                'x': 0.75,
                'y': 1,
                'isSource': true,
                'property': ['3V3'],
                'type': 'com'
            }, {
                'id': 5,
                'name': 'SDO',
                'x': 0.9,
                'y': 1,
                'isSource': true,
                'property': ['GND'],
                'type': 'ground'
            }]
        },
    }
};