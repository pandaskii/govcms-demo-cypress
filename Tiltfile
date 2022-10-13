# Welcome to GovCMS!
print("""
-----------------------------------------------------------------
✨ Hello GovCMS!
-----------------------------------------------------------------
""".strip())

GITHUB_TOKEN = os.getenv("GITHUB_TOKEN", default='')

docker_compose('./docker-compose.yml')

# Include sub sites.
docker_compose(['./sites/demo/docker-compose.yml'])

DOCKER_COMPOSE_LOCAL = os.path.exists('./docker-compose.override.yml')
if DOCKER_COMPOSE_LOCAL:
    docker_compose('./docker-compose.override.yml')

# Build local docker images.
docker_build('govcms.ops/drupal', './images/drupal/9.4')
docker_build('govcms.ops/govcms', './images/govcms/demo', build_args={'GITHUB_TOKEN': GITHUB_TOKEN})

dc_resource('demo', links=['demo.govcms.test'], labels=['0-Site'])

# Group the development services.
dc_resource('mariadb', labels=['1-Service'])
dc_resource('nginx-proxy', labels=['1-Service'])
dc_resource('mailhog', links=['mailhog.test'], labels=['1-Service'])
dc_resource('adminer', labels=['1-Service'])

# Good bye.
if config.tilt_subcommand == 'down':
    print("""
    -----------------------------------------------------------------
✨ GovCMS Ops Team
-----------------------------------------------------------------
    """.strip())