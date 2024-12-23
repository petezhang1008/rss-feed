import { injectService } from "@/inversify.config";
import { PaginationUserRssParams } from "@/models/user-rss-model";
import { UrlFormateService } from "@/services/url-formate-service";
import { UserRssService } from "@/services/user-rss-service";


export default function useMyFeeds() {
    const userRssService = injectService<UserRssService>(UserRssService)

    function queryUserRssList(params: PaginationUserRssParams) {
        return userRssService.queryUserRssList(params)
    }

    const urlFormateService = injectService<UrlFormateService>(UrlFormateService)

    function getDomain(url: string) {
        return urlFormateService.getDomain(url)
    }

    return {
        queryUserRssList,
        getDomain
    }
}