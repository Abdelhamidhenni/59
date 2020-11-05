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
    description: 'Get municipality',
  })
  @ApiOkResponse({ description: 'Successful operation' })
  async getMunicipalityResult(@Param('id') id: number): Promise<Municipality> {
    return this.service.findOne(id);
  }

  @Get('/search/:name')
  @ApiOperation({
    operationId: 'GET /municipalities/search/:name',
    description: 'Get 10 municipalities according to name params',
  })
  @ApiOkResponse({ description: 'Successful operation' })
  async findWithName(@Param('name') name: string): Promise<Municipality[]> {
    return this.service.findWithName(name);
  }
}
