package core.language.dao;

import core.language.Language;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@SuppressWarnings("unchecked")
@Repository
@Transactional
public class LanguageDAOImpl implements LanguageDAO {

    @Autowired
    SessionFactory sessionFactory;

    @Override
    public List<Language> getLanguages() {
        Session session = sessionFactory.getCurrentSession();
        return session.createQuery("from Language").list();
    }

    @Override
    public void createLanguage(Language language) {
        Session session = sessionFactory.getCurrentSession();
        session.save(language);
    }

    @Override
    public Language getLanguage(Long id) {
        Session session = sessionFactory.getCurrentSession();
        return session.get(Language.class, id);
    }

    @Override
    public void updateLanguage(Language language) {
        Session session = sessionFactory.getCurrentSession();
        session.update(language);
    }

    @Override
    public void deleteLanguage(Long id) {
        Session session = sessionFactory.getCurrentSession();
        Language language = getLanguage(id);
        session.delete(language);
    }
}