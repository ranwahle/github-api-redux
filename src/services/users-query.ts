export async function searchUser(query: string) {
    const response = await fetch(`https://api.github.com/search/users?q=${query}`);
    const data = await response.json();
    return data;
}