FROM php:7.0-fpm

ADD ./config/php.ini /usr/local/etc/php/conf.d
# ADD ./config/www.conf /usr/local/etc/php-fpm.d/

RUN apt-get update && apt-get install -y \
    libpq-dev \
    libfreetype6-dev \
    libjpeg62-turbo-dev \
    libmcrypt-dev \
    zip \
    curl

RUN pecl install apcu
RUN echo extension=apcu.so > /usr/local/etc/php/conf.d/apcu.ini

# Install extensions using the helper script provided by the base image
RUN docker-php-ext-install mysqli
RUN docker-php-ext-install -j$(nproc) iconv mcrypt
RUN docker-php-ext-configure gd --with-freetype-dir=/usr/include/ --with-jpeg-dir=/usr/include/
RUN docker-php-ext-install -j$(nproc) gd

RUN usermod -u 1000 www-data

WORKDIR /var/www/app

CMD ["php-fpm"]

EXPOSE 9000
