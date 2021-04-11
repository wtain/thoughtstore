package ru.rz.thoughtstore.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import ru.rz.thoughtstore.data.Bookmark;
import ru.rz.thoughtstore.data.dto.BookmarkDto;
import ru.rz.thoughtstore.repository.BookmarksRepository;
import ru.rz.thoughtstore.view.PaginatedBookmarksView;

import java.util.Collection;
import java.util.List;

@CrossOrigin(origins = "${thoughtstore.frontendorigin}", maxAge = 3600)
@RestController
@RequestMapping("/api/bookmarks")
public class BookmarksController {

    @Autowired
    BookmarksRepository bookmarksRepository;

    @Autowired
    PaginatedBookmarksView bookmarksView;

    @GetMapping("/list")
    public Iterable<Bookmark> list() {
        return bookmarksView.listBookmarks();
    }

    @GetMapping("/pages/{size}/count")
    public Long getNumberOfPages(@PathVariable("size") Integer sizeOfPage) {
        return bookmarksView.getNumberOfPages(sizeOfPage);
    }

    @GetMapping("/page/{size}/{pageNum}")
    public List<Bookmark> viewPage(@PathVariable("size") Integer sizeOfPage,
                                   @PathVariable("pageNum") Integer pageNumber) {
        return bookmarksView.listBookmarksOnPage(pageNumber, sizeOfPage);
    }

    @PutMapping(value = "/add", produces = MediaType.APPLICATION_JSON_VALUE)
    public Bookmark add(@RequestBody BookmarkDto bookmarkDto) {
        return bookmarksRepository.save(new Bookmark(bookmarkDto));
        //Bookmark bookmark = Bookmark.createNew(bookmarkDto);
        //bookmarksRepository.addBookmark(bookmark);
        //return bookmark;
    }

    @PutMapping(value = "/edit/{id}")
    public Bookmark edit(@PathVariable("id") Long id,
                     @RequestBody BookmarkDto bookmarkDto) {
        Bookmark bookmark = bookmarksRepository.findById(id).get();
        bookmark.setSummary(bookmarkDto.getSummary());
        bookmark.setDescription(bookmarkDto.getDescription());
        return bookmarksRepository.save(bookmark);
        //return bookmarksRepository.editBookmark(id, bookmarkDto);
    }

    @DeleteMapping(value = "/delete/{id}")
    public void delete(@PathVariable("id") Long id) {
        bookmarksRepository.delete(bookmarksRepository.findById(id).get());
        //bookmarksRepository.removeBookmark(id);
    }
}
