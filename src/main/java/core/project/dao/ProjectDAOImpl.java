package core.project.dao;

import core.project.Project;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@SuppressWarnings("unchecked")
@Repository
@Transactional
public class ProjectDAOImpl implements ProjectDAO {

    @Autowired
    SessionFactory sessionFactory;

    @Override
    public List<Project> getProjects() {
        Session session = sessionFactory.getCurrentSession();
        return session.createQuery("from Project").list();
    }

    @Override
    public void createProject(Project project) {
        Session session = sessionFactory.getCurrentSession();
        session.save(project);
    }

    @Override
    public Project getProject(Long id) {
        Session session = sessionFactory.getCurrentSession();
        return session.get(Project.class, id);
    }

    @Override
    public void updateProject(Project project) {
        Session session = sessionFactory.getCurrentSession();
        session.update(project);
    }

    @Override
    public void deleteProject(Long id) {
        Session session = sessionFactory.getCurrentSession();
        Project project = getProject(id);
        session.delete(project);
    }
}