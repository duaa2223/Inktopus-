const User = require('../Models/User');
const PublisherApplication = require('../Models/publisherApplicationModel');

// Submit a new publisher application
const applyPublisher = async (req, res) => {
  try {
    const { bio, yearsOfExperience } = req.body;
    const userId = req.user.id;

    const user = await User.findById(userId);
    if (user.publisherApplicationStatus !== 'none') {
      return res.status(400).json({ message: 'You have already submitted an application' });
    }

    const newApplication = new PublisherApplication({
      user: userId,
      bio,
      yearsOfExperience
    });

    await newApplication.save();

    user.publisherApplicationStatus = 'pending';
    await user.save();

    res.status(201).json({ message: 'Application submitted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error submitting application', error: error.message });
  }
};

// Get all publisher applications (admin only)
const getAllApplications = async (req, res) => {
  try {
    const applications = await PublisherApplication.find().populate('user', 'username email');
    res.json(applications);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching applications', error: error.message });
  }
};



// Update application status (admin only)
const updateApplicationStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status, adminNotes } = req.body;

    const application = await PublisherApplication.findById(id);
    if (!application) {
      return res.status(404).json({ message: 'Application not found' });
    }

    // Store the previous status before updating
    const previousStatus = application.status;

    // Update application status and notes
    application.status = status;
    application.adminNotes = adminNotes;
    await application.save();

    // Find the user
    const user = await User.findById(application.user);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Update user's application status
    user.publisherApplicationStatus = status;

    // Update user role based on the status change
    if (status === 'approved') {
      user.role = 'publisher';
    } else if (status === 'rejected' && previousStatus === 'approved') {
      // Only change role back to reader if user was previously approved
      user.role = 'reader';
    }

    await user.save();

    res.json({ 
      message: 'Application updated successfully',
      userRole: user.role // Return the updated role for verification
    });
  } catch (error) {
    res.status(500).json({ 
      message: 'Error updating application', 
      error: error.message 
    });
  }
};


// Get a specific publisher by ID
const getPublisherById = async (req, res) => {
  try {
    const { id } = req.params;

    const publisher = await User.findById(id).select('username email role publisherApplicationStatus');
    if (!publisher || publisher.role !== 'publisher') {
      return res.status(404).json({ message: 'Publisher not found' });
    }

    res.json(publisher);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching publisher', error: error.message });
  }
};



module.exports = {
  applyPublisher,
  getAllApplications,
  updateApplicationStatus,
  getPublisherById
};
