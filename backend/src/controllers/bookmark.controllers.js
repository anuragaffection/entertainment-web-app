const { Bookmark } = require('../models/bookmark.models.js')


const checkBookmark = async (req, res) => {
    const { id } = req.params;
    try {
        const existingBookmark = await Bookmark.findOne({ id });

        if (existingBookmark) {
            // If bookmark with the same id exists, return an error
            return res.status(200).json({
                success: true,
                message: 'Bookmark with this ID already exists',
                isBookmarkExist: true
            });
        }

        return res.status(200).json({
            success: true,
            message: 'No Bookmark Found',
            isBookmarkExist: false
        });

    } catch (error) {
        // console.error('Error adding bookmark:', error);
        res.status(500).json({
            message: 'Internal server error',
            error: error
        });
    }
}

// adding bookmarks 
const addBookmark = async (req, res) => {
    const { id, title, image, isAdult, mediaType, releaseDate } = req.body;

    try {
        const existingBookmark = await Bookmark.findOne({ id });

        if (existingBookmark) {
            // If bookmark with the same id exists, return an error
            return res.status(400).json({
                success: false,
                message: 'Bookmark with this ID already exists'
            });
        }


        const bookmark = new Bookmark({
            // req.user , this is set at the time of authentication 
            user: req.user,
            id,
            title,
            image,
            isAdult,
            mediaType,
            releaseDate
        });

        // saving to db 
        await bookmark.save();

        // response 
        res.status(201).json({
            success: true,
            message: 'Bookmark added successfully',
            data: bookmark
        });
    } catch (error) {
        // console.error('Error adding bookmark:', error);
        res.status(500).json({
            message: 'Internal server error',
            error: error
        });
    }
}


// deleting bookmarks 
const deleteBookmark = async (req, res) => {
    const id = req.params.id;

    try {
        await Bookmark.findOneAndDelete({ id: id });
        res.json({ message: 'Bookmark deleted successfully' });
    } catch (error) {
        // console.error('Error deleting bookmark:', error);
        res.status(500).json({
            success: false,
            message: 'Internal server error',
            error: error
        });
    }
}



// get bookmarks of logged in user 
const getBookmark = async (req, res) => {
    // req.user , at the time of authentication 
    const userId = req.user._id;

    try {
        const bookmarks = await Bookmark.find({ user: userId });
        res.status(200).json({
            success: true,
            message: "Bookmarks data of currently loged in user",
            data: bookmarks
        });
    } catch (error) {
        // console.error('Error getting bookmarks:', error);
        res.status(500).json({
            success: false,
            message: 'Internal server error',
            error: error
        });
    }
}


// searching of bookmarks 
const filterBookmark = async (req, res) => {
    // at the time of authentication 
    const userId = req.user._id;

    // from params, see the route 
    const title = req.params.searchQuery;

    try {
        const bookmarks = await Bookmark.find({ user: userId, title: { $regex: title, $options: 'i' } });
        res.json(bookmarks);
    } catch (error) {
        // console.error('Error filtering bookmarks:', error);
        res.status(500).json({
            message: 'Internal server error'
        });
    }
}

module.exports = { checkBookmark, addBookmark, deleteBookmark, getBookmark, filterBookmark }