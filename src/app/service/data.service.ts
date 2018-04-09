import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

import { Item, ServerDataFull } from '../model/models';


@Injectable()
export class DataService {

  private items : Item[];
  private search : string = null;
  private numPage : number = 0;


  constructor( private http : HttpClient) { }

  public setSearch(input : string) : void {
    if(input == "" && this.search != null) return; 
    this.search = this.addressBuilder(input)
  }

  public setNumPage(n : number) {
    this.numPage = n;
  }

  public getNumPage() { return this.numPage; }

  public getData(n : number, idPrev? : string, idNext? : string ) : Observable<ServerDataFull> {
    this.numPage = n;
    var address : string = this.search+"?limit="+n;;
    if(idPrev) {
      address += "&before=t3_"+idPrev;
    }
    if(idNext) {
      address += "&after=t3_"+idNext;
    }
    return this.http.get<ServerDataFull>(address)
    .pipe(
      tap(result => console.log("DATA_GET")),
      catchError(this.handleError<ServerDataFull>('DATA_GET', null))
    );
  }

  public buildData(data : ServerDataFull) : Item[] {
    if(data == null) {
      console.error("data null");
      return [];
    }   

    var items : Array<Item> = new Array<Item>();
    data.data.children.forEach(element => {
      items.push(element.data);
    });
    return items;
  }

  /*public setFocus(item : Item ) : void {
    this.focus = item;
  }

  public getFocusItem() : Item {
    return this.focus;
  }

  public clearFocus() : void {
    this.focus = null;
  }*/

  private addressBuilder(s : string) : string {
    if(s === "") s = "sweden";
    return "https://www.reddit.com/r/"+s+".json";
  } 

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(operation);
      console.error(error);
      return of(result as T);
    };
  }

}

/*const res : any = {
  kind: "Listing",
  data: {
  after: "t3_89bohr",
  dist: 26,
  modhash: "",
  whitelist_status: "all_ads",
  children: [
  {
  kind: "t3",
  data: {
  subreddit_id: "t5_2qofe",
  approved_at_utc: null,
  send_replies: false,
  mod_reason_by: null,
  banned_by: null,
  num_reports: null,
  removal_reason: null,
  thumbnail_width: null,
  subreddit: "sweden",
  selftext: "Det är dags att byta banner på sweddit, eftersom de inte längre är påsk. Men eftersom vi inte har fixat någon snygg att byta till ännu så får ni användare fixa detta. \"åh vad kul med delaktighet\" tänker ni säkert. Vilket är ett bra svepskäl till lathet. Iaf. fixa en bannar som är 1920x290. Den som har flest upvotes imorgon (onsdag) klockan 21:00 vinner. Och blir banner i några dagar. I övrigt vinner man inget. ",
  likes: null,
  suggested_sort: null,
  user_reports: [ ],
  secure_media: null,
  is_reddit_media_domain: false,
  saved: false,
  id: "89hivg",
  banned_at_utc: null,
  mod_reason_title: null,
  view_count: null,
  archived: false,
  clicked: false,
  no_follow: false,
  author: "Coffeh",
  num_crossposts: 0,
  link_flair_text: null,
  mod_reports: [ ],
  can_mod_post: false,
  is_crosspostable: false,
  pinned: false,
  score: 89,
  approved_by: null,
  over_18: false,
  report_reasons: null,
  domain: "self.sweden",
  hidden: false,
  thumbnail: "self",
  edited: 1522784676,
  link_flair_css_class: null,
  author_flair_css_class: "flag goteborg",
  contest_mode: true,
  gilded: 0,
  downs: 0,
  brand_safe: true,
  secure_media_embed: { },
  media_embed: { },
  author_flair_text: "Göteborg",
  stickied: true,
  visited: false,
  can_gild: false,
  thumbnail_height: null,
  parent_whitelist_status: "all_ads",
  name: "t3_89hivg",
  spoiler: false,
  permalink: "/r/sweden/comments/89hivg/ey_yo_kids_fixa_en_banner_åt_mig_plz/",
  subreddit_type: "public",
  locked: false,
  hide_score: false,
  created: 1522812437,
  url: "https://www.reddit.com/r/sweden/comments/89hivg/ey_yo_kids_fixa_en_banner_åt_mig_plz/",
  whitelist_status: "all_ads",
  quarantine: false,
  subreddit_subscribers: 195848,
  created_utc: 1522783637,
  subreddit_name_prefixed: "r/sweden",
  ups: 89,
  media: null,
  num_comments: 51,
  is_self: true,
  title: "Ey yo kids! Fixa en banner åt mig plz.",
  mod_note: null,
  is_video: false,
  distinguished: "moderator"
  }
  },
  {
  kind: "t3",
  data: {
  subreddit_id: "t5_2qofe",
  approved_at_utc: null,
  send_replies: false,
  mod_reason_by: null,
  banned_by: null,
  num_reports: null,
  removal_reason: null,
  thumbnail_width: 140,
  subreddit: "sweden",
  selftext_html: null,
  selftext: "",
  likes: null,
  suggested_sort: null,
  crosspost_parent_list: [
  {
  subreddit_id: "t5_2qh4j",
  approved_at_utc: null,
  send_replies: true,
  mod_reason_by: null,
  banned_by: null,
  num_reports: null,
  removal_reason: null,
  thumbnail_width: 140,
  subreddit: "europe",
  selftext_html: null,
  selftext: "",
  likes: null,
  suggested_sort: null,
  user_reports: [ ],
  secure_media: null,
  is_reddit_media_domain: true,
  saved: false,
  id: "89o063",
  banned_at_utc: null,
  mod_reason_title: null,
  view_count: null,
  archived: false,
  clicked: false,
  no_follow: false,
  author: "Iaresomeone",
  num_crossposts: 2,
  link_flair_text: null,
  mod_reports: [ ],
  can_mod_post: false,
  is_crosspostable: false,
  pinned: false,
  score: 12529,
  approved_by: null,
  over_18: false,
  report_reasons: null,
  domain: "i.redd.it",
  hidden: false,
  preview: {
  images: [
  {
  source: {
  url: "https://i.redditmedia.com/01-wwp5NRbqjYwo-DtFRFQyE36oswFRyb-272CAlE-0.gif?fm=jpg&amp;s=46d208885eca54312477d3de6090c0a2",
  width: 1160,
  height: 726
  },
  resolutions: [
  {
  url: "https://i.redditmedia.com/01-wwp5NRbqjYwo-DtFRFQyE36oswFRyb-272CAlE-0.gif?fit=crop&amp;crop=faces%2Centropy&amp;arh=2&amp;w=108&amp;fm=jpg&amp;s=d4029606286b707e80f86efa4ea2cfdb",
  width: 108,
  height: 67
  },
  {
  url: "https://i.redditmedia.com/01-wwp5NRbqjYwo-DtFRFQyE36oswFRyb-272CAlE-0.gif?fit=crop&amp;crop=faces%2Centropy&amp;arh=2&amp;w=216&amp;fm=jpg&amp;s=67c08be48b0c3bd828a06a5570e01cc8",
  width: 216,
  height: 135
  },
  {
  url: "https://i.redditmedia.com/01-wwp5NRbqjYwo-DtFRFQyE36oswFRyb-272CAlE-0.gif?fit=crop&amp;crop=faces%2Centropy&amp;arh=2&amp;w=320&amp;fm=jpg&amp;s=c2e3bb4c807a355ab12d078ae2c1a041",
  width: 320,
  height: 200
  },
  {
  url: "https://i.redditmedia.com/01-wwp5NRbqjYwo-DtFRFQyE36oswFRyb-272CAlE-0.gif?fit=crop&amp;crop=faces%2Centropy&amp;arh=2&amp;w=640&amp;fm=jpg&amp;s=207fb40eff2b210b8c4ad08c2892d19f",
  width: 640,
  height: 400
  },
  {
  url: "https://i.redditmedia.com/01-wwp5NRbqjYwo-DtFRFQyE36oswFRyb-272CAlE-0.gif?fit=crop&amp;crop=faces%2Centropy&amp;arh=2&amp;w=960&amp;fm=jpg&amp;s=086786a205561d5801d85208e9da1dbe",
  width: 960,
  height: 600
  },
  {
  url: "https://i.redditmedia.com/01-wwp5NRbqjYwo-DtFRFQyE36oswFRyb-272CAlE-0.gif?fit=crop&amp;crop=faces%2Centropy&amp;arh=2&amp;w=1080&amp;fm=jpg&amp;s=fbe8d7cdc3a60b509ac6a11911bb5c57",
  width: 1080,
  height: 675
  }
  ],
  variants: {
  gif: {
  source: {
  url: "https://g.redditmedia.com/01-wwp5NRbqjYwo-DtFRFQyE36oswFRyb-272CAlE-0.gif?s=80f1d44dcd9f5aede4854dd9458d822d",
  width: 1160,
  height: 726
  },
  resolutions: [
  {
  url: "https://g.redditmedia.com/01-wwp5NRbqjYwo-DtFRFQyE36oswFRyb-272CAlE-0.gif?fit=crop&amp;crop=faces%2Centropy&amp;arh=2&amp;w=108&amp;s=cf9cc1e74df0cfe5d1d42fd12e52e41a",
  width: 108,
  height: 67
  },
  {
  url: "https://g.redditmedia.com/01-wwp5NRbqjYwo-DtFRFQyE36oswFRyb-272CAlE-0.gif?fit=crop&amp;crop=faces%2Centropy&amp;arh=2&amp;w=216&amp;s=f53df5cd9e952877c9c0064de5c805fa",
  width: 216,
  height: 135
  },
  {
  url: "https://g.redditmedia.com/01-wwp5NRbqjYwo-DtFRFQyE36oswFRyb-272CAlE-0.gif?fit=crop&amp;crop=faces%2Centropy&amp;arh=2&amp;w=320&amp;s=0625da558d5987b77138128bd2e7366a",
  width: 320,
  height: 200
  },
  {
  url: "https://g.redditmedia.com/01-wwp5NRbqjYwo-DtFRFQyE36oswFRyb-272CAlE-0.gif?fit=crop&amp;crop=faces%2Centropy&amp;arh=2&amp;w=640&amp;s=7f1bde0fbd5142e32124f748666da551",
  width: 640,
  height: 400
  },
  {
  url: "https://g.redditmedia.com/01-wwp5NRbqjYwo-DtFRFQyE36oswFRyb-272CAlE-0.gif?fit=crop&amp;crop=faces%2Centropy&amp;arh=2&amp;w=960&amp;s=bcb93447cbf3d75d5933a0e0d8d7e5c1",
  width: 960,
  height: 600
  },
  {
  url: "https://g.redditmedia.com/01-wwp5NRbqjYwo-DtFRFQyE36oswFRyb-272CAlE-0.gif?fit=crop&amp;crop=faces%2Centropy&amp;arh=2&amp;w=1080&amp;s=6d45e3065c87f069784b58f62922a8c7",
  width: 1080,
  height: 675
  }
  ]
  },
  mp4: {
  source: {
  url: "https://g.redditmedia.com/01-wwp5NRbqjYwo-DtFRFQyE36oswFRyb-272CAlE-0.gif?fm=mp4&amp;mp4-fragmented=false&amp;s=5751c85777cc4b75bbc44b6fa135d235",
  width: 1160,
  height: 726
  },
  resolutions: [
  {
  url: "https://g.redditmedia.com/01-wwp5NRbqjYwo-DtFRFQyE36oswFRyb-272CAlE-0.gif?fit=crop&amp;crop=faces%2Centropy&amp;arh=2&amp;w=108&amp;fm=mp4&amp;mp4-fragmented=false&amp;s=c04d3f10d6f613236126af8c28389c93",
  width: 108,
  height: 67
  },
  {
  url: "https://g.redditmedia.com/01-wwp5NRbqjYwo-DtFRFQyE36oswFRyb-272CAlE-0.gif?fit=crop&amp;crop=faces%2Centropy&amp;arh=2&amp;w=216&amp;fm=mp4&amp;mp4-fragmented=false&amp;s=71c5289e1d52976d92531d3f83cb8c61",
  width: 216,
  height: 135
  },
  {
  url: "https://g.redditmedia.com/01-wwp5NRbqjYwo-DtFRFQyE36oswFRyb-272CAlE-0.gif?fit=crop&amp;crop=faces%2Centropy&amp;arh=2&amp;w=320&amp;fm=mp4&amp;mp4-fragmented=false&amp;s=2458e81bd615f65741e4e06f9ac8e133",
  width: 320,
  height: 200
  },
  {
  url: "https://g.redditmedia.com/01-wwp5NRbqjYwo-DtFRFQyE36oswFRyb-272CAlE-0.gif?fit=crop&amp;crop=faces%2Centropy&amp;arh=2&amp;w=640&amp;fm=mp4&amp;mp4-fragmented=false&amp;s=332e9c4e8314ed1585fea02208a17bf7",
  width: 640,
  height: 400
  },
  {
  url: "https://g.redditmedia.com/01-wwp5NRbqjYwo-DtFRFQyE36oswFRyb-272CAlE-0.gif?fit=crop&amp;crop=faces%2Centropy&amp;arh=2&amp;w=960&amp;fm=mp4&amp;mp4-fragmented=false&amp;s=3169a538e3c3309f884276ade90f2c74",
  width: 960,
  height: 600
  },
  {
  url: "https://g.redditmedia.com/01-wwp5NRbqjYwo-DtFRFQyE36oswFRyb-272CAlE-0.gif?fit=crop&amp;crop=faces%2Centropy&amp;arh=2&amp;w=1080&amp;fm=mp4&amp;mp4-fragmented=false&amp;s=39eacd33df7c0d0812a88e1ab6c68f24",
  width: 1080,
  height: 675
  }
  ]
  }
  },
  id: "YVWhiqFSVFcd_XSoeq4E8teUuj11GJ4_SMCgwXopw84"
  }
  ],
  enabled: true
  },
  thumbnail: "https://b.thumbs.redditmedia.com/ROOWe1z8jKNi6D4nsMkV-AWl-1n4JgZMvW3t8IhEQBU.jpg",
  edited: false,
  link_flair_css_class: null,
  author_flair_css_class: null,
  contest_mode: false,
  gilded: 0,
  downs: 0,
  brand_safe: true,
  secure_media_embed: { },
  media_embed: { },
  post_hint: "image",
  author_flair_text: null,
  stickied: false,
  visited: false,
  can_gild: false,
  thumbnail_height: 87,
  parent_whitelist_status: "all_ads",
  name: "t3_89o063",
  spoiler: false,
  permalink: "/r/europe/comments/89o063/every_single_time_you_try_to_teach_americans/",
  subreddit_type: "public",
  locked: false,
  hide_score: false,
  created: 1522863259,
  url: "https://i.redd.it/rk2e8h503vp01.gif",
  whitelist_status: "all_ads",
  quarantine: false,
  subreddit_subscribers: 1682866,
  created_utc: 1522834459,
  subreddit_name_prefixed: "r/europe",
  ups: 12529,
  media: null,
  num_comments: 1332,
  is_self: false,
  title: "Every single time you try to teach Americans about sweden . . .",
  mod_note: null,
  is_video: false,
  distinguished: null
  }
  ],
  user_reports: [ ],
  secure_media: null,
  is_reddit_media_domain: true,
  saved: false,
  id: "89ofsn",
  banned_at_utc: null,
  mod_reason_title: null,
  view_count: null,
  archived: false,
  clicked: false,
  no_follow: false,
  author: "mnotme",
  num_crossposts: 0,
  link_flair_text: null,
  mod_reports: [ ],
  can_mod_post: false,
  is_crosspostable: false,
  pinned: false,
  score: 892,
  approved_by: null,
  over_18: false,
  domain: "i.redd.it",
  hidden: false,
  preview: {
  images: [
  {
  source: {
  url: "https://i.redditmedia.com/01-wwp5NRbqjYwo-DtFRFQyE36oswFRyb-272CAlE-0.gif?fm=jpg&amp;s=46d208885eca54312477d3de6090c0a2",
  width: 1160,
  height: 726
  },
  resolutions: [
  {
  url: "https://i.redditmedia.com/01-wwp5NRbqjYwo-DtFRFQyE36oswFRyb-272CAlE-0.gif?fit=crop&amp;crop=faces%2Centropy&amp;arh=2&amp;w=108&amp;fm=jpg&amp;s=d4029606286b707e80f86efa4ea2cfdb",
  width: 108,
  height: 67
  },
  {
  url: "https://i.redditmedia.com/01-wwp5NRbqjYwo-DtFRFQyE36oswFRyb-272CAlE-0.gif?fit=crop&amp;crop=faces%2Centropy&amp;arh=2&amp;w=216&amp;fm=jpg&amp;s=67c08be48b0c3bd828a06a5570e01cc8",
  width: 216,
  height: 135
  },
  {
  url: "https://i.redditmedia.com/01-wwp5NRbqjYwo-DtFRFQyE36oswFRyb-272CAlE-0.gif?fit=crop&amp;crop=faces%2Centropy&amp;arh=2&amp;w=320&amp;fm=jpg&amp;s=c2e3bb4c807a355ab12d078ae2c1a041",
  width: 320,
  height: 200
  },
  {
  url: "https://i.redditmedia.com/01-wwp5NRbqjYwo-DtFRFQyE36oswFRyb-272CAlE-0.gif?fit=crop&amp;crop=faces%2Centropy&amp;arh=2&amp;w=640&amp;fm=jpg&amp;s=207fb40eff2b210b8c4ad08c2892d19f",
  width: 640,
  height: 400
  },
  {
  url: "https://i.redditmedia.com/01-wwp5NRbqjYwo-DtFRFQyE36oswFRyb-272CAlE-0.gif?fit=crop&amp;crop=faces%2Centropy&amp;arh=2&amp;w=960&amp;fm=jpg&amp;s=086786a205561d5801d85208e9da1dbe",
  width: 960,
  height: 600
  },
  {
  url: "https://i.redditmedia.com/01-wwp5NRbqjYwo-DtFRFQyE36oswFRyb-272CAlE-0.gif?fit=crop&amp;crop=faces%2Centropy&amp;arh=2&amp;w=1080&amp;fm=jpg&amp;s=fbe8d7cdc3a60b509ac6a11911bb5c57",
  width: 1080,
  height: 675
  }
  ],
  variants: {
  gif: {
  source: {
  url: "https://g.redditmedia.com/01-wwp5NRbqjYwo-DtFRFQyE36oswFRyb-272CAlE-0.gif?s=80f1d44dcd9f5aede4854dd9458d822d",
  width: 1160,
  height: 726
  },
  resolutions: [
  {
  url: "https://g.redditmedia.com/01-wwp5NRbqjYwo-DtFRFQyE36oswFRyb-272CAlE-0.gif?fit=crop&amp;crop=faces%2Centropy&amp;arh=2&amp;w=108&amp;s=cf9cc1e74df0cfe5d1d42fd12e52e41a",
  width: 108,
  height: 67
  },
  {
  url: "https://g.redditmedia.com/01-wwp5NRbqjYwo-DtFRFQyE36oswFRyb-272CAlE-0.gif?fit=crop&amp;crop=faces%2Centropy&amp;arh=2&amp;w=216&amp;s=f53df5cd9e952877c9c0064de5c805fa",
  width: 216,
  height: 135
  },
  {
  url: "https://g.redditmedia.com/01-wwp5NRbqjYwo-DtFRFQyE36oswFRyb-272CAlE-0.gif?fit=crop&amp;crop=faces%2Centropy&amp;arh=2&amp;w=320&amp;s=0625da558d5987b77138128bd2e7366a",
  width: 320,
  height: 200
  },
  {
  url: "https://g.redditmedia.com/01-wwp5NRbqjYwo-DtFRFQyE36oswFRyb-272CAlE-0.gif?fit=crop&amp;crop=faces%2Centropy&amp;arh=2&amp;w=640&amp;s=7f1bde0fbd5142e32124f748666da551",
  width: 640,
  height: 400
  },
  {
  url: "https://g.redditmedia.com/01-wwp5NRbqjYwo-DtFRFQyE36oswFRyb-272CAlE-0.gif?fit=crop&amp;crop=faces%2Centropy&amp;arh=2&amp;w=960&amp;s=bcb93447cbf3d75d5933a0e0d8d7e5c1",
  width: 960,
  height: 600
  },
  {
  url: "https://g.redditmedia.com/01-wwp5NRbqjYwo-DtFRFQyE36oswFRyb-272CAlE-0.gif?fit=crop&amp;crop=faces%2Centropy&amp;arh=2&amp;w=1080&amp;s=6d45e3065c87f069784b58f62922a8c7",
  width: 1080,
  height: 675
  }
  ]
  },
  mp4: {
  source: {
  url: "https://g.redditmedia.com/01-wwp5NRbqjYwo-DtFRFQyE36oswFRyb-272CAlE-0.gif?fm=mp4&amp;mp4-fragmented=false&amp;s=5751c85777cc4b75bbc44b6fa135d235",
  width: 1160,
  height: 726
  },
  resolutions: [
  {
  url: "https://g.redditmedia.com/01-wwp5NRbqjYwo-DtFRFQyE36oswFRyb-272CAlE-0.gif?fit=crop&amp;crop=faces%2Centropy&amp;arh=2&amp;w=108&amp;fm=mp4&amp;mp4-fragmented=false&amp;s=c04d3f10d6f613236126af8c28389c93",
  width: 108,
  height: 67
  },
  {
  url: "https://g.redditmedia.com/01-wwp5NRbqjYwo-DtFRFQyE36oswFRyb-272CAlE-0.gif?fit=crop&amp;crop=faces%2Centropy&amp;arh=2&amp;w=216&amp;fm=mp4&amp;mp4-fragmented=false&amp;s=71c5289e1d52976d92531d3f83cb8c61",
  width: 216,
  height: 135
  },
  {
  url: "https://g.redditmedia.com/01-wwp5NRbqjYwo-DtFRFQyE36oswFRyb-272CAlE-0.gif?fit=crop&amp;crop=faces%2Centropy&amp;arh=2&amp;w=320&amp;fm=mp4&amp;mp4-fragmented=false&amp;s=2458e81bd615f65741e4e06f9ac8e133",
  width: 320,
  height: 200
  },
  {
  url: "https://g.redditmedia.com/01-wwp5NRbqjYwo-DtFRFQyE36oswFRyb-272CAlE-0.gif?fit=crop&amp;crop=faces%2Centropy&amp;arh=2&amp;w=640&amp;fm=mp4&amp;mp4-fragmented=false&amp;s=332e9c4e8314ed1585fea02208a17bf7",
  width: 640,
  height: 400
  },
  {
  url: "https://g.redditmedia.com/01-wwp5NRbqjYwo-DtFRFQyE36oswFRyb-272CAlE-0.gif?fit=crop&amp;crop=faces%2Centropy&amp;arh=2&amp;w=960&amp;fm=mp4&amp;mp4-fragmented=false&amp;s=3169a538e3c3309f884276ade90f2c74",
  width: 960,
  height: 600
  },
  {
  url: "https://g.redditmedia.com/01-wwp5NRbqjYwo-DtFRFQyE36oswFRyb-272CAlE-0.gif?fit=crop&amp;crop=faces%2Centropy&amp;arh=2&amp;w=1080&amp;fm=mp4&amp;mp4-fragmented=false&amp;s=39eacd33df7c0d0812a88e1ab6c68f24",
  width: 1080,
  height: 675
  }
  ]
  }
  },
  id: "YVWhiqFSVFcd_XSoeq4E8teUuj11GJ4_SMCgwXopw84"
  }
  ],
  enabled: true
  },
  thumbnail: "https://b.thumbs.redditmedia.com/ROOWe1z8jKNi6D4nsMkV-AWl-1n4JgZMvW3t8IhEQBU.jpg",
  edited: false,
  link_flair_css_class: null,
  author_flair_css_class: "flag other",
  contest_mode: false,
  gilded: 0,
  downs: 0,
  brand_safe: true,
  secure_media_embed: { },
  media_embed: { },
  post_hint: "image",
  author_flair_text: "Annat/Other",
  stickied: false,
  visited: false,
  can_gild: false,
  thumbnail_height: 87,
  name: "t3_89ofsn",
  parent_whitelist_status: "all_ads",
  hide_score: false,
  crosspost_parent: "t3_89o063",
  spoiler: false,
  permalink: "/r/sweden/comments/89ofsn/every_single_time_you_try_to_teach_americans/",
  subreddit_type: "public",
  locked: false,
  report_reasons: null,
  created: 1522868206,
  url: "https://i.redd.it/rk2e8h503vp01.gif",
  whitelist_status: "all_ads",
  quarantine: false,
  subreddit_subscribers: 195848,
  created_utc: 1522839406,
  subreddit_name_prefixed: "r/sweden",
  ups: 892,
  media: null,
  num_comments: 60,
  is_self: false,
  title: "Every single time you try to teach Americans about sweden . . .",
  mod_note: null,
  is_video: false,
  distinguished: null
  }
  },
  {
  kind: "t3",
  data: {
  subreddit_id: "t5_2qofe",
  approved_at_utc: null,
  send_replies: true,
  mod_reason_by: null,
  banned_by: null,
  num_reports: null,
  removal_reason: null,
  thumbnail_width: 140,
  subreddit: "sweden",
  selftext_html: null,
  selftext: "",
  likes: null,
  suggested_sort: null,
  user_reports: [ ],
  secure_media: null,
  is_reddit_media_domain: false,
  saved: false,
  id: "89bohr",
  banned_at_utc: null,
  mod_reason_title: null,
  view_count: null,
  archived: false,
  clicked: false,
  no_follow: false,
  author: "Ollad",
  num_crossposts: 0,
  link_flair_text: "Nyhet",
  mod_reports: [ ],
  can_mod_post: false,
  is_crosspostable: false,
  pinned: false,
  score: 965,
  approved_by: null,
  over_18: false,
  report_reasons: null,
  domain: "aftonbladet.se",
  hidden: false,
  preview: {
  images: [
  {
  source: {
  url: "https://i.redditmedia.com/uMqyJr1nwzXK9ejnkizRHjaLSiIT19M5GxEyIAX15rs.jpg?s=a2d1842a0315c49c11fe17e087513058",
  width: 952,
  height: 498
  },
  resolutions: [
  {
  url: "https://i.redditmedia.com/uMqyJr1nwzXK9ejnkizRHjaLSiIT19M5GxEyIAX15rs.jpg?fit=crop&amp;crop=faces%2Centropy&amp;arh=2&amp;w=108&amp;s=08e48ff662a83d046fcf65a79b40e55f",
  width: 108,
  height: 56
  },
  {
  url: "https://i.redditmedia.com/uMqyJr1nwzXK9ejnkizRHjaLSiIT19M5GxEyIAX15rs.jpg?fit=crop&amp;crop=faces%2Centropy&amp;arh=2&amp;w=216&amp;s=1574d4e901a48b60d2e59869f995120b",
  width: 216,
  height: 112
  },
  {
  url: "https://i.redditmedia.com/uMqyJr1nwzXK9ejnkizRHjaLSiIT19M5GxEyIAX15rs.jpg?fit=crop&amp;crop=faces%2Centropy&amp;arh=2&amp;w=320&amp;s=6f8dc8295a7db7733d92aba784eabfda",
  width: 320,
  height: 167
  },
  {
  url: "https://i.redditmedia.com/uMqyJr1nwzXK9ejnkizRHjaLSiIT19M5GxEyIAX15rs.jpg?fit=crop&amp;crop=faces%2Centropy&amp;arh=2&amp;w=640&amp;s=80af0839df3ba90fc49451da4e6675a1",
  width: 640,
  height: 334
  }
  ],
  variants: { },
  id: "bVA9l5crWn5uSenSnzSB_cnUlnEIz7I1jdszMhIpcGQ"
  }
  ],
  enabled: false
  },
  thumbnail: "https://a.thumbs.redditmedia.com/LReg0ChxThIlAunOvCYIu-WVMHzbNFJefhDyfY32Bb4.jpg",
  edited: false,
  link_flair_css_class: "category news",
  author_flair_css_class: "flag se",
  contest_mode: false,
  gilded: 0,
  downs: 0,
  brand_safe: true,
  secure_media_embed: { },
  media_embed: { },
  post_hint: "link",
  author_flair_text: "Sverige",
  stickied: false,
  visited: false,
  can_gild: false,
  thumbnail_height: 73,
  parent_whitelist_status: "all_ads",
  name: "t3_89bohr",
  spoiler: false,
  permalink: "/r/sweden/comments/89bohr/lillbabs_är_död_blev_80_år/",
  subreddit_type: "public",
  locked: false,
  hide_score: false,
  created: 1522774439,
  url: "https://www.aftonbladet.se/a/VRp1ad",
  whitelist_status: "all_ads",
  quarantine: false,
  subreddit_subscribers: 195848,
  created_utc: 1522745639,
  subreddit_name_prefixed: "r/sweden",
  ups: 965,
  media: null,
  num_comments: 99,
  is_self: false,
  title: "Lill-Babs är död - blev 80 år",
  mod_note: null,
  is_video: false,
  distinguished: null
  }
  }
  ],
  before: null
  }
  };
*/