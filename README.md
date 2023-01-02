# weather-app

[![Tech](https://skillicons.dev/icons?i=ts,react,scss,express)](https://skillicons.dev)

Weather App made with React, Typescript, SCSS and Express (backend). <br />
Preview: [weather-app](https://weather-app.lorenzo-conti.it)

# Example

<div align="center" >
<img src="https://i.imgur.com/LY20Hxt.pngg" height="300" />
</div>

## Installation

1. Clone and install all the dependencies (frontend / backend)

```
git clone https://github.com/lorenzo774/weather-app.git
cd weather-app/server
npm i
cd ../client
npm i
```

2. Create a new account for [weatherbit.io](https://www.weatherbit.io) and get the API Key

3. Create a .env file inside server
```
ENDPOINT="https://api.weatherbit.io/v2.0/current"
API_KEY=[YOUR_KEY]
PORT=3000
ORIGIN='http://localhost:5173'
```

4. Create a .env file inside client
```
VITE_API_ENDPOINT='http://localhost:3000/weather'
```

5. Run the server and the client
