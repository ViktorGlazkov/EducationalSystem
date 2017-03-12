package core.user.service;

import core.user.User;
import core.user.UserFactory;
import core.user.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.security.Principal;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public void addUser(User user) {
        userRepository.save(user);
    }

    @Override
    public void addUser(Principal principal) {
        User user = UserFactory.extractUserFromPrincipal(principal);
        userRepository.save(user);
    }

    @Override
    public User getUser(Long id) {
        return null;
    }

    @Override
    public User getUserByEmail(String email) {
        return userRepository.findByEmail(email);
    }
}
