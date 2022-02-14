class OriginService {
    constructor(originModel) {
        this.originModel = originModel;
    }
    
    async findOrigin(url) {
        const foundOrigin = await this.originModel.findOne({
            where: {
              url
            }
        });
        return foundOrigin;
    }

    async findAllOrigin() {
        const foundOrigins = await this.originModel.findAll();
        return foundOrigins;
    }
};

module.exports = OriginService;
