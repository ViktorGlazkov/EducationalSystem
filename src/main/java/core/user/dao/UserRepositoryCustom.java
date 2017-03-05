package core.user.dao;

import core.user.User;

public interface UserRepositoryCustom {
    User loadUserByUsername(String username);
    User findByName(String name);
}
