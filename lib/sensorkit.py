#！/usr/bin/env/ python3
from raspberrypi import *
import time
import math

PERIOD = 4095
PRESCALER = 10
MIN_PW = 500
MAX_PW = 2500
DS18B20 = ''

def LEDModule_set_value(pin, value):
	pin = Pin(pin)
	pin.value(value)

def RGBLED_set_value(Rpin, Gpin, Bpin, color, common=1):
	Rpin = PWM(Rpin)
	Gpin = PWM(Gpin)
	Bpin = PWM(Bpin)
	color = color.strip("#")
	col = int(color, 16)
	R_val = (col & 0xff0000) >> 16
	G_val = (col & 0x00ff00) >> 8
	B_val = (col & 0x0000ff) >> 0
	val = [R_val, G_val, B_val]

	for i in range(0, 3):
		val[i] = val[i]/255.0 * 4095.0 # 0-255 map 0-4095
	if common == 1: # common anode 
		R_val = 4095-val[0]
		G_val = 4095-val[1]
		B_val = 4095-val[2]
	
	Rpin.pulse_width(R_val)
	Gpin.pulse_width(G_val)
	Bpin.pulse_width(B_val)

def Button_get_value(pin):
	pin = Pin(pin)
	value = pin.value()
	if value == 1:
		value = 0
	else:
		value = 1
	return value

def Buzzer_play(pin, note, beat):
	pwm = PWM(pin)
	pwm.freq(note)
	pwm.pulse_width_percentage(50)
	delay(beat)
	pwm.pulse_width_percentage(0)

def TiltSwitch_get_value(pin):
	pin = Pin(pin)
	value = pin.value()
	return value

def MoistureSensor_get_value(pin):
	adc = ADC(pin)
	value = adc.read()
	return value

def Potentiometer_get_value(pin):
	adc = ADC(pin)
	value = adc.read()
	return value

def UltrasonicSensor_get_value( trig, echo, timeout=0.02):
	trig = Pin(trig)
	echo = Pin(echo)
	trig.low()
	time.sleep(0.01)
	trig.high()
	time.sleep(0.00001)
	trig.low()
	pulse_end = 0
	timeout_start = time.time()
	while echo.value()==0:
		pulse_start = time.time()
		if pulse_start - timeout_start > timeout:
			return -1
	while echo.value()==1:
		pulse_end = time.time()
		if pulse_end - timeout_start > timeout:
			return -1
	during = pulse_end - pulse_start
	return during * 340 / 2 * 100

def GasSensor_get_value(pin):
	adc = ADC(pin)
	value = adc.read()
	return value

def SoundSensor_get_value(pin):
	adc = ADC(pin)
	value_list = []
	for i in range(0, 50):
		value = adc.read()
		value_list.append(value)
	value = sum(value_list)/50.0
	return value

def Photoresistor_get_value(pin):
	adc = ADC(pin)
	value = adc.read()
	return value

def VibrationSwitch_get_value(pin):
	pin = Pin(pin)
	value = pin.value()
	return value


def Joystick_get_value(pin):
	adc = ADC(pin)
	value = adc.read()
	return value


def Joystick_get_status(Xpin, Ypin, Btpin):
	X = ADC(Xpin)
	Y = ADC(Ypin)
	Bt = ADC(Btpin)
	state = ['home', 'up', 'down', 'left', 'right', 'pressed']
	i = 0
	if X.read() <= 1900:
		i = 1       #up
	elif X.read() >= 2200:
		i = 2       #down
	elif Y.read() <= 1900:
		i = 3       #right
	elif Y.read() >= 2200:
		i = 4       #left
	elif Bt.read() <= 100:
		i = 5       # Button pressed
	if X.read() - 2048 < 200 and X.read() - 2048 > -200 and \
		Y.read() - 2048 < 200 and Y.read() - 2048 > -200 and \
		Bt.read() >= 2048:
		i = 0
	return state[i]

def DS18B20_get_value(unit=1):
	import os
	# unit=0:  Fahrenheit
	# unit=1:  degree Celsius
	for i in os.listdir('/sys/bus/w1/devices'):
		if i.startswith('28-'):
			DS18B20 = i
	location = '/sys/bus/w1/devices/' + DS18B20 + '/w1_slave'
	with open(location) as f:
		text = f.read()
	secondline = text.split("\n")[1]
	temperaturedata = secondline.split(" ")[9]
	temperature = float(temperaturedata[2:])
	temperature = temperature / 1000
	if unit == 0:
		temperature = 32 + temperature*1.8
	return temperature

def ADXL345_get_value(busnum=-1, debug=False):  
	i2c = I2C()
	ADXL345_ADDRESS          = 0x53 
	ADXL345_REG_DEVID        = 0x14 # Device ID
	ADXL345_REG_DATAX0       = 0x32 # X-axis data 0 (6 bytes for X/Y/Z)
	ADXL345_REG_POWER_CTL    = 0x2D # Power-saving features control

	# accel = I2C(ADXL345_ADDRESS, busnum, debug)
	# if accel.readU8(ADXL345_REG_DEVID) == 0xE5:
	# 	accel.write8(ADXL345_REG_POWER_CTL, 0x08)

	# raw = accel.readList(ADXL345_REG_DATAX0, 6)
	# value = []
	# for i in range(0, 6, 2):
	# 	g = raw[i] | (raw[i+1] << 8)
	# 	if g > 32767: 
	# 		g -= 65535
	# 	value.append(g)
	# return value 

	result = i2c.recv(ADXL345_ADDRESS, ADXL345_REG_DEVID)
	send1 = ADXL345_REG_POWER_CTL<< 8
	send = (0x08<< 8) + ADXL345_REG_POWER_CTL
	if result:
		i2c.send( send, ADXL345_ADDRESS)
	raw = i2c.mem_read(6, ADXL345_ADDRESS, ADXL345_REG_DATAX0)
	value = []
	for i in range(0, 6, 2):
		g = raw[i] | (raw[i+1] << 8)
		if g >32767:
			g-=32767
		value.append(g)
	return value

def map(x, in_min, in_max, out_min, out_max):
	return (x - in_min) * (out_max - out_min) / (in_max - in_min) + out_min

def Servo_set_value(pin, angle):
	p_out = PWM(pin)
	if angle < -90:
		angle = -90
	if angle > 90:
		angle = 90
	High_level_time = map(angle, -90, 90, MIN_PW, MAX_PW)
	pwr =  High_level_time / 20000
	value = int(pwr*4095)
	p_out.pulse_width(value)
	
def TouchSwitch_get_value(pin):
	pin = Pin(pin)
	value = pin.value()
	return value

def test():
	while True:
		value  = ADXL345_get_value()
		print(value) 
		time.sleep(1)

if __name__ == "__main__":
	test() 