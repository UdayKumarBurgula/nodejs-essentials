/*
   Copyright 2015 Packt Publishing

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
var Http = require( 'http' );

var count = 0;
function requestHandler( request, response ) {
    var message;
    count += 1;
    response.writeHead( 201, {
        'Content-Type': 'text/plain'
    });
        
    message = 'Visitor count: ' + count + ', path: ' + request.url;
    console.log( message );
    response.end( message );
}

var server = Http.createServer( requestHandler );
server.listen( 8080, function( ) {
    console.log( 'Listening on port 8080' ); 
});
