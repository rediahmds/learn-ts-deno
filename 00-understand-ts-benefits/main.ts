type VisitsData = {
  visits: Array<{
    page: {
      caption: string;
    };
  }>;
  user: {
    name: string;
  };
};

function logVisits(data: VisitsData) {
  data.visits.forEach((visit) => console.log(visit.page.caption, data.user.name));
}

logVisits({
  visits: [
    {
      page: {
        caption: 'Page 1',
      },
    },
    {
      page: {
        caption: 'Page 2',
      },
    },
  ],
  user: {
    name: 'Bob',
  },
});
