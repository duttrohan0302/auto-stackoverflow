from subprocess import Popen, PIPE
import requests
import sys
import os

oldname = sys.argv[1]
newname=sys.argv[1]+".py"
os.rename(oldname,newname)
url_list = []

def openFile():
	global filePath
	filePath = newname
	
def getData(cmd):
	cmd_list = cmd.split(" ", 1)
	process = Popen(cmd_list, stdout = PIPE, stderr = PIPE)
	output, error = process.communicate()
	return output, error

def make_request(error):
	# print("Searching for " + error)
	response = requests.get("https://api.stackexchange.com/"+"/2.2/search?order=desc&sort=activity&tagged=python&intitle={}&site=stackoverflow".format(error))
	return response.json()

def get_urls(json_dict):
	count = 0
	for i in json_dict["items"]:
		if i["is_answered"]:
			url_list.append(i["link"])
		count += 1
		if count == 3:
			break

def autoSearch():
	output, error = getData("python {}".format(filePath))
	# print("Error is -->",error)
	# error = error.decode("utf-8").strip().split("\r\n")[-1]
	error = error.decode("utf-8")
	# print("Err utf8",error)
	error = error.strip().split('\n')[-1]
	# print("last err",error)
	# print("Error => ",error)
	if(error):
		error_list = error.split(":",1)
		json1 = make_request(error_list[0])
		json2 = make_request(error_list[1])
		json3 = make_request(error)
		get_urls(json1)
		get_urls(json2)
		get_urls(json3)
	else:
		print("No Error")

def keyShort(event):
	autoSearch()
openFile()
autoSearch()	
print(url_list)
os.remove(newname)
