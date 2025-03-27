export async function GET(req, res, next){
    let users = [
        {
            id:1,
            name: "Goral",
            email: "dodiyagoral@gmail.com",
        },
        {
            id:2,
            name: "Zeel",
            email: "dharmi1410@gmail.com",
        }
    ];

    let data = JSON.stringify(users);

    return new Response(data, { status: 200})
}