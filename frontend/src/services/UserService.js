
export async function getAllUsers() {

    const response = await fetch('/backend/users');
    return await response.json();
}

export async function createUser(data) {
    const response = await fetch(`/backend/user`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({user: data})
      })
    return await response.json();
}