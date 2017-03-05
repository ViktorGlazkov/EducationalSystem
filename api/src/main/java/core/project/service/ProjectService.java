package core.project.service;

import core.project.Project;

import java.util.List;

public interface ProjectService {

    List<Project> getProjects();

    void createProject(Project project);

    Project getProject(Long id);

    void updateProject(Project project);

    void deleteProject(Long id);
}
