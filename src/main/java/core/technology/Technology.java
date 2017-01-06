package core.technology;

import javax.persistence.*;

@Entity
@Table(name = "technology")
public class Technology {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column
    private Long id;
}