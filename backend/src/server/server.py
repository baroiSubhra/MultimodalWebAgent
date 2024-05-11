from flask import Flask, request, jsonify
from flask_cors import CORS
from src.oai_agent.oai_agent import main


app = Flask(__name__)
CORS(app)

@app.route('/', methods=['GET'])
def root():
    return jsonify({'message': 'Server is up'}),200

@app.route('/ping', methods=['GET'])
def pong():
    return jsonify({'message': 'Hello, world!'}),200

@app.route('/dummy_test', methods=['POST'])
def dummy_test():
    params = request.json
    try:
        query = params['query']
        if(query and len(query)> 0): 
            return jsonify({'message': 'Query executed successfully'}),200
        else:
            raise Exception('Invalid Query')
    except Exception as e:
        return f'Error executing command: {e}', 500

@app.route('/run_script', methods=['POST'])
def run_script():
    params = request.json
    try:
        query = params['query']
        if(query and len(query)> 0): 
            main(query)
            return jsonify({'message': 'Query executed successfully'}),200
        else:
            raise Exception('Invalid Query')
    except Exception as e:
        return f'Error executing command: {e}', 500

if __name__ == '__main__':
    app.run(debug=True)
