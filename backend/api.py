# import flask
from flask import Flask, request, jsonify
from flask_cors import CORS
import RPi.GPIO as GPIO


GPIO.setmode(GPIO.BOARD)

# Define the GPIO pin number
led_pin = 12

# Set the GPIO pin as an output
GPIO.setup(led_pin, GPIO.OUT)


def set_light(new_state):
    try:
        if new_state==1:
            # Turn on the LED
            GPIO.output(led_pin, GPIO.HIGH)
            # time.sleep(1)  # Wait for 1 second
        elif new_state==0:
            # Turn off the LED
            GPIO.output(led_pin, GPIO.LOW)
            # time.sleep(1)  # Wait for 1 second

    except KeyboardInterrupt:
        pass

# Clean up and reset GPIO configuration
    GPIO.cleanup()

app = Flask(__name__)

CORS(app)
# Create a variable to store the state of the light bulb (0 for off, 1 for on)
# light_state = 0

# Define a route to receive the state from the frontend
@app.route('/device_state', methods=['GET','POST'])
def device_state():
    # global light_state
    data = request.json
    new_state = data.get('state')
    device_state(new_state)
    print('new state of device is ', data)
    if new_state is not None:
        # light_state = new_state
        return jsonify({"message": "Light state updated."}), 200
    else:
        return jsonify({"message": "Invalid request."}), 400

# Define a route to get the current state of the light bulb
# @app.route('/get_light_state', methods=['GET'])
# def get_light_state():
#     return jsonify({"state": light_state})

if __name__ == '__main__':
    # app.run(debug=True, port=8080)
    app.run(debug=True, host='0.0.0.0')



# import time

# Set up GPIO using BCM numbering




