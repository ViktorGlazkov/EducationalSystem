package core.technology;

import com.fasterxml.jackson.annotation.JsonBackReference;
import core.language.Language;

import javax.persistence.*;

@Entity
@Table(name = "technology")
public class Technology {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column
    private Long id;

    private String name;

    @ManyToOne
    @JsonBackReference
    private Language language;

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public Language getLanguage() {
        return language;
    }

    public void setLanguage(Language language) {
        this.language = language;
    }
}