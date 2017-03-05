package core.user.dao;

import core.user.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.CrudRepository;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Path;
import javax.persistence.criteria.Root;
import javax.transaction.Transactional;
import java.util.List;

public class UserRepositoryImpl implements UserRepositoryCustom {

    @Autowired
    UserRepository userRepository;

    @PersistenceContext
    EntityManager entityManager;

    @Override
    @Transactional
    public User loadUserByUsername(String username) throws UsernameNotFoundException
    {
        User user = this.findByName(username);
        if (null == user) {
            throw new UsernameNotFoundException("The user with name " + username + " was not found");
        }

        return user;
    }

    @Override
    @Transactional
    public User findByName(String name)
    {
        final CriteriaBuilder builder = entityManager.getCriteriaBuilder();
        final CriteriaQuery<User> criteriaQuery = builder.createQuery(User.class);

        Root<User> root = criteriaQuery.from(User.class);
        Path<String> namePath = root.get("name");
        criteriaQuery.where(builder.equal(namePath, name));

        TypedQuery<User> typedQuery = entityManager.createQuery(criteriaQuery);
        List<User> users = typedQuery.getResultList();

        if (users.isEmpty()) {
            return null;
        }

        return users.iterator().next();
    }
}
