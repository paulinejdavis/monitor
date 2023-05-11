# monitor

 <img width="100" alt="arrow" src="https://user-images.githubusercontent.com/19231569/213458967-d77d1ede-cbb8-4cda-8d58-7ac2a1c70503.png">

## summary

Bespoke monitoring: An application that tracks a large number (possibly hundreds) of sources(urls) - possi'bly twitter, many of which don't publish new content frequently and traditionally, this process takes a long time to verify each source individually by hand.

This tool should be able to take an arbitrary number of urls as an input and check that (for instance) each url is reachable and returns valid content. By periodically running this tool, this would allow some basic checks on less frequently updated sources(urls).

## tech stack 

- [React](https://reactjs.org/) for front end user interface.
- [Node.js](https://nodejs.org/en/) for the server environment(v18.12)
- NPM (8.19.2)
- Nodemon (2.0.20) to reload the server automatical=

## api
curl "https://api.mockaroo.com/api/2b264620?count=1000&key=104117b0" > "webAddresses.csv"

curl -H "X-API-Key: 104117b0" https://my.api.mockaroo.com/web_addresses.json

## user stories

```
The user wants basic functionality to start with.

```

```
The user would like a possibility to grow and over-engineer the application
with a user friendly frontend interface.

```

```
The user would like delivery of a working tool in any lang/framework.

```

```
The user would like the application/tool to run on a local machine.

```

## background

https://www.polimonitor.com/solutions
https://www.dynatrace.com/monitoring/platform/web-monitoring/?utm_source=google&utm_medium=cpc&utm_term=website%20monitoring&utm_campaign=uk-dem-web-monitoring&utm_content=none&gclsrc=aw.ds&gclid=Cj0KCQjww4-hBhCtARIsAC9gR3bRAfexFU8Q1gsGh749bqgwDVG4lf0ATqp_Q24kT4vB4KEroSLxbqAaAqJuEALw_wcB
https://www.splunk.com/en_us/form/how-to-improve-core-web-vitals.html?utm_campaign=google_emea_tier1_en_search_generic_observability_devops&utm_source=google&utm_medium=cpc&utm_content=Core_Web_Vitals_EB&utm_term=web%20monitoring&_bk=web%20monitoring&_bt=620601734639&_bm=p&_bn=g&_bg=147471832264&device=c&gclid=Cj0KCQjww4-hBhCtARIsAC9gR3bPuQx3r1j1H24W9ARWb2jEonN70KY-va-1xb565h8ay3AlpuGG6pAaAsUQEALw_wcB

https://fonts.google.com/specimen/Share+Tech+Mono?query=tech
