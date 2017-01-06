package core.project;

import core.project.service.ProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ProjectController {
    @Autowired
    ProjectService projectService;

    @RequestMapping(value = {"/", "/projects"}, method = RequestMethod.GET)
    @ResponseBody
    public List<Project> getProjects() {
        return projectService.getProjects();
    }

    @RequestMapping(value = {"/project"}, method = RequestMethod.POST)
    public void createProject(@RequestBody Project project) {
        projectService.createProject(project);
    }

    @RequestMapping(value = {"/project/{id}"}, method = RequestMethod.GET)
    public void readProject(@PathVariable Long id) {
        projectService.getProject(id);
    }

    @RequestMapping(value = {"/project"}, method = RequestMethod.PUT)
    public void updateProject(@RequestBody Project project) {
        projectService.updateProject(project);
    }

    @RequestMapping(value = {"/project/{id}"}, method = RequestMethod.DELETE)
    public void deleteProject(@PathVariable Long id) {
        projectService.deleteProject(id);
    }
}
