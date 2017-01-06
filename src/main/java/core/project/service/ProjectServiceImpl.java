package core.project.service;

import core.project.Project;
import core.project.dao.ProjectDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProjectServiceImpl implements ProjectService {
    @Autowired
    ProjectDAO projectDAO;

    @Override
    public List<Project> getProjects() {
        return projectDAO.getProjects();
    }

    @Override
    public void createProject(Project project) {
        projectDAO.createProject(project);
    }

    @Override
    public Project getProject(Long id) {
        return projectDAO.getProject(id);
    }

    @Override
    public void updateProject(Project project) {
        projectDAO.updateProject(project);
    }

    @Override
    public void deleteProject(Long id) {
        projectDAO.deleteProject(id);
    }
}