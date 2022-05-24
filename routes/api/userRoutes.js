const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  deleteFriend
} = require('../../controllers/userController');

// /api/users
router.route('/').get(getUsers).post(createUser);

// /api/users/:userId
router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteUser)

//api/users/:userId/friends/:friendsId
router.route('/:userid/friends/:friendId').delete(deleteFriend);
router.route('/:userid/friends').post(addFriend)
module.exports = router;
