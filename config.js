module.exports = {
  development:{
    PORT:9550,
    SSLCERTPATH:'/etc/apache2/certs/fullchain.pem',
    SSLKEYPATH:'/etc/apache2/certs/privkey.pem',
    ACCNTHOST:'api.outlawdesigns.io',
    ACCNTPORT:9661,
    ACCNTVERIFYEND:'/verify',
    AUTHHEADER:'auth_token',
    DBUSER:'root',
    DBHOST:'localhost',
    DBPASS:'',
  },
  testing:{
    PORT:9550,
    SSLCERTPATH:'/etc/apache2/certs/fullchain.pem',
    SSLKEYPATH:'/etc/apache2/certs/privkey.pem',
    ACCNTHOST:'api.outlawdesigns.io',
    ACCNTPORT:9661,
    ACCNTVERIFYEND:'/verify',
    AUTHHEADER:'auth_token',
    DBUSER:'root',
    DBHOST:'localhost',
    DBPASS:'',
  },
  production:{
    PORT:9550,
    SSLCERTPATH:'/etc/apache2/certs/fullchain.pem',
    SSLKEYPATH:'/etc/apache2/certs/privkey.pem',
    ACCNTHOST:'api.outlawdesigns.io',
    ACCNTPORT:9661,
    ACCNTVERIFYEND:'/verify',
    AUTHHEADER:'auth_token',
    DBUSER:'root',
    DBHOST:'localhost',
    DBPASS:'',
  }
};
