# pip install pyyaml

## convert-os.py
## Import the modules to handle JSON & YAML
import yaml
import json

## Create a variable to hold the data to import
os_list = {}

## Read the YAML file
with open("src/data/mosques.yml", encoding="utf-8") as infile:
    #  Marshall the YAML into the variable defined above 
    os_list = yaml.load(infile, Loader=yaml.CLoader)     # Print the List to the console. print(os_list)
#  Open a file to write the JSON output. The 'w' makes the file writable
with open("src/data/mosques.json", 'w', encoding="utf-8") as outfile:
     # Marshall the JSON, setting "indent" makes the file more readable 
    json.dump(os_list, outfile, indent=4) 
    print("JSON file written.")