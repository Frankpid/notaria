var dataConfig = {}
const envm = process.env.NODE_ENV

if( envm === "development" ){
	dataConfig = {
		"URL": "http://localhost:3000",
		"URL_BACK": "http://localhost:4000",
		"PORT": 4000,
		"NODE_ENV": "development",
		"DB_HOST": "localhost",
		"DB_USER": "root",
		"DB_PASSWORD": "",
		"DB_NAME": "",
		"FB_APP_ID": "",
		"FB_VERSION": 'v5.0',
		"FB_APP_SECRET": "",
		"GOOGLE_CLIENT_ID": "",
		"GOOGLE_CLIENT_SECRET": "",
		"SECURE": false,
		"API_PATH": "http://localhost:4000/getapi"
	}
	console.log(dataConfig)
}else{	
	dataConfig = {
		"URL": "https://142.93.3.176:3000",
		"URL_BACK": "http://142.93.3.176:3001",
		"PORT": 3000,
		"NODE_ENV": "production",
		"DB_HOST": "localhost",
		"DB_USER": "devf",
		"DB_PASSWORD": ")%w*)sZr$BRe",
		"DB_NAME": "data_frbl",
		"FB_APP_ID": "",
		"FB_VERSION": 'v5.0',
		"FB_APP_SECRET": "",
		"GOOGLE_CLIENT_ID": "",
		"GOOGLE_CLIENT_SECRET": "",
		"SECURE": true,
		"API_PATH": "http://142.93.3.176:3001/getapi"
	}
	console.log(dataConfig)
}

module.exports = dataConfig
