# Windshaft-TerraSeer

Windshaft tailored for TerraSeer.

## Installation

1. [Install Docker](https://docs.docker.com/installation/) and [Compose](https://docs.docker.com/compose/#installation-and-set-up).

2. Clone this repository and change the working directory.

    ``` shell
    git clone https://github.com/TerraSeer/windshaft-terraseer.git
    cd windshaft-terraseer
    ```

4. Build the images and start up the services.

    ``` shell
    docker-compose build && docker-compose up
    ```

## Usage

Open the service at `$(boot2docker ip)` on Boot2Docker or `localhost` on GNU/Linux.

``` shell
open "http://$(boot2docker ip 2> /dev/null || echo localhost)"
```

## Support

Please [open an issue](https://github.com/TerraSeer/windshaft-terraseer/issues/new) for support.

## Contributing

Please contribute using [Github Flow](https://guides.github.com/introduction/flow/). Create a branch, add commits, and [open a pull request](https://github.com/TerraSeer/windshaft-terraseer/compare/).
