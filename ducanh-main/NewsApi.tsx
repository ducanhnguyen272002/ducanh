import { fetcher } from "../Fetcher";
import store from "../../redux/store";
import axios, { AxiosResponse } from "axios";
import Config from "../../config";

export interface INews {
  id?: number;
  topic: string;
  date: string;
  detail: string;
  imageUri?: string;
}

const path = {
  createNews: "/news/create",
  getNewsList: "/news",
  deleteNews: (id: number) => `/news/${id}`,
};

function createNews(body: INews): Promise<INews> {
  return fetcher({ url: path.createNews, method: "post", data: body });
}

function getNewsList(): Promise<INews[]> {
  return fetcher({ url: path.getNewsList, method: "get" });
}

function deleteNews(id: number): Promise<void> {
  return fetcher({ url: path.deleteNews(id), method: "delete" });
}

export default {
  createNews,
  getNewsList,
  deleteNews,
};
