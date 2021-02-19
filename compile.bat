cd Web
call npm run build
cd ..
rd /s /q Cordova\MyPassApp\www
md Cordova\MyPassApp\www
xcopy Web\dist Cordova\MyPassApp\www /s /e /h
cd Cordova\MyPassApp
call cordova run android
cd ../../

