function make_album(artist: string, title: string, tracks?: number) {
    if (tracks) {
      return { artist, title, tracks };
    } else {
      return { artist, title };
    }
  }
  
  console.log(make_album("Artist1", "Title1"));
  console.log(make_album("Artist2", "Title2"));
  console.log(make_album("Artist3", "Title3", 5));
  