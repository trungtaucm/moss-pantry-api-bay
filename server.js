const PROJECT = "moss-pantry-api-bay";
const PROFILE = "0015";
function run(value = 'ready') {
  return { project: PROJECT, profile: PROFILE, value };
}
console.log(run());
