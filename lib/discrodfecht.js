
export function DiscordLoading(code) {
    if (!code) return
    const tokenUrl = 'https://discord.com/api/oauth2/token';
    const datatopost = {
        client_id: process.env.DISCORD_CLIENT_ID,
        client_secret: process.env.DISCORD_CLIENT_SECRET,
        grant_type: 'authorization_code',
        code: code,
        redirect_uri: process.env.REDIRECT_URI,
    }
    try {
        fetch(tokenUrl, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            method: "POST",
            body: JSON.stringify(datatopost),

        }).then((req) => req.json()).then((tokenResponse) => {

        }, (error) => {
            return error
        }
        )
    } catch (error) {
        return error
    }
}