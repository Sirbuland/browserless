import json
import logging
import os
import requests
import argparse


parser=argparse.ArgumentParser()

parser.add_argument('url_hash',help='provide url hash')
parser.add_argument('user_agent',help='provide user agent')
parser.add_argument('user_agent_hash',help='provide inputfile')

args=parser.parse_args()


PROTOCOL = "https"
# SERVERIP = 'sc.slashnext.net'
SERVERIP = '10.0.8.79'

AUTH = {'uname': 'snx', 'password': 'top4glory'}
APIPACKAGE = '{1}://{0}/worker/uploadstatus/'.format(SERVERIP, PROTOCOL)


try:
    post_data = {'url_hash': args.url_hash, 'user_agent_hash': args.user_agent_hash, 'status': -10}
    post_data.update(AUTH)
    response = requests.post(APIPACKAGE, data=post_data, verify=False)
    print(str("{0}####{1}".format(str(args.url_hash), str(args.user_agent_hash))),
                str(response.content))
except Exception as e:
    print e