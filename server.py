from flask import Flask, render_template, url_for, redirect, request, jsonify
import httplib2
import requests
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
import json
import re

app = Flask(__name__)

@app.route('/', methods=['GET'])
def LandingPage():
	return render_template('LandingPage.html')


if __name__ == "__main__":
	app.run(debug=True, host="127.0.0.1", port=5000)