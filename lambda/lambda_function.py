import requests

def lambda_handler(event, context):
    # TODO implement
    r = requests.get('https://api.github.com/events')
    print r
    return 'Hello from Lambda'
