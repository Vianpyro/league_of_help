const user_lang = navigator.language || navigator.userLanguage;
const base_url = 'https://ddragon.leagueoflegends.com'

async function get_json_from_api(source_url) {
    const request = await fetch(source_url);
    const response = await request.json();
    return response;
}
