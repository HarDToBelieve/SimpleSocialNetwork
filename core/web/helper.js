const RESOURCE_FOLDER = '/SimpleSocialNetwork/';

const TOKEN_FILE = RESOURCE_FOLDER + 'token.json';

const resourceURL = 'http://161.202.20.61:5000/';

const createNoneExistInfoFiles = (paths, data) => {
    paths.map(path => {
        if (!fs.existsSync(path)) {
            jsonfile.writeFileSync(path, data);
        }
    });
};

module.exports = {
  RESOURCE_FOLDER,
  TOKEN_FILE,
  resourceURL,
  createNoneExistInfoFiles
};
