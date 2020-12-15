#!-*-encoding:utf-8-*-
"""
使用 Flask 作为 vue 的 服务器
"""
from flask import Flask, Blueprint, render_template, abort
from flask import jsonify
from flask_cors import CORS

app = Flask(__name__, template_folder="./dist", static_folder="./dist/static")

#sample_page = Blueprint("sample_page", "sample_page", template_folder="./dist")
# 将前端路由控制的url访问全部交由该控制处理器相应
#@app.errorhandler(404)
#def index():
#    return render_template("index.html")


@app.route('/hello')
def hello():
    return "<h>Hello</h>"

@app.route('/index')
def index():
    return render_template("index.html")



if __name__ == "__main__":
    app.run(host="127.0.0.1", port=5057)
