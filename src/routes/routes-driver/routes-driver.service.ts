import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class RoutesDriverService {
  constructor(private readonly prisma: PrismaService) {}

  processRoute(dto: { route_id: string; lat: number; lng: number }) {
    return this.prisma.routeDriver.upsert({
      include: { route: true },
      where: { routeId: dto.route_id },
      create: {
        routeId: dto.route_id,
        points: {
          set: { location: { lat: dto.lat, lng: dto.lng } },
        },
      },
      update: {
        points: {
          push: { location: { lat: dto.lat, lng: dto.lng } },
        },
      },
    });
  }
}
