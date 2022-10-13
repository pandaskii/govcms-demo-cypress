FROM drupal:9-php8.1

RUN apt-get update && \
    apt-get install -q -y mariadb-client ssmtp mailutils git unzip rsync && \
    rm -rf /var/lib/apt/lists/*

# clean up the install files
RUN apt-get autoclean && \
    apt-get autoremove && \
    rm -rf /var/lib/apt/lists/*

# Set timezone to Australia/Sydney by default
RUN ln -sf /usr/share/zoneinfo/Australia/Sydney /etc/localtime

RUN echo "hostname=govcms.test" > /etc/ssmtp/ssmtp.conf && \
    echo "root=root@govcms.test" >> /etc/ssmtp/ssmtp.conf && \
    echo "mailhub=mailhog:1025" >> /etc/ssmtp/ssmtp.conf && \
    echo "sendmail_path=/usr/sbin/ssmtp -t" >> /usr/local/etc/php/conf.d/php-sendmail.ini && \
    echo "memory_limit = 2G" >> /usr/local/etc/php/conf.d/docker-php-ram-limit.ini

# Install Drush with the phar file.
RUN curl -fsSL -o /usr/local/bin/drush "https://github.com/drush-ops/drush-launcher/releases/latest/download/drush.phar" && \
    chmod +x /usr/local/bin/drush

WORKDIR /app

ENV COMPOSER_ALLOW_SUPERUSER=1
ENV COMPOSER_MEMORY_LIMIT=-1