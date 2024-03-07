from flask import Flask,request,jsonify
from flask_cors import CORS
import pickle
import pandas as pd
from sklearn.metrics import mean_absolute_error
app = Flask(__name__)
CORS(app=app)
@app.route("/")
def hello_world():
  return jsonify({"sucess":True})

@app.route("/eval",methods=["POST"])
def eval():
  try:
    print("file = ",request.files["file"])
    if "file" not in request.files:
      return "Cant find File"
    file = request.files["file"]
    if file == "":
      return "no file selected"
    return jsonify({"sucess":True,"score":score(file)})
  except Exception as e:
    return jsonify({"sucess":False,"error":e})

def score(file):
  x_test = pd.read_csv("./test/x_test.csv")
  y_test = pd.read_csv("./test/y_test.csv")

  loaded_pipeline = pickle.load(file)
  y_pred = loaded_pipeline.predict(x_test)
  score = mean_absolute_error(y_true=y_test,y_pred=y_pred)
  print(score)
  return score


if __name__ == "__main__":
  app.run(debug=True)