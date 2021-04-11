package ru.rz.thoughtstore.interfaces;

import ru.rz.thoughtstore.data.BasicThought;

import java.util.List;

public interface BookmarkStorage {

    BasicThought getThought(Integer id);

    void saveThought(BasicThought thought);

    List<BasicThought> listBookmarks();
}
