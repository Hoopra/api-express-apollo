# TODO: migrate to node using argparse

import os
import json
from argparse import ArgumentParser, Namespace
import subprocess

parser = ArgumentParser()
parser.add_argument('-e', '--environment', dest='env',
  help='specify environment', default='dev')
parser.add_argument('-q', '--quiet',
  action='store_false', dest='verbose', default=True,
  help='suppress console messages')
parser.add_argument('-b', '--build', action='store_true',
  dest='build', default=False, help='rebuild stack')

args = vars(parser.parse_args())
path = os.path.dirname(os.path.abspath(__file__))

def log(*v):
  if (args.get('verbose')):
    print(*v)

def updateEnvironment(args, baseDir):
  env = args.get('env')
  os.environ['BASE_DIR'] = baseDir
  os.environ['ENV'] = env
  os.environ['POSTGRES_DB'] = 'scoutbase_dev'
  os.environ['POSTGRES_PASSWORD'] = 'hoophoop123!'
  os.environ['POSTGRES_USER'] = 'hoopra'

def run(args, dir = os.getcwd()):
  os.chdir(dir)
  commands = ['docker-compose', 'up']
  if args.get('build'):
    commands.append('--build')
  subprocess.run(commands)

dir = path + '/' + args.get('env')
updateEnvironment(args, path + '/..')
run(args, dir)
