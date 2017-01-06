package core.technology.dao;

import core.technology.Technology;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@SuppressWarnings("unchecked")
@Repository
@Transactional
public class TechnologyDAOImpl implements TechnologyDAO {

    @Autowired
    SessionFactory sessionFactory;

    @Override
    public List<Technology> getTechnologies() {
        Session session = sessionFactory.getCurrentSession();
        return session.createQuery("from Technology").list();
    }

    @Override
    public void createTechnology(Technology technology) {
        Session session = sessionFactory.getCurrentSession();
        session.save(technology);
    }

    @Override
    public Technology getTechnology(Long id) {
        Session session = sessionFactory.getCurrentSession();
        return session.get(Technology.class, id);
    }

    @Override
    public void updateTechnology(Technology technology) {
        Session session = sessionFactory.getCurrentSession();
        session.update(technology);
    }

    @Override
    public void deleteTechnology(Long id) {
        Session session = sessionFactory.getCurrentSession();
        Technology technology = getTechnology(id);
        session.delete(technology);
    }
}