FROM govcms.ops/drupal

ARG GITHUB_TOKEN

WORKDIR /app

ADD https://github.com/govCMS/GovCMS/archive/refs/heads/2.x-develop.zip /app
RUN unzip 2.x-develop.zip && mv GovCMS-2.x-develop/* . && rm -r GovCMS-2.x-develop

ENV COMPOSER_ALLOW_SUPERUSER=1
ENV COMPOSER_MEMORY_LIMIT=-1

# Set the Github OAuth token only when the variable is set.
RUN [ ! -z "$GITHUB_TOKEN" ]  && \
    composer config -g github-oauth.github.com $GITHUB_TOKEN || \
    echo "Personal Github OAuth token is not set."

RUN composer require palantirnet/drupal-rector drupal/upgrade_status --dev

# Install GovCMS.
COPY --from=drupal:9-php8.1 /opt/drupal/web/core/install.php /app/web/core/install.php
COPY --from=drupal:9-php8.1 /opt/drupal/web/sites/default/default.settings.php /app/web/sites/default/default.settings.php

RUN set -eux; \
  rm -rf /opt/drupal; \
  ln -sf /app /opt/drupal;