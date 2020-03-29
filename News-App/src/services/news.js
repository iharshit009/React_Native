import React from 'react';
import {orderBy} from 'lodash';
import {api_key, language, category, articles_url, country} from '../config/rest_config';

export async function getArticles(){

  try{
    let articles = await fetch(`${articles_url}?category=${category}&country=${country}&language=${language}`,{
      headers:{
        'X-API-KEY':api_key
      }
    });
    let result = await articles.json();
    articles = null;
    return orderBy(result.articles, 'publishedAt','desc');
  } catch(error){
    throw error;
  }
}
