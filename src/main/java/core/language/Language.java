package core.language;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.sun.istack.internal.Nullable;
import core.project.Project;
import core.technology.Technology;
import org.codehaus.jackson.annotate.JsonManagedReference;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "language")
public class Language {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column
    private Long id;

    private String name;

    @Nullable
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "language", fetch = FetchType.EAGER)
    @JsonManagedReference(value = "language-technology")
    private Set<Technology> technologies;

    @ManyToMany(fetch = FetchType.EAGER, cascade=CascadeType.ALL, mappedBy="languages")
    @JsonBackReference(value = "project-language")
    private Set<Project> projects = new HashSet<Project>();

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
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