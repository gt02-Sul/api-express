
let users = [
    {id: 1, name: "Carlos Terceiro", email: "carlos.terceiro@email.com"},
    {id: 2, name: "Natan Primeiro", email: "natan.primeiro@email.com"}
]

const getAllUsers = (req, res) => {
    res.json(users);
};

const getUserById = (req, res, next) => {
    const userId = parseInt(req.params.id);
    const user = users.find((u) => u.id == userId);
    if(!user) {
        const error = new Error("Usuário não encontrado!");
        error.statusCode = 404;
        return next(error);
    }
    res.json(user);
};

const createUser = (req, res) => {
    const {name, email} = req.body;
    if(!name || !email) {
        return res
        .status(400)
        .json({error: "Nome e email são obrigatórios"});
    }
    const newUser = {
        id: users.length + 1,
        name,
        email
    }
    users.push(newUser);
    res.status(201).json(newUser);
};

const updateUser = (req, res) => {
    const userId = parseInt(req.params.id);
    const {name, email} = req.body;

    const userIndex = users.findIndex((u) => u.id == userId);
    if (userIndex === -1) {
        return res.status(400).json({error: "Usuário não encontrado"});
    }
    users[userIndex] = {
        ...users[userIndex],
        name,
        email
    };
    res.json(users[userIndex]);
}

const deleteUser = (req, res) => {
    const userId = parseInt(req.params.id);
    users = users.filter((u) => u.id !== userId);
    res.json({message: "Usuário deletado com sucesso!"})
}

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
}
