import { Controller, Get, Param } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { MunicipalitiesService } from './municipalities.service';
import { Municipality } from './municipality.entity';

@ApiTags('Municipalities')
@Controller('municipalities')
export class MunicipalitiesController {
  constructor(private readonly service: MunicipalitiesService) {}
  @Get(':id')
  @ApiOperation({
    operationId: 'GET /municipalities/id',
    description: 'Get one municipality',
  })
  @ApiOkResponse({ description: 'Successful operation' })
  async getMunicipalityResult(@Param('id') id: number): Promise<any> {
    return this.service.findOne(id);
  }

  @Get()
  @ApiOperation({
    operationId: 'GET /municipalities',
    description: 'Get 100 municipalities',
  })
  @ApiOkResponse({ description: 'Successful operation' })
  async findFirstHundred(): Promise<Municipality[]> {
    return this.service.findFirstHundred();
  }
}
