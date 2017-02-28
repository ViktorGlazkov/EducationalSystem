package core.language;

import com.sun.istack.internal.Nullable;
import core.technology.Technology;
import org.codehaus.jackson.annotate.JsonManagedReference;

import javax.persistence.*;
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
    @JsonManagedReference
    private Set<Technology> technologies;

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
}