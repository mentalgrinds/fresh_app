Prescription = new Mongo.Collection('prescription');


Meteor.methods({
  sendReminder: function (to, subject, text) {
    this.unblock();

    Email.send({
      to: to,
      from: Meteor.user().emails[0].address,
      subject: subject,
      text: text
    });
  }
});

// In your client code: asynchronously send an email
// Meteor.call('sendReminder',
//             '8083543054@txt.att.net',
//             'FRxsh Reminder',
//             'message content');


Meteor.startup(function () {
  var seedItems = [
    {
      "name": "Pain drug",
      "expirationDate": "Sat Feb 14 2015 12:00:00 GMT-1000 (HST)"
    },
    {
      "name": "Allergy Medication",
      "expirationDate": "Tue Mar 17 2015 12:00:00 GMT-1000 (HST)"
    },
    {
      "name": "Heart Medication",
      "expirationDate": "Sat Feb 14 2015 12:00:00 GMT-1000 (HST)"
    },
    {
      "name": "Cough syrup",
      "expirationDate": "Tue Jan 11 2016 12:00:00 GMT-1000 (HST)"
    }
  ];

  // if (Prescription === undefined || Prescription.find().length === 0) {
    seedItems.forEach(function (item) {
      Prescription.insert({
        createdAt: new Date(),
        name: item.name,
        expirationDate: item.expirationDate
      });
    });
  // }
});