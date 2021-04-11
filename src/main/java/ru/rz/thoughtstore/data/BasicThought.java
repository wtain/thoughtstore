package ru.rz.thoughtstore.data;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.Date;

@Getter
@AllArgsConstructor
@NoArgsConstructor
public class BasicThought {

    Integer id;

    String name;

    Date created;
    Date updated;

    int version;

    static Integer nextId = 0;

    public static BasicThought createNew(String name) {
        Date now = new Date();
        return new BasicThought(nextId++, name, now, now, 1);
    }
}
