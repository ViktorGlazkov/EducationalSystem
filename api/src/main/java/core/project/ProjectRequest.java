package core.project;

import core.technology.Technology;

import java.util.List;

public class ProjectRequest {

    private String name;
    private String description;
    private List<Long> languages;
    private List<Technology> technologies;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public List<Long> getLanguages() {
        return languages;
    }

    public void setLanguages(List<Long> languageIds) {
        this.languages = languageIds;
    }

    public List<Technology> getTechnologies() {
        return technologies;
    }

    public void setTechnologies(List<Technology> technologyIds) {
        this.technologies = technologyIds;
    }
}
