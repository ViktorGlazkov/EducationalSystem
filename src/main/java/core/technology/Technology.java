package core.technology;

import com.fasterxml.jackson.annotation.JsonBackReference;
import core.language.Language;
import core.project.Project;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
public class Technology {

    @Id
    private Long id;
    private String name;

    @ManyToOne
    @JoinColumn(name = "language_id")
    private Language language;

    @ManyToMany(mappedBy = "languages")
    private Set<Project> projects;

    public Technology() {
    }

    public Technology(String name) {
        this.name = name;
    }

    public Technology(String name, Language language) {
        this.name = name;
        this.language = language;
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


    public Language getLanguage() {
        return language;
    }


    public Set<Project> getProjects() {
        return projects;
    }

    public void setLanguage(Language language) {
        this.language = language;
    }

    public void setProjects(Set<Project> projects) {
        this.projects = projects;
    }
}