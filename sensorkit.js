'use strict';

var SensorKit = {
    'name': 'Sensor Kit',
    'id': 'sensorkit',
    'modules': {
        "dual-color-led": {
            'id': 0,
            'name': 'Dual Color LED',
            'blocks': ['<block type = "sensorkit_dual_color_led_set_value"><value name="value"><shadow type="sensorkit_pin_switch"></shadow></value></block >'],
            'img': 'dual-color-led.png',
            'simulator': {
                "type": "digitalOutput",
                "onHigh": "dual-color-led_on.png",
                "onLow": "dual-color-led_off.png"
            },
            'pins': {
                "R": {
                    'id': 0,
                    'name': 'R',
                    'x': 0.3,
                    'y': 1,
                    'isSource': true,
                    'property': ['din'],
                    'type': 'digital',
                },
                "G": {
                    'id': 1,
                    'name': 'G',
                    'x': 0.7,
                    'y': 1,
                    'isSource': true,
                    'property': ['din'],
                    'type': 'digital',
                },
                "GND": {
                    'id': 2,
                    'name': 'GND',
                    'x': 0.5,
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
            'blocks': ['<block type="sensorkit_rgb_set_value">' +
                '<value name="color">' +
                '<shadow type="colour_picker">' +
                '<field name="COLOUR">#ff0000</field>' +
                '</shadow>' +
                '</value>' +
                '</block>',],
            'img': 'dual-color-led.png',
            "simulator": {
                "type": "Communicate",
                "R": 'R',
                "G": "G",
                "B": "B",
                "initValue": 0
            },
            'pins': {
                'R': {
                    'id': 0,
                    'name': 'R',
                    'x': 0.2,
                    'y': 1,
                    'isSource': true,
                    'property': ['pwm'],
                    'type': 'pwm',
                },
                'G': {
                    'id': 1,
                    'name': 'G',
                    'x': 0.4,
                    'y': 1,
                    'isSource': true,
                    'property': ['pwm'],
                    'type': 'pwm',
                },
                'B': {
                    'id': 2,
                    'name': 'B',
                    'x': 0.6,
                    'y': 1,
                    'isSource': true,
                    'property': ['pwm'],
                    'type': 'pwm',
                },
                'GND': {
                    'id': 3,
                    'name': 'GND',
                    'x': 0.8,
                    'y': 1,
                    'isSource': true,
                    'property': ['GND'],
                    'type': 'ground',
                }
            }
        },
        // "auto-flash-led": {
        //     'id': 2,
        //     'name': 'Auto Flash LED',
        //     'blocks': ['<block type="sensorkit_autoflash_set_value">'+
        //             '<value name="pin">'+
        //             '</value>'+
        //             '<value name="value">'+
        //                 '<shadow type="sensorkit_pin_switch">'+
        //                     '<field name="NUM">0</field>'+
        //                 '</shadow>'+
        //             '</value>'+
        //         '</block>', ],
        //     'img': 'dual-color-led.png',
        //     'dataName': 'light_sensor',
        //     'pins': [{
        //         'id': 0,
        //         'name': 'VCC',
        //         'x': 0.4,
        //         'y': 1,
        //         'isSource': true,
        //         'property': ['5V'],
        //         'type': 'power'
        //     }, {
        //         'id': 1,
        //         'name': 'GND',
        //         'x': 0.6,
        //         'y': 1,
        //         'isSource': true,
        //         'property': ['GND'],
        //         'type': 'ground'
        //     }]
        // },
        // "relay-module": {
        //     'id': 3,
        //     'name': 'Relay Module',
        //     'blocks': ['<block type="sensorkit_relay_set_value">'+
        //             '<value name="SIG">'+
        //             '</value>'+
        //             '<value name="value">'+
        //                 '<shadow type="sensorkit_pin_switch">'+
        //                     '<field name="NUM">0</field>'+
        //                 '</shadow>'+
        //             '</value>'+
        //         '</block>', ],
        //     'img': 'relay-module.png',
        //     'pins': [{
        //         'id': 0,
        //         'name': 'VCC',
        //         'x': 0.3,
        //         'y': 1,
        //         'isSource': true,
        //         'property': ['3V3'],
        //         'type': 'power'
        //     }, {
        //         'id': 1,
        //         'name': 'SIG',
        //         'x': 0.5,
        //         'y': 1,
        //         'isSource': true,
        //         'property': ['din'],
        //         'type': 'digital'
        //     }, {
        //         'id': 2,
        //         'name': 'GND',
        //         'x': 0.7,
        //         'y': 1,
        //         'isSource': true,
        //         'property': ['GND'],
        //         'type': 'ground'
        //     }]
        // },
        // "laser-emitter": {
        //     'id': 4,
        //     'name': 'Laser Emitter',
        //     'blocks': ['<block type="sensorkit_laser_set_value">'+
        //             '<value name="SIG">'+
        //             '</value>'+
        //             '<value name="value">'+
        //                 '<shadow type="sensorkit_pin_switch">'+
        //                     '<field name="NUM">0</field>'+
        //                 '</shadow>'+
        //             '</value>'+
        //         '</block>', ],
        //     'img': 'laser-emitter.png',
        //     'pins': [{
        //         'id': 0,
        //         'name': 'VCC',
        //         'x': 0.4,
        //         'y': 1,
        //         'isSource': true,
        //         'property': ['5V'],
        //         'type': 'power'
        //     }, {
        //         'id': 1,
        //         'name': 'SIG',
        //         'x': 0.6,
        //         'y': 1,
        //         'isSource': true,
        //         'property': ['din'],
        //         'type': 'digital'
        //     }]
        // },
        "button": {
            'id': 5,
            'name': 'Button',
            'blocks': ['<block type="sensorkit_button_get_value">' +
                '</block>',],
            'img': 'button.png',
            'simulator': {
                "type": "digitalInput",
                "mode": 'toggle',
                "initValue": 0,
                "pin": "SIG",

            },
            'pins': {
                'VCC': {
                    'id': 0,
                    'name': 'VCC',
                    'x': 0.3,
                    'y': 1,
                    'isSource': true,
                    'property': ['5V'],
                    'type': 'power'
                },
                'SIG': {
                    'id': 1,
                    'name': 'SIG',
                    'x': 0.5,
                    'y': 1,
                    'isSource': true,
                    'property': ['din'],
                    'type': 'digital'
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
            'blocks': ['<block type="sensorkit_tiltswitch_get_value">' +
                '<value name="pin">' +
                '</value>' +
                '</block>',],
            'img': 'tilt-switch.png',
            'simulator': {
                "type": "digitalInput",
                "pin": 'SIG',
                "mode": 'click',
                "initValue": 0
            },
            'pins': {
                'VCC': {
                    'id': 0,
                    'name': 'VCC',
                    'x': 0.3,
                    'y': 1,
                    'isSource': true,
                    'property': ['5V'],
                    'type': 'power',

                },
                'SIG': {
                    'id': 1,
                    'name': 'SIG',
                    'x': 0.5,
                    'y': 1,
                    'isSource': true,
                    'property': ['din'],
                    'type': 'digital',
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
        // "vibration-switch": {
        //     'id': 7,
        //     'name': 'Vibration Switch',
        //     'img': 'vibration-switch.png',
        //     'pins': [{
        //         'id': 0,
        //         'name': 'VCC',
        //         'x': 0.3,
        //         'y': 1,
        //         'isSource': true,
        //         'property': ['3V3'],
        //         'type': 'power'
        //     }, {
        //         'id': 1,
        //         'name': 'SIG',
        //         'x': 0.5,
        //         'y': 1,
        //         'isSource': true,
        //         'property': ['din'],
        //         'type': 'digital'
        //     }, {
        //         'id': 2,
        //         'name': 'GND',
        //         'x': 0.7,
        //         'y': 1,
        //         'isSource': true,
        //         'property': ['GND'],
        //         'type': 'ground'
        //     }]
        // },
        // "iR-receiver": {
        //     'id': 8,
        //     'name': 'IR Receiver',
        //     'img': 'iR-receiver.png',
        //     'pins': [{
        //             'id': 0,
        //             'name': 'VCC',
        //             'x': 0.3,
        //             'y': 1,
        //             'isSource': true,
        //             'property': ['5V'],
        //             'type': 'power',
        //         },
        //         {
        //             'id': 1,
        //             'name': 'SIG',
        //             'x': 0.5,
        //             'y': 1,
        //             'isSource': true,
        //             'property': ['din'],
        //             'type': 'digital',
        //         },
        //         {
        //             'id': 2,
        //             'name': 'GND',
        //             'x': 0.7,
        //             'y': 1,
        //             'isSource': true,
        //             'property': ['GND'],
        //             'type': 'ground',
        //         }
        //     ]
        // },
        // "active-buzzer": {
        //     'id': 9,
        //     'name': 'Active Buzzer',
        //     'blocks': ['<block type="sensorkit_active_buzzer_set_value">'+
        //             '<value name="pin">'+
        //             '</value>'+
        //             '<value name="value">'+
        //                 '<shadow type="sensorkit_pin_switch">'+
        //                     '<field name="NUM">0</field>'+
        //                 '</shadow>'+
        //             '</value>'+
        //         '</block>', ],
        //     'img': 'active-buzzer.png',
        //     'pins': [{
        //         'id': 0,
        //         'name': 'VCC',
        //         'x': 0.3,
        //         'y': 1,
        //         'isSource': true,
        //         'property': ['5V'],
        //         'type': 'power'
        //     }, {
        //         'id': 1,
        //         'name': 'SIG',
        //         'x': 0.5,
        //         'y': 1,
        //         'isSource': true,
        //         'property': ['din'],
        //         'type': 'digital'
        //     }, {
        //         'id': 2,
        //         'name': 'GND',
        //         'x': 0.7,
        //         'y': 1,
        //         'isSource': true,
        //         'property': ['GND'],
        //         'type': 'ground'
        //     }]
        // },
        // "passive-buzzer": {
        //     'id': 10,
        //     'name': 'Passive Buzzer',
        //     'blocks': ['<block type="sensorkit_passive_buzzer_set_value"><value name="pin"></value><value name="value"><shadow type="sensorkit_pin_switch"><field name="NUM">0</field></shadow></value></block>'],
        //     'img': 'passive-buzzer.png',
        //     'pins': [{
        //         'id': 0,
        //         'name': 'VCC',
        //         'x': 0.3,
        //         'y': 1,
        //         'isSource': true,
        //         'property': ['5V'],
        //         'type': 'power'
        //     }, {
        //         'id': 1,
        //         'name': 'SIG',
        //         'x': 0.5,
        //         'y': 1,
        //         'isSource': true,
        //         'property': ['din'],
        //         'type': 'digital'
        //     }, {
        //         'id': 2,
        //         'name': 'GND',
        //         'x': 0.7,
        //         'y': 1,
        //         'isSource': true,
        //         'property': ['GND'],
        //         'type': 'ground'
        //     }]
        // },
        "reed-switch": {
            'id': 11,
            'name': 'Reed Switch',
            'blocks': ['<block type="sensorkit_reedswitch_get_value"><value name="pin"></value></block>'],
            'img': 'reed-switch.png',
            'simulator': {
                "type": "digitalInput",
                "pin": 'SIG',
                "mode": 'click'
            },
            'pins': [{
                'id': 0,
                'name': 'VCC',
                'x': 0.3,
                'y': 1,
                'isSource': true,
                'property': ['5V'],
                'type': 'power'
            }, {
                'id': 1,
                'name': 'SIG',
                'x': 0.5,
                'y': 1,
                'isSource': true,
                'property': ['din'],
                'type': 'digital'
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
        "photo-interrupter": {
            'id': 12,
            'name': 'Photo Interrupter',
            'blocks': ['<block type="sensorkit_photointerrupter_get_value"><value name="pin"></value></block>'],
            'img': 'photo-interrupter.png',
            'simulator': {
                "type": "digitalInput",
                "pin": 'SIG',
                "mode": 'click',
                "initValue": 0
            },
            'pins': [{
                'id': 0,
                'name': 'VCC',
                'x': 0.3,
                'y': 1,
                'isSource': true,
                'property': ['5V'],
                'type': 'power'
            }, {
                'id': 1,
                'name': 'SIG',
                'x': 0.5,
                'y': 1,
                'isSource': true,
                'property': ['din'],
                'type': 'digital'
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
        // "rain-detection-module": {
        //     'id': 13,
        //     'name': 'Rain Detection Module',
        //     'blocks': ['<block type="sensorkit_raindetection_get_value"><value name="pin"></value></block>'],
        //     'img': 'rain-detection-module.png',
        //     'pins': [{
        //         'id': 0,
        //         'name': 'VCC',
        //         'x': 0.2,
        //         'y': 1,
        //         'isSource': true,
        //         'property': ['3V3'],
        //         'type': 'power'
        //     }, {
        //         'id': 1,
        //         'name': 'A0',
        //         'x': 0.4,
        //         'y': 1,
        //         'isSource': true,
        //         'property': ['ain'],
        //         'type': 'analog'
        //     }, {
        //         'id': 2,
        //         'name': 'D0',
        //         'x': 0.6,
        //         'y': 1,
        //         'isSource': true,
        //         'property': ['din'],
        //         'type': 'digital'
        //     }, {
        //         'id': 3,
        //         'name': 'GND',
        //         'x': 0.8,
        //         'y': 1,
        //         'isSource': true,
        //         'property': ['GND'],
        //         'type': 'ground'
        //     }]
        // },
        // "joystick": {
        //     'id': 14,
        //     'name': 'Joystick',
        //     'blocks': ['<block type="sensorkit_joystick_get_value">'+
        //             '<value name="pin_X">'+
        //             '</value>'+
        //             '<value name="pin_Y">'+
        //             '</value>'+
        //             '<value name="pin_BT">'+
        //             '</value>'+
        //         '</block>', ],
        //     'img': 'joystick.png',
        //     'pins': [{
        //             'id': 0,
        //             'name': 'VCC',
        //             'x': 0.1,
        //             'y': 1,
        //             'isSource': true,
        //             'property': ['3V3'],
        //             'type': 'power',
        //         },
        //         {
        //             'id': 1,
        //             'name': 'X-out',
        //             'x': 0.3,
        //             'y': 1,
        //             'isSource': true,
        //             'property': ['ain'],
        //             'type': 'analog',
        //         },
        //         {
        //             'id': 2,
        //             'name': 'Y-out',
        //             'x': 0.5,
        //             'y': 1,
        //             'isSource': true,
        //             'property': ['ain'],
        //             'type': 'analog',
        //         },
        //         {
        //             'id': 3,
        //             'name': 'Bt',
        //             'x': 0.7,
        //             'y': 1,
        //             'isSource': true,
        //             'property': ['ain'],
        //             'type': 'analog',
        //         },
        //         {
        //             'id': 4,
        //             'name': 'GND',
        //             'x': 0.9,
        //             'y': 1,
        //             'isSource': true,
        //             'property': ['GND'],
        //             'type': 'ground',
        //         }
        //     ]
        // },
        "potentiometer": {
            'id': 15,
            'name': 'Potentiometer',
            'blocks': ['<block type="sensorkit_potentiometer_get_value"><value name="pin"></value></block>'],
            'img': 'potentiometer.png',
            'simulator': {
                "type": "AnalogInput",
                "pin": "SIG",
                "initValue": 0
            },
            'pins': [{
                'id': 0,
                'name': 'VCC',
                'x': 0.3,
                'y': 1,
                'isSource': true,
                'property': ['3V3'],
                'type': 'power'
            }, {
                'id': 1,
                'name': 'SIG',
                'x': 0.5,
                'y': 1,
                'isSource': true,
                'property': ['ain'],
                'type': 'analog'
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
        "hall-switch": {
            'id': 16,
            'name': 'Hall Switch',
            'blocks': ['<block type="sensorkit_hallswitch_get_value"><value name="pin"></value></block>'],
            'img': 'hall-switch.png',
            'simulator': {
                "type": "digitalInput",
                "pin": 'SIG',
                "mode": 'click',
                "initValue": 0
            },
            'pins': [{
                'id': 0,
                'name': 'VCC',
                'x': 0.3,
                'y': 1,
                'isSource': true,
                'property': ['5V'],
                'type': 'power'
            }, {
                'id': 1,
                'name': 'SIG',
                'x': 0.5,
                'y': 1,
                'isSource': true,
                'property': ['din'],
                'type': 'digital'
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
        // "analog-hall-switch": {
        //     'id': 17,
        //     'name': 'analog Hall Switch',
        //     'blocks': ['<block type="sensorkit_analoghallswitch_get_value"><value name="pin_DO"></value><value name="pin_AO"></value></block>'],
        //     'img': 'analog-hall-switch.png',
        //     'pins': [{
        //         'id': 0,
        //         'name': 'VCC',
        //         'x': 0.2,
        //         'y': 1,
        //         'isSource': true,
        //         'property': ['5V'],
        //         'type': 'power'
        //     }, {
        //         'id': 1,
        //         'name': 'A0',
        //         'x': 0.4,
        //         'y': 1,
        //         'isSource': true,
        //         'property': ['ain'],
        //         'type': 'analog'
        //     }, {
        //         'id': 2,
        //         'name': 'D0',
        //         'x': 0.6,
        //         'y': 1,
        //         'isSource': true,
        //         'property': ['din'],
        //         'type': 'digital'
        //     }, {
        //         'id': 3,
        //         'name': 'GND',
        //         'x': 0.8,
        //         'y': 1,
        //         'isSource': true,
        //         'property': ['GND'],
        //         'type': 'ground'
        //     }]
        // },
        "thermister": {
            'id': 18,
            'name': 'Thermister',
            'blocks': ['<block type="sensorkit_temperature_get_value"><value name="pin"></value></block>'],
            'img': 'thermister.png',
            'simulator': {
                "type": "AnalogInput",
                "pin": "SIG",
                "initValue": 0
            },
            'pins': [{
                'id': 0,
                'name': 'VCC',
                'x': 0.3,
                'y': 1,
                'isSource': true,
                'property': ['3V3'],
                'type': 'power'
            }, {
                'id': 1,
                'name': 'SIG',
                'x': 0.5,
                'y': 1,
                'isSource': true,
                'property': ['ain'],
                'type': 'analog'
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
        // "analog-temperature-sensor": {
        //     'id': 19,
        //     'name': 'analog Temperature Sensor',
        //     'img': 'analog-temperature-sensor.png',
        //     'pins': {
        //         'VCC': {
        //             'id': 0,
        //             'name': 'VCC',
        //             'x': 0.2,
        //             'y': 1,
        //             'isSource': true,
        //             'property': ['5V'],
        //             'type': 'power',
        //         },
        //         'A0': {
        //             'id': 1,
        //             'name': 'A0',
        //             'x': 0.4,
        //             'y': 1,
        //             'isSource': true,
        //             'property': ['ain'],
        //             'type': 'analog',
        //         },
        //         'D0': {
        //             'id': 2,
        //             'name': 'D0',
        //             'x': 0.6,
        //             'y': 1,
        //             'isSource': true,
        //             'property': ['din'],
        //             'type': 'digital',
        //         },
        //         'GND': {
        //             'id': 3,
        //             'name': 'GND',
        //             'x': 0.8,
        //             'y': 1,
        //             'isSource': true,
        //             'property': ['GND'],
        //             'type': 'ground',
        //         }
        //     }
        // },
        "sound-sensor": {
            'id': 20,
            'name': 'Sound Sensor',
            'blocks': ['<block type="sensorkit_sound_get_value"><value name="pin"></value></block>'],
            'img': 'sound-sensor.png',
            'simulator': {
                "type": "AnalogInput",
                "pin": "SIG",
                "initValue": 0
            },
            'pins': [{
                'id': 0,
                'name': 'VCC',
                'x': 0.3,
                'y': 1,
                'isSource': true,
                'property': ['3V3'],
                'type': 'power'
            }, {
                'id': 1,
                'name': 'SIG',
                'x': 0.5,
                'y': 1,
                'isSource': true,
                'property': ['ain'],
                'type': 'analog'
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
            'blocks': ['<block type="sensorkit_photoresistor_get_value"><value name="pin"></value></block>'],
            'img': 'photoresistor.png',
            'simulator': {
                "type": "AnalogInput",
                "pin": "SIG",
                "initValue": 0
            },
            'pins': {
                'VCC': {
                    'id': 0,
                    'name': 'VCC',
                    'x': 0.3,
                    'y': 1,
                    'isSource': true,
                    'property': ['3V3'],
                    'type': 'power',

                },
                'SIG': {
                    'id': 1,
                    'name': 'SIG',
                    'x': 0.5,
                    'y': 1,
                    'isSource': true,
                    'property': ['ain'],
                    'type': 'analog',
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
        // "flame-sensor": {
        //     'id': 22,
        //     'name': 'Flame Sensor',
        //     'blocks': ['<block type="sensorkit_flame_get_value"><value name="pin_DO"></value><value name="pin_AO"></value></block>'],
        //     'img': 'flame-sensor.png',
        //     'pins': [{
        //         'id': 0,
        //         'name': 'VCC',
        //         'x': 0.2,
        //         'y': 1,
        //         'isSource': true,
        //         'property': ['3V3'],
        //         'type': 'power'
        //     }, {
        //         'id': 1,
        //         'name': 'A0',
        //         'x': 0.4,
        //         'y': 1,
        //         'isSource': true,
        //         'property': ['ain'],
        //         'type': 'analog'
        //     }, {
        //         'id': 2,
        //         'name': 'D0',
        //         'x': 0.6,
        //         'y': 1,
        //         'isSource': true,
        //         'property': ['din'],
        //         'type': 'digital'
        //     }, {
        //         'id': 3,
        //         'name': 'GND',
        //         'x': 0.8,
        //         'y': 1,
        //         'isSource': true,
        //         'property': ['GND'],
        //         'type': 'ground'
        //     }]
        // },
        // "gas-sensor": {
        //     'id': 23,
        //     'name': 'Gas Sensor',
        //     'blocks': ['<block type="sensorkit_gassensor_get_value"><value name="pin_DO"></value><value name="pin_AO"></value></block>'],
        //     'img': 'gas-sensor.png',
        //     'pins': [{
        //         'id': 0,
        //         'name': 'VCC',
        //         'x': 0.2,
        //         'y': 1,
        //         'isSource': true,
        //         'property': ['5V'],
        //         'type': 'power'
        //     }, {
        //         'id': 1,
        //         'name': 'A0',
        //         'x': 0.4,
        //         'y': 1,
        //         'isSource': true,
        //         'property': ['ain'],
        //         'type': 'analog'
        //     }, {
        //         'id': 2,
        //         'name': 'D0',
        //         'x': 0.6,
        //         'y': 1,
        //         'isSource': true,
        //         'property': ['din'],
        //         'type': 'digital'
        //     }, {
        //         'id': 3,
        //         'name': 'GND',
        //         'x': 0.8,
        //         'y': 1,
        //         'isSource': true,
        //         'property': ['GND'],
        //         'type': 'ground'
        //     }]
        // },
        // "iR-remote-control": {
        //     'id': 24,
        //     'name': 'IR Remote Control',
        //     'img': 'iR-remote-control.png',
        //     'pins': [{
        //             'id': 0,
        //             'name': 'VCC',
        //             'x': 0.3,
        //             'y': 1,
        //             'isSource': true,
        //             'property': ['5V'],
        //             'type': 'power',
        //         },
        //         {
        //             'id': 1,
        //             'name': 'SIG',
        //             'x': 0.5,
        //             'y': 1,
        //             'isSource': true,
        //             'property': ['ain'],
        //             'type': 'analog',
        //         },
        //         {
        //             'id': 2,
        //             'name': 'GND',
        //             'x': 0.7,
        //             'y': 1,
        //             'isSource': true,
        //             'property': ['GND'],
        //             'type': 'ground',
        //         }
        //     ]
        // },
        "touch-switch": {
            'id': 25,
            'name': 'Touch Switch',
            'blocks': ['<block type="sensorkit_touchswitch_get_value"><value name="pin"></value></block>'],
            'img': 'touch-switch.png',
            'simulator': {
                "type": "digitalInput",
                "pin": 'SIG',
                "mode": 'click',
                "initValue": 0
            },
            'pins': [{
                'id': 0,
                'name': 'VCC',
                'x': 0.3,
                'y': 1,
                'isSource': true,
                'property': ['5V'],
                'type': 'power'
            }, {
                'id': 1,
                'name': 'SIG',
                'x': 0.5,
                'y': 1,
                'isSource': true,
                'property': ['din'],
                'type': 'digital'
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
        // "ultrasonic-ranging-module": {
        //     'id': 26,
        //     'name': 'Ultrasonic Ranging Module',
        //     'blocks': ['\n                <block type="sensorkit_ultrasonic_get_value">\n                    <value name="Trig">\n                    </value>\n                    <value name="Echo">\n                    </value>\n                </block>'],
        //     'img': 'ultrasonic-ranging-module.png',
        //     'pins': [{
        //         'id': 0,
        //         'name': 'VCC',
        //         'x': 0.2,
        //         'y': 1,
        //         'isSource': true,
        //         'property': ['5V'],
        //         'type': 'power'
        //     }, {
        //         'id': 1,
        //         'name': 'Trig',
        //         'x': 0.4,
        //         'y': 1,
        //         'isSource': true,
        //         'property': ['din'],
        //         'type': 'digital'
        //     }, {
        //         'id': 2,
        //         'name': 'Echo',
        //         'x': 0.6,
        //         'y': 1,
        //         'isSource': true,
        //         'property': ['din'],
        //         'type': 'digital'
        //     }, {
        //         'id': 3,
        //         'name': 'GND',
        //         'x': 0.8,
        //         'y': 1,
        //         'isSource': true,
        //         'property': ['GND'],
        //         'type': 'ground'
        //     }]
        // },
        // "DS18B20-temperature-sensor": {
        //     'id': 27,
        //     'name': 'DS18B20 Temperature Sensor',
        //     'blocks': ['\n                <block type="sensorkit_ds18b20_get_value">\n                    <value name="pin">\n                    </value>\n                </block>'],
        //     'img': 'DS18B20-temperature-sensor.png',
        //     'pins': [{
        //         'id': 0,
        //         'name': 'VCC',
        //         'x': 0.3,
        //         'y': 1,
        //         'isSource': true,
        //         'property': ['5V'],
        //         'type': 'power'
        //     }, {
        //         'id': 1,
        //         'name': 'SIG',
        //         'x': 0.5,
        //         'y': 1,
        //         'isSource': true,
        //         'property': ['din'],
        //         'type': 'digital'
        //     }, {
        //         'id': 2,
        //         'name': 'GND',
        //         'x': 0.7,
        //         'y': 1,
        //         'isSource': true,
        //         'property': ['GND'],
        //         'type': 'ground'
        //     }]
        // },
        // "rotary-encoder": {
        //     'id': 28,
        //     'name': 'Rotary Encoder',
        //     'img': 'rotary-encoder.png',
        //     'pins': [{
        //         'id': 0,
        //         'name': 'VCC',
        //         'x': 0.1,
        //         'y': 1,
        //         'isSource': true,
        //         'property': ['5V'],
        //         'type': 'power'
        //     }, {
        //         'id': 1,
        //         'name': 'CLK',
        //         'x': 0.3,
        //         'y': 1,
        //         'isSource': true,
        //         'property': ['din'],
        //         'type': 'analog'
        //     }, {
        //         'id': 2,
        //         'name': 'DT',
        //         'x': 0.5,
        //         'y': 1,
        //         'isSource': true,
        //         'property': ['din'],
        //         'type': 'digital'
        //     }, {
        //         'id': 3,
        //         'name': 'DW',
        //         'x': 0.7,
        //         'y': 1,
        //         'isSource': true,
        //         'property': ['din'],
        //         'type': 'digital'
        //     }, {
        //         'id': 4,
        //         'name': 'GND',
        //         'x': 0.9,
        //         'y': 1,
        //         'isSource': true,
        //         'property': ['GND'],
        //         'type': 'ground'
        //     }]
        // },
        // "humiture-sensor": {
        //     'id': 29,
        //     'name': 'Humiture Sensor',
        //     'blocks': ['\n                <block type="sensorkit_dht11_get_value">\n                    <value name="pin">\n                    </value>\n                </block>'],
        //     'img': 'humiture-sensor.png',
        //     'pins': [{
        //         'id': 0,
        //         'name': 'VCC',
        //         'x': 0.3,
        //         'y': 1,
        //         'isSource': true,
        //         'property': ['5V'],
        //         'type': 'power'
        //     }, {
        //         'id': 1,
        //         'name': 'SIG',
        //         'x': 0.5,
        //         'y': 1,
        //         'isSource': true,
        //         'property': ['din'],
        //         'type': 'digital'
        //     }, {
        //         'id': 2,
        //         'name': 'GND',
        //         'x': 0.7,
        //         'y': 1,
        //         'isSource': true,
        //         'property': ['GND'],
        //         'type': 'ground'
        //     }]
        // },
        "ir-obstacle-avoidance": {
            'id': 30,
            'name': 'IR Obstacle Avoidance',
            'blocks': ['<block type="sensorkit_irobstacle_get_value"><value name="pin"></value></block>'],
            'img': 'ir-obstacle-avoidance.png',
            'simulator': {
                "type": "digitalInput",
                "pin": 'SIG',
                "mode": 'click',
                "initValue": 0
            },
            'pins': [{
                'id': 0,
                'name': 'VCC',
                'x': 0.3,
                'y': 1,
                'isSource': true,
                'property': ['5V'],
                'type': 'power'
            }, {
                'id': 1,
                'name': 'SIG',
                'x': 0.5,
                'y': 1,
                'isSource': true,
                'property': ['din'],
                'type': 'digital'
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
        // "barometer": {
        //     'id': 31,
        //     'name': 'Barometer',
        //     'img': 'barometer.png',
        //     'pins': [{
        //         'id': 0,
        //         'name': 'VCC',
        //         'x': 0.2,
        //         'y': 1,
        //         'isSource': true,
        //         'property': ['5V'],
        //         'type': 'power'
        //     }, {
        //         'id': 1,
        //         'name': 'SCL',
        //         'x': 0.4,
        //         'y': 1,
        //         'isSource': true,
        //         'property': ['dout'],
        //         'type': 'analog'
        //     }, {
        //         'id': 2,
        //         'name': 'SDA',
        //         'x': 0.6,
        //         'y': 1,
        //         'isSource': true,
        //         'property': ['din'],
        //         'type': 'analog'
        //     }, {
        //         'id': 3,
        //         'name': 'GND',
        //         'x': 0.8,
        //         'y': 1,
        //         'isSource': true,
        //         'property': ['GND'],
        //         'type': 'ground'
        //     }]
        // },
        // "gyro-acceleration-sensor": {
        //     'id': 32,
        //     'name': 'Gyro Acceleration Sensor',
        //     'img': 'gyro-acceleration-sensor.png',
        //     'pins': [{
        //         'id': 0,
        //         'name': 'VCC',
        //         'x': 0.2,
        //         'y': 1,
        //         'isSource': true,
        //         'property': ['5V'],
        //         'type': 'power'
        //     }, {
        //         'id': 1,
        //         'name': 'SCL',
        //         'x': 0.4,
        //         'y': 1,
        //         'isSource': true,
        //         'property': ['dout'],
        //         'type': 'analog'
        //     }, {
        //         'id': 2,
        //         'name': 'SDA',
        //         'x': 0.6,
        //         'y': 1,
        //         'isSource': true,
        //         'property': ['din'],
        //         'type': 'analog'
        //     }, {
        //         'id': 3,
        //         'name': 'GND',
        //         'x': 0.8,
        //         'y': 1,
        //         'isSource': true,
        //         'property': ['GND'],
        //         'type': 'ground'
        //     }]
        // },
        "tracking-sensor": {
            'id': 33,
            'name': 'Tracking Sensor',
            'blocks': ['<block type="sensorkit_tracking_get_value"><value name="pin"></value></block>'],
            'img': 'tracking-sensor.png',
            'simulator': {
                "type": "digitalInput",
                "pin": 'SIG',
                "mode": 'click',
                "initValue": 0
            },
            'pins': [{
                'id': 0,
                'name': 'VCC',
                'x': 0.3,
                'y': 1,
                'isSource': true,
                'property': ['5V'],
                'type': 'power'
            }, {
                'id': 1,
                'name': 'SIG',
                'x': 0.5,
                'y': 1,
                'isSource': true,
                'property': ['din'],
                'type': 'digital'
            }, {
                'id': 2,
                'name': 'GND',
                'x': 0.7,
                'y': 1,
                'isSource': true,
                'property': ['GND'],
                'type': 'ground'
            }]
        }
    }
};