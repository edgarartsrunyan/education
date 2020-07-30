import axios from "axios";

export const findUniversityByName = async (name) => {
  const result = await axios.get(
    `http://universities.hipolabs.com/search?name=${name}`
  );

  return result.data;
};
