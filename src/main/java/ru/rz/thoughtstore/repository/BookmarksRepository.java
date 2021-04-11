package ru.rz.thoughtstore.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;
import ru.rz.thoughtstore.data.Bookmark;
import ru.rz.thoughtstore.data.dto.BookmarkDto;

import java.security.InvalidParameterException;
import java.util.Collection;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Repository
public interface BookmarksRepository extends PagingAndSortingRepository<Bookmark, Long> {

//    Map<Integer, Bookmark> bookmarks = new HashMap<>();
//
//    public BookmarksRepository() {
//        addBookmark(Bookmark.createNew("Test Bookmark 1", "Just a test, the first one"));
//        addBookmark(Bookmark.createNew("Test Bookmark 2", "Another one"));
//        for (int i = 0; i < 20; ++i) {
//            addBookmark(Bookmark.createNew("Test Bookmark Series # " + i,
//                    "Another one, serial one"));
//        }
//    }
//
//    public void addBookmark(Bookmark bookmark) {
//        bookmarks.put(bookmark.getId(), bookmark);
//    }
//
//    public Bookmark editBookmark(Integer id, BookmarkDto bookmarkDto) {
//        if (!bookmarks.containsKey(id))
//            throw new InvalidParameterException("id");
//        Bookmark bookmark = bookmarks.get(id);
//        return bookmark.edit(bookmarkDto);
//    }
//
//    public Collection<Bookmark> listBookmarks() {
//        return bookmarks.values();
//    }
//
//    public Integer getNumberOfPages(Integer countPerPage) {
//        return 1 + (bookmarks.size() - 1) / countPerPage;
//    }
//
//    public List<Bookmark> listBookmarksOnPage(Integer pageId, Integer countPerPage) {
//        return listBookmarks()
//                .stream()
//                .skip(countPerPage * pageId)
//                .limit(countPerPage)
//                .collect(Collectors.toList());
//    }
//
//    public void removeBookmark(Integer id) {
//        if (!bookmarks.containsKey(id))
//            throw new InvalidParameterException("id");
//        bookmarks.remove(id);
//    }
}
