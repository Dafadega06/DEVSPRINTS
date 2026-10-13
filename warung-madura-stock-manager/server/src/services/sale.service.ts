import { mockStore } from '../lib/mock-store';
import type { SaleDetailDto, SaleSummaryDto } from '../types/dto';
import type { CreateSaleInput } from '../validators/sale.validator';

export const saleSummaryInclude = {
  _count: { select: { items: true } },
};

export async function listSales(): Promise<SaleSummaryDto[]> {
  return mockStore.listSales();
}

export async function getSale(id: string): Promise<SaleDetailDto> {
  return mockStore.getSale(id);
}

export async function createSale(input: CreateSaleInput): Promise<SaleDetailDto> {
  return mockStore.createSale(input);
}
