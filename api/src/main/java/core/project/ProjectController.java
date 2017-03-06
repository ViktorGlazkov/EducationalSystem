package core.project;

import core.project.service.ProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/project")
public class ProjectController {

    @Autowired
    ProjectService projectService;

    @RequestMapping(method = RequestMethod.GET)
    public List<Project> getProjects() {
        return projectService.getProjects();
    }

    @RequestMapping(method = RequestMethod.POST)
    public void createProject(@RequestBody Project project) {
        projectService.createProject(project);
    }

    @RequestMapping(value = {"/{id}"}, method = RequestMethod.GET)
    public Project readProject(@PathVariable Long id) {
        return projectService.getProject(id);
    }

    @RequestMapping(method = RequestMethod.PUT)
    public void updateProject(@RequestBody Project project) {
        projectService.updateProject(project);
    }

    @RequestMapping(value = {"/{id}"}, method = RequestMethod.DELETE)
    public void deleteProject(@PathVariable Long id) {
        projectService.deleteProject(id);
    }
}
