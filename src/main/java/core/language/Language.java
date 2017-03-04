package core.language;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.sun.istack.internal.Nullable;
import core.project.Project;
import core.technology.Technology;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
public class Language {

    @Id
    private Long id;
    private String name;

    @OneToMany(mappedBy = "language", cascade = CascadeType.ALL)
    private Set<Technology> technologies;
    @ManyToMany(mappedBy = "languages")
    private Set<Project> projects;

    public Language() {
    }

    public Language(Long id, String name) {
        this.id = id;
        this.name = name;
    }

    public Language(Long id, String name, Set<Technology> technologies, Set<Project> projects) {
        this.id = id;
        this.name = name;
        this.technologies = technologies;
        this.projects = projects;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }


    public Set<Technology> getTechnologies() {
        return technologies;
    }

    public void setTechnologies(Set<Technology> technologies) {
        this.technologies = technologies;
    }


    public Set<Project> getProjects() {
        return projects;
    }

    public void setProjects(Set<Project> projects) {
        this.projects = projects;
    }
}