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
}else{	
	dataConfig = {
		"URL": "http://notariaroman.pe",
		"URL_BACK": "http://admin.notariaroman.pe",
		"PORT": 3000,
		"NODE_ENV": "production",
		"DB_HOST": "localhost",
		"DB_USER": "",
		"DB_PASSWORD": "",
		"DB_NAME": "data_frbl",
		"FB_APP_ID": "",
		"FB_VERSION": 'v5.0',
		"FB_APP_SECRET": "",
		"GOOGLE_CLIENT_ID": "",
		"GOOGLE_CLIENT_SECRET": "",
		"SECURE": true,
		"API_PATH": "http://admin.notariaroman.pe/getapi"
	}
}

export default dataConfig
