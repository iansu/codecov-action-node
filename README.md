# Codecov Action Node

GitHub Action that uploads coverage reports to [codecov.io](https://www.codecov.io/)

## Usage

Add a step to your GitHub Actions workflow YAML that uses this action:

```yml
steps:
  - uses: actions/checkout@master
  - uses: iansu/codecov-action-node@v1.0.0
    with:
      token: ${{secrets.CODECOV_TOKEN}} #required
      file: ./coverage.xml #optional
      flags: unittests #optional
      name: codecov-umbrella #optional
```

> Note: This assumes that you've set your Codecov token inside Settings > Secrets as `CODECOV_TOKEN`

### Arguments

| Input   | Description                               | Usage        |
| ------- | ----------------------------------------- | ------------ |
| `token` | Used to authorize coverage report uploads | **Required** |
| `file`  | Location of the coverage report           | Optional     |
| `flags` | Flag upload under a certain group         | Optional     |
| `name`  | Custom defined name for the upload        | Optional     |

See the Codecov [documentation](https://docs.codecov.io/docs) for details on how to use these arguments.

## License

The code in this project is released under the [MIT License](LICENSE).
