import { createUserService, readUsersService, readUserService, updateUserService, deleteUserService, User } from "../services/userService";

export const addUsers = async (data: User[]) => {
    data.forEach(async (datum: Omit<User, "id">) => {
        const body: Omit<User, "id"> = {
            "name": datum.name,
            "email": datum.email,
            "password": datum.password,
        };

        // console.log("user.name", user.name)
        await createUserService(body);
    });
}