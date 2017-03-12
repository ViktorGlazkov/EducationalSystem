package core.user.service;

import core.user.User;

import java.security.Principal;

public interface UserService {
    void addUser(User user);
    void addUser(Principal principal);
    User getUser(Long id);
    User getUserByEmail(String email);
}
