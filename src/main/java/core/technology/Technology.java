package core.technology;

import com.fasterxml.jackson.annotation.JsonBackReference;
import core.language.Language;
import core.project.Project;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "technology")
public class Technology {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column
    private Long id;

    private String name;

    @ManyToOne
    @JsonBackReference(value = "language-technology")
    private Language language;

    @ManyToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL, mappedBy = "technologies")
    @JsonBackReference(value = "project-technology")
    private Set<Project> projects = new HashSet<Project>();

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