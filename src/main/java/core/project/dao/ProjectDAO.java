package core.project.dao;

import core.project.Project;

import java.util.List;

public interface ProjectDAO {
    List<Project> getProjects();

    void createProject(Project project);

    Project getProject(Long id);

    void updateProject(Project project);

    void deleteProject(Long id);
}
