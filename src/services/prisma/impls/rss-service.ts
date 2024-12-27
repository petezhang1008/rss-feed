import { inject, injectable } from "inversify";
import { RssService, ServiceCreateRssParams } from "../rss-service";
import {
    CreateRssParams,
    GetRssByTypeWebsiteSelectorParams,
    PaginationRssListParams,
    QueryRssListParams,
    RssModel,
    UpdateRssParams
} from "@/models/rss-model";
import { RssGeneratorType } from "@/enums/rss";
import { FeedModel } from "@/models/feed-model";
import { HtmlParserService, WebsiteInfo } from "@/services/website-parser/html-parser-service";
import { RssInfo, XmlParserService } from "@/services/website-parser/xml-parser-service";

@injectable()
export class RssServiceImpl implements RssService {
    constructor(
        @inject(RssModel)
        private _rssModel: RssModel,
        @inject(XmlParserService)
        private _xmlParserService: XmlParserService,
        @inject(HtmlParserService)
        private _htmlParserService: HtmlParserService,
        @inject(FeedModel)
        private _feedModel: FeedModel
    ) {
    }
    getRss(id: string) {
        return this._rssModel.getRss(id)
    }
    getRssDetail(id: string) {
        return this._rssModel.getRssDetail(id)
    }
    async createRss(data: ServiceCreateRssParams) {
        let rssInfo: RssInfo | null = null;
        let info: WebsiteInfo | null = null
        if (data.type === RssGeneratorType.RSS) {
            rssInfo = await this._xmlParserService.getRssInfo(data.website)
            if (rssInfo.link) {
                info = await this._htmlParserService.getWebsiteInfo(rssInfo.link)
            }

        } else {
            info = await this._htmlParserService.getWebsiteInfo(data.website)
        }

        const _data: CreateRssParams = {
            ...data,
            title: info?.title || rssInfo?.title || '',
            description: info?.description || rssInfo?.description || '',
            image: info?.image || rssInfo?.image || info?.icon || '',
            author: info?.author || rssInfo?.author || '',
            keywords: info?.keywords || rssInfo?.keywords || '',
            link: rssInfo?.link || '',
        }
        if (!_data.title) {
            throw new Error('Title is required')
        }
        return this._rssModel.createRss(_data)
    }
    getRssByTypeWebsiteSelector(data: GetRssByTypeWebsiteSelectorParams) {
        return this._rssModel.getRssByTypeWebsiteSelector(data)
    }
    updateRss(id: string, data: UpdateRssParams) {
        return this._rssModel.updateRss(id, data)
    }
    queryRssList(data: PaginationRssListParams) {
        return this._rssModel.queryRssList(data)
    }
    queryAllRssList(data: QueryRssListParams) {
        return this._rssModel.queryAllRssList(data)
    }
    getFavoriteRssList(count: number) {
        return this._rssModel.getFavoriteRssList(count)
    }
}
