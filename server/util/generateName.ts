import {
  uniqueNamesGenerator,
  Config,
  adjectives,
  colors,
} from "unique-names-generator";

const customConfig: Config = {
  dictionaries: [adjectives, colors],
  separator: "-",
  length: 2,
};

export const generateName = () => {
  return uniqueNamesGenerator(customConfig);
};
