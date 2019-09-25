const core = require('@actions/core');
const codecov = require('codecov/lib/codecov');

try {
  const name = core.getInput('name');
  const token = core.getInput('token');
  const file = core.getInput('file');
  const flags = core.getInput('flags');
  const args = { options: {} };

  console.log(name, file, flags);

  if (name) {
    args.options.name = name;
  }

  if (token) {
    args.options.token = token;
  }

  if (file) {
    args.options.file = file;
  }

  if (flags) {
    args.options.flags = flags;
  }

  codecov.upload(args);
} catch (error) {
  core.setFailed(error.message);
}
