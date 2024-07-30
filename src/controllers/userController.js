let user = [
    {id: 1, name: "Carlos Terceiro", email: "carlos.terceiro@email.com"},
    {id: 2, name: "Natan Primeiro", email: "natan.primeiro@email.com"}
]

const getAllUsers = (req, res) => {
    res.json(user);
};

const getUserById = (req, res, next) => {
    const userId = parseInt(req.params.id);
    const user = users.find((u) => u.id === userId);

    if (!user) {
        const error = new Error("Usuário não encontrado");
        error.statusCode = 404;
        return next(error);
    }
    res.json(user);
};

module.exports = {
    getAllUsers,
    getUserById
}
