package ru.rz.thoughtstore.data;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import ru.rz.thoughtstore.data.dto.BookmarkDto;

import javax.persistence.*;
import java.security.InvalidParameterException;
import java.sql.Time;
import java.util.Date;

@Getter
//@AllArgsConstructor
@NoArgsConstructor
@Setter
@Entity
@Table(name = "bookmark")
public class Bookmark {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    Long id;
    String summary;
    String description;

    Date created;

    //static Integer nextId = 0;

    public Bookmark(String summary, String description) {
        if (summary.isEmpty()) {
            throw new InvalidParameterException("summary");
        }
        this.summary = summary;
        this.description = description;
        this.created = new Date();
    }

    public Bookmark(BookmarkDto dto) {
        this(dto.getSummary(), dto.getDescription());
    }

//    public static Bookmark createNew(String summary, String description) {
//        if (summary.isEmpty()) {
//            throw new InvalidParameterException("summary");
//        }
//        return new Bookmark(++nextId, summary, description, new Date());
//    }

    public Bookmark edit(BookmarkDto bookmarkDto) {
        if (bookmarkDto.getSummary().isEmpty()) {
            throw new InvalidParameterException("summary");
        }
        setSummary(bookmarkDto.getSummary());
        setDescription(bookmarkDto.getDescription());
        return this;
    }

//    public static Bookmark createNew(BookmarkDto dto) {
//        return createNew(dto.getSummary(), dto.getDescription());
//    }
}
