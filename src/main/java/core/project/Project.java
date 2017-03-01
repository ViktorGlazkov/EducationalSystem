package core.project;

import core.language.Language;
import core.technology.Technology;
import org.codehaus.jackson.annotate.JsonManagedReference;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "project")
public class  Project {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column
    private Long id;

    private String name;
    private String description;

    @ManyToMany(fetch = FetchType.EAGER, cascade=CascadeType.ALL)
    @JoinTable(name="projects_languages", joinColumns=@JoinColumn(name="project_id"), inverseJoinColumns=@JoinColumn(name="language_id"))
    @JsonManagedReference(value = "project-language")
    private Set<Language> languages = new HashSet<Language>();

    @ManyToMany(fetch = FetchType.EAGER, cascade=CascadeType.ALL)
    @JoinTable(name="projects_technologies", joinColumns=@JoinColumn(name="project_id"), inverseJoinColumns=@JoinColumn(name="technology_id"))
    @JsonManagedReference(value = "project-technology")
    private Set<Technology> technologies = new HashSet<Technology>();

    public Project(){}

    public Project(String name) {
        this.name = name;
    }

    public Project(String name, String description) {
        this.name = name;
        this.description = description;
    }

    public Project(String name, String description, Set<Technology> technologies) {
        this.name = name;
        this.description = description;
        this.technologies = technologies;
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getDescription() {
        return description;
    }

    public Set<Technology> getTechnologies() {
        return technologies;
    }

    public void setTechnologies(Set<Technology> technologies) {
        this.technologies = technologies;
    }

    public Set<Language> getLanguages() {
        return languages;
    }

    public void setLanguages(Set<Language> languages) {
        this.languages = languages;
    }
}