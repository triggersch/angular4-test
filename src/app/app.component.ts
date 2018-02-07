import { Component } from '@angular/core';
import { Article } from './article/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  articles : Article[];

  constructor(){
    this.articles = [
      new Article('J2EE', 'http://javaee.org',3),
      new Article('C++', 'http://cplusplus.com',2),
      new Article('Jquery', 'http://www.jquery.org',1)
    ];
  }

  addArticle(title : HTMLInputElement, link: HTMLInputElement ):boolean {
    console.log(`ajout article: ${title.value} et un lien ${link.value}`);

    this.articles.push(new Article(title.value, link.value,0));
    title.value = '';
    link.value = '';
    return false;
  }

  sortedArticles() : Article[]{
    return this.articles.sort( (a: Article , b: Article  ) =>   b.votes - a.votes    );
  }
}
