import requests
response = requests.post('http://192.168.136.2:5000/bulb_on')
print(response.status_code)