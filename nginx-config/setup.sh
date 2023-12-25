# nginx 설치
sudo apt-get install -y nginx

# nginx 설정 파일 복사
sudo cp /home/gluv-FE/nginx-config/ /etc/nginx/sites-available/
sudo ln -s /etc/nginx/sites-available/ /etc/nginx/sites-enabled/GLUVFE

# nginx 설정 파일 검증 및 서비스 재시작
sudo nginx -t
sudo service nginx restart

# 라우팅 설정

# 리버스 프록시 서버??

# 세부 설정 필요