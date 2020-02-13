# AirportInfo-CommandLine
A Nodejs console application used retrieve data about airports from a file given search parameters

## Data 
The data was taken from [openflights.org](https://openflights.org/data.html). It contains around 10,000 entries, with each entry containing a 

* Airport ID	Unique OpenFlights identifier for this airport.
* Name	Name of airport. May or may not contain the City name.
* City	Main city served by airport. May be spelled differently from Name.
* Country	Country or territory where airport is located. See Countries to cross-reference to ISO 3166-1 codes.
* IATA	3-letter IATA code. Null if not assigned/unknown.
* ICAO	4-letter ICAO code.Null if not assigned.
* Latitude	Decimal degrees, usually to six significant digits. Negative is South, positive is North.
* Longitude	Decimal degrees, usually to six significant digits. Negative is West, positive is East.
* Altitude	In feet.
* Timezone	Hours offset from UTC. Fractional hours are expressed as decimals, eg. India is 5.5.
* DST	Daylight savings time. One of E (Europe), A (US/Canada), S (South America), O (Australia), Z (New Zealand), N (None) or U (Unknown). 
*Tz database time zone	Timezone in "tz" (Olson) format, eg. "America/Los_Angeles".

## Dependencies
The application requires Node to be installed which can be downloaded from this [link](https://nodejs.org/en/).

## Running the application
Once Node is setup install the required packages by running `npm install` which installs all the packages mentioned in the `package.json` file.

The application can then be run by running the command  

    node myapp.js -s --Country Germany --Number 4
    
The above command searches for airports in Germany and retreives the first 4 results.

The flags are explained below.

The following flags are used for searching. the search parameter must follow the flag as shown in the example.
* `--AirportID` 
* `--Name`


