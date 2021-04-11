package ru.rz.thoughtstore.view;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Component;
import ru.rz.thoughtstore.data.Bookmark;
import ru.rz.thoughtstore.repository.BookmarksRepository;

import java.util.Collection;
import java.util.List;

@Component
public class PaginatedBookmarksView {

    @Autowired
    BookmarksRepository bookmarksRepository;

    public Iterable<Bookmark> listBookmarks() {
        return bookmarksRepository.findAll();
    }

    public Long getNumberOfPages(Integer countPerPage) {
        return 1 + (bookmarksRepository.count() - 1) / countPerPage;
    }

    public List<Bookmark> listBookmarksOnPage(Integer pageId, Integer countPerPage) {
        return bookmarksRepository
                .findAll(PageRequest.of(pageId, countPerPage))
                .getContent();
//        return listBookmarks()
//                .stream()
//                .skip(countPerPage * pageId)
//                .limit(countPerPage)
//                .collect(Collectors.toList());
    }

}
