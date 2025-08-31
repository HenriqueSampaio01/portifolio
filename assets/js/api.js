
async function fetchProfileData() {
    const url = 'https://github.dev/HenriqueSampaio01/portifolio/blob/main/data/profile.json';
    const response = await fetch(url)
    const profileData = await response.json()
    return profileData
}
